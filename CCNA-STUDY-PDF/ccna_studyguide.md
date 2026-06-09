*CCNA Study Guide v2.71 – Aaron Balchunas*    
1 

**\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_**  

**Cisco CCNA Study Guide**    
**v2.71** © 2014   
**\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_**  

**Aaron Balchunas**    
aaron@routeralley.com   
http://www.routeralley.com 

**\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  *Foreword:***  

*This study guide is intended to provide those pursuing the CCNA  certification with a framework of what concepts need to be studied. This is  **not** a comprehensive document containing all the secrets of the CCNA, nor  is it a “braindump” of questions and answers.*  

*This document is freely given, and can be freely distributed. However, the  contents of this document **cannot** be altered, without my written consent.  Nor can this document be sold or published without my expressed consent.*  

*I sincerely hope that this document provides some assistance and clarity in  your studies.*  

**\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_** 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
2 

**Table of Contents**  

**Part I – General Networking Concepts**  

**Section 1 Introduction to Networking  Section 2 OSI Reference Model  Section 3 Ethernet Technologies  Section 4 Hubs vs. Switches vs. Routers  Section 5 STP**  

**Section 6 IPv4 Addressing and Subnetting  Section 7 TCP and UDP**  

**Section 8 IPv6 Addressing**    
**Section 9 Introduction to 802.11 Wireless  Part II – The Cisco IOS**  

**Section 10 Router Components**   
**Section 11 Introduction to the Cisco IOS  Section 12 Advanced IOS Functions**  

**Part III \- Routing**  

**Section 13 The Routing Table**    
**Section 14 Static vs. Dynamic Routing  Section 15 Classful vs. Classless Routing  Section 16 Configuring Static Routes  Section 17 RIPv1 & RIPv2**  

**Section 18 IGRP**    
**Section 19 EIGRP**    
**Section 20 OSPF**  

**Part IV – VLANs, Access-Lists, and Services**  

**Section 21 VLANs and VTP**    
**Section 22 Access-Lists**    
**Section 23 DNS and DHCP**  

**Part V \- WANs**  

**Section 24 Basic WAN Concepts  Section 25 PPP**  

**Section 26 Frame-Relay**    
**Section 27 NAT** 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
3 

**\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_**  

**Part I**  

***General Networking Concepts***  

**\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_** 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
4 

**Section 1**    
**\- Introduction to Networks \-**  

***What is a Network?*** 

Α **network** is simply defined as something that *connects* things together for  a specific purpose. The term *network* is used in a variety of contexts,  including telephone, television, computer, or even people networks.  

A **computer network** connects two or more devices together to share a  nearly limitless range of *information* and *services*, including:  • Documents  

• Email and messaging  

• Websites  

• Databases  

• Music  

• Printers and faxes  

• Telephony and videoconferencing  

**Protocols** are *rules* that govern how devices communicate and share  information across a network. Examples of protocols include:  • **IP –** Internet Protocol  

• **HTTP \-** Hyper Text Transfer Protocol  

• **SMTP –** Simple Mail Transfer Protocol  

Multiple protocols often work together to facilitate end-to-end network  communication, forming protocol **suites** or **stacks.** Protocols are covered in  great detail in other guides.  

**Network reference models** were developed to allow products from different  manufacturers to interoperate on a network. A network reference model  serves as a blueprint, detailing standards for how protocol communication  should occur.  

The **Open Systems Interconnect (OSI)** and **Department of Defense (DoD)**  models are the most widely recognized reference models. Both are covered  in great detail in another guide. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
5 

***Basic Network Types*** 

Network *types* are often defined by function or size. The two most common  categories of networks are:  

• **LANs (Local Area Networks)** 

• **WANs (Wide Area Networks)** 

A **LAN** is generally a high-speed network that covers a small geographic area, usually contained within a single building or campus. A LAN is  usually under the administrative control of a single organization. **Ethernet** is  the most common LAN technology.  

A **WAN** can be defined one of two ways. The *book definition* of a WAN is a  network that spans large geographical locations, usually to connect multiple  LANs. This is a general definition, and not always accurate.  

A more *practical definition* of a WAN is a network that traverses a public or  commercial carrier, using one of several *WAN technologies***.** A WAN is often  under the administrative control of several organizations (or *providers*), and  does not necessarily need to span large geographical distances.  

A **MAN (Metropolitan Area Network**) is another category of network,  though the term is not prevalently used. A MAN is defined as a network that  connects LAN’s across a city-wide geographic area.  

An **internetwork** is a general term describing multiple networks connected  together. The **Internet** is the largest and most well-known internetwork.  

Some networks are categorized by their *function*, as opposed to their *size*. A  **SAN (Storage Area Network)** provides systems with high-speed, lossless  access to high-capacity storage devices.  

A **VPN (Virtual Private Network**) allows for information to be securely  sent across a public or unsecure network, such as the Internet. Common uses  of a VPN are to connect branch offices or remote users to a main office. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
6 

***Network Architectures*** 

A **host** refers to any device that is connected to a network. A host can also  be defined as any device assigned a **network address**.  

A host can serve one or more functions:  

• A host can *request* data, often referred to as a **client.** 

• A host can *provide* data, often referred to as a **server.** 

• A host can both request *and* provide data, often referred to as a **peer.** 

Because of these varying functions, multiple network **architectures** have  been developed, including:  

• **Peer-to-Peer** 

• **Client/Server** 

• **Mainframe/Terminal** 

In a basic **peer-to-peer** architecture, all hosts on the network can both  *request* and *provide* data and services. For example, two Windows XP  workstations configured to share files would be considered a peer-to-peer  network.  

Peer-to-peer networks are very simple to configure, yet this architecture  presents several challenges. Data is difficult to manage and back-up, as it is  **spread across multiple devices**. Security is equally problematic, as user  accounts and permissions much be configured individually on each host.  

In a **client/server** architecture, hosts are assigned specific roles. *Clients* request data and services stored on *servers*. An example of a client/server  network would be Windows XP workstations accessing files off of a  Windows 2003 server.  

There are several advantages to the client/server architecture. Data and  services are now **centrally located** on one or more servers, consolidating the  management and security of that data. As a result, client/server networks can  scale far larger than peer-to-peer networks.  

One key disadvantage of the client/server architecture is that the server can  present a **single point of failure.** This can be mitigated by adding  *redundancy* at the server layer.

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
7 

***Network Architectures (continued)*** 

In a **mainframe/terminal** architecture, a single device (the **mainframe**)  stores all data and services for the network. This provides the same  advantages as a client/server architecture – centralized management and  security of data.  

Additionally, the mainframe performs all processing functions for the **dumb  terminals** that connect to the mainframe. The dumb terminals perform *no  processing whatsoever*, but serve only as input and output devices into the  mainframe.  

In simpler terms, the mainframe handles all *thinking* for the dumb terminals.  A dumb terminal typically consists of only a keyboard/mouse, a display, and  an interface card into the network.  

The traditional mainframe architecture is less prevalent now than in the early  history of networking. However, the similar **thin-client** architecture has  gained rapid popularity. A thin-client can be implemented as either a  hardware device, or software running on top of another operating system  (such as Windows or Linux).  

Like dumb terminals, thin-clients require a centralized system to perform all  (or most) processing functions. User sessions are spawned and managed  completely within the server system.  

Hardware thin-clients are generally inexpensive, with a small footprint and  low power consumption. For environments with a large number of client  devices, the thin-client architecture provides high scalability, with a lower  total cost of ownership.  

The two most common thin-client protocols are:  

• **RDP (Remote Desktop Protocol) –** developed by Microsoft  • **ICA (Independent Computer Architecture) –** developed by Citrix 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
8 

**Section 2**    
**\- OSI Reference Model \-**  

***Network Reference Models*** 

A **computer network** connects two or more devices together to share  information and services. Multiple networks connected together form an  **internetwork.**  

Internetworking present challenges \- interoperating between products from  different manufacturers requires consistent standards. **Network reference  models** were developed to address these challenges. A network reference  

model serves as a blueprint, detailing how communication between network  devices should occur.  

The two most recognized network reference models are:  

• The **Open Systems Interconnection (OSI)** model  

• The **Department of Defense (DoD)** model  

Without the framework that network models provide, all network hardware  and software would have been proprietary. Organizations would have been  locked into a single vendor’s equipment, and global networks like the  Internet would have been impractical, if not impossible.  

Network models are organized into **layers,** with each layer representing a  specific networking function. These functions are controlled by **protocols**,  which are *rules* that govern end-to-end communication between devices.  

Protocols on one layer will interact with protocols on the layer above and  below it, forming a protocol **suite** or **stack.** The **TCP/IP suite** is the most  prevalent protocol suite, and is the foundation of the Internet.  

A network model is not a physical entity – there is no OSI *device*.  Manufacturers do not always strictly adhere to a reference model’s blueprint,  and thus not every protocol fits perfectly within a single layer. Some  protocols can function across multiple layers. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
9 

***OSI Reference Model*** 

The **Open Systems Interconnection (OSI) model** was developed by the  **International Organization for Standardization (ISO),** and formalized in  1984\. It provided the first framework governing how information should be  sent across a network.  

The OSI model consists of seven layers, each corresponding to a specific  network function:  

7 

| Application  |
| :---- |
| Presentation  |
| Session  |
| Transport  |
| Network  |
| Data-link  |
| Physical  |

6 

5 

4 

3 

2 

1 

Note that the *bottom* layer is Layer 1\. Various mnemonics make it easier to  remember the order of the OSI model’s layers:  

7 

| Application  | All  | Away  |
| :---- | ----: | ----: |
| Presentation  | **P**eople  | **P**izza  |
| Session  | **S**eem  | **S**ausage  |
| Transport  | **T**o  | **T**hrow  |
| Network  | **N**eed  | **N**ot  |
| Data-link  | **D**ata  | **D**o  |
| Physical  | **P**rocessing  | **P**lease  |

6 

5 

4 

3 

2 

1 

ISO further developed an entire protocol suite based on the OSI model;  however, the **OSI protocol suite** was never widely implemented.  

The OSI model itself is now somewhat deprecated – modern protocol suites,  such as the TCP/IP suite, are difficult to fit cleanly within the OSI model’s  seven layers. This is especially true of the **upper three layers**.  

The **bottom** (or ***lower**)* **four layers** are more clearly defined, and  terminology from those layers is still prevalently used. Many protocols and  devices are described by which lower layer they operate at. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
10 

***OSI Model \- The Upper Layers*** 

The top three layers of the OSI model are often referred to as the **upper  layers**:  

• Layer-7 \- **Application** layer  

• Layer-6 \- **Presentation** layer  

• Layer-5 \- **Session** layer  

Protocols that operate at these layers manage application-level functions**,**  and are generally implemented in *software*.  

The function of the upper layers of the OSI model can be difficult to  visualize. Upper layer protocols do not always fit perfectly within a layer,  and often function across multiple layers.  

***OSI Model \- The Application Layer*** 

The **Application layer (Layer-7)** provides the interface between the user  application and the network. A web browser and an email client are  examples of user applications.  

The user application itself *does not* reside at the Application layer \- the  *protocol* does. The user interacts with the application, which in turn interacts  with the application protocol.  

Examples of Application layer protocols include:  

• **FTP**, via an FTP client  

• **HTTP**, via a web browser  

• **POP3** and **SMTP**, via an email client  

• **Telnet**  

The Application layer provides a variety of functions:  

• Identifies communication partners  

• Determines resource availability  

• Synchronizes communication  

The Application layer interacts with the Presentation layer below it. As it is  the top-most layer, it does not interact with any layers above it.  

(Reference: http://docwiki.cisco.com/wiki/Internetworking\_Basics) 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
11 

***OSI Model \- The Presentation Layer*** 

The **Presentation layer (Layer-6)** controls the *formatting* and *syntax* of user  data for the application layer. This ensures that data from the *sending*  application can be understood by the *receiving* application.  

Standards have been developed for the formatting of data types, such as text,  images, audio, and video. Examples of Presentation layer formats include:  • **Text** \- RTF, ASCII, EBCDIC  

• **Images** \- GIF, JPG, TIF    
• **Audio** \- MIDI, MP3, WAV    
• **Movies** \- MPEG, AVI, MOV  

If two devices do not support the same format or syntax, the Presentation  layer can provide **conversion** or **translation** services to facilitate  communication.  

 Additionally, the Presentation layer can perform **encryption** and  **compression** of data, as required. However, these functions can also be  performed at lower layers as well. For example, the Network layer can  perform encryption, using IPSec.  

***OSI Model \- The Session Layer*** 

The **Session layer (Layer-5)** is responsible for establishing, maintaining,  and ultimately terminating *sessions* between devices. If a session is *broken,*  this layer can attempt to recover the session.  

Sessions communication falls under one of three categories:  

• **Full-Duplex** – simultaneous two-way communication  

• **Half-Duplex** – two-way communication, but not simultaneous  • **Simplex –** one-way communication  

Many modern protocol suites, such as TCP/IP, do not implement Session  layer protocols. Connection management is often controlled by lower layers,  such as the Transport layer.  

The lack of true Session layer protocols can present challenges for high availability and failover. Reliance on lower-layer protocols for session  management offers less flexibility than a strict adherence to the OSI model. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
12 

***OSI Model \- The Lower Layers*** 

The bottom four layers of the OSI model are often referred to as the **lower  layers**:  

• Layer-4 – **Transport** layer  

• Layer-3 – **Network** layer  

• Layer-2 – **Data-Link** layer  

• Layer-1 – **Physical** layer  

Protocols that operate at these layers control the end-to-end transport of data  between devices, and are implemented in both software and hardware.  

***OSI Model \- The Transport Layer*** 

The **Transport layer (Layer-4)** does *not* actually send data, despite its  name. Instead, this layer is responsible for the *reliable* transfer of data, by  ensuring that data arrives at its destination error-free and in order.  

Transport layer communication falls under two categories:  • **Connection-oriented** – requires that a connection with specific  agreed-upon parameters be established before data is sent.  • **Connectionless** – requires no connection before data is sent. 

Connection-oriented protocols provide several important services:  • **Segmentation and sequencing –** data is *segmented* into smaller  pieces for transport. Each segment is assigned a *sequence number*, so  that the receiving device can reassemble the data on arrival. • **Connection establishment –** connections are established, maintained,  and ultimately terminated between devices. 

• **Acknowledgments –** receipt of data is confirmed through the use of  *acknowledgments*. Otherwise, data is retransmitted, guaranteeing  delivery.  

• **Flow control (**or **windowing) –** data transfer rate is negotiated to  prevent congestion.  

The TCP/IP protocol suite incorporates two Transport layer protocols:  • **Transmission Control Protocol (TCP) –** connection-oriented  • **User Datagram Protocol (UDP) \-** connectionless 

(Reference: http://www.tcpipguide.com/free/t\_TransportLayerLayer4-2.htm) 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
13 

***OSI Model \- The Network Layer*** 

The **Network layer (Layer-3)** controls *internetwork* communication, and  has two key responsibilities:  

• **Logical addressing** – provides a unique address that identifies both  the *host*, and the *network* that host exists on.  

• **Routing** – determines the *best path* to a particular destination  network, and then *routes* data accordingly.  

Two of the most common Network layer protocols are: 

• **Internet Protocol (IP)** 

• Novell’s **Internetwork Packet Exchange (IPX)**.  

IPX is almost entirely deprecated. IP version 4 (IPv4) and IP version 6  (IPv6) are covered in nauseating detail in other guides.  

***OSI Model \- The Data-Link Layer *** 

While the Network layer is concerned with transporting data *between*  networks, the **Data-Link layer (Layer-2)** is responsible for transporting  data *within* a network.  

The Data-Link layer consists of two sublayers:  

• **Logical Link Control (LLC)** sublayer  

• **Media Access Control (MAC)** sublayer  

The LLC sublayer serves as the intermediary between the physical link and  all higher layer protocols. It ensures that protocols like IP can function  regardless of what type of physical technology is being used.  

Additionally, the LLC sublayer can perform flow-control and error checking, though such functions are often provided by Transport layer  protocols, such as TCP.  

The MAC sublayer controls access to the physical medium, serving as  mediator if multiple devices are competing for the same physical link. Data link layer technologies have various methods of accomplishing this \-  **Ethernet** uses *Carrier Sense Multiple Access* with *Collision Detection  (CSMA/CD)*, and **Token Ring** utilizes a *token*.  

Ethernet is covered in great detail in another guide. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
14 

***OSI Model \- The Data-Link Layer (continued) *** 

The Data-link layer *packages* the higher-layer data into **frames,** so that the  data can be put onto the physical wire. This packaging process is referred to  as **framing** or **encapsulation.**  

The encapsulation type will vary depending on the underlying technology.  Common Data-link layer technologies include following:  

• Ethernet – the most common LAN data-link technology • Token Ring – almost entirely deprecated  

• FDDI (Fiber Distributed Data Interface)  

• 802.11 Wireless  

• Frame-Relay  

• ATM (Asynchronous Transfer Mode)  

The data-link frame contains the source and destination **hardware** (or  **physical**) address. Hardware addresses uniquely identify a host within a  network, and are often hardcoded onto physical network interfaces.  However, hardware addresses contain no mechanism for differentiating one  *network* from another, and can only identify a host *within* a network.  

The most common hardware address is the Ethernet **MAC address.** 

***OSI Model \- The Physical Layer***  

The **Physical layer (Layer-1)** controls the signaling and transferring of raw  bits onto the physical medium. The Physical layer is closely related to the  Data-link layer, as many technologies (such as Ethernet) contain both data link and physical functions.  

The Physical layer provides specifications for a variety of hardware:  • Cabling  

• Connectors and transceivers  

• Network interface cards (NICs)  

• Wireless radios  

• Hubs  

Physical-layer devices and topologies are covered extensively in other  guides. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
15 

***Encapsulation and Layered Communication*** 

As data is passed from the user application down the virtual layers of the  OSI model, each layer adds a **header** (and sometimes a **trailer**) containing  protocol information specific to that layer. These headers are called **Protocol  Data Units (PDUs)**, and the process of adding these headers is called **encapsulation**. Note that in the TCP/IP protocol suite only the lower layers  perform encapsulation, generally.  

For example, a Transport layer protocol such as TCP will add a header  containing flow control, port numbers, and sequencing. The Network layer  header contains logical addressing information, and the Data-link header  contains physical addressing and other hardware specific information.  

The PDU of each layer is identified with a different term:  

| *Layer*  | *PDU Name*  |
| ----: | ----- |
|   |  |
| Application  | **\-**  |
| Presentation  | **\-**  |
| Session  | **\-**  |
| Transport  | **Segments**  |
| Network  | **Packets**  |
| Data-Link  | **Frames**  |
| Physical  | **Bits**  |

Each layer **communicates with the corresponding layer** on the receiving  device. For example, on the sending device, source and destination hardware  addressing is placed in a Data-link header. On the receiving device, that  Data-link header is processed and stripped away (**decapsulated)** before  being sent up to the Network and other upper layers.  

Network devices are commonly identified by the OSI layer they *operate* at;  or, more specifically, what *header* or *PDU* the device processes.  

For example, **switches** are generally identified as Layer-2 devices, as  switches process information stored in the **Data-Link** header of a frame,  such as Ethernet MAC addresses. Similarly, **routers** are identified as Layer 3 devices, as routers process *logical* addressing information in the **Network** header of a packet, such as IP addresses. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
16 

***Encapsulation Illustrated*** 

The following illustrates how basic encapsulation occurs with the TCP/IP  stack, which typically performs encapsulation only at the lower layers:


![][image1]![][image2]![][image3]![][image4]![][image5]![][image6]![][image7]![][image8]![][image9]![][image10]

![][image11]

![][image12]![][image13]![][image14]![][image15]  
During **encapsulation** on the sending host**:**  

• Data from the user application is handed off to the Transport layer.  • The Transport layer adds a header containing protocol-specific    
information, and then hands the *segment* to the Network layer.  

• The Network layer adds a header containing source and destination  logical addressing, and then hands the *packet* to the Data-Link layer.  • The Data-Link layer adds a header containing source and destination  physical addressing and other hardware-specific information.  

• The Data-Link *frame* is then handed off to the Physical layer to be  transmitted on the network medium as *bits*.  

During **decapsulation** on the receiving host, the reverse occurs: 

• The frame is received from the physical medium.  

• The Data-Link layer processes its header, strips it off, and then hands  it off to the Network layer.  

• The Network layer processes its header, strips it off, and then hands it  off to the Transport layer.  

• The Transport layer processes its header, strips it off, and then hands  the data to the user application. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
17 

***OSI Reference Model Example *** 

A web browser serves as a good practical illustration of the OSI model and  the TCP/IP protocol suite:  

• Τhe web browser serves as the user interface for accessing a website. The  browser itself does not function at the **Application layer.** Instead, the  web browser invokes the *Hyper Text Transfer Protocol (HTTP)* to  interface with the remote web server, which is why *http://* precedes every  web address. 

• The Internet can provide data in a wide variety of *formats,* a function of  the **Presentation layer**. Common formats on the Internet include *HTML,  XML, PHP, GIF,* and *JPEG*. Any *encryption* or *compression* mechanisms  used on a website are also considered a Presentation layer function. 

• The **Session layer** is responsible for establishing, maintaining, and  terminating the session between devices, and determining whether the  communication is *half-duplex* or *full-duplex*. However, the TCP/IP stack  generally does not include session-layer protocols, and is reliant on  lower-layer protocols to perform these functions. 

• HTTP utilizes the *TCP* **Transport layer** protocol to ensure the reliable  delivery of data. TCP establishes and maintains a connection from the  client to the web server, and packages the higher-layer data into  *segments.* A sequence number is assigned to each segment so that data  can be reassembled upon arrival. 

• The best path to *route* the data between the client and the web server is  determined by *IP*, a **Network layer** protocol. IP is also responsible for  the assigned logical addresses on the client and server, and for  encapsulating segments into *packets.* 

• Data cannot be sent directly to a logical address. As packets travel from  network to network, IP addresses are translated to *hardware* addresses,  which are a function of the **Data-Link layer***.* The packets are  encapsulated into *frames* to be placed onto the physical medium. 

• The data is finally transferred onto the network medium at the **Physical  layer**, in the form of raw bits. Signaling and encoding mechanisms are  defined at this layer, as is the hardware that forms the physical  connection between the client and the web server. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
18 

***IP and the DoD Model *** 

The **Internet Protocol (IP)** was originally developed by the Department of  Defense (DoD), and was a cornerstone for a group of protocols that became  known as the **TCP/IP protocol suite**.  

The DoD developed their own networking model, which became known as  the **DoD** or **TCP/IP Model**. It consists of four layers:  

***OSI Model DoD Model***  

7 

| Application  |
| ----: |
| Presentation  |
| Session  |
| Transport  |
| Network  |
| Data-link  |
| Physical  |

| Application  |
| ----: |
| Host-to-Host  |
| Internet  |
| Network Access  |

6 4 

5 

4 3 

3 2 

2 1 1 

The consolidated DoD model is generally regarded as more practical than  the OSI model. Upper layer protocols often provide services that span the  top three layers. A converged Data-link and Physical layer is also sensible,  as many technologies provide specifications for both layers, such as  Ethernet.  

The following chart illustrates where common protocols fit into the DoD  model:  

***Layer Example Protocols***  

| Application  | FTP, HTTP, SMTP  |
| ----: | ----: |
| Host-to-Host  | TCP, UDP  |
| Internet  | IP  |
| Network Access  | Ethernet  |

Despite the practicality of the DoD model, the OSI model is still the basis  for most network terminology.  

So, Please Do Not Throw Sausage Pizza Away. ☺

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
19 

**Section 3**    
**\- Ethernet Technologies \-**  

***What is Ethernet?*** 

**Ethernet** is a family of technologies that provides data-link and physical  specifications for controlling access to a shared network medium. It has  emerged as the dominant technology used in LAN networking.  

Ethernet was originally developed by Xerox in the 1970s, and operated at  2.94Mbps. The technology was standardized as **Ethernet Version 1** by a  consortium of three companies \- DEC, Intel, and Xerox, collectively referred  to as **DIX \-** and further refined as **Ethernet II** in 1982\.  

In the mid 1980s, the **Institute of Electrical and Electronic Engineers  (IEEE)** published a formal standard for Ethernet, defined as the **IEEE 802.3** standard. The original 802.3 Ethernet operated at 10Mbps, and successfully  supplanted competing LAN technologies, such as Token Ring.  

Ethernet has several benefits over other LAN technologies:  • Simple to install and manage  

• Inexpensive  

• Flexible and scalable  

• Easy to interoperate between vendors  

(References: http://docwiki.cisco.com/wiki/Ethernet\_Technologies; http://www.techfest.com/networking/lan/ethernet1.htm)  

***Ethernet Cabling Types *** 

Ethernet can be deployed over three types of cabling:  

• **Coaxial** cabling – *almost entirely deprecated in Ethernet networking* • **Twisted-pair** cabling  

• **Fiber optic** cabling  

**Coaxial cable**, often abbreviated as *coax*, consists of a single wire  surrounded by insulation, a metallic shield, and a plastic sheath. The shield  helps protect against **electromagnetic interference (EMI),** which can cause  **attenuation,** a reduction of the strength and quality of a signal. EMI can be  generated by a variety of sources, such as florescent light ballasts,  microwaves, cell phones, and radio transmitters.  

Coax is commonly used to deploy cable television to homes and businesses. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
20 

***Ethernet Cabling Types (continued) *** 

Two types of coax were used historically in Ethernet networks:  • **Thinnet**  

• **Thicknet**  

*Thicknet* has a wider diameter and more shielding, which supports greater  distances. However, it is less flexible than the smaller *thinnet*, and thus more  difficult to work with. A **vampire tap** is used to physically connect devices  to thicknet, while a **BNC** connector is used for thinnet.  

**Twisted-pair cable** consists of two or four pairs of copper wires in a plastic  sheath*.* Wires in a pair *twist* around each other to reduce **crosstalk**, a form of  EMI that occurs when the signal from one wire *bleeds* or *interferes* with a  signal on another wire. Twisted-pair is the most common Ethernet cable.  

Twisted-pair cabling can be either **shielded** or **unshielded**. Shielded twisted pair is more resistant to external EMI; however, all forms of twisted-pair  suffer from greater signal attenuation than coax cable.  

There are several *categories* of twisted-pair cable, identified by the number  of *twists per inch* of the copper pairs:  

• **Category 3** or **Cat3** *\-* three twists per inch. 

• **Cat5** \- five twists per inch. 

• **Cat5e** \- five twists per inch; pairs are also twisted around each other. • **Cat6 –** six twists per inch, with improved insulation. 

An **RJ45** connector is used to connect a device to a twisted-pair cable. The  *layout* of the wires in the connector dictates the function of the cable.  

While coax and twisted-pair cabling carry *electronic* signals, **fiber optics** uses *light* to transmit a signal. Ethernet supports two fiber specifications:  • **Singlemode fiber** – consists of a very small glass *core*, allowing only  a single ray or *mode* of light to travel across it. This greatly reduces  the attenuation and dispersion of the light signal, supporting high  bandwidth over *very* long distances, often measured in kilometers.  • **Multimode fiber** – consists of a larger core, allowing multiple modes  of light to traverse it. Multimode suffers from greater dispersion than  singlemode, resulting in shorter supported distances.  

Singlemode fiber requires more *precise* electronics than multimode, and thus  is significantly more *expensive*. Multimode fiber is often used for high-speed  connectivity within a datacenter. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
21 

***Network Topologies*** 

A **topology** defines both the *physical* and *logical* structure of a network.  Topologies come in a variety of configurations, including:  • Bus  

• Star  

• Ring  

• Full or partial mesh  

Ethernet supports two topology types – **bus** and **star**.  

***Ethernet Bus Topology*** 

In a **bus topology**, all hosts share a single physical segment (the *bus* or the  *backbone*) to communicate:


A frame sent by one host is received by *all other* hosts on the bus. However,  a host will only *process* a frame if it matches the destination hardware  address in the data-link header.  

Bus topologies are inexpensive to implement, but are almost entirely  deprecated in Ethernet. There are several disadvantages to the bus topology:  • Both ends of the bus must be **terminated,** otherwise a signal will  *reflect* back and cause interference, severely degrading performance.  • Adding or removing hosts to the bus can be difficult.  

• The bus represents a single point of failure \- a break in the bus will  affect *all* hosts on the segment. Such faults are often very difficult to  troubleshoot.  

A bus topology is implemented using either thinnet or thicknet coax cable.

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
22 

***Ethernet Star Topology*** 

In a **star topology**, each host has an individual point-to-point connection to a  centralized *hub* or *switch*:


A **hub** provides no intelligent forwarding whatsoever, and will always  forward every frame out every port, excluding the port originating the frame.  As with a bus topology, a host will only *process* a frame if it matches the  destination hardware address in the data-link header. Otherwise, it will  discard the frame.  

A **switch** builds a **hardware address table,** allowing it to make intelligent  forwarding decisions based on frame (data-link) headers. A frame can then  be forwarded out *only* the appropriate destination port, instead of *all* ports.  

Hubs and switches are covered in great detail in another guide.  

Adding or removing hosts is very simple in a star topology. Also, a break in  a cable will affect *only that one host*, and not the entire network.  

There are two disadvantages to the star topology:  

• The hub or switch represents a single point of failure.  

• Equipment and cabling costs are generally higher than in a bus  topology.  

However, the star is still the dominant topology in modern Ethernet  networks, due to its flexibility and scalability. Both twisted-pair and fiber  cabling can be used in a star topology. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
23 

***The Ethernet Frame***  

An Ethernet frame contains the following fields:  

***Field Length Description***  

| Preamble  | 7 bytes  | Synchronizes communication  |
| ----- | ----- | ----- |
| Start of Frame  | 1 byte  | Signals the start of a valid frame  |
| MAC Destination  | 6 bytes  | Destination MAC address  |
| MAC Source  | 6 bytes  | Source MAC address  |
| 802.1Q tag  | 4 bytes  | Optional VLAN tag  |
| Ethertype or length  | 2 bytes  | Payload type or frame size  |
| Payload  | 42-1500 bytes Data payload  |  |
| CRC  | 4 bytes  | Frame error check  |
| Interframe Gap  | 12 bytes  | Required idle period between frames  |

The **preamble** is 56 bits of alternating 1s and 0s that synchronizes  communication on an Ethernet network. It is followed by an 8-bit **start of  frame delimiter** (10101011) that indicates a valid frame is about to begin.  The preamble and the start of frame are *not considered* part of the actual  frame, or calculated as part of the total frame size.  

Ethernet uses the 48-bit **MAC address** for hardware addressing. The first  24-bits of a MAC address determine the manufacturer of the network  interface, and the last 24-bits uniquely identify the host.  

The *destination* MAC address identifies who is to receive the frame \- this  can be a single host (a *unicast*), a group of hosts (a *multicast*), or all hosts (a  *broadcast*). The *source* MAC address indentifies the host originating the  frame.  

The **802.1Q tag** is an *optional* field used to identify which **VLAN** the frame  belongs to. VLANs are covered in great detail in another guide.  

The 16-bit **Ethertype/Length field** provides a different function depending  on the standard \- Ethernet II or 802.3. With Ethernet II, the field identifies  the type of payload in the frame (the *Ethertype).* However, Ethernet II is  almost entirely deprecated.  

With 802.3, the field identifies the *length* of the payload. The length of a  frame is important – there is both a *minimum* and *maximum* frame size.  

(Reference: http://www.techfest.com/networking/lan/ethernet2.htm; http://www.dcs.gla.ac.uk/\~lewis/networkpages/m04s03EthernetFrame.htm) 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
24 

***The Ethernet Frame (continued) *** 

***Field Length Description***  

| Preamble  | 7 bytes  | Synchronizes communication  |
| ----- | ----- | ----- |
| Start of Frame  | 1 byte  | Signals the start of a valid frame  |
| MAC Destination  | 6 bytes  | Destination MAC address  |
| MAC Source  | 6 bytes  | Source MAC address  |
| 802.1Q tag  | 4 bytes  | Optional VLAN tag  |
| Ethertype or length  | 2 bytes  | Payload type or frame size  |
| Payload  | 42-1500 bytes Data payload  |  |
| CRC  | 4 bytes  | Frame error check  |
| Interframe Gap  | 12 bytes  | Required idle period between frames  |

The absolute **minimum frame size** for Ethernet is **64 bytes** (or **512 bits**) including headers. A frame that is smaller than 64 bytes will be discarded as  a **runt**. The required fields in an Ethernet header add up to 18 bytes – thus,  the frame **payload** must be a minimum of 46 bytes, to equal the minimum 64-byte frame size. If the payload *does not* meet this minimum, the payload  is **padded** with **0 bits** until the minimum is met.  

**Note:** If the optional 4-byte 802.1Q tag is used, the Ethernet header size will  total 22 bytes, requiring a minimum payload of 42 bytes.  

By default, the **maximum frame size** for Ethernet is **1518 bytes –** *18 bytes* of header fields, and *1500 bytes* of payload \- or **1522 bytes** with the 802.1Q  tag. A frame that is larger than the maximum will be discarded as a **giant.**  With both runts and giants*,* the receiving host will *not* notify the sender that  the frame was dropped. Ethernet relies on higher-layer protocols, such as  TCP, to provide retransmission of discarded frames. 

Some Ethernet devices support **jumbo frames** of **9216 bytes**, which provide  less overhead due to fewer frames. Jumbo frames must be explicitly enabled  on *all* devices in the traffic path to prevent the frames from being dropped.  

The 32-bit **Cycle Redundancy Check (CRC)** field is used for error detection. A frame with an invalid CRC will be discarded by the receiving  device. This field is a *trailer,* and not a *header*, as it follows the payload.  

The 96-bit **Interframe Gap** is a required idle period between frame  transmissions, allowing hosts time to prepare for the next frame.  

(Reference: http://www.infocellar.com/networks/ethernet/frame.htm) 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
25 

***CSMA/CD and Half-Duplex Communication *** 

Ethernet was originally developed to support a **shared media** environment.  This allowed two or more hosts to use the same physical network medium.  

There are two methods of communication on a shared physical medium:  • **Half-Duplex –** hosts can transmit or receive, but *not simultaneously*  • **Full-Duplex –** hosts can both transmit and receive simultaneously  

On a half-duplex connection, Ethernet utilizes **Carrier Sense Multiple  Access with Collision Detect (CSMA/CD)** to control media access. *Carrier  sense* specifies that a host will monitor the physical link, to determine  whether a *carrier* (or *signal)* is currently being transmitted. The host will *only* transmit a frame if the link is **idle**, and the Interframe Gap has expired.  

If two hosts transmit a frame simultaneously, a **collision** will occur. This  renders the collided frames unreadable. Once a collision is detected, both  hosts will send a **32-bit jam sequence** to ensure all transmitting hosts are  aware of the collision. The collided frames are also discarded.  

Both devices will then wait a *random* amount of time before resending their  respective frames, to reduce the likelihood of another collision. This is  controlled by a **backoff** timer process.  

Hosts *must* detect a collision before a frame is finished transmitting,  otherwise CSMA/CD cannot function reliably. This is accomplished using a  consistent **slot time,** the time required to send a specific amount of data from  one end of the network and then *back*, measured in bits.  

A host must continue to transmit a frame for a *minimum* of the slot time. In a  properly configured environment, a collision should *always* occur within this  slot time, as enough time has elapsed for the frame to have reached the far  end of the network and back, and thus all devices should be aware of the  transmission. The slot time effectively limits the physical length of the  network – if a network segment is too long, a host may not detect a collision  within the slot time period. A collision that occurs after the slot time is  referred to as a **late collision.** 

For 10 and 100Mbps Ethernet, the slot time was defined as **512 bits,** or 64  bytes. Note that this is the equivalent of the *minimum Ethernet frame size* of  64 bytes. The slot time actually defines this minimum. For Gigabit Ethernet,  the slot time was defined as **4096 bits.**  

(Reference: *http://www.techfest.com/networking/lan/ethernet3.htm*) 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
26 

***Full-Duplex Communication *** 

Unlike half-duplex, **full-duplex** Ethernet supports simultaneously  communication by providing separate transmit and receive paths. This  effectively *doubles* the throughput of a network interface.  

Full-duplex Ethernet was formalized in IEEE 802.3x, and *does not use  CSMA/CD* or slot times. Collisions should *never* occur on a functional full duplex link. Greater distances are supported when using full-duplex over  half-duplex. 

Full-duplex is only supported on a point-to-point connection between two  devices. Thus, a bus topology using coax cable *does not* support full-duplex.  

Only a connection **between two hosts** or between **a host and a *switch*** supports full-duplex. A host connected to a *hub* is limited to half-duplex.  Both hubs and half-duplex communication are mostly deprecated in modern  networks.  

***Categories of Ethernet *** 

The original 802.3 Ethernet standard has evolved over time, supporting  faster transmission rates, longer distances, and newer hardware technologies.  These *revisions* or *amendments* are identified by the letter appended to the  standard, such as 802.3*u* or 802.3*z*.  

Major categories of Ethernet have also been organized by their speed:  • **Ethernet** (10Mbps)  

• **Fast Ethernet** (100Mbps)  

• **Gigabit Ethernet** 

• **10 Gigabit Ethernet** 

The *physical* standards for Ethernet are often labeled by their transmission  rate, signaling type, and media type. For example, *100baseT* represents the  following:  

• The first part (*100*) represents the transmission rate, in Mbps.  • The second part (*base)* indicates that it is a baseband transmission.  • The last part (*T)* represents the physical media type (*twisted-pair)*.  

Ethernet communication is **baseband***,* which dedicates the entire capacity of  the medium to one signal or channel. In **broadband***,* multiple signals or  channels can share the same link, through the use of *modulation* (usually  frequency modulation). 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
27 

***Ethernet (10 Mbps)***  

*Ethernet* is now a somewhat generic term, describing the entire family of  technologies. However, Ethernet traditionally referred to the original 802.3  standard, which operated at **10 Mbps**. Ethernet supports coax, twisted-pair,  and fiber cabling. Ethernet over twisted-pair uses **two** of the four pairs.  

Common Ethernet physical standards include:   
***Maximum***    
***Cable Length***    
    
***IEEE***    
***Standard***    
***Physical  Standard***    
***Cable Type Maximum  Speed***  

| 802.3a  | 10base2  | Coaxial (thinnet)  | 10 Mbps  | 185 meters |
| :---- | :---- | ----- | :---- | :---- |
| 802.3  | 10base5  | Coaxial (thicknet)  | 10 Mbps  | 500 meters |
| 802.3i  | 10baseT  | Twisted-pair  | 10 Mbps  | 100 meters  |
| 802.3j  | 10baseF  | Fiber  | 10 Mbps  | 2000 meters  |

Both 10baseT and 10baseF support full-duplex operation, effectively  doubling the bandwidth to 20 Mbps. Remember, only a connection **between  two hosts** or between **a host and a *switch*** support full-duplex. The  maximum distance of an Ethernet segment can be extended through the use  of a **repeater**. A hub or a switch can also serve as a repeater.  

***Fast Ethernet (100 Mbps) *** 

In 1995, the IEEE formalized **802.3u**, a **100 Mbps** revision of Ethernet that  became known as **Fast Ethernet.** Fast Ethernet supports both twisted-pair  copper and fiber cabling, and supports both half-duplex and full-duplex.  

Common Fast Ethernet physical standards include:   
***Maximum Cable***    
***Length***    
    
***IEEE***    
***Standard***    
***Physical  Standard***    
***Cable Type Maximum  Speed***  

| 802.3u  | 100baseTX  | Twisted-pair  | 100 Mbps  | 100 meters  |
| :---- | ----- | :---- | ----- | :---- |
| 802.3u  | 100baseT4  | Twisted-pair  | 100 Mbps  | 100 meters  |
| 802.3u  | 100baseFX  | Multimode fiber  |  | 100 Mbps 400-2000 meters  |
| 802.3u  | 100baseSX  | Multimode fiber  |  | 100 Mbps 500 meters  |

100baseT4 was never widely implemented, and only supported half-duplex  operation. 100baseTX is the dominant Fast Ethernet physical standard.  100baseTX uses **two** of the four pairs in a twisted-pair cable, and requires  Category 5 cable for reliable performance. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
28 

***Speed and Duplex Autonegotiation *** 

Fast Ethernet is backwards-compatible with the original Ethernet standard.  A device that supports both Ethernet and Fast Ethernet is often referred to as  a *10/100* device.  

Fast Ethernet also introduced the ability to **autonegotiate** both the speed and  duplex of an interface. Autonegotiation will attempt to use the *fastest* speed  available, and will attempt to use *full-duplex* if both devices support it.  Speed and duplex can also be **hardcoded**, preventing negotiation.  

The configuration *must* be consistent on both sides of the connection. Either  both sides must be configured to autonegotiate, or both sides must be  hardcoded with *identical* settings. Otherwise a **duplex mismatch** error can  occur.  

For example, if a workstation’s NIC is configured to autonegotiate, and the  switch interface is hardcoded for 100Mbps and full-duplex, then a duplex  mismatch will occur. The workstation’s NIC will sense the correct speed of  100Mbps, but will not detect the correct duplex and will default to *half duplex.*  

If the duplex is mismatched, collisions will occur. Because the full-duplex  side of the connection does not utilize CSMA/CD, performance is *severely*  degraded. These issues can be difficult to troubleshoot, as the network  connection will still function, but will be excruciatingly slow.  

When autonegotiation was first developed, manufacturers did not always  adhere to the same standard. This resulted in frequent mismatch issues, and a  sentiment of distrust towards autonegotiation.  

Though modern network hardware has alleviated most of the  incompatibility, many administrators are still skeptical of autonegotiation  and choose to hardcode all connections. Another common practice is to  hardcode server and datacenter connections, but to allow user devices to  autonegotiate.  

Gigabit Ethernet, covered in the next section, provided several  enhancements to autonegotiation, such as hardware flow control. Most  manufacturers **recommend autonegotiation** on Gigabit Ethernet interfaces  as a best practice. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
29 

***Gigabit Ethernet***  

Gigabit Ethernet operates at 1000 Mbps, and supports both twisted-pair  **(802.3ab)** and fiber cabling **(802.3z)**. Gigabit over twisted-pair uses **all four  pairs**, and requires Category 5e cable for reliable performance.  

Gigabit Ethernet is backwards-compatible with the original Ethernet and  Fast Ethernet. A device that supports all three is often referred to as a  *10/100*/*1000* device. Gigabit Ethernet supports both half-duplex or full duplex operation. Full-duplex Gigabit Ethernet effectively provides 2000  Mbps of throughput.  

Common Gigabit Ethernet physical standards include:   
***Cable Type Speed Maximum Cable***  

***Length***    
    
***IEEE***    
***Standard***    
***Physical  Standard***  

| 802.3ab  | 1000baseT  | Twisted-pair  | 1 Gbps  | 100 meters  |
| :---- | :---- | :---- | :---- | ----- |
| 802.3z  |  | 1000baseSX Multimode fiber  | 1 Gbps  | 500 meters |
| 802.3z  |  | 1000baseLX Multimode fiber  | 1 Gbps  | 500 meters  |
| 802.3z  |  | 1000baseLX Singlemode fiber  | 1 Gbps  | Several kilometers  |

In modern network equipment, Gigabit Ethernet has replaced both Ethernet  and Fast Ethernet.  

***10 Gigabit Ethernet***  

10 Gigabit Ethernet operates at 10000 Mbps, and supports both twisted-pair  **(802.3an)** and fiber cabling **(802.3ae)**. 10 Gigabit over twisted-pair uses **all  four pairs**, and requires Category 6 cable for reliable performance.  

Common Gigabit Ethernet physical standards include:   
***Cable Type Speed Maximum Cable***  

***Length***    
    
***IEEE***    
***Standard***    
***Physical  Standard***  

| 802.3an  | 10Gbase-T  | Twisted-pair  | 10 Gbps  | 100 meters  |
| :---- | :---- | :---- | :---- | ----- |
| 802.3ae  |  | 10Gbase-SR Multimode fiber  | 10 Gbps  | 300 meters  |
| 802.3ae  |  | 10Gbase-LR Singlemode fiber  | 10 Gbps  | Several kilometers  |

10 Gigabit Ethernet is usually used for high-speed connectivity within a  datacenter, and is predominantly deployed over fiber. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
30 

***Twisted-Pair Cabling Overview*** 

A typical twisted-pair cable consists of **four pairs** of copper wires, for a  total of **eight wires**. Each side of the cable is terminated using an RJ45  connector, which has eight **pins.** When the connector is *crimped* onto the  cable, these pins make contact with each wire.  

The wires themselves are assigned a *color* to distinguish them. The color is  dictated by the cabling standard \- **TIA/EIA-568B** is the current standard:  

***Color Pin\#***  

White Orange  Orange  

White Green  Blue  

White Blue  Green  

White Brown  Brown    
1  2  3  4  5  6  7  8  

Each wire is assigned a specific purpose. For example, both Ethernet and  Fast Ethernet use two wires to transmit, and two wires to receive data, while  the other four pins remain unused.  

For communication to occur, *transmit* pins must connect to the *receive* pins  of the remote host. This does not occur in a **straight-through** configuration:  

The pins must be **crossed-over** for communication to be successful:  

The *crossover* can be controlled either by the cable, or an intermediary  device, such as a hub or switch. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
31 

***Twisted-Pair Cabling – Cable and Interface Types*** 

The *layout* or *pinout* of the wires in the RJ45 connector dictates the **function** of the cable. There are three common types of twisted-pair cable:  • **Straight-through** cable 

• **Crossover** cable 

• **Rollover** cable 

The network *interface* type determines when to use each cable:  • **Medium Dependent Interface (MDI)** 

• **Medium Dependent Interface with Crossover (MDIX)** 

Host interfaces are generally MDI, while hub or switch interfaces are  typically MDIX.  

***Twisted-Pair Cabling – Straight-Through Cable*** 

A **straight-through** cable is used in the following circumstances:  • From a host to a hub – *MDI to MDIX* 

• From a host to a switch \- *MDI to MDIX* 

• From a router to a hub \- *MDI to MDIX* 

• From a router to a switch \- *MDI to MDIX* 

Essentially, a straight-through cable is used to connect *any device* to a hub or  switch, *except* for another hub or switch. The hub or switch provides the  *crossover* (or *MDIX*) function to connect transmit pins to receive pins.  

The pinout on each end of a straight-through cable **must be identical**. The  TIA/EIA-568B standard for a straight-through cable is as follows:  

***Pin\# Connector 1 Connector 2 Pin\#~~*     
1  2  3  4  5  6  7  8    
White Orange  Orange  

White Green  Blue  

White Blue  Green  

White Brown  Brown  

\------------------------  \------------------------  \------------------------  \------------------------  \------------------------  \------------------------  \------------------------  \------------------------  

White Orange  Orange  

White Green  Blue  

White Blue  Green  

White Brown  Brown  

1  2  3  4  5  6  7  8  

A straight-through cable is often referred to as a **patch cable.** 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
32 

***Twisted-Pair Cabling – Crossover Cable*** 

A **crossover** cable is used in the following circumstances:  • From a host to a host – *MDI to MDI* 

• From a hub to a hub \- *MDIX to MDIX* 

• From a switch to a switch \- *MDIX to MDIX* 

• From a hub to a switch \- *MDIX to MDIX* 

• From a router to a router \- *MDI to MDI* 

Remember that a hub or a switch will provide the crossover function.  However, when connecting a host directly to another host (MDI to MDI),  the crossover function must be provided by a crossover cable.  

A crossover cable is often required to uplink a hub to another hub, or to  uplink a switch to another switch. This is because the crossover is performed  *twice,* once on each hub or switch (MDIX to MDIX), negating the crossover.  

Modern devices can now **automatically detect** whether the crossover  function is required, negating the need for a crossover cable. This  functionality is referred to as **Auto-MDIX**, and is now standard with Gigabit  Ethernet, which uses all eight wires to both transmit *and* receive. Auto MDIX requires that autonegotiation be enabled.  

To create a crossover cable, the transmit pins must be swapped with the  receive pins on **one** end of the cable:  

• Pins 1 and 3  

• Pins 2 and 6  

***Pin\# Connector 1 Connector 2 Pin\#~~*     
1  2  3  4  5  6  7  8    
White Orange  Orange  

White Green  Blue  

White Blue  Green  

White Brown  Brown    
\------------------------  \------------------------  \------------------------  \------------------------  \------------------------  \------------------------  \------------------------  \------------------------    
White Green  Green  

White Orange  Blue  

White Blue  Orange  

White Brown  Brown    
3  6  1  4  5  2  7  8  

Note that the Orange and Green pins have been swapped on Connector 2\.  The first connector is using the TIA/EIA-568B standard, while the second  connector is using the TIA/EIA-568A standard. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
33 

***Twisted-Pair – Rollover Cable*** 

A **rollover** cable is used to connect a workstation or laptop into a Cisco  device’s **console** or **auxiliary** port, for management purposes. A rollover  cable is often referred to as a *console* cable, and its sheathing is usually flat  and light-blue in color.  

To create a rollover cable, the pins are completely reversed on one end of the  cable:  

***Pin\# Connector 1 Connector 2 Pin\#~~*     
1  2  3  4  5  6  7  8    
White Orange  Orange  

White Green  Blue  

White Blue  Green  

White Brown  Brown    
\------------------------  \------------------------  \------------------------  \------------------------  \------------------------  \------------------------  \------------------------  \------------------------    
Brown    
White Brown  Green  

White Blue  Blue  

White Green  Orange  

White Orange    
8  7  6  5  4  3  2  1  

Rollover cables can be used to configure Cisco routers, switches, and  firewalls. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
34 

***Power over Ethernet (PoE) *** 

**Power over Ethernet (PoE)** allows both data and power to be sent across  the same twisted-pair cable, eliminating the need to provide separate power  connections. This is especially useful in areas where installing separate  power might be expensive or difficult.  

PoE can be used to power many devices, including:  

• Voice over IP (VoIP) phones  

• Security cameras  

• Wireless access points  

• Thin clients  

PoE was originally formalized as **802.3af**, which can provide roughly 13W  of power to a device. **802.3at** further enhanced PoE, supporting 25W or  more power to a device.  

Ethernet, Fast Ethernet, *and* Gigabit Ethernet all support PoE. Power can be  sent across either the *unused* pairs in a cable, or the data transmission pairs,  which is referred to as **phantom power.** Gigabit Ethernet requires the  phantom power method, as it uses all eight wires in a twisted-pair cable.  

The device that *provides* power is referred to as the **Power Source  Equipment (PSE).** PoE can be supplied using an **external power injector**,  though each powered device requires a separate power injector.  

More commonly, an **802.3af-compliant network switch** is used to provide  power to many devices simultaneously. The power supplies in the switch  must be large enough to support both the switch itself, and the devices it is  powering.  

(Reference: *http://www.belden.com/docs/upload/PoE\_Basics\_WP.pdf*) 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
35 

**Section 4**    
**\- Hubs vs. Switches vs. Routers \-**  

***Layered Communication*** 

Network communication models are generally organized into **layers.** The  **OSI model** specifically consists of **seven layers,** with each layer  representing a specific networking function. These functions are controlled  by **protocols**, which govern end-to-end communication between devices.  

As data is passed from the user application down the virtual layers of the  OSI model, each of the lower layers adds a **header** (and sometimes a  **trailer**) containing protocol information specific to that layer. These headers  are called **Protocol Data Units (PDUs)**, and the process of adding these  headers is referred to as **encapsulation**.  

The PDU of each lower layer is identified with a unique term:  

\# 

| *Layer*  | *PDU Name*  |
| ----- | ----- |
|  |  |
| Application  | **\-**  |
| Presentation  | **\-**  |
| Session  | **\-**  |
| Transport  | **Segments**  |
| Network  | **Packets**  |
| Data-link  | **Frames**  |
| Physical  | **Bits**  |


7 

6 

5 

4 

3 

2 

1 

Commonly, network devices are identified by the OSI layer they *operate* at  (or, more specifically, what *header* or *PDU* the device processes).  

For example, **switches** are generally identified as Layer-2 devices, as  switches process information stored in the **Data-Link** header of a frame  (such as MAC addresses in Ethernet). Similarly, **routers** are identified as  Layer-3 devices, as routers process *logical* addressing information in the  **Network** header of a packet (such as IP addresses).  

However, the strict definitions of the terms *switch* and *router* have blurred  over time, which can result in confusion. For example, the term *switch* can  now refer to devices that operate at layers higher than Layer-2. This will be  explained in greater detail in this guide. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
36 

***Icons for Network Devices*** 

The following icons will be used to represent network devices for all guides  on routeralley.com:  

Hub\_\_\_\_ Switch\_\_\_ 

Multilayer Switch  
Router 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
37 

***Layer-1 Hubs*** 

**Hubs** are Layer-1 devices that physically connect network devices together  for communication. Hubs can also be referred to as **repeaters**.  

Hubs provide *no intelligent forwarding* whatsoever. Hubs are incapable of  processing either Layer-2 or Layer-3 information, and thus cannot make  decisions based on hardware or logical addressing.  

Thus, hubs will always forward *every* frame out *every* port, excluding the  port originating the frame. Hubs do not differentiate between frame types,  and thus will always forward unicasts, multicasts, and broadcasts out *every*  port but the originating port.  

Ethernet hubs operate at **half-duplex,** which allows a host to either transmit  or receive data, but not simultaneously. Half-duplex Ethernet utilizes  **Carrier Sense Multiple Access with Collision Detect (CSMA/CD)** to  control media access. *Carrier sense* specifies that a host will monitor the  physical link, to determine whether a *carrier* (or *signal)* is currently being  transmitted. The host will *only* transmit a frame if the link is **idle**.  

If two hosts transmit a frame simultaneously, a **collision** will occur. This  renders the collided frames unreadable. Once a collision is detected, both  hosts will send a **32-bit jam sequence** to ensure all transmitting hosts are  

aware of the collision. The collided frames are also discarded. Both devices  will then wait a *random* amount of time before resending their respective  frames, to reduce the likelihood of another collision.  

Remember, if *any* two devices connected to a hub send a frame  simultaneously, a collision *will* occur. Thus, all ports on a hub belong to the  same **collision domain**. A collision domain is simply defined as any  physical segment where a collision can occur.  

Multiple hubs that are uplinked together still all belong to *one* collision  domain. Increasing the number of host devices in a single collision domain  will increase the number of collisions, which will degrade performance.  

Hubs also belong to only one **broadcast domain –** a hub will forward both  broadcasts and multicasts out *every* port but the originating port. A broadcast  domain is a logical segmentation of a network, dictating how far a broadcast  (or multicast) frame can propagate.  

Only a Layer-3 device, such as a router, can separate broadcast domains. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
38 

***Layer-2 Switching*** 

Layer-2 devices build **hardware address tables,** which at a minimum  contain the following:  

• Hardware addresses for hosts  

• The port each hardware address is associated with  

Using this information, Layer-2 devices will make intelligent **forwarding** decisions based on the frame (or data-link) headers. A frame can then be  forwarded out *only* the appropriate destination port, instead of *all* ports.  

Layer-2 forwarding was originally referred to as **bridging.** Bridging is a  largely deprecated term (mostly for marketing purposes), and Layer-2  forwarding is now commonly referred to as **switching.**  

There are some subtle technological differences between *bridging* and  *switching*. Switches usually have a higher port-density, and can perform  forwarding decisions at wire speed, due to specialized hardware circuits  called **ASICs (Application-Specific Integrated Circuits).** Otherwise,  bridges and switches are nearly identical in function.  

Ethernet switches build **MAC address tables** through a dynamic learning  process. A switch behaves much like a hub when first powered on. The  switch will flood every frame, including unicasts, out *every* port but the  originating port.  

The switch will then build the MAC-address table by examining the **source MAC address** of each frame. Consider the following diagram:  

Switch When ComputerA sends a frame to  ComputerB, the switch will add *ComputerA*’s  

Fa0/10 Fa0/11   
MAC address to its table, associating it with  port fa0/10. However, the switch will not  learn *ComputerB’s* MAC address until  ComputerB sends a frame to ComputerA, or  to another device connected to the switch.  

Computer A   
Computer B   
Switches **always learn from the source  MAC address in a frame.** 

A switch is in a perpetual state of learning. However, as the MAC address  table becomes populated, the flooding of frames will decrease, allowing the  switch to perform more efficient forwarding decisions. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
39 

***Layer-2 Switching (continued)*** 

While hubs were limited to half-duplex communication, switches can  operate in **full-duplex.** *Each individual port* on a switch belongs to its *own  collision domain*. Thus, switches create **more collision domains**, which  results in **fewer collisions.** 

Like hubs though, switches belong to only *one* **broadcast domain.** A Layer 2 switch will forward both broadcasts and multicasts out *every* port but the  originating port. Only Layer-3 devices separate broadcast domains.  

Because of this, Layer-2 switches are poorly suited for large, scalable  networks. The Layer-2 header provides no mechanism to differentiate one  *network* from another, only one *host* from another.  

This poses *significant* difficulties. If *only* hardware addressing existed, all  devices would technically be on the *same* network. Modern internetworks  like the Internet could not exist, as it would be impossible to separate *my*  network from *your* network.  

Imagine if the entire Internet existed purely as a Layer-2 switched  environment. Switches, as a rule, will forward a broadcast out *every* port.  Even with a conservative estimate of a billion devices on the Internet, the  resulting broadcast storms would be devastating. The Internet would simply  collapse.  

Both hubs and switches are susceptible to **switching loops**, which result in  destructive broadcast storms. Switches utilize the **Spanning Tree Protocol  (STP)** to maintain a loop-free environment. STP is covered in great detail in  another guide.  

Remember, there are three things that switches do that hubs do not:  • **Hardware address learning**  

• **Intelligent forwarding of frames**  

• **Loop avoidance**  

Hubs are almost entirely deprecated – there is no advantage to using a hub  over a switch. At one time, switches were more expensive and introduced  more latency (due to processing overhead) than hubs, but this is no longer  the case. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
40 

***Layer-2 Forwarding Methods*** 

Switches support three **methods** of forwarding frames. Each method copies  all or part of the frame into memory, providing different levels of latency  and reliability. **Latency** is *delay* \- less latency results in quicker forwarding.  

The **Store-and-Forward** method copies the *entire* frame into memory, and  performs a Cycle Redundancy Check (CRC) to completely ensure the  integrity of the frame. However, this level of error-checking introduces the  highest latency of any of the switching methods.  

The **Cut-Through (Real Time)** method copies only enough of a frame’s  header to determine its destination address. This is generally the *first 6 bytes* following the preamble. This method allows frames to be transferred at *wire  speed*, and has the least latency of any of the three methods. No error  checking is attempted when using the cut-through method. 

The **Fragment-Free (Modified Cut-Through)** method copies only the *first  64 bytes* of a frame for error-checking purposes. Most collisions or  corruption occur in the first 64 bytes of a frame. Fragment-Free represents a  compromise between reliability (store-and-forward) and speed (cut-through). 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
41 

***Layer-3 Routing***  

Layer-3 **routing** is the process of forwarding a packet from one *network* to  another *network*, based on the Network-layer header. Routers build **routing  tables** to perform forwarding decisions, which contain the following:  • The destination network and subnet mask  

• The **next hop** router to get to the destination network  

• Routing *metrics* and Administrative Distance  

Note that Layer-3 forwarding is based on the destination *network*, and not  the destination *host*. It is possible to have *host routes*, but this is less  common.  

The routing table is concerned with two types of Layer-3 protocols:  • **Routed protocols** \- assigns logical addressing to devices, and routes  packets between networks. Examples include IP and IPX.  

• **Routing protocols** \- dynamically builds the information in routing  tables. Examples include RIP, EIGRP, and OSPF.  

*Each individual interface* on a router belongs to its *own collision domain*.  Thus, like switches, routers create **more collision domains**, which results in  **fewer collisions.** 

Unlike Layer-2 switches, Layer-3 routers also **separate broadcast domains**.  As a rule, a router **will never forward broadcasts** from one network to  another network (unless, of course, you explicitly configure it to). ☺  

Routers will not forward multicasts either, unless configured to participate in  a multicast tree. Multicast is covered in great detail in another guide.  

Traditionally, a router was required to copy each individual packet to its  buffers, and perform a route-table lookup. Each packet consumed CPU  cycles as it was forwarded by the router, resulting in latency. Thus, routing  was generally considered **slower** than switching.  

It is now possible for routers to *cache* network-layer flows in hardware,  greatly reducing latency. This has blurred the line between *routing* and  *switching,* from both a technological and marketing standpoint. Caching  network flows is covered in greater detail shortly.

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
42 

***Collision vs. Broadcast Domain Example*** 

Consider the above diagram. Remember that: 

• Routers separate *broadcast* and *collision* domains.  

• Switches separate *collision* domains.  

• Hubs belong to only one *collision* domain.  

• Switches and hubs both only belong to one *broadcast* domain.  

In the above example, there are **THREE** broadcast domains, and **EIGHT**  collision domains: 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), 

unless otherwise noted. All other material copyright © of their respective owners.    
 This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
43 

***VLANs – A Layer-2 or Layer-3 Function? *** 

By default, a switch will forward both broadcasts and multicasts out *every* port but the originating port.  

However, a switch can be logically segmented into multiple broadcast  domains**,** using **Virtual LANs** (or **VLANs**). VLANs are covered in  extensive detail in another guide.  

Each VLAN represents a unique broadcast domain:  

• Traffic between devices within the *same* VLAN is switched  (forwarded at Layer-2).  

• Traffic between devices in *different* VLANs requires a Layer-3  device to communicate.  

Broadcasts from one VLAN will not be forwarded to another VLAN. The  logical separation provided by VLANs is **not a Layer-3 function.** VLAN  tags are inserted into the **Layer-2 header**.  

Thus, a switch that supports VLANs is not necessarily a Layer-3 switch.  However, a purely Layer-2 switch cannot route between VLANs.  

**Remember,** though VLANs provide separation for *Layer-3* broadcast  domains, they are still a *Layer-2* function. A VLAN often has a one-to-one  relationship with an IP subnet, though this is not a requirement. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
44 

***Layer-3 Switching***  

In addition to performing Layer-2 switching functions, a **Layer-3 switch** must also meet the following criteria:  

• The switch must be capable of making Layer-3 forwarding decisions  (traditionally referred to as routing).  

• The switch must cache network traffic flows, so that Layer-3  forwarding can occur in hardware.  

Many older modular switches support Layer-3 route processors – this alone  does not qualify as Layer-3 switching. Layer-2 and Layer-3 processors can  act independently within a single switch chassis, with each packet requiring  a route-table lookup on the route processor.  

Layer-3 switches leverage ASICs to perform Layer-3 forwarding in  hardware. For the first packet of a particular traffic flow, the Layer-3 switch  will perform a standard route-table lookup. This flow is then *cached* in  hardware – which preserves required routing information, such as the  destination network and the MAC address of the corresponding next-hop.  

Subsequent packets of that flow will bypass the route-table lookup, and will  be forwarded based on the cached information, reducing latency. This  concept is known as *route once, switch many.* 

Layer-3 switches are predominantly used to route between VLANs:




Traffic between devices within the same VLAN, such as ComputerA and  ComputerB, is *switched* at Layer-2 as normal. The first packet between  devices in different VLANs, such as ComputerA and ComputerD, is *routed*.  The switch will then cache that IP traffic flow, and subsequent packets in  that flow will be *switched* in hardware. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
45 

***Layer-3 Switching vs. Routing – End the Confusion\! *** 

The evolution of network technologies has led to considerable confusion  over the terms *switch* and *router.* Remember the following: • The traditional definition of a *switch* is a device that performs Layer-2  forwarding decisions.  

• The traditional definition of a *router* is a device that performs Layer-3  forwarding decisions.  

Remember also that, switching functions were typically performed in  *hardware,* and routing functions were typically performed in *software.* This  resulted in a widespread perception that switching was *fast,* and routing was  *slow* (and *expensive*)*.*  

Once Layer-3 forwarding became available in hardware, marketing gurus  muddied the waters by distancing themselves from the term *router*. Though  Layer-3 forwarding in hardware is still *routing* in every technical sense, such  devices were rebranded as Layer-3 switches.  

Ignore the marketing noise. **A Layer-3 switch** is **still a router.**  

Compounding matters further, most devices still currently referred to as  *routers* can perform Layer-3 forwarding in hardware as well. Thus, both  Layer-3 switches *and* Layer-3 routers perform nearly identical functions at  the same performance.  

There are some differences in *implementation* between Layer-3 switches and  routers, including (but not limited to):  

• Layer-3 switches are optimized for Ethernet, and are predominantly  used for inter-VLAN routing. Layer-3 switches can also provide  Layer-2 functionality for intra-VLAN traffic.  

• Switches generally have higher port densities than routers, and are  considerably cheaper per port than routers (for Ethernet, at least).  • Routers support a large number of WAN technologies, while Layer-3  switches generally do not.  

• Routers generally support more advanced feature sets.  

Layer-3 switches are often deployed as the backbone of LAN or campus  networks. Routers are predominantly used on network perimeters,  connecting to WAN environments.  

(Fantastic Reference: http://blog.ioshints.info/2011/02/how-did-we-ever-get-into-this-switching.html) 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
46 

***Multilayer Switching *** 

**Multilayer switching** is a generic term, referring to any switch that  forwards traffic at layers higher than Layer-2. Thus, a Layer-3 switch is  considered a multilayer switch, as it forwards frames at Layer-2 and packets  at Layer-3.  

A **Layer-4 switch** provides the same functionality as a Layer-3 switch, but  will additionally examine and cache **Transport-layer application flow**  information, such as the TCP or UDP port.  

By caching application flows, **QoS (Quality of Service)** functions can be  applied to preferred applications.  

Consider the following example:


Network and application traffic flows from ComputerA to the Webserver  and Fileserver will be cached. If the traffic to the Webserver is preferred,  then a higher QoS priority can be assigned to that application flow.  

Some advanced multilayer switches can provide load balancing, content  management, and other application-level services. These switches are  sometimes referred to as **Layer-7 switches.** 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
47 

**Section 5**    
**\- Spanning Tree Protocol \-**  

***Switching Loops*** 

A Layer-2 switch belongs to only *one* **broadcast domain,** and will forward  both broadcasts and multicasts out *every* port but the originating port.  

When a **switching loop** is introduced into the network, a destructive  **broadcast storm** will develop within *seconds*. A storm occurs when  broadcasts are endlessly forwarded through the loop. Eventually, the storm  will choke off all other network traffic.  

Consider the following example:


  
If HostA sends out a broadcast, SwitchD will forward the broadcast out all  ports in the same VLAN, including the trunk ports connecting to SwitchB  and SwitchE. In turn, those two switches will forward that broadcast out all  ports, including the trunks to the neighboring SwitchA and SwitchC.  

The broadcast will loop around the switches *infinitely*. In fact, there will be  *two* separate broadcast storms cycling in opposite directions through the  switching loop. Only powering off the switches or physically removing the  loop will stop the storm. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
48 

***Spanning Tree Protocol (STP) *** 

**Spanning Tree Protocol (STP)** was developed to prevent the broadcast  storms caused by switching loops. STP was originally defined in **IEEE  802.1D**.  

Switches running STP will build a map or **topology** of the entire switching  network. STP will identify if there are any loops, and then disable or *block*  as many ports as necessary to eliminate all loops in the topology.  

A blocked port can be reactivated if another port goes down. This allows  STP to maintain redundancy and fault-tolerance.  

However, because ports are blocked to eliminate loops, STP does not  support load balancing unless an EtherChannel is used. EtherChannel is  covered in great detail in another guide.  

STP switches exchange **Bridge Protocol Data Units (BPDU’s)** to build the  topology database. BPDU’s are forwarded out all ports every **two seconds,**  to a dedicated MAC multicast address of 0180.c200.0000.  

Building the STP topology is a multistep **convergence** process:  • A **Root Bridge** is elected  

• **Root ports** are identified  

• **Designated ports** are identified  

• Ports are placed in a **blocking** state as required, to eliminate loops  

The **Root Bridge** serves as the central reference point for the STP topology.  STP was originally developed when Layer-2 *bridges* were still prevalent,  and thus the term Root *Bridge* is still used for nostalgic reasons. It is also  acceptable to use the term **Root Switch**, though this is less common.  

Once the full topology is determined, and loops are eliminated, the switches  are considered **converged.** 

STP is **enabled** by default on all Cisco switches, for all VLANs. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
49 

***Electing an STP Root Bridge*** 

The first step in the STP convergence process is electing a **Root Bridge**,  which is the central reference point for the STP topology. As a best practice,  the Root Bridge should be the most centralized switch in the STP topology.  

A Root Bridge is elected based on its **Bridge ID,** comprised of two  components in the original 802.1D standard:  

• 16-bit **Bridge priority** 

• 48-bit **MAC address** 

The default priority is **32,768**, and the **lowest priority wins**. If there is a tie  in priority, the **lowest MAC address** is used as the tie-breaker.  

Consider the following example:  

SwitchA   
Priority: 100 

MAC: 0000.1111.2222 

SwitchB   
Priority: 32,768   
MAC: 0000.2222.3333 

SwitchD   
Priority: 100   
MAC: 0000.4444.5555   
SwitchC   
Priority: 32,768   
MAC: 0000.6666.7777 

SwitchE   
Priority: 32,768   
MAC: 0000.8888.9999 

Switches exchange BPDU’s to perform the election process, and the lowest  Bridge ID determines the Root Bridge:  

• SwitchB, SwitchC, and SwitchE have the default priority of 32,768.  • SwitchA and SwitchD are tied with a lower priority of 100\.  • SwitchA has the lowest MAC address, and will be elected the Root  Bridge.  

By default, a switch will always believe it is the Root Bridge, until it  receives a BPDU from a switch with a lower Bridge ID. This is referred to  as a **superior BPDU.** The election process is continuous – if a new switch  with the lowest Bridge ID is added to the topology, it will be elected as the  Root Bridge. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
50 

***Identifying Root Ports*** 

The second step in the STP convergence process is to identify **root ports.**  The root port of each switch has the lowest **root path cost** to get to the Root  Bridge.  

Each switch can only have *one* root port. The Root Bridge *cannot* have a  root port, as the purpose of a root port is to *point* to the Root Bridge.  

Path cost is a *cumulative* cost to the Root Bridge, based on the bandwidth of the links. The *higher* the bandwidth, the *lower* the path cost:  

***Bandwidth Cost ***   
4 Mbps 250    
10 Mbps 100    
16 Mbps 62    
45 Mbps 39    
100 Mbps 19    
155 Mbps 14    
1 Gbps 4    
10 Gbps 2  

A lower cost is preferred. Consider the following example:  

Each 1Gbps link has a path cost of *4\.* SwitchA has a cumulative path cost of  *0*, because it is the Root Bridge. Thus, when SwitchA sends out BPDU’s, it  advertises a root path cost of 0\. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
51 

***Identifying Root Ports (continued)*** 

SwitchB has two paths to the Root Bridge:  

• A direct connection to SwitchA, with a path cost of *4\.*  

• Another path through SwitchD, with a path cost of *16\. * 

The **lowest cumulative path cost** is considered **superior**, thus the port  directly connecting to SwitchA will become the root port. A BPDU  advertising a *higher* path cost is often referred to as an **inferior BPDU.**  

SwitchD also has two paths to the Root Bridge:  

• A path through SwitchB, with a path cost of *8\.* 

• A path through SwitchE, with a path cost of *12*.  

• The port to SwitchB is preferred, and will become the root port.  

Recall that the Root Bridge will advertise BPDU’s with a path cost of *0\.* As  the downstream switches *receive* these BPDU’s, they will add the path cost  of the *receiving port*, and then advertise the cumulative cost to neighbors.  

For example, SwitchC will receive a BPDU with a path cost of *0* from  SwitchA, which is the Root Bridge. SwitchC will add the path cost of its  receiving port, and thus SwitchC’s cumulative path cost will be *4*.  

SwitchC will advertise a path cost of *4* to SwitchE, which will add the path  cost of its receiving port. SwitchE’s cumulative path cost will thus be *8\.*  

Path cost can be artificially adjusted on a per-port basis:  

**SwitchD(config)\#** *int gi2/22*    
**SwitchD(config-if)\#** *spanning-tree vlan 101 cost 42* 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
52 

***Identifying Designated Ports*** 

The third step in the STP convergence process is to identify **designated  ports.** A single designated port is identified for each network *segment.* This  port is responsible for forwarding BPDUs and frames to that segment.  

If two ports are eligible to become the designated port, then there is a **loop**.  One of the ports will be placed in a blocking state to eliminate the loop.  

Similar to a root port, the designated port is determined by the lowest  cumulative path cost leading the Root Bridge. A designated port will *never*  be placed in a blocking state, unless there is a change to the switching  topology and a more preferred designated port is elected.  

**Note**: A port can never be both a designated port *and* a root port.  Consider the following example:


  
Ports on the Root Bridge are *never* placed in a blocking state. Thus, the two  ports off of SwitchA will automatically become designated ports.  

**Remember,** every network segment **must have one designated port**,  regardless if a root port already exists on that segment.  

Thus, the network segments between SwitchB and SwitchD, and between  SwitchC and SwitchE, both require a designated port. The ports on SwitchD  and Switch E have already been identified as root ports, thus the ports on  Switch B and C will become the designated ports. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
53 

***Identifying Designated Ports (continued)*** 

Note that the network segment between SwitchD and SwitchE does not  contain a root port: 

Because two ports on this segment are eligible to become the designated    
port, STP recognizes that a loop exists. One of the ports must be elected as  the designated port, and the other must be placed in a blocking state.  

Normally, whichever switch has the lowest cumulative path cost will have  its port become designated. The switch with the highest path cost will have  its port blocked.  

In the above example, there is a **tie** in cumulative path cost. Both SwitchD  and SwitchE have a path cost of *12* to reach the Root Bridge on that  segment.  

The **lowest Bridge ID** is used as the tiebreaker. SwitchD has a priority of  *100,* and SwitchE has the default priority of *32,768*.  

Thus, the port on SwitchD will become the designated port. The port on  SwitchE will be placed in a blocking state.  

As with electing the Root Bridge, if there is a tie in priority, the **lowest  MAC address** is used as the tie breaker.  

**Remember:** Any port not elected as a root or designated port will be placed  in a blocking state. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
54 

***Port ID*** 

When electing root and designated ports, it is possible to have a tie in *both*  path cost *and* Bridge ID. Consider the following example:




The bandwidth of both links is equal, thus both ports on SwitchB have an  equal path cost to the Root Bridge. Which port will become the root port  then? Normally, the lowest Bridge ID is used as the tiebreaker, but that is  not possible in this circumstance.  

**Port ID** is used as the final tiebreaker, and consists of two components:  • 4-bit **port priority** 

• 12-bit **port number**, derived from the physical port number  

By default, the port priority of an interface is **128**, and a *lower* priority is  preferred. If there is a tie in priority, the lowest port number is preferred.  

The *sender* port ID determines the tie break, and not the *local* port ID. In the  above example, SwitchB must decide whether *gi2/23* or *gi2/24* becomes the  root port. SwitchB will observe BPDU’s from SwitchA, which will contain  the port ID’s for *gi2/10* and *gi2/11.*  

If priorities are equal, the sender Port ID from *gi2/10* is preferred, due to the  lower port number. Thus, *gi2/23* on SwitchB will become the root port.  

The port number is a fixed value, but port priority can be changed on a per interface basis:  

**Switch(config)\#** *int gi2/11*    
**Switch(config-if)\#** *spanning-tree vlan 101 port-priority 32* 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
55 

***Port ID (continued)*** 

**Note:** Some reference material may state that the Port ID is comprised of an  *8-bit* priority and *8-bit* port number. This was accurate in the *original* 802.1D specification.  

However, **IEEE 802.1t** revised the original specification to provide the  larger *12-bit* port number field, to accommodate modular switches with high  port density.  

Even more confusing – some whitepapers on Cisco’s website will define the  Port ID as a combination of port priority and *MAC address*, instead of port  number. This is not accurate in modern STP implementations.


**Remember:** Port ID is the *last* tiebreaker STP will consider. STP  

determines root and designated ports using the following criteria, *in order*:  • Lowest path cost to the Root Bridge  

• Lowest bridge ID  

• Lowest sender port ID  

Lowest Bridge ID is *always* used to determine the Root Bridge. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
56 

***Versions of STP***  

There are three flavors of the original 802.1D version of STP:  • **Common Spanning Tree (CST)**  

• **Per-VLAN Spanning Tree (PVST)**  

• **Per-VLAN Spanning Tree Plus (PVST+)**  

**CST** utilizes a *single* STP instance for *all* VLANs, and is sometimes referred  to as *mono* spanning tree. All CST BPDU’s are sent over the **native VLAN** on a trunk port, and thus are untagged.  

**PVST** employs a *separate* STP instance for *each* VLAN, improving  flexibility and performance. PVST requires trunk ports to use **ISL  encapsulation.** PVST and CST are not compatible.  

The enhanced **PVST+** is compatible with both CST and PVST, and supports  both ISL and 802.1Q encapsulation. PVST+ is the *default* mode on many  Cisco platforms.  

STP has continued to evolve over time. Modern extensions of STP will be  covered later in this guide:  

• **Rapid Spanning Tree Protocol (RSTP)** 

• **Multiple Spanning Tree (MST)**

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
57 

***Extended System IDs *** 

In the original 802.1D standard, the 64-bit Bridge ID consisted of two  components:  

• 16-bit **Bridge priority** 

• 48-bit **MAC address** 

As STP evolved to operate on a per-VLAN basis, a unique Bridge ID  became mandatory for each VLAN. This was originally accomplished by  assigning a unique switch MAC address to the Bridge ID of each VLAN.  

This approach suffered from scalability issues, requiring that a switch  support at least 1024 unique system MAC addresses – at least one per  VLAN.  

**IEEE 802.1t** altered the Bridge ID to include an **extended system ID**,  which identifies the VLAN number of the STP instance. The Bridge ID  remained 64 bits, but now consisted of three components:  • 4-bit **Bridge priority** 

• 12-bit **System** or **VLAN ID** 

• 48-bit **MAC address** 

By stealing 12 bits from the bridge priority, the *range* of priorities is altered:  • The original priority ranged from *0* to *65,535,* with **32,768** as default.  • With extended system IDs, the new priority range is *0* to *61,440*, and  the priority must be in multiples of 4,096.  

• The default is still 32,768.  

Extended system ID’s are **enabled by default** and **cannot be disabled** if a  switch platform does not support 1024 system MAC addresses.  

For platforms that support 1024 MAC addresses, the extended system ID  can be manually enabled:  

**Switch(config)\#** *spanning-tree extend system-id*  

Extended system IDs increase the number of supported VLANs in the STP  topology from *1005* to *4094*. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
58 

***Basic STP Configuration *** 

STP is **enabled** by default on all Cisco switches, for all VLANs and ports.  PVST+ is the default STP mode on most modern Cisco platforms, allowing  each VLAN to run a separate STP instance.  

STP can be disabled. This should be done with caution \- any switching loop  will result in a broadcast storm. To disable STP for an entire VLAN:  

**Switch(config)\#** *no spanning-tree vlan 101*  

A range of VLANs can be specified:  

**Switch(config)\#** *no spanning-tree vlan 1 \- 4094*  

STP can also be disabled on a per-port basis, for a specific VLAN:  

**Switch(config)\#** *interface gi2/23*    
**Switch(config-if)\#** *no spanning-tree vlan 101*  

The switch with the lowest Bridge ID is elected as the Root Bridge. The  priority can be adjusted from its default of 32,768, to increase the likelihood  that a switch is elected as the Root Bridge.  

Priority can be configured on a per-VLAN basis. Remember that the priority  must be in multiples of 4,096 when extended system IDs are enabled:  

**SwitchA(config)\#** *spanning-tree vlan 101 priority 8192*  

A switch can be indirectly *forced* to become the Root Bridge for a specific  VLAN:  

**SwitchA(config)\#** *spanning-tree vlan 101 root primary*  

The *root primary* parameter automatically lowers the priority to 24,576. If  another switch has a priority *lower* than 24,576, the priority will be lowered  to 4,096 less than the current Root Bridge.  

STP does not technically support a *backup* Root Bridge. However, the *root  secondary* command can increase the likelihood that a specified switch will  succeed as the new Root Bridge in the event of a failure:    
    
**SwitchB(config)\#** *spanning-tree vlan 101 root secondary*  

The *root secondary* parameter in the above command automatically lowers  the switch’s priority to 28,672. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
59 

***STP Port States*** 

As STP *converges* the switching topology, a switch port will progress through a series of **states**:  

• **Blocking**  

• **Listening**  

• **Learning**  

• **Forwarding**  

Initially, a switch port will start in a **blocking** state:  

• A blocking port *will not* forward frames or learn MAC addresses.  • A blocking port *will* still *listen* for BPDUs from other switches, to  learn about changes to the switching topology.  

A port will then transition from a blocking to a **listening** state:  • The switch must believe that the port *will not be shut down* to  eliminate a loop. In other words, the port may become a root or  designated port.  

• A listening port *will not* forward frames or learn MAC addresses.  • A listening port *will* send and listen for BPDUs, to participate in the  election of the Root Bridge, root ports, and designated ports.  • If a listening port is *not elected* as a root or a designated Port, it will  **transition back to a blocking state.**  

If a listening port is elected as a *root* or *designated* port, it will transition to a  **learning** state:  

• A port must wait a brief period of time, referred to as the **forward  delay**, before transitioning from a listening to learning state.  • A learning port *will continue* to send and listen for BPDUs.  • A learning port *will begin* to add MAC addresses to the CAM table.  • However, a learning port *cannot* forward frames quite yet.  

Finally, a learning port will transition to a **forwarding** state:  • A port must wait *another* forward delay before transitioning from  learning to forwarding.  

• A forwarding port is fully functional – it will send and listen for  BPDUs, learn MAC addresses, and forward frames.  

• Root and designated ports will eventually transition to a forwarding  state. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
60 

***STP Port States (continued)*** 

Technically, there is a fifth port state – **disabled.** A port in a disabled state  has been *administratively shutdown*. A disabled port does not forward  frames or participate in STP convergence.  

Why does a port start in a blocking state? STP *must* initially assume that a  loop exists. A broadcast storm can form in seconds, and requires physical  intervention to stop.  

Thus, STP will always take a proactive approach. Starting in a blocking state  allows STP to complete its convergence process *before* any traffic is  forwarded. In perfect STP operation, a broadcast storm should never occur.




To view the current state of a port:  

**SwitchA\#** *show spanning-tree interface gi2/10*  

`Vlan Role Sts Cost Prio.Nbr Type`    
`------------------- ---- --- --------- -------- -----------------  VLAN0101 Desg FWD 4 128.34 P2p` 

`VLAN0102 Desg FWD 4 128.34 P2p` 

**SwitchB\#** *show spanning-tree interface gi2/24*  

`Vlan Role Sts Cost Prio.Nbr Type`    
`------------------- ---- --- --------- -------- -----------------  VLAN0101 Root FWD 4 128.48 P2p` 

`VLAN0102 Altn BLK 4 128.48 P2p`

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
61 

***STP Timers*** 

Switches running STP exchange BPDUs to build and converge the topology  database. There are three **timers** that are crucial to the STP process:  • **Hello timer** 

• **Forward delay timer** 

• **Max age timer** 

The **hello timer** determines how often switches send BPDUs. By default,  BPDUs are sent every **2 seconds.**  

The **forward delay timer** determines how long a port must spend in both a  *learning* and *listening* state:  

• Introducing this delay period ensures that STP will have enough time  to detect and eliminate loops.  

• By default, the forward delay is **15 seconds**.  

• Because a port must transition through *two* forward delays, the *total* delay time is 30 seconds.  

The **max age timer** indicates how long a switch will retain BPDU  information from a neighbor switch, before discarding it:  

• Remember that BPDUs are sent every two seconds.  

• If a switch fails to receive a BPDU from a neighboring switch for the  max age period, it will assume there was a change in the switching  topology. 

• STP will then purge that neighbor’s BPDU information.  • By default, the max age timer is **20 seconds.**  

Timer values can be adjusted. However, this is rarely necessary, and can  negatively impact STP performance and reliability.  

Timers must be changed on the **Root Bridge.** The Root Bridge will  propagate the new timer values to all switches **using BPDUs**. Non-root  switches will **ignore** their locally configured timer values.  

To manually adjust the three STP timers for a specific VLAN:  

**Switch(config)\#** *spanning-tree vlan 101 hello-time 10*    
**Switch(config)\#** *spanning-tree vlan 101 forward-time 20*    
**Switch(config)\#** *spanning-tree vlan 101 max-age 40*  

The timer values are measured in seconds, and the above represents the  *maximum* possible value for each timer. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
62 

***STP Diameter*** 

The default values of each STP timer are based on the **diameter** of the  switching topology.  

The diameter is the *length* of the topology, measured in the number of  switches including the Root Bridge. The following example has a diameter  of *4* switches: 

SwitchA 

Root Bridge 

SwitchB 

SwitchC 

SwitchD 

By default, STP assumes a switching diameter of **7\.** This is also the  *maximum* diameter.  

**Note:** The switching topology can contain more than seven switches.  However, each *branch* of the switching *tree* can only extend seven switches  deep, with the Root Bridge always at the top of the branch.  

The *diameter* should be configured on the Root Bridge:  

**SwitchA(config)\#** *spanning-tree vlan 101 root primary diameter 5*  

The *diameter* command adjusts the hello, forward delay, and max age  timers. This is the **recommended way** to adjust timers, as the timers are  tuned specifically to the diameter of the switching network. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
63 

***STP Topology Changes *** 

Switches exchange two types of BPDUs when building and converging the  topology database:  

• **Configuration BPDUs** 

• **Topology Change Notification (TCN) BPDUs**  

Configuration BPDUs are used to elect Root Bridges, root ports, and  designated ports.  

A TCN will be sent under two circumstances:  

• When a port transitions into a *forwarding* state.  

• When a *forwarding* or *learning* port transitions into a *blocking* or  *down* state.  

When a topology change occurs, a switch will send a TCN BPDU out its  **root port**, destined for the Root Bridge. The TCN contains no information  about the change – it only indicates that a change *occurred.* 

Consider the following example: 

If the port on SwitchD connecting to SwitchE went down:  • SwitchD would send a TCN out its root port to SwitchB.  • SwitchB will *acknowledge* this TCN, by responding with a TCN with  the **Topology Change Acknowledgement (TCA) flag** set.  • SwitchB then forward the TCN out *its* root port to SwitchA, the Root  Bridge. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
64 

***STP Topology Changes (continued) *** 

Once the Root Bridge receives the TCN, it will send out a *configuration* BPDU to *all* switches, with the **Topology Change (TC) flag** set. This  ensures that all switches in the STP topology are informed of the change.


  
When a switch receives this root BPDU, it will temporarily reduce its CAM  aging timer from 300 seconds to a value equal to the forward delay timer \-  **15 seconds** by default. This allows any erroneous MAC addresses to be  quickly flushed from the CAM table.  

The CAM aging timer will remain at a reduced value for the duration of one  forward delay *plus* one max age period – a total of **35 seconds** by default.  

Two types of failures can occur in the STP topology, depending on the  *perspective* of a switch:  

• **Direct** failures 

• **Indirect** failures 

For example, if the root port on SwitchB fails, SwitchB would consider this  a **direct failure.** SwitchB will detect immediately that the physical port is  down, and STP will react accordingly.  

That same port failing would represent an **indirect failure** for SwitchD.  SwitchD would lose its path to the Root Bridge. However, because the port  is not local on SwitchD, it must learn of the topology change from its  neighbors. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
65 

***STP Topology Changes (continued) *** 

By detecting and reacting to link failures, STP can take advantage of the  redundancy provided by loops. However, the failover is *not* instantaneous.


  
If the root port on SwitchE were to fail:    
• SwitchE would immediately purge any BPDU information received  from SwitchC.  

• SwitchC would send a TCN to the Root Bridge.  

• The Root Bridge would send a configuration BPDU to all switches,  with the TC flag set.  

• All switches would reduce their CAM aging timer to 15 seconds.  • SwitchE would eventually receive a BPDU from SwitchD.  **Remember,** blocked ports *still* receive BPDUs to learn about  topology changes.  

• The blocked port to SwitchD now represents the best and only path  for SwitchE to reach the Root Bridge.  

• The blocked port will transition first to a listening state, and then to a  learning state. The port will wait the forward delay time in both states,  for a total of 30 seconds.  

• The port will finally transition to a forwarding state.  

Thus, hosts on SwitchE will be impacted by this failure for a *minimum* of **30  seconds.** STP will maintain redundancy if there is a loop, but a link failure  will still negatively impact the network for a short period. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
66 

***Improving STP Convergence *** 

In many environments, a 30 second outage for every topology change is  unacceptable. Cisco developed three proprietary features that improve STP  convergence time:  

• **PortFast**  

• **UplinkFast**  

• **BackboneFast**  

Each feature will be covered in detail in the following sections.  

***PortFast***  

By default, all ports on a switch participate in the STP topology. This  includes any port that connects to a *host*, such as a workstation. In most  circumstances, a host represents no risk of a loop. 

The host port will transition through the normal STP states, including  waiting two forward delay times. Thus, a host will be without network  connectivity for a *minimum* of 30 seconds when first powered on.  

This is not ideal for a couple reasons:  

• Users will be annoyed by the brief outage.  

• A host will often request an IP address through DHCP during bootup.  If the switch port is not *forwarding* quickly enough, the DHCP  request may fail.  

• Devices that boot from network may fail as well.  

**PortFast** allows a switch port to bypass the usual progression of STP states.  The port will instead transition from a *blocking* to a *forwarding* state  **immediately**, eliminating the typical 30 second delay.  

PortFast should *only* be enabled on ports connected to a host. If enabled on a  port connecting to a switch or hub, any loop may result in a broadcast storm.  

**Note:** PortFast does *not* disable STP on a port \- it merely accelerates STP  convergence. If a PortFast-enabled port receives a BPDU, it will transition  through the normal process of STP states. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
67 

***PortFast (continued) *** 

SwitchA 

Root Bridge 

Root Port Root Port 

SwitchB SwitchD 

HostA   
Root Port Root Port gi1/14   
SwitchC SwitchE 

PortFast provides an additional benefit. Remember that a switch will  generate a TCN if a port transitions to a *forwarding* or *blocked* state*.* This is  true even if the port connects to a host device, such as a workstation.  

Thus, powering on or off a workstation will cause TCNs to reach the Root  Bridge, which will send out configuration BPDUs in response. Because the  switching topology did not technically *change*, no outage will occur.  

However, all switches will reduce the CAM aging timer to 15 seconds, thus  purging MAC addresses from the table very quickly. This will increase  frame flooding and reduce the efficiency and performance.  

PortFast eliminates this unnecessary BPDU traffic and frame flooding. A  TCN will not be generated for state changes on a PortFast-enabled port.  

Portfast is **disabled** by default. To enable PortFast on a switch port:  

**SwitchD(config)\#** *int gi1/14*    
**SwitchD(config-if)\#** *spanning-tree portfast*  

PortFast can also be globally enabled for all interfaces:  

**SwitchD(config)\#** *spanning-tree portfast default* 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
68 

***UplinkFast***  

Often, a switch will have multiple uplinks to another *upstream* switch:  

SwitchA 

Root Bridge 

gi2/23 gi2/24 

SwitchB 

If the links are not bundled using an EtherChannel, at least one of the ports  will transition to a *blocking* state to eliminate the loop. In the above  example, port *gi2/24* was placed into a blocking state on SwitchB.  

Normally, if the root port fails on the local switch, STP will need to perform  a recalculation to transition the *other* port out of a blocking state. At a  minimum, this process will take **30 seconds.**    
    
**UplinkFast** allows a blocking port to be held in a *standby* state. If the root  port fails, the blocking port can *immediately* transition to a forwarding state.  Thus, UplinkFast improves convergence time for *direct* failures in the STP  topology.  

If *multiple* ports are in a blocking state, whichever port has the lowest root  path cost will transition to forwarding.  

UplinkFast is *disabled* by default, and must be enabled globally for all  VLANs on the switch:  

**Switch(config)\#** *spanning-tree uplinkfast*  

UplinkFast functions by tracking all possible links *to* the Root Bridge. Thus,  UplinkFast is **not supported** on the Root Bridge. In fact, enabling this  feature will automatically increase a switch’s bridge priority to 49,152.  

UplinkFast is intended for the *furthest downstream* switches in the STP  topology. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
69 

***BackboneFast***  

UplinkFast provides faster convergence if a *directly*\-*connected* port fails. In  contrast, **BackboneFast** provides improved convergence if there is an  *indirect* failure in the STP topology.


  
If the link between SwitchB and SwitchA fails, SwitchD will eventually  recalculate a path through SwitchE to reach the Root Bridge. However,  SwitchD must wait the max age timer before purging SwitchB’s superior  BPDU information. By default, this is **20 seconds**.  

BackboneFast allows a switch to bypass the max age timer. The switch will  accept SwitchE’s inferior BPDU’s immediately. The blocked port on  SwitchE must *still* transition to a forwarding state. Thus, BackboneFast  essentially reduces total convergence time from 50 seconds to 30 seconds for  an indirect failure.  

This is accomplished by sending out **Root Link Queries (RLQs)**. The Root  Bridge will respond to these queries with a **RLQ Reply**:  

• If a RLQ Reply is received on a root port, the switch knows that the  root path is stable.  

• If a RLQ Reply is received on a non-root port, the switch knows that  the root path has failed. The max age timer is immediately expired to  allow a new root port to be elected.  

BackboneFast is a *global* command, and should be enabled on *every* switch:  **Switch(config)\#** *spanning-tree backbonefast*   
*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
70 

***Protecting STP***  

STP is vulnerable to attack for two reasons:  

• STP builds the topology by accepting BPDUs from neighboring  switches.  

• The Root Bridge is always determined by the lowest Bridge ID.  

A switch with a low priority can be maliciously or inadvertently installed on  the network, and then elected as the Root Bridge. STP will reconverge, often  resulting in instability or a suboptimal topology.  

Cisco implemented three mechanisms to protect the STP topology:  • **Root Guard**  

• **BPDU Guard**  

• **BPDU Filtering**  

All three mechanisms are configured on a per-port basis, and are *disabled* by  default.  

***Root Guard***  

**Root Guard** prevents an unauthorized switch from advertising itself as a  Root Bridge. If a BPDU *superior* to the Root Bridge is received on a port  with Root Guard enabled, the port is placed in a *root-inconsistent* state.  

In this state, the port is essentially in a *blocking* state, and will not forward  frames. The port can still listen for BPDUs.  

Root Guard is enabled on a per-port basis, and is disabled by default:  

**Switch(config)\#** *interface gi1/14*    
**Switch(config-if)\#** *spanning-tree guard root*  

To view all ports that have been placed in a *root-inconsistent* state:  **Switch\#** *show spanning-tree inconsistentports*  

`Name Interface Inconsistency`    
`-------------------- -------------------- ------------------  VLAN100 GigabitEthernet1/14 Root Inconsistent` 

    
Root Guard can automatically recover. As soon as superior BPDUs are no  longer received, the port will transition normally through STP states. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
71 

***BPDU Guard***  

Recall that **PortFast** allows a switch port to bypass the usual progression of  STP states. However, PortFast does *not* disable STP on a port \- it merely  accelerates STP convergence. However, a PortFast-enabled port will still  accept BPDUs.  

PortFast should *only* be enabled on ports connected to a host. If enabled on a  port connecting to a switch, any loop may result in a broadcast storm.  

To prevent such a scenario, **BPDU Guard** can be used in conjunction with  PortFast. Under normal circumstances, a port with PortFast enabled should  *never* receive a BPDU, as it is intended only for hosts.  

BPDU Guard will place a port in an **errdisable** state if a BPDU is received,  regardless if the BPDU is superior or inferior. The STP topology will not be  impacted by another switch that is inadvertently connected to that port.  

BPDU Guard should be enabled on any port with PortFast enabled. It is  *disabled* by default, and can be enabled on a per-interface basis:  

**Switch(config)\#** *interface gi1/14*    
**Switch(config-if)\#** *spanning-tree bpduguard enable*  

If BPDU Guard is enabled *globally*, it will only apply to PortFast ports:  **Switch(config)\#** *spanning-tree portfast bpduguard default*  

An interface can be *manually* recovered from an errdisable state by  performing a *shutdown* and then *no shutdown*: 

**Switch(config)\#** *interface gi1/14*    
**Switch(config-if)\#** *shutdown*    
**Switch(config-if)\#** *no shutdown*  

BPDUs will still be *sent* out ports enabled with BPDU Guard. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
72 

***BPDU Filtering*** 

**BPDU Filtering** prevents BPDUs from being *sent* out a port, and must be  enabled in conjunction with PortFast.  

If a BPDU is *received* on a port, BPDU Filtering will react one of two ways,  depending on how it was *configured.*  

• If filtering is enabled *globally*, a received BPDU will disable PortFast  on the port. The port will then **transition normally** through the STP  process.  

• If filtering is enabled on a *per-interface* basis*,* a received BPDU is  **ignored*.*** 

Great care must be taken when manually enabling BPDU Filtering on a port.  Because the port will *ignore* a received BPDU, **STP is essentially disabled.** The port will neither be err-disabled nor progress through the STP process,  and thus the port is susceptible to loops.  

If BPDU Filtering is enabled *globally*, it will only apply to PortFast ports:  **Switch(config)\#** *spanning-tree portfast bpdufilter default*  

To enable BPDU Filtering on a *per-interface* basis:  

**Switch(config)\#** *interface gi1/15*    
**Switch(config-if)\#** *spanning-tree bpdufilter enable* 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
73 

***Unidirectional Link Detection (UDLD) *** 

Most network communication is **bidirectional**. Occasionally, a hardware  fault will cause traffic to be transmitted in only one direction, or  **unidirectional.** Fiber ports are the most susceptible to this type of fault.  

STP requires that switches exchange BPDUs bidirectionally. If a port  becomes unidirectional, BPDUs will not be received by one of the switches.  That switch may then incorrectly transition a *blocking* port to a *forwarding* state, and create a loop.  

Cisco developed **Unidirectional Link Detection (UDLD)** to ensure that  bidirectional communication is maintained. UDLD sends out **ID frames** on  a port, and waits for the remote switch to respond with its own ID frame. If  the remote switch does not respond, UDLD assumes the port has a  unidirectional fault.  

By default, UDLD sends out ID frames every **15 seconds** on most Cisco  platforms. Some platforms default to every **7 seconds.** UDLD must be  enabled on *both* sides of a link.  

UDLD reacts one of two ways when a unidirectional link is detected:  • **Normal Mode –** the port is *not* shut down, but is flagged as being in  an *undetermined* state.  

• **Aggressive Mode –** the port is placed in an *errdisable* state  UDLD can be enabled globally, though it will only apply for fiber ports:  

**Switch(config)\#** *udld enable message time 20*    
**Switch(config)\#** *udld aggressive message time 20*  

The *enable* parameter sets UDLD into normal mode, and the *aggressive* parameter is for aggressive mode. The *message time* parameter modifies  how often ID frames are sent out, measured in seconds.  

UDLD can be configured on a per-interface basis:  

**Switch(config-if)\#** *udld enable*    
**Switch(config-if)\#** *udld aggressive*    
**Switch(config-if)\#** *udld disable*  

To view UDLD status on ports, and reset any ports disabled by UDLD:  

**Switch\#** *show udld*    
**Switch\#** *udld reset* 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
74 

***Loop Guard***  

STP relies on the exchange of BPDUs to maintain a loop free environment.  

If a software or hardware failure causes a switch to stop receiving BPDUs, a  switch will eventually discard that BPDU information, after the max age  timer has expired.  

This may result in the switch incorrectly transitioning a *blocking* port to a  *forwarding* state, thus creating a loop.  

UDLD addresses only one of the possible causes of this scenario – a  unidirectional link. Other issues may prevent BPDUs from being received or  processed, such as the CPU on a switch being at max utilization.  

**Loop Guard** provides a more comprehensive solution – if a blocking port  stops receiving BPDUs on a VLAN, it is moved into a *loop-inconsistent*  state for that VLAN.  

A port in a *loop-inconsistent* state cannot forward traffic for the affected  VLANs, and is essentially in a pseudo-errdisable state.  

However, Loop Guard can automatically recover. As soon as BPDUs are  received again, the port will transition normally through STP states.  

Loop Guard can be enabled globally:  

**Switch(config)\#** *spanning-tree loopguard default*  

Loop Guard can also be enabled on a per-interface basis:  

**Switch(config)\#** *interface gi2/23*    
**Switch(config-if)\#** *spanning-tree guard loop*  

Loop Guard should only be enabled on trunk ports, or ports that connect to  other switches. Loop Guard should never be enabled on a port connecting to  a host, as an access port should never receive a BPDU.  

(Reference: http://astorinonetworks.com/2011/09/01/understanding-spanning-tree-loopguard/) 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
75 

***Troubleshooting STP *** 

To view general STP information for all VLANs:  

**Switch\#** *show spanning-tree* 

`VLAN0101`    
 `Spanning tree enabled protocol ieee`    
 `Root ID Priority 32869`    
 `Address 000a.f43b.1b80`    
 `This bridge is the root`    
 `Hello Time 2 sec Max Age 20 sec Forward Delay 15 sec`  

 `Bridge ID Priority 32869 (priority 32768 sys-id-ext 101)   Address 000a.f43b.1b80`  

 `Hello Time 2 sec Max Age 20 sec Forward Delay 15 sec   Aging Time 300`  

 `Interface Role Sts Cost Prio.Nbr Type`   
 `---------------- ---- --- --------- -------- --------------------------   Gi2/23 Desg FWD 4 128.47 P2p`  

 `<snipped for brevity>`  

To view more detailed STP information:  

**Switch\#** *show spanning-tree* 

`VLAN0101 is executing the ieee compatible Spanning Tree protocol   Bridge Identifier has priority 32768, sysid 101, address 000a.f43b.1b80   Configured hello time 2, max age 20, forward delay 15`  

 `We are the root of the spanning tree`    
 `Topology change flag not set, detected flag not set`    
 `Number of topology changes 1 last change occurred 1w6d ago   from GigabitEthernet2/23`  

 `Times: hold 1, topology change 35, notification 2`    
 `hello 2, max age 20, forward delay 15`    
 `Timers: hello 0, topology change 0, notification 0, aging 300`  

 `Port 47 (GigabitEthernet2/23) of VLAN0101 is forwarding`    
 `Port path cost 4, Port priority 128, Port Identifier 128.47.   Designated root has priority 32869, address 000a.f43b.1b80   Designated bridge has priority 32869, address 000a.f43b.1b80   Designated port id is 128.47, designated path cost 0`  

 `Timers: message age 0, forward delay 0, hold 0`    
 `Number of transitions to forwarding state: 1`    
 `Link type is point-to-point by default`    
 `BPDU: sent 1129012, received 0`  

To view STP information specific to an interface:  

**Switch\#** *show spanning-tree interface gi2/24*  

`Vlan Role Sts Cost Prio.Nbr Type`    
`------------------- ---- --- --------- -------- -----------------  VLAN0101 Root FWD 4 128.48 P2p` 

`VLAN0102 Altn BLK 4 128.48 P2p`

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
76 

***Per-VLAN Spanning Tree (PVST) Load Balancing*** 

**PVST** and **PVST+** employ a *separate* STP instance for *each* VLAN. This  provides superior flexibility over CST, which only supports a single STP  instance for *all* VLANs.  

Consider the following example: 

SwitchA 

Root Bridge 

Topology for  

All VLANs 

SwitchB 

If a port on SwitchB enters a *blocking* state to eliminate the loop, that port  will block traffic from *all* VLANs. Redundancy is not lost, as STP will  recognize if the non-blocked port goes down, and reactivate the blocked  port.  

However, this is *inefficient*, as the potential bandwidth of the blocked port is unavailable for any VLAN. In contrast, PVST supports load balancing  VLANs across the switching topology:


  
PVST runs a separate instance for each VLAN, allowing a port to enter a  blocking state **only for that specific VLAN.** This provides both redundancy  and more efficient use of available bandwidth.  

**Note:** An even better solution for the above example is to use an  **EtherChannel**, which STP will treat as a single logical interface. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
77 

***Rapid Spanning Tree Protocol (RSTP) *** 

In modern networks, a 30 to 50 second convergence delay is unacceptable.  Enhancements were made to the original IEEE 802.1D standard to address  this. The result was **802.1w**, or **Rapid Spanning Tree Protocol (RSTP)**.  

RSTP is similar in many respects to STP:  

• BPDUs are forwarded between switches  

• A Root Bridge is elected, based on the lowest Bridge ID.  • Root and designated ports are elected and function identically to STP.  

RSTP defines four **port roles**:  

• **Root Port –** Port on each switch that has the best path cost to the Root  Bridge. A switch can only have one root port.  

• **Alternate Port –** Backup root port that has a less desirable path cost.  • **Designated Port –** Non-root port that represents the best path cost for  each *network segment* to the Root Bridge.  

• **Backup Port –** Backup designated port that has a less desirable path  cost.  

802.1D STP supported five port states, while RSTP supports **three:**  • **Discarding**  

• **Learning**  

• **Forwarding**  

Initially, a switch port starts in a **discarding** state:  

• A discarding port *will not* forward frames or learn MAC addresses.  • A discarding port will listen for BPDUs.  

• Alternate and backup ports will remain in a discarding state.  

RSTP does not need a listening state. Instead, if a port is elected as a *root* or  *designated* port, it will transition from discarding to a **learning** state:  • A learning port *will begin* to add MAC addresses to the CAM table.  • However, a learning port *cannot* forward frames quite yet.  

Finally, a learning port will transition to a **forwarding** state:  • A forwarding port is fully functional – it will send and listen for  BPDUs, learn MAC addresses, and forward frames.  

• Root and designated ports will eventually transition to a forwarding  state. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
78 

***Rapid Spanning Tree Protocol (RSTP) (continued) *** 

The key benefit of RSTP is faster convergence:  

• BPDUs are generated by *every* switch, and sent out at the hello interval.  • Switches no longer require artificial forward delay timers.  

In 802.1D, BPDUs are generated by the Root Bridge. If a switch receives a  BPDU from the Root Bridge on its root port, it will propagate the BPDU  downstream to *its* neighbors. This convergence process is *slow*, and STP  relies on forward delay timers to ensure a loop-free environment.  

In RSTP, switches will **handshake** directly with their neighbors, allowing  the topology to be quickly synchronized. This allows ports to rapidly  transition from a discarding state to a forwarding state without a delay timer.  

A key component of the RSTP process is the **type** of each port:  • **Edge –** port that connects to a *host*. This port behaves exactly like a  PortFast-enabled port, transitioning to a forwarding state immediately.  • **Root –** port that connects to another *switch,* and has the best path cost  to the Root Bridge. 

• **Point-to-Point** – port that connects to another *switch*, with the  potential to become the designated port for a segment. 

**Note:** If an edge port receives a BPDU, it will lose its edge port status and  transition normally through the RSTP process. On Cisco switches, any port  configured with PortFast becomes an Edge Port.  

The RSTP convergence process is as follows:  

• Switches exchange BPDUs to elect the Root Bridge.  

• Edge ports immediately transition into a forwarding state.  • All potential root and point-to-point ports start in a *discarding* state.  • If a port receives a *superior BPDU*, it will become a root port, and  transition immediately to a *forwarding* state.  

• For a point-to-point port, each switch will exchange a *handshake*  proposal to determine which port becomes designated.  

• Once the switches agree, the designated port is moved immediately  into a forwarding state.  

Every switch will perform this handshaking process with each of its  neighbors, until all switches are synchronized. Complete convergence  happens very quickly – within seconds. 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
79 

***Rapid Spanning Tree Protocol (RSTP) (continued) *** 

RSTP handles topology *changes* more efficiently than 802.1D STP, which  generates a Topology Change Notification (TCN) in two circumstances:  • When a port transitions into a *forwarding* state.  

• When a port transitions into a *blocking* or *down* state.  

The TCN will eventually reach the Root Bridge, which will then inform all  other switches of the change by sending a BPDU with the Topology Change  (TC) bit set.  

In RSTP, only a **non-edge port transitioning to a *forwarding* state** will  generate a TCN. The switch recognizing a topology change *does not* have to  inform the Root Bridge first. Any switch can generate and forward a TC  BPDU, allowing the topology to quickly converge via handshakes.  

A switch receiving a TC BPDU will **flush all MAC addresses learned on  designated ports**, except for the port that received the TC BPDU.  

In the event of a topology change, RSTP will allow alternate or backup ports  to *immediately* enter a forwarding state. Additionally, RSTP does not have to  wait an arbitrary max age timer to accept an inferior BPDU, if there is an  indirect failure in the topology.  

Essentially, RSTP inherently supports the functionality of UplinkFast and  BackboneFast.  

RSTP is compatible with 802.1D STP. If a neighboring switch does not  respond to an RSTP handshake, a port reverts back to transitioning through  802.1D states. Note that this means that all RSTP benefits are lost on that  port.  

Two implementations of RSTP exist:  

• **Rapid Per-VLAN Spanning Tree Protocol (RPVST+)**  • **Multiple Spanning Tree (MST)**  

RPVST+ is Cisco proprietary, while MST is defined in the IEEE 802.1s  standard. 

To enable RPVST+ globally on a switch:  

**Switch(config)\#** *spanning-tree mode rapid-pvst* 

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com.   
*CCNA Study Guide v2.71 – Aaron Balchunas*    
80 

***Multiple Spanning Tree (MST) *** 

Earlier in this guide, three versions of 802.1D STP were described:  • **CST** utilizes a *single* STP instance for *all* VLANs**.** 

• **PVST** and **PVST+** employ a *separate* STP instance for *each* VLAN**.** 

PVST and PVST+ are more efficient, and allow STP to load balance  VLANs across links. This comes at a cost – maintaining a separate STP  instance for each VLAN adds overhead to the CPU and memory on a switch.  

**Multiple Spanning Tree (MST)**, defined in **IEEE 802.1s**, allows a *group* of VLANs to be **mapped** to an STP instance.  

Each **MST instance (MSTI)** builds its own **RSTP** topology database,  including electing its own Root Bridge. A VLAN can only be assigned to  *one* instance.  

MST further separates the STP topology into **regions.** All switches in a  region must be configured with *identical* MST parameters:  • 32-byte **configuration name** 

• 16-bit **revision number**  

• **VLAN-to-instance mapping database**  

If two switches are configured with *different* MST parameters, they belong  to *different* MST regions.  

For most Cisco platforms, a region can contain a maximum of **16 MST  instances**, numbered *0* through *15\.* By default, all VLANs belong to  **instance 0**. 

The **Internal Spanning Tree (IST)** is responsible for maintaining the  topology for the *entire* region and all of the MSTIs. Only the IST can send  and receive BPDUs, and encapsulates the MSTI information within a BPDU  as an **MST record (M-record).** 

The IST is always mapped to **instance 0**.  

MST is compatible with all other implementations of STP. An MST region  is *obfuscated* from non-MST switches, which will see the entire MST region  as a **single 802.1D or RSTP switch.**

*\* \* \**    
All original material copyright © 2014 by Aaron Balchunas (aaron@routeralley.com), unless otherwise noted. All other material copyright © of their respective owners.   This material may be copied and used freely, but may not be altered or sold without the expressed written  consent of the owner of the above copyright. Updated material may be found at http://www.routeralley.com. 

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAARCAYAAAAVBKQtAAAE40lEQVR4Xu2YeeimUxTHj7EMsocUibFNtsaaGHozlJSMJCEpsoUyIdn+MA2isYRsSaLI9oeZsaaMpokZW/6QJcw0ZOzL2Hfn0/0e733P75l3qd8U4/nWp997n+c+z733nHPPPc/PzOwv5xjRpPudx8S/RbMEc9873VsV2lww3rYN7fHW/mKa2qwRGG/c9V8LgAnOEvGBc1Pv7VWi7PB1xHHO+lW/8dIr4gy1NxGMN+5qA2Cw2gAQobXFHs5OzhqiSZOcKWKtdI/2Rs66Yldb+XtCU52vxXTnY2dNEYr5YDT+biOa3o8D1xM4lVQbBg/lAMjvr8X7ImVvme6FeAc09eH518X5asf66jmFBo23gTNRYOMx6xs1AHZz3hc8C4vFFuoTBptb9YFlzgHqgw523nZeEvQ5trrfpLsqyAafOUeIUO2wS5zfBO2F1X3E+u4Rb6rPN+IE9ckBkNshbPiVrsOvzszqPs542vlD0Od351qBmE9tsztt5TXAoPHQC859Yrn1rq9DBy6MEgCPOnMEwYBDcSJcrT73CgY/0JksrrcyidjxBMCfzg1iT2uO8hBZhwUfJtBt1l1gqHbQh86hgrlwbNwsEOvDcDDb2cG5RaywMp/s8NyODPOjFUfuKM60Enh7iSudd52DxM7OrVaCANjB2PQdgU2wWw6AerwbrTveqc7P1utPfFBnzN2tbAJYQIc2ANoAGCkAnrDyUsCBnE0xIVIc5+hP4hBn+wRHx5GC51l4GHSQOB5I+dQOUU90nO/EhrpWO+gkXQvRXiY4v1nfyyIU76e+oPDKDs/t0wVHSNaJVoIKcCZBXiscC9xHuQjMAXC2IEgm6FqIo/FhgfATgQ0hbABLaYwaAB3rniE8+7mVXQhbO7voej8oboAA+N6GF9nnB+e9CnZ0vDecXTtokq6FMHL0p4BifXVGqPWUc6mNdXhuk9mAd/UTAXe8lX4ReOzimM+wARAZs2k8AjGeRwRA2DsU/l5Kg5QaEdykJ527RYi0CKc5j1hxIiyykopiQdOcfRog1cGwAbCZIKuQ8i5OPCueUf/aQaTZWlOcXwSVMUaMAM563plhYx2e29eJ2HW16Be6zEqmelDMcs6x0QOg33jM90WBBgYAi5wjsjD6Cuc8ga5yjhahOJNJ56TOLwRnYC12wDVWsgQMGwARoJH+szqCc3wr63UQqbLWBVYCFRABQOoGjjO0qfjWSt2QHZ7bpwiODGqbEOt9w7lI8DvPh000agCQRQB7cOzWYhPUG7YNgH96FbUBkAKAHzGBx61M8ELxljqFQdBs51NxuZUUtlhwZqKZgvONs+osQZr+0tlYDBsAC8Qd+YZUF20zrNdBVL+kXuArhTmFwxABEF8Bc62s5zXxqpUiKzs8t3ECLHHmW3e91E1soCiSKaAJgnMFtuF+2H9fK4r1Yk9slAOgHo9AjvEesPIVsJ9AAwMATRfPWakJlguMs110kqjy4zPpI+cT655p7D6E0QCjU/XzTuCfIJzBIX6z0H4iC8WOnZruZV1hpQquHXSydQtG5pJ3IGu8XTxkJXNR10CsJ2oediXXcjtE/TPPuuslgOo5s8PnV/f5zZcSGw+OUj/mDNiW9fAcMF6tpvEO7+lRnucfWvFPLdQRBPxqqbxD+4kAiKq61WqiNgD+52oDYEj9DduaJWqfMGh3AAAAAElFTkSuQmCC>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAABNUlEQVR4Xu3SoUtDURQG8IPIGCiMBYMiiP4F24pBZEEQxGGYYhG2FZ0mm3EYDCZxWGyiDAQRLEYtdhcMypJ/wUAMKkzQ7+N9Fx6XN6Ma7gc/2D338s59O8/M7MvzBueQlZ8yIDsw5u0lhg0OpARb0IUzcUnJcKw2K3zGRKzOpGHIq/1+s6q41OFDBmEdXoTn72EEHoQ1XnBcGvAOn3ArbJ7YrKi6u/EJbEpB9TXYEK5XISNXsAxL2qMZ0w+/2ULs0Cjk4FDaqvM8L0XuUi6sHcOT9oi1xGY8+Cyc0atFXygtWv9mU8K/rwk17f1ds47cwSP0LJqBmwPX13KpNWc1LXzGkUVzIq5bcKOzNA+279mFPDdi4QwvhF9qBVYs+lJpD05hUvjWPFuGbZmzkJCQkJCQkH+cbxG2dRPwTdu0AAAAAElFTkSuQmCC>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAARCAYAAAD0Q3M5AAAEl0lEQVR4Xu2YZ4heRRSGj1GxYhc1gtgQW+yIKPaCRsSufxQCdmxYQUV/WIhYQEVFBTUWjNhQbEnsiNgbYouarApq7AUL9vPseY93vtm767drDLr7vfD8uHdm7p0778yZM9fM7I8u6BNjVVs529Y3K21uzXitUpX9Z7V/xSvOQyLvTRRjVW85B9U3K/XMH6UatebXmu5cI9q0pDO/WMdZvLPYxjubOCuLWrRf0FlCUHfRjhqhfMfazrrOAiK1sOD91Ftf8P42Zfv1nDWqMrSQRT9gaYs6i4mZzuHOIqJNwzWfvvBdsJENfO5SFuME9X0YV91fyWIsGY/aE5Rtcpz43gH6O/M/dm4Uvzt3W2PEnc6vFgPwm7ghmv0l2l/pfCOoO8fZUKAVnZdEDugsMUF1zhBEqAeLej8756hOign0tsh600QO1EnOA+JTi76z4iHbXCbaNBzzt3BmW1MfvnJ2F+g15yiR2s75SeQiukr8YvGcr8Wk/haNKMOLfN/VncWhbsx/VTCDGNiTxYfO9s7qztmCFzGzU7R/X/VgM+d153aBLnaeE8zmDZxHxb2qk+ZjNpOOfsDRFgNBkgbzOW84MwR92dF5V+QgYD6TGQ6xMHNj8YEz2VlLtGk45r/p3GzNyucb+dbnBWLs8ptTFzkPC3SqRVSCXS3G/RjxvUWUS9GvJ3QPqDtAPfN75g9pfh2O2B8BI1PsQcBLdy7uZ/tSfMQzAl1hYRjsYrEfLieWV500/wuVlyJ0XyjYSujDeJHaV7D1kDNg/nui1txK+DKP2cFZpio70zqP1ExSJjaQgyC2reMEYtEcJlaruMs5V/UQ/dqnuG5VN+bvIWrt6UyxMPE70WZ+3ZaZWppPIvmRoP23zq2i3vMf0XUp9vx7xH7W/o8Cg4Dnr2BhPisDas0t81OYeZqFQUAkIOL0CTTOmpzjYIuoRh7Cis1VS5t8Zxu3qR7imj4OqZGYf6z40SJ0EyLpMIzEfJSZNUdNQiRJGHxmkaSl+W1mseJzsuzlfNJZ3K8MuQzosjZvzM+VTyJLhLlW8G62nz6RYhyB7yA6PluUIaICpxDYtIUytP9r5j8pTi/uTRQjMZ+wdqRIldsIe1aaT1QoQyh7/IvOCQIjMJgtqdyWThREFzQvzCeiAXVy+0qRt/SJVJrINz5lES1KPe1cLmqxGHcqrnvmF/V65rdoJOZPFSQkxzvnWZxbgXP/3k3VrsznmnwBzrdIaEjiYLbF+bbM9l9wjhD3O19a7OOA+BfBSQQ4lUy2yIaBcIqGMv9li/xhS9Gm0nwSVt5RwvMxHH5wbrEmZN9n8R2fixQTGWZaPDf/g6QOtOZ/yk0W43S94MTD/4RUV+Yzi3Jg28SPka1FalUxw2Lg2Zt2E9c5h2ZFa9qXOsAiUYTUWQKzeSamwgSVZx955wUWuQA8bnE8K0WOkBOalT7LOUWkWNmDTXoMmmODrzJENGISDsYdTdX+XOgdi1wEpjjbWHO85VRT6lKLPrdpkuC3POOUzygXHKIP5dHvf600n0g12vWYRRLbk9QzfwxrtJtPsnaJYP9es7P4n+tPTkf9pM3qxw4AAAAASUVORK5CYII=>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAWCAYAAACosj4+AAABCElEQVR4Xu3SPSuFYRzH8b9i8JDRxEoiZLGZ2MghMpAy2ikbkZQ3wOAVKE+TMhzkoRBFsXkByuQV+P66f/c5ZzBK93B969PduR/O9T/XfSIiLvFt1xiI/2/XGvMTD9aCadzZJo5rrvfiCHv2hDGU7QodPsoBNjBq5zhDj93iBV+2FK7QAy1iyxqwg1cr4d3n5R6T+LB9dOLG6vCGU+vGMtbsObJ0lF9fmQZasb7IfvmJ5QNpIdFA85EtIheYxafpfu3Utq3iEFOm71aPNujPlRvq0YV+UzMYMf3htWCedqcZczaBtqi+8gW0R3VH9ewwmmw8soZM1/68VqxbISrcQKlUKpVKpYrUD49IW2u95cCzAAAAAElFTkSuQmCC>

[image5]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAARCAYAAADDjbwNAAAA2ElEQVR4Xu3RoQ8BcRQH8BcEUVAEQSSaqYLiDzDVBEExEwmCYDZBMBMUydgUQTCbf0EwE2yCZKo/wPfd+9qdjU26dN/ts93vdvfeu3ciIldx04Gy5/xvvDV+5gYJGoo1asGeqpCDLW0g5DnPxBqlSe+tIA5rOoB/jZ6wpKNYozu06STuEEqfz8KcwmKNxjQVK1yCM+lgX//RBVLUgAlU6AFJ2JFOrjX6VIM6ZMTdipPR+wIpiq2pAAvKi32BrkgNIAJN0vd7ECMdqgtRscGVE98aBQkSJMhnXmhfTLFha30QAAAAAElFTkSuQmCC>

[image6]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAABNUlEQVR4Xu3SoUtDURQG8IPIGCiMBYMiiP4F24pBZEEQxGGYYhG2FZ0mm3EYDCZxWGyiDAQRLEYtdhcMypJ/wUAMKkzQ7+N9Fx6XN6Ma7gc/2D338s59O8/M7MvzBueQlZ8yIDsw5u0lhg0OpARb0IUzcUnJcKw2K3zGRKzOpGHIq/1+s6q41OFDBmEdXoTn72EEHoQ1XnBcGvAOn3ArbJ7YrKi6u/EJbEpB9TXYEK5XISNXsAxL2qMZ0w+/2ULs0Cjk4FDaqvM8L0XuUi6sHcOT9oi1xGY8+Cyc0atFXygtWv9mU8K/rwk17f1ds47cwSP0LJqBmwPX13KpNWc1LXzGkUVzIq5bcKOzNA+279mFPDdi4QwvhF9qBVYs+lJpD05hUvjWPFuGbZmzkJCQkJCQkH+cbxG2dRPwTdu0AAAAAElFTkSuQmCC>

[image7]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAARCAYAAADuf5O3AAAElElEQVR4Xu2YaaiVVRSGl41kZvNgcxYNNpeBlta1ohDCkDIaKP1TVBCKNlkSKllU5hCV9sd+RNFkWqJ1s4GoLCooEiIDKyQNFJUGyyZtPe533bPvvt89nlug3DovPHDO/vb+9vCuPX1mZpudhaJKs5zFois6SQwrH2xjXen8XiY2oMedN0S3EWYGlxbP0D8181UxoXywjdU0M1PTzG4kTFwnvnV6tnta38y9nDOc/URoN6uVudfZ3dlT7JTlQ72dXkXaLkqHUPynvn2y9BB1AGUPdw4QVWaSh7bvLKrUVTNjLKCvs0P2jDp4Xqqqn5SD45wTs/+haDNjBuSDLcLMcWKDpcHPVWXmHeJnS+V/E5P1fIbSg5edpeJG5Ql953xcpE1yXhfoBucnwft+ccaKEHXAM5bMWyGu0n9EkMF7zmdWC7AqdcXMKc5Ga9/nd509xDHOX84hIjTTWSQQ+T4S8Z7PRRhGf2CJ81WWbzAP+XGZGG/JlGMFKs0c6qwR11mKwhFitaX3UDYaNcc51blPvGhJRwrqY7BjZqEPnTvFaZYGguUaqG+M86c4T2XCzLXOuZbqhJiZzIJXxNfOQalYp2rEzBbxq6UBpm1wtbPJGSnQp85oEVru3Cx6WOr3c+J052TnaUF58oSZvB+/+otdnaaZnajbm0nCMqdVoNJMlrGp4qiCB5y5ylcegIYI9uYdnSsEhn/vnC/YD/9wThEsYe9YR1EPPKH/YSbBkwszeR9twUSgrVtTI2YeKFqKdPrH9nGrQPc4bwrEtY0gPUycYGkbOV7EmMZ/nlEmzPzBKvb73Ex0oSXXgcEuzSRCYp2ugn0RlWYyM2C9M8B5SDzizHPuFszwVSqDXrAUJKWISoh2hZmT23IkYSbtYp/lvVB1GCnViJkh+kM/CDpgdaDO3EzMYoUAApZVh7EMDbeOY1lCnjCT/bKDyJSbiRhAWOE8Ze3N5LDyoDizgn7KV5oZeta5y3lfXOvc5swXBM+TbbnTSsCBqhQHNYjDQz0zmQFnWRo8eLRdjmo1YiaHDmDmv+ZME2w/5cxEXwjatMSSoSE+rhDo5XjmEIRdNvNQ8aOlSMrNnO28LVjDc11uyRzUmZnXWDqlMlPgaEvL1EpBI+lsaJzzpaWlCxD1ElTA7Eb1zIzT7ECx0dKeVE+NmDldxNYSOsLSWaA0c5LgnQQAy2eIpZagaxGhuILQzz7WNPP/bWbodkvPczM5ITIYgCncGx8W3FNHKd9LgjvdRUpDe1vqKPsKYBCXZjoX7N+W2+xg5YvDw/XOAqvdO2NAGjEzxCGJZS4PkFKY+Y24v4JBVruf077xVrt/sz1R50QRiu/VjOnyLD30vNXGZaJzi9VuBcssfXCpa+YnVjtJluK0xAf4x0Qo8rPncTqNvYDKQ5cIZhuDnIt9k70RQnQEOIaX4qvKW4L6CJCzRSgCqvwoQSBx5M+1r/OBc4GoEvsZY9MZrDA9BecKrmWsIHCTysfZIsSKAgQIbS3F1WymICB4Z0wKZju6WJDW1HYUQQTM2nOKZ011MzXN/I+I5b9V8F24PDz+a/0NRpzs+0q6FtQAAAAASUVORK5CYII=>

[image8]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAGklEQVR4XmNgYGD4j4bvAzHDKjQ8BacgcQAAVFkLVBajGyIAAAAASUVORK5CYII=>

[image9]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAZCAYAAACis3k0AAACvklEQVR4Xu2Y24tNURzHf+WWXBIad4Z4ksYlQpJnLy6RFA8iZDwo4o1TkuSBQnkgSlFySfkHJNdcyqWM1LxJlNzK/fL7+n1/56yzZu8z+8yMkaxPfTpnn7X22nt/z95r/c4REfmpLqN5HKNH44YaTKcYf3zU1h7N6gv6z1AkSAThFiUFmUEKsgBFgpxGp3K7iSKoSeomukLtxT55QQ5Xl6jjaBb1BonjbKbYd2bQ1lPseIOoM4Sfwx78bABdrW4RGyccqy9dpI6RyjEnorFIkPEceYQ+Ul+pN+gX9QL7xEGOpC3qZbU3zaKeIPern9Tb9Kn6QypfLnisbqTONvUBBVPU57RVvSU2LjzEPggP4jofqvfoBjR2JkgcFHeYs1T9LvZth0EuVJ/QS2of3yGHIkH2p3fVeVHbefUKBTvUm9TB+100axs00pfqHKkEiWtaX+5FUpDZ26CR/vEgT5d7GHh0MR5ewyA/iE0BsL0QQZEgQ4aq8yku8L56nYIJ6mc6VmxuxuM/mQ4UuwHO0VORrWpJqoPEOFV0JsgT5R5GXpAn1We0xL61qCdInAfmrDcUdxbmxDBIcJViEdkqFrYzSuw8j1PMibGLpTrIYb/3DOiOILHYLKAfxVb8WhQJchbFeKgoQs5I2yDX0WtiC+P2oA2VxjvJzwF3Oq4pBSndFORBujJD1GFdEaRzWKxkQO3m9VsMgvRHNT4fOFudQb+JlTU+R+I6MP9hEYLOYPpWbD6MfyQcEFtUIObZuepOirkVx6oZpM9defZT99Ld3KdE93HbaRDbB68+kWN7dNAHKy3msbU0i1XS9jxCUTs6e9TX6nt6Vl0jlRrRfyA4qBruRJ8B9MO4EE/CV7FaES5nnxEU54DK5L+mRWzBSXQA3OEXKUowlDuJDpCC7CLwx4QX1/7HSyKRSCQSiUQi8df5BVcII5gQguegAAAAAElFTkSuQmCC>

[image10]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAnCAYAAABnlOo2AAABzUlEQVR4Xu3VPUhcQRQF4CvRxELFqCBYRMEfCAGxEIJgTDDaiCgYbERbm6QIxE7BxsIqiJ02mkIxVbBVsNBWVAQRLJJGUAIh/qAi+T3HOeN7LOs+tVKYA1+xszO7d2bvvDUz+5fGoSxAnd0+DdCWOpgUFjAszdIti+YKq5SbZhnepw4m5U4W9EZS8wA2YFri4/QCeqBVcvS+38A6jEG1+NQK17bDY7lIpoKYt/BdmEJYkzPYg7+yCbkwKb4nZyQL5uC3cO25RZ9fY1qQqaBXFn1hEbyDLSnWnCbhZ/mTohUYiL1uhAN4KkwZ/JBBDiQV9NKinfoCHgp/tifQJZzToTlMuh7iOp9Scz27KyMcvHcF9Vt0pAybb1Z4A7ne90BSQdzAKOwL2+AYTuRaBfHh+EWYcViV11Bu0S1JKqjPXCH++9jEPLFtuSyoV/KlSj7CL6gXZh4+STYUwJSkK2go9ppNy9uZJ2x0Nv0fubsFXeWbuWaNp9NckXRk7lm0JF/hQzTVJjTPb4A/0U84FfbPjrnC6TMX+d3H+SctmzBdKoR/L89j47xxHPd5ZO7E+CdLTIm5TVGLuVPm7aVnmhMSEhISEhISEhISEhIS4vIf79msQPsUnm0AAAAASUVORK5CYII=>

[image11]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAAARCAYAAADzLW9pAAAE50lEQVR4Xu2YV6hdRRSGly2xYouoxBJLYom9oKIiir0nguVBEUR8UBALFoKEKyJiAxsqiIoPQTEIKiIYYiJJFDQqPlhANBeVYEPsXXR9Wf9yz5m7zzUnOTcq9/zwcZk9s+fMXvPvtWZfM7M/W/hZLHF2t0aH6fqa0v4W61lb9EtrCeY+oOpLHScY872zgaiVY34V/RBryr1gnVsU7Z2KcWMmfmiWOEIcL150PnTWEWvaFBtZrKff6tUUPzrHilp3WvSPpSnWtWZvJhbjxkwDU7Rr3Jtipqi1t0X/PiJNwcLgLOc8i/QGaCvnGFFrV+fgos3DnupcLA61CEJqEwtz1tpXcM+JNrK8YCY4U2NOFhPU36spnnXuErXetejvZgrK70XWxHjDzu4V2tY5X5xg7abIF5USVrdLTbfOkn+gM8Wi7ADxOKTo39K5wDlJrIjjaKbYw6J/L4EpePAFYpnztfOxwBiTnd8FJij1nMWbtb54zfnGeUf85jzy9+j2M8Wt1sz/nkW9XyTWc3ZxPhGfa0yOf8Vinl5NcYlFxoTUNEE8LtXf0hRD4hfnfecLwRysMXW4dcbwS4vYlqYgrtlmYzcv2jtbpx527i3a85w51sz/gfOHc5n4yMLYXINbuImJLxe4DI4Siy2CmkHEFIy/UiAyw7cCp6P5YrbamwmyzJHO0YIN5QFTOJjfzDe9NgVZhiATSEA7OJ+KM5wbnGcEbxQiGwFz7Wm9m4LAY1jgfnS1YL3nWKcpyHgYEniZEIaFB5y5uoZedR6ypkTz3M9bf02xzGKfAD1pUfKAFx9dIzDNwBQaU2vcm6ImH5D0XgYty0eeKVIvC9IoIt3CW2pjFlhusblTBBu81LlRsOlZJlBtiuudF4r+VJqo1tYWh7PZgrmYs1dTbGxNicqXIY1/nY00xZA1JfH2iscsXgY2OjebMlTqNF2Hfpji/qKNbnYWitRMMUyDiXPT8o3uFuRuXx+1KfKB2fSpzlPibvWnyBZPW/N/EdbyhjWurk1xm0V9HE28ya8L7v3BwpywOqbAkPCSRYzSBBzGa1PcYxFcyGevIS7A/Bz2SrGmfpoC45bCFGQLSI0wRV74J62sKVJs+E3WpCruR5MEpQRxIgc2Ydi5QtSmuMoie9WiZMDpFqn3cbG9xRfHfmJ1TJFfYBid5xwWqDbFtRYZEGrxnGws6wLmo9yUOttW3hS76Z4UMa9NQVko9a+a4lyLVJknX2omOkhQo8lQmRk4Uyy3uA9qU/A185M19XwbiwByDcg8S5xHxXYWAS8zB59oq2KKXANfNTwLKTnTcm0K3l42G+5wdrSo3cDn6wKNQ5gXo3P2AMz7to1uCs4mX4n7LOLAZyWQGQem0LWBKf4npiBVfmexyHKhKVI+8+UDE1RqYm5abQo0w5qTPX0EfpZA/AOG736gn98fEmzohbZqpkg9qGunCFSbAmVMP7Pm+YCvjanFOM4TC4t+yiwlN9ttpkB5mM/4sfkwx/pgionWGfTRxAIZXwvnQmaC1CSLNzj/RdsmAj5NbFr1dfs9PjWh7R6U/xyjH2OmuKdcI3PzG21K49S/z/31NWLHtfo6ygw3WXQT5x/gEJu/W85Xt1OcLzBKrjdjk2rbF9r1uPTAhOJaX0VKB1Ljm1XfQONUA1MMNEJPCOrn9KpvoP+4/gK7GzfKI8uZvAAAAABJRU5ErkJggg==>

[image12]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAkCAYAAAAtmaJzAAACGElEQVR4Xu3VzYvNURgH8Me7MONtoshOZmhiEltKSdjZEAt1C41ImpqGsmEWM1n4C1igRA0LChuW3uWdZDFpmjRTrG3k+73P98zvOLO5qalp5vnWp7n3nHPnd55zzznXzOwPfMoMwmNZbhOTbdBTNhZph3757/wuG5Ar0pW1rc2UaYFNMqfoW2k+UbanPv5dCM1SfmaZ2pqEWWrV+A6YpfaUFbAe5skCNk6r4th4Vw7BTLgBDzJXx0ab1eAD3JLP5hM5Jc/gJjwVTnwPXIKzctw8nCC9hq1wXTiHEbgvD83nxxyWd3AHvsl5duZnbgh+wglhdpoX05YZMD839NV8wil7YYP5BImv+ZluOWdVcauFRTMnheexLG4U5gszCLPNF5YWq/2C1IvLv7kZ5oWcEeYYvDUvKMeiiX1l1sGwlJ/rtKq4FO6GjfBCVtn44rj4eT6ab90vkrJfpldxDL/e78IDyq3Hfc7CiTkCa+S9+WRSTsM+q/Y+zx+zQ7bb+OIOwj2rzjTTSHHclk+k1XzcNakX9yuNzsKLhPggFnTR/J/RG/OLg7cV7TZfufSQR+aXUlrB1PdcuCC77N/fr7nwAw4IsxkuC+fwSu0pL82fv0X4ngvA51O9uEbDq5uayg7zyfFSyS+WlNQ3UemTJXrfK0fHRjSQKV3cZE1N+JPEbXlbFuWDIpFIJBKJRCKRSCQSiUQikUhkMuQvCkajAt4eHi0AAAAASUVORK5CYII=>

[image13]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAkCAYAAAD2IghRAAAB3UlEQVR4Xu3Wu0tcQRgF8C+G+CosjIog4oogaEDsIgQRfEBAUETFaCEiBgRFENIknSCkUKwS0JDERFBBRC20ELQwKSJioaB5YBNBQkDwb/Ac5wx3EbZw2cKFOfDbx72zc787d+7cNTMrhV35BxfwVjIsdamVaciELUk6yzAsTC7sSYdvlII8la/6/lCSTtoWvgqvxHdUII/hAUzKOZxCo9oxm/AO/stHbY/Jd/gL88LCH8GaMLf7+KTtZfLNXB9Lwmls5bAjnN8r0CYM398LD1gCB+bmKf1WG+6jY3MH+yK95u4VFkMsPAuOhPkF7Rb1we0xi062z1wfc7LAH+XwRcmHbjiRLpiCMzmUK3giLDw+61AFP4WFMPWSqHBeWR9eiWqL+vD76uSm8EsoFh8/5znKEzAmRVJp0egkKtyfJAeDaZa7FL4vnLJMq6R34Szsh3AV4fRgMdQENeZuSOqEAfgD2ZKo8HHhzf/copXqLoW/lG1zA8nj0k3hTI98MDfKDeLjl7JZmIGKuH2jcZ+ZF+ZWJJ8Rc/22CAeHq5e/qsztPlhLIeQJb/430C+fo6b3M4vyGp7BhgzGN7qPSdvC/YOQ05NP+CFJ5X+okJCQkJCQkJCQkJCQkJCQkGRyDR3MkVks7v79AAAAAElFTkSuQmCC>

[image14]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAYAAAB/E6/TAAABCElEQVR4Xu3SMUtCURjG8QdCS5Jocmxo0bZwaKu2lqYCV0VUcNVwCiIoIlycHCKiMegrtAXtQeBkJNHY3KrP630u93pEEGlwOH/4Cfd4uO/1eAFgiOlK9CiLlqGajJt3UFLWYmthK5SWsEM491iqQU36lh/qaN3ao0/6kjfapHf6kzPbaIMGjl9Eg7L0QetiT/9CR3JPVUTVKYcZv2jVUYltKtJ1uFnZjS/kAMGD9eSKNjBjkFsJ0aYT6k5+jRY1ZAfBG3YsT9TGMg+yY+gjOEJzquttudG+fbH/7BzBoFfZItzah1OeCmLZC3EnD7SrdStFl/Qs9oYltG4nYcrhZp/P5/P5fP/ZCBdpUY2pKf3YAAAAAElFTkSuQmCC>

[image15]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAYAAAB/E6/TAAABCElEQVR4Xu3SMUtCURjG8QdCS5Jocmxo0bZwaKu2lqYCV0VUcNVwCiIoIlycHCKiMegrtAXtQeBkJNHY3KrP630u93pEEGlwOH/4Cfd4uO/1eAFgiOlK9CiLlqGajJt3UFLWYmthK5SWsEM491iqQU36lh/qaN3ao0/6kjfapHf6kzPbaIMGjl9Eg7L0QetiT/9CR3JPVUTVKYcZv2jVUYltKtJ1uFnZjS/kAMGD9eSKNjBjkFsJ0aYT6k5+jRY1ZAfBG3YsT9TGMg+yY+gjOEJzquttudG+fbH/7BzBoFfZItzah1OeCmLZC3EnD7SrdStFl/Qs9oYltG4nYcrhZp/P5/P5fP/ZCBdpUY2pKf3YAAAAAElFTkSuQmCC>