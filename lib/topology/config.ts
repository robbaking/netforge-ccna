import type { TopoDevice, Topology } from './layout'

function formatVerifier(label: string, host: string) {
  return [
    `! --- Verifiering ---`,
    `! ${label}`,
    `! ping ${host}`,
  ].join('\n')
}

export function getDeviceConfig(device: TopoDevice, topo: Topology): string {
  const links = topo.links.filter(l => l.from === device.id || l.to === device.id)

  // ── Router ────────────────────────────────────────────────────────────────
  if (device.type === 'router') {
    const lines = [`hostname ${device.label}`, '!']

    links.forEach((l, i) => {
      const peer = topo.devices.find(d => d.id === (l.from === device.id ? l.to : l.from))
      lines.push(`interface GigabitEthernet0/${i}`)
      if (peer) lines.push(` description To-${peer.label}`)

      if (l.networkLabel) {
        const net = l.networkLabel.replace('/30', '')
        const host = l.from === device.id
          ? net.replace(/\d+$/, '1')
          : net.replace(/\d+$/, '2')
        lines.push(` ip address ${host} 255.255.255.252`)
      } else if (device.lanIp) {
        lines.push(` ip address ${device.lanIp} 255.255.255.0`)
      }
      lines.push(` no shutdown`, '!')
    })

    if (topo.protocol === 'OSPF') {
      lines.push('router ospf 1')
      if (device.lanIp) {
        const lanNet = device.lanIp.replace(/\.\d+$/, '.0')
        lines.push(` network ${lanNet} 0.0.0.255 area 0`)
      }
      links.forEach(l => {
        if (l.networkLabel) {
          const net = l.networkLabel.split('/')[0]
          const area = l.area ? l.area.replace('Area ', '') : '0'
          lines.push(` network ${net} 0.0.0.3 area ${area}`)
        }
      })
      lines.push('!', '! --- Verifiering ---')
      lines.push('! show ip ospf neighbor')
      lines.push('! show ip route ospf')
      lines.push('! show ip ospf interface brief')
    } else if (topo.protocol === 'EIGRP') {
      lines.push('router eigrp 100', ' no auto-summary')
      if (device.lanIp) {
        const lanNet = device.lanIp.replace(/\.\d+$/, '.0')
        lines.push(` network ${lanNet} 0.0.0.255`)
      }
      links.forEach(l => {
        if (l.networkLabel) {
          const net = l.networkLabel.split('/')[0]
          lines.push(` network ${net} 0.0.0.3`)
        }
      })
      lines.push('!', '! --- Verifiering ---')
      lines.push('! show ip eigrp neighbors')
      lines.push('! show ip route eigrp')
    } else if (topo.protocol === 'NAT') {
      const outsideIdx = links.findIndex(l => l.area === 'Outside' || l.networkLabel)
      const insideIdx  = links.findIndex(l => l.area === 'Inside'  || !l.networkLabel)
      lines.push(
        '! NAT Overload (PAT)',
        `interface GigabitEthernet0/${outsideIdx >= 0 ? outsideIdx : 0}`,
        ` ip nat outside`,
        `!`,
        `interface GigabitEthernet0/${insideIdx >= 0 ? insideIdx : 1}`,
        ` ip nat inside`,
        `!`,
        `access-list 1 permit ${device.lanIp ? device.lanIp.replace(/\.\d+$/, '.0') : '192.168.0.0'} 0.0.0.255`,
        `!`,
        `ip nat inside source list 1 interface GigabitEthernet0/${outsideIdx >= 0 ? outsideIdx : 0} overload`,
        `!`, '! --- Verifiering ---',
        '! show ip nat translations',
        '! show ip nat statistics',
      )
    } else if (topo.protocol === 'ACLs' && device.label.includes('ACL')) {
      lines.push(
        '! Extended ACL — anpassa IP till scenariot',
        'ip access-list extended FILTER',
        ` deny ip host <käll-IP> host <dest-IP>`,
        ' permit ip any any',
        '!',
        'interface GigabitEthernet0/0',
        ' ip access-group FILTER in',
        '!', '! --- Verifiering ---',
        '! show access-lists',
        '! show ip interface GigabitEthernet0/0',
      )
    } else if (topo.protocol === 'VLANs') {
      const trunkLink = links.find(l => l.area === 'Trunk')
      if (trunkLink) {
        const trunkIdx = links.indexOf(trunkLink)
        lines.push(
          `interface GigabitEthernet0/${trunkIdx}`,
          ` no ip address`,
          ` no shutdown`,
          `!`,
          `interface GigabitEthernet0/${trunkIdx}.10`,
          ` encapsulation dot1Q 10`,
          ` ip address ${device.ip ?? '192.168.10.1'} 255.255.255.0`,
          `!`,
          `interface GigabitEthernet0/${trunkIdx}.20`,
          ` encapsulation dot1Q 20`,
          ` ip address ${device.lanIp ?? '192.168.20.1'} 255.255.255.0`,
          `!`, '! --- Verifiering ---',
          '! show ip route',
          '! show interfaces GigabitEthernet0/0.10',
        )
      }
    }
    return lines.join('\n')
  }

  // ── Switch L2 / L3 ───────────────────────────────────────────────────────
  if (device.type === 'switchL2' || device.type === 'switchL3') {
    const lines = [`hostname ${device.label}`, '!']

    if (topo.protocol === 'STP') {
      if (device.label.includes('Root')) {
        lines.push('spanning-tree vlan 1 priority 4096', '!')
      } else {
        lines.push('! STP körs automatiskt — standardprioritet 32768', '!')
      }
      lines.push('! --- Verifiering ---')
      lines.push('! show spanning-tree')
      lines.push('! show spanning-tree vlan 1 detail')
    } else if (topo.protocol === 'VLANs') {
      lines.push('vlan 10', ' name VLAN_10', '!', 'vlan 20', ' name VLAN_20', '!')
      if (device.type === 'switchL3') {
        lines.push('ip routing', '!')
        if (device.ip) {
          lines.push(
            'interface Vlan10',
            ` ip address ${device.ip} 255.255.255.0`,
            ' no shutdown', '!',
          )
        }
        if (device.lanIp) {
          lines.push(
            'interface Vlan20',
            ` ip address ${device.lanIp} 255.255.255.0`,
            ' no shutdown', '!',
          )
        }
      }
      const trunkLinks = links.filter(l => l.area === 'Trunk')
      trunkLinks.forEach((_l, i) => {
        lines.push(
          `interface GigabitEthernet0/${i + 24}`,
          ` switchport mode trunk`,
          ` switchport trunk allowed vlan 10,20`,
          `!`,
        )
      })
      const hostLinks = links.filter(l => {
        if (l.area === 'Trunk') return false
        const peerId = l.from === device.id ? l.to : l.from
        const peer = topo.devices.find(d => d.id === peerId)
        return peer?.type === 'pc' || peer?.type === 'server'
      })
      hostLinks.forEach((l, i) => {
        const vlan = l.area?.includes('20') ? 20 : 10
        lines.push(
          `interface GigabitEthernet0/${i + 1}`,
          ` switchport mode access`,
          ` switchport access vlan ${vlan}`,
          ` spanning-tree portfast`,
          `!`,
        )
      })
      lines.push('! --- Verifiering ---')
      lines.push('! show vlan brief')
      lines.push('! show interfaces trunk')
    } else if (device.type === 'switchL3' && device.ip) {
      lines.push('ip routing', '!')
      lines.push('interface Vlan1', ` ip address ${device.ip} 255.255.255.0`, ' no shutdown', '!')
    }
    return lines.join('\n')
  }

  // ── PC / Server ────────────────────────────────────────────────────────────
  if (device.type === 'pc' || device.type === 'server') {
    const ipParts = (device.ip ?? '').split('.')
    const gw = ipParts.length === 4 ? `${ipParts[0]}.${ipParts[1]}.${ipParts[2]}.1` : '<gateway>'
    return [
      `! ${device.label} — Statisk IP (Packet Tracer)`,
      `!`,
      `! Desktop > IP Configuration > Static`,
      `! IP Address  : ${device.ip ?? '<Se topologi>'}`,
      `! Subnet Mask : 255.255.255.0`,
      `! Default GW  : ${gw}`,
      `! DNS Server  : (valfritt)`,
      `!`,
      `! Verifiera anslutning:`,
      `! ping ${gw}`,
    ].join('\n')
  }

  // ── Firewall ───────────────────────────────────────────────────────────────
  if (device.type === 'firewall') {
    return [
      `hostname ${device.label}`, '!',
      'interface GigabitEthernet0/0',
      ' nameif outside', ' security-level 0',
      ' ip address dhcp setroute', ' no shutdown', '!',
      'interface GigabitEthernet0/1',
      ' nameif inside', ' security-level 100',
      ` ip address ${device.ip ?? '10.0.0.254'} 255.255.255.252`,
      ' no shutdown', '!',
      'access-list OUTSIDE extended permit ip any any',
      'access-group OUTSIDE in interface outside',
      '!', '! --- Verifiering ---',
      '! show interface ip brief',
    ].join('\n')
  }

  // ── Cloud / ISP ────────────────────────────────────────────────────────────
  if (device.type === 'cloud') {
    return [
      `! ${device.label} — Extern nod (ISP/Internet)`,
      `!`,
      `! I Packet Tracer: använd ett Cloud-objekt`,
      `! eller en Router som simulerar ISP`,
      `! Ingen konfiguration krävs`,
    ].join('\n')
  }

  return `! ${device.label}\n! Ingen konfiguration krävs`
}
