export interface SubnetResult {
  network: string;
  broadcast: string;
  firstHost: string;
  lastHost: string;
  hosts: number;
  mask: string;
  maskBinary: string;
  wildcard: string;
  cidr: number;
}

export function calculateSubnet(ip: string, cidr: number): SubnetResult | null {
  if (cidr < 0 || cidr > 32) return null;
  const parts = ip.split(".").map(Number);
  if (parts.length !== 4 || parts.some((p) => isNaN(p) || p < 0 || p > 255)) return null;

  const ipInt = (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3];
  const maskInt = cidr === 0 ? 0 : (~0 << (32 - cidr)) >>> 0;
  const networkInt = (ipInt & maskInt) >>> 0;
  const broadcastInt = (networkInt | (~maskInt >>> 0)) >>> 0;
  const firstHostInt = cidr < 31 ? networkInt + 1 : networkInt;
  const lastHostInt = cidr < 31 ? broadcastInt - 1 : broadcastInt;
  const hosts = cidr >= 31 ? Math.pow(2, 32 - cidr) : Math.pow(2, 32 - cidr) - 2;

  return {
    network: intToIp(networkInt),
    broadcast: intToIp(broadcastInt),
    firstHost: intToIp(firstHostInt),
    lastHost: intToIp(lastHostInt),
    hosts: Math.max(0, hosts),
    mask: intToIp(maskInt),
    maskBinary: intToBinary(maskInt),
    wildcard: intToIp(~maskInt >>> 0),
    cidr,
  };
}

function intToIp(n: number): string {
  return [
    (n >>> 24) & 255,
    (n >>> 16) & 255,
    (n >>> 8) & 255,
    n & 255,
  ].join(".");
}

function intToBinary(n: number): string {
  const b = (n >>> 0).toString(2).padStart(32, "0");
  return [b.slice(0, 8), b.slice(8, 16), b.slice(16, 24), b.slice(24)].join(".");
}

export function randomSubnetQuestion(): { ip: string; cidr: number } {
  const cidrs = [24, 25, 26, 27, 28, 29, 30, 16, 20, 22, 23];
  const cidr = cidrs[Math.floor(Math.random() * cidrs.length)];
  const ip = [
    [10, 172, 192][Math.floor(Math.random() * 3)],
    Math.floor(Math.random() * 254) + 1,
    Math.floor(Math.random() * 254) + 1,
    Math.floor(Math.random() * 254) + 1,
  ].join(".");
  return { ip, cidr };
}
