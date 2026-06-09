![][image1]From the Library of Nick Barnes  
CCNA 200-301, Volume 2   
Official Cert Guide 

In addition to the wealth of updated content, this new edition includes a series of free hands-on  exercises to help you master several real-world configuration activities. These exercises can be  performed on the CCNA 200-301 Network Simulator Lite, Volume 2 software included for  free on the companion website that accompanies this book. This software, which simulates the  experience of working on actual Cisco routers and switches, contains the following 13 free lab  exercises, covering ACL topics in Part I: 

1\. ACL I 

2\. ACL II 

3\. ACL III 

4\. ACL IV 

5\. ACL V 

6\. ACL VI 

7\. ACL Analysis I 

8\. Named ACL I 

9\. Named ACL II 

10\. Named ACL III 

11\. Standard ACL Configuration Scenario 

12\. Extended ACL I Configuration Scenario 

13\. Extended ACL II Configuration Scenario 

If you are interested in exploring more hands-on labs and practice configuration and trouble shooting with more router and switch commands, go to **www.pearsonitcertification.com/ networksimulator** for demos and to review the latest products for sale. 

CCNA 200-301 Network Simulator Lite, Volume 2 system requirements: 

Windows system requirements (minimum):  • Windows 10 (32/64-bit), Windows 8.1 (32/64-bit),  or Windows 7 (32/64-bit) 

• 1 gigahertz (GHz) or faster 32-bit (x86) or  64-bit (x64) processor 

• 1 GB RAM (32-bit) or 2 GB RAM (64-bit) • 16 GB available hard disk space (32-bit) or  20 GB (64-bit) 

• DirectX 9 graphics device with WDDM 1.0 or higher driver 

• Adobe Acrobat Reader version 8 and above   
Mac system requirements (minimum):  

• macOS 10.15, 10.14, 10.13, 10.12, or 10.11 

• Intel core Duo 1.83 GHz 

• 512 MB RAM (1 GB recommended) 

• 1.5 GB hard disk space 

• 32-bit color depth at 1024 x 768 resolution 

• Adobe Acrobat Reader version 8 and above 

From the Library of Nick Barnes  
CCNA    
200-301  

Official Cert Guide,   
Volume 2 

**WENDELL ODOM**, CCIE No. 1624 Emeritus 

**Cisco Press** 

From the Library of Nick Barnes  
ii CCNA 200-301 Official Cert Guide, Volume 2 

CCNA 200-301 Official Cert Guide,    
Volume 2 

Wendell Odom 

Copyright © 2020 Pearson Education, Inc. 

Published by: Cisco Press 

All rights reserved. No part of this book may be reproduced or transmitted in any form or by any means,  

electronic or mechanical, including photocopying, recording, or by any information storage and retrieval sys   
tem, without written permission from the publisher, except for the inclusion of brief quotations in a review. 

ScoutAutomatedPrintCode 

Library of Congress Control Number: 2019949625 

ISBN-13: 978-1-58714-713-5   
ISBN-10: 1-58714-713-0 

**Warning and Disclaimer** 

This book is designed to provide information about the Cisco CCNA 200-301 exam. Every effort has    
been made to make this book as complete and as accurate as possible, but no warranty or fitness is    
implied. 

The information is provided on an “as is” basis. The authors, Cisco Press, and Cisco Systems, Inc. shall    
have neither liability nor responsibility to any person or entity with respect to any loss or damages arising  from the information contained in this book or from the use of the discs or programs that may accom   
pany it. 

The opinions expressed in this book belong to the author and are not necessarily those of Cisco Systems, Inc. 

**Trademark Acknowledgments** 

All terms mentioned in this book that are known to be trademarks or service marks have been appropriately    
capitalized. Cisco Press or Cisco Systems, Inc., cannot attest to the accuracy of this information. Use of a    
term in this book should not be regarded as affecting the validity of any trademark or service mark. 

Microsoft and/or its respective suppliers make no representations about the suitability of the information    
contained in the documents and related graphics published as part of the services for any purpose. All such    
documents and related graphics are provided “as is” without warranty of any kind. Microsoft and/ or its    
respective suppliers hereby disclaim all warranties and conditions with regard to this information, including    
all warranties and conditions of merchantability, whether express, implied or statutory, fitness for a particular  purpose, title and non-infringement. In no event shall Microsoft and/or its respective suppliers be liable for  

any special, indirect or consequential damages or any damages whatsoever resulting from loss of use, data or    
profits, whether in an action of contract, negligence or other tortious action, arising out of or in connection    
with the use or performance of information available from the services. 

The documents and related graphics contained herein could include technical inaccuracies or typographi 

cal errors. Changes are periodically added to the information herein. Microsoft and/or its respective sup   
pliers may make improvements and/or changes in the product(s) and/or the program(s) described herein    
at any time. Partial screenshots may be viewed in full within the software version specified. 

Microsoft® and Windows® are registered trademarks of the Microsoft Corporation in the U.S.A. and    
other countries. Screenshots and icons reprinted with permission from the Microsoft Corporation. This    
book is not sponsored or endorsed by or affiliated with the Microsoft Corporation.  

From the Library of Nick Barnes  
iii 

**Special Sales** 

For information about buying this title in bulk quantities, or for special sales opportunities (which may  include electronic versions; custom cover designs; and content particular to your business, training  goals, marketing focus, or branding interests), please contact our corporate sales department at  corpsales@pearsoned.com or (800) 382-3419. 

For government sales inquiries, please contact governmentsales@pearsoned.com. 

For questions about sales outside the U.S., please contact intlcs@pearson.com. 

**Feedback Information** 

At Cisco Press, our goal is to create in-depth technical books of the highest quality and value. Each book  is crafted with care and precision, undergoing rigorous development that involves the unique expertise  of members from the professional technical community. 

Readers’ feedback is a natural continuation of this process. If you have any comments regarding how we  could improve the quality of this book, or otherwise alter it to better suit your needs, you can contact us  through email at feedback@ciscopress.com. Please make sure to include the book title and ISBN in your  message. 

We greatly appreciate your assistance. 

**Editor-in-Chief**: Mark Taub **Technical Editor**: Elan Beer **Business Operation Manager, Cisco Press**: Ronald Fligge **Editorial Assistant**: Cindy Teeters **Director, ITP Product Management**: Brett Bartow **Cover Designer**: Chuti Prasertsith **Managing Editor**: Sandra Schroeder **Composition**: Tricia Bronkella **Development Editor**: Christopher Cleveland **Indexer**: Ken Johnson 

**Senior Project Editor**: Tonya Simpson **Proofreader**: Debbie Williams **Copy Editor**: Chuck Hutchinson 

From the Library of Nick Barnes  
iv CCNA 200-301 Official Cert Guide, Volume 2 

**About the Author** 

**Wendell Odom**, CCIE No. 1624 Emeritus, has been in the networking industry since  

1981\. He has worked as a network engineer, consultant, systems engineer, instructor, and  

course developer; he currently works writing and creating certification study tools. This  

book is his 29th edition of some product for Pearson, and he is the author of all editions  

of the CCNA Cert Guides about Routing and Switching from Cisco Press. He has written  

books about topics from networking basics, certification guides throughout the years  

for CCENT, CCNA R\&S, CCNA DC, CCNP ROUTE, CCNP QoS, and CCIE R\&S. He  

maintains study tools, links to his blogs, and other resources at www.certskills.com. 

From the Library of Nick Barnes  
v 

**About the Contributing Author** 

**David Hucaby**, CCIE No. 4594, CWNE No. 292, is a network engineer for University of  Kentucky Healthcare. He has been authoring Cisco Press titles for 20 years, with a focus  on wireless and LAN switching topics. David has bachelor of science and master of sci ence degrees in electrical engineering. He lives in Kentucky with his wife, Marci, and two  daughters. 

**About the Technical Reviewer** 

**Elan Beer**, CCIE No. 1837, is a senior consultant and Cisco instructor specializing in  data center architecture and multiprotocol network design. For the past 27 years, Elan  has designed networks and trained thousands of industry experts in data center archi tecture, routing, and switching. Elan has been instrumental in large-scale professional  service efforts designing and troubleshooting internetworks, performing data center and  network audits, and assisting clients with their short- and long-term design objectives.  Elan has a global perspective of network architectures via his international clientele.  Elan has used his expertise to design and troubleshoot data centers and internetworks in  Malaysia, North America, Europe, Australia, Africa, China, and the Middle East. Most  recently, Elan has been focused on data center design, configuration, and troubleshoot ing as well as service provider technologies. In 1993, Elan was among the first to obtain  the Cisco Certified System Instructor (CCSI) certification, and in 1996, he was among  the first to attain the Cisco System highest technical certification, the Cisco Certified  Internetworking Expert. Since then, Elan has been involved in numerous large-scale data  center and telecommunications networking projects worldwide. 

From the Library of Nick Barnes  
vi CCNA 200-301 Official Cert Guide, Volume 2 

**Acknowledgments** 

Brett Bartow continues to be the backbone of the Cisco Press brand, guiding the entire author team    
through the big transition in 2019–2020 with all the changes Cisco introduced to its certifications.    
Simply the best\! Thanks for all you do, Brett\! 

Dave Hucaby teamed up again to write this book, contributing one chapter here to go along with his    
four chapters in the CCNA Volume 1 book. It’s such a joy to review his work and see such polished    
material from the first draft. It’s been a joy to work with such a consummate professional—thanks, Dave\! 

Chris Cleveland developed the book—again—and made it much better—again—and did it with more    
juggling than ever before, I think. Five months, roughly 50 technology chapters and another 50 other    
book elements, and countless online elements, all done with apparent ease. Kudos to Chris, yet again\! 

I so look forward to reading Elan Beer’s tech edits of the chapters. That may seem strange to hear, but    
Elan has truly amazing technical editing skills. His insights range from the details of technology, to the  

mind of the new learner, to wording and clarity, to holes in networking logic as compared to the word   
ing, to tiny typos that impact the meaning. Thanks again Elan for improving the chapters so much\! 

Tonya Simpson managed this book, along with the CCNA Volume 1 book, all in that same compressed    
timeframe again. As usual, on both projects, Tonya has kept the production processes rolling along and    
getting through the idiosyncrasies of the content. Thanks for shepherding the book through the wild    
again, Tonya\!  

As always, thanks to the production team that works with Tonya. From fixing all my grammar and    
passive-voice sentences to pulling the design and layout together, they do it all; thanks for putting it all    
together and making it look easy. And Tonya got to juggle two books of mine at the same time (again)—   
thanks for managing the whole production process again. 

Mike Tanamachi, illustrator and mind reader, did a great job on the figures again. Mike came through    
again with some beautiful finished products. Thanks again, Mike. 

I could not have made the timeline for this book without Chris Burns of Certskills Professional. Chris    
owns much of the PTP question support and administration process, works on the labs we put on my    
blog, and then catches anything I need to toss over my shoulder so I can focus on the books. Chris, you    
are the man\! 

A special thank you to you readers who write in with suggestions and possible errors, and especially    
those of you who post online at the Cisco Learning Network and at my blog (https://blog.certskills.com).  

Without question, the comments I receive directly and overhear by participating at CLN made this edi   
tion a better book. 

Thanks to my wonderful wife, Kris, who helps make this sometimes challenging work lifestyle a breeze. I    
love walking this journey with you, doll. Thanks to my daughter Hannah, who actually helped a bit with    
the book this summer before heading off to college (go Jackets\!). And thanks to Jesus Christ, Lord of    
everything in my life. 

From the Library of Nick Barnes

**Contents at a Glance** 

Introduction xxvii 

**Part I IP Access Control Lists 3** 

Chapter 1 Introduction to TCP/IP Transport and Applications 4 Chapter 2 Basic IPv4 Access Control Lists 24 Chapter 3 Advanced IPv4 Access Control Lists 44 Part I Review 64 

**Part II Security Services 67** 

Chapter 4 Security Architectures 68 

Chapter 5 Securing Network Devices 86 

Chapter 6 Implementing Switch Port Security 106 Chapter 7 Implementing DHCP 122 

Chapter 8 DHCP Snooping and ARP Inspection 144 Part II Review 168 

**Part III IP Services 171** 

Chapter 9 Device Management Protocols 172 Chapter 10 Network Address Translation 202 

Chapter 11 Quality of Service (QoS) 226 

Chapter 12 Miscellaneous IP Services 254 

Part III Review 284 

**Part IV Network Architecture 287** 

Chapter 13 LAN Architecture 288 

Chapter 14 WAN Architecture 302 

Chapter 15 Cloud Architecture 328 

Part IV Review 352 

**Part V Network Automation 355** 

Chapter 16 Introduction to Controller-Based Networking 356 Chapter 17 Cisco Software-Defined Access (SDA) 382   
vii 

From the Library of Nick Barnes  
viii CCNA 200-301 Official Cert Guide, Volume 2 

Chapter 18 Understanding REST and JSON 406 

Chapter 19 Understanding Ansible, Puppet, and Chef 428 

Part V Review 444 

**Part VI Final Review 447** 

Chapter 20 Final Review 448 

**Part VII Appendixes 467** 

Appendix A Numeric Reference Tables 469 

Appendix B CCNA 200-301, Volume 2 Exam Updates 476 

Appendix C Answers to the “Do I Know This Already?” Quizzes 478 

 Glossary 494 

 Index 530 

**Online Appendixes** 

Appendix D Topics from Previous Editions  

Appendix E Practice for Chapter 2: Basic IPv4 Access Control Lists  

Appendix F Previous Edition ICND1 Chapter 35: Managing IOS Files  

Appendix G Exam Topics Cross-Reference 

From the Library of Nick Barnes  
ix 

**Reader Services** 

To access additional content for this book, simply register your product. To start the registration  process, go to www.ciscopress.com/register and log in or create an account\*. Enter the product ISBN  9781587147135 and click Submit. After the process is complete, you will find any available bonus con tent under Registered Products. 

\*Be sure to check the box that you would like to hear from us to receive exclusive discounts on future  editions of this product. 

From the Library of Nick Barnes  
x CCNA 200-301 Official Cert Guide, Volume 2 **Icons Used in This Book** 

Access Point   
PC Laptop Server IP Phone 

Router Switch 

Layer 3 Switch   
Hub Bridge 

Cable (Various) Serial Line Virtual Circuit Ethernet WAN 

|  |  |
| :---- | :---- |

Wireless 

SDN Controller vSwitch   
IPS ASA Firewall 

Network Cloud 

Cable Modem 

DSLAM 

**Command Syntax Conventions** 

The conventions used to present command syntax in this book are the same  

conventions used in the IOS Command Reference. The Command Reference  

describes these conventions as follows: 

■ **Boldface** indicates commands and keywords that are entered literally as shown.  In actual configuration examples and output (not general command syntax),  

boldface indicates commands that are manually input by the user (such as a **show** 

command). 

■ *Italic* indicates arguments for which you supply actual values. 

■ Vertical bars (|) separate alternative, mutually exclusive elements. 

■ Square brackets (\[ \]) indicate an optional element. 

■ Braces ({ }) indicate a required choice. 

■ Braces within brackets (\[{ }\]) indicate a required choice within an optional ele 

ment. 

From the Library of Nick Barnes  
xi 

**Contents**  

**Introduction xxvii** 

**Part I IP Access Control Lists 3** 

**Chapter 1 Introduction to TCP/IP Transport and Applications 4** 

“Do I Know This Already?” Quiz 4 

Foundation Topics 6 

TCP/IP Layer 4 Protocols: TCP and UDP 6 

Transmission Control Protocol 7 

*Multiplexing Using TCP Port Numbers 7* 

*Popular TCP/IP Applications 10* 

*Connection Establishment and Termination 12* 

*Error Recovery and Reliability 13* 

*Flow Control Using Windowing 15* 

User Datagram Protocol 16 

TCP/IP Applications 16 

Uniform Resource Identifiers 17 

Finding the Web Server Using DNS 18 

Transferring Files with HTTP 20 

How the Receiving Host Identifies the Correct Receiving  

Application 21 

Chapter Review 22 

**Chapter 2 Basic IPv4 Access Control Lists 24** 

“Do I Know This Already?” Quiz 24 

Foundation Topics 26 

IPv4 Access Control List Basics 26 

ACL Location and Direction 26 

Matching Packets 27 

Taking Action When a Match Occurs 28 

Types of IP ACLs 28 

From the Library of Nick Barnes  
xii CCNA 200-301 Official Cert Guide, Volume 2 

Standard Numbered IPv4 ACLs 29 

List Logic with IP ACLs 29 

Matching Logic and Command Syntax 31 

*Matching the Exact IP Address 31* 

*Matching a Subset of the Address with Wildcards 31* 

*Binary Wildcard Masks 33* 

*Finding the Right Wildcard Mask to Match a Subnet 33* 

*Matching Any/All Addresses 34* 

Implementing Standard IP ACLs 34 

*Standard Numbered ACL Example 1 35* 

*Standard Numbered ACL Example 2 36* 

Troubleshooting and Verification Tips 38 

Practice Applying Standard IP ACLs 39 

Practice Building access-list Commands 39 

Reverse Engineering from ACL to Address Range 40 

Chapter Review 41 

**Chapter 3 Advanced IPv4 Access Control Lists 44** 

“Do I Know This Already?” Quiz 44 

Foundation Topics 46 

Extended Numbered IP Access Control Lists 46 

Matching the Protocol, Source IP, and Destination IP 46 

Matching TCP and UDP Port Numbers 48 

Extended IP ACL Configuration 51 

*Extended IP Access Lists: Example 1 51* 

*Extended IP Access Lists: Example 2 53* 

Practice Building access-list Commands 54 

Named ACLs and ACL Editing 54 

Named IP Access Lists 54 

Editing ACLs Using Sequence Numbers 56 

Numbered ACL Configuration Versus Named ACL Configuration 58 

ACL Implementation Considerations 59 

Additional Reading on ACLs 60 

Chapter Review 61 

**Part I Review 64** 

From the Library of Nick Barnes  
xiii 

**Part II Security Services 67** 

**Chapter 4 Security Architectures 68** 

“Do I Know This Already?” Quiz 68 

Foundation Topics 70 

Security Terminology 70 

Common Security Threats 72 

Attacks That Spoof Addresses 72 

*Denial-of-Service Attacks 73* 

*Reflection and Amplification Attacks 75* 

*Man-in-the-Middle Attacks 76* 

*Address Spoofing Attack Summary 77* 

Reconnaissance Attacks 77 

Buffer Overflow Attacks 78 

Malware 78 

Human Vulnerabilities 79 

Password Vulnerabilities 80 

*Password Alternatives 80* 

Controlling and Monitoring User Access 82 

Developing a Security Program to Educate Users 83 

Chapter Review 84 

**Chapter 5 Securing Network Devices 86** 

“Do I Know This Already?” Quiz 86 

Foundation Topics 88 

Securing IOS Passwords 88 

Encrypting Older IOS Passwords with service password-encryp 

tion 89 

Encoding the Enable Passwords with Hashes 90 

*Interactions Between Enable Password and Enable Secret 90* 

*Making the Enable Secret Truly Secret with a Hash 91* 

*Improved Hashes for Cisco’s Enable Secret 92* 

Encoding the Passwords for Local Usernames 94 

Controlling Password Attacks with ACLs 95 

From the Library of Nick Barnes  
xiv CCNA 200-301 Official Cert Guide, Volume 2 

Firewalls and Intrusion Prevention Systems 95 

Traditional Firewalls 96 

*Security Zones 97* 

Intrusion Prevention Systems (IPS) 99 

Cisco Next-Generation Firewalls 100 

Cisco Next-Generation IPS 102 

Chapter Review 103 

**Chapter 6 Implementing Switch Port Security 106** 

“Do I Know This Already?” Quiz 106 

Foundation Topics 108 

Port Security Concepts and Configuration 108 

Configuring Port Security 109 

Verifying Port Security 112 

Port Security MAC Addresses 113 

Port Security Violation Modes 114 

Port Security Shutdown Mode 115 

Port Security Protect and Restrict Modes 117 

Chapter Review 119 

**Chapter 7 Implementing DHCP 122** 

“Do I Know This Already?” Quiz 122 

Foundation Topics 124 

Dynamic Host Configuration Protocol 124 

DHCP Concepts 125 

*Supporting DHCP for Remote Subnets with DHCP Relay 126* 

*Information Stored at the DHCP Server 128* 

Configuring DHCP Features on Routers and Switches 129 

*Configuring DHCP Relay 130* 

*Configuring a Switch as DHCP Client 130* 

*Configuring a Router as DHCP Client 132* 

Identifying Host IPv4 Settings 133 

Host Settings for IPv4 133 

Host IP Settings on Windows 134 

From the Library of Nick Barnes  
xv 

Host IP Settings on macOS 136 

Host IP Settings on Linux 138 

Chapter Review 140 

**Chapter 8 DHCP Snooping and ARP Inspection 144** 

“Do I Know This Already?” Quiz 144 

Foundation Topics 146 

DHCP Snooping 146 

DHCP Snooping Concepts 146 

*A Sample Attack: A Spurious DHCP Server 147* 

*DHCP Snooping Logic 148* 

*Filtering DISCOVER Messages Based on MAC Address 150* 

*Filtering Messages that Release IP Addresses 150* 

DHCP Snooping Configuration 152 

*Configuring DHCP Snooping on a Layer 2 Switch 152* 

*Limiting DHCP Message Rates 154* 

*DHCP Snooping Configuration Summary 155* 

Dynamic ARP Inspection 156 

DAI Concepts 156 

*Review of Normal IP ARP 156* 

*Gratuitous ARP as an Attack Vector 157* 

*Dynamic ARP Inspection Logic 158* 

Dynamic ARP Inspection Configuration 160 

*Configuring ARP Inspection on a Layer 2 Switch 160* 

*Limiting DAI Message Rates 163* 

*Configuring Optional DAI Message Checks 164* 

*IP ARP Inspection Configuration Summary 165* 

Chapter Review 166 

**Part II Review 168** 

From the Library of Nick Barnes  
xvi CCNA 200-301 Official Cert Guide, Volume 2 

**Part III IP Services 171** 

**Chapter 9 Device Management Protocols 172** 

“Do I Know This Already?” Quiz 172 

Foundation Topics 174 

System Message Logging (Syslog) 174 

Sending Messages in Real Time to Current Users 174 

Storing Log Messages for Later Review 175 

Log Message Format 176 

Log Message Severity Levels 177 

Configuring and Verifying System Logging 178 

The debug Command and Log Messages 180 

Network Time Protocol (NTP) 181 

Setting the Time and Timezone 182 

Basic NTP Configuration 183 

NTP Reference Clock and Stratum 185 

Redundant NTP Configuration 186 

NTP Using a Loopback Interface for Better Availability 188 

Analyzing Topology Using CDP and LLDP 190 

Examining Information Learned by CDP 190 

Configuring and Verifying CDP 193 

Examining Information Learned by LLDP 194 

Configuring and Verifying LLDP 197 

Chapter Review 199 

**Chapter 10 Network Address Translation 202** 

“Do I Know This Already?” Quiz 202 

Foundation Topics 204 

Perspectives on IPv4 Address Scalability 204 

CIDR 205 

Private Addressing 206 

Network Address Translation Concepts 207 

Static NAT 208 

Dynamic NAT 210 

Overloading NAT with Port Address Translation 211 

From the Library of Nick Barnes  
xvii 

NAT Configuration and Troubleshooting 213 

Static NAT Configuration 213 

Dynamic NAT Configuration 215 

Dynamic NAT Verification 217 

NAT Overload (PAT) Configuration 219 

NAT Troubleshooting 222 

Chapter Review 223 

**Chapter 11 Quality of Service (QoS) 226** 

“Do I Know This Already?” Quiz 226 

Foundation Topics 228 

Introduction to QoS 228 

QoS: Managing Bandwidth, Delay, Jitter, and Loss 228 

Types of Traffic 229 

*Data Applications 229* 

*Voice and Video Applications 230* 

QoS as Mentioned in This Book 232 

QoS on Switches and Routers 233 

Classification and Marking 233 

Classification Basics 233 

Matching (Classification) Basics 234 

Classification on Routers with ACLs and NBAR 235 

Marking IP DSCP and Ethernet CoS 236 

*Marking the IP Header 237* 

*Marking the Ethernet 802.1Q Header 237* 

*Other Marking Fields 238* 

Defining Trust Boundaries 238 

DiffServ Suggested Marking Values 239 

*Expedited Forwarding (EF) 240* 

*Assured Forwarding (AF) 240* 

*Class Selector (CS) 241* 

*Guidelines for DSCP Marking Values 241* 

From the Library of Nick Barnes  
xviii CCNA 200-301 Official Cert Guide, Volume 2 

Queuing 242 

Round-Robin Scheduling (Prioritization) 243 

Low Latency Queuing 243 

A Prioritization Strategy for Data, Voice, and Video 245 

Shaping and Policing 245 

Policing 246 

*Where to Use Policing 246* 

Shaping 248 

*Setting a Good Shaping Time Interval for Voice and Video 249* 

Congestion Avoidance 250 

TCP Windowing Basics 250 

Congestion Avoidance Tools 251 

Chapter Review 252 

**Chapter 12 Miscellaneous IP Services 254** 

“Do I Know This Already?” Quiz 254 

Foundation Topics 256 

First Hop Redundancy Protocol 256 

The Need for Redundancy in Networks 257 

The Need for a First Hop Redundancy Protocol 259 

The Three Solutions for First-Hop Redundancy 260 

HSRP Concepts 261 

*HSRP Failover 261* 

*HSRP Load Balancing 262* 

Simple Network Management Protocol 263 

SNMP Variable Reading and Writing: SNMP Get and Set 264 

SNMP Notifications: Traps and Informs 265 

The Management Information Base 266 

Securing SNMP 267 

FTP and TFTP 268 

Managing Cisco IOS Images with FTP/TFTP 268 

*The IOS File System 268* 

*Upgrading IOS Images 270* 

*Copying a New IOS Image to a Local IOS File System Using*  

*TFTP 271* 

From the Library of Nick Barnes  
xix 

*Verifying IOS Code Integrity with MD5 273* 

*Copying Images with FTP 273* 

The FTP and TFTP Protocols 275 

*FTP Protocol Basics 275* 

*FTP Active and Passive Modes 276* 

*FTP over TLS (FTP Secure) 278* 

TFTP Protocol Basics 279 

Chapter Review 280 

**Part III Review 284** 

**Part IV Network Architecture 287** 

**Chapter 13 LAN Architecture 288** 

“Do I Know This Already?” Quiz 288 

Foundation Topics 290 

Analyzing Campus LAN Topologies 290 

Two-Tier Campus Design (Collapsed Core) 290 

*The Two-Tier Campus Design 290* 

*Topology Terminology Seen Within a Two-Tier Design 291* 

Three-Tier Campus Design (Core) 293 

Topology Design Terminology 295 

Small Office/Home Office 295 

Power over Ethernet (PoE) 297 

PoE Basics 297 

PoE Operation 298 

PoE and LAN Design 299 

Chapter Review 300 

**Chapter 14 WAN Architecture 302** 

“Do I Know This Already?” Quiz 302 

Foundation Topics 304 

Metro Ethernet 304 

Metro Ethernet Physical Design and Topology 305 

Ethernet WAN Services and Topologies 306 

*Ethernet Line Service (Point-to-Point) 307* 

*Ethernet LAN Service (Full Mesh) 308* 

*Ethernet Tree Service (Hub and Spoke) 309* 

From the Library of Nick Barnes  
xx CCNA 200-301 Official Cert Guide, Volume 2 

Layer 3 Design Using Metro Ethernet 309 

*Layer 3 Design with E-Line Service 309* 

*Layer 3 Design with E-LAN Service 311* 

Multiprotocol Label Switching (MPLS) 311 

MPLS VPN Physical Design and Topology 313 

MPLS and Quality of Service 314 

Layer 3 with MPLS VPN 315 

Internet VPNs 317 

Internet Access 317 

*Digital Subscriber Line 318* 

*Cable Internet 319* 

*Wireless WAN (3G, 4G, LTE, 5G) 320* 

*Fiber (Ethernet) Internet Access 321* 

Internet VPN Fundamentals 321 

*Site-to-Site VPNs with IPsec 322* 

*Remote Access VPNs with TLS 324* 

VPN Comparisons 326 

Chapter Review 326 

**Chapter 15 Cloud Architecture 328** 

“Do I Know This Already?” Quiz 328 

Foundation Topics 330 

Server Virtualization 330 

Cisco Server Hardware 330 

Server Virtualization Basics 331 

Networking with Virtual Switches on a Virtualized Host 333 

The Physical Data Center Network 334 

Workflow with a Virtualized Data Center 335 

Cloud Computing Services 336 

Private Cloud (On-Premise) 337 

Public Cloud 338 

From the Library of Nick Barnes  
xxi 

Cloud and the “As a Service” Model 339 

*Infrastructure as a Service 339* 

*Software as a Service 341* 

*(Development) Platform as a Service 341* 

WAN Traffic Paths to Reach Cloud Services 342 

Enterprise WAN Connections to Public Cloud 342 

*Accessing Public Cloud Services Using the Internet 342* 

*Pros and Cons with Connecting to Public Cloud with*  

*Internet 343* 

*Private WAN and Internet VPN Access to Public Cloud 344* 

*Pros and Cons of Connecting to Cloud with Private WANs 345* 

*Intercloud Exchanges 346* 

*Summarizing the Pros and Cons of Public Cloud WAN*  

*Options 346* 

A Scenario: Branch Offices and the Public Cloud 347 

*Migrating Traffic Flows When Migrating to Email SaaS 347* 

*Branch Offices with Internet and Private WAN 349* 

Chapter Review 350 

**Part IV Review 352** 

**Part V Network Automation 355** 

**Chapter 16 Introduction to Controller-Based Networking 356** 

“Do I Know This Already?” Quiz 357 

Foundation Topics 358 

SDN and Controller-Based Networks 358 

The Data, Control, and Management Planes 358 

*The Data Plane 359* 

*The Control Plane 360* 

*The Management Plane 361* 

*Cisco Switch Data Plane Internals 361* 

Controllers and Software-Defined Architecture 362 

*Controllers and Centralized Control 363* 

*The Southbound Interface 364* 

*The Northbound Interface 365* 

From the Library of Nick Barnes  
xxii CCNA 200-301 Official Cert Guide, Volume 2 

Software Defined Architecture Summary 367 

Examples of Network Programmability and SDN 367 

OpenDaylight and OpenFlow 367 

*The OpenDaylight Controller 368* 

*The Cisco Open SDN Controller (OSC) 369* 

Cisco Application Centric Infrastructure (ACI) 369 

*ACI Physical Design: Spine and Leaf 370* 

*ACI Operating Model with Intent-Based Networking 371* 

Cisco APIC Enterprise Module 373 

*APIC-EM Basics 373* 

*APIC-EM Replacement 374* 

Summary of the SDN Examples 375 

Comparing Traditional Versus Controller-Based Networks 375 

How Automation Impacts Network Management 376 

Comparing Traditional Networks with Controller-Based  

Networks 378 

Chapter Review 379 

**Chapter 17 Cisco Software-Defined Access (SDA) 382** 

“Do I Know This Already?” Quiz 383 

Foundation Topics 384 

SDA Fabric, Underlay, and Overlay 384 

The SDA Underlay 386 

*Using Existing Gear for the SDA Underlay 386* 

*Using New Gear for the SDA Underlay 387* 

The SDA Overlay 390 

*VXLAN Tunnels in the Overlay (Data Plane) 390* 

*LISP for Overlay Discovery and Location (Control Plane) 392* 

DNA Center and SDA Operation 395 

Cisco DNA Center 395 

Cisco DNA Center and Scalable Groups 396 

*Issues with Traditional IP-Based Security 397* 

*SDA Security Based on User Groups 398* 

From the Library of Nick Barnes  
xxiii 

DNA Center as a Network Management Platform 400 

DNA Center Similarities to Traditional Management 401 

DNA Center Differences with Traditional Management 402 

Chapter Review 403 

**Chapter 18 Understanding REST and JSON 406** 

“Do I Know This Already?” Quiz 406 

Foundation Topics 408 

REST-Based APIs 408 

REST-Based (RESTful) APIs 408 

*Client/Server Architecture 409* 

*Stateless Operation 410* 

*Cacheable (or Not) 410* 

Background: Data and Variables 410 

*Simple Variables 410* 

*List and Dictionary Variables 411* 

REST APIs and HTTP 413 

*Software CRUD Actions and HTTP Verbs 413* 

*Using URIs with HTTP to Specify the Resource 414* 

Example of REST API Call to DNA Center 417 

Data Serialization and JSON 418 

The Need for a Data Model with APIs 419 

Data Serialization Languages 421 

*JSON 421* 

*XML 421* 

*YAML 422* 

*Summary of Data Serialization 423* 

Interpreting JSON 423 

*Interpreting JSON Key:Value Pairs 423* 

*Interpreting JSON Objects and Arrays 424* 

*Minified and Beautified JSON 426* 

Chapter Review 427 

From the Library of Nick Barnes  
xxiv CCNA 200-301 Official Cert Guide, Volume 2 

**Chapter 19 Understanding Ansible, Puppet, and Chef 428** 

“Do I Know This Already?” Quiz 428 

Foundation Topics 430 

Device Configuration Challenges and Solutions 430 

Configuration Drift 430 

Centralized Configuration Files and Version Control 431 

Configuration Monitoring and Enforcement 433 

Configuration Provisioning 434 

*Configuration Templates and Variables 435* 

*Files That Control Configuration Automation 437* 

Ansible, Puppet, and Chef Basics 438 

Ansible 438 

Puppet 440 

Chef 441 

Summary of Configuration Management Tools 442 

Chapter Review 442 

**Part V Review 444** 

**Part VI Final Review 447** 

**Chapter 20 Final Review 448** 

Advice About the Exam Event 448 

Exam Event: Learn About Question Types 448 

Exam Event: Think About Your Time Budget 450 

Exam Event: A Sample Time-Check Method 451 

Exam Event: One Week Away 451 

Exam Event: 24 Hours Before the Exam 452 

Exam Event: The Last 30 Minutes 452 

Exam Event: Reserve the Hour After the Exam 453 

Exam Review 454 

Exam Review: Take Practice Exams 454 

*Using the Practice CCNA Exams 455* 

*Exam Review: Advice on How to Answer Exam Questions 456* 

*Exam Review: Additional Exams with the Premium Edition 457* 

From the Library of Nick Barnes  
xxv 

Exam Review: Find Knowledge Gaps 458 

Exam Review: Practice Hands-On CLI Skills 460 

*CCNA Exam Topics with CLI Skill Requirements 460* 

Exam Review: Self-Assessment Pitfalls 462 

Exam Review: Adjustments for Your Second Attempt 463 

Exam Review: Other Study Tasks 464 

Final Thoughts 464 

**Part VII Appendixes 467** 

**Appendix A Numeric Reference Tables 469** 

**Appendix B CCNA 200-301, Volume 2 Exam Updates 476** 

**Appendix C Answers to the “Do I Know This Already?” Quizzes 478** 

 **Glossary 494** 

 **Index 530** 

**Online Appendixes** 

**Appendix D Topics from Previous Editions**  

**Appendix E Practice for Chapter 2: Basic IPv4 Access Control Lists**  

**Appendix F Previous Edition ICND1 Chapter 35: Managing IOS Files**  

**Appendix G Exam Topics Cross-Reference** 

**Appendix H Study Planner** 

From the Library of Nick Barnes  
*This page intentionally left blank*  

From the Library of Nick Barnes  
xxvii 

**Introduction** 

**About Cisco Certifications and CCNA** 

Congratulations\! If you’re reading far enough to look at this book’s Introduction, you’ve  probably already decided to go for your Cisco certification, and the CCNA certification  is the one place to begin that journey. If you want to succeed as a technical person in the  networking industry at all, you need to know Cisco. Cisco has a ridiculously high market  

share in the router and switch marketplace, with more than 80 percent market share in  some markets. In many geographies and markets around the world, networking equals  Cisco. If you want to be taken seriously as a network engineer, Cisco certification makes  perfect sense. 

**NOTE** This book discusses part of the content Cisco includes in the CCNA 200-301  exam, with the *CCNA 200-301 Official Cert Guide, Volume 1,* covering the rest. You  will need both the Volume 1 and Volume 2 books to have all the content necessary for  the exam. 

The first few pages of this Introduction explain the core features of the Cisco Career  Certification program, of which the Cisco Certified Network Associate (CCNA) serves  as the foundation for all the other certifications in the program. This section begins with  a comparison of the old to the new certifications due to some huge program changes in  2019\. It then gives the key features of CCNA, how to get it, and what’s on the exam. 

The Big Changes to Cisco Certifications in 2019 

Cisco announced sweeping changes to its career certification program around mid-year  2019\. Because so many of you will have read and heard about the old versions of the  CCNA certification, this Introduction begins with a few comparisons between the old  and new CCNA as well as some of the other Cisco career certifications. 

First, consider the Cisco career certifications before 2019, as shown in Figure I-1. At  that time, Cisco offered 10 separate CCNA certifications in different technology tracks.  Cisco also had eight Professional-level (CCNP, or Cisco Certified Network Professional)  certifications.  

From the Library of Nick Barnes  
xxviii CCNA 200-301 Official Cert Guide, Volume 2 

Collaboration Data Center Wireless Security Service Routing &   
Switching 

**CCIE**   
Provider 

Collaboration Data Center Wireless Security Service Cloud Routing &   
Switching 

**CCNP**   
Provider 

Collaboration Data Center Wireless Security Cloud Cyber Industrial   
Routing & Switching 

**CCNA**   
Service Provider 

Ops 

**Figure I-1** *Old Cisco Certification Silo Concepts* 

Why so many? Cisco began with one track—Routing and Switching—back in 1998\.  

Over time, Cisco identified more and more technology areas that had grown to have  

enough content to justify another set of CCNA and CCNP certifications on those topics,  so Cisco added more tracks. Many of those also grew to support expert-level topics with  CCIE (Cisco Certified Internetwork Expert). 

In 2019, Cisco consolidated the tracks and moved the topics around quite a bit, as  

shown in Figure I-2. 

Collaboration Data Center Enterprise Security Service Provider 

**CCIE** 

Collaboration Data Center Enterprise Security Service Provider 

**CCNP** 

**CCNA**  

**Figure I-2** *New Cisco Certification Tracks and Structure* 

All the tracks now begin with the content in the one remaining CCNA certification. For  CCNP, you now have a choice of five technology areas for your next steps, as shown in  Figure I-2. (Note that Cisco replaced “Routing and Switching” with “Enterprise.”) 

From the Library of Nick Barnes  
xxix 

Cisco made the following changes with the 2019 announcements: 

**CCENT:** Retired the only entry-level certification (CCENT, or Cisco Certified Entry  Network Technician), with no replacement. 

**CCNA:** Retired all the CCNA certifications except what was then known as “CCNA  Routing and Switching,” which became simply “CCNA.”  

**CCNP:** Consolidated the professional-level (CCNP) certifications to five tracks, includ ing merging CCNP Routing and Switching and CCNP Wireless into CCNP Enterprise. **CCIE:** Achieved better alignment with CCNP tracks through the consolidations.  

Cisco needed to move many of the individual exam topics from one exam to another  because of the number of changes. For instance, Cisco announced the retirement of all  the associate certifications—nine CCNA certifications plus the CCDA (Design Associate)  certification—but those technologies didn’t disappear\! Cisco just moved the topics around  to different exams in different certifications. (Note that Cisco later announced that CCNA  Cyber Ops would remain, and not be retired, with details to be announced.) 

Consider wireless LANs as an example. The 2019 announcements retired both CCNA  Wireless and CCNP Wireless as certifications. Some of the old CCNA Wireless topics  landed in the new CCNA, whereas others landed in the two CCNP Enterprise exams  about wireless LANs. 

For those of you who want to learn more about the transition, check out my blog  

(https://blog.certskills.com) and look for posts in the News category from around June  2019\. Now on to the details about CCNA as it exists starting in 2019\! 

How to Get Your CCNA Certification 

As you saw in Figure I-2, all career certification paths now begin with CCNA. So how do  you get it? Today, you have one and only one option to achieve CCNA certification: 

Take and pass one exam: the Cisco 200-301 CCNA exam. 

To take the 200-301 exam, or any Cisco exam, you will use the services of Pearson VUE  (vue.com). The process works something like this:  

**1\.** Establish a login at https://home.pearsonvue.com/ (or use your existing login). 

**2\.** Register for, schedule a time and place, and pay for the Cisco 200-301 exam, all  from the VUE website. 

**3\.** Take the exam at the VUE testing center. 

**4\.** You will receive a notice of your score, and whether you passed, before you leave  the testing center. 

Types of Questions on the CCNA 200-301 Exam 

The Cisco CCNA and CCNP exams all follow the same general format, with these types  of questions: 

■ Multiple-choice, single-answer 

■ Multiple-choice, multiple-answer 

From the Library of Nick Barnes  
xxx CCNA 200-301 Official Cert Guide, Volume 2 

■ Testlet (one scenario with multiple multiple-choice questions) 

■ Drag-and-drop 

■ Simulated lab (sim) 

■ Simlet 

Although the first four types of questions in the list should be somewhat familiar to you  

from other tests in school, the last two are more common to IT tests and Cisco exams  

in particular. Both use a network simulator to ask questions so that you control and use  

simulated Cisco devices. In particular: 

**Sim questions:** You see a network topology and lab scenario, and can access the devic 

es. Your job is to fix a problem with the configuration. 

**Simlet questions:** This style combines sim and testlet question formats. As with a sim  

question, you see a network topology and lab scenario, and can access the devices.  

However, as with a testlet, you also see multiple multiple-choice questions. Instead of  

changing or fixing the configuration, you answer questions about the current state of  

the network. 

These two question styles with the simulator give Cisco the ability to test your configu 

ration skills with sim questions, and your verification and troubleshooting skills with  

simlet questions. 

Before taking the test, learn the exam user interface by watching some videos Cisco pro 

vides about the interface. To find the videos, just go to www.cisco.com and search for  

“Cisco Certification Exam Tutorial Videos.” 

CCNA 200-301 Exam Content, Per Cisco 

Ever since I was in grade school, whenever a teacher announced that we were having a  

test soon, someone would always ask, “What’s on the test?” We all want to know, and  

we all want to study what matters and avoid studying what doesn’t matter. 

Cisco tells the world the topics on each of its exams. Cisco wants the public to know the  

variety of topics and get an idea about the kinds of knowledge and skills required for  

each topic for every Cisco certification exam. To find the details, go to www.cisco.com/ 

go/certifications, look for the CCNA page, and navigate until you see the exam topics. 

This book also lists those same exam topics in several places. From one perspective,  

every chapter sets about to explain a small set of exam topics, so each chapter begins  

with the list of exam topics covered in that chapter. However, you might want to also  

see the exam topics in one place, so Appendix G, “Exam Topics Cross-Reference,” lists  

all the exam topics. You may want to download Appendix G in PDF form and keep it  

handy. The appendix lists the exam topics with two different cross-references: 

■ A list of exam topics and the chapter(s) that covers each topic 

■ A list of chapters and the exam topics covered in each chapter 

From the Library of Nick Barnes  
xxxi 

Exam Topic Verbs and Depth 

Reading and understanding the exam topics, especially deciding the depth of skills  required for each exam topic, require some thought. Each exam topic mentions the  name of some technology, but it also lists a verb that implies the depth to which you  must master the topic. The primary exam topics each list one or more verbs that describe  the skill level required. For example, consider the following exam topic: 

**Configure** and **verify** IPv4 addressing and subnetting 

Note that this one exam topic has two verbs (*configure* and *verify*). Per this exam topic,  you should be able to not only configure IPv4 addresses and subnets, but you also  should understand them well enough to verify that the configuration works. In contrast,  the following exam topic asks you to describe a technology but does not ask you to  configure it: 

**Describe** the purpose of first hop redundancy protocol 

The *describe* verb tells you to be ready to describe whatever a “first hop redundancy  protocol” is. That exam topic also implies that you do not then need to be ready to con figure or verify any first hop redundancy protocols (HSRP, VRRP, and GLBP). 

Finally, note that the configure and verify exam topics imply that you should be able  to describe and explain and otherwise master the concepts so that you understand what  you have configured. The earlier “Configure and verify IPv4 addressing and subnetting”  does not mean that you should know how to type commands but have no clue as to  what you configured. You must first master the conceptual exam topic verbs. The pro gression runs something like this: 

Describe, Identify, Explain, Compare/Contrast, Configure, Verify, Troubleshoot 

For instance, an exam topic that lists “compare and contrast” means that you should be  able to describe, identify, and explain the technology. Also, an exam topic with “config ure and verify” tells you to also be ready to describe, explain, and compare/contrast.  

The Context Surrounding the Exam Topics 

Take a moment to navigate to www.cisco.com/go/certifications and find the list of exam  topics for the CCNA 200-301 exam. Did your eyes go straight to the list of exam top ics? Or did you take the time to read the paragraphs above the exam topics first? 

That list of exam topics for the CCNA 200-301 exam includes a little over 50 primary  exam topics and about 50 more secondary exam topics. The primary topics have those  verbs as just discussed, which tell you something about the depth of skill required. The  secondary topics list only the names of more technologies to know.  

From the Library of Nick Barnes  
xxxii CCNA 200-301 Official Cert Guide, Volume 2 

However, the top of the web page that lists the exam topics also lists some important  

information that tells us some important facts about the exam topics. In particular, that  

leading text, found at the beginning of Cisco exam topic pages of most every exam, tells  

us these important points: 

■ The guidelines may change over time. 

■ The exam topics are general guidelines about what may be on the exam. 

■ The actual exam may include “other related topics.” 

Interpreting these three facts in order, I would not expect to see a change to the pub 

lished list of exam topics for the exam. I’ve been writing the Cisco Press CCNA Cert  

Guides since Cisco announced CCNA back in 1998, and I’ve never seen Cisco change  

the official exam topics in the middle of an exam—not even to fix typos. But the intro 

ductory words say that they might change the exam topics, so it’s worth checking. 

As for the second item in the preceding list, even before you know what the acronyms  

mean, you can see that the exam topics give you a general but not detailed idea about  

each topic. The exam topics do not attempt to clarify every nook and cranny or to list  

every command and parameter; however, this book serves as a great tool in that it acts as  

a much more detailed interpretation of the exam topics. We examine every exam topic,  

and if we think a concept or command is possibly within an exam topic, we put it into  

the book. So, the exam topics give us general guidance, and these books give us much  

more detailed guidance. 

The third item in the list uses literal wording that runs something like this: “However,  

other related topics may also appear on any specific delivery of the exam.” That one  

statement can be a bit jarring to test takers, but what does it really mean? Unpacking the  

statement, it says that such questions may appear on any one exam but may not; in other  

words, they don’t set about to ask every test taker some questions that include concepts  

not mentioned in the exam topics. Second, the phrase “…other **related** topics…” empha 

sizes that any such questions would be related to some exam topic, rather than being far  

afield—a fact that helps us in how we respond to this particular program policy. 

For instance, the CCNA 200-301 exam includes configuring and verifying the OSPF  

routing protocol, but it does not mention the EIGRP routing protocol. I personally  

would be unsurprised to see an OSPF question that required a term or fact not specifi 

cally mentioned in the exam topics, but not one that’s some feature that (in my opinion)  

ventures far away from the OSPF features in the exam topics. Also, I would not expect  

to see a question about how to configure and verify EIGRP.  

And just as one final side point, note that Cisco does on occasion ask a test taker some  

unscored questions, and those may appear to be in this vein of questions from outside  

topics. When you sit down to take the exam, the small print mentions that you may see  

unscored questions and you won’t know which ones are unscored. (These questions give  

Cisco a way to test possible new questions.) Yet some of these might be ones that fall  

into the “other related topics” category but then not affect your score. 

From the Library of Nick Barnes  
xxxiii 

You should prepare a little differently for any Cisco exam, in comparison to, say, an  exam back in school, in light of Cisco’s “other related questions” policy: 

■ Do not approach an exam topic with an “I’ll learn the core concepts and ignore the  edges” approach. 

■ Instead, approach each exam topic with a “pick up all the points I can” approach by  mastering each exam topic, both in breadth and in depth. 

■ Go beyond each exam topic when practicing configuration and verification by taking  a little extra time to look for additional **show** commands and configuration options,  and make sure you understand as much of the **show** command output that you can. 

By mastering the known topics, and looking for places to go a little deeper, you will  hopefully pick up the most points you can from questions about the exam topics. Then  the extra practice you do with commands may happen to help you learn beyond the  exam topics in a way that can help you pick up other points as well. 

CCNA 200-301 Exam Content, Per This Book 

When we created the Official Cert Guide content for the CCNA 200-301 exam, we  considered a few options for how to package the content, and we landed on releasing a  two-book set. Figure I-3 shows the setup of the content, with roughly 60 percent of the  content in Volume 1 and the rest in Volume 2\. 

Fundamentals   
Ethernet LANs IPv4 Routing IPv6 Routing Wireless LANs 

Security   
IP Services Automation Architecture 

Vol. 1 \- 60% Vol. 2 \- 40% 

**Figure I-3** *Two Books for CCNA 200-301* 

The two books together cover all the exam topics in the CCNA 200-301 exam. Each  chapter in each book develops the concepts and commands related to an exam topic,  with clear and detailed explanations, frequent figures, and many examples that build  your understanding of how Cisco networks work.  

As for choosing what content to put into the books, note that we begin and finish with  Cisco’s exam topics, but with an eye toward predicting as many of the “other related  topics” as we can. We start with the list of exam topics and apply a fair amount of expe rience, discussion, and other secret sauce to come up with an interpretation of what  specific concepts and commands are worthy of being in the books or not. At the end  of the writing process, the books should cover all the published exam topics, with addi tional depth and breadth that I choose based on the analysis of the exam. As we have  done from the very first edition of the *CCNA Official Cert Guide*, we intend to cover  each and every topic in depth. But as you would expect, we cannot predict every single  fact on the exam given the nature of the exam policies, but we do our best to cover all  known topics. 

From the Library of Nick Barnes  
xxxiv CCNA 200-301 Official Cert Guide, Volume 2 

**Book Features** 

This book includes many study features beyond the core explanations and examples in  each chapter. This section acts as a reference to the various features in the book. 

Chapter Features and How to Use Each Chapter 

Each chapter of this book is a self-contained short course about one small topic area,  organized for reading and study, as follows: 

**“Do I Know This Already?” quizzes:** Each chapter begins with a pre-chapter quiz. **Foundation Topics:** This is the heading for the core content section of the chapter. **Chapter Review:** This section includes a list of study tasks useful to help you remem ber concepts, connect ideas, and practice skills-based content in the chapter. 

Figure I-4 shows how each chapter uses these three key elements. You start with the  DIKTA quiz. You can use the score to determine whether you already know a lot, or not  so much, and determine how to approach reading the Foundation Topics (that is, the  technology content in the chapter). When finished, use the Chapter Review tasks to start  working on mastering your memory of the facts and skills with configuration, verifica tion, and troubleshooting. 

**DIKTA Quiz Foundation Topics Chapter Review** High Score (Skim) Foundation Topics   
Take Quiz 1\) In-Chapter, or...   
Low Score (Read) Foundation Topics   
2\) Companion Website 

**Figure I-4** *Three Primary Tasks for a First Pass Through Each Chapter* 

In addition to these three main chapter features, each “Chapter Review” section uses a  

variety of other book features, including the following: 

■ **Review Key Topics:** Inside the “Foundation Topics” section, the Key Topic icon  

appears next to the most important items, for the purpose of later review and mas 

tery. While all content matters, some is, of course, more important to learn, or needs  

more review to master, so these items are noted as key topics. The Chapter Review  

lists the key topics in a table. Scan the chapter for these items to review them. Or  

review the key topics interactively using the companion website. 

■ **Complete Tables from Memory:** Instead of just rereading an important table of  

information, you will find some tables have been turned into memory tables, an  

interactive exercise found on the companion website. Memory tables repeat the table  

but with parts of the table removed. You can then fill in the table to exercise your  

memory and click to check your work. 

■ **Key Terms You Should Know:** You do not need to be able to write a formal defini tion of all terms from scratch; however, you do need to understand each term well  

enough to understand exam questions and answers. The Chapter Review lists the key  

terminology from the chapter. Make sure you have a good understanding of each  

term and use the Glossary to cross-check your own mental definitions. You can also  

review key terms with the “Key Terms Flashcards” app on the companion website. 

From the Library of Nick Barnes  
xxxv 

■ **Labs:** Many exam topics use verbs such as *configure* and *verify*; all these refer  to skills you should practice at the user interface (CLI) of a router or switch. The  Chapter and Part Reviews refer you to these other tools. The upcoming section titled  “About Building Hands-On Skills” discusses your options. 

■ **Command References:** Some book chapters cover a large number of router and  switch commands. The Chapter Review includes reference tables for the commands  used in that chapter, along with an explanation. Use these tables for reference, but  also use them for study. Just cover one column of the table and see how much you  can remember and complete mentally. 

■ **Review DIKTA Questions:** Although you have already seen the DIKTA questions  from the chapters, re-answering those questions can prove a useful way to review  facts. The Part Review suggests that you repeat the DIKTA questions but using the  Pearson Test Prep (PTP) exam.  

Part Features and How to Use the Part Review 

The book organizes the chapters into parts for the purpose of helping you study for  the exam. Each part groups a small number of related chapters together. Then the study  process (described just before Chapter 1\) suggests that you pause after each part to do a  review of all chapters in the part. Figure I-5 lists the titles of the eight parts and the chap ters in those parts (by chapter number) for this book. 

5 Network Automation (16-19) 

4 Network Architecture (13-15) 

3 IP Services (9-12) 

1 2   
IP Access   
Control Lists (1-3)   
Security   
Services (4-8) 

**Figure I-5** *The Book Parts (by Title), and Chapter Numbers in Each Part* 

The Part Review that ends each part acts as a tool to help you with spaced review ses sions. Spaced reviews—that is, reviewing content several times over the course of your  study—help improve retention. The Part Review activities include many of the same  kinds of activities seen in the Chapter Review. Avoid skipping the Part Review, and take  the time to do the review; it will help you in the long run. 

The Companion Website for Online Content Review 

We created an electronic version of every Chapter and Part Review task that could be  improved though an interactive version of the tool. For instance, you can take a “Do I  Know This Already?” quiz by reading the pages of the book, but you can also use our  testing software. As another example, when you want to review the key topics from a  chapter, you can find all those in electronic form as well.  

From the Library of Nick Barnes  
xxxvi CCNA 200-301 Official Cert Guide, Volume 2 

All the electronic review elements, as well as other electronic components of the book,  

exist on this book’s companion website. The companion website gives you a big advan 

tage: you can do most of your Chapter and Part Review work from anywhere using the  

interactive tools on the site. The advantages include 

■ **Easier to use:** Instead of having to print out copies of the appendixes and do the  

work on paper, you can use these new apps, which provide you with an easy-to-use,  

interactive experience that you can easily run over and over. 

■ **Convenient:** When you have a spare 5–10 minutes, go to the book’s website and  

review content from one of your recently finished chapters. 

■ **Untethered from the book:** You can access your review activities from anywhere— 

no need to have the book with you. 

■ **Good for tactile learners:** Sometimes looking at a static page after reading a chapter  

lets your mind wander. Tactile learners might do better by at least typing answers  

into an app, or clicking inside an app to navigate, to help keep you focused on the  

activity. 

The interactive Chapter Review elements should improve your chances of passing as  

well. Our in-depth reader surveys over the years show that those who do the Chapter  

and Part Reviews learn more. Those who use the interactive versions of the review ele 

ments also tend to do more of the Chapter and Part Review work. So take advantage  

of the tools and maybe you will be more successful as well. Table I-1 summarizes these  

interactive applications and the traditional book features that cover the same content. 

**Table I-1** *Book Features with Both Traditional and App Options* 

| Feature Key Topic |  Traditional   Table with list; flip pages to find  | App  Key Topics Table app |
| :---- | :---- | ----- |
| Config Checklist |  Just one of many types of key topics |  Config Checklist app |
| Key Terms |  Listed in each “Chapter Review” section,  with the Glossary in the back of the book | Glossary Flash Cards app |

The companion website also includes links to download, navigate, or stream for these  

types of content: 

■ Pearson Sim Lite Desktop App 

■ Pearson Test Prep (PTP) Desktop App 

■ Pearson Test Prep (PTP) Web App 

■ Videos as mentioned in book chapters 

From the Library of Nick Barnes  
xxxvii 

How to Access the Companion Website 

To access the companion website, which gives you access to the electronic content with  this book, start by establishing a login at www.ciscopress.com and register your book. To  do so, simply go to www.ciscopress.com/register and enter the ISBN of the print book:  9781587147135\. After you have registered your book, go to your account page and  click the **Registered Products** tab. From there, click the **Access Bonus Content** link to  get access to the book’s companion website. 

Note that if you buy the *Premium Edition eBook and Practice Test* version of this book  from Cisco Press, your book will automatically be registered on your account page.  Simply go to your account page, click the **Registered Products** tab, and select **Access  Bonus Content** to access the book’s companion website. 

How to Access the Pearson Test Prep (PTP) App 

You have two options for installing and using the Pearson Test Prep application: a web  app and a desktop app.  

To use the Pearson Test Prep application, start by finding the registration code that  comes with the book. You can find the code in these ways: 

■ **Print book:** Look in the cardboard sleeve in the back of the book for a piece of paper  with your book’s unique PTP code. 

■ **Premium Edition:** If you purchase the Premium Edition eBook and Practice Test  directly from the Cisco Press website, the code will be populated on your account  

page after purchase. Just log in at www.ciscopress.com, click **account** to see details of  your account, and click the **digital purchases** tab.  

■ **Amazon Kindle:** For those who purchase a Kindle edition from Amazon, the access  code will be supplied directly from Amazon.  

■ **Other bookseller e-books:** Note that if you purchase an e-book version from any  other source, the practice test is not included because other vendors to date have not  chosen to vend the required unique access code. 

**NOTE** Do not lose the activation code because it is the only means with which you can  access the QA content with the book. 

Once you have the access code, to find instructions about both the PTP web app and the  desktop app, follow these steps: 

**Step 1\.** Open this book’s companion website, as was shown earlier in this  

Introduction under the heading “How to Access the Companion Website.” 

**Step 2\.** Click the **Practice Exams** button. 

**Step 3\.** Follow the instructions listed there both for installing the desktop app and for  using the web app. 

From the Library of Nick Barnes  
xxxviii CCNA 200-301 Official Cert Guide, Volume 2 

Note that if you want to use the web app only at this point, just navigate to  

www.pearsontestprep.com, establish a free login if you do not already have one, and  

register this book’s practice tests using the registration code you just found. The process  

should take only a couple of minutes. 

**NOTE** Amazon e-book (Kindle) customers: It is easy to miss Amazon’s email that lists  

your PTP access code. Soon after you purchase the Kindle e-book, Amazon should send  

an email. However, the email uses very generic text and makes no specific mention of PTP  

or practice exams. To find your code, read every email from Amazon after you purchase  

the book. Also, do the usual checks (such as checking your spam folder) for ensuring your  

email arrives. 

**NOTE** Other e-book customers: As of the time of publication, only the publisher and  

Amazon supply PTP access codes when you purchase their e-book editions of this book. 

Feature Reference 

The following list provides an easy reference to get the basic idea behind each book  

feature: 

■ **Practice exam:** The book gives you the rights to the Pearson Test Prep (PTP) testing  

software, available as a web app and desktop app. Use the access code on a piece  

of cardboard in the sleeve in the back of the book, and use the companion website to  

download the desktop app or navigate to the web app (or just go to  

www.pearsontestprep.com).  

■ **E-book:** Pearson offers an e-book version of this book that includes extra practice  

tests. If interested, look for the special offer on a coupon card inserted in the sleeve  

in the back of the book. This offer enables you to purchase the *CCNA 200-301*  

*Official Cert Guide, Volume 2, Premium Edition eBook and Practice Test* at a 70  

percent discount off the list price. The product includes three versions of the e-book:  

PDF (for reading on your computer), EPUB (for reading on your tablet, mobile  

device, or Nook or other e-reader), and Mobi (the native Kindle version). It also  

includes additional practice test questions and enhanced practice test features. 

■ **Mentoring videos:** The companion website also includes a number of videos about  

other topics as mentioned in individual chapters. 

■ **CCNA 200-301 Network Simulator Lite:** This lite version of the best-selling CCNA  

Network Simulator from Pearson provides you with a means, right now, to experi 

ence the Cisco command-line interface (CLI). No need to go buy real gear or buy a  

full simulator to start learning the CLI. Just install it from the companion website. 

■ **CCNA Simulator:** If you are looking for more hands-on practice, you might want to  

consider purchasing the CCNA Network Simulator. You can purchase a copy of this  

software from Pearson at http://pearsonitcertification.com/networksimulator or other  

From the Library of Nick Barnes  
xxxix 

retail outlets. To help you with your studies, Pearson has created a mapping guide  

that maps each of the labs in the simulator to the specific sections in each volume of  the CCNA Cert Guide. You can get this mapping guide free on the Extras tab on the  book product page: www.ciscopress.com/title/9781587147135. 

■ **PearsonITCertification.com:** The website www.pearsonitcertification.com is a great  resource for all things IT-certification related. Check out the great CCNA articles,  

videos, blogs, and other certification preparation tools from the industry’s best  

authors and trainers. 

■ **Author’s website and blogs:** The author maintains a website that hosts tools and links  useful when studying for CCNA. In particular, the site has a large number of free lab  exercises about CCNA content, additional sample questions, and other exercises.  

Additionally, the site indexes all content so you can study based on the book chap 

ters and parts. To find it, navigate to https://blog.certskills.com. 

**Book Organization, Chapters, and Appendixes** 

The *CCNA 200-301 Official Cert Guide, Volume 1,* contains 29 chapters, while this  book has 19 core chapters. Each chapter covers a subset of the topics on the CCNA  exam. The book organizes its chapters into parts of three to five chapters as follows:  

■ **Part I: IP Access Control Lists** 

■ **Chapter 1, “Introduction to TCP/IP Transport and Applications,”** completes most  of the detailed discussion of the upper two layers of the TCP/IP model (transport  

and application), focusing on TCP and applications. 

■ **Chapter 2, “Basic IPv4 Access Control Lists,”** examines how standard IP ACLs  

can fi lter packets based on the source IP address so that a router will not forward  

the packet. 

■ **Chapter 3, “Advanced IPv4 Access Control Lists,”** examines both named and  

numbered ACLs, and both standard and extended IP ACLs. 

■ **Part II: Security Services** 

■ **Chapter 4, “Security Architectures,”** discusses a wide range of fundamental con cepts in network security. 

■ **Chapter 5, “Securing Network Devices,”** shows how to use the router and switch  CLI and introduces the concepts behind fi rewalls and intrusion prevention systems  

(IPSs). 

■ **Chapter 6, “Implementing Switch Port Security,”** explains the concepts as well as  how to confi gure and verify switch port security, a switch feature that does basic  

MAC-based monitoring of the devices that send data into a switch. 

■ **Chapter 7, “Implementing DHCP,”** discusses how hosts can be confi gured with  

their IPv4 settings and how they can learn those settings with DHCP. 

■ **Chapter 8, “DHCP Snooping and ARP Inspection,”** shows how to implement two  related switch security features, with one focusing on reacting to suspicious DHCP  

messages and the other reacting to suspicious ARP messages. 

From the Library of Nick Barnes  
xl CCNA 200-301 Official Cert Guide, Volume 2 

■ **Part III: IP Services** 

■ **Chapter 9, “Device Management Protocols,”** discusses the concepts and confi gu 

ration of some common network management tools: syslog, NTP, CDP, and LLDP. 

■ **Chapter 10, “Network Address Translation,”** works through the complete concept,  

confi guration, verifi cation, and troubleshooting sequence for the router NAT fea 

ture, including how it helps conserve public IPv4 addresses. 

■ **Chapter 11, “Quality of Service (QoS),”** discusses a wide variety of concepts all  

related to the broad topic of QoS. 

■ **Chapter 12, “Miscellaneous IP Services,”** discusses several topics for which the  

exam requires conceptual knowledge but no confi guration knowledge, including  

FHRPs (including HSRP), SNMP, TFTP, and FTP. 

■ **Part IV: Network Architecture** 

■ **Chapter 13, “LAN Architecture,”** examines various ways to design Ethernet LANs,  

discussing the pros and cons, and explains common design terminology, including  

Power over Ethernet (PoE). 

■ **Chapter 14, “WAN Architecture,”** discusses the concepts behind three WAN alter 

natives: Metro Ethernet, MPLS VPNs, and Internet VPNs. 

■ **Chapter 15, “Cloud Architecture,”** explains the basic concepts and then generally  

discusses the impact that cloud computing has on a typical enterprise network,  

including the foundational concepts of server virtualization. 

■ **Part V: Network Automation** 

■ **Chapter 16, “Introduction to Controller-Based Networking,”** discusses many  

concepts and terms related to how Software-Defi ned Networking (SDN) and net 

work programmability are impacting typical enterprise networks. 

■ **Chapter 17, “Cisco Software-Defi ned Access (SDA),”** discusses Cisco’s Software 

Defi ned Networking (SDN) offering for the enterprise, including the DNA Center  

controller. 

■ **Chapter 18, “Understanding REST and JSON,”** explains the foundational concepts  

of REST APIs, data structures, and how JSON can be useful for exchanging data  

using APIs. 

■ **Chapter 19, “Understanding Ansible, Puppet, and Chef,”** discusses the need for  

confi guration management software and introduces the basics of each of these  

three confi guration management tools. 

■ **Part VI: Final Review** 

■ **Chapter 20, “Final Review,”** suggests a plan for fi nal preparation after you have  

fi nished the core parts of the book, in particular explaining the many study options  

available in the book. 

■ **Part VII: Appendixes** 

■ **Appendix A, “Numeric Reference Tables,”** lists several tables of numeric informa 

tion, including a binary-to-decimal conversion table and a list of powers of 2\. 

From the Library of Nick Barnes  
xli 

■ **Appendix B, “CCNA 200-301 Volume 2 Exam Updates,”** is a place for the author  to add book content mid-edition. Always check online for the latest PDF version of  

this appendix; the appendix lists download instructions. 

■ **Appendix C, “Answers to the ‘Do I Know This Already?’ Quizzes,”** includes the  explanations to all the “Do I Know This Already” quizzes. 

■ The **Glossary** contains defi nitions for many of the terms used in the book, including  the terms listed in the “Key Terms You Should Know” sections at the conclusion of  

the chapters. 

■ **Online Appendixes** 

■ **Appendix D, “Topics from Previous Editions** 

■ **Appendix E, “Practice for Chapter 2: Basic IPv4 Access Control Lists”** 

■ **Appendix F, “Previous Edition ICND1 Chapter 35: Managing IOS Files”** 

■ **Appendix G, “Exam Topics Cross-Reference,”** provides some tables to help you  

fi nd where each exam objective is covered in the book. 

■ **Appendix H, “Study Planner,”** is a spreadsheet with major study milestones, where  you can track your progress through your study. 

**About Building Hands-On Skills** 

You need skills in using Cisco routers and switches, specifically the Cisco command-line  interface (CLI). The Cisco CLI is a text-based command-and-response user interface: you  type a command, and the device (a router or switch) displays messages in response. To  answer sim and simlet questions on the exams, you need to know a lot of commands,  and you need to be able to navigate to the right place in the CLI to use those commands. 

This next section walks through the options of what is included in the book, with a brief  description of lab options outside the book. 

Config Lab Exercises 

Some router and switch features require multiple configuration commands. Part of the  skill you need to learn is to remember which configuration commands work together,  which ones are required, and which ones are optional. So, the challenge level goes  

beyond just picking the right parameters on one command. You have to choose which  commands to use, in which combination, typically on multiple devices. And getting  good at that kind of task requires practice. 

Each Config Lab lists details about a straightforward lab exercise for which you should  create a small set of configuration commands for a few devices. Each lab presents a  sample lab topology, with some requirements, and you have to decide what to configure  on each device. The answer then shows a sample configuration. Your job is to create the  configuration and then check your answer versus the supplied answer. 

Config Lab content resides outside the book at the author’s blog site  

(https://blog.certskills.com). You can navigate to the Config Lab in a couple of ways  from the site, or just go directly to https://blog.certskills.com/category/hands-on/ 

config-lab/ to reach a list of all Config Labs. Figure I-6 shows the logo that you will see  with each Config Lab. 

From the Library of Nick Barnes  
xlii CCNA 200-301 Official Cert Guide, Volume 2 

![][image2]  
**Figure I-6** *Config Lab Logo in the Author’s Blogs* 

These Config Labs have several benefits, including the following: 

**Untethered and responsive:** Do them from anywhere, from any web browser, from  

your phone or tablet, untethered from the book. 

**Designed for idle moments:** Each lab is designed as a 5- to 10-minute exercise if all  

you are doing is typing in a text editor or writing your answer on paper. 

**Two outcomes, both good:** Practice getting better and faster with basic configuration,  

or if you get lost, you have discovered a topic that you can now go back and reread  

to complete your knowledge. Either way, you are a step closer to being ready for the  

exam\! 

**Blog format:** The format allows easy adds and changes by me and easy comments by  

you. 

**Self-assessment:** As part of final review, you should be able to do all the Config Labs,  

without help, and with confidence. 

Note that the blog organizes these Config Lab posts by book chapter, so you can easily  

use these at both Chapter Review and Part Review. 

A Quick Start with Pearson Network Simulator Lite 

The decision of how to get hands-on skills can be a little scary at first. The good news:  

You have a free and simple first step to experience the CLI: install and use the Pearson  

Network Simulator Lite (or NetSim Lite) that comes with this book. 

This book comes with a lite version of the best-selling CCNA Network Simulator from  

Pearson, which provides you with a means, right now, to experience the Cisco CLI. No  

need to go buy real gear or buy a full simulator to start learning the CLI. Just install it  

from the companion website. 

The CCNA 200-301 Network Simulator Lite Volume 2 software contains 13 labs cover 

ing ACL topics from Part I in the book. So, make sure to use the NetSim Lite to learn the  

basics of the CLI to get a good start. 

Of course, one reason that you get access to the NetSim Lite is that the publisher hopes  

you will buy the full product. However, even if you do not use the full product, you can  

still learn from the labs that come with NetSim Lite while deciding about what options  

to pursue. 

From the Library of Nick Barnes  
xliii 

The Pearson Network Simulator 

The Config Labs and the Pearson Network Simulator Lite both fill specific needs, and  they both come with the book. However, you need more than those two tools. 

The single best option for lab work to do along with this book is the paid version of the  Pearson Network Simulator. This simulator product simulates Cisco routers and switches  so that you can learn for CCNA certification. But more importantly, it focuses on learn ing for the exam by providing a large number of useful lab exercises. Reader surveys tell  us that those people who use the Simulator along with the book love the learning pro cess and rave about how the book and Simulator work well together. 

Of course, you need to make a decision for yourself and consider all the options.  

Thankfully, you can get a great idea of how the full Simulator product works by using  the Pearson Network Simulator Lite product included with the book. Both have the  same base code, same user interface, and same types of labs. Try the Lite version to  decide if you want to buy the full product.  

Note that the Simulator and the books work on a different release schedule. For a time  in 2020, the Simulator will be the one created for the previous versions of the exams  (ICND1 100-101, ICND2 200-101, and CCNA 200-120). Interestingly, Cisco did not  add a large number of new topics that require CLI skills to the CCNA 200-301 exam as  compared with its predecessor, so the old Simulator covers most of the CCNA 200-301  CLI topics. So, during the interim before the products based on the 200-301 exam come  out, the old Simulator products should be quite useful. 

On a practical note, when you want to do labs when reading a chapter or doing Part  Review, the Simulator organizes the labs to match the book. Just look for the Sort by  Chapter tab in the Simulator’s user interface. However, during the months in 2020 for  which the Simulator is the older edition listing the older exams in the title, you will need  to refer to a PDF that lists those labs versus this book’s organization. You can find that  PDF on the book product page under the Downloads tab here: www.ciscopress.com/ title/9781587147135. 

More Lab Options 

If you decide against using the full Pearson Network Simulator, you still need hands-on  experience. You should plan to use some lab environment to practice as much CLI as  possible. 

First, you can use real Cisco routers and switches. You can buy them, new or used, or  borrow them at work. You can rent them for a fee. If you have the right mix of gear,  you could even do the Config Lab exercises from my blog on that gear or try to re 

create examples from the book. 

Cisco also makes a simulator that works very well as a learning tool: Cisco Packet Tracer.  Cisco now makes Packet Tracer available for free. However, unlike the Pearson Network  Simulator, it does not include lab exercises that direct you as to how to go about learn ing each topic. If interested in more information about Packet Tracer, check out my  series about using Packet Tracer at my blog (https://blog.certskills.com); just search for  “Packet Tracer.” 

From the Library of Nick Barnes  
xliv CCNA 200-301 Official Cert Guide, Volume 2 

Cisco offers a virtualization product that lets you run router and switch operating system  

(OS) images in a virtual environment. This tool, the Virtual Internet Routing Lab (VIRL),  

lets you create a lab topology, start the topology, and connect to real router and switch  

OS images. Check out http://virl.cisco.com for more information. 

You can even rent virtual Cisco router and switch lab pods from Cisco, in an offering  

called Cisco Learning Labs (https://learningnetworkstore.cisco.com/cisco-learning-labs). 

This book does not tell you what option to use, but you should plan on getting some  

hands-on practice somehow. The important thing to know is that most people need to  

practice using the Cisco CLI to be ready to pass these exams. 

**For More Information** 

If you have any comments about the book, submit them via www.ciscopress.com. Just go  

to the website, select **Contact Us**, and type your message. 

Cisco might make changes that affect the CCNA certification from time to time. You  

should always check www.cisco.com/go/ccna for the latest details. 

The *CCNA 200-301 Official Cert Guide*, *Volume 2*, helps you attain CCNA certifica 

tion. This is the CCNA certification book from the only Cisco-authorized publisher. We  

at Cisco Press believe that this book certainly can help you achieve CCNA certification,  

but the real work is up to you\! I trust that your time will be well spent. 

From the Library of Nick Barnes  
**Figure Credits** 

Figure 7-9, screenshot of network connection details © Microsoft, 2019 

Figure 7-10, screenshot(s) reprinted with permission from Apple, Inc. 

Figure 7-11, screenshot of Linux © The Linux Foundation 

Figure 12-16, screenshot of CS Blogfigs 2018 © FileZila 

Figure 13-9, electric outlet © Mike McDonald/Shutterstock 

Figure 15-10, screenshot of Set Up VM with Different CPU/RAM/OS © 2019, Amazon Web  Services, Inc 

Figure 16-13, illustration of man icon © AlexHliv/Shutterstock 

Figure 17-1, illustration of man icon © AlexHliv/Shutterstock 

Figure 17-11, illustration of man icon © AlexHliv/Shutterstock 

Figure 18-9, screenshot of REST GET Request © 2019 Postman, Inc. 

Figure 20-1, screenshot of PTP Grading © 2019 Pearson Education 

Figure 20-2, screenshot of PTP Grading © 2019 Pearson Education 

Figure D-1, ribbon set © petrnutil/123RF 

From the Library of Nick Barnes  
The *CCNA Official Cert Guide, Volume 2* includes the topics that help you build an enter prise network so all devices can communicate with all other devices. Parts I and II of this  book focus on how to secure that enterprise network so that only the appropriate devices  and users can communicate. 

Part I focuses on IP Version 4 (IPv4) access control lists (ACLs). ACLs are IPv4 packet filters  that can be programmed to look at IPv4 packet headers, make choices, and either allow a  packet through or discard the packet. Because you can implement IPv4 ACLs on any router,  a network engineer has a large number of options of where to use ACLs, without adding  additional hardware or software, making ACLs a very flexible and useful tool. 

Chapter 1 begins this part with an introduction to the TCP/IP transport layer protocols TCP  and UDP, along with an introduction to several TCP/IP applications. This chapter provides  the necessary background to understand the ACL chapters and to better prepare you for  upcoming discussions of additional security topics in Part II and IP services topics in Part III. 

Chapters 2 and 3 get into details about ACLs. Chapter 2 discusses ACL basics, avoiding  some of the detail to ensure that you master several key concepts. Chapter 3 then looks at  the much wider array of ACL features to make you ready to take advantage of the power of  ACLs and to be ready to better manage those ACLs. 

From the Library of Nick Barnes  
**Part I** 

**IP Access Control Lists** 

**Chapter 1:** Introduction to TCP/IP Transport and Applications 

**Chapter 2:** Basic IPv4 Access Control Lists 

**Chapter 3:** Advanced IPv4 Access Control Lists 

**Part I Review** 

From the Library of Nick Barnes  
**CHAPTER 1** 

**Introduction to TCP/IP Transport  and Applications** 

**This chapter covers the following exam topics:** 

**1.0 Network Fundamentals** 

1.5 Compare TCP to UDP  

**4.0 IP Services** 

4.3 Explain the role of DHCP and DNS in the network 

The CCNA exam focuses mostly on functions at the lower layers of TCP/IP, which define  how IP networks can send IP packets from host to host using LANs and WANs. This chap ter explains the basics of a few topics that receive less attention on the exams: the TCP/IP  transport layer and the TCP/IP application layer. The functions of these higher layers play a  

big role in real TCP/IP networks. Additionally, many of the security topics in Parts I and II  of this book, and some of the IP services topics in Part III, require you to know the basics  of how the transport and application layers of TCP/IP work. This chapter serves as that  introduction. 

This chapter begins by examining the functions of two transport layer protocols:  

Transmission Control Protocol (TCP) and User Datagram Protocol (UDP). The second major  section of the chapter examines the TCP/IP application layer, including some discussion of  how Domain Name System (DNS) name resolution works. 

**“Do I Know This Already?” Qui z** 

Take the quiz (either here or use the PTP software) if you want to use the score to help you  decide how much time to spend on this chapter. The letter answers are listed at the bottom  of the page following the quiz. Appendix C, found both at the end of the book as well as  on the companion website, includes both the answers and explanations. You can also find  both answers and explanations in the PTP testing software.  

**Table 1-1** “Do I Know This Already?” Foundation Topics Section-to-Question Mapping 

| Foundation Topics Section  TCP/IP Layer 4 Protocols: TCP and UDP  | Questions  1–4 |
| :---- | :---- |
| TCP/IP Applications  | 5–6 |

From the Library of Nick Barnes  
 **1\.** Which of the following header fields identify which TCP/IP application gets data  received by the computer? (Choose two answers.) 

**a.** Ethernet Type 

**b.** SNAP Protocol Type 

**c.** IP Protocol 

**d.** TCP Port Number 

**e.** UDP Port Number 

 **2\.** Which of the following are typical functions of TCP? (Choose four answers.) **a.** Flow control (windowing) 

**b.** Error recovery 

**c.** Multiplexing using port numbers 

**d.** Routing 

**e.** Encryption 

**f.** Ordered data transfer 

 **3\.** Which of the following functions is performed by both TCP and UDP? 

**a.** Windowing 

**b.** Error recovery 

**c.** Multiplexing using port numbers 

**d.** Routing 

**e.** Encryption 

**f.** Ordered data transfer 

 **4\.** What do you call data that includes the Layer 4 protocol header, and data given to  Layer 4 by the upper layers, not including any headers and trailers from Layers 1 to  3? (Choose two answers.) 

**a.** L3PDU 

**b.** Chunk 

**c.** Segment 

**d.** Packet 

**e.** Frame 

**f.** L4PDU 

 **5\.** In the URI http://blog.certskills.com/config-labs, which part identifies the web server? **a.** http 

**b.** blog.certskills.com 

**c.** certskills.com 

**d.** http://blog.certskills.com 

**e.** The file name.html includes the hostname. 

From the Library of Nick Barnes  
6 CCNA 200-301 Official Cert Guide, Volume 2 

 **6\.** Fred opens a web browser and connects to the www.certskills.com website. Which of  the following are typically true about what happens between Fred’s web browser and  

the web server? (Choose two answers.) 

**a.** Messages flowing toward the server use UDP destination port 80\. 

**b.** Messages flowing from the server typically use RTP. 

**c.** Messages flowing to the client typically use a source TCP port number of 80\. 

**d.** Messages flowing to the server typically use TCP. 

**Foundation Topics** 

**TCP/IP Layer 4 Protocols: TCP and UDP** 

The OSI transport layer (Layer 4\) defines several functions, the most important of which are  

error recovery and flow control. Likewise, the TCP/IP transport layer protocols also imple 

ment these same types of features. Note that both the OSI model and the TCP/IP model  

call this layer the transport layer. But as usual, when referring to the TCP/IP model, the  

layer name and number are based on OSI, so any TCP/IP transport layer protocols are con 

sidered Layer 4 protocols. 

The key difference between TCP and UDP is that TCP provides a wide variety of services  

to applications, whereas UDP does not. For example, routers discard packets for many rea 

sons, including bit errors, congestion, and instances in which no correct routes are known.  

As you have read already, most data-link protocols notice errors (a process called *error*  

*detection*) but then discard frames that have errors. TCP provides retransmission (error  

recovery ) and helps to avoid congestion (flow control), whereas UDP does not. As a result,  

many application protocols choose to use TCP. 

However, do not let UDP’s lack of services make you think that UDP is worse than TCP. By  

providing fewer services, UDP needs fewer bytes in its header compared to TCP, resulting  

in fewer bytes of overhead in the network. UDP software does not slow down data transfer  

in cases where TCP can purposefully slow down. Also, some applications, notably today  

Voice over IP (VoIP) and video over IP, do not need error recovery, so they use UDP. So,  

UDP also has an important place in TCP/IP networks today. 

Table 1-2 lists the main features supported by TCP/UDP. Note that only the first item listed  

in the table is supported by UDP, whereas all items in the table are supported by TCP. 

**Table 1-2** TCP/IP Transport Layer Features 

| Function  Multiplexing using ports | Description   Function that allows receiving hosts to choose the correct  application for which the data is destined, based on the port  number |
| :---- | ----- |
|  | Error recovery (reliability) Process of numbering and acknowledging data with Sequence and  Acknowledgment header fields |
| Flow control using   windowing | Process that uses window sizes to protect buffer space and routing  devices from being overloaded with traffic |

From the Library of Nick Barnes  
Chapter 1: Introduction to TCP/IP Transport and Applications 7 

| Function  Connection establishment  and termination | Description  Process used to initialize port numbers and Sequence and  Acknowledgment fields |
| :---- | :---- |
| Ordered data transfer and  data segmentation | Continuous stream of bytes from an upper-layer process that  is “segmented” for transmission and delivered to upper-layer  processes at the receiving device, with the bytes in the same order |

**1** 

Next, this section describes the features of TCP, followed by a brief comparison to UDP. 

**Transmission Control Protocol** 

Each TCP/IP application typically chooses to use either TCP or UDP based on the applica tion’s requirements. For example, TCP provides error recovery, but to do so, it consumes  more bandwidth and uses more processing cycles. UDP does not perform error recovery,  but it takes less bandwidth and uses fewer processing cycles. Regardless of which of these  

two TCP/IP transport layer protocols the application chooses to use, you should understand  the basics of how each of these transport layer protocols works. 

TCP, as defined in Request For Comments (RFC) 793, accomplishes the functions listed in  Table 1-2 through mechanisms at the endpoint computers. TCP relies on IP for end-to-end  delivery of the data, including routing issues. In other words, TCP performs only part of the  functions necessary to deliver the data between applications. Also, the role that it plays is  directed toward providing services for the applications that sit at the endpoint computers.  Regardless of whether two computers are on the same Ethernet, or are separated by the  entire Internet, TCP performs its functions the same way. 

Figure 1-1 shows the fields in the TCP header. Although you don’t need to memorize the  names of the fields or their locations, the rest of this section refers to several of the fields,  so the entire header is included here for reference . 

4 Bytes 

Source Port Destination Port 

Sequence Number 

Acknowledgement Number 

Offset   
Reserved Flag Bits Window Checksum Urgent 

**Figure 1-1** *TCP Header Fields* 

The message created by TCP that begins with the TCP header, followed by any applica tion data, is called a *TCP segment*. Alternatively, the more generic term *Layer 4 PDU*, or  *L4PDU*, can also be used. 

Multiplexing Using TCP Port Numbers 

TCP and UDP both use a concept called *multiplexing*. Therefore, this section begins with  an explanation of multiplexing with TCP and UDP. Afterward, the unique features of TCP  are explored. 

From the Library of Nick Barnes  
8 CCNA 200-301 Official Cert Guide, Volume 2 

Multiplexing by TCP and UDP involves the process of how a computer thinks when receiv ing data. The computer might be running many applications, such as a web browser, an  email package, or an Internet VoIP application (for example, Skype). TCP and UDP multi plexing tells the receiving computer to which application to give the received data. 

Some examples will help make the need for multiplexing obvious. The sample network  consists of two PCs, labeled Hannah and George. Hannah uses an application that she wrote  to send advertisements that appear on George’s screen. The application sends a new ad to  George every 10 seconds. Hannah uses a second application, a wire-transfer application, to  send George some money. Finally, Hannah uses a web browser to access the web server that  runs on George’s PC. The ad application and wire-transfer application are imaginary, just for  this example. The web application works just like it would in real life. 

Figure 1-2 shows the sample network, with George running three applications: 

■ A UDP-based advertisement application 

■ A TCP-based wire-transfer application 

■ A TCP web server application 

I received three packets 

Hannah 

Web Server   
Ad Application   
Wire Application 

George   
from the same source MAC and IP. Which of my applications gets the data in each? 

Eth IP UDP Ad Data Eth 

Eth IP TCP Wire Transfer Data Eth 

Eth IP TCP Web Page Data Eth 

**Figure 1-2** *Hannah Sending Packets to George, with Three Applications* 

George needs to know which application to give the data to, but *all three packets are from  the same Ethernet and IP address*. You might think that George could look at whether the  packet contains a UDP or TCP header, but as you see in the figure, two applications (wire  transfer and web) are using TCP. 

TCP and UDP solve this problem by using a port number field in the TCP or UDP header,  respectively. Each of Hannah’s TCP and UDP segments uses a different *destination port  number* so that George knows which application to give the data to. Figure 1-3 shows an  example. 

Multiplexing relies on a concept called a *socket*. A socket consists of three things: 

■ An IP address 

■ A transport protocol 

■ A port number 

Answers to the “Do I Know This Already?” quiz: 

**1** D, E **2** A, B, C, F **3** C **4** C, F **5** B **6** C, D 

From the Library of Nick Barnes  
Chapter 1: Introduction to TCP/IP Transport and Applications 9 

Hannah 

Port 80 Web Server   
Port 800 Ad Server   
Port 9876 Wire Application 

Eth IP UDP Ad Data Eth Destination Port 800 

Eth IP TCP Wire Transfer Data Eth Destination Port 9876 

Eth IP TCP Web Page Data Eth Destination Port 80 

George   
,·OO ORRN LQ WKH   
**UDP or TCP**  

**1**   
**Destination port** to   
identify the application\! 

**Figure 1-3** *Hannah Sending Packets to George, with Three Applications Using Port  Numbers to Multiplex* 

So, for a web server application on George, the socket would be (10.1.1.2, TCP, port 80\)  because, by default, web servers use the well-known port 80\. When Hannah’s web browser  connects to the web server, Hannah uses a socket as well—possibly one like this: (10.1.1.1,  TCP, 49160). Why 49160? Well, Hannah just needs a port number that is unique on  

Hannah, so Hannah sees that port 49160\. 

The Internet Assigned Numbers Authority (IANA), the same organization that manages IP  address allocation worldwide, subdivides the port number ranges into three main ranges.  The first two ranges reserve numbers that IANA can then allocate to specific application  protocols through an application and review process, with the third category reserving ports  to be dynamically allocated as used for clients, as with the port 49160 example in the previ ous paragraph. The names and ranges of port numbers (as detailed in RFC 6335\) are 

■ **Well Known (System) Ports:** Numbers from 0 to 1023, assigned by IANA, with a stricter  review process to assign new ports than user ports. 

■ **User (Registered) Ports:** Numbers from 1024 to 49151, assigned by IANA with a less  strict process to assign new ports compared to well-known ports. 

■ **Ephemeral (Dynamic, Private) Ports:** Numbers from 49152 to 65535, not assigned and  intended to be dynamically allocated and used temporarily for a client application while  the app is running. 

Figure 1-4 shows an example that uses three ephemeral ports on the user device on the left,  with the server on the right using two well-known ports and one user port. The computers  use three applications at the same time; hence, three socket connections are open. Because  a socket on a single computer should be unique, a connection between two sockets should  identify a unique connection between two computers. This uniqueness means that you can  use multiple applications at the same time, talking to applications running on the same or  different computers. Multiplexing, based on sockets, ensures that the data is delivered to  the correct applications.  

From the Library of Nick Barnes  
10 CCNA 200-301 Official Cert Guide, Volume 2 

User Server 

Ad   
Application **Port 49159** 

Wire   
Application **Port 49153** 

Web   
Browser   
**Port 49152**   
Ad   
Application **Port 800**   
Wire   
Application **Port 9876** 

Web   
Server **Port 80** 

UDP TCP IP Address 10.1.1.1   
UDP TCP 

IP Address 10.1.1.2 

**(10.1.1.1, TCP, 49152\) (10.1.1.2, TCP, 80\)** 

**(10.1.1.1, TCP, 49153\) (10.1.1.2, TCP, 9876\)** 

**(10.1.1.1, UDP, 49159\) (10.1.1.2, UDP, 800\)** 

**Figure 1-4** *Connections Between Sockets* 

Port numbers are a vital part of the socket concept. Servers use well-known ports (or user  ports), whereas clients use dynamic ports. Applications that provide a service, such as FTP,  Telnet, and web servers, open a socket using a well-known port and listen for connection  requests. Because these connection requests from clients are required to include both the  source and destination port numbers, the port numbers used by the servers must be known  beforehand. Therefore, each service uses a specific well-known port number or user port  number. Both well-known and user ports are listed at www.iana.org/assignments/service names-port-numbers/service-names-port-numbers.txt . 

On client machines, where the requests originate, any locally unused port number can be  allocated. The result is that each client on the same host uses a different port number, but  a server uses the same port number for all connections. For example, 100 web browsers on  the same host computer could each connect to a web server, but the web server with 100  clients connected to it would have only one socket and, therefore, only one port number  (port 80, in this case). The server can tell which packets are sent from which of the 100 cli ents by looking at the source port of received TCP segments. The server can send data to  the correct web client (browser) by sending data to that same port number listed as a desti nation port. The combination of source and destination sockets allows all participating hosts  to distinguish between the data’s source and destination. Although the example explains the  concept using 100 TCP connections, the same port-numbering concept applies to UDP ses sions in the same way. 

**NOTE** You can find all RFCs online at www.rfc-editor.org/rfc/rfc*xxxx*.txt, where *xxxx* is  the number of the RFC. If you do not know the number of the RFC, you can try searching  by topic at www.rfc-editor.org. 

Popular TCP/IP Applications 

Throughout your preparation for the CCNA exam, you will come across a variety of  

TCP/IP applications. You should at least be aware of some of the applications that can be  used to help manage and control a network. 

From the Library of Nick Barnes  
Chapter 1: Introduction to TCP/IP Transport and Applications 11 

The World Wide Web (WWW) application exists through web browsers accessing the  

content available on web servers. Although it is often thought of as an end-user application,  **1**   
you can actually use WWW to manage a router or switch. You enable a web server function  in the router or switch and use a browser to access the router or switch. 

The Domain Name System (DNS) allows users to use names to refer to computers, with  DNS being used to find the corresponding IP addresses. DNS also uses a client/server  model, with DNS servers being controlled by networking personnel and DNS client func tions being part of most any device that uses TCP/IP today. The client simply asks the DNS  server to supply the IP address that corresponds to a given name. 

Simple Network Management Protocol (SNMP) is an application layer protocol used spe cifically for network device management. For example, Cisco supplies a large variety of net work management products, many of them in the Cisco Prime network management soft ware product family. They can be used to query, compile, store, and display information  about a network’s operation. To query the network devices, Cisco Prime software mainly  uses SNMP protocols. 

Traditionally, to move files to and from a router or switch, Cisco used Trivial File Transfer  Protocol (TFTP) . TFTP defines a protocol for basic file transfer—hence the word *trivial*.  Alternatively, routers and switches can use File Transfer Protocol (FTP), which is a much  more functional protocol, to transfer files. Both work well for moving files into and out  of Cisco devices. FTP allows many more features, making it a good choice for the general  end-user population. TFTP client and server applications are very simple, making them good  tools as embedded parts of networking devices. 

Some of these applications use TCP, and some use UDP. For example, Simple Mail Transfer  Protocol (SMTP) and Post Office Protocol version 3 (POP3), both used for transferring  mail, require guaranteed delivery, so they use TCP. 

Regardless of which transport layer protocol is used, applications use a well-known port  number so that clients know which port to attempt to connect to. Table 1-3 lists several  popular applications and their well-known port numbers. 

**Table 1-3** Popular Applications and Their Well-Known Port Numbers 

| Port Number 20  |  Protocol TCP  |  Application  FTP data  |
| :---- | :---- | :---- |
| 21  | TCP  | FTP control |
| 22  | TCP  | SSH |
| 23  | TCP  | Telnet |
| 25  | TCP  | SMTP |
| 53  | UDP, TCP1  | DNS |
| 67  | UDP  | DHCP Server |
| 68  | UDP  | DHCP Client |
| 69  | UDP  | TFTP |
| 80  | TCP  | HTTP (WWW) |
| 110  | TCP  | POP3 |

From the Library of Nick Barnes  
12 CCNA 200-301 Official Cert Guide, Volume 2 

| Port Number 161  |  Protocol UDP  |  Application  SNMP |
| :---- | :---- | :---- |
| 443  | TCP  | SSL |
| 514  | UDP  | Syslog |

1 DNS uses both UDP and TCP in different instances. It uses port 53 for both TCP and UDP. 

Connection Establishment and Termination 

TCP connection establishment occurs before any of the other TCP features can begin  their work. Connection establishment refers to the process of initializing Sequence and  Acknowledgment fields and agreeing on the port numbers used. Figure 1-5 shows an exam ple of connection establishment flow. 

Web Browser Web Server 

**SYN**, **DPORT=80**, SPORT=49155 

**SYN**, **ACK**, DPORT=49155, **SPORT=80** 

Port   
49155**Port**   
**ACK**, **DPORT=80**, SPORT=49155   
**80** 

**Figure 1-5** *TCP Connection Establishment* 

This three-way connection establishment flow (also called a three-way handshake) must  complete before data transfer can begin. The connection exists between the two sockets,  although the TCP header has no single socket field. Of the three parts of a socket, the IP  addresses are implied based on the source and destination IP addresses in the IP header.  TCP is implied because a TCP header is in use, as specified by the protocol field value in  the IP header. Therefore, the only parts of the socket that need to be encoded in the TCP  header are the port numbers. 

TCP signals connection establishment using 2 bits inside the flag fields of the TCP header.  Called th e SYN and ACK flags, these bits have a particularly interesting meaning. SYN  means “synchronize the sequence numbers,” which is one necessary component in initializa tion for TCP. 

Figure 1-6 shows TCP connection termination. This four-way termination sequence is  straightforward and uses an additional flag, called the *FIN bit*. (FIN is short for “finished,”  as you might guess.) One interesting note: Before the device on the right sends the third  TCP segment in the sequence, it notifies the application that the connection is coming  down. It then waits on an acknowledgment from the application before sending the third  segment in the figure. Just in case the application takes some time to reply, the PC on  the right sends the second flow in the figure, acknowledging that the other PC wants to  take down the connection. Otherwise, the PC on the left might resend the first segment   repeatedly. 

From the Library of Nick Barnes

PC   
**ACK**, **FIN** 

**ACK**    
**ACK**, **FIN  ACK**   
Chapter 1: Introduction to TCP/IP Transport and Applications 13 

**1** 

PC 

**Figure 1-6** *TCP Connection Termination* 

TCP establishes and terminates connections between the endpoints, whereas UDP does not.  Many protocols operate under these same concepts, so the terms *connection-oriented* and  *connectionless* are used to refer to the general idea of each. More formally, these terms can  be defined as follows : 

■ **Connection-oriented protocol:** A protocol that requires an exchange of messages before  data transfer begins, or that has a required pre-established correlation between two  endpoints. 

■ **Connectionless protocol:** A protocol that does not require an exchange of messages and  that does not require a pre-established correlation between two endpoints. 

Error Recovery and Reliability 

TCP provides for reliable data transfer, which is also called *reliability* or *error recovery*,  depending on what document you read. To accomplish reliability, TCP numbers data bytes  using the Sequence and Acknowledgment fields in the TCP header. TCP achieves reliability  in both directions, using the Sequence Number field of one direction combined with the  Acknowledgment field in the opposite direction. 

Figure 1-7 shows an example of how the TCP Sequence and Acknowledgment fields allow  the PC to send 3000 bytes of data to the server, with the server acknowledging receipt of  the data. The TCP segments in the figure occur in order, from top to bottom. For simplic ity’s sake, all messages happen to have 1000 bytes of data in the data portion of the TCP  segment. The first Sequence number is a nice round number (1000), again for simplicity’s  sake. The top of the figure shows three segments, with each sequence number being 1000  more than the previous, identifying the first of the 1000 bytes in the message. (That is, in  this example, the first segment holds bytes 1000–1999; the second holds bytes 2000–2999;  and the third holds bytes 3000–3999.) 

Web Browser Web Server   
1000 Bytes of Data, Sequence \= **1000** 

1000 Bytes of Data, Sequence \= **2000** 

1000 Bytes of Data, Sequence \= **3000** 

1 

No Data, Acknowledgment \= **4000** 

**Figure 1-7** *TCP Acknowledgment Without Errors*   
Got All 3000 Bytes. Send ACK 

The fourth TCP segment in the figure—the only one flowing back from the server to the  web browser—acknowledges the receipt of all three segments. How? The acknowledgment  

From the Library of Nick Barnes  
14 CCNA 200-301 Official Cert Guide, Volume 2 

value of 4000 means “I received all data with sequence numbers up through one less than  4000, so I am ready to receive your byte 4000 next.” (Note that this convention of acknowl edging by listing the next expected byte, rather than the number of the last byte received, is  called *forward acknowledgment*.) 

This first example does not recover from any errors, however; it simply shows the basics of  how the sending host uses the sequence number field to identify the data, with the receiv ing host using forward acknowledgments to acknowledge the data. The more interesting  discussion revolves around how to use these same tools to do error recovery. TCP uses the  Sequence and Acknowledgment fields so that the receiving host can notice lost data, ask the  sending host to resend, and then acknowledge that the re-sent data arrived. 

Many variations exist for how TCP does error recovery. Figure 1-8 shows just one such  example, with similar details compared to the previous figure. The web browser again sends  three TCP segments, again 1000 bytes each, again with easy-to-remember sequence num bers. However, in this example, the second TCP segment fails to cross the network. 

Web Browser Web Server   
1000 Bytes of Data, Sequence \= **1000** 

1000 Bytes of Data, Sequence \= **2000** 

1 

He Lost Segment with   
SEQ \= **2000**.   
1000 Bytes of Data, Sequence \= **3000** No Data, Acknowledgment \= **2000** 

I Received **1000 – 1999**. I Received **3000 – 3999**. Ask for **2000** Next\! 

Resend it\!2 

I Received **2000 – 2999**.   
Already Have 3000 – 3999\.   
1000 Bytes of Data, Sequence \= **2000** 3 

No Data, Acknowledgment \= **4000** 

**Figure 1-8** *TCP Acknowledgment with Errors*   
Ask for **4000** Next\! 

The figure points out three sets of ideas behind how the two hosts think. First, on the right,  the server realizes that it did not receive all the data. The two received TCP segments con tain bytes numbered 1000–1999 and 3000–3999. Clearly, the server did not receive the  bytes numbered in between. The server then decides to acknowledge all the data up to the  lost data—that is, to send back a segment with the Acknowledgment field equal to 2000\. 

The receipt of an acknowledgment that does not acknowledge all the data sent so far tells  the sending host to resend the data. The PC on the left may wait a few moments to make  sure no other acknowledgments arrive (using a timer called the retransmission timer), but  will soon decide that the server means “I really do need 2000 next—resend it.” The PC on  the left does so, as shown in the fifth of the six TCP segments in the figure. 

Finally, note that the server can acknowledge not only the re-sent data, but any earlier data  that had been received correctly. In this case, the server received the re-sent second TCP seg ment (the data with sequence numbers 2000–2999), but the server had already received the  third TCP segment (the data numbered 3000–3999). The server’s next Acknowledgment field  acknowledges the data in both those segments, with an Acknowledgment field of 4000\. 

From the Library of Nick Barnes  
Chapter 1: Introduction to TCP/IP Transport and Applications 15 

Flow Control Using Windowing 

TCP implements flow control by using a window concept that is applied to the amount of  **1**   
data that can be outstanding and awaiting acknowledgment at any one point in time. The  window concept lets the receiving host tell the sender how much data it can receive right  now, giving the receiving host a way to make the sending host slow down or speed up. The  receiver can slide the window size up and down—called a *sliding window* or *dynamic win dow*—to change how much data the sending host can send. 

The sliding window mechanism makes much more sense with an example. The example,  shown in Figure 1-9, uses the same basic rules as the examples in the previous few figures.  In this case, none of the TCP segments have errors, and the discussion begins one TCP seg ment earlier than in the previous two figures. 

Web Browser Web Server 

ACK=1000   
**Window=3000** 

I Received a New   
1   
**Window: 3000** 

I Must Wait   
SEQ=1000 

SEQ=2000 

SEQ=3000 

Send an ACK \= 4000   
for an ACK2 

ACK=4000   
3   
Grant a New  **Window: 4000** 

I got an ACK\!   
I also got a Larger **Window: 4000** 

4   
**Window=4000** 

**Figure 1-9** *TCP Windowing* 

Begin with the first segment, sent by the server to the PC. The Acknowledgment field  should be familiar by now: it tells the PC that the server expects a segment with sequence  number 1000 next. The new field, the window field, is set to 3000\. Because the segment  flows to the PC, this value tells the PC that the PC can send no more than 3000 bytes over  this connection before receiving an acknowledgment. So, as shown on the left, the PC real izes it can send only 3000 bytes, and it stops sending, waiting on an acknowledgment, after  sending three 1000-byte TCP segments. 

Continuing the example, the server not only acknowledges receiving the data (without  any loss), but the server decides to slide the window size a little higher. Note that second  message flowing right to left in the figure, this time with a window of 4000\. Once the PC  receives this TCP segment, the PC realizes it can send another 4000 bytes (a slightly larger  window than the previous value). 

Note that while the last few figures show examples for the purpose of explaining how the  mechanisms work, the examples might give you the impression that TCP makes the hosts  sit there and wait for acknowledgments a lot. TCP does not want to make the sending host  have to wait to send data. For instance, if an acknowledgment is received before the win dow is exhausted, a new window begins, and the sender continues sending data until the  

From the Library of Nick Barnes  
16 CCNA 200-301 Official Cert Guide, Volume 2 

current w indow is exhausted. Often times, in a network that has few problems, few lost  

segments, and little congestion, the TCP windows stay relatively large with hosts seldom  

waiting to send. 

**User Datagram Protocol** 

UDP provides a service for applications to exchange messages. Unlike TCP, UDP is connec 

tionless and provides no reliability, no windowing, no reordering of the received data, and  

no segmentation of large chunks of data into the right size for transmission. However, UDP  

provides some functions of TCP, such as data transfer and multiplexing using port numbers,  

and it does so with fewer bytes of overhead and less processing required than TCP. 

UDP data transfer differs from TCP data transfer in that no reordering or recovery is  

accomplished. Applications that use UDP are tolerant of the lost data, or they have some  

application mechanism to recover lost data. For example, VoIP uses UDP because if a voice  

packet is lost, by the time the loss could be noticed and the packet retransmitted, too much  

delay would have occurred, and the voice would be unintelligible. Also, DNS requests use  

UDP because the user will retry an operation if the DNS resolution fails. As another exam 

ple, the Network File System (NFS), a remote file system application, performs recovery  

with application layer code, so UDP features are acceptable to NFS. 

Figure 1-10 shows the UDP header format. Most importantly, note that the header includes  

source and destination port fields, for the same purpose as TCP. However, the UDP has  

only 8 bytes, in comparison to the 20-byte TCP header shown in Figure 1-1. UDP needs a  

shorter header than TCP simply because UDP has less work to do. 

4 Bytes 

Source Port Destination Port 

Length Checksum 

**Figure 1-10** *UDP Header* 

**TCP/IP Applications** 

The whole goal of building an enterprise network, or connecting a small home or office net 

work to the Internet, is to use applications such as web browsing, text messaging, email, file  

downloads, voice, and video. This section examines one particular application—web brows 

ing using Hypertext Transfer Protocol (HTTP). 

The World Wide Web (WWW) consists of all the Internet-connected web servers in the  

world, plus all Internet-connected hosts with web browsers. *Web servers*, which consist of  

web server software running on a computer, store information (in the form of *web pages*)  

that might be useful to different people. A *web browser*, which is software installed on an  

end user’s computer, provides the means to connect to a web server and display the web  

pages stored on the web server. 

**NOTE** Although most people use the term *web browser*, or simply *browser*, web brows 

ers are also called *web clients*, because they obtain a service from a web server. 

For this process to work, several specific application layer functions must occur. The user  

must somehow identify the server, the specific web page, and the protocol used to get  

From the Library of Nick Barnes  
Chapter 1: Introduction to TCP/IP Transport and Applications 17 

the data from the server. The client must find the server’s IP address, based on the server’s  

name, typically using DNS. The client must request the web page, which actually consists  **1**   
of multiple separate files, and the server must send the files to the web browser. Finally, for  electronic commerce (e-commerce) applications, the transfer of data, particularly sensitive  financial data, needs to be secure. The following sections address each of these functions. 

**Uniform Resource Identifiers** 

For a browser to display a web page, the browser must identify the server that has the web  page, plus other information that identifies the particular web page. Most web servers have  many web pages. For example, if you use a web browser to browse www.cisco.com and you  click around that web page, you’ll see another web page. Click again, and you’ll see another  web page. In each case, the clicking action identifies the server’s IP address as well as the  specific web page, with the details mostly hidden from you. (These clickable items on a web  page, which in turn bring you to another web page, are called *links*.) 

The browser user can identify a web page when you click something on a web page or when  you enter a Uniform Resource Identifier (URI) in the browser’s address area. Both options— clicking a link and typing a URI—refer to a URI, because when you click a link on a web  page, that link actually refers to a URI. 

**NOTE** Most browsers support some way to view the hidden URI referenced by a link.  In several browsers, hover the mouse pointer over a link, right-click, and select **Properties**.  The pop-up window should display the URI to which the browser would be directed if you  clicked that link. 

In common speech, many people use the terms *web address* or the similar related terms  *Universal Resource Locator* (or Uniform Resource Locator \[URL\]) instead of URI, but URI  is indeed the correct formal term. In fact, URL had been more commonly used than URI for  more than a few years. However, the IETF (the group that defines TCP/IP), along with the  W3C consortium (W3.org, a consortium that develops web standards) has made a concerted  effort to standardize the use of URI as the general term. See RFC 7595 for some commen tary to that effect. 

From a practical perspective, the URIs used to connect to a web server include three key  components, as noted in Figure 1-11. The figure shows the formal names of the URI fields.  More importantly to this discussion, note that the text before the :// identifies the protocol  used to connect to the server, the text between the // and / identifies the server by name,  and the text after the / identifies the web page. 

Formal: URI Scheme   
Authority Path 

Example: Web   
http://www.certskills.com/blog Protocol Server’s Name Web Page   
**Figure 1-11** *Structure of a URI Used to Retrieve a Web Page* 

From the Library of Nick Barnes  
18 CCNA 200-301 Official Cert Guide, Volume 2 

In this case, the protocol is Hypertext Transfer Protocol (HTTP), the hostname is  www.certskills.com, and the name of the web page is blog. 

**Finding the Web Server Using DNS** 

A host can use DNS to discover the IP address that corresponds to a particular hostname.  URIs typically list the name of the server—a name that can be used to dynamically learn the  IP address used by that same server. The web browser cannot send an IP packet to a destina tion name, but it can send a packet to a destination IP address. So, before the browser can  send a packet to the web server, the browser typically needs to resolve the name inside the  URI to that name’s corresponding IP address. 

To pull together several concepts, Figure 1-12 shows the DNS process as initiated by a web  browser, as well as some other related information. From a basic perspective, the user enters  the URI (in this case, http://www.cisco.com/go/learningnetwork), resolves the www.cisco.com  name into the correct IP address, and starts sending packets to the web server. 

1   
The human typed this URI:   
http://www.cisco.com/go/learningnetwork 

**DNS Server 192.31.7.1**   
**Name Resolution Request**   
2   
IP Header UDP Header DNS Request 

Source 64.100.1.1 Dest. **192.31.7.1**   
**Source 49161 Dest. Port 53**   
What is IP address of www.cisco.com? 

**Name Resolution Reply**   
IP Header UDP Header DNS Request 3   
**Client**   
**64.100.1.1** 

Source **192.31.7.1** Dest. 64.100.1.1   
Source 53 Dest. 49161   
IP address is **198.133.219.25** 

**TCP Connection Setup**   
IP Header TCP Header 4 

Source 64.100.1.1   
Dest. **198.133.219.25** 

**www.cisco.com Web Server**   
**198.133.219.25**   
Source 49172   
Dest. Port 80, SYN 

**Figure 1-12** *DNS Resolution and Requesting a Web Page* 

The steps shown in the figure are as follows: 

 **1\.** The user enters the URI, http://www.cisco.com/go/learningnetwork, into the brows er’s address area. 

 **2\.** The client sends a DNS request to the DNS server. Typically, the client learns the  DNS server’s IP address through DHCP. Note that the DNS request uses a UDP head 

er, with a destination port of the DNS well-known port of 53\. (See Table 1-3, earlier  

in this chapter, for a list of popular well-known ports.) 

 **3\.** The DNS server sends a reply, listing IP address 198.133.219.25 as www.cisco.com’s  IP address. Note also that the reply shows a destination IP address of 64.100.1.1, the  

From the Library of Nick Barnes  
Chapter 1: Introduction to TCP/IP Transport and Applications 19 

client’s IP address. It also shows a UDP header, with source port 53; the source port is  

53 because the data is sourced, or sent, by the DNS server.   
**1**   
 **4\.** The client begins the process of establishing a new TCP connection to the web server.  Note that the destination IP address is the just-learned IP address of the web server.  The packet includes a TCP header, because HTTP uses TCP. Also note that the desti nation TCP port is 80, the well-known port for HTTP. Finally, the SYN bit is shown,  as a reminder that the TCP connection establishment process begins with a TCP seg ment with the SYN bit turned on (binary 1). 

The example in Figure 1-12 shows what happens when the client host does not know the IP  address associated with the hostname but the enterprise does know the address. However,  hosts can cache the results of DNS requests so that for a time the client does not need to ask  the DNS to resolve the name. Also, the DNS server can cache the results of previous DNS  requests; for instance, the enterprise DNS server in Figure 1-12 would not normally have  configured information about hostnames in domains outside that enterprise, so that example  relied on the DNS having cached the address associated with hostname www.cisco.com. 

When the local DNS does not know the address associated with a hostname, it needs to ask  for help. Figure 1-13 shows an example with the same client as in Figure 1-12. In this case,  the enterprise DNS acts as a recursive DNS server, sending repeated DNS messages in an  effort to identify the authoritative DNS server .  

2 

Root DNS 

Enterprise 

.com TLD DNS 

Authoritative cisco.com DNS 

3 4 

DNS   
1 

5 

**Figure 1-13** *Recursive DNS Lookup* 

The steps shown in the figure are as follows: 

 **1\.** The client sends a DNS request for www.cisco.com to the DNS server it knows, which  is the enterprise DNS server. 

 **2\.** The (recursive) enterprise DNS server does not know the answer yet, but it does not  reject the client’s DNS request. Instead, it follows a repetitive (recursive) process  

(shown as steps 2, 3, and 4), beginning with the DNS request sent to a root DNS  

server. The root does not supply the address either, but it supplies the IP address of  

another DNS server, one responsible for the .com top-level domain.  

From the Library of Nick Barnes  
20 CCNA 200-301 Official Cert Guide, Volume 2 

 **3\.** The recursive enterprise DNS sends the next DNS request to the DNS server learned at  the previous step—this time the TLD DNS server for the .com domain. This DNS also  does not know the address, but it knows the DNS server that should be the authorita tive DNS server for domain cisco.com, so it supplies that DNS server’s address. 

 **4\.** The enterprise DNS sends another DNS request, to the DNS server whose address was  learned in the previous step, again asking for resolution of the name www.cisco.com.  This DNS server, the authoritative server for cisco.com, supplies the address. 

 **5\.** The enterprise DNS server returns a DNS reply back to the client, supplying the IP  address requested at step 1 . 

**Transferring Files with HTTP** 

After a web client (browser) has created a TCP connection to a web server, the client can  begin requesting the web page from the server. Most often, the protocol used to transfer  the web page is HTTP. The HTTP application layer protocol, defined in RFC 7230, defines  how files can be transferred between two computers. HTTP was specifically created for the  purpose of transferring files between web servers and web clients. 

HTTP defines several commands and responses, with the most frequently used being the  HTTP GET request . To get a file from a web server, the client sends an HTTP GET request  to the server, listing the filename. If the server decides to send the file, the server sends an  HTTP GET response, with a return code of 200 (meaning OK), along with the file’s contents. 

**NOTE** Many return codes exist for HTTP requests. For example, when the server does not  have the requested file, it issues a return code of 404, which means “file not found.” Most  web browsers do not show the specific numeric HTTP return codes, instead displaying a  response such as “page not found” in reaction to receiving a return code of 404\. 

Web pages typically consist of multiple files, called *objects*. Most web pages contain text as  well as several graphical images, animated advertisements, and possibly voice or video. Each  of these components is stored as a different object (file) on the web server. To get them all,  

the web browser gets the first file. This file can (and typically does) include references to  other URIs, so the browser then also requests the other objects. Figure 1-14 shows the gen eral idea, with the browser getting the first file and then two others. 

User Typed: 

www.cisco.com 

HTTP **GET** (/go/ccna) 

HTTP **OK data: /go/ccna** 

HTTP **GET /graphics/logo1.gif** 

HTTP **OK data: logo1.gif** 

HTTP **GET /graphics/ad1.gif** 

HTTP **OK data: ad1.gif**   
http://www.cisco.com/go/ccna 

Web   
Browser   
(Client) 

**Figure 1-14** *Multiple HTTP GET Requests/Responses* 

From the Library of Nick Barnes  
Chapter 1: Introduction to TCP/IP Transport and Applications 21 

In this case, after the web browser gets the first file—the one called “/go/ccna” in the  

URI—the browser reads and interprets that file. Besides containing parts of the web page,  **1**   
the file refers to two other files, so the browser issues two additional HTTP GET requests.  Note that, even though it isn’t shown in the figure, all these commands flow over one (or  possibly more) TCP connection between the client and the server. This means that TCP  would provide error recovery, ensuring that the data was delivered. 

**How the Receiving Host Identifies the Correct Receiving Application** This chapter closes with a discussion of the process by which a host, when receiving any  message over any network, can decide which of its many application programs should pro cess the received data. 

As an example, consider host A shown on the left side of Figure 1-15. The host happens  to have three different web browser windows open, each using a unique TCP port. Host A  also has an email client and a chat window open, both of which use TCP. Both the email and  chat applications use a unique TCP port number on host A as shown in the figure. 

Web Server 

Browser: Browser:  Browser:  Email:  

Chat:    
A 

TCP port 49124 TCP port 49125 TCP port 49126 TCP port 49127 TCP port 49128 

Eth. IP TCP (Dest Port) 

HTTP \+ Data 

**Figure 1-15** *Dilemma: How Host A Chooses the App That Should Receive This Data* 

This chapter has shown several examples of how transport layer protocols use the destina tion port number field in the TCP or UDP header to identify the receiving application. For  instance, if the destination TCP port value in Figure 1-15 is 49124, host A will know that  the data is meant for the first of the three web browser windows. 

Before a receiving host can even examine the TCP or UDP header, and find the destination  port field, it must first process the outer headers in the message. If the incoming message  is an Ethernet frame that encapsulates an IPv4 packet, the headers look like the details in  Figure 1-16. 

0x0800 6 49124   
Web Server 

Ethernet (Type)   
IPv4   
(Protocol)   
TCP   
(Dest Port)   
HTTP   
and Data 

**Figure 1-16** *Three Key Fields with Which to Identify the Next Header* 

The receiving host needs to look at multiple fields, one per header, to identify the next  header or field in the received message. For instance, host A uses an Ethernet NIC to con nect to the network, so the received message is an Ethernet frame. The Ethernet Type field  identifies the type of header that follows the Ethernet header—in this case, with a value of  hex 0800, an IPv4 header. 

From the Library of Nick Barnes  
22 CCNA 200-301 Official Cert Guide, Volume 2 

The IPv4 header has a similar field called the IP Protocol field. The IPv4 Protocol field has a  

standard list of values that identify the next header, with decimal 6 used for TCP and deci 

mal 17 used for UDP. In this case, the value of 6 identifies the TCP header that follows the  

IPv4 header. Once the receiving host realizes a TCP header exists, it can process the destina 

tion port field to determine which local application process should receive the data. 

**Chapter Review** 

One key to doing well on the exams is to perform repetitive spaced review sessions. Review  

this chapter’s material using either the tools in the book or interactive tools for the same  

material found on the book’s companion website. Refer to the “Your Study Plan” element  

for more details. Table 1-4 outlines the key review elements and where you can find them.  

To better track your study progress, record when you completed these activities in the sec 

ond column. 

**Table 1-4** Chapter Review Tracking 

| Review Element  Review key topics  | Review Date(s) |  Resource Used  Book, website |
| :---- | :---- | :---- |
| Review key terms  |  | Book, website |
| Repeat DIKTA questions  |  | Book, PTP |
| Review memory tables  |  | Book, website |

**Review All the Key Topics** 

**Table 1-5** Key Topics for Chapter 1 

| Key Topic ElementTable 1-2  |  Description  Functions of TCP and UDP  | Page Number 6 |
| :---- | ----- | :---- |
| Table 1-3  | Well-known TCP and UDP port numbers  | 11 |
| Figure 1-5  | Example of TCP connection establishment  | 12 |
| List  | Definitions of connection-oriented and connectionless 13 |  |
| Figure 1-12  | DNS name resolution  | 18 |
| Figure 1-16  | Header fields that identify the next header  | 21 |

**Key Terms You Should Know** 

connection establishment, error detection, error recovery, flow control, forward acknowl 

edgment, HTTP, ordered data transfer, port, segment, sliding windows, URI, web server,  

DNS server, recursive DNS server 

From the Library of Nick Barnes  
*This page intentionally left blank*  

From the Library of Nick Barnes  
**CHAPTER 2** 

**Basic IPv4 Access Control Lists** 

**This chapter covers the following exam topics:** 

**5.0 Security Fundamentals** 

5.6 Configure and verify access control lists 

IPv4 access control lists (ACL) give network engineers the ability to program a filter into a  router. Each router, on each interface, for both the inbound and outbound direction, can  enable a different ACL with different rules. Each ACL’s rules tell the router which packets  to discard and which to allow through. 

This chapter discusses the basics of IPv4 ACLs, and in particular, one type of IP ACL: stan dard numbered IP ACLs. Standard numbered ACLs use simple logic, matching on the source  IP address field only, and use a configuration style that references the ACL using a number.  This chapter sets out to help you learn this simpler type of ACL first. The next chapter,  titled, “Advanced IPv4 Access Control Lists,” completes the discussion by describing other  types of IP ACLs. The other types of ACLs use features that build on the concepts you  learn in this chapter, but with more complexity and additional configuration options. 

**“Do I Know This Already?” Quiz** 

 Take the quiz (either here or use the PTP software) if you want to use the score to help you  decide how much time to spend on this chapter. The letter answers are listed at the bottom  of the page following the quiz. Appendix C, found both at the end of the book as well as  on the companion website, includes both the answers and explanations. You can also find  both answers and explanations in the PTP testing software.  

**Table 2-1** “Do I Know This Already?” Foundation Topics Section-to-Question Mapping 

| Foundation Topics Section  IP Access Control List Basics  | Questions  1 |
| :---- | :---- |
| Standard Numbered IPv4 ACLs  | 2–5 |
| Practice Applying Standard IP ACLs  | 6 |

 **1\.** Barney is a host with IP address 10.1.1.1 in subnet 10.1.1.0/24. Which of the fol lowing are things that a standard IP ACL could be configured to do? (Choose two  

answers.) 

**a.** Match the exact source IP address. 

**b.** Match IP addresses 10.1.1.1 through 10.1.1.4 with one **access-list** command  

without matching other IP addresses. 

**c.** Match all IP addresses in Barney’s subnet with one **access-list** command without  

matching other IP addresses. 

**d.** Match only the packet’s destination IP address. 

From the Library of Nick Barnes  
 **2\.** Which of the following answers list a valid number that can be used with standard  numbered IP ACLs? (Choose two answers.) 

**a.** 1987 

**b.** 2187 

**c.** 187 

**d.** 87 

 **3\.** Which of the following wildcard masks is most useful for matching all IP packets in  subnet 10.1.128.0, mask 255.255.255.0? 

**a.** 0.0.0.0 

**b.** 0.0.0.31 

**c.** 0.0.0.240 

**d.** 0.0.0.255 

**e.** 0.0.15.0 

**f.** 0.0.248.255 

 **4\.** Which of the following wildcard masks is most useful for matching all IP packets in  subnet 10.1.128.0, mask 255.255.240.0? 

**a.** 0.0.0.0 

**b.** 0.0.0.31 

**c.** 0.0.0.240 

**d.** 0.0.0.255 

**e.** 0.0.15.255 

**f.** 0.0.248.255 

 **5\.** ACL 1 has three statements, in the following order, with address and wildcard mask  values as follows: 1.0.0.0 0.255.255.255, 1.1.0.0 0.0.255.255, and 1.1.1.0 0.0.0.255.  

If a router tried to match a packet sourced from IP address 1.1.1.1 using this ACL,  

which ACL statement does a router consider the packet to have matched? 

**a.** First 

**b.** Second 

**c.** Third 

**d.** Implied deny at the end of the ACL 

 **6\.** Which of the following **access-list** commands matches all packets sent from hosts in  subnet 172.16.4.0/23? 

**a. access-list 1 permit 172.16.0.5 0.0.255.0** 

**b. access-list 1 permit 172.16.4.0 0.0.1.255** 

**c. access-list 1 permit 172.16.5.0** 

**d. access-list 1 permit 172.16.5.0 0.0.0.127** 

From the Library of Nick Barnes  
26 CCNA 200-301 Official Cert Guide, Volume 2 

**Foundation Topics** 

**IPv4 Access Control List Basics** 

IPv4 access control lists (IP ACL) give network engineers a way to identify different types  

of packets. To do so, the ACL configuration lists values that the router can see in the IP,  

TCP, UDP, and other headers. For example, an ACL can match packets whose source  

IP address is 1.1.1.1, or packets whose destination IP address is some address in subnet  

10.1.1.0/24, or packets with a destination port of TCP port 23 (Telnet). 

IPv4 ACLs perform many functions in Cisco routers, with the most common use as a packet  

filter. Engineers can enable ACLs on a router so that the ACL sits in the forwarding path of  

packets as they pass through the router. After it is enabled, the router considers whether  

each IP packet will either be discarded or allowed to continue as if the ACL did not exist. 

However, ACLs can be used for many other IOS features as well. As an example, ACLs can  

be used to match packets for applying Quality of Service (QoS) features. QoS allows a rout 

er to give some packets better service, and other packets worse service. For example, pack 

ets that hold digitized voice need to have very low delay, so ACLs can match voice packets,  

with QoS logic in turn forwarding voice packets more quickly than data packets. 

This first section introduces IP ACLs as used for packet filtering, focusing on these aspects  

of ACLs: the locations and direction in which to enable ACLs, matching packets by examin 

ing headers, and taking action after a packet has been matched . 

**ACL Location and Direction** 

Cisco routers can apply ACL logic to packets at the point at which the IP packets enter an  

interface, or the point at which they exit an interface. In other words, the ACL becomes  

associated with an interface and for a direction of packet flow (either in or out). That is, the  

ACL can be applied inbound to the router, before the router makes its forwarding (routing)  

decision, or outbound, after the router makes its forwarding decision and has determined  

the exit interface to use. 

The arrows in Figure 2-1 show the locations at which you could filter packets flowing left  

to right in the topology. For example, imagine that you wanted to allow packets sent by  

host A to server S1, but to discard packets sent by host B to server S1. Each arrowed line  

represents a location and direction at which a router could apply an ACL, filtering the pack 

ets sent by host B. 

The four arrowed lines in the figure point out the location and direction for the router  

interfaces used to forward the packet from host B to server S1. In this particular example,  

those interfaces and direction are inbound on R1’s F0/0 interface, outbound on R1’s S0/0/0  

interface, inbound on R2’s S0/0/1 interface, and outbound on R2’s F0/0 interface. If, for  

example, you enabled an ACL on R2’s F0/1 interface, in either direction, that ACL could  

not possibly filter the packet sent from host B to server S1, because R2’s F0/1 interface is  

not part of the route from B to S1. 

Answers to the “Do I Know This Already?” quiz: 

**1** A, C **2** A, D **3** D **4** E **5** A **6** B 

From the Library of Nick Barnes

A B   
Chapter 2: Basic IPv4 Access Control Lists 27 

S1 

F0/0   
R1 R2 S0/0/0 S0/0/1 F0/0 

**2**   
F0/1 

S2 

**Figure 2-1** *Locations to Filter Packets from Hosts A and B Going Toward Server S1* 

In short, to filter a packet, you must enable an ACL on an interface that processes the pack et, in the same direction the packet flows through that interface. 

When enabled, the router then processes every inbound or outbound IP packet using that  ACL. For example, if enabled on R1 for packets inbound on interface F0/0, R1 would com pare every inbound IP packet on F0/0 to the ACL to decide that packet’s fate: to continue  unchanged or to be discarded . 

**Matching Packets** 

When you think about the location and direction for an ACL, you must already be thinking  about what packets you plan to filter (discard), and which ones you want to allow through.  To tell the router those same ideas, you must configure the router with an IP ACL that  matches packets. *Matching packets* refers to how to configure the ACL commands to look  at each packet, listing how to identify which packets should be discarded and which should  be allowed through. 

Each IP ACL consists of one or more configuration commands, with each command listing  details about values to look for inside a packet’s headers. Generally, an ACL command uses  logic like “look for these values in the packet header, and if found, discard the packet.” (The  action could instead be to allow the packet, rather than discard.) Specifically, the ACL looks  for header fields you should already know well, including the source and destination IP  addresses, plus TCP and UDP port numbers. 

For example, consider an example with Figure 2-2, in which you want to allow packets from  host A to server S1, but to discard packets from host B going to that same server. The hosts  all now have IP addresses, and the figure shows pseudocode for an ACL on R2. Figure 2-2  also shows the chosen location to enable the ACL: inbound on R2’s S0/0/1 interface. 

Figure 2-2 shows a two-line ACL in a rectangle at the bottom, with simple matching logic:  both statements just look to match the source IP address in the packet. When enabled, R2  looks at every inbound IP packet on that interface and compares each packet to those two  

ACL commands. Packets sent by host A (source IP address 10.1.1.1) are allowed through,  and those sourced by host B (source IP address 10.1.1.2) are discarded . 

From the Library of Nick Barnes  
28 CCNA 200-301 Official Cert Guide, Volume 2 

S\_IP \= 10.1.1.1 

10.1.1.1 

A 

S1 

S0/0/0   
F0/0   
F0/0 R1 R2   
B 

10.1.1.2   
S0/0/1 

1\) If S\_IP \= 10.1.1.1,    
Allow 

S\_IP \= 10.1.1.2   
2\) If S\_IP \= 10.1.1.2,    
Discard 

**Figure 2-2** *Pseudocode to Demonstrate ACL Command-Matching Logic* 

**Taking Action When a Match Occurs** 

When using IP ACLs to filter packets, only one of two actions can be chosen. The configu ration commands use the keywords **deny** and **permit**, and they mean (respectively) to dis card the packet or to allow it to keep going as if the ACL did not exist. 

This book focuses on using ACLs to filter packets, but IOS uses ACLs for many more fea tures. Those features typically use the same matching logic. However, in other cases, the  **deny** or **permit** keywords imply some other action. 

**Types of IP ACLs** 

Cisco IOS has supported IP ACLs since the early days of Cisco routers. Beginning with  the original standard numbered IP ACLs in the early days of IOS, which could enable the  logic shown earlier around Figure 2-2, Cisco has added many ACL features, including the  following: 

■ Standard numbered ACLs (1–99) 

■ Extended numbered ACLs (100–199) 

■ Additional ACL numbers (1300–1999 standard, 2000–2699 extended) 

■ Named ACLs 

■ Improved editing with sequence numbers 

This chapter focuses solely on standard numbered IP ACLs, while the next chapter discusses  the other three primary categories of IP ACLs. Briefly, IP ACLs will be either numbered or  named in that the configuration identifies the ACL either using a number or a name. ACLs  will also be either standard or extended, with extended ACLs having much more robust  abilities in matching packets. Figure 2-3 summarizes the big ideas related to categories of IP  ACLs . 

From the Library of Nick Barnes

**Standard**   
**Numbered** 

**Extended**   
**Numbered** 

**Numbered**: 

\- ID with Number \- Global Commands   
**Standard**   
**Named** 

**Extended**   
**Named** 

**Named**: 

\- ID with Name \- Subcommands   
Chapter 2: Basic IPv4 Access Control Lists 29 

**Standard**: Matching 

\- Source IP 

**2** 

**Extended**: Matching   
\- Source & Dest. IP 

\- Source & Dest. Port 

\- Others 

**Figure 2-3** *Comparisons of IP ACL Types* 

**Standard Numbered IPv4 ACLs** 

The title of this section serves as a great introduction, if you can decode what Cisco means  by each specific word. This section is about a type of Cisco filter (*ACL*) that matches only  the source IP address of the packet (*standard*), is configured to identify the ACL using  numbers rather than names (*numbered*), and looks at IPv4 packets. 

This section examines the particulars of standard numbered IP ACLs. First, it examines the  idea that one ACL is a list and what logic that list uses. Following that, the text closely looks  at how to match the source IP address field in the packet header, including the syntax of  the commands. This section ends with a complete look at the configuration and verification  commands to implement standard ACLs . 

**List Logic with IP ACLs** 

A single ACL is both a single entity and, at the same time, a list of one or more configura tion commands. As a single entity, the configuration enables the entire ACL on an interface,  in a specific direction, as shown earlier in Figure 2-1. As a list of commands, each command  has different matching logic that the router must apply to each packet when filtering using  that ACL. 

When doing ACL processing, the router processes the packet, compared to the ACL, as  follows: 

ACLs use first-match logic. Once a packet matches one line in the ACL, the router takes  the action listed in that line of the ACL and stops looking further in the ACL. 

To see exactly what that means, consider the example built around Figure 2-4. The figure  shows an example ACL 1 with three lines of pseudocode. This example applies ACL 1 on  R2’s S0/0/1 interface, inbound (the same location as in earlier Figure 2-2). 

From the Library of Nick Barnes  
30 CCNA 200-301 Official Cert Guide, Volume 2 

10.1.1.1 

A 

S0/0/0   
F0/0 S0/0/1   
B R1 R2 

F0/0   
S1 

F0/1 

ACL 1 Pseudocode   
10.1.1.2 

C 

10.3.3.3 

If Source \= 10.1.1.1  If Source \= 10.1.1.x  If Source \= 10.x.x.x    
Permit Deny Permit 

**Figure 2-4** *Backdrop for Discussion of List Process with IP ACLs* 

Consider the first-match ACL logic for a packet sent by host A to server S1. The source IP  address will be 10.1.1.1, and it will be routed so that it enters R2’s S0/0/1 interface, driving  R2’s ACL 1 logic. R2 compares this packet to the ACL, matching the first item in the list  with a permit action. So this packet should be allowed through, as shown in Figure 2-5, on  the left. 

Host A 

S\_IP \= 10.1.1.1   
Host B 

S\_IP \= 10.1.1.2   
Host C 

S\_IP \= 10.3.3.3 

If **Source \= 10.1.1.1** Permit If Source \= 10.1.1.1 Permit If Source \= 10.1.1.1 Permit 

If Source \= 10.1.1.x Deny If Source \= 10.x.x.x Permit   
If **Source \= 10.1.1.x** Deny If Source \= 10.x.x.x Permit   
If Source \= 10.1.1.x Deny 

If **Source \= 10.x.x.x** Permit 

**Legend:** 

S\_IP Source IP Address 

Examined and matched 

Examined and not matched 

**Figure 2-5** *ACL Items Compared for Packets from Hosts A, B, and C in Figure 2-4* 

Next , consider a packet sent by host B, source IP address 10.1.1.2. When the packet enters  R2’s S0/0/1 interface, R2 compares the packet to ACL 1’s first statement and does not make  a match (10.1.1.1 is not equal to 10.1.1.2). R2 then moves to the second statement, which  requires some clarification. The ACL pseudocode, back in Figure 2-4, shows 10.1.1.x, which  is meant to be shorthand that any value can exist in the last octet. Comparing only the first  three octets, R2 decides that this latest packet does have a source IP address that begins  with the first three octets 10.1.1, so R2 considers that to be a match on the second state ment. R2 takes the listed action (deny), discarding the packet. R2 also stops ACL processing  on the packet, ignoring the third line in the ACL. 

Finally, consider a packet sent by host C, again to server S1. The packet has source IP  

address 10.3.3.3, so when it enters R2’s S0/0/1 interface and drives ACL processing on  

R2, R2 looks at the first command in ACL 1\. R2 does not match the first ACL command  (10.1.1.1 in the command is not equal to the packet’s 10.3.3.3). R2 looks at the second com mand, compares the first three octets (10.1.1) to the packet source IP address (10.3.3), and  still finds no match. R2 then looks at the third command. In this case, the wildcard means  ignore the last three octets and just compare the first octet (10), so the packet matches. R2  then takes the listed action (permit), allowing the packet to keep going. 

From the Library of Nick Barnes  
Chapter 2: Basic IPv4 Access Control Lists 31 

This sequence of processing an ACL as a list happens for any type of IOS ACL: IP, other  protocols, standard or extended, named or numbered. 

Finally, if a packet does not match any of the items in the ACL, the packet is discarded. The  reason is that every IP ACL has a *deny all* statement implied at the end of the ACL. It does  

not exist in the configuration, but if a router keeps searching the list, and no match is made  **2**   
by the end of the list, IOS considers the packet to have matched an entry that has a **deny**  action. 

**Matching Logic and Command Syntax** 

Standard numbered IP ACLs use the following global command: 

**`access-list`** `{1-99 | 1300-1999} {permit | deny} matching-parameters` 

Each standard numbered ACL has one or more **access-list** commands with the same num ber, any number from the ranges shown in the preceding line of syntax. (One number is no  better than the other.) IOS refers to each line in an ACL as an Access Control Entry (ACE),  but many engineers just call them ACL statements.  

Besides the ACL number, each **access-list** command also lists the action (**permit** or **deny**),  plus the matching logic. The rest of this section examines how to configure the matching  parameters, which, for standard ACLs, means that you can only match the source IP address  or portions of the source IP address using something called an ACL wildcard mask. 

Matching the Exact IP Address 

To match a specific source IP address, the entire IP address, all you have to do is type that  IP address at the end of the command. For example, the previous example uses pseudocode  for “permit if source \= 10.1.1.1.” The following command configures that logic with correct  syntax using ACL number 1: 

**`access-list 1 permit 10.1.1.1`** 

Matching the exact full IP address is that simple. 

In earlier IOS versions, the syntax included a **host** keyword. Instead of simply typing the  full IP address, you first typed the **host** keyword and then the IP address. Note that in later  IOS versions, if you use the **host** keyword, IOS accepts the command but then removes the   keyword. 

**`access-list 1 permit host 10.1.1.1`** 

Matching a Subset of the Address with Wildcards 

Often , the business goals you want to implement with an ACL do not match a single partic ular IP address, but rather a range of IP addresses. Maybe you want to match all IP address es in a subnet. Maybe you want to match all IP addresses in a range of subnets. Regardless,  you want to check for more than one IP address in a range of addresses. 

IOS allows standard ACLs to match a range of addresses using a tool called a *wildcard  mask*. Note that this is not a subnet mask. The wildcard mask (which this book abbreviates  as *WC mask*) gives the engineer a way to tell IOS to ignore parts of the address when mak ing comparisons, essentially treating those parts as wildcards, as if they already matched. 

From the Library of Nick Barnes  
32 CCNA 200-301 Official Cert Guide, Volume 2 

You can think about WC masks in decimal and in binary, and both have their uses. To  begin, think about WC masks in decimal, using these rules: 

**Decimal 0:** The router must compare this octet as normal. 

**Decimal 255:** The router ignores this octet, considering it to already match. 

Keeping these two rules in mind, consider Figure 2-6, which demonstrates this logic using  three different but popular WC masks: one that tells the router to ignore the last octet, one  that tells the router to ignore the last two octets, and one that tells the router to ignore the  last three octets. 

10 . .. 21 0 10 . .. 21 1 

0 . ..25500   
10 . 1 .. 00 10 . 1 .. 54 

0 . ..2552550 255 \= Ignore   
10 . .. 000 10 . .. 432 

0 . ..255255255 

**Figure 2-6** *Logic for WC Masks 0.0.0.255, 0.0.255.255, and 0.255.255.255* 

All three examples in the boxes of Figure 2-6 show two numbers that are clearly different.  The WC mask causes IOS to compare only some of the octets, while ignoring other octets.  All three examples result in a match, because each wildcard mask tells IOS to ignore some  

octets. The example on the left shows WC mask 0.0.0.255, which tells the router to treat  the last octet as a wildcard, essentially ignoring that octet for the comparison. Similarly,  the middle example shows WC mask 0.0.255.255, which tells the router to ignore the two  octets on the right. The rightmost case shows WC mask 0.255.255.255, telling the router to  ignore the last three octets when comparing values. 

To see the WC mask in action, think back to the earlier example related to Figure 2-4 and  Figure 2-5. The pseudocode ACL in those two figures used logic that can be created using  a WC mask. As a reminder, the logic in the pseudocode ACL in those two figures included  the following: 

**Line 1:** Match and permit all packets with a source address of exactly 10.1.1.1. 

**Line 2:** Match and deny all packets with source addresses with first three octets 10.1.1. 

**Line 3:** Match and permit all addresses with first single octet 10\. 

Figure 2-7 shows the updated version of Figure 2-4, but with the completed, correct syntax,  including the WC masks. In particular, note the use of WC mask 0.0.0.255 in the second  command, telling R2 to ignore the last octet of the number 10.1.1.0, and the WC mask  0.255.255.255 in the third command, telling R2 to ignore the last three octets in the value  10.0.0.0. 

Finally, note that when using a WC mask, the **access-list** command’s loosely defined  

*source* parameter should be a 0 in any octets where the WC mask is a 255\. IOS will specify  a source address to be 0 for the parts that will be ignored, even if nonzero values were  

 configured. 

From the Library of Nick Barnes

10.1.1.1 A   
Chapter 2: Basic IPv4 Access Control Lists 33 S0/0/1   
F0/0 

S0/0/0 

F0/0   
S1 

B R1 R2   
F0/1   
**2**   
10.1.1.2 

C 

10.3.3.3   
ACL 1 

access-list 1 permit 10.1.1.1   
access-list 1 deny 10.1.1.0 0.0.0.255 access-list 1 permit 10.0.0.0 0.255.255.255 

**Figure 2-7** *Syntactically Correct ACL Replaces Pseudocode from Figure 2-4* 

Binary Wildcard Masks 

Wildcard masks, as dotted-decimal number (DDN) values, actually represent a 32-bit binary  number. As a 32-bit number, the WC mask actually directs the router’s logic bit by bit. In  short, a WC mask bit of 0 means the comparison should be done as normal, but a binary 1  means that the bit is a wildcard and can be ignored when comparing the numbers. 

Thankfully, for the purposes of CCNA study, and for most real-world applications, you can  ignore the binary WC mask. Why? Well, we generally want to match a range of addresses  that can be easily identified by a subnet number and mask, whether it be a real subnet, or  a summary route that groups subnets together. If you can describe the range of addresses  with a subnet number and mask, you can find the numbers to use in your ACL with some  simple decimal math, as discussed next . 

**NOTE** If you really want to know the binary mask logic, take the two DDN numbers  the ACL will compare (one from the **access-list** command and the other from the packet  header) and convert both to binary. Then, also convert the WC mask to binary. Compare  the first two binary numbers bit by bit, but also ignore any bits for which the WC mask  happens to list a binary 1, because that tells you to ignore the bit. If all the bits you checked  are equal, it’s a match\! 

Finding the Right Wildcard Mask to Match a Subnet 

In many cases, an ACL needs to match all hosts in a particular subnet. To match a subnet  with an ACL, you can use the following shortcut: 

■ Use the subnet number as the source value in the **access-list** command. 

■ Use a wildcard mask found by subtracting the subnet mask from 255.255.255.255. 

For example, for subnet 172.16.8.0 255.255.252.0, use the subnet number (172.16.8.0) as  the address parameter, and then do the following math to find the wildcard mask: 

 255.255.255.255 

 – 255.255.252.0 

 0\. 0\. 3.255 

Continuing this example, a completed command for this same subnet would be as follows: **`access-list 1 permit 172.16.8.0 0.0.3.255`** 

From the Library of Nick Barnes  
34 CCNA 200-301 Official Cert Guide, Volume 2 

The section “Practice Applying Standard IP ACLs” gives you a chance to practice matching  

subnets when configuring ACLs. 

Matching Any/All Addresses 

In some cases, you will want one ACL command to match any and all packets that reach  

that point in the ACL. First, you have to know the (simple) way to match all packets using  

the **any** keyword. More importantly, you need to think about when to match any and all  

packets. 

First, to match any and all packets with an ACL command, just use the **any** keyword for the  

address. For example, to permit all packets: 

**`access-list 1 permit any`** 

So, when and where should you use such a command? Remember, all Cisco IP ACLs end  

with an implicit **deny any** concept at the end of each ACL. That is, if a router compares a  

packet to the ACL, and the packet matches none of the configured statements, the router  

discards the packet. Want to override that default behavior? Configure a **permit any** at the  

end of the ACL. 

You might also want to explicitly configure a command to deny all traffic (for example,  

**access-list 1 deny any**) at the end of an ACL. Why, when the same logic already sits at the  

end of the ACL anyway? Well, the ACL **show** commands list counters for the number of  

packets matched by each command in the ACL, but there is no counter for that implicit **deny**  

**any** concept at the end of the ACL. So, if you want to see counters for how many packets are  

matched by the **deny any** logic at the end of the ACL, configure an explicit **deny any** . 

**Implementing Standard IP ACLs** 

This chapter has already introduced all the configuration steps in bits and pieces. This sec 

tion summarizes those pieces as a configuration process. The process also refers to the  

**access-list** command, whose generic syntax is repeated here for reference: 

**`access-list`** *`access-list-number {deny | permit} source [source-wildcard]` 

**Step 1\.** Plan the location (router and interface) and direction (in or out) on that interface: 

**A.** Standard ACLs should be placed near to the destination of the packets so that  

they do not unintentionally discard packets that should not be discarded. 

**B.** Because standard ACLs can only match a packet’s source IP address, iden 

tify the source IP addresses of packets as they go in the direction that the  

ACL is examining. 

**Step 2\.** Configure one or more **access-list** global configuration commands to create  

the ACL, keeping the following in mind: 

**A.** The list is searched sequentially, using first-match logic. 

**B.** The default action, if a packet does not match any of the **access-list** com 

mands, is to **deny** (discard) the packet. 

**Step 3\.** Enable the ACL on the chosen router interface, in the correct direction, using  

the **ip access-group** *number* {**in | out**} interface subcommand . 

The rest of this section shows a couple of examples . 

From the Library of Nick Barnes

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsQAAANsCAYAAABcbb60AACAAElEQVR4XuzdBWAU19YH8OS1paVIcdfg7u4SLBDcneIe3N0luAd3hxAI7m7BJQTXICFAAkmAnu+cc+fuTnZDS+V97ese+n5vs3dmZ+7Mzs785+6dWSenGj1BCCGEEEIIh2VXIIQQQgghhCOxKxBCCCGEEMKR2BUIIYQQQgjhSOwKhBBCCCGEcCR2BUIIIYQQQjgSuwIhhBBCCCEciV2BEEIIIYQQjsSuQAghhBBCCEdiVyCEEEIIIYQjsSsQQgghhBDCkdgVCCGEEEII4UjsCoQQQgghhHAkdgVCCCGEEEI4ErsCIYQQQgghHIldgRBCCCGEEI7ErkAIIYQQQghHYlcghBBCCCGEI7ErEEIIIYQQwpHYFQghhBBCCOFI7AqEEEIIIYRwJHYFQgghhBBCOBK7AiGEEEIIIRyJXYEQQgghhBCOxK5ACCGEEEIIR2JXIIQQQgghhCOxKxBCCCGEEMKR2BUIIYQQQgjhSOwKhBBCCCGEcCR2BUIIIYQQQjgSuwIhhBBCCCEciV2BEEIIIYQQjsSuQAghhBBCCEdiVyCEEEIIIRxLdRPbYY7ArkAIIYQQQjgWCcRRFAohhBBCCMchgTiKQiGEEEIIIRyFXYEQQgghhPjjuJW1Bz6aRTHe38XSGmxbRw+THvav+zezKxBCCCGEEH+cBOL/PXYFQgghhBDij9Ph0t1gDpl/Zzg2z5+49zCY62iqJ4V6FsW0/m3sCoQQQgghxO9j29JKQbLjFKV+/8ih8+8KmeaWYQrC1borLUeDU6sxWNZNsYRiY3zb6fwb2RUIIYQQQojfYAq1HBy7WwNx1a7gNOcQOB0OVrbeAafava2BWHdHsLTE2k77vyRSVwmsbwdP5YhRz26zFPOy/H/W7+9kVyCEEEIIIX6DBOJ/FbsCIYQQQgjxZRwSbQOxqe9tta7gvOYqOO19rux6Ak6NB4MzjkOcahBjOv+fgdMSiHH+7hh6+y1WDr4GpwOvwGnYaoWG/V3dOv4udgVCCCGEEMLK3FpqCbE2zMMoEK++YgrETzkQ21+4Zm4xtp1WFPX4aqZpWKZjU0cOxEsUDsRB4DR0lULDzEFdtypHtax/uq7/EHYFQgghhBCOSAe8qMoj3YmBAqPpeQ2b5xyIr4IzhmGiAvEQsAZK83Q083MdmGneBts6RcUyrnkaVHc9T7pgzrhojkJv/8UKB2I0dLXCgdhYbgubZYzkXxCK7QqEEEIIIRyRBGIJxEIIIYQQIgoc+DzAuVp35tRylLqVWqRAawqP1bqpQLzvOXPa9cwuEDtbQiaqgc9bj7cGTAqwlvkaf38NSwDGadQfAM4tRjG+tZo5IFMfZppv/yXKoWAVir8YiD3UNJqPVBoMVPPgvtASiIUQQggh/iVMgdY2hHLIxDA8bA3jAEkXyjUYpJjDJvmKQGxppSUrLuA0MZAuPatwUKb5GnQdzP2MbZnr0HgoOO0JBGesJxu8glutLfP9vYGYng9YYr1rxt4X4Nx0pLX+PM0o1qeF7bB/ILsCIYQQQoh/O3PApPDHwU4zwqV5XL6V2mFl/wv0EpzaTVJ+byDmQOqhbsVGfB5igMXxtt1TahrzjMR4DTOGu1O96W9dbtS/01Ss3ytw2vdSmb5XBWLqSsF+ZyDG5XGastM6PboAr+tMsP6Qh2k9Wl5nqo+eju178E9iVyCEEEII8W+nQ5wEYgnExK5ACCGEEOLfzjZwcrjrruh+sebxKVDOOaLso0CMgbPtJIUvYjNN67cCsQ6wdXorPg/U7dnMgdhcR+OCPmcMl8T688o2dP07GoGYQjuxBGIPq68JxHrZ6fnUneB84BXjC/C6zogciC0hmOphqos71VkCsRBCCCHEP5ApSNbsBU4j1tkEQnOAo5BrDcTOHDSDTC3EfzAQ6xbi7V8IxJbxjVBMIZRM9AGnRoOM4Bl1IKY6an+4hVgvvxGIVcg2AnE3mxZiSxBGDQeD0wRvHGe2Qi3MvD49DP/AcGxXIIQQQgjxb8cBzgh0Q1aqQEjBkHjM/UIgVl0mOGTue/UXdJnopVAgpvG23VcsgVjXtQcHYOfdzxi3UC8+DU5VuyiW1lkKsioQU8uwJRDP+AsC8RRf+0Bs2yVC12fBichdNuoPNOpnkEAshBBCCPEPIIFYArGZXYEQQgghxL8dBTP6Kp/C6+hNRtALUvouVgHPPP6vBWLd5/jPBOKoukyYp9l0uLrwjuzFQLzCT13oRyiU6pBLOk2x9h/mLhP7VP0toZSm+RcEYkuXCWOauj5Lzxn9rI35NxlmzFMCsRBCCCHEP4QRzoxA7DR6Y+RA3G+RCnDm1/xaIP69LcQ6GH6pD3GtXmqedoH4hULj0r2LdQA1t/pyIPa0CcTUQqyDq/Y7A3GkPsRBUQRiWp9dlWXnVGiPFIht1pHde/I3sysQQgghhPhXswnEIzcYYfi10ndh5NCmWz/nHFKoG8D+IHBuO4FZw541GEYOxE9tAjHproIv2f4QnPm2a0aXCT1Psyb0Yxu6hRgtvwDObl0Vc8gl7Sdz/exuu2Y7nuWnm4N//aeb6Rf6PHdZA/FB1GW6Go/HJR7WLhP04yIciIMU+qEQPY5m9578zewKhBBCCCH+1SQQSyC2YVcghBBCCPGvZwpnFDbXXAGnFReVun1VENTj0t/uHuDcZgJz2nQTnOYdBbsuEPq2Yu5fCMTmQGgETTZ8DTh7YxAeskKx3MqM5k2M8T13Kltuc5cFZwqq9HrzspCaPdSFbRtuKq3HG8FVB2waD5/3W6JQILbtMqGXm+uJ47ccbZ3ewlMY5HuraViCbg/rfZK7zACnzbfBedpexVJHY3xeT7bvx9/MrkAIIYQQ4t/OEgyNsEktm9UMOgiax+V77Bp9Zt06G3d3MF6v+/DaBGJuySU7KRAPNs3PmKe7oSq+3q2TdfqWMKwDLIVND9XKS2jekX4Qw6ir+TmN42bQ84sU4G0CMbWQfykQ6/Gr0nIjN6rnr8ybxqflsfRxptebxrFcXBjF+/J3sSsQQgghhPi344vGTMFMhz4LU2CzhEIj0JnDoGUYBWED32nhjPWiMt/H4FSvP1gCs11ANU3DMh9T/XTddICONG8ax7RM+nXm6dm2ZHNdMdR6zFEOvwFnurCOLiYktl0mjGWmUM7BnH8MxDRfZq6TeVm+MK4EYiGEEEKIv5kEYgnEZnYFQgghhBAOh4KjwTbE6XAYaTgxhWf9Gv13I/r54m1KB08VQM0h0Txvy7SNoBhlgDTP1xjHEpBtl8VUVwtjPlGFVu67vNo0f5s62i2/MV6keZrpeerxfm3cfwi7AiGEEEIIEQWbgKdbZG0DrA6d+q4L+oI2u+n9f9OBt6cReumxp7qwz918FwqbQOwI7AqEEEIIIcSvsA3ExBR4ORCbul/oLgaa5bW6LKrXm4fbsKuPDR5HT8N2Xka5OdzbtjxbXm8a38x2fv8GdgVCCCGEEOJXGKHUNnDq4RwiJRD/T7ErEEIIIYQQVpbAqvvQ6vCouxYYj7pPryVMmrofRBpf/63Dpy4zvy6q1+vxbetofq359aa6R5qW6XUW5uHGOHbTs6lLpNfb1ul/jF2BEEIIIYSjM7eEYvhz1heT6WBIv3Cnf6mtZi/1gxT6l++4Zdg6vjO1ENOv1+kf0rC9wK66fo1uUaZpGffvJfRDG/oexeb7FFvqa9RJ3+XCXBdC45jvo6zrZg7DZrxc1jo68+tpWjRdXU8at7vCf0exDv+X2BUIIYQQQjg6u+4GGAwxFBKnLtPAaf4xcNp6R9n+CJy874LTkrNKw4EqNOoW45o4jYUnwWnVZYXGqUXzUQHUWYdsI2A791sMTqsvgJPPA2X7Q3DaHABOsw4o5lZaHbo5pBs/3NF5uvolvS13FPppaPolvGVnlYaDVb2M5bPMXwfk/ktwPD+c932F5k+/UDd5B3NuOETV1RLojeW0XYf/S+wKhBBCCCEcnQRiCcRCCCGEEA7NJnByGYVgciAInPe+sPw0M/1tfu7UbARY70+MavXG4Hwbh9E4L1TArNXLOpzCJP2Yx5RdCk+fpvVSOfBK/cDHltuKTZcM1a0C6zf7EHM+8Bqc9tFrjfnxtPBxP00HtRipXm+5j7GHum/y2qvMmX7G2bw8XA983PdCob/7epm6UFCYjmId/i+xKxBCCCGEcHQc8gzUD3fWfkug5LBKwVC3EFOL76qL4LTjMXNuNlK9TregciC+Yw3OPjoQm1pYGwwEpz3PFRpndyA4jdumeMwFpwFLwWn0JiVS6ywFW3w+bS/WjUKvEYIpEG+9q9Cv5q3E+u18ojQfBaqvsaEm1mX9dVOwp9c/5zK28hI4+T6yBHQ1Dv7dZYYigVgIIYQQ4l+IwyIFT9RyDDhzi6upxXTMZhVqib7AjrpKkNoYgM2BmJ6bAzG3EPdWQVh3V2iJIXV/kELz2P4AnBoNUaj1WF+MZ77YDevGF/O1GGUEaQPVddxWNQ/Cr8HxGgxSuMwI0mTQCnzNKxWEie9TDLrTTYHbQ3Wz0F1CaPp0QrD6iqJDve06/F9iVyCEEEII4egkEEsgFkIIIYRwaBTy9EVqI9aAM3WXMPrQOq/wixRMLYHQHHB/TyCmfrx0kR11pSC6z6/vY2XRKXDq5WWqmwrqzhjEidOwVao7hw60a66ooKsDvaU+5joity7K0nPqdbqP8Yi1KoTrwKynQd06kPMe6jdtCuDNhhnLakzXdl3+L7ArEEIIIYRwdBTsqnZR6EI3ahWmC9uIp68KjJa7UFDgNB4traWmQEytyL8WiGkcCp4dPZUdj8DpoNFSrMMxXShHQZzo/sc6sE/ajoHdVL9peyIHdr5wzoTubEH3D9aBmO4gwfN4qbSbbFoWYgRivT423VInBzpAt51oMz7N438sGNsVCCGEEEI4OgqBFHrJqA0q+Om7LCw9z8GQbnXGtzuzhE56HfmdgVhf4KZbZOmOEX0XR+6iwIGcQugLVR/+oQzD8HXGOEYL8YqLxt0fTK275kCs7yzh1klZ7he5hXjQcuvdIyzLh2r3UXYHquXQ66M53VXDmKZ5XpHWp2n+tsP+CewKhBBCCCEcnQRia/0lEAshhBBCOCAKkvqnkNtM5HsDO+0JVCicDlpm7UJA3Q6qdFb9gBH/1LE5TP5WH2JmCuAUiinoVu6kDFutAq82/6iarw7QrcepYGq5qA5D7eBV1sDs1lmhoE0sy2cYtlYFYR2o6fZxrUZbu1TwsvVSP/ZBdPimrhbEsqw6gBvh2PLT0Dosm4bbru+/m12BEEIIIYSjs4Q3Cqfd1YVtFDT5bgzPVV9dfZ9e+kGMhSfAyfue0ny4KSQagXiLTSCuSYHYNE7jIeA00UfpOQ+cOk0Bp17zlXXXjBZcaiVG471V32H9Wqqf1zHrcK4fBvj1NxSu33Fw2nZfobtScGA1GIHdEojJHrT8vLLwJDjj6+jCQr64kIbRj4X0nK9YLrwzwr07XfBnBHv6m1vA6Y4Y9It6OixHsc7/TnYFQgghhBCOTgc3hkGOQuO6q4rNL9VZWkz3PFP4l+pMYdf4YQ6nvdS6HBjlL9U5Nx8JTgeDrQ7R42tFd0/Y8VDhn142BVAKo1Q//dPQxgV5fDcIuh0b3RmDp2G0MNMPc5jrR9NqOVLVi3DoNd1FwryshOpE3TZ0C7RlWkYwbj9ZhfpusxRaHw0HWcf7J15wZ1cghBBCCOHoJBBLIBZCCCGEcGzm0EZ/e6huCoR+yGK90Y2BHH6jgubm20rjoZEDJ4XftVfAyee+svGmKqNbnxEKkU2HWQOpDp3a9kfgNPMgONUfqHAY7mmEYaNuNA3dp3ngMms3C3KI6vfK8lPTzo2pS4cO0+ZQ3UsZ761+8ln/UAiF851PwWnxKeZMfZZpPuZl1LefI3X6YCj2BKehq5RxOD36OWsdmCUQCyGEEEL8jzAHRnOLLPXZpWCsfwmubn919wVLiykO13eOqK5+UU6VdWPONC3zXSgI97elRyNAU6g08J0sOIAa09GtrJECLU3HGE51oIvzavZS6vZTQVf/0p1lWWgZ9XKa6sIX9nWz3lWiTj81P32RnbuxTJZAb7xeX6RHy8Z176vU668uONTT57pHsb7/TnYFQgghhBDCBrVqUpijUGcTIJltOLUNrObX2JRbpmsSaX49oxhmUzfTcHUrOPP09bSMv7ksimWLtDzm+el6aHp+X6q/MVwHfH1yoMezq/8/gF2BEEIIIYSwYQ5+kQNopHBoGxbtyqMYZhcodWjU5T2jGGZTN9NwCcR/gF2BEEIIIYSIgg5+Pa1h0ILKTMyvi9Q14QvjR8UcYCMFXJvpW+bzpen/xuuirKfpue14UbF9jXm+v2c6fxe7AiGEEEII8dexDYgccqMYz3b8SOVfEYh/9fVf4Y++jl9rE3xtp2P7/J/GrkAIIYQQQghHYlcghBBCCCGEI7ErEEIIIYQQwpHYFQghhBBCCOFI7AqEEEIIIYRwJHYFQgghhBBCOBK7AiGEEEIIIRyJXYEQQgghhBCOxK5ACCGEEEIIR2JXIIQQQgghhCOxKxBCCCGEEMKR2BUIIYQQQgjhSOwKhBBCCCGEcCR2BUIIIYQQQjgSuwIhhBBCCCEciV2BEEIIIYQQjsSuQAghhBBCCEdiVyCEEEIIIYQjsSsQQgghhBDCkdgVCCGEEEII4UjsCoQQQgghhHAkdgVCCCGEEEI4ErsCIYQQQgghHIldgRBCCCGEEI7ErkAIIYQQQghHYlcghBBCCCGEI7ErEEIIIYQQwpE41fAAIYQQQgghHJZTte4ghBBCCCGEw+o8YzX840w32JZHMbyT7bDfYppulxlrop6PafqWcaIazxaPswo6TVfshv9eX5znGoNt+V/BNN0o5t9pRlTLZa5PFK//rfWnh//aOF/DPJ2/anq2Zf9o+n0wsw6nbZm3Z7vXmV//a8+jmo/tMNvhXxonKr9nXPNr/irG5930/LfZT+PrhkU1/I+wnabt9H/tuS3js/21n52vGedr0L5Ssx32Vb5mXXwFu+VZE0WZPf25sv9s2T7/A8zz/4q6RKbn/7Xby1f62u3D1h95zd/N7njyW+vSPPxL43w9+21qtU19ohj2pXlHNf6f9d+Y5l/lD9RNAnFU8zFNXwJxZBKI/8lsd8aRt5GoD9q2r/+151HNx3aY7fAvjROV3zOu+TV/FQnE/Pi1n52vGedrSCD+MvP8v6Iuken5f+328pW+dvuw9Ude83ezO5781ro0D//SOF/PfptabVOfKIZ9ad5Rjf9n/Tem+Vf5A3Vz+uWXz/DLL78Y6G8zXf572L8e8H9RUcOsr6V/5ml9Nnx5Hjj8s2n8z7Z1tn3+BfQ6ZvMa+s92XDufsY6Krpf5edT1j0yvkK+tr/5nKbNftUoUr/0akda7af1a2W4fts+jGlcP/8Tvk2Y3Ps3PoOthrY/N+DZ1+5p1bceyNtVKizTMZnuw/Wc3LVu229MvVMfP1mXUnwHz9OhRs51eFL7qn92GYfh/+PdrdbVdlqhFsY2Y0XT+LNtpGr70T2+Pv/ffl6ZvVx/Df+ef7XLafo6tw6yfuV/7fP86Y5YWtsP/1PQjT9ryz2482/EjlX+KYv/ypfoYZZbPb2S2/yK9Jgp6ntbjRVTD1XFN7Svtx4mE5vlrbMexnV9U++M/wHbfbr8f/zLbOtg+j6rev8+Xl9G2bnbzRmBiNyyqukWxvvW/Lz3/oii2uT/Nkn3slzUqtusoKub3OdL4X1V/0/oy1oll/dB/duNTqR5X/Z95GA340uc1Kk4hISEQGhLKIiIiICzsA7x//56FhLyD0NBQLAtj4Tjswwfr8Peh7/H5e3xdOKNh9PowekS0QX36hDscg+Vv4wNDz9nHj4rx90esB6G6RfaOH/X8P36MYOFctzAeRvXVwsPDGdWR0GvU8qh6RtBw47WExgkNNc0vVM1L14fqp5eT0Lzfvw816vUOIrDu4WFUr4+R0HolND49hocrNA2qz3uDmmcoz5dQXSLVx7J81vKohysfjOXV49P83r1T69A6virXdeHXGc/p9WEfwow6UR1pHdL7r9A4nz59jBxwccOzLDsvt9o2yEfLo1qfehw9vnU7sKLX6PeP6sPbkHl+uIMLD//A6D21TENPM8L6PvzazlBT06XHX3Ben7G+9NpPFuH43MJ4H/Xng7YF8/rXnx29nevhun6R5xl13cyfE728Xz5g/zXAYPv8jzCvT9v52FLLauwHyGfTI/qotzVTgPhz//R8rVRdvrx+I2/rUY9jS49Py/K1r/lvMtefHvXn6x3uw2h/p9c/rQP6fOr9eQTtb/EzEYb7TaL2r9b9GaH926ePtB+nadAyq8+QFmYe33iup2f9bBufP/w78v4TP4umz7/tclmYlg1M5fr9No/3MTwMIugYhsItPrAwOmYY+1FN76sZf57xGGFBx1E6nhpovxtCxxA1LuN9MR1X3+H0cF8QgfsOLCPhH0KxPu8twt6r6Vrrhe/RO9xva8b+3nbfb3s8MD//LTS+Xt96efX+k5fPdDykZaPjQwS974hey8fScEXv/8zPP9Bxl46DdOw01q2ePg3n4+0n+qx/4uNN6HvrcZymRTlFH/9pewmlcYzl1uOZ9780Xaoj0cd/6/7Y+lpdzmVGHqL58zFE739527OKVG6mx6HlMB1/1HrTj1HQ40Uan96LMMbrg+pK75PxflmO1cZn1JIjEG0r5rxGx0da35He7xC13fJ78YGO99bx3+lxaJ3wesHp4XE/PIxyU7hlHM0yPcv8aL1/iDQ/yh+WdW6Mq98fqqvt9hi5ruozo/dHVCfbcSKNr5fJcnz+9fGJU7lSZaBDy9bs0qF9MGvCWChdsjQrVLAg1HavDuuWLGQXTxyE+nXqQp0atVijOvVh2qQJcOfyOdatcxdo2qAFDOozkD24eR1u+vnBrYsXLW5fuQy3Ll1id65cgQB8vHnBj107dxaunDwJx3x3sqJFikKOHDlRDpYzZw7IlSsPuFetztYt8YKAqxdg6phBrEm96lC6RFEoUUzZvmkdXDxzErp3aMdGDRkM3uvXwOKZnmz57KmwZt4MWLtgJps9dgi4V3aFvHnysjyoSd26sHLRPPb65RM4f+IATJs4gl06fxJ69ewBufPkY17z5sEBX29YsWwtO3X0POzbcQjWrtjMdu04CIsXrYMF81ezAf2GQmXXslxnUrhgAVy+XFAofz5WungRKJA3D+TLm5fRsNy5c0H+vLlZwXwkL5cRGk5y5srJGtWuBeVLlsBp5WW9OnbG5coDuWk6NJ8CBaFo0aIwoG9fVrVSRahT1Q0GdO3GerVrCyOxvFjRYqxJgybwc4s20NIwsE9/uH75Ajx9+pTRzoiCyj7vzWy/9xbYt2Uz7N64jm1fvRx8Vi3Dv9ezs4cOwLnDB8HviHLxxDE4c3AfXD55gl06dgyO+G6DAd06staNGsCDuwHw+vUr9ib4Fe44wmDu9Mls3LAhcP3sGdyGTrNLx07AxWNH4dLxY+xdcBAfqMNpJ4s+487pF3xOj4R26m/f4E4+/BN7+OgVLF65DzZ5n2THTgfg810wbc46NmbSUhg3eTk+LmONGrfgbVa/X+XKloEh/frAnYB7rJ9HGyhRtAic3ruNfcCdQDh6GfiM0c4q0gEdd6h0ELx+05/5332AOy7cqdHBlOAOIiz0LT+qv7HuIXRwpb/V84gPtKwhCv5Nzz/ijpF8wp0EP+LBinwmESScURmdNOod86ePWrjVJxz+Ufls0MMobLwJCsIDOx3cVdD4QAf5d28YPaf34zPu/Ak9vx9wCwKu3WS3rl0Df//bEPDkJXtw6xHWP9wacDjk/PF/NA068LzDaZI372l5bNc/HQCUsLAICH71Er1iIcGvcTnovQhlYbSueVx1gv2R1h0FP+MA8vj+HRwvhMsYnRxymAi34IBmBIwIep2xjShYh/e4c6eDwnsKE+oApwNZKNblPe3Y6aQXvXvzFrfntxDy5g17E/Qa3rwKglCsN6H38vXzJ9C6cQOWK2cuaNO0ATy6e5vR9rl9wzoYNc6Tbbt4EzadvgRT5y5lsxashDkL14DXkvVs0bKtsMXnAFy6es/i7MXbsPvgWbZ47V6YMHsDzFu1i81FI6ethikLNrELl27Dkyev4NWrt+xOwH04uPsQ7N62hx09fB5uXLmD64XWDW6HEZ94ndFJL6Flj6AT+OBgRp8ddQKiqJASYQnUESHBcGXbJtg8ti+b49EaxrZtCAOa1mIeDdyhbfXK0KyaK2tf2w0aVS4DbWtXYZ3ru0M7fGxcpSyr7VoCapQtBuWLFmBlChcA12IFoU6l0qyxW1loX7cSVCtZiPlO6wrretWH0TWLsu1D60LAzplwzXsy8xnTDgZVLw5jmlRie2cPgHy4/86VM6eSK7dln0/y0DEA5cRhGh8PbJ7r/X9ePLbkoeF4jCX0/tPxon3LFmyepye4uVaAIX16szGDB0PF8hVg9mRP1qpJU6hRrTrMmjyZNWvYmM2eOpU1rtsA6teqA6MGD2L1atbG3FADjxt9WN06daBiOVcYOqA/a92sBVSuUBH69OjBPDp2hCoVq0D7Nm1Yf48eeLysBKVKlmIj8XjeqF59KFeqHPu5eUt8TQecTy3mVrEy9OrWHX5u2pRVqVAZypYqDb09urFmDeuDa5kyWFaW9ereDetc35J/ShYrgZlhGMzE9aBMhhkTJ8H0iRPZtAkTYMq4ceA5diybPGYMTBw1CiaMHMnGDB0Kfbt1g75du7IeWLeenTpBz85Kjw4duKx7+3YWXdq2hS64rKxdG37esXVL1qBmTShVojjkw2M+ofezdMmS4Fq6FGtcpzaUxef6+J8TM1PRIkUwVxRktatVxnVSDnLj+0xoG6I8UCB/flYK80a1yuWheJFCLCeOQ7krPw4jlIlKYF6oVrEiK1aIxjFtWzlpG8wDBXFepHzp0lCmVMlI2yhNLw/Ok9A2WCBffihZvDgrhtM2b68q86ltltC2X7RQYXxfirP8+Nqoxtfy5M6NGbYAlChelOXHTJUby8zjm1GZBGIJxBKIJRBLIJZALIFYArEEYgnEjh2IOzZtBpsWzGO1qlSGArnzQorkKVm2zNlh1bzpMH3UEFa2RBnI4JIJKpRyZZNxg9y9eTUUL1yE5ctVAAoWKIkb/0jmf+E8XMOAch2DLrl65jS7duaMgsNuGMPIlRMn4OyBA7Bt9SoW56d48MMP38P33yvRokWDWLHiQNGCxdi6pXNhwRTcIEf0ZROH9oGalctC2lSpWJE8uWHH2mWwcM5MduPCOQwJobB/20a2CgPxkqljYdHkEWzehCEwoHNLSIevJWlSpoYF0yZj+B3Fdm5dhwc1f7hw/jhr0bgxBuVFsGntBuazchm8DQyAMQP6sE0bfGDR/KWwAg8WZLHXahgyaCLMmL6E9ew+EIoWwI07Z1aWJFF8XL4Y8FPsmMwldXJInSwxJEsUjyVOgBLGg6Q4HkmRNCG4pEoGieLHYTFixoSY7EdWvngxyJIuLU+DtMedwvff/wAxY8RmiRIlgpQpU0KbVs1ZlvQuUKVUCWjg5sa6tsDyhg1xnolZ+ZLlwL1KDahcsRrr2r4zXPY7B4+fPGI6EPuuXsNWz54JW5cugT2bNrB9mzbCpsULYQ2Wk93rVsOpvXvgzD7l1J5dGBR3wXkMysTv6BE44rMF2jWox+q7VYK7Af4QFPSCvQ56yYF44ohBrHvrVrgNnQS/Q0fYxSNH8fEQnD94mD30v8lfWX3GcMc+Gd0WdABCIW/paxbqphEOwcGhsHHzMZg5bwc7eOwmLFu5ByZNXcU69xwHPfpNh2Fjl7DW7QZBOhcXSJQgIUuVIjVUqlAWTmDQJwtmTID48ePDqF7t2dvX7/irn6DngSz4dRAHNPNXbhEYfIIxyJDLGBKDgzH0YAhmb9/ABwqXb+nvtxBOITjkLZcxHCfs/Tv+6pXw100UTI0TgggKxhgadECmQPzJeCQqnIWp4IZ+4fARZsUB2BqQfzGCNL2OBL98jsHsrSUg8lfQWJ+Qt68ZhUgVCtX49LWZ/6XLcOnkWXb1vB9cv3UXbj1+yR7dfoL1DeMcrPz5QExdNIIxZJK3PG3rV/G0PVCoCsV1SsIxhL0KDITXL16xd3hS9h6X7z11NaATkg8UinH9hlmpUKy8CX4Dt25cwWBNX/9iWRiFYLWOCa0jek8iwg0crukrRRW2P3yg95G+uqevDtU86WtEXT9a1+Td22D25jUGYAyGKsS/xDo/h3f4GIr1Jp8/f4Qz+30hW6bMLF7cOHgS3AqCcNnI44dPYOzIIbDq+CW25pgfjJgwC8ZN8WJjPefD6ElzYMKUBWzStOWw9yCejPo/ZucuBMCRE1dhq+8xNn2RNwyeuBJmLfVhk+ZvgV6jFsHaLUeZf8BTuH//OTx69JKdPnUetq3fBju37WWH9p2F53hiZPnKmk5ieR3SyexH3p74xME4gaGTtF+4m40h/D0+RsAvOIx8eOgP17asgM3DurBJLWrCmGZVYVBdV9asTAFoXCofVCuUk9Uvng/c8meDSvmzsmblCkOd4nnArWB2Vil/FiiXOxNUKZSNZU6RGPJmTAV5XJKzOiVzwuB6pWBuuwpsa89y4Jo6LvQr5cIWN8sFl7zaQ/DJ1ezh1vHgN6s79CudjV1cNhRcc6aDaN9HY99H+wGiR/8BYuE+nySOHxcSxP0JEsaLw2LGiA4//oDD8ZFEx31/jB9/hJ9ixWQ//hidjwfffhuNfY/TLFYgP2RPn5793Kgh9OveFbK4ZGAjMLTWxONC4bwF2Nihg6FI/kJQOF9BNn7EcMiaKSuG1opsUK9ekCp5KgyildjgPr0gU9r0kC1LFtYPQ2LOLNmgWMHCrGubn6Fs8ZKQIV1G1hqPVzWruEGyxMlYOQx9rfGYmypFGpY1Q2Zo3aQZhvSyLFnSFBj6qmFwrMGyZczMx7i61d1ZZQy/SRIlgfRYB9K2eRMoVaQoJEmclCWMnwCDdA0olDc/S5MyLQbR1tCzSxfmgWG2O4b0ru3bsy7t2kEnCuutWlm0ad4cg30z1qJRI8xUblAdQz6pUq4sVME6VK1Y3lABqpQvDxWxjFTAkF8Bl7FciRKsTLFiqCiULVaEuaRKDdkypMdskpJF/yE6vsf43sdSkiVKDJnTp4PUyZOx7777DreRaPDdt9+xBLh9pEmRDJdLiRUjBr7v38J//vMfRtsS5Y4USRKyJJg1on33LXz7jULjUB6LidsQSRw/Hm9nNA+ip0PzJdF/oO0tOsTBaRLaFp2dne188803jOr4/XfR4Jv/fMOcnJz+/43u1xO6/tyWJcEVmjp1WnCr5MYmDOoPPTu0gRqVK7K0qV0w+JaGBVM92fRRw/GNbw5JcWMlpYuVgRkTJsJRX1/mjwe0G+fPYfilEIxh+PQpuHH2LAdhZoRjahXWzuzfDxtXLGOxYsfBN+AHSyCmD29sLCtauDirU6s27MYz/NljBzHP4X0x1A6FmhhCSDU8+3QrXQY6Y7Aj44YPgxsXz8MBDMPk/OF9GMqWwbKZE9hKtGDycGjZsA7LhDuFBTNngtes6axhvbrgd+oo3L11ja1evhwunD4Jjx/dY7u3rMYTCE+YN2UkK1scd37T58PShavY8iVroUvnXjBq+CRWq2Z9yJMjC268iVm8OLF5h/VjDCV+3NiQPk0KSJIgLqMAnCpFEtyYkzJ6TVp8pCBNYseKhWKgmMy1VHH84CSHZLhhk44tf+aTipgxYrHECRNBsmTJLGegOTJmBFf84NXFEyPSGT/cLfEsPkniJKxS+YpQtUp1qFypGuvWvhNcwvfz0eNHLIyCFIaIo747me+atbBuwRxYM3cm816xFDYtmg9blnixQz7ecHT7Fji9f4+yZycG5F1w7jC1HB+AixiI925YBy1q12DuZUvBw3t3IAgP6oQCMQWxcUMGsgn9B8LlY8fg8vGTyolT/Hjx6Al27eRp+PD2HYZf6stJ/b8iLMFIo76NoSEf2If3EXDu7E3wnOHNdh+8Aj6+Z2DxUl/We8B06NLLE8ZMWMbGTV4C+fLmgcT4OSKJEiSCgnnzwdrF89i5U8fx/UoE7q4l2NP71NoVDm+Dg9jzp484FFn7qX3mVtr3IcHs1csguOXvD+/eUOsftQpT+LWiMEwtxFxOQqlPKLVghjAdrMLDlI9h1HfygyWQUhj+xCGOyoxyI/hy+OVATKh1zqalmIbjMApxL589Zm/fvOHAa+2TSX3VMMC9C2bUyqn61KnATSdUT+7fg9v+tw0BcPPBM7h55xG7ffkWhL8zWtF1K/Gf+EevD8PlffEulIXge2HbN1X1FVT92alfZdCLZxj0X7IQfM+4tZvWM7XY08kHrV9jeSnUUhC2tP7iunyN2+292/6M+lVyGOYgrFrjdQi2+ED936gfnArG1MKuW6TpPVX9VI1AjNt26FtrIH77BgVTMH7FKBRTq7ZuYaYW4lnjRnBoIKnwIDlj+GDL9K9fvQIrjhyHpYdOs1EYhsdOngsTpnopGIJHT5wDU2YuZguXboRzlwLg0o1H7Mx5f9h/+AIsW+XLFq3aCTMwFC9cs5uNmb0Rpi72gYuXbrPHT4PgydOXcDvgATu87yjs2rwTDuw+yi6evs7rQ7fw0smj6lus+vfz9QLh1AJsBGDeJnH7xfeGfKZH/ByFPbuv3LkCgUe94eGeZSzwwFp4tnct+K+eyQ5P7Q8r+rSCWR0bsNHNa0CvmuVhSNNqrEPVkioMY/gldUvmhfK5M0PlAllY+TyZoHi2NFAhX0bmUa0gHJjUCE4bhrplgcJJf4IyaeOxVnkSw9YOheH1kWXKqbUQsKwPHBjdim3tVR2al84K0TAIEQqwMTDU6AAc76fYHGJSYpghdPyIFROPJdG/Zz/QMZT2/z/GYNGifYeBB8MwhhdCx4a4P/0EfTu2Z9kzZ4FOrX+GLq3bsEzpM8CQ3j2hFu77Sc5s2WH88KGQJ3tO5orH2uH9+mIozsyKFSwKQ/v0wRCXhVUsW5ZDcjIMn6Qghs4BHh5QlL6pRAVz54OfGzeE0kWLs8wZs0ATPOZWLleeUZh1x+NSo1p1WCYMxFmxjg1q1WCVy5eDnFlzcqsvca9UATLiMTxFshTMvUoVKFWoMKTHjEOSJ00KNatWhqL58rGUyVNCgnjxobpbRVYkXwHo3K4thuHOzDYQd27blgNxh59/ZhSI27ZoYWmRpkBcG08gamAYJm4Yft3KlgP3ChVYNSpzdeVQzMG4VCkoX7KkJRCXxjBcpnhxKFOkMPsxegzInM4FMrqkZZlQIswFlIvUic13GJpTQmoMvSRF4sQQP15cS+D89ttv8P2NDWlxGEmWFI9RGJK/w9BLaDgF1MQJ4hsS4AlWHIiDuYJQKKbp6PBI04r3UyxLA14szC60PX2HIZvQuNFwu/oJX0tiRMdtlrY5gw7EenrfYJiOhsvwLYZh8o2zCth2ofW/qUnd2vghSszix02Ab2AVmDthDJs9bjSecaQHl7RpWL48BXAHOhoWTZvC2jRuBEUKFoEcuBGSWePHwYJpM+Donr3M388Pbvqdh2unTzMKvPSVtg7EV05hQD53jh/JpRPH4fyhQ7Bi/lwWM2YsDsTfRfue/fDDj5AkSUro2LYj69S+LdSuUQNO7NvO1i+YBtOG94fx/Xuytg0bwKAunWBQ927MJQWehWPA9Rwxgt2+dI5bSNZ7TWNr502FJdPGwtzxI1jVsiWhUc1qcOb4EbZ+7TooW6oo+J05xuZOmw7XcRr7fTaxgGsXoYl7JZg/YRjLmSkTNKheH+Z5erH1a7yhdcu2UA8/vKRwkQKQP2dWSJsqGYuLGxe1EP9IoZjOwjAUJ0+SANJjqCXUOkyhWEuZLDEkxTLdQpwIN37aMSbAYE1cy5TED0ZS/GAkYK0aNeUPDa1XkhR3CKlTpgKPDu1YzowZoEiunByCGe6M2jduguEuCatcvgpUrewOVSpXZ706dcUTgtPw5MkzRoGGLqpb7zWPbVm8CHyWL4P9WzazbXSis3AeeC9bxA5t28JdJs4dPMDOHz4EZ/bt5G4OymHYt2kttKpTi9Wp7AqPH9zDA/1rFhz0AuhCxVH9+7IhXbviCdZZuH5auXLyFFw9dQb/PscuHzsBLx4+tLQIc+ixCUl0oNWB+P37MHj06DksXLKLrd9yHPYfuQqr1+xlw0cvhBbthsPoCYvZ2g27oKZ7LXzPkjJqccicKSv0xW2P3PK/D7UqFoJsGV3YSdxmqaVQX9QQ+Pg+txjrA7466EdwSy+hFuE7dwLg+nV/xhd+hFhbKN+HUKuwaiXmluLQN9x1wtLFglqKTYGYAjBfUESP3EpsdKHg0BuuulRgoNBdIrgbhM1zs7D3H+Dh3ZvwBoMi0a2/1hZio8sE1pNQlw6+MMX4ypvCTeDDB3DP/y67e/s+3HyCJwEBd5UrARCGwdUahm3fvd/3j6bxEU+KXoW8ZxEf6UKyL4dtCsVBLwLhDZ6IkXe4DYZyC7FiWb/GBVCqpVdffGa0BuP6Cwx8zh7ge6mCsG4hpq4V1i4a3DpsXLzKF80Y09eB1XoRpwrG1E2Cuk2EYkgnIbi9ULeJkNdB7A0G4vfvXltOuF4FPoQWdarjweonljNrRti+fAFv9+TqkxfgtfMwDB83i42dOBcmYhAej0GYjBg3EwPyPJg9byXbvusoXPd/ChevP2QUiH12noQ5CzazVRsPw6K1u2HuSl82GgPx5r0n4eGjl+xpYBC3DF+94s/279wPB/cchlNH/diTe09tPhsqCFtOIOnbFWoRppZgguvqE66HT/jZYbjsERyELyq3L8CHm6cg9PJB5doRCL1yGN5fP8mCTvvC9U1z4ei84cx3ch9Y2b89LO79M5vWoSF0rVkW6pTIzaoXzg71SuSB0jnSs5LZ00GtYtmhd51ibG6H8nBuWiPw6VWKLWxZEAZWywMdiqRjdbImgoX1c8D9FR7sw+2jcG1OF7i7YQI7P6Mj1MyfAd+rGIyOFTExECfGfT9JguEmbmwKH2o4NbDEwWOKRq17FHrpmMoNTdSyZ3zzqsu/+TYaVChZgvXq3BEypk2Hx4aOrEmdBpAzc3YYPXQwK4yBtkj+/DC4T29WKHd+qF7ZDbq2a8MyuWSAmhhCe3Sg7gGdMMRlggoYVPt2pW4E3SBDmvRQtWIl/Lszc0mZhr8Sb9usKcuTLSe4pHaB5o3qsyoYIjOnywTVcJqkRf0GkAZfkz9Xbta8QX0MkCWxzIVVLFcG3Cq4QhbcB5MUyVNxC3elMqVZ0sRJIEH8hFDDrTIrU7wYpE2dBtKnS8dquFWCbhh8dQtxDwzE3Tp04JZhogOxuYXYLhBXrQrurhVYFQzD1EJcCU8MCIVgCvH6ObUQl8UArANxeVQW61S6SEH2IwZKavCi95zkyZ4VsmVKj6GVvhmgYPsdj6NbhLPj8Zy+IdaBlMIpvefffPMflixxIsiULg2G6viMXuuMIfQ7DL6EAm2KpIkgdbIk7KeYMXk7Mbfs0qP+xiE5nlTHj/MTN+oRCrd6HB4fQ25snEZszDVEtyrbhlI9vq7HfygYO9uP918hgVgCsQRi6z8JxBKIJRBLIJZALIFYArEDBuKUSVJAujQZWJnipWDD/Omwcs40liRhIgxZ8cG1VFlGX28c2rYB3yzq51KK+9nUqloDBnTxYD4b1kG7Nh1h1fzFjAKx/wU/uH7mDLt84gRcoW4T588x6k9s7i5BKBQtmjOHRaevdUx9iH/4ITpkzJQb2v/cjgVcvgh5cuTCjbQj27NlLaye7Qlek8awSfih7de+HYwd0I8N7dkD7gXcgs6tWrP1SxdinfbjMq1jvmuXwMrZk8HLcxSbMKQPhv4GsHD6JHbq+GHuNlK4UFHWv/8AmD5tMuzZtlnZtBLmjR8KSzFUE+p3TV87DOszgm1auw3atW5nuSguf55ckD5tKkiWKD6L85Pq/xsfd2wkNn0VgRtyBgzDhPr18FdjcX9iNDw27QANKRLTV2WJrIG4dAl8TWJISeEZNa/XCDfQbyEmbrwkWfLkkDJ5Cujeth1LnyIlVMAPpO5D3K1lK2haq5alC0C1StWgepUaUKViNTawZx+4ePYcPH0ayMLpa/TwCAy/3mwzBuItixbCZgy/5KC3N2xbvRw2Ll7AjuzwgZO7d8H5I4eUQ3sxEO+GS8ePs2unz8Ae3KYaVq7E6lSuCI8xML3BIEKomwEFtN7tWrO5EydwF5zrFIrRNQzFN875wY2z5xltg3evXLb06bQNxDoI6T6e70OpH3EI7PA9w7yW7oGDx2/A1q1H2fSZ66Fzt/EwYvQCtm37QZgweiyeHGZiCeNTF5c0UAvrTi6cvQhjBna3dEHxmjScL5LT83vx9BF/xa1vV0UHfQqMug8wfT3/7k0wXLlylQW/NrpFUCgzghkHZxPuKmF8Ra67TIRRX9QP6nZO1G3CHMLo+adwutBOdZvgv42AzP2DKRAbdBDmr/HRnRuXud+q7gKhLxgzd5ng5TAFYr6tEX3dzeHmIwQ+egABGPbJndv34MbTV3DH/w67e/0OhL8N0R2I6R0zvXu//x+9mm7t9YYuqEP0d1RBWP+j0EXdDt4GvWIhb4ON7gqqLy9fPGjqQ6y6QlA3CIMOxcZFcw8fPIbApw+46wQzThws7wevN9X3mr031qHxnC+oM11U955vFUWPBiMgh+A2Q969povpgiwB8v6tq1CjUhn+WpRULFkQbl71g8A3oWzWsrXQb9A4GDl2Jhs9fhaMmzQXxhhGTZgN4ybPhznzV7LDxy7C9ZtPwO/iHXby7E1YvXYPTJm2hq3fdgyWbzwAMxZvY9OXbIMr/vfgVdA79vRZENy7/xTD8E127pQfXL5wAwL8H7JQPGnhe5wagTgigrqz/GLZfviCT+ryw9sxevsaPr3FfcSbF8rLRxD+2B/CH91Q7l1BF+H9rVPK9WPw4fopDMlnWMjlI/DixHY4v2IyOzxvGKwf0gF2TOzNlg5sD54d6kO7KsVZw1L5oGyujNCgZC5Wr3gOmNvVHY7N6cnOze8GpybWhW09SjJvDMW7R9SEs9ObsCXNcoFXvRywtW0x9uLwcvBf2AfubpzAzs3tAXlSJeLgS6jBhPoBx8F9P6FGEeo2oQPvj9HpepEfLV9pU59OHX7Z99Rd4ntLlwn62j0aHmfjxYnFOrZsDm2bNoM0eIwgE0YMg4qly0Ch/AXY6EEDIFfWHHzhHRnapy9kTZ8VGtSoyXp16ogn/lmhab16rHnDRpAxQ2aoWdWNUTeMLBmzQNUKlVjb5s3weJiBL9wibRo3hozpMkLG9BlY/Zo1MDiWh9Sp0rAGtetAHQyc2TNlZ7myZsdjXH3InzsvS4P7XvdKlcC9YkVGXT5SJ08NdWtUY6WKFYbkSZND/HgJWJ3qVaFksSKQLq2LksYF3KtUsnSZoEAcVR/idi1bMttA3LJxEw7g1cq7siplMATj+qtYujSrgKG8suk5dZcoXxzDcEmlbIniHIjLcj/iopAUAyed6FBfcELvcUYMvHlyZGNx48Tla4h0X97vo32PuSIR5MqcmSWIG4/7Hes+uhRIf8BtIEOalCx18qTGCZJCoZSeRzckT0z5Iy58S90vjG4YHFyNLhKxuAEvMSSIF4/9+MOP8ANO5z84DtGhmIIyoS4UNH8dgG3DqS7XXSj+X0Jx5nQZoANuiMR7uRceuCvgmUcelhDDcD4MbdvWLGHrF86FfDlyQ+5suVjtqjXBa+Y0OL3Hh+XFM8R8eYvCgimz2K2LfnCVWod1izC1ENPFdaepP7FRTi3HRgvxhWNH4ezBA+A1axb7nvpK0cUDhujRY0DW7HmhQmlXNnr4MNixaS2e3SRhXTt2gBP7fWH5zMls5ezp4DV5IuxYs4LdvOwHd29cx2B7jBXIXQCO7PbBEKYc27UVtq+cD0umjmELJ4+BWWOHwZSRg5nX1PEwA0NXgTwF2KjBg+H6lUsYDiuwy2eOw5Zlc2H7Ki/mu3Yp9GjfBnJnz82WLFoNs2csgtEjxrPMGenigVS4ISZh1Omd+oTFxmBM6G9qKY6P4Ze4YCimPj9xfqIz/9i48VMrAfUHVmeM1EKcCs/kEsWj1uI4UK44fYgSWAJxwxq1ORDHihmLJU+WHNKkSg29O3VlmV1cwA0/mPXwbJm0b9IEmtSsa7mowb2SO7hXrg5uhmH9B8GlcxSInzFq/aK+uXs3bmJ7NmzE9b4afFavYJuWesHmJYtgx6rl7IiPN77fe+DcoX3swtHD+Hwf322CHT8Cu9ashCbVq7F61SpB4LMn8BrDCHn7hu4aEQG92rRgo/v2gZvnz4M/1oncxDB88zzd5eQSo79vnjsPIRRm0JcCsb6/ZAi3EkeA36U7zHPGZvDZ4wc7955ni5f4woABM2Hw8Lls+47DcOL4OShZtACLhzugRHhSmRd3zmQDboP7d2/Fk5SkrEUdd3j14gXQxVokGOv08vkzy/ypLtwSRv0kEd0lgkNQCPUrDoOHDx/xvSYt93HkwERhyhyuIgct1SKpL9oyAhv1/aXQG06sgZdDLYde4+4SFIo/RVj61FIIoZbS2zcvMbqPI5cbfYy5JZmDsaL6yFrvkkD1idzi9xmCngXCg9v32Z2Hz+DmE5z+DX929+ZtCHvz9i8NxHS/29CIj+xLYVjPjkMYteIaAdZyT23dh9V43/R9RFVIw2WjkxsTvf4olL5+FQSvXz5nXMbTUMPVdOmR5kHbgGpJt9xnm1vVI1P3AtZ/q3u3WraPUArVIZY+9HduXYHBfTqrgy6as3YlPH0TBofxRJJ09+gLw8dO5yBMxmAAHj95HoydOIeNHj8TPxOLYcWqzezytQdw8coDOO13ix0+fgUmT1kLEyavZJt3nYSVmw/B1EWb2XrfI/D4+Wt4+fode/z0JQQEPICr1/zZNeR/6z4EPnnBaN3pkxh1j2IViPX29fkjnqTRxaIY+slH+gYinPrG07chofDx1VMMxDfhQ8Bp5eZxeHfeF+1ib8/uhOATW+HNCR8WemEfPD+0Ae7tWs52T+sLW0d3gZ1TerMFPVrA9E4NoHXFoqx+ybxQvVB2cC+YmU1v5QonMQg/3D6LPfCZCmenNYKVbQuxjV2KQf9KWWB8kyJsTLWM0Dh7YqiTMRF7vMcLTo9tCnfWjWVLPGpB8nixLS3AsXH/T62+dJwgdBEdNaBQSx/D4ycFoBjRf2Tmi9O1b019iL//gRqdKGhFZ1lcUkP3tq05mJJ82bLD6AEDoCRd6Y9qVa0Ow3Gfmyd7LtawNl170xgypcvMKCDWxf12ujTpGT13r1QF/07HmtSpB/Vr1ACXlC7MvXIlbhlOkjApK1mkKN95gfr2klw4D+pTTH2PSfIkyaBxnbrcT5ekTJYKcmTJCg1r1mQUkHNmysahlFSvVBEyYuBOlDAxq1cTQzEdI5MkZxSOG9aqAaWpVRalTpma797Qo0sn1h0DPgVi3UJM6KI720CsL6prhcfPOlWrQbVy5VmVctRCXBYqGSrgsbZSyVLgiiGYVChRMlIfYtdSJTkYq4vrikGRvPkgk0savpCO0PsXH0OwbgHOnjkDpMdgS98CK98a24RqwaUL8TKkTc19yUk0PBmi4Ez9xgn1E1ahly6Wi8fDuP8xPSLuJ4yhNx6efBG6kFOHbxLjxxj4+kS4XcZi8WLjdGPHtlyUp0OvbvGlUK/DMaFW7aiCsZ7/f5ycmTOWEdvx/hL9OnWABRNGs7ru7pAudRrcmLOwYgUKw9alC6DLzz8zulIyYzr62qM827RkIczxHG/ZQDNnzAZly1YG3/UbGV9Qh4GXukkQuqiOW/Asz09zq92FY8cMR7jLxKwpU9j3eIZBH1I6ayXR8UOdJVsecCtXkdGHatHsudCiYTOWJFEy6NC2DRz29WZenmNhzrjRcPX8afbiyUOYMWosXL94gXnNmged27aHF49usevnT8CBbetwmeewxdPGwrwJw2Hq8P5s49L5sHjODDh94gRr2qQReM2eA54Tx7LqVarA5bOHYRuGauKzciFsXTYfz1rrsrYt2sPqZRtg2aK1LFuWzJCZvrIwujwkTBiPW3x1l4notFP70SpJItVlQgfiWDGt3SsIXVSXMH48SGJwLVUCg3AivhMFaVG/IW+4sWPGZskoEOP73bVDJ5bFJT0Uxw9dq7p1WPPataA1ntXrFuLqGILporqqVWuxYQMGw2U/Pwh8Hsj4hu54AN64YAHbvHAh7Fi5DA5t81YwANOt17YsWcD2blgLJ/f44vt+mPkdOYCh+BAGYQrDx+DqqZM4/kqoizsy0rxuDXge+ARevnrBgoNfcVDrgWGYrJ4/H26cPQe3/C6x28at/ujWfuT2pcvg73cBngTcYpZuE19At9kKw0D89OlrNnP+dli8cj8cOHKFrVq3H0PCcug/eCabPm0JrFq7A8qXc2V00WI8PKlMjScdpG+PTnD16g0oXzgXK5wrF1z3Owdh4fQDBXRj+vfw8sVTtR4jjNtDUYD6aPhkfE0cocIQ3Zj88ZNnltfTOPS1/8cICtHWr5QpaCq6Jc1KBTRrizSHNv1DFbrMoLua6IB2/95tuHf3hiXA6Ts0WMbn9fj5V3+lyjx9CpNvXwfB47sP2W26wOrxc7gfEKDcugMfOBDTDy6oH134M/9o/rReQjBEEtu6mcezrat1+b68PNaLI634rgca324ugm9NR549fKjCnW5hp1Z4Dnvqoke6AJK9V8KpO0UoXUSpbrsXSl0kXr+Gd0GaurNE0LNn7OWTR/DhHX0Dod6vqTPHQ/5yxaD7Gm+2++INePI4EE/a9rORIyfDuIlzLQF4gud8fj4G/2aT5oLnzCWwc88R5n/nBfhdvgdn/QLY9t1nYOhwLxg/aTXbtOME33pt0cZ9zOfwWbjs/xBu3n/GAp4E4vuNfz96wm48fAwBD57ziSnR61j/UAuFfnUSEs4+fgiBz2Hmi1Jp+46wdJmIeHoLg/BZCD65hT3eMR8ebp4Cz3ctYK+PrIeX+1dC0LGtLMRvL7u/ewXbNqYr7MEgfHTBKLYBw3GfuhUwDBdmzcrmh4YlcsPs1m7s8KSWcGezJzw/uIw92jkL/Ff3h7UdS7AlLQvC4laFIU/qhCwuhtD4eIxrWSIHCzywBI6PbAS3N0xktXKnhjQJ40KaJPGZCx4LYsakwKvQnSQoJNOV/UQFH9WSSHQItl6kro6r+q4AjFuNlbhxYmPAzAijBvVn1StWwpBaHEYPGshyZc2Jx4RKMLB7d+aSIi14dOkMP2MoJqmSpILObdpA09r1WXqXjHxhWg0MxcQldTpo0bgJ1KpUlWXOmBmqurpC8wYNWCbMGuUwMPbEIEpSJEsJObNlw2NpPVYwT37OAHWqubPqOM1kiVNAjsxZWFMMyyULFIFkiZKzcqVUy2t6PM4RutCOuiwUzV+QJU2clLtMuLmWZ6UKF+EuHT0xDBMPzEq2LcTmQEzoLhO6hZgCMWUqNwzChEIwtQhXKlWauZbCMEy3TTNQFwkOw9Rtoji1DpOifKcJkjVDer5LBN0NilAIphZh3UKbFMMoXUTvkjIF4+4T+J7qwErfVlMLbtrkyVmcWLGxXN3dQUuWiL5lTsziYUimVmb9enVh3rd4XIvPqNGNAjJ1xSAxcX7x48SxbFsJja4csehOGDGontYL6cz0XSqiY9ZTXSRUi7JdWHWiIKxCMbEd9peQQCyBWAJx1CQQ2wRAgwRi8/J9eXlsw7AEYgnEEoglEEsg/gcH4olD+8GQ7l1YnLgYpJIkh3ZNW7LhfXvBYCzPnysPK5QrL7hXdoNV8+ewHrhB1HCrDpkyZGPVq7jDrq1b4DIGX0K3WKOL5uhew0RfWEf9iIm6H/FpuIhhmFw4ehT8Dh+C6ZMmsm/pYjr8gGrUhaJg4aJQo2IVFid2HP6aY1C3HmzkgAEYCBPDgJ492VEMxatmToGAq5fZm5cvOIAsnz+b3b15E1YsXob1pr6x1eDE/t0QcOUC7N2ymq1bMA1WzJoIXpNHsbnjh4LnsD6QIX16ljBVeshXrCysXb6YVS5bFjw6d8RQfIzt2rgKNiycB08f3GZ9unvA4L7DYO2qzYxua5M+VUqIE+cnliRxPEiAOzx9X0EKxGZ0EUXqlEn41jqEArA5ENOHIw5ukPo2ba4li0NSDNHpUidnzeo34A36J1xvJHly/OCkSQud6AJF5JIiFbgWKwa1cSdHOuKHujbuZJImTsyoDzHdh7gahmEyZugIuISB+PnzFyw8gi6seg/7t2xhu9atgw2LvGDdvFls16ZNWLYGvHFdEdWH2HoRnd9R6kt82HKf6vOHD+L6WwC1K5Rntaq4wovnTzE0PmPBr+k+xOHQ/efmzHPEULh1wY+DMAmgx8uX4c4V5e7VK3D38hUso/KLEIYh4tcCEAVGurjo7ZsPbKvvKZg4fSPsO3KV7dx7FuYv3AZjxy1ikybMB+9t+2HYkMEsc8bU+H7EhaS44yWVXMvA5cs3YPLw7oy6rGxaNg/ef4hgFMCDMMS8eqUEY7gJfPqELyQkD+9QMLyB260ScP0ynMDPze79R9gjDBEPblzjH8Qh92/fhPv4mnu3bin+/nAPt/n7/jfYw1v+8Oh2ADy9d5c9QY/u3sFt9T579ughBD5+jI+P2FP8++qNmzB/+Rq2Y9d+eIb1evUskNGtyN68fGUJZPRjEO/oRyFwOQiFtZA3dG9kukCMum2oPsZh9FU+/Sx4SAjf3/fxo+fszotguIPLdP/2XXb3agCEvgo2vV9/PhC/xzq8xveY8M+wYpC1/WfePmy3F95OjK4S9FPEH/A9DH1PPyv6Ad/LYHjy5CncxXVKrl+7ARfxhOw87hfJuVNn4fiR43D44CHms2MvrN28DXwxjJI9u/bC/j17Yc/2HWzn1m2wfbM3bF63gW1csw5WLVwKy+YuZItnLYB5U2aB56gJbNzwUTBiwBAY6NGTjevbG0KDHmO4fMvG7dgNHpv3QEvcV5JePfrBxDGTYOSI8WzokHEweNBYGD58Mhsx0hOGDp0Ag4dOYkPx+TQMxOf8bjH/gEA4fU7de5gs8PKB7l0mwYjhi9lm35OwYstBWLn9EPM5chb2nb4Kx67eYuduBcDVe/fhIr7X5BqeFN19SBfOqhM7Wtd8okEnanyiSF1IqG/7B4WCPvUhDn3HwoMC4cP96xBy7QR7c8YXXh5YDvfWjVdWDIfby4bC43UT2HOf2fB8txe8Oe7N3p3fDS+PbIaHu1eys0sngPeYLrBn+gA2u1MjGNOsGrSuUIhRGB7ZoBwcGN2O3Vs3Bp7umQ1Bx9ew4FPrIOT8ZnjiM5bt6lMedvcqD+t7lmYDq2cHt+zJ4NSSIez4yPoQsGoYrOpWlRVMnQgyJY0HWZInYPnSp4DUdFF13DiMwjAFFB2IKRDxV+OmIGwbiOm4ogOzuoBddZ9QfYq/h2yZM0DurFnZxBHDoESBQlCiYGE2c8JkyJUlB9SvWZP17twZx88GnVr9zFo2bAQuadNBry5dmTses+n+v8MHDWbFChbhe/16YNglJQoVBpdUaaB5w4asmmslPkZWKleWtcOAmQzzSb6ceRh1r8icPiOkTJmK1abwWd4V8uXKzUoXKwE/N25kuS1cwoSJ+DZmbq7lGB37qAtF2RLUX7cEVChdki+GTu+SjuXLmRM6tWkFPTt3YVRH29uu0e3WdBim7hLmLhMUiutQnTDk69ur0a3VqGsEo/sOG90kNArBZYoUVYrR7eeK8MV+hI7BCRPE51urEQrFqTHYfke3OvuO3uPvIVH8eHgi4cJSJUvKoVZ3WaBjPwVXHajTpkhu6VtO/kMX22FA1n3S06dOwV0nLN1rvlXdHpz/o1Af9VTJKDjHYnFi023YYlvGp/7D0b6Nxhd6kjgxY3Eo1oGXQrY5GFMZ3YeYbs1GvhSK/6sK5skNqVOlYPHjJ8QzmfKwwWs2WzxrGp4xJIEUSVKyWhXdYMGEiTBv2mRWomgJKFqkFLhVqMy8ZkyBwf1GwMUTJxiF3Sun1J0ldAux+S4TdFcJCsgUhDkMHznKIWjCiAmM+sHozv+E+kMVL14KiuHZHIkfLz4HDpcUKdniuXOhDX4I48VNyGZ6ToJju33wYP2E0Q8FXDlzCrymT2Wj+/eHcydPQ+N6jVjT2nX4rhiXThxi21YtghUzJ8KiaWPZ0unjYFSvjlCoUH6WPGthqNjCA+o3bsr27fDmiwB6devAzh49CAd9vOFt0At2aNc23DH0gHmzFrGcWTJDjkzpLRc9xE8QBxJgkI1HF86hGDFUK7FGzxPEj8MbIaE+PHxFp9GHjIZTSNY/3FGmeBEMznH5XsWkQd3avE5/+ikOS4kB2CWNC3h06MaypEnPgbhBtaqsS4uWeOZe2XIRWA23muBeDcNwtdps4qixcBFPdPRFddSqSX37vJctY75r18G+LZvgiO925r1iCWxbvhR8Vyh0j+GLR6hF+LiCoZjuP0zbjOazZiXUwJ0X6di8ETwPfAqvXgYy/qW6iDBo37g+27pqDdzA9y/gErUKY+i9pH4N8d61q+z+9WtwD0PxrQsX2MuHD+xa+swZi4a9wlD26HEQO3jiOoyevBY27TjNjp25ARs2HQZPzxVs9MgZcObUBXgS+Ir17t4a3xM6SYmrttM0afCEcSP4eK9lyZMlgv5dm8Lbt6GM+n++CX4L9+8/ZLcC7sCZ02dhD4UitHnTZli5chUsWrSYzZ45F6ZPnw3T53mxeau2wHLfwzDXawmbvxjHmesFUzAkkfHjJsPY0fjZGu/JpnjOgFkz58HM6XPZFM/pMGnSdJg5Yx6bM38ZLFi5EWas3MK6TVkAHTEEec5eymbQdjzbC5YtWcXo1xnXrdkIWzDUkb27D8CJo6fgzMnz7NxpP7h6yR8Cbt1jTx4/gyAMuM+eBLLHD5/Bw3sYgigIIf/AYLh26QpcOXeB+Z3Ck9qnQXah9Pf+s7z+8y8QQj/AYqBWcfO0badvO0zTgTgM37+3eEL4FE8MSMDde3Dh0jU4evwM27P3MHh7+8LmjdvY6pUbYOkiuj+5sgxPzqfOnANDxkxmk+YugcmTZ8LUyVPZzGkzYeZUfD5xChs7YiwM6jME97lDWd+e/aGnRx/o0qkH69CuK3Tp0B264WebzJg4CsLDQjBkPmUtew2CxIkTgWv5cmzwgNEwbPAYGDJ4FBs0YAQM6D8ceuN4pE+fwTAYh/f0GMh6dO8Ho3A/fQY/B+TCxTtw5Pg12LPvLBs10gvatx0NI0ctZWu3HoOZi31g6pJtbPGGvbDa+xCs8D7Alm/2hcVrNsDCFVvYik374MG9x5ZvJuhHf9Q3CfrbErqI9wO3spO7J0/B1nGjwXfcILamR3Pw7t8KLswbwk5O6gyXpneFS1M6sAuT2sDVmV3h5vze7OG60fBizyII3LeKPT+wBgL3r4NnB5RrG+bAjokeMLqZG/Pq2RRWD2wLPWqUYkMaloMFndzh5soh7MXuefDm5DoIveTDIm4egk+P/eDJ7mmsee7k0L9cRtjTy5Vdm9sers7rCseH1WGnxjeHO+uGQZ3cyVj2pHEhV8oEUDxTKpYzdRLInCIhJIwTm1GLIR0jNWqVo/sNUz9jRYVefTyxbTn+jnC4olbj7zkAVShdHGpUqMByZMwCsz09IW/2XKx+DXfo1707ZHTJyCgA0i+75smRl/Xq0gWqVKgIOTJnZ4N79cbQWwTSp8vMBtI9iPMVgNQp0zBq0CpXrDRkyZiVtWnRHCqWpuDqwsphYGyBQZlaikn+XHmhUe3aGF4zsHQYtpvWq4vhuRxLg+GafrmtQfUaLHP6THicjWsZXg2XiX44JKWhUvlSUKpoYUiaJAmjeyWXL1UaenXtxCgQm+8yoe9BbL7DBIdhXA+E+xBjINa/7EZ3kuB7DeMxlrgaLcG6zzBRrcJK6aJFUWEM9kUY3df+x+jUIqv6/9IdJvLlyA7x4/4fe28dVtW+7f9/79ln73122AESSoeimCiKndjd3Y3d3YHdiAWihISE0iEgIY2BXRiElGKec9/fMcZkLtnu83yf3+/ec+4/V/fzehZrsVgb5pxrztdnrBE1BTU3mKO+jHGD+mjWyEJElVGjxWo0uFqVqrAyN4V+PS681xI3UAZkKBFn7k3MXSNkmAdRvQrnDH/tGsGvwX2H1U8o6tWpLc9Xfw8+fiTyW1EE+BPdZ0lmkWa47/G3Qiq9jityhrkPMfNvzRn+ljq0kS1NzQRufh192RPL5swRuCWXdt16aG/bXji5dxcifTw1XSmaWLfExPET4Lh5k+DtchZdO/ZFfEiYoA7fUIvmOCrMwnkridthJcl4Xhbi9NhYISUmGukxkVi7cq2grnrUlInffqsKW9t26N+1s2BpbKwklNPOZvR1dOC0fz/sWrYSGtKb9Pyp0yh4mSsUvX6FF4/uYstyB2Hz0nloZGos0sLUJEkcMXgAXj64JyRGhODy+ZM4s3+7cGrfVmxbMRfdenQXtC1s0Hv6cgyevVrYtG0H/C/7ojonqBMHHHfiemSoNPNn5kydjMMkJQtmzxNaNbVGm2bWmqK5GjXpxEZCzM22GW6bw1XCGuEl+a1bpya9ibUEbozNxXSVhZijxHU4/YKwMDGUdjyqEA/sbQ+eSMTVqAyvqk1NTOlNPl+wMraEXbNmGDNwgDBp8CCMpDe0eoLgzhJ9eg/UsGfLDqTR/i0oeCPwBYoHA4R6egmeJ46TAJ/FVZJaJv5qICIvX4b/2dNC3JUruB58VSPEKTyxjvZ/Fh0TTFpsNDycTqBv5/bC+KEDUEiLmiKSDaa0VOkyMX3kcMGZtvd9FuKK6PCjbCUqzCJcGYkUy+N35KPp/5cA5b0uxLX4O0Js4l3sO+6PE2dDhKT0RwiJuIFTzv7C8uU7sGvbAfj5hQptW7eQQgO16JGj9xuXzERm9i2hcztr2He2xctnz4RPn/6Ot2VvcftmtpByI4UE+wYSricIofSe8vLyISm+KDiT9B47ehJHjp8S9pEc73d2JSmOEo6dc8NBkuYjR04Kx4854xhxgp7LHD7iJPcPHDgm7N+zF4FBoTjt6inscnbD3EPOWH7knHDknCfOX/CC20VvweuSPy77XYEPyR3DkufnGyiPMVfotSJJiiPDFWIjIhBLYp98LVZIpUVzKu/3uHgh/XoiEiKjkZCWIWQ9z0NYUAjCAgKF8MshKHyS90/31f+ff5r9TXL17v0HzaS6T5xGIukEiuB+K74KSmqHAqeqfMTb8nfCm+ISPM99gTt37wsZmbeQlJiKa9fihdCQSAQGXIWXh69w0c0Lp53P4cxJF+FKYAicaVG/adMOYT1J8eo9x7D10Elhz54DcNy1B7u37xZ2bNmJDeu30rlyvbBi2RosWbQSDrToZhbMX4wNu0ik/cKEBC5K/PIF2zauEar9XlU604wfN1nYunk3Nm/ciU0VbKH727bvwTY6phUOYtPmfVi/frewbu1OEvSjSEu7LaSk3EbSjfsICIgX1q4+jqXLjmDPIW/B1SsG2w96YesBhV3HaaF1Ngi7j7kLG/ecxLqtR+B41Evw8IuUzhKVFx4cGdYUMXIaCS2KQ44eFiZ1bIuxtk0xr0tLYeugdjg4qhPOTOgsHBtlB/eZPRC9eoiQuX8GUndMQPaB2cL9U6uQ67sPeaHnhFfBBInx8zA3If7YBlxaNw37Zw4WPNZOg9uKSVjQ307YMr47YnbPo587LJTEu+N9OonwrQjhy9MbKI07iWduSwR7k7oY39oU+fFuwpdbgSiLdcajC6uFV8GHcHZKRzSo8btg30gPdiZaWDukudDOUh/6tatpiui4Yp+L59TBGywlfN5RhjXxY/ycr4OuRIL54241AigDEyp9Kkvf09XSxq6Na4Wu7TqgBwnd5hUrBY6ujiMBXjJrjsBDMVYvXYo+3foI1o2tsdxhPuza2Am2rdpg1sTJsLVpJzRr3Bjzp09DE4vGCg0bkTQvRivrFoKVeUMsmTuH5NhC4A5Pg7lDRW+FeuQmPTp1xjC6VjHNG7dA44aNMWn0aMGudVsY6umjRdOmwshBA8RptMh5mIG9e2CAfQ96HR2hvq4+Otm2QX97e0G3Hm1v8o3Fc+cKC2b/MWWCI8SzWYgnTRZYiCunTEiEuF9/9O3eQ+CiOo4Cc9BJaE9ibNdWSZ2oNJRDLaJjurRnKVYwNzKWVEc1RYHTKGvXrIE2zZsJvK+q/FZFKYQjeLHD0+jYcRhtElYWTlWIOR2C0xz0tOsK+jra+OUnRWTVCXY8kY5FmOGifXYOtcuEGuFVX4+j0XW4QxZd5xiZjEjHo9o+jZ/L3Sq40E+Zoviz/D7/R9If/hwNZimW9m+VxPjb5/zL+S7E34X4uxB/F+LvQvxdiL8L8Xch/i7E34X4f7UQ62rrawYbHN2+Ge1a2aBlc2tBX0ePdkp7XAvwFNYtnAcbkmDDBsbCyCHDEOznCZcTx4QmVs1g1aglooOuCmpbNe4/zHDKxL20NE0fYu41y4+rQswFdamR4Zg1Y7rw00/05uWPdCqEmMcNGzQwwXB6UzAd6CAw1NeTcYYMpyDUq1UbG5YuErhFXNumLRHsf0XgFlH3s1Kxe9ViYfHUsRg70F7C/AwX7fECYbHDHCH/xQukxcWQlO0XnPduwrwpIzFwUB+hpklj9Ju1BjO2nRCat+mIA1vX05txlFC7Zm1c9riA0pJCYe2ShQj29sCebVsEw/q68pFGAz1tgdMcdLRqSZoDwzJbp1Y16U3MsPRyWzULowZCzRrVpfXaVyH+TckjrmjE3qZ5U2jXrgkjfU6010X3Du3lYxEWM6Z+A0MZHDFv5myhIZ3gurW1xeCe3YXpI0eiX7eu0NPRFQb0G4z+fQejZ8++wr5tjhVCXCjIx8bvyxHodl6I8PFBwIVz8HM9LfAwjmCPiwj1cBfir/ojLTqaFkbXhazrSi5xNh8z3Jrvxg14OjthQLcuwvRxo0SICwoUePgDt3qbMnigcNXrkvS9fswiTDy5desPQvws5w6e3Lml+f6jrCyUFVa0X/snksX3uW1V5s1HFTyHu088tu/xEsKiM5GYeg/nXUOE9ev2Y96clXByvixMmDBeWq/xPpH9UqMGendqjaysHGHl/Emor6eH+PBAgVuvffjwEc+ePhSystKQkZGCtNRk4Xp8PAnrVfj4XFbwvkyCFUjycVkI9qfbyz447+UpeEbEwT8mERFxSUIILT6C/ElYff2FIHpPBPBH+L5BQuDVMFyh529z8xEcL/rAJzgcURGxQnRUHGJj4hEfm6ghOSkVqSkZQlpKFlKS0+k2U7iRRL9/Wiays24KN7NvI+d2Dh7kKNylBcmd7Ju4k6VwO+sWbqbRYuD5KyH70XMS5mQk0v+HiQ9PRt7jvD/so//KP3Vfc85pQVExXpaUCcXFb1DGvYXL31ZQjnc88OS9MgSDW9594P6/6qAMOjbKyz9oUl4K3pTi5Yt8PHz0TLhz+wH93ZxOkCFcj09BTHQiIiOvC6GhMbSADoE3LSSYQNofvrRPjx8/I5wgjtJCZvdhhf2uPtjrcknD/nMe2HX0DHYfOSU4HjuDw+d9cIgWY4xTRApOhiZg32l34fHtG/j75w+YMayPwB+/WpmbYcGCFYKj41Hs3cNCvkvYueMgdhB7SMqZnTtJVvecwN79zsJBWiSdd/dDWsY9ISPtIRKT78OFFovM4qWHsGb9aRw+ESC4ecdh7wk/bDvoKew7FYi99D7ZuOeUsJZkeNveM7SQCxYysx9WFMd9Lbr8wnxWKLh9E3tmTEErOo8y3S0b4PDY9vB1sBeuLO6H2I0jELV2uOA+uxsOjbSFn0Mv4cbOCcg5vgBPzq+vYDMeX9yOl8FnhYIYb7wIccFj/5NCzMEV2DmhL7w2zhb8ty2A71YHuK6YLEQdWoXHASdRluQnlGdcwSeW4ZwK7kSiMGQ3Fne2FKa1M0dx7HH8/V6M8OVBPD7fjEJJ1CkhftModDCoifo1qwhzulpgQjtj7BxnI3SzaoD6JCC6FVQn6eXUO3UBzq22uFe9GnDhAAvXplTOIZa84R+Vgjr1MRZjkWP6ur52PbQhmWS2rF6FVo2bY8SgwQJLsEkDA6xbvkzo1bkzzI1NsXvTJqF1i1Zob2tH170lAhfJ9eluj7ULFwmcZtG2TRvMnzFD4Hxga6umJNELBX4tg/r1sXLBAsHGujkaN2qMgSSrTO9uPaQd2/CBg4SRAwfC3ITEuX4DgQvvOrVuQx6jK3AL2UG9e0G7rpZgamgEOxsb9OrCwzI6S+s1fl63jh0EKbizaY0l8+YKC2bN+lPKBAvxDBJhRk2ZqFxUx23luLaI4e0jAzdIbpmu7WxJiO3+kD9ceTCH5BOTFKtC3K5VC3KaxrQPeT9WlbohFuDqVasJFoaGJL4mmpQKSTml/apFIszoadWVYjkZjkFwcIyltm7NmoK2FMrVkLRLRhVrVVhZdnXodVRB5la4lXOAWWBr16yOenXqCJySwTnFkhf8o/Jclk71+VxExwM6fiLpZbhgjvlWUtUiOpHiitf4tzFzzHic2r9bWDRnJr2hqsGEDkSGe+id3rsNA/v0Fnp26UkHeRv069lbiA7ypgNgLNq2tBOaNmmFYQPGaAYrSM9hiQ5X5ISyEKeny0COykM51OdzD+K0qEiMGT1G4Aix5DhVCHG1KjVgYdkc50+cFKaPHIsWlg3RvKHCxCFD6ECvBQOSDMaO3pCNLRqhq10vITQoAK+f3cehLWuE3WuXol/3jjCmVSTDCenc38/MyFK4TNJWlP8KVy6eEY7vWIuZ44aivrGh8HutetCzbIEhCzcKDUws6YDRxuIFc4SWzVrQqrUJbpLYMDFhfogJ8cXZkycEHa06dELRp9+1nqBLq7R6dFDqatcRGuhoidDWIFlnuKtEfV1tNDU3FXTq1ZETXuUIMvcl5ol3jG3LZiLVZgb1BX5T8YmvRnV+zZrS3NzSoiGmj58iNDa1gD2tVIf07CHMHDNa7hvo1RcG9B9MDEXv3oOEI3uPkQilIo9kmOGpX9yf1fvUacHf5RxCvDyQFB4qxARextULF+gxLyHuShASQ0I1OeQZnE8cF0vHyQ0hO+kGXI4eRs/2dsKUMSNQVFQkUsyUksB8/vgeY/rZC57OJ3Cfji+ODKs8ERG+Kzy/d/ebSPFtvLh3XynO+fLnPrR8l3OieVodk3U7F1Fxt7B9n6dwyjUMiWkP4BcQJ6xdewBTJi3E4SMewvZtB2FI2109wdSgk05TWrTFhocIl9xPQ0dbG0d2rhPelXN/288o4s4AxF36fdMzs3E9IVEIC4si8SWB8g0UPD19ccnbF55e3oKLy3mcJU6fVXB2vYgDR51xxsNf8AqPh098GryupQrusalwi0rCmasxwo5z7nA86YyQiGvC1SuhCAokgkKE0JAoRIRHkxjHC8kkvNmZt3Hn1n2Bhynk3HmIe3cfC7ey75IEK49pHs+5jwd3FR7ef4SHD57iyeNc4THBucUP80qEW/efIjMlG2kJ6ULytRvIrxwh/i8EiSsvfng6X869h7ibVyQ8eMy52y/wnGScef26EIUFJXhDoisUldHxx0MkyoTC4jLkFZZocsZz6flPnr3C/YdPhWzaHik3spBIvzsTFRmHq0FhCA+LEUKuRsLb67ImYux96bI87n85SNi9fReOHHbCUdqHzMkTp3Ho8HHs3ndU2HHICTtPnsfus54KZzyw+dBJLF27WYFzfldvwok9h4R3hS/w5sVDWJs0EHjylF0bG6xevVnYstkRW7fuw+Ytu4StW/fQMbwPu0iEme3bD2HXrmPYf/CMcODQaYRGJCMl9b5wg94LweHp2LztvOCwcD82bnXBrr2egqtnDA6fvopthy4Ju45fxmZHF8xbtlWYv3QTlq8/CMdDPsJr2gf/+Z8ciVfzhpXI8If8l8LuSWNhQO8ps9o1hIsL7XHr0ESkOI4XknePQ/reCYjfOlrwW9QbF2d2ReL28UKuzzYUx5xD6XVPoSTOA3nhLiTD54RXwa7IvXIGz0POCw8CnfE41BXPYy4JL+Mv43G4G55W8DjUBYVJgXiXESJ8vBlJhOJjVrBQnh6Akoi9ODS1m5DsvAKf0y7iU9olhSw/FIUfQ9D87sLIhjqoQcLQr4m+sKZ/Yyy3b4ilPS2EXo3ro40JXTdqVxe4sKlq1V81wsPRQea3X/8mcJSYI8lqDrFaVPeHiHFFpFggYTI3NoZdyxZCx7a22Lt5E4z0DITpEyZKn2CtuvWEDStWoHvnLnTday4c2LWTBK65pm//6sUkxYbm0qmCmTZhLMyNzMkleglTx46TXGO1a9Vkuv4Y6jfQ5BSvXroEjWTqnKXAHRw62bWHJV23mD69emPEgEHkANqCmZExZkwYT7+DtaBbTwstrK0xdGB/wdLMXKbVtWxqLXC02JCn5bVsKdi2aokx5BQcpWYWVsgwi7CKFNVVEuI/dpkYI0Is/YcJjq6z5HZr207oztHhCvmtHBlWBVim1NFtR1tbgX/HurVq0zYyF7RIOn/7VelHzGjTfS6kUwepVCVp/eGvf9XACyLuQ8xBNYajv5W7TLBscpcJ4/p6Ag/7Yl9QRVWixv/xg2aQDw8KY6lVu1Aw3HeYP6lg+PyiRU5V9TeeTqf0LK4stMpwj79oItI//8g5zBWFe5Wep/7//0dyif3dT2HM8KFC3Trc0qsWJowYKTiuXokda1dIexLGtlU7zKODgNuZMaOHDUU7WuHZkgwzi2YtRkJ4lKaI7k6KIsTZJMMMp03crWjFxqgR4qwKksLDkRoTjr79Rgi8k5VVrNIovGbterDp0A8RgVeEU0ePgkeONre0FCyNjNC5rY20R2EaW5jBad8OzJw4VejdqQeuR0fAefcmYd/GFdi0eC7JpYnAEsofI6pFUE3pTXRq3z68ePhACLjohMXTJmLZgrnCzu1bUIXE0rx1ByEiNACjhvTXVIHOnz6ZpJVWnJ06CMnxEUiMvoqje3YLevQGFej/y9QjQdapW1tTNMcHJ0+a449FGD5Adeh5TS3NBB7LzG3aWILVAR1caKdGBFo0biRC3dDUWOhMJw8+wLl4kjFoYIwmVk0wc/J0wYpW151atca4gQOEMf36YkC37jDQry8MGTwcgweNgH2v/sKxAyeQlpZJcvpG4GEMPGwhISRYCPa4gCsXzsPn9Akh8rI3Qr0vIdTzopAQEoLk8K+T6TLjriErPh63+Lgh0uOicXafI3rTap2ZPn40iUgh8vNfC6Wlb2Ry1+BuXYQgT0/cz8rQdJVQxDcHT0mGmed37+EZd1ngx4hHN2/hCcEjkRlViCtLE7cKe/YoV0jNfEoC/BAHjvkJuw5542pkKsJj0oS9+1ywbPFmbNtyVHA5F0gntQ6oVq2awMcUVy8f2L5GSEpNRYum5hg7qI9Q9OaNDFMoK3snPHz0GKkZ2QiPjhV8A4Lh5u4Dp3PnhaPOZ0kcTmDXgWPCzr0HsWPvITgeOCJsczyA7cS2vUeF7fudsPvIaWw7cFJhH//sSRw95SacOO0Gr0u+CAuNEHxYur386P/prXDBh+6zjF8VrgaHi8BpIsgkfPGxJEg3MoXU1Cykp2ZLlJS5ffs+7t97TCL8ROHBY5LgF3j06LnwgAQ45y5Jcn6pcCvnIW5l3MbNNI4c30J6YgYKnr7+KsT/zX88tvr+gye4T9LLPM9/I4JbWFQqFBe/RRFJb0npO6G0tJxuy+kYZDkuRYFQhvyCYuHFy3yR6qybOUJiYipioq8jgrYNE3QlTCLx/peDBe9L/jh/nkTR1UM4y8V1tCg5e+6CsHO7I7Zt3Y1d2xQO7j2APTv3YOPajcLqleuwdMkqLHJYJjjMXojpk2diyuQZwpzZDpgzawFc9m4TvnwsQ1ywt0wfZXgQUE+SgPnzlwsOxOxZizBjusL8eSuxcNE6LFiwRpg3dyWWLNuE1Wt2CMeOu5AEP0J8Yo4Qfe0WTp8Lwdy5u4VZs3dh7cYzWLHGSTh1MRK76X2zetd5Yc0uVyxevR+zF60RFq7cilVbTiD2WqZQVvL2D0V0SvvBL4g85Sy0aqCPOnT+m9+9sbB3HF2HGmjBvE41wVq7FvpY6mND36aC06SOiN40Gq+9twhlcefxPv0K3qVfFd6TwL5NC0NBjI+G3DA3PLnqIuQnBuB1UggK06OFvOQQvIy7jNfxCnlxfihM8Mf77AiF9CASYXrdDD/hQ7o/PmYG4EPqReFd3Cl8SvVAWcwZofDKboQu7Ik+xlpCtV/+Bt0aVTC7m5lwYIwNjk5ohUPjWwtTO5igb3NOm6gh1Kj6O35l+a0oclIjxaowcQEU32q6EtH3vi2uky4TmgixUmS3YPp0oX2rNmjfxhZb1q4RDOsbkRBOxdjhowQenMGRXLs27YR2bdpi5cKFsDCxFLp37or5s2fSdU5X6EsCO2XMGE1btPEjR2L04CGawRz9e9lLkRx/ism0aNocDtOnwcTYTDClcymnbLSj34nR0daTlIrOtu0E7bp15bo1cdQIwcTAgK6ZDdCa5J4ZNbAf6uvrayLG/Fifbl1hZd5IMDE0RK+u3bCIXIJxmKG0WuNUicpjmyt3mfiTEA8apOky0bNzZyUC3K4CO5ZeJQqsirAqv8y39xuamkrAztzESDAxaACD+rpKaz0uXPvbr7LgaU7XfYaDbCyiatcGLpLjgRjGDfQEbvnKCyd1/8vYZkmlUNqgGejqSqGcmiLx1x9/ECFVi+Z+pZ/hybnq4A+WWk6VUD9x4ACeuihTFma//GGUsyq9f/0rSzFP1vtJGff8F2WS3p9k9X+C70L8XYi/C/F3If4uxN+F+LsQfxfi70L8XYj/VwuxOR9chkaCrk59dKIdFeJzXljlME96paoCNWfKFJw5vBdHHHcIpkYmaGNDAjqLP06YA7fjp7FhxSZJi2CU1mpK/rDkEJMQSz/iij6znDcsH5VfjxduREUhNTocnTv0EjhNorIQ19HWRyu7PogIuiKcPHpMigDqa2kLPFhCm4TSzNhYmDRiGB2Uo3DuhJPQtllrLKE3ZESAt7Bv40rsJWaPHiwY6+vRRaKmSDZjQQfgkslTcTchRvhYVozoy+64dNFNWL5gDjp36gwzMwth9LCBiLnihbatmgqcqN6soTlaWVsL0yeMQ+r1CKxfsUTQ19WGPh203CtY0Kot8PhDhg9Gfg0dzi0meHgH5warRXI8pINzwtQcVf6aBblu7epCc+tGktNjbmwocD4Un+Dq0MKHMTQ0RZNGjTFx7GTBknsy2rTBiD69hal0Mura1o7k3lAY2H8wBg4cjn59BglOB08gMyMLJSWlwuMnj+HtchpX3V2FMG8vGZkd7nNJCHQ9jTCPi4jy8xWuBV1GxrVruCnFlUqBZbbABZdJJMkJcDm0D/bt2wsLZ04nSSnG69cvhBKS44/l5RjUpbMQdtm/ovdwlqC0W7sjIiwyXCHFT0iGGZbixyTEBbnPBc5X5H+VhZhH3BbS95j7D/ORnPkE7r6xwra9XrjgHon4pDvCmXP+WLNmD5Yv3ya4uQVi8qRZqEsLG4Z7P3NRx5SRw4Ss7ByMGdIdzawshQd3MqUX8fv374WXr16TIN5HTGyCEBQcgUskqec9vYXT591FivccPCbsI/YfOYFjJ88KR06cw77Dzth39KzCcbp/9Az2cIEWsXv/CTgedML+42eEo86uJGIX4U7SzZw564ZTp13p9qLCOS94ePjjckCEEBAUjtDQaESEXxNCg6NoUcg9dbm37nVcj09G6o0MpKfdFLIy7yDnziM8evhc4BQJTpX4w30S3idFb4VHLMskyXdv3heyU26SEL/8w/757/z7WE6LjifP8bCwWHhFMlxcTOJbplBEQvaGpfhNmVBA0vuKUyNeFghPnufh6bNXmpzheyT52Xce4HpSmsB5wsHB0bjsFyxc8gqAp+dlXDh/STh/zhOnT53HSdruDKdFHOIWeNwKT9rhncA+WshwHjFzilvpHT+lub+XFkC7d+3FNpJlZuPGbVi7dhM2bd4hbJaiu81ICrkk8JCKPWsd5KLKNKDz3Uw6b2/cuEOYMX0BpkyZh5kzlwhzSYgdFqzFwsUbhPkkxYuXbcZKkmHG0yeYFmzcau2OEB5zE1t3X8DUaZsFh0X7sWqtMxYuOSz4BiXA83IsznqECee8QnHE+SL2HjgqnKQFmbdPCL2vS4RPtGBRBscoRYw8ROVDaSkW0jmIMaxdDaZ0Xpza3lLQ4X6oXGtRIYTGWjXQTL8OJrYzE5IOzsBz99UojnAS3pGwfrgVhQ+3o4WPxPs7cXibESGUpIQgj2U3zlcouEG/260EFGfFCYoQ++EF5xoT+dcvo/jGFbzPDBPKU4NQnnwJ75IuCKWRp/A23gWfbwUJH9N98SnNE/kBu4Trq/tgWks9VKdrnUAC0aOhDjYNbyI4TbXF2dntcWKyrTCtozE6WdaDVrXfhd9IoNWCJUaGc1SI7tfg0t80KRV8LamcTyzP+/lrDjHDvf+b0jWM2bFhHRqZWWLutKnC2GEjpZBupcN8gfsKd+vYhRxgpdCoYWMM6TsQsyZOEkyNzDB88CBMHT9B4HzdcSOGY1Dv/gKPXh47cji6d+okWFk0xIRRI9GrS3eBW6u1btEC08aPFXj8cusWzTFxzHChIT2fmwDwzzBtW7aCGTlBUysrYfqk8TCn+yzBTBNLSzr/DtSkfOjp6oh4Du7dW9AhadfT1ZPCP4Xp/1SIWYKZ6RPp75qg9CBWRzePHDwY9l27CjyquXJqRAdbG016RGX5Ve/L8/jxNm0ECxMT2n+/atrq6ZAbtGhqJbcML3D4+v7Lz78IPKSreSNLaNWqJfz0E6dF/AAu1JdifVoU8QAP/Xrawl9+UHKGOY2B4Zzh2iS4Natz/rmSsikiy6kPf1Geo8UpnRUpmtwDm3OQVcHmdIq//uWv+J2+ZmpW57aAP38dxUywhP5Bjn9gMVYEnl//354z/C2//16VZMlEGE8HZ5i3C63kOgnmnJtDK7OOdp2EK54uOLRrm6zMGP7eojnTcfbgAeHo/v3o1XMwyS5LL5GSonSSUAdxpHBuaJKmT/EN7irB/YfjFVKjo5EaFQablnaC5A7TBuTCOkbPwBSdug8hWfcSDu7ZjRo1asFx/WrB1NAA1pYWGNq/t/DsQQ62rl+D9UtXCOk3khAbHEAXheXCgc2rcWrPFhzctFqYMnyw5ODUrllTcJg+BbcT4/A82E34UvQCf//yCZHhV4XrJHOPcrggKE1obW0JP7fjJL9WgolBfYwZ3g+R9P9kuAvGzg3rsW7lMoFXd0aVqE0HF0swR4YZ/lq5rwgxF93VrlkNtUhyGR7OwZ0lvg7m4E4G3IdYEex2rVtAmw5qS1MjwbqxlZz46tBrMgYGxmjZtBVGj5ogNDI2RVdaaQ/vbS9MHDwQnWmVr86eHzxouOQQ9+k9QHBxPoXszGwUkwwzjx49wa4Ny/Ho7l3B7egh+LqcQZT/ZeF6RCjd+uLqBVchMSwU14OvVBrMEqtEiLmgjkiPjcbBzRvQ2aalMH/aFJSUliDv9UuhpPgN3pPU9O3QQbhCi5T7WZnSe5jhLhJPbvOgiruayDDf8mPM0xyWYn78jvDpffkfZVj6nv4d5W9eC+/eliM9+xniEm4Lh08Ewsk5EPGJt4TQsETs2O2EBUs2CyecvLB1+36YmRgLMjSFFjqc98ZER16D0+Htmj7Ply84kwh/xscPn4SSkiKihEQsT3j1KhfPnz7G/Xt3hHt3b+HObe5IkSZkZ9B7Kz2JjvN4ISXhGhJjo3A9NlLhWhgSrgUjNjpQiIv0R3zEZcSFK1wL8UX0lUu0sLggXKVzQYjfeQSr+J7HVR9XBNNimQlwP4UgjzMI9T5fAS2C/C7SYvOSEBnkg5irtPjx9xIi6HuR9Dph3ueEK26H4H96L/yd9wiZifF4lstCXCY8epSLxw9IiG/dFzJvZCPvSS6U5OH/ngzzP57y9vxlPh6S6DJ5HA0u4wiwkiOcnRpNx6c74gMvCDG+5xDhfYp+d2ch1OME/M8egN/pPYLPSUdiLzxP7BI8Tu6GuxPfOgruhNuxrXA7vrOCHTh/bAdcj+8SLp4+jAtO9POn9wuBHk60Pc8SLkJEgBtiQ72RGB0gpMSFIC0hHOmJkQrJMchKicedjGTh7s10OSbKCp8L3IN46rB+dJ7gCVdV0LG1DS1YEpRFCLFi8UKMHDmZJHmZMN9hjUjwoiUbhaUkw6vW7MTGLQeF4Kg0JN6gBVtCjuAdkIhlK45gxuwdwrJVJ7CcmO+wX8jMfoQXr2hbP34l3KdF0J3b93Dr1l3h3t0nKMgr1Uyi4yE/au6wCPHnz3h97wG6WTYXjGrXQBNdOpdV/V3gqFWtKlWwfWJ34fbxebhzYi6enl8mvA7cjjfRziK+zKf7CSjPCEE5yytL7M1olBPvVDKjUJQaijcpwUJe4hUUpESQGIcJLxMCSZT98CTsvPA61gcFJMWlSX4KiT4ovXYORRFHhJde23CkbxPErugvZO8eg6wdIxA0q70ww8YAtbiq/1dFhpvXr44FPSxxYLyN4DK3E07NtMOOIdbC3K6msNKtDr1aVQUtOvdzJwm1z6vCT5qveRHEAxfUQQrcm7iyEHN0mANM6mAO7jShr6cL64YWAkdPNy5bKsVxzAoHB4weOIS+ZyXsoGtb04bW0nuXYUE0NTQleR0v2HfpStdEI4waMljoRoLIRXATR44UutA5UV9PD3OnThb6deshkeBp48YKvbt0I0HVp3NnO2HCiBFooFsfnTrYCTzljp3FoL6hMGnMKHRr3xFGDYyExg0bkcQPQX36mxieJNqscSP079lDqFW9lvQuVvsUt7VppQjxjOnCwooOE3OnTa+gIoe4IkI8beIfO0xMpt+Z+yRzZJjhaXRdODLcvoIOX6PDjCrD6qQ6VZA7kAwzPCikapWvfX65KJb3mw25BmNYX18Ch+qgDs7jZUk1baAvcK/hH3742lVECuq4UI4/mSbYLfg4UfOBuU8wF8PVJ1lmuFBOOkNU5PyyrFbOH65Tozp06DlVfv1d+NtPPMxDlewfJDr9I93//de/Cfz/+jZazFHqysKsRIuV+3+S138HvDJau8hBWLdoPoYPGCAHGWNh2ggzJ0xEsNcFoUfnrrSq6SCVnsy8qbMQGxKIRbNnCq1btUWXDvYyPpfhlIl0lpyKj8SzWI6TOPJXUUQXE4O0a7EynYy5ER2FlOgIWFk2FWTV+jNPqFOEuL6RBXrYj6SL9mXhwPbN6NejJx7eyhAuk2Qd3+1Iq1YrYdqYkfBzd8Opw4eE92+L8eROFs4ddhSCPM6JFJ/et0PYu345+nXtpKlS7UAXjORQErZ9y4SSwLP48jgFcVERQmjAZSREhuP5g7vC0tkTYFJfR1ME5zB7Br1hJmDxzBmC46b12L5qBebOnCro69KqVEeLZNVQqFu7lsCpE2r6BEe869VhUVbgdmwcBWZ4hc+pEhohrqgyVovy2rRoijp0kJsa1hca02KBt6lWXW2BUya4SHL8mMlCEzMLdKJV9dj+/YSRfXujo01rkjkzYejQUejfbwh69x4oXHR1xa0sFuISgafG3Uy+jqALbkK4jzdCL13C5XNnhCtuJFOeFxHmpRAbFCCfEtykxRHDo5pv8sjmZB7icoMk+TqObt+Cnu3bCRuWLSQhLtWkTIgQv3uLAZ3shOToGNzPTJeor3DrjxFi4Z4SKWY4jYK/z6kTTOHLF98IMUeI/4HyotcCdyXIzS3AgwevBK9LkTh6zB9XQ5KE+PhMOJ3ywsq1e4Rtu07gtIsv2tPJm6nJoyxp0dPI0lJwPr4Xsdfj6CKhK6yaP1E+Jv706UsFH2mbftFU2TMyoKBS1f23VB7FLK2p+HH5qLlifPPnr1X6XLEvo54rwR9J8/9ThcfjqqOi1e/xdLnKyLhh+fqj8OljZd5LWovKh/fvaBHzVuFdGb0nS1DOnR2It2WlyH35Ek/elAl37z0mYbqvSZlIu55GQvzsXxId5n/vy8vxOr8YuUWlwpt37/HuPf0d/DfK3/pBijb5b5C/42O53H7+xFP2PkiHEx5Vrv6tsj0+K2O3GRY42XZflFHXvO2UAk7ezn/ed6oIqpPYvo7OVsYQy/crCaJ8j7/mffOZf2fer8o+Y6RrSfkHzfMLnj6ATWNLOg6rCItmjEdR4Ru8KSgU5kwaS0I8EVOnLRRmzlyG6bOWYtq0RcLsOSuwfCWdJw+dE2JJgrkVYXjsLeGIcwAmTd2IaTO3C8tXO2HhUhbk3UJqeg5evy5BTs4TIfl6Kq5FxOJa1HUhNSENZcWlygAOgj/9kZHiFfA2e5KRAVsDU8GkdjVY1asthWcMy+DW0XYIXTVIcJnWFYGL+uHZhVXC+1Q/fH6Uhs8Pk4QPtyLxLjUI79KuCm8zwlCaEY6y7EjhbWYkSkiIX0R7C3kJQchLvopn0ZeE51FEpBdeXfMRXkTT19EeyIu6IBREuSHvyiG89N8lPHZdhtXdrNBRr6YwvpE2pjTVg61eDaEKXeNq0N/Q3rSO4NDNDBsGWuPwRBvBeVo77B/dAruGNRNW9LGUCLF1g1qCdo3fUfN3HtakTqr7G377jaOJyiSybwVYjRqrgsQfqbMIq0XsPJyDrz/zZ0wTWjdrQZI5BtMmTxJMDcywdd1a2LZoLXS160CSPB+6dXWEEYMHSUqFbj19Yc60qRjStw/q1NESHGZOR8c2bUlUrYQJI4aTOHZFE8tGwmz6f3Ro20aTssnT7zqROKrXI54u149EtgFdqxk7ksaBvXqheZPmQrMm1pg6fgxsm7cUdLR1yCssMIakmKlfT4ckUYekuInQo30naeWmBsT69eoB21b8CfhMgbtMzKuIDAtTp4oQqxPq1C4THBlmeFtxUV7vLl0EHs3cpZIAc7S4ckRYCun4e/QY860QtycfaUVSXLsWpzvVklaxPEBDi/YRw0X5ZsYGklrJcJcJlkpdklmBnKKOpF4qbWpFen/4KqjmJoYixpwKwXCHCpHd/1DgCHEDXW1Uo1tGHQCiCu2P9Frclo0bAzDsIiy0qjDzczjqy6Ks8KNI+/9LeOXnK/7//6wDxb+c70L8XYi/C/F3If4uxN+F+LsQfxfi70L8XYj/VwvxaDpoXY/uF6bRwVO7Vl3UIVliltMBcGafI0YNGiqYGJnDvnNPOEyfIUT6+9IB2wG9uvcUOtp1xdL5y3E/I13gFAkpqKuUR5yVkIiM+DghjfsPkzCnXbsmpJIgJ0WGwcTYXOA8lJ85WfwXHmH8K4xI0Lt0G4CdG1YLZ48dQoivL57ezxFe3L8H530HsWruHIGHd0zkg3/IMMHp0H5sWrYY18MChezkGLg77YPrEUfB/cR+7NuwBN062QqdWrXCtQtH8eLqBeG16y68Proa+bduCDc4Dzo5AZEB3oKfy1G6yIxBq6ZWgrWVBfbt2YHZUycKSdci4cgfK1lZCtyHWF9PW5PkzicfbpXCuTuM9AVkQa5AV0tJn6glaRPVSIq5H2EVTds1JW3id3pT1xY4bYNTJiyMDATuu8jbk3OvGM4htqVFzPAhowQT/QbobGODUXTSYsYPHAAe7W1OoswMGTwCgwYNJykeKri7uuAm5xCXcuFRGXhQQXlJGS6fdRaCLroixMcT10h8mdBLngj39ZTjhom94o+EkI9WpdgAAIAASURBVKu0OIoX0mNjlFZ8FYKcdi0Ku9auRMdWLYSNyxdLsVlhYZ5QUvIG78qK0ZW+x4T7+eJB9k08qkDSJe7kkAhz7vBdOj7uI5eE+OlthWc5iiSzFDOcTvGFhK6yELNwlBflCSwgLDolpe+F1LR7kjJx0TNKuBqSAA+PEKxas09YtHQ7zp33x8RJUwStunVlJLeRkaEwZ/IYZN68hwE97YTeXdrhxeOHMgJYYNEiyVKFhoWK70s/XM4zLn+HcloQlL/jWxJNlXKVckJ5rgIL6QeRJIF76X74qEGROr79JCiCy3KnivEnETu1TR0vEIQKYRPoPuddC/9Z6XHhHyJ1nIryz+Bt/TrvFR4Wlgo3b95FRmo2UkmcmPSEVBQ+55SJf82/ctpGhbQAeVmqUEwy/OHz17638ntVGuesLki+8vXv0ogri2oF3wovC7IsIFRZZoGmbf7xI/c0/qDsn3dEucoH6evNqR0ML/7K377Fu7dlQhktDt/SQvRtqUIZLRBL3hTgTd5rIf/1K5TkvdDsp/hQTzqn1IWhvrbg5XyMjpsPuJ2aKnAR09ix0zF56gJhypSFmDJ1IcnwAmG+w2qsWe8IN68rQuKNRyTF9xAUkias23AS4yeuw5x5jsKSlScwdZYjJk7ZJqSk5uAVCXFSYqbgdPw0jh85iYsu3kJCTLJsH40Q0+JJBqVUWkA8Sk9DawMDoaFWTZLiGtCq8pvQxkQHG/o2w8SWhsKyrlbIObME7294C5/uxZEIp8gt8y4jGGUkxGWpIcLbtFCUpZMQZ0QIb5KuoCAhEHmJAUIhyfCLGC+8jvcTckmKc0mKn4RfEJ6GueJF5HnkhjgrXDmKp9478OjCeuHhuWWI2TAcrfRqC7+xeJAQ/P63X4TqJLBNSYzndjcX1g5oDMfRLeE0uZ1wYpItdg9viq0DmwgbBzTBaFtDNCK5ZnRrVSNR+QVVf+fWa9yjlqVYHdvMLda+DuVg1PxiNUVCleMfuLCJaGhmDhvrpmhPUsjs27GDriEmdC2bIgzrPxCNLBpiy5pVQmvrVjKAYvHs2YJxfQOSxHEY1refYNDAEEsdHNDY0lIwpvsrFyxEI3NLoalVE8yYMA4trJsLTRo2xsxJE2BG/0/GgK5P3K/YpoWNYESPdbXriCED+gl1atdBr25dSWR7CY0sG8rPqIM6mlo1luI5DgwxY4YMQj0tHboW1hV4BkPHNraoXq2GwKOSOfVDFWKHmTNIiL+2XZtNQqwW01XuQawKMTN22HDYd+oscBqEJjeY6FRJejX5w7b0ffodGEWCW2uE2K5VSxnR3NDUROA0Sy6m+/UXbqf3mwwD40J7taifXYJFVF3wsIRakvQa088xvGCSAri/qnBrtmowMdATuIewkurwHwIXZfLCqgofWwQP4mBxrpz2UJVEWc1Z5hzlX/6mFOgxlVMjGEXGf9HkDKvS/CdJrYD7ELMYf/v4v5SQi+dg07SZoKfbAEYGxhjQzV44vnsrtq1ZSdKmL1haWGHritU4uGWjMG7EKBiTJPfqOUA4dfAokiNicC8jTeBoMBdJqX1mOZ+Yi+fUyWQcFRY5rvh+SnQ0EiNCNYM/VCHmXBnG0JhWxJ3s6XdaLqxZMA/uZ+jE8/Cu8CA7AztXr8LSGdOF0/v20nPmY7B9f2Hz2vWYRwew0/7dQuq1UHifOQrv00eEswe2kVBvotdYKIzr001yyf7+oUz4XPACmUsnIPXkTmHZ/HnSS/GKt7tw/vA2uBzZhh3rlwrNm9AbkETWiLYdE+jpLrlUavWvsaE+GnCBHMkwU+X3KqhRo5pmhVevbh1wX2WOFDMsxJxHzLnDDL8BuL+tGiFmWIy16XlMUxJyjhA3J/lmzIxNpEiirpaWYGRkirZt2mFQ/8GCeQMDdGrZEsPsewnc17l5Yys0aqgwbOhoDBkyEv37DhE8XVxwi8SzqKRUYGF7ci+HRNhD4KEaPKDD3/WMECnFdBw1vigkhoVLf+JsOiaYdDoebiYpxXXqBMPda5ejq20bgaclFRcXaXJqS0UEitGrbWshMzEZD7KyNBFf7jTBUqwKce6D+0qEmH5H5mkO5w5zfvF9gZ9b9qZQkaAKEWKReF+SLyhR2S94RxLBPH9RCL+A63BxCxX8Aq7B0yMUu3aeFJav2o2jTp7YsHGXYEKrdx6molNPR7Dv2gmJJHqb1i4UzIwaICEqBO9JzBgWYuarEP9dhJilhykqKEAhy09+nlCYR9vl9WsU5Cnkk1wW8uMFCkW8kKDb4oJ8hULldbg4kSkteoNiul9cyN/Ll++V0vYuI+kSaFu/o23+rkyBo7rv3paSVJVVwF9z5LcCTST4633+/luJBpeIAKqiqfKq4LWm6wMP+0ih7XODRInJSMpAYW6uRlD/q//Un+fCxRLaj4W0aGDKeCHwhYX+6/6vTDlJaGkRbQ+WzwrelrGcvlMoY1mt+JrgqYNvRVq/UlpS/JXiYnm9NyyxRGF+PvJfvaT9WAHdf1PIkxkroH32poD3Ne/ziv386hXBt7S/X77Ay2dP8fzxEyH38WOU5OeCi+mkoG7jMlSjC33bVk2EzKRE2h+fEOjuJvTvPwyTSICnzFwiTJ+9DNNnLsU0jhITi5duwoatBxFICz8mLukuYhLuwvNSrLBg4V5MnbkNC1ccExyICdN2Yq7DXiEr6xEeP8mHj2+IcOyIM867esPnUoiQ+1gpbFW3Ny8C+P2mLjD4+M/NvIHOFuaClVYtmNSqitokw0xXcz000aqO1iSbjJdDP7z024TS617C+8xQJRKcEiSUJPqhMMYd+dEKb677oSSFJJnFmChND0FhAskwyS/z8ppSPJeX4C/kJwYi95oHnkW6C49Dz+JhwDE88NktPLxEMuy5FQ9Zhom7JOfp+yZhrX0TwbxuNdTi6PavCk10a2CCnREW9rAQtg5rDqcpbeE81VY4NqENdgy1xuaBjYWtg5pgqb0l2lvWFYy1lHxiHtAhkLTUqKJ0nmCU4nQOMCl9iJWosCLDihArff9/5Gl1BEvNVrqedmjdShhAkrlywSJYk6gya5cuQb/uvdGtQxdhEclqYxLkqXRNZLiArpGFJRbNniVw0Z11o0aavr4trZsRPM1ujmBO16POHTphzNChAvcW5uEewwcNFJo2agIrktx506YKZsamMCVUAbZt1QomhqYYOmCA0L1jJxkoZaDHvf71MXXcWFiamaFWrdqCdSO6pvXrizq16gj1tOqhZ6dO8jhjbmImfZBZfJkFM2dpCupkSh09xkV130aHOTIskISPHT4cvUiGGY7+svSqOcJcMMdUjhALIsaKIFcW4tbNm4lYql0mDPV1YairKwMwGJ48x1FhS/oeY2ygK90dfvmFF0M/S3SWf56jxIy5kQH93G+ayXccjeWiN7VrRD1aYLD0cqEbI3JM0sqSy3Cnmlo8eKNCeDlazM/RvB59zQM8apDLMPxYZeHlryVPmPOGiZ9IyH/68c99iFWUKLHSi/jf1o+4Y9t2ciAwpmamGD9yKKIDLgn2XbiwjqfFGAtzp0zDhaNHsH7JEqGhpRVsWtni+F5H4fTBwzi85yAeZGQISqu1RE3RXCbLcEJF+gTBBXU8rlmNEDPXQ6/K9BmGV7TyBqZVBGNo3BD29sOQk5Yk7N28BhsWL0CY7yXhye1MOO1xxIrZM4RV8+ciLS4KkZd9hdupSXSheEBvTBvh/ImjSAoLQIjXWcHv7HE4792CY9vWCKe2rsajc474/CBF+FL0Ek/djuDptQAh0NsLly6eR88eXYTMlFh4nTmACyf3CGuXzEFzSzOMoxMDcyM6EhOGDEUr68YCC7G+rhYdmPWFetq16Y2rjVp0sDIsvDzKWatuTUFHW4kQq10kuOVJDR7vXNFlQhYOtJ206DmMpZmRpG60sGoocCEkb08tkmHGmATZztaO5HaAYGFohPYtWmBIrx7CUJJim+bWaNqkmTBk8EgMGDBM0iYYT7cLFUV1ZQJfvB7fzZGRzUyolxdCfS6R/HoJgW7n6DEPOrb8hRh/H6REReJmMg9toYUTCbGM9b5xQ0iOCJMJih1pZczs3ryBRIJTJvIFFjSmY8vmQrivr3SXqFxUx8M31KI6luGXDx7iWU6O8PweCfLdr3DR3esnjzQCqgrxh5JCQZW38nKeUPaRhPwDsm49hqdvlMBC7H0pFAcPuQkLl9CCcqcTnM/4CO3pBMcnYp6GyDRr2pS2oQuC/L0FLno4Rcff27JygWWYo7hq+gJ/fMyRWl4EMMUk7yy1xYV8y0MkCkmS8ivB0kSSzPJEqGIsUsWCzCJGUq2Owi4WIebXUoRYHnvzhmS5SENZEYtckcApKzwt8Ksw822pBpHB0jJFFCvgx9Tvs0Ar0eGv0llIv9PjN2VCemqWDOa4lXZLyErKQsHz5/8yIS4nIX/38TNKafHBvPv0WSKT376+GsFmgeXUgiKVQt4mtB8q4K9L3hRp0KQj0D5iiohC2dZvhBLZ3sWa7Z9P+yyPBbdiQaMIsSLKCsrip4humcLXLMMvSIRfCq9o27x4+gQvnlRAQvyhrAgf3hULo/v2QPWq1TFtzCDh9fNc2odv4bhxjTB2whwS2qWYMWe5MNthNeYuWIP5SzcKa9bvw8HDZxF1LVu4nnQfkXF3cNw5SJg+ewfmzN+DFWudhXmLD2Pc1O04edJPyLn3CjdScuDq4i2cd/PFBfdAxEQkCvwpReVj4QMtniQ1pAKO6D9LjkJvq0aCtU5tmNL5sfbvvwkmtaqhftWqaK5bR4jZOBZPSEjfpQQKXDhXnOiNolhPoSD6IgqJorhLCtd9URBPwktfM/mxJMARF/Ai+pKQn3BZBm/ksSQTr+J88DL2EnKjPYSHgU54EnAUOe5bhEc+e/Dg4iY8vLhBuOnkgPT9U+G3uK8wqY0RuphroYtZHWFwc13M6GSE7UObCaemtIPbnM5021ZwmmyLvSObY//oVsLGgU2wsk9jTOhgIpjXq4EGdejaUO13heokNhwt/vU3gaX425QJVYoZlmS+jnBhHVO7WnUZHrFxxVKhOQkpR2iH9xsgdLHrKCkTPCyD4SEUcyZPIik1ERbOmoFenbuhmZW1MGvCBNg0a4nWLRUmjx4j0smpBMz0iRPQQKc+OpAUMpNHjabrohm6d+kijB06DEb6hmhIks0smT1bOlM0MrcQ+ve2l4EeWnXqCUP690WzhtyFQUtoQE7BaRk62vUq0EYHOid368DT4uzoZ7RFoIcN6i+0a9WaHtOi32u8wJ+KVx7M8c8ixCzCE0mEmQmjuB3dcJlQp0ypU6bQ8cANob1SOKdJlyBYgNVocTsSfI4Yq0Js06yZBAjV6z0H1Vo2aQTTBg0ELrDnARw83pnhTiuNyAEa6NQTfqgocOOBHAzLLqdRcJCN4ZQZtbMDw0E33bo8mU5ZYPHY5a+FbkqqBIuu+ok0t3yT9IZKKRJcVMevy/AnFr/8/MfpdpXFV8aI/1UZ88zwa/xJWCvxb5Hi70L8XYi/C/F3If4uxN+F+LsQfxfi70L8XYj/Vwtx3bra0KlXX1g2dzYunjgoH2MwDfT1pZffeNqpzPUrgRg5cLAmSb1b+67YunodDuzYKSxxWIL5sxfjXnqawD2IRYATEwROi5D2apwvTKREx0jesJoykRwRgbgrAZoDVsl74jwoJUfGolErEreRCPJwEdxPHYbb8f3YunSR4OdyBqvmzMSGhQuFdcTudeuRk3pDuJeZjruZWdIejmndoi2yUxKRFR8hBHmchTu93ondG4Qjy2bj2spJeLB/mVDiexilKcEofnRLaN6ETkiLF2LezGnCkH69kZEcgyCSa+aC82HaPstxxddDCCE5jA8LpjdCW8HC1ED6DFuYGAqcPsEHoNqPmMcys/ByIR0jhXVafPAqbdV46EZdTl6vVlX4nXtw0ptEW1It6kiCfa0a1en3bCQYNjAUIdambcsYGZmgS8fO6GPfR+A3VRd64w3o1kUY1sceVhZmJG7NBS6qGzhgOAb0GyoE+vjj1s3bJEVvBRZi/oj+sut5wfv0Kfi7uiA6MECI8vcjCb6MsEseAg9iSQ4PQ2psjHAjMpyOmXjNIJekyFCsdpiJDnTyZPbu3EoSyv1g8wWW4dKiQti3bSncvsG561/7EHPKxGPOI85RiuhyHzwgSIglbYKHdCgFdurgDuV5Ofjw9q3Anb1EiEvfCOqFWi16e/f2I4nQW6Sm3BHCw5Jw2S8SZ84GCKvXHyCJOAiXC8HClPGcR6yFmjVqChZmDWlh6YCMjNtCexsrkpZueJX7SuD/Bwsxp0kwLOMsxu/elQlvSF5ZsN6QmDEFBW9oocBipVBA+yL/NSHpE6+VVBMW5AoK81mI+effCCy/PBykiF5XgR8rko/1BRHhkkoUyUf/nMsq+ay0b5ivQsz3OY1AgVMO3pXx9xSBflchxJVFtYhe8xlJGsNDOnJuP8DtzDtCNgnxaxK9ytL0X/mnES7Omf7yjz8gr/lNVzc1B5qFuIi2B28ToYhTIL7+3UxpxbZg+Hu8nUresCjzscrizD12K+SZKKL7vJAR8tWFjLJ/eLEj+6NCpt8UvEYxL2BEivNEiDlNIu/FS+Hls2ckxE+RS9uIef7wPr58LMez+9lCY1MT6NP5/uSeLULJmxI8ufcQ86dOE6bPXoo5JMEqC5ZswPxF67Fy7U5h67ZDcLsQiGsJd4T4xLsIjsikx12FqTO2YfkaZ6zecFaYMWcfliw5iOTE28K9ey8QGZ0Cl7NewtEjzvR6AXj24LGgLEa+Lkg4ZUJysTlVicjPfYZ7kf7o0dBSaKWnBcu6NSQ1gNEiKdatUgVDW5gJKQdm4V1aAD49SBA+3IyUVmiFUa5CfsR5wgX5UW5C4TVPvAo/h5ehrkJuyDm8CLuI52FuwquYS3gV60tiHCBwPnFutCeehroID/yP4lHAMdy7tFPBfRPuuq7HgwsbhOwTC5HsOBFhawcLjsNaYnYH+l2b6gkT2hhiTe/GOD3ZTnCf2wUuszrj9DQ74SRJ8b6RLbBlcBNhQXcLLCSW97YSOjXShZ15PTTUqykYaNVENZKk2iTGDAtLZSFWpVgVYi5gr9y2q6GFBUlwIylcY1YvWgiTBqbYsHyFMLB7H7Rp3kKGbzBmxmYkzLPQr3svwcLYBOuWLIM1iTTToZ0dVvBsA209oUv7TpJCyD/H9OzcBVPHjUd9klymV5euGD96FMk1z0owQ48undCnWzcS2wZCC+ummDRqBKwsrYRWTVtgoL299EpmateuQ9fkPmhH1w6GgxBGdI1T274ZGRhBt54OenTqIPBoZB7nzHnHzJhhQ6Ud7awpk4V506dJqgQPJ2O4oE7tQcz8UyEeNkyTQ8wSzOKtXv87tf02f1hJkVDvt7exQQeb1hph5iBePbp+cGol8/PPvK9+hpW5qcB5xRwU+4Vzdwlujcapl/q0GGB4CJg6oEOGdPyFew1Xh6G+jsDjmPmY4NZnDMvsX0iQdcklGG69xjnEahs1llkZpvGjkurAAl6N3n/cqo1RZbdyUR7nMXOuMsM5xJWFmJHXpGOR4SEd337/3w43s542epywgoTYgVY9NavXFEwMTLFn81q4Ht4jcOeGNi1aoRutDJntK5eR5HijZXMboUObDnCYtYjEJFngAjpVilUx5iK6jDjuORsvOcNSTMf9h4lkEqKr3h6oWau2wELMEU81P9amQ2d0aN8Rq+fNEaxNjdCHDuRV82cJc8ePwlqHOVjvMFfYuHgRDm3dgueP7gkvnj6E76mTJMYZgoeLGyZOmIJgH0/h4e1MEriTcD+xR7iwdQGC5w9B0KQ+QurycSi/EYC/v7wpjJ+wADa0KHB3cxa6dOqCEUMHI/FamOB34RTCA32QnnRdCPC4SBegu/TG7ihYmhuiOkmvTp3agn69ujJIo1aNqgJ/zVJcm6MgIsScT8z9iZWOE9ocPabHuFCL4efyylFPT0cwNzKEVu1aJLUmQj06oP9GB62Ojp5gzH2HeXoOrb4ZSxNjEs8WGNC9qzCCTiZmxoZo3dpWGDZsLIYMGYVBJMVMkLc/bt68g7K37wQW4jTav0EXLwj+rrQwcDuPYC934Yr7BVx15+4TyqCOuKBAEmHOI48XMhPUwRwJQgItHjYuWSSSzhzeu1Mko4CkgOGuBC+fPEK7Jo0F7mv88CZ3llD6DHOXicoR4tz7FTnEqvzep+Pi/kN5TJNbnHMfRS9fCkoV/xclykaoF2o135XziDkHMz+vWEhOzEJQQDQ8PIKF3Y5nsGjZdhxx8hI2b3aUXpE1SIYZPR192PfqjhsZt4T5s8ahkYUx0hPjhA8feUgHF1YpKDnMfydJfi+wLBXk0bbIZ/ktlG0iUcbXBQLL8OuXech79VpB7r/6w/0CkuJCEmlGop8aGVaiwyyAkutagTI0QZE5vl9ZhFUBrizEEhWugKWYb0tLygTOQZbitEqCy5Hv5yTDzOOnFYM5su8ImSTErx4++P8uxKrYViCuKyjipRTOfRXkf3yTN6z+k8IuQiK79Pez1Cpiy4uCMpSw9MoCofQPsivCWxEpZooZeVyNuLMQ82KGFyUsxCzCHBFWUCLLSgcIppAXgnm8j3mRQ0jeMO1POlaZl884QvwMuRXkPSPJ/McXXPU4KdTTqgsrWoTz+4p5R8duAi1K1S4zLL8Oi9dj3qJ1wvwl6+CwbBM2bj4gHDrohPjkO7h+I0eIS8iBp+91LFt+RJi7YC/Wb3YheT4jTJu1B2ddQ/Ait1C4d+8lLvtHYN+eI8KRQ84ICorBezoumMrbnuGCQu4uoS4IH9/MRJjzMbQ1NBLaG2qjpW4dGNWqJtT87XeJGDvNGCIUXXPFx5w4vKNzNsMSXBB+Bq9CnBTCzuJlsDPJ7xnhge8h5F49RRLsIjy7chrPw0mMIz2E5+EX6faiZlDHyzgfPItwIxE+Kdz2dMQ9nwOaCPEt17VId1qM7FPLheu7piBh+3hcWTlAuDCrK/aMaIk19o2E9X0b4ejY1vAgEWbcSIadJtji5OR2wvGJtjg4zgY7hzUX1vVvgmX2DbGMZJiZ2tEcVvq1YF6vulC3WhVUr/KrpisA54dWHtQhMiz8qEyoYzGm+z/8qMBFV3OnTCLpbSaMomvbojnz0MjEQti7ZQtaN2uJQfZ9BI6emhkaY/GsWQLn43IEeMvqVYIFfd22JXdtmC3okxSPGzYcfbvbC2Ym5hjcvx/Jdy+hEUku5w73pa+Z2uQEg/v1Rc+u3QTdenqwpdebPHqsYGFsCRsS9F5dOwtmJqZ0Da2NyWNHCk1J7rmoTu3y0793L+jrcgcLHaFvz27oYNsG2nW0BQN9Q+mK4TCTC+pmYv5MJTrM/YcZNUKsCrGaP6wKMUeHWYh7kwwzXe3aK3nD7Spg8aXrmiaXmHOM6X7H1godSI6V56uDPFqTFHOetIHw229VRCrr1a0rcMGdiWF9TUDshx844vuDpkjfpIG++IA6mIWjvEpP4R8FU4P64iBqTrB0mSCRVbtOcA/i2lzjVJFjLD2DK6SW4QK/GlU5Ov2boOYM/4H/8/X1qpDTsRj/x3+wCCtCylHfr10luMvE1y4X/yNyvHD6TMQHeQudafViqMcbVEeYOXkidqxfjum0amN06ADs1qkH9mxcL3idOk4rMSu6iDcRxgweCzenM7iTliLcTE4W0VFTJliIWYDU9IjkqEgZzsFpE0J0FPzdz6NateoCv3n5YwC1i4Jd115oTwfVtDHDBa6I1KMd36Vda2H3uhVYNXc6ls6cJiyiFZ3r8WN04cgVCnKfSRHfxRPHhZvp6Vi2ZDFWL1koJNHvkHotHEEXnIWA7XMRt24SouYMFSIm9cfbGA98KXshOO7cj5Z9x2Dg0GFC0o0bsLZuJtN3mNiIYESHBuLhnVsCF9U9JiFWG4sbGejKxx4sxQyPb+YDl9upMRwdrk7wLaNVhwvruB2bMqiD4Sgxj2Bl+Dk8rU6XVoKMoZ4utGj7mJsaCrVq1pSIu46OrmBkbIxePXqiK63EGQsS4nbNm6Jfl07CYPvuaGhuAds2dsLwYWMwbOgYDOg7VAjxv0JCfBtv35YLf6eL74vHj+B+7LgQdOECgt09EOHrK4Rd8kQACXGkn49wPfgqbkRFSDEdk3Ytho6Ta7hFiykm9moQFk2bjDZNmwrHD+9DKQlVAYkCU0ZC9fxBDjq3aCLcScvCvQwezHFbeHKLRzdz9wglGpx7j7tMcHrE1zZsfP/F/UfC83sP6LEHKHj+TFC6BnzGp7fFwp8u2B8+keB9ICl8L/C0tYjweHh7hwnHTlzC4uW7sHPPGeHkSS9JleETF1OXTmItmrVAcOAVweXUMejraOP8MUehnLsecFeIDwpqKofa1quEhJSFVgNJUz6J8OtX+QILcR7d5pE8Mcp9lmG+ZakqkNQTVbgU6VKizhJ5ZkGWj/YVuVOionRbzBPdFDH+Y4pEZTFWYCEup8US804K6ip9j+S3chEVU/62FM8Ki4WHz17hTvZdZKRkCalxKcilfcbjtBmR1sqiq3rwN/vpz1REIit+gm/5P/U1VdR/ats0VYiLRGS5MI7/bhLiCkppMcCfYGggWebn8XAVRpFolmZFpove8GuVaIS4IJ/3VYEm5aWwgBcr/Li6j5XHX9M+FEiGmRe5L4TnTzg6zFFiFmMexvESXz5/oHPiFKFWtZoY1K2jfErC8LHreuQAJoybKcxbtJakeJ0Gh6UbsWzlNmzZckTwuOiHnIf5SEy9K0TF3aSFXgDmzHcUFi85iC073LBk+Ulh6fKjSEy8TcddsZBz+ym8PANx+rS74OMdQefg2/jHl78L6v5Q/31+z23Xvh7vz+7chsv2rbAxMhYcurfGloG2GNDCSPi/7L1ldFT5tq9Nd7NpmsYh7u4uEAgJEUIIkECI4U6AENydQKBxa9xdGnd3dw8JRInh7uz9e+ecK6sS6H3HOfe9d98vJ2E8oyQVSlbVWs9/1hRtOhi3qOWEbBJZhoduPCcpfnpooVB4YBEKSYQL9y8ScvbMR/bueUjfMUfI3Pkn0rfNwv1NU4WsnQvwaP9yPNixQMjcvwJZ+1fJKZNDcpy+bxke7Fko3N0wBbfXT8HN5aOEKwsH4uLcRJydGa8wuRP2j4jEgRHNhL96h2AeCfC0KDdhbktPrOhSD2u6+QnrevpjWWdfLGxbS1hATI9xx0gSZ2ZQqD36NbBH/1CFEeFuaO5uClu9aoJh9Uqw1KkKrSoVhfLllbG8JYW47D+KB3GU5bZrIsZ8fTno6+igQb26mJE8QbA2NcfowYNIXhsKviRtE0eNhp2lncBjl9tGxaJOLR9hRP8BqO3hTSJXR+hG0mhqZC6pD0JMLEwNzdA/MUHw9awl0+jaxsYKwX4ktRY2ilgSdb1rQ1/XCD06dRZcHVykiM7bzV2IbNwURuQv6vGVB4kYGxrB3spGaB/bQibW6erqCt6eHpKqweLLaNfUEQHn4j7GQM8AFiT47Vq2FhLjlUl1asqE2nJNFWJVhjkyzPAo6tYkxGpRXf26HOmtrSmaY/lm4Q30UQioo06mY1EuTqVQUybq03WG9JisjE0EWzMz/PYrTx6sJJT/9Tf5VpiLs5kqFSuLMKuCy/JqaWwIe0tzgScbKkKqRIS5KwVLqnb1KgIPb+HuEmVJShmWU06NqEGfM+Y3/n85ElyGRZf4WYnwqsLM304rUq10qVCEmP+/XwT+/7j1mqbLhIjv96kUfJ3alu2/K8T/R0V3pUJcKsSlQlwqxKVCXCrEpUJcKsSlQlwqxP+jhXj1rCky35vR0zGQr0B4BCKzfe0SdGrbkt4U1oKjvSvmTp6KUQMGCN3atYOpsSWaN44Sju/eI8VQ6uhmLqi7VZQuIZw7K0Ks5hBfPn5cKao7c1q4cOQw1pLA8lcBjLRdk7QJLgj4HSFNo9GhQxcs/XOq4GZnI4JnpK0jBPnUxfh+vTF52GBhZO/emDE+Cc8L84UXjwuk3+3QHglCp+gY2NrYafoc13b3xM2L53D12B5hc784nB7VAUd7tRBO9myBN4dX4VvmReHsmfNo2KE/3BtECSOHDsLwfv1Q+fcqAreW4fGpKbdvCHv/2oSHd+/Ahz6IjI2FmaRFqI2suciOc4W59Zq0X2MxrqqkTjDV+Y1ao6q0ciumKLdYi5uJ80KiMm0TQ8HcmHO1dGTeOcODIUoKsbGJCcIbN5E0FIZTLILoA9skwF9oERZC/48x/P0ChbjYdtKHODIiVjhEEnfvbirJ8AeBhTjnwQPsXbde2LJssYxu3rd+jXBs5w4c3LIJBzatFy4cOaJ5HzBXaUHECxYpviRYiAf37IHA2rWEDauXiWg8efpEeEvy9Dg3C36uzgKn4Dy8dRvpd+4InC4h/YWLUiREiB9wizVFkPNICh6xHJAMM49S00mMM/E8L1dQ++p+fvdSKJYkPv2XfI3+9q2SNsE8f/YGF87dxM5dx4VV6/ZhTPICjBw9U9i58zjGDh9FO19DoUb1GrRQscO8yZOE8xeu0mfMEomdWgksVNyflou/GJYCNY+YYamUNIknSpHh34WYi7RYfJ8osBAznFYhqRXK6bNnLzQ8JxEtPq/kEH+XBlCUGqDwYxHd9wV0GopyiN+9e69I8WsFzgFXixc1QvzuDbLosTMZBc9w51YKbly9KfBgjszbd/DtK/dC/oJ/fSvR8/h/hRRkleiZXOL+1B9VsD+zlJW4Xv358oUHbtD2fUqvBz1vzYJA0iWKkXQKPk+vBSOyy0VzGuj3IsGKUDPPiWdPngu8jTj1Rb3MaSySE16EbF91uwmPUUBCnJur8IgkOCczC1np6cInei1fP81DQ/9aArdamjKoj7yvmIK8PAzu1Qs9EoYJvQeMRd/B49F3kEK/QckYPnIG/pi8SDh37joys5/gLEkus//oNYyZsAI9E6cKw8csRdLEtUjsO0dYtXw3MjMe03vxhXDr6j0sXbgSC+YvFzau34vnJPqavs4/vPafP36Q97naBzuXhHjphPHoTOLDPDq7G0eTeqJnkKfQzN0Op1bPw+fHWcKrs5uQt20qHm2dIuTvmovHhxYj/8ACgfsEZ+2cjdRNk4UUEtoHW2aQHP8pZHJO8K6FyNm3Uri/ZQ5St/6JlK1zhVSS5JvrpuDWmknCtRXjcGXZaJyb07eIPjg7oztO/tFR2D86DnuGRWJH/8bC2vhArOzsj7mtvIU/W3tjSYe6WNu9vrCpdzBWdPUTUWamx7pjepwXRoc7Cf1JhvsG26FPsK0wuJEjEoPtUd9OR+C0Cc4l1q1aUfi9gjKgQ/OVeDklV1gjxCQlv/xD6UHMNA0OlvHeUU2aCEMS+8DZzknTNq0OCWyL8Ah0adlKsLO0wZghg1CLJJhhoe3fPV4jmDyooy2JrbWlrdCC/s8mIaEw1DcW+nfvQcdgbzom2wrdOnYgsbORVmtMy8gI1CY/UYv2+tL/7e3qAWMjU6EBSWdI/fow0uMxxUaIjoiQ/skszYytpRVaRTWnY5qJULNaDQT41kHdWl4Cp0nwPjmO7ofxcnWj6/SkPzfTm/OH/40Qq6OaS4qwKsOtoqLQKChI4Pvyr1NLI8R/a7fGMkzXa/oU/yDEfrQA4aJYEwMDwcyQjvF0HFH7/nI+Mac+cLtWxtXeRtqxVeRCPOInA3NU9GuMSkHNhJqNovBbYAR+8msilPVril/oVCcsWtBqGIl/1A/HL/5NhZ/qNcHP9Pe/+IULNXwaSF72P0hWGaVH8E/F6ThlfykaMa2gyPf3wis9sjl3nZBCuh9+XxKW6Z//08M5uOqySmWeXlJNJpdNGjEEO1ctEixNTWFlbg0fdw+Bp9mtW7IU0c0ihfo+vvQmbIB9WzcJA3v3w+7NW3H/2lWBC6Ok73CREEtBHUcDiyLGPJmOhYgjg8yZA/uwdM5MyXMV+MNLG7JSpSpCk6g26Nd7CLasXiQkkfRamZkq/fiIVk2a4vrpo0geNFAY3acfDmzdimeFecLzx3nIf5iGQ5s2CM0DguFia4OKv1cWqlWphsb+Qbh/5ZywpGNj7Etshl3tQoULA1rh5fY5eLdzqvDo5mk07zoAtZq2Eir/VglxTZqjqX99QVfbANNJdO7evCHs27oZD1Puw9XJUXC2s4aLDTfZNhNMTfSl04SaE8wRX572wjPCmRpVadVWtRJ0a1QXeLXGwzt0alYX+DruKmFhbizwKtHUUB/+dWsJ/DuebqOnpy+YmZkjPKwJfOiDxjjYWqGepzvC6vsJzUKCYaynh/r0mjBxce1JiGMRE9VaOLKfhfg+3rx9L3C+4iVa4GxbuULYvXY1DqidJojd6+jy5o04unOrcHrfXlw6elAzqZDfAzd5muHlS8Jhek/1aNsGPi7OwsolCyTS9vhJocBCnJ+djgAvNyHtxnWkEul37hVxF5klhFiixBkZIu1M7sMMkeK8B0XQ+fz0TLwqLBT4IP3t2xcSi5dCcQGYIsR8mRcCag7xs6evce3qXew7cFrYtJXei1OXYdjwKcK+faewbu1f9JnizxUXPNaACe3Ie9Cik7mfloO45o1Qx81JyEy9R0L8hSSSo6vv8JHk+KtMKlNyWrmPrhJZVCPEymkhyRLD0UaOAhcWsJRwhFiJMIoUc7GdSDR3PnheBPfEJVEj2WNKRoMZtZhOFWCW4jeveUCEgkaIORrMqOffsQwXRYr5uRSJMhfk/SioPEAkPeuRkPnsFe7ffYC7N+4KV8/SPuXUGbzLuS98zrtN3MGnXIUvuXfxNS8F3/LvC3yer/uUc0v4mH0Tnx7dwucPLwUp4qL7/MLdO4gPJF3fSuQRy5amU7Uf9POnShGcIsWvpUMDi/BLOlVQJFj9PUuwLC6e8nuD4WgwwXnDL3jRwb8vkl8W4kLuElKyKPIZbUemaHvSeRbhgvxCITc3H49y8pBFrxWTkZ6FTHr/5pAMM99kcuQxWBrpC2b6uti6Zhk+vP8ipNy+hU7tuiCx9wihV5+R6NN/jBTTCf3HYvS4Ofjzz1VC2oM83E/N0Qjxhi2nkNhvOsnwNGFs8hoMG8n9txcLly/dp+dEn9fHL4Qr529g4dylWLxorXBo3zFlYVOimK7kD08F5EWMOkUxj/bdC5KScfnQAeGfn9/hbcYtpG2aL1xfOh4fn+Ygc/dC4casPriQ3BHpq0YJBXv/RN7uOcjZMUvI3DodGVunIWXVOOEucWfFaKRunCTcWjka15eMwKWFCtdX0X0vG4MbqycKlxbR9YtH4vLSUcL5Pwfh/LxBODG9h7BndHvsG90GG/tHCOv7NCYaYVHn+sKSzn5YnxCChW3rCovb1SFJDsC67gobezfAyvj6WN7VX5jTxhtT4jwwppmrMCTMXgrregZYC30a2GEgSXFDF0PBy0wLgY4m0puY0ar8Ox1Ty0n3JoYHLUgfYo4KlyvOI1a7THjSPnfqmJGo5eYuDEhIQOPABtJPmJkybjQMdQ0wqFei0DwkBE429hg/eoTgYuuEFk3D0bJFlGBuYo6+CT0QUIdzaevR8cYBbVvGwtPNQ3AnAR0xaAAd0y0EWysb9InvBkOSW8aDHkN0RLgM8GBMDE3QqwtPwjMQeF8aEdoQPh5egoWJJSIaNUJIYKDA0VWeXte4QbBgb6MU0EWEhQrOdo7QrqlFUqzQvFGo5ERHNY0QeEodD+bo1aWrwDnEJYW4ZHRY7TDBgzkakwwz3EWC84YDfX0FjhiX7DKhDusoKcdCUcS4nnctEuIqmogwbzsnOxt63HZCJZJf3m5qFwnO6TU2NsbvyauEMuffosyVTyhz4a3C+Xd0+k45Vc9fLLpec/k9wadF59XbMNe/4Jc9qahYL1SoUI4L8pQosSq0v5Yri8qVfhe4y4laSPfvpJd/x2Jc9hcuuCv7d1kt838Q+f3vYkYvGLcWYXh08/RxQ6Q1CMNvDldnd4wY2Ee4cWK/jGzm65j2cbGYNmoMxg0bJjQKaYJVJMyp168Jdy5dFPFVI8Dq+SskPgJHi4lLJMbMmf178OeUqSLBjNJEnKevcQeFyohq3Rnt2nSQbhHM+vmzSYqHoGe7jsK9q5eQn5mOmxfPCtPGjsaMpAl4+bhAeFaQi9wHaTh75KCgp6UFbydn6NMpwwVpET7eeH7vklBwZh/OjuiI7XFBwu0J3fFq6wykDW8lvL55EIEhkejUZ4QwOqE1Uk/vwIuH14Tdi2fBz60W5s+eJZw+eghZGQ9ha2EhuNjQqjm8IdwcrAUewlG9RIoEp01wlFj9CkJNiahRleW4qhTU6WmxFCtwwjxjSSLM6OtpS/s2H3d3oSJ9YCpUqKjpMmFqakJC3BhetPNg7Onx+Hq4Icy/ntCIMKWVaEhwqBAb0waRJMTRLVoKR/bvR1pqOt6++yBwRDU/MwebFy0WNi3mtAke17xZOLxlixTVqV0meAHEnUUunyji5HFaOJ3VvF+O7NiG7q1bIYCLC4hdW/+SEdGPHxcKnDKR8yAFIXW8hXtXriDjjtJqTeEusu/dJxF+qMASnP5QSY0g8jMySYoz6UBbBAlFfmY2yXCBoERjP+Pzu9fCjwdsiWi+f4+c7AKBhTg//ynOnbku7Nh5HPMXb8HoMbOFObNXYxGJgAfJLsNCzCNM1TZDp46fxoqFE2FirCfs27KW/v+Pch8MS6UixErqxKdPn0m8npPEKijFhs80EeAnJMcsxcWCrKRKaIrunijRZbVIkbtUcIRYI3SSHvCjECtpAowix8p55t0bll2SFC6ek6hwkRgXCf17WjxI6kQJIeaJdyV/WDzTaRswGc/f4H5KuqbLxM3Ld2hBy8MbiifJKQsTVWB/THn4/jqZgFb0t8q2ZRH+hvefvwpvPn3F5y/FRX78w6dqESMvFkSENSkS/LyVDisMXyev3QsFNUL8jCSYefH8Nb2+TJEYiyzz+/m5AgvxE75O4QmnSzxlmVS2o2zPEt8A5HFU+FEesrMfCYoQZ+Fxdrbwz399w4aF06SwiPHzcsfdK5fouXD3kq/YT5/BNm27oP+gcQIX1PUhEe5FUswMHDIZo8bPw8Z1u4S0jGe4eDUNR0/fFOYs2IGuPSfR3/4pJP2xjoR6LpYu2yNkZ/Ii7AUK858J1y7Q30yfjw2rtggF2cVjuEu+5urPF1oAKkKskMef4Vs3pHMG862Ir0+yhE/5D5F7ZDO29QwVNnetjxNDI3F1aifh2pxEpK0bg5uLBgp3lw/DHeL++iThxqIhuDqvP85MSxDOzUjEyem9sH9cZ+EYnT/z5wAcn5YonJ4zkKR4JA5O6CQc+qMbDtDpvrFthY0DmmFp94aY1zlAmNneD/M71cccEl9mYUc/rOwWiNXdAgRJlyAR3pAQLKxPbIAVJMLLipjRyhuTYzwxqqmjwCkTicG26OpvqVDfEn0b2qNHoI3gZ60LV+MacNCrLhjX4G8uf9MUNXGUmIvoioWYI3XlpRMD4+fthaYhDTFp5EiB5XfSmDG0WPcUfOlYOar/QJiTVDKDe/dBA/8AaRXGjBs2QgrfOsS0EliOTfVN6Jg9TKjtUYvE1gXx7TsI3m5eqOXugXaxMYKxviFcnZzQtUNHQV9HD/6+dRHbrLmgr2tI0myFji1bCTx4iqfb8QARxsnOAQb6RmgQGCBwqzc9kmIPkmImLCiAhNgYVatWE8IaBEnqRbWqHFjiomcD6bLVvWNHQSLERK/OXQSOEJcsqmMJZikuGSHmASONAgIFHszBIqxGgPlySQEOrKMM7vh3UWPpOkHHQDN6vOogDmmVV/43SbNj3BzspFhOaUTwmwzKqDBoBn46+kSo1Lo/fjWywC/ahgr0+lXQN4ado71gYGaJf+ga4xcdQ6Eco2uEKgamghb97W96xviJ/lawdUeZRUfxy750oZKBiaRAqG3TWDBLSi93oeDUUHVwx49SLC3dfvlZ8/dc9Pc3Yf1PUyrEpUJcKsSlQlwqxKVCXCrEpUJcKsSlQvw/Wohre9ZCdLNmwszxtEPs3lnTB5gTzedPHo/kUYOFAF8SJGNTREZECmsWzcemlcthQC8WY2fngnUrVpIM3xDSrl+XlAkVlmAWYFWIr505QxJ0UgrrmIuHD2HGhHGaHokswyzFasqEX1AzRDWNxMykUUIKSfHSOXMwc8IEYcX8eSh4lIkXJEtMDskPF/epKRMv8lmIU3H22GHB2c4eFkZGcKIPEqNVrRpC7W3wcsdc4dubQry8QY+rb5SQtWAgXu+dh1uJ4cLr7bMQF94YjRoECq+vbsG3tFP4lnVZ4c1jZN25TgciH2HLqlU4fmAPLEyMBBdbS/jX9pSZ5Ay/WSpLP+HfBbUPsfqVA8tx5cqVZFwzw3nGkjZRlE+sJ6fcLs9I0KLz1UmInewdhN8q8IelIu0kDASeLR8VGQUPV3fBwsQY/rQTbFjPVwir7w8DHV2EhoQJMdFtEc2FdS1aCYf37kFaWgbJ2geBJePy6RPYvX6DsH3VCuxcvRrHdu4SjmzbigMb1+MEnWc4R/iqFDIqOeU3TnP+cHHO+e4Nq9CFFl3+nh7C7m1bRMzUHOJ3b9/g4d0bCHB3FR7c4txhHtmcUgS3YEvR9Bl+9JBEOJ3zhTlvmEhLRwEJRAHJF8NCnJeRhdf03mFEmj59wJf3rwWW0ZIHb1Wsnjzm/M/nyM19gvT0HNy7my4c3H8Wq9bsx7ikeQIXJq1ddwDNmrUQeBHK/YitbeyElYv/xNnzp+BgZSyMGZKA128+Sus1htvMfWE5oMfBfPnyTXJ61RxiBZYnRYjz8wuFggIF5Wt3RY6ZAk6lEFFWhIuF+Cl/fV8ip1jagpHUMUp7MUWWlZSBIjlWUyZIct+IECtFlqoIv6PFEiNCzIunt3ybd9Ky7euXL99LEF1mqWMy6DV9kFOA+3fSinhAoleI4q/Yi79q/1Gm+OdfPwixss0495sXFf/EOy6KJAl++f6TwofPeP9RydNm1B9ViFUZfvOaH/s75bm+KTpPiBC/KEZdUKgCrLymSuoEI32jJd3mhfC44JlQmP9E4O3zuOCptM4TCjhd4jGJsMKjR5wykU+vVY7wIC0TD+nz+OpJnvDt83v0aBmOmvQeY3q1i5bexW9fvRdmJI9DfPwA9OU0CZZgHsLBxXT9xwqDh0/DmPF/Yvvu48KVW9k4ee4eduy7JAwbNR9de0zC8DHLhFHjVqDfwFk4e/qWUEDPpYBEOO/RY4GFePnCFTi4+5Dw5dP3gzh+3IScMiH54kXb63VBPr48zsaHhzeFj0zWbbxPvSjc3zwXM6MCMcDfQRgR7ITJTd2xs28T4crMnrhEXJ/ft4h+OPNHV5yd3lM4NbErTk9NwJEJXQVOedg0KBZbh7YUVvaNxJYRbbBtZDthRZ/mmNelEdb0ixA29G+Bdf0jMb9LsDC1jS+mt/ZFcoyPMDbSk069kNTCU/izvS/mtfPF+l4NhI0kwDsGhWHXoEbC9kGNsblvQ6zuFSzMbeuDCZGuGN7EWRjA8lvfGm1qmQhd/MwlbSKBJJkJtNeDi0l1GdjBGFariOqVlOFNDOd3SmFdkRBzuoSdpSVszS2EPydPllTJFo0bCyyDTvaOGDmwv8ACGtc8Eh3jWgpuTq4kxYkyvpnhPsJ943uStNoL8SS1nMpgY2EjDO7dC5bm3AvfX+jcph10dfQRTOeZmObNpciuYUCAEENCbUgSFxocKPBQDT26PadWMD06tIexoSmJsK3QLKwRzMhX9HX1hSB/P/AgMq2aOkIwSbKXqytMSOaZqlWqonFIiKYtGxfZWZiaolVUCyExvisSunRBAokwo45tLpkywahFgZw/zGkT3DuZ4UEcJXsPswwH8OJBFWKfEmkShBTS1VGGdQjeteDr5QFXem5Mxd+VISpqjRGnTXKKpLGBrvDzbxVRZssd/E6fS8bV3JhePx3Z7ozkj1esqulDzX9vbKAnqTQMD/LgvOCK9F5hOE+5uoxqLiqC40I3lzooc+qFULZhHLQ4mFdZGdWstmRTZVMVYbVPMfcZ5jSJH6VULaLj++CRzj/+/j/KtKTR2LJygWBhag5LC35zWQv9unbDvCnJaB8XI/B0mHq162LzyoXCtPGj4VvHF2bm9kKXVt1w9tBhpN64Jty9ckU6S7D4Miw5LL4lBZmjxFdOnRAuHjqI5NFDUY4/qCzERT2IOe+VcfcORvvYNugf30WYkTRG7mPZnNnCtHFjsWjWLBKj68KVM6dQmJOpEeJn+Y9w++JZ7N28QRjaowemDx2G2LBQwYxWpA76+tjevpHw5sAKfH10F/fnDBHSaOf58dgapP/RXXhzbAOunTiIIA9XIWP9aHy+vBWfz21QuL4fXx9n4OCmNUJ4w0b4a+NaWnnqCS62VvD1dKM3sZ7ARS/c2FrtqsFSzDnEVaooVORIcZUqypSaiizLVWkHoiUizEgesVZ12nbmAneeqF6tKqwtzYQKv/Nc89+k/y1jQTujmBbRcCRZZhxsreHr4Y4QWrkq+EKLPgSNG4ULUS1aIyqqNWKjFY4fOCQR4g8kEgxHiLlQbvOSRcKmpYuwa+0qyRtmdq9ZjYN/bSIR3i+c3L0TZw/sUwotCc4pV94b54UDtI3aR7ZAXTc3Yc+ObZLbylFQhvNRH9y5iYiA+gILccbdFGSlKGTSeb6sTqLL4cgwiXAOnycKMrIlIpz/MEvITc9EQVYOXpEMM1+/fMLmeVOwZvZUIY8WUxzRZKlSetYqMqb2YU7PyMeVi7eQmvpIOHPmBjZsOowZs1YJY8fNxdLVO5HYd4hgbGSIqpxHbGIqJHbviGu30+lAECiEB/niMQnQh4+fBI4Qf/78RTOogCOcHIHVDHZgoSVU4c3LK0B+3mMRK1V+VbESuSr6nUaIn7xQKPp/GCXKqSBdEjhn9tVrhZccGeUBFEpfYRFj7iJRJMQivu/e03ZS4YXTx+Lf022/fP78ndCyIGdnPhIeZOcjvfC5FNYxt6/fQ2FmSSH+uwT/ux9NrLjoftSI4/NXb/H8zQcUvnonPH3F25H7PSvbV/6Wbs95zYzIsAi/ivo8i+HfK90mOL9YXTxw5JglmfOKOUL8UoGL6kSWlcgxL0ae0DZ7wgM3iGd5ebRwS8GTRzlCQU42MlLuI4cWdkzeozzkZOchKzNXyKT3czq9rz+9ey28KMiEj4OV5A4zS6dOpMf3AfnZuUKfnono028UBg9NFgYOHo/+A8cRScJQEuKJUxbh8MmbwplLaTh++jZWrT8uJPaZhsR+MzEuea0wZMRizJy+Can384XHBS9I3J/i7u004eKpS9i0fitSb98R/lWUr128gUpsNLAQf5T3x7ev34TPT/PwKfs+PmXdE97fv4y8/Wuwe1BHYXTTugiw1EOYrb6QWNcac6JrYd+g5sKp5A44P60bTk3uLJye0gWnJ3fB/jFthB2D47BlQAy2kAQz24bEYfPAaCztGS4s7BGOufFhWNBdYUbHEMzp3ACzOgYJs5lOQfijZT1hfLQ3RjbzwKBGzsKIcFeMCndBUqSHMLtNHSzpHEAS3EQ4PCYae4ZHYOuARsKOIY2xpkcQVnYPEBZ29CUhdseIxk6CCHGAFTrWNRc617VEz0AbxAcotKlrBg/zmhIlZrjAzoCkuCIdAxiOLhb3Ii4ngx5CSUT7du0uBNaph6F9+sDB2lYYOqA/6tfzI9FsLHCnBwcbRwxO6CUEcE0RSXC7lq0EHpYR37EzAv38BSe63K97D3g6uwvuri5I6NZZUxTXoXVrEscG0NcxFNqSc3DE2cneWYhuFoEAXzomaekKLSMjUdvTEwZ03GaC69dHs4ah0NbSEjxcXNCkQTD0dA0EQ0MjBNHjd7CxEwwNjOhx1UPdWt5CzWo1SaDNZKIoU4cE1NjAGA386gs9O3WUvGGVH4VY+hDTwuBHIW5Kz4kJ8lUiwJxLLPnEtX0UfDi3+Ie8YVWaSwpx7Vqwt7ai4zx/G1xTvmUWX/itglC2bDkJtNlZWQhVamqhzO4MlOuRJJQn+dSuUZ08z0jg3tRlhs9FmRHzhRqO7vJNczUOxFVWOk7wYA6ONDM//fyT1DEZ6dQUfiUZ/1nPFGUOFAo/RSegvEStleJNnkz3Yy9ilk61qLPi77woK0f/90/C3+S0jBJh/n/ah3ja6OHS7JmpVqU6nJ3c0L4lJ4e3wond2+Hm7AwPN1ehUWADTB09Fgn0QWCahoTC3dkNHVu2Fu5eulxUUHdN4NZZnDZx49w54fbFS98V1bH8XD1zuliIjh/G6GGD6cP5q8BCrMih0nUiokUrxEXFwMenlhDfrg2mjByF21cuC0vmzKJV7SSsIRlj7ly9LKNNnxXmCk/zHmH2+CTs3rBa2LJqOQn6IZzct0to2iCIhFgXw+s5C5cGdcK7Q8uQu22+8HBGAv75LAtfsm8K37Ku4+v7p1iUPEzYP6E9vlxYja8X1gtfzq3F15RT+PoyT9i9bgVGjxgsqzDGx80Z3VrFwtxIT+A2chwVVoWYFwMsxWoKBU+dqUQfAFWIuY2aFoswF9YR2tp8uZoUxzFaNXgiWlWY05uf+bU8j+asBGNaNTPW1jZo3bIN7GzsFawsUYfEM4Q+uEzDevWk1VvTsAghNqY9mjWLQ6u49sKZY8eQdv8h3n/gTggsEl+RdvM2/lq2VGHJYjpdjK0rlglHtmzBgU2bcHCzwqk9e2Ugy7UznCZxFucP7cc1ek9c57HexF/LF6FjixYaQT+0fy+ePefKe+Xr4w8f3iLl+kUE0U6RuXeNF0IlBnNw67V794sjxGnpIr2arhIP6ZSFOEshL5NH3mbj9bMnwicS0NEJPeFbK1CIpJ3iywIeHfx9ZFIVrKzsQhw/fgk3bjwUbt/KxI5dJ7Fg8TZh5MgZmDlnNabNUnCmzxZH8NXR6fwV3rkL1zHtj1ECF0JdP3eSZOyLwF0auJBOjZgxamGdWlynyC2nTTwjIS4kIeECLO5G8Bj5fCoFdvy1+1O6To0OK7d/Ip0OXuDZE+58oBSESZGdJnVC6bCgthGTtIGXJdqtFaVLqBFh5TxHihVYhpXzSuRYhPjT5+8kiFNBHpHkMakPspD5/C3upjwQ7lxPQd7D3BIC/d8T4h9/Pn/6JDym51f44g2yH78U8mkx8ILE9Uch5pHBzBvujvGdANPz5NN3Cmp0XI0YK6kmxULMLdf4VJ0s+OoZyeK5Uzi9fbNwh/Z/V/ZtxZnNq4Vl44dj1cRhmDeop7BgWCIOrpiLmwd3CBk3L6Eg/QF95m4Jt2n/+/DWLXz78lG4dGQHdKpXhZeDjXBy9zZ6Hp+lvSTTuWM8SXAShgxLFliIBw2ZgOEjpwhcULd67XZcupkjnDx3H0dO3Kb38DahW/xEDB6xCEmT1gq9B8zF7l1n6H33UuDOEqn3H2HvzoMKuw7j+OETMrGQ+a8WNJ8/f5SFyD+/flGgBaqMcf76Wfj28S2+vX+FvPP7hO6+LrCuXhkNbQ2FkaHOWNLeHzsHNBcOjIjF0TGt6DROOJrUFkfGtcGeYdHCqh6hWN6tEVb2bCLM7dQAi7qFkuyy9DbAmGhfDGtWG8PCvYUxLepgAonvxFa+wtgoH4yPqYuhTdyE3sGO6FbfBl39rYX+JLAjmrphXKTCoi6BWBUfjINjY4VjyXHYMbAx9o5oJmwfFIZ1icFY2s1PWNDJF9PjvEmqWaxdMTDUUYrp4v1thI6+lmhXxxyd6lkLXf2sEEALAxeTmoJpzSow066K6pUrCCwtfJxVu0zUIIGq4+WJYf37CPVJiCMbN0afHvGCo5UDBif2gguJLdOJJDCycTgsTS2F0YMHk2g6oCdJLtMmKhbWZlZKVJXwdnVHo6AQGVbBcJFdkH99RIdHCNo1dSXtIES6RfBgDVt0ad8KtTy8BG6BxlFf9RtNbZLibh3b0bHLQbCytJYUD57oxvDwI+7mFBURIdhY2MLJwZFkt7bgZGdHx0gdhAQGCF7OLnQMrgFbOg4ygXXrwZUn7NXmTg91SIh5Yl3n74RYFeGSQznUNnGSMkFE0GNigjldog63VlMI4lMR5LqCGilWUyrUKLEqxL7kaMYGhqhahdMpK8PW0ly6TahF9SzE5bmo7rffBTdXZ5Tdm42y3ccr/FRGJFT1CQNyhXLjV6HMiRcKx5+hzNQtqFkvVDDX0VK6Q/zCaRCK2HJRpjqZrurvFVDF2AI/HSoUypAQl/mJRzArk/B48h0X93EUmFEjxiVHO0snivI8IbGcTMb7m6ASHCVmuMMEd5r48ff/VykV4lIhLhXiUiEuFeJSIS4V4lIhLhXiUiH+Hy3EHeKaQ09LW7Ayt8L86ZOQPGKQYGVhKbnEkU0bC7MnjsaG5cs0bU8C6/qjW4dOOLx1mxAdHktie0aKmxgWYiUflMc3n6eDuyLCqgBr0iaKBnOwEA8dMEDzFQ7nD4v8Va4qxPcehH79B6L/sGGCra0derTvhLFDBwt3rl3EsrkzMW38OGHn+nV4mv8Iz7nlGpGflY7x/ftiwtABwqlDe3CR7vNZfq5w5tABRAf6I7GOg7CjUxM8mNEH+ZtnCKlTuuHrvWP49rZQ+Jp9Q/KMM87uE1b3bIbPu5Px+eQCQYT41lFJu2A+vX6CzQvnaFImfD1dERUWAgdrc0GLDl6cG1xSiNXzDH8IOG9IvVyN3nAykKOob3GNGizE1WnnYC5oa1UXUfb0cBXKleNBJ5VgZGQimJmao0PbjtL8nLEyNYGfpxf8vT2FEP56qkYNhIdHCrFxtANsEYe2rToI50+ew0OSzGIh/oYDf23CthUrhK0rlmP7yuU4smO7sIe2x67Vq3GczjOn9u7G2f37cO30SeHKyWOycLpO7yFmIy1qYho1gg+JI7N/904pHnvy9Knw4cM7XD1/CjG0k2Qy7t5H+i2lkI7h4Rzpt+7R+TThEcl7bnrRAA6C84VzM7iQLkeBzhfk5OD182fChzcv0DIsEOa0eGASW7XG2xePleKsEkKswkJ5/MRVHDx8XridkotDRy7L+FomefIyTJy8FMtX7hHCm7aAdg0uaNUWnO3tsX7NGhw7clQwM9LFspnJmrZ2Hz5yusEbTVEdP4bPX74o7dEIZQAHt+ZSiq/y854g91GhBpZjJXf4aRFqPjEX3nGLNpLqZ5w2UZxLLKkSRUL3godKiOQpl7mQjIvK3pL8CW8UUXwnoqjkCkuKRFHR5TsWYo0U8+3e4/PH4jxS/uH3UF5evpB6PxOpuU9wPytfuH3tDgkxL0iKX/P/Pz/qKOwceg0ySIIzaWHA5BcqfYZL5hDzfXx4/17g5ye50O8/CZLbLee58PGj8rxlIfB9+oS8LsQLWrAUpKfiBu13mJ3zpmH6wN5IjGkmdGgYjAgfDzQrIszDBQ3dHeFrZyHUsTVFsLMtukYECctH9cGmKWOxYUqSMKtfd0xPaI8bR/YLUwfHw9XKFD3jIoTsB/dFiFcvnid07pyAAQPHahg4KAm9+47C0BGThOQJc3Dt+j2kPiwUDp+4hS3bz2Lg0LlC956TMHLcCgwdtUQYPnoRLQLpM1TwSsh99BTHj57HzD/+FPbtPCKFf+r7F//F9uNFyyduvVa0PbjV4FdamHx7+1z4nH0PLy/sxr1VyULK0qGYlRCDRrZGwqRwd2xMCMPFyV2FKzN74NiY1tjSr6mwbUAEjpMU7xgUKSwmQZ3Vzl+T8jAhxhfjSYLHxyqMIeEd3NQLg5t4FOGJAY090CfUVejVwAVd69uje4Cd0LGeFdrXtUQ3kmGmbwM7jG7mionR3sLcdr7Y2DcMZye1FQ6PjcH+kZHYN7K5wFK8Y3A4SXp9YWEnP0yNJSFu6ir0CbZDPN1H53qWQse6Vmhd2xxtiujqZ4uYWtZo5GwpuJsbkRBrw4D26czvFX6XWp1yv5YX6teuhaRhA+FobStwIZ2TFd1H+45C87DGcHdwwdjBgwQDHQMMp+NxYD0/oa5XbQzukyjHZSaRpDHQxx+ONnbC0L59YEYCFRbUQGgXG0vHIDP6f8OEYH9FgjtwcRrh5eopt0/s0lngFrCc2hfbvLnAKZymJNWdWsUKXm4eMDMxQ4umTQVXBydYmNLnho5lTChJr46OLjzdXIWw4EApUtPVNRDqknTy8AsjfQPB280Nnq5uCA8NFRK6KDLMIsxIQV279uhEIqzyoxDzafPQRkIDeo1YgjXiS7Ir45uLECn2+b4PMYtwXS8vgfsQG+sZaNrScrqLqZE+3JzshWpVqmjSYJjq2rooszMdVfpPFiqUJVEtWzwow0RXG5WnbEKZo88UjnDxHZ2eei38suocqkS0R7XqNQQZzvELi6wyapnHM1enbfLTwULhl+he4D7E6v/P0svt0yqTqzCVSKD5+pICyrnC5cpxqz+lGE/Et4i/yWqZorHOfB//KTE2MzGFLYkvM7R3T0wYMxhNaOMzBiRt9rYOWPPnLIEjnPwGdnVyFwYlJiKZPjSDevcT3Nx8cObwIdy5dFm4d+Uyrp8/ixskxQx3EFAEmU+V89xd4sKxowpHDqBfj+7KxByiPEc06YWsUk1b6NCjH+bOW4xpy9YLjUnOvF290LdrF2F2chJuXDqHZXNmCH9OTMZMYsOKlcLTnCy6v4MYFN9FmDR8EG6cPY289AdCwaMM7Fy7GK1czIRFkX64MrI9CnfME55sn4O326bha8pp4cvd4/hy7yS+SA/UO9g0qgvy/uyKj9uShE+7puPj1sn4dHKT8DUnBfkP7qC2o43gZGtF0lmHVtUWAs8R5yiwWlQn4luBT1mMK6BSUWGd+nsewqEO8GA42sjDO2xJrhltbWXgRy1vd6Hcr+Wk04QZrbQZK0sbdOoYD3M6z3DekZezIy10agsBtIOsSTvO5pHRgghxVBxat2wvnD12GpkkkhylVCKXX3Hx6CGsmju7iOnYumq5JkK8Z/16HNnOU+t2CCd376JF0AlcPHZMuHTsiESGr5zivPJTWPnnHLRrFqGJEJ+g33M3BFWIP358h/MnjiDUt65w/8YtGcyRyfnDKWphHRfVpQkyjCMjkyS4iPRM5EmEOKuIbDx+lEvS+0J49+o5mgX6anLOZgweis/v3+LHCLEKvwYnT13Flm1HhLMX7+H8pRSs33xEmDprLYaPmYMVq/YJAweNg7GhgWZynYWZFUb17YEr11OE0ABvdI4LhzqYgfOI37x5LXnEai4x5xFz3i7DPW1LDnLgHrZ5eY8lj1jNJS4pwApcaFfUdeKxkj+sKarjvrnPFRFWUCKerzg/tihPViksY+lTo6eKFCriWEKCmQ+Mcr38jm7PYvo3Ic7NFe7eScPtew+QVvBSuElC/Cg1W8k9VfNP/zd+JKZMf/ORpIrJKHxBop2HR7RwYHIJFv2SQsynxV0+uChQkV/mwwdFijVCrMmRVgbVcMT89Su6n7u3hPNb1+Ds5qXYOmec0C82Ag1ru8PJ1FhwtzCDac2asNLTFYyrV4cJLXL5lDGlz7KNrhaMa1YT6thbYkSHKCJWGN6uBaLqepBE2wsxAbXQwr8WmtTxEJbNnImsB1mYNGqEkJAwCIMHJ2Ho0GRh2NCJEiUeNnKysHjhSmTmPsO1W5nCoeO3sGTVQST0nir06TcDY8avQr9B84SFS7YhJ4dz2F8KKfeysGHtNqxYukE4uv+ULCw0n5kfIvzK9cXFkpyvz72UX2dlCPdXL8bV6cOQsnKmwqqp2Bgfhl0kt8zjvbOwvn80bLWrC40djLCuZ0OcIullToxvi73DorF/uMLaniHYkBiGZd2ChHkd62NirA+GkvQK4SS/jd3p1FPo38Qd/RsRoW7CADofH+iEniTCTAcS0I717NDJz0YQOfUhYfOzFPpJhNgZE1p4CHM71MO2QRE4MDJKODYuWqR434hIYc/wZiTtTbC0q78wu40PppAQj4nwEPo3cERXEuJOvgrt61iggy8tmPychV4N6qFv00gkRHcUerXuh7YxvREY1EEwc2iKavpuqK5lIdSpRbfv3kuirIx/bT8MSewLU31jYUT//nRdHYQ3DBXi23WALR1DErt2Fbxd3BHRKAytYqIEOysbcop+cLd3FTiqOyChN0wNTIW2JL31avlIni6TSMdwHw9vcQ6mU5vW5CXWcHZwEBK7dIUtCXodb87v9ZGew7bWXEDnKLRqHik5wOYmCjyEw8PFDTYWVkItktuG9evD1JD785tIBwtfL84TNhVMDI3o8XjDy8VV0NPVh4OtLVpGRQpcSMcR4u+EuE1bdGnTRuhMlCyqUyPEHGVnGvr5o4FvPU0OcZCgRIpFlEmQWYpLCjGLsK+3t+DvUxvOtAjg4j+GpZcjvuwMjKuDneQI//or54OTFFeugjK7SIj7TRb0qlfF7+UVKWXKk2OVGbOihBA/xU8kxSzGwtGnKHP8JX7Zek/4R4chKG9orskHliivngnKHCwQKrTuS1JbLLRqFFgdvPEbR4K5z3DZXzTR4JJ5wXJbluOiCDT//Y/C+h/vQ8zNt7vQxmP2bVoJPxIhQyNzwdPFBX8MGYyETm2FLq1bwsjAREYuMoe2/YWRAwbB1dlNcHNlIT4sI5sZiRBf5Mgwfw3OnMHtSxdlYAcjwzn467vjxxSOHZQVl1r1qKZOVKmuKwwY/QeWLV+HCQtWCPHDkqSdkDr5pW98R0xLGilRQ2bN/NlIHjFc85VOxp3beHjnOibRKpiZMKQvJg8fgnMk8cyj9DSc2rsVdYxrCoN8XXCgR3O8PLZJ+HDrOF4dWooPh5YIn+8ew4fDK/At9Yxwe8tcbE1sjtfLEoUPG8bi3dqReL1uvPD+yDp8ISlePi1ZcHewRZPAeprBHGa02qtBgqt2lWAJ5gWB2lWCRyuq0+sYHt6ho12zhBBXRfUalWFlZSpo6yit2Fyc7AQe08kpEzxdkLG2tkOXLj2kcwhjZ20Jd0d7+Pl4CfU8PaBVU0uGcTBRMa3QLDIGHdp3FliIMzKySUw/CSwP3DVix6pVwualnDKxBNtWrRT2b96InWtW4/DWrcKJnTtw6cgxXDtzTrh45BBunFOGuTBLZ0xHi9AQ+Ht6CmdOHoe0XOPUAEmZeIdTh/ejdURTIZ3k9+Gtu0i/myJwUV3WvVRkpaQJHBXOTc+i7ZwpKDJcLMR52dl4kp+PNyTDwrMnaFSvFlzsHYVR8T3w+R0LcZGMFQmZepmjXtcu38KOHSeFA4cv4NK1NGzbeVJYuGQnxk1YgEVLdwrz5m2Ai4OTTEdijA2NERbsjxPnLgrDB/eAl4MVUm7eFD58/II3b98qkckP6ihnFnHlsjpcQ1IfniitvJSCOo4Kq50lirtMSEs2Tp9QI8TS8uultPpi1GKv51xYVyJtQi0a06QIvFE6Lkh0tEgKNZLIpyzBKh9JhD+8F7jI7iOJcUkhZhGSkdJEamoG7rEQ5z8X7qRkIPd+hmay2f/ujyLELLjKY7v9MAfpmbnIflQoZOXky3MsuchRhFiV+OLnJXxQIsXFCwDl+uII8Vt6PxVi8djBwsEVc7BgWAIGtg0XQr3dYGuoCxOtmoIxLT5N6fPsYGQg2Onrwd3MEM19PAQHA20E25sj1sdNsNEhQdapDm8LI8FeTwsG1arKV5mMNneh4ZQcuo6x0tVGt2Zh+GNoP2HqpGlIGjcNI4ZPFIYNScbIEZMxbtws4cCBw8gueCudJZidB69g8sxN6NZzkjBk5CKMHr8SfQbMFfYfvkzvr5fIzVU4c/IqFs5fiaULVws3r95UBrH8LxY0qhDLhEji84tCpO1Yi9WdWwqD/V0wmERvYpiXMK6hBzp7WuH6tM7C1r4RGBrmjhhvK8GoRhXMaeOP9T3DBI4Cr6XTBe0DhTmtOAXBBwtJhJkpJMMTYnwwIsJbSGzoht4NXdEt0FEhyAE9g52Q0MBZ6OxvLwLckU+J9nS+TV0btKptJUR7maKdD8lwPYXEYDuMDHfGpGgPYVEnP+weHI5zf7QRTiW3wulJrWW8M7NraDNsISFe3TNYWNCxHibFeGFQQ0ehT6ADEurbo2eQi9ArtA4JcCOMbd9BWDlxNo7vOYq7t+4JqSn3kXo/Fdeu3RC27DyOidPXo3PXccKsKYtJisPQr3dfoU6tumjSsCF6dOoiuDq6on/PHnCxcxJ6duqKBn5B8COJY/on9IQj7Se7tWsthIeEwsvVA51athK4E0Q47c9btmghcCFd727x8HByFeztHNCxZRzJq7VQr7YPmoWGaibN1fOpi8gmjWFubCFwl4nmjRpBV1tHcHVyloEbtpbWAheJd4iLgTUd+xkLEwvyhNqSusHUqFZTBJM7SzCGeoawMDUjKfcQPEiKdbV16f+xE3p2VlImVNSCuh9TJkoKMT/P5iTDTIifnwixSggXG/qUGN1Mz5elWI0gc7oEi7AaIeaiujpe7rQdHITqVauKH6hFasbcfo0W0mrR3a9VqpMQZ+CXbmMFOxMjaaP6azluuVeehLgcyoxd+UOEuIQQM4dJio89UzhcgPJjFqBsxcqCCKuusUaIf4lJwO+//orfOdWV+LHLBKdNVCX/qMDT6whVmEsKKV8u+wtHlhU4gvw3af1PUirEpUJcKsSlQlwqxKVCXCrEpUJcKsSlQvw/WojnT0lCMokhY2tlC31dA/jQB4EZ3jsRi6ZNpQ3hK9SvWw8B9QJwYNtGoUVEBDzcvEmiA4T+PfoWyfAFgZvA37hwTsbxCpI6cZ5E+bKgtmFTvzI/d2gvYugNxCMkGRnQUb48auiaC5Nm/YnlKzdg/PwVQqf+I+SDoPYRDPCtSx/Sdlg4/Q/h3OltmDMpSZODlJNCO4Xb1zCmXy8heQgdFEYOxbB+vYWD+/bi0PaNcNSpJrRytsSmtg3x/vZZ4dvTTHx5moOXGyYIX24ewOuNU/Dh4GKFMxvx14guuNinsfB6cR+8WpCA3KldhcwpiXh/ehc+FOYInRqHSNs1WwszwcyIW69VUVqtVebCOSVlgkWY4fQILrqrQbdhDHS1FIkmEWZ4aAePZ7a0NBV0dLQkp9jc3ETgvOzKlavCzNRKsLSwRbcuPWFCMszwGGxeBPl4uAn+9AGsQQfp6Kg2CrFtENE8Bp07dxUunDyD9IwsfPz0SeCD3Y41LMJLhE0kxBsXL8QBLqYj/lq2HPs2bMDp/QeEk3t24dzBg7hy8pRw4ehhKa67cPSosHT6NBHiwNpewpVL50naClH4+LHwkaTq5KF9aBYcLKRcu46HN29LLrHkE9/h0c1cUPdA4LZrLMScO6zJHyYJLszJER7n5ZHAFODdq9fCK7qvBrQwcLF3EoZ26YoPb7gY6Pu2XyUFinN4L168LezaQ8/pciqJ8UVh7bqDSJq4GJOnrhRW0+WwsHBoa2kLurr68HR3xcY1a4RdO9fTDk4LezasEd6+U76WV1Mk1PZragrFy5dFo4I1qC3YiqS3gFMjWJTV4ju+zGOClT7Kki7BPXKL/l5k+HlxUdgL6T3MAymKhLhIijVFdHxaQhw5pUCk8Ts+ihQL77lo6vuUCX5dXz5/ITx8kE1SnInUjFwhveAZHt3LJJliqfqvc1B//FHv50lBoXCP5Do9Kw+Z2flCRmYeuBCu5PYtmTKhpEgU5wyLDJcQ4ndv+Tp+HZQiu1cvXiLlykWM7d5BSGjeEH1jwtCktptgSfJrZ6gHGzqQMd4W5gj3ckOnhgFCE08XNPV2wZxenYQxcU0xrVM0xsc0FboGeKODL31ObU0Fc60aqMkL599/E7gVEw9g4Ib4jBbtG3RIjM10tIVusdGYT/v3PybNFkaOnIzRo6Ziyh/zhNt30pCW9Qx7D18TNu44g+FjlqBn76kCyzDnDo9NWircvpMFHtH88GGBsHXLfiyYvxqbN+wRnhUUfPdZ4X8lt4ukqtDr/vnlY+Hm/IGY0MwHIbaGgi5/NUzPyahKZcGU9odDQj2QOq+bsKJrCILtjBDmZCKYaVVF7wb0+rWvL8xu549JUXUwvJG70MvfDiMau+GPKG8hqbkXElT5JTr62ZHk2tDr7Ci0JdllWtexFmJrmaMdXY72MheivCzQwsMEMV5mQuvaFuhQtzjHt1eQLcY0c8G8DnWFv3qH4MjoKJya0Eq4PL0TTo5vhRNJrYWDo6KxfUg4NvQOFRZ15hzi2hgR5iEMC/PGoMb1MLZ1S2FZ8njarx5BGkkvk5ubh5xHPNY7U8jMyET6w3Q8eJgmpKWSIKekIOXePeEWLbp37zmEgQPHKQwYCWcbp6KRxd3o+OqHpo3C0L19e8HRxhEj+vWXARgMtxlrEtQANubWQu/u3WFJEsoDOWSEc7PmMKfLIUFBQlBAIGwsrUie2wjWJMF1vWuhU6s2gp6OARqTEDcODhGMDIxlFkKT4IZCzerakhfs4+kl6GrryUCxkPr1BXYZa3NLtItrKRjwIA8bO7qtp+Dm4CxS7Ebiy/iRkHLvYTsrK4HHPUsKhqmCKsScKqEO5OjSrp1GiBkuCiwpxPyaqDnNwfTYgvx8aRFRT4EuB9f11aRMsBD7kwSzCKvFdKoMixDT5VpurqhWpZpgR/sLrv1SR23zUBU9bS0429kKuvr6IsQ/dRsjVOVUS1ooG+nqCDXo88QpE5w3LLnDJUWY5fjYc5TZl4Wf+kwRylo4kvCWk9ZrDBfC/cRCfKBAIbqn9Cvm4WJMhd94OIgivSosyZo+w9yTuNzfB3SocNpE2f/XwzmShw5EdJOmgo6WLmytHTB73Dhhx/IlkttjZ+0k9EvogfEjh6FdTEvB290LjYPC8MfoJOHCiRO4d/UKbl08X8QF3L58QU4ZpdvEeek8wWhyiI8cFjhCHExiU778rwpFM9dVIR47Yy46dO6G4TMXC136D5UkcR16EzAmxka0UvXBmKEJwpptHbFwTjKGJCYKO1avwtUTR7Bu/gxhyvCBGN6rB6Kj4wTP4EgMGD8bta1NhQ4edtjatSmeH10vfE4hKX6Viw9X9wnvj6/B81UkxxsnCx8OL8XNJUlY36elcIB2srcSgnF/cDPh2aZZ+Hz7HL5m3BLSrpyGr7sj7TxMBGNDHejUqCpRYoajwCzALLoMT66rWrUSvRkrC/raNWBCB1Q1Ysy/q0y3MTU1EmqSDGvTQVdHV1v4B60KK1euAgva8TBWtGLv1rmHpo+jlbkZ3BztNBHiOp7uIsRxcR2F2Nj2iIiIQ1f6G+b8iTN4mJ4tE9MYbqLPort+3jyFBfOxfuECrJ47V9ixejWJ3QYc275dOL13H66c4AEtSoT4zIH9MqjlCr0nmFnjxiI8KIBW07WFq5fP4zFJ6jOSJYYLbg7v2oautCpn0m+n4MGt23h4646QfvceslK4B/FDIYd7ED/MQDadMvlZOSTEighrYCF+/Vp4lp+HQFqw1HLzEEb26I6XT55pIliqxJUULo7aFvJwBWLfwTM4ff4uTpy5KWz+6whmzt2ApOTFwop1B9C772jo6xkKXDXN1dKjBvYTLl67C29XKwzr3VV49vyl5BG/evVS+PqVH8c/ZVgH8/qVMv3sxQvuDMHDNDhaXDKnmPOFleix0lGCJZiL6F4KigQrQyOYF5I//AovX70VXr0qIcJFHRe42E/NEVYjwqo4/ojc5iMXB34QRIj/FiH+l0gpk/YgCw/SsnD/frqQQY+9ILtAppcxP77+/+VP0f28fvZMSCEhTn2YjQcZj4SH6bng3solHw+/vmqO/I/PRxFiRYzVSLGc56l8xL3zZ7Bo9GDENwkWouvXRnhdd9S2MhM8zI3hY2mMmDquQt8wP2wdmYBDM0YKuyYOxroh3XFx8VTh+PSROD0nCSdnjBK2Do/HgvgYJMU1FBJC68LH2hh6HBkmuML7N47G0IGJ4YIbPq1WsZJQk/YVteysMHlskjBjyjwkJ8/GqqUrhJzcl7h+Owe7D14V5q84iH6D5mLgkHnC+Enr0Lv/LCxdskPIznmO/LyXuHzpnrBk+WYsXbYJJw6fEv759fuphOqPdI4gXtAC7euXz7ixdoawsmsQ+oe6oDoX7/DBnB7/b3Tg1ycZZtrWssHFaR1xaVo7YWpcXdS30YcW7SsZ4+qVUNtcB4lBzkK/EBd0IpGN8zQXol1N0cnHGp19FXoHOUrUtw3dhmHJjallQadmCt4svmYkwhZCa/rbSBLgpi4KjRyN0MzNBFGepkJLFuY6luhJIsxwD+KxzV2xuIOvsHNAYxwdQ0Kc3FI4O6mNiPHpCW2FHYMisHVgONb0bCAs6xaCxZ2CMTE6UJjSOg4rJ/yBe1duCE+f8jdABcij/RiTm5uLRyTEObTYZzIzSYjTH9JCM01IS01FCgnxnTt3hGtXb9B2u4KrV68K5+n4PGLoOJJaO2HUwIFwsrZHy8gWQvOGYbC3tMGwPr0FU0NjyfNV+/Y62ztiSN8+0t2Bad8yToZLqDm78Z07yACMOiR6DEdbeeIdizcjgzj0jdE+NkbgKXZ8nIoMbyrU9vSGVk1txESEC0F168HUyBTR9DuGu0bUrFFTk0PMhXt6LMXW1kLThiFwc3Km22gJ0lmCRNWE9sWMtbk5gv395HkwPUvkDzNd2rf7Tog5QswT6koW1SlCrCwIQvwDJI9Y7TscRDIcQoIfTDLMSE9iOlVzhjlKXYfEXb3Mws6F1+okX1tLS1ok6MOACyWJ8r8qw1bKli0rONBtucvET/FjhXKcu0uSaaSnJ+jXrIZ/JK0uIcRPUebkK/yy6aagFT8MlXX0i4WWJJb7CmuzVxCV6DP5D30zTYS4TFSC5CarwsvDOarS51AkuChaXBIZEFKeswGUrhQ/TqZTJVmTk/xvpPn/Oi6ODpI8zni5eGLG2NGSKM7UolVJzepaaB0VK2xeugBzJyXDkqOLRKBvMGZPmoQd69cKMZFtpZBOTYlg7ly+qCmq4yEdty5ckNswPJ730vHjuMgyTHCXCR9aGWmEmBs8/0Y7wxr6QnT7eNR29YYFfSiZtvG95IVUJ9sZGhpI5wT+WoZZN38uIps00bQVmzhqJI7v3oInOenClmXzMTwhHn4BDQTfpm2ROH4u3B0chO61nbGkbTAeLh8pfLx2AJ8u7cG3Jw8U8tPw9dEdfMm7L3x7U4Bvb5/h4aENwp9xYTjXOQgvVg4RPu5dhi/nduPzzePC1xd52L9+KRzpg8fwlBk9rWrQrq5QjXb61Ys6SKjRYZZirWpVBZ0afDtOsFfasLAQsxibm5sKenq60NfXlRHNTFmJEHME2Uaw5gpiElsdbV2BP2DONjbwdHEqwhlatAJt2bKDEBPTDuHh0STD3YXzp87QDrY4Qvz180ccJtHdvHSp8NeyZdgwfx62r1kn7F67FpsWL8KJXTuEU/v24eTe3bh68pRw6dgxXD11ksT4kDA7aQwaB9AOpI6ncOf2DTzmEdxFEUwW4p2b1qND82bC/as8EOaGSDGTcZfHN6ciMyVNyOIIcWY2ctIzBG6xVkAHDE6TYB4X5OMpHVA+vH0jPM/PJSF2grWxmTCwfRs8zXtM9/tR+FHIFJH6J8kQS9EnXLx8GweOXMSJs3eEv7Yfx5IVezAmaZEwb+EWzCFBdrR3EWrW0KbtZoGo0DDh4tV76NM9FsF1vYSMtAcklDyumUcIv1QWIf/kwrpvAkvYi+fFk+UYjvoWt1VTxgCrAzh4PLCSHsG3K26zpk5We/HijQyXKB5VrBbRFVEUFf4xIvyjOGoEUiiOEMv174u7CKiv4evXnJbxGg9JVtNIiNNSM4S7d1KRS1Ks3v7H1/+//PlXUQT66WMhJeUh7nMU+mGO8IBg0S8pxLzAUVNS+PF+/KgMoRE+fikSYzVi/EGiwrdPnxL6xDVDYy9n+PNESqKBswNCXOzQJcBbWNAlCrvH9MTdVVOEwj0r8fbKAby9dlh4f+sUPtw7j0+p14Q3V4/i3ZWDeHlmp1BAt7+1KBk7h8YL++n/Gh4dhKaezoKtoaFUgv9GB0+GD0AVuFCZ2zmyLHPzfBLkQG9PYenMuZhLUnziyAkh//FbHDt1Ezv2XxGmzNxMQjwHI8cuF0YnrSQhnoHDh68IjwtfIj2jELt3HhUWLFiLVSu34VFmlvDj9lJf54/v3wq5Dx7i47s3WDSgk7CwQ31EelmhAkkww2kgjgY10dDJWFjWLRQXpnSm595c+CPWB7VMdVGZnhPjYFgT5rSPDLYzENr6WKKFmzFCbfWERvb6iPEwQ0dfbllmQ4JrKVHhlrUthVgSYD6N9DQTmtPfshDHeFsIzdyN0dzdBI2dDIUmLsaIICLdFFiIO9ezRXd/hVERLjJ6eWXX+sLWPo2wvW8oTiXFCWcnkggnt8GZCe2Ew6NbYufgZtjYN1xY1qUxFnaNxroRI4Xrx09Ju0V1SmVhYSFtg8JiIaZ926OcYiHOzspCBu33HpAMM6n37+PevRTcvn1XuHjxKo7T/3nk6HFh796D2L51J7p2iBfsrW0xhMSXuz0wAxMTpTOEKng9O3eR23Qmd2C4oK1e7ToaYeQIbv+EBLjYuwp2dKzp0CoW9ja2QlhIQxnMYWNlK0SQwHL7NVVoO7drDQ9nVxkgxrDgOtraax5PczrWO9s7wNTYWIiNjIQj3QdPA2Wc7G0lgqyroyeYm5hKYR6nRTAs1x50zPPx8hSqVa1GwmmoWQBwl4mSEWKGhZhFmOHocEkhZjhlIqZZMyHEvz5C6vkVCzGnTbAQkxirkeJ6XooIMyzBJYWYo8eu9PzUlIdKtKitXqUqvFydBQNdPZnuy+LK6OoZ4KddGaiQOFGo8tuvirAWCWq1ihVQZfpfKHPilfDz/EP4OSgKv/5eSeCuENo1eBAYt39V2qfxcA51kAYX9emSR/x86LHAEeKfpQOFIrwczFSm2ikpHeX+wdHh74vo+PFUoNsx3DLu3xfSKe3W+Lb/8bZrpUJcKsSlQlwqxKVCXCrEpUJcKsSlQlwqxP+jhbhmTR04kRQzw3r2wILJE2XmN2NtaS0jE/dvWiskjxwmifWujh7CmAFDMHrgUAzuM1AICGoq7dY0Mkzyy4V16mUW4juXLyPl6hWBUya43dr5w4cFTmdwdXYWEVZkuLz026tBMsz4h0RIa5VqVWsINWpooRzt4DnPmOFBHpUqVqS/rSBwX8XNyxdjUnKykJ1yD0tmTcKedYuFV0/y8MeI/vAmsWfqt+iIPhPnw6OWr9DMwRzz2gTiUnIP4XPmPbw7vg1fslIE7kH8z2/cJJ6bxxNf3uHbp1f48jRLOLNyNmZH1MONhFDh6ZxEvNk6G1+uHhG+kUR/JYFeM2WSwIn/BjpaIrkMp01wA20e2MFU5a8gSIjVRty6NauhZjVuss23U1IsuLDOxNhQ4BxixtXVTeCvS6pWrgoLCxvBlhYJ3JyfU2UYUyNjuDs6aoS4lpub5LW2bNlRiI5ugyZNo9AjPlE4f+ocMjNzRdKYj+9eYSsX0K1QWDN7DjYuWoQVc2YKGxctxoG//sLxnbuEo9u34vwh2vZHjigcpUURicT5o3z+CJKHD/3/2HvrgKrSte9/5hxHx7ED6W4kBUUsykIREQuxuztmnLHHHrt1bNGxx+7GQkpSGgULxU7C+b7Xda29Nug553nfJ87v98ej53xmb3bB3nutdX/ue12B9i380SGguZCUEI/7D3K1IQFcp3R/+DaM7NVXyExIQSoJsdqogJt0sBTfI5EUOFQiM+sfhPjx/QcKIsb5eP/2jcCtm68c/gOH1y8Ros/QZIoe9/LpE0FN7FIHdpWiohIhJ4cmPKev4fKNJGHfwYvYsesMZs//XVi6bAd27T6DPj36CQY0geH2og09GgoH9x/B9s2rYGdmLJw9vg9cR1YVRm5uwWJY8ukv4SN9HhxqwO2tGQ6ZYCHmcmpKSTUOoVCuMxxeIUl4JMNMAYtwmUYcjCrCigxzeTUlkU7guFkJk9DEDrM0sjBqYHlUBFIjxep99HcKcruaHFii/SzVGOnMTJLh9Byk3skSEhNSkR6XIqfemS8F6//2jx/Oz3n+JF9ISclCOv2ODA6bIFjAuT122e9SEeJSoZe//z2LcJFGiAu1Qsyl55LpmDZvxAChlbsjfJxt0MTWXGhDMjyvUwskrJ0iFJzZhrc3DqMw9bpQlB1PE+wUFPNEm3mUSWSgiK4zxQ/SUJgRhXfx5xRogv7s7Dak7/hNSN3+G47MGIERgS2EST06ooGDLR0jqgmck8BCXEkDxxxynDHHFjPr6Ri5bcUqEqUsISe3ACfPxmH3wWvCz9M3YsKk1Zg5Z4fw05T1mPHrZiQn5wpcai0hIRvhOw8L6zftwdE/z+DD+7dC2YlG6XfyFx2HCwRunPOehPjX0WOE3o2csKKfL8a2cRf6+TiigaU+RrZwF3aPCsb56d0xv7O30NjMAHWqVEZtDQN9nUiczVDXoKbQztUEwa6maEUizPjb6CLImcSpvqUCCWxHDzOSXQuB5ZdDIoJJbpkgen6IO0lUPWMh0MUYQSTApUJsJPeHeloKLNgDfeww3N9e+DXEHSt7NsTvfRsL+0a2xNEJgbg4PVSImN0d1+b1IynuLZyeEooTkztj77hOwh8TBuFS+A48oUk7w5NingA/JRlm8h8/kbhhDpWQcAmSYQ6ZYBFmcrJZhjOQlpYmcLhEMh0fVSGOibmNq1ev4eKlK8LRIyewZ88BbFj9u9DA1VPKqvXs0lXgZhnD+vaBs72zwK2UuYFFEy+FsYNZou0RGhwitPL3E6f4cdQYgWOCWzX3R9f2QYJObT106dABAf4tBEe7uujZtRts6TmCjS36d+8hDToYLpvWvWMXbR19F3KHAD9f1LVzFIyNTNG/Z1cYGRoKdUh4/Zs2gRs9j6km+TSm2t9fvVpNepwBmjdrKnASno2FNb22AodMDO2rlFtTY4jLJtVxQh0LsVpujYWYQyY6t28vtPb1k0Q6btAhsARzeTX6rBgOmWjWwBNNPOoLLMdly64xDeu5aWOIOb+ooiYUinGwtYaxgT7KlftOqFilGr75Mw01p28QTHVricT+nev9EhXLl0O5zkNQ08tfMKLxh8VVbdXMYQocGmFmqCewIPPrcmiDQIJcwdQG33AiHvF9p8FSdu3bbxUkfpgk84fveSJegeS9ikzK1cYc32jEmcNeGX49aeChef1/FlfMr6cK8pf3/Y9gYmqO6WPHCEdJZnRpozGiDZUJphnXpJFDaePvLLRvE0AbkiuG9esvXDh6SILdG3k2Etq27YqEyFtIYhlmCebEOk6yi4wU4q9fIzGO1K4Q83WOGVWF+Nb5MzLD5PrDAse+VaoEa1tXoe+AoZjx44/4afR4oTXtnBV5paOiBrrO1RaqVuXY26qoVKky3Oo1Qe/+o4S8zDT6fRcwok93YcuKxcjPy0abtu2FZsE9MHz6ErQO6SU0NTfAwhA/nBnTW3ifHofi549ReOeWUFL0jkSkCJ/+0sDXC1/j08tHwse7t/Hw9mUsaGorpE8MRsGWqXh3cqNQFHtOBr6il8+E3UsXw9rEHHo6NQTu9MLB6WqSXQ2WYZ3acjujW6smibOyisyIENOlCckww4l3derUgbm5mcDdiLh+oSXt3Iy9fV0M6D9M4qwYnjE700zd09VVcK/rSEKtTzLcT+AYYu5UN2bEOCHy6nXcvfeARKxIKC4uwrkDh/Hntu3CHpLh/STGuzdwct0GSbTbt3Ejzh86LFw5fgxXT57ErYuXhciLlxAdcRVXT50W5v/yM/y8GsK7fj0hmQ7afIB//pzjZJ9LJ6u9WzdhVL+BQmosyXBcIjITkzQkSqc6rj8skBTncoWJbIUH93JJiO8j/8FDhYePUJD/FB/fc31cpV5qUeF7eV8MJ/w8e5yPRzS4MCVFRdpBvexgr15/+fItLl2JxZlLccKfR69ix+6zWLbqD2H+go24eCUGJ09eEuxsraCjoyOrHsyC6dNw9cYtONmYCgt/GocXr0o7v716+QLcrU5dMS0sVGS5NIaYJfeFVI4Q+HoBrwBrqkcUKPLLzTcUOIFOqTdcVobVKhKlHdo0DTi0QqxWk1CkUa06IjJM0qieQVBv+/BRQRXkL4X4HUkRk0EynJaajZTkdCEx/g4y41P/60Ks+c/zJ48FFuI0+h3pGfeErOxcvH/3ubhxB8KyQi9S/K5IeCcrxaUrxC9ocjFrxFA0d60reFmboZWbHfo2cROOTe6NZ6c24sPt00JxdhRK7ifj09N7QsnzRyh58VjLpxf5+PTsIUqe5AjFeTQRz47Fu9tnhTeRR/E2+hgen94uPDy+FRErpmNy1yChT4A/GjrYwdJIV+DVYjXRjuEVYr1aNWBFEsD0bN8GR3dsQd79J0JiYjpOnIvH71tPC+MmrsQv0zdh1pxwYfS45di24xgdA54IeXlPcf7iTWzauFvYuHk/kmLj/+WKvrJ/FcrElOEqMB/fvcb9uw+FKYOmIKw+iTB9doyHqS5sdGtjdpdmAktid08H2NSsKehXriyVN6aHNBLmhzYlybWBl0UdwdtGHyH1zNDW0VBoYauPFvYGaOtsJHSg+4JcTLVCHFLPVARXLok2jvw4Y+3jW9U1kNvaOBkKLMTtXAwR1tBK6NWIO9TZY6ivnTA9qB5WdG+Itb28hJ2D/XDix/a4MitMiPi1By7NJCme2084/UtPHPtlIE4snC1k3Y6TSemLlxzXz/soJ8Fywiw33OGV4YciwuoKMSNCfO+ekJWVRZO+TJpkKqTRMTE5+Q5NYpKE27fjERUVhWvXrgtnTl/Agf1/YsXiFULfbr1hYWKB0UOGCB4u9eDTqAkG9e4jmJuYYdKI4SSqbkLXDh2lAYe64ju4Tx+4OrtKAw1mcL9+MDEyQtfgYKFJg4YwN7XC4J69BEebunCp60zS20moS8dEbpTRi1yEsbGwgSeJo1rFgZPmPN3d0dLHTzAxNCZBNEKvrp0EKzML6Ovrk2z7Ciy/vBBkbW4h+JCc1iQprl1ToVfnTiLlvHLMDCYB/o+EmFeIv0yqC6VJgtpIpLWfH1p4sxA3FbjmsD+JsVp32LcRTSQ8lVVh5ksZVpPrGrq5CcZ6BtK8S13xtSK5N9LThU6NmkLVylXwzbw9+GZ/iqBv7wIrgzraMy4cD/w3EmN1wc1Yt47E3lf4rrzwLQsvCezf6XFMTRJiPfIQfh7zLTnat4Om4tsrz4WaDbwlaU+NIVZXg1UBZtnlibgqyGrzDXVFma9zfWJlVVkR5C+F9d9eh3jOT5MxoHuY0KBeA1SqXA0e9TyEtfPmYvu6FTA1MRVa+vqCi2WfPrBHcHJwgVNdV3Tp2E1YMmcZUmJIdqMUeHU4JZa71ikCnCAVJpQOdgyvGHNSXcSpE0L0pfNS9kSCrQme9XCnOk/v9sKQERMwZeQETBw6Vpg3czaC2rfTLulXraIkl5Wr8L1CufIwtXNH4+bBwslDf2LDkt9w6+oloXPr1hjQpQNGD+gndG7TVkIurGychPomhhjn0wAXpwwR3sWcw6f3r1H8NFf4RELM2e6f/ioU/ir5iJL3JCnP8hQK7uI9DWAbxw8RNrV2wN2ZPfB6/3yhKDkCJVk0YOTnCMXvXuL0jg2w0DcV9Gvzhl2aZMerwSK/mg24Dg1mXJVCvV8VY3WFmO/jKhNGdNBhyvFpx+o1aaZtL9jZOmL4sHHQqaUjcCatE83C3RzqCizHhnRQ6dNnqNCpUw+0D+qC8SPHCTevXEPu/UelSXUkNVxWbdfqtcLeTZuwc81qHA7/Q9jHQkxifP7QIeHckcOIOHECN89fFKIuXkAUCfGlY8eEn0eNQKCfD4Ja+Akpycl4xF0HWfaIjyTEm9euxsjefYX0hGSkxXHIRLKQGZ+EbDrg53KFCa40kZGJu5xYR1IsYpxzV0RYXSF++ugxnuY/QeGH9wKXhir++F4SfRg+3f788SN5DeYtCemXA3zZfx8Li5CQlIVT5+OEI6cjseOPs1i76bAwe95GbNh4CIsWbxZsbKxoElNbuyLRp3MIbkamoGunlkIbn0bIy83VtnJ+/rxAOtWV0N/FFNPnz+2SX3KFjJeK2MqK7zNOkOPqEWUkWWSYQy9Igp+/VtCER7x6paDttPalBGtQk+i+rCTx4cMHBRZfFuDCj8JHRrYVvmRJLpL7vxRillImMyNbkurupGQISSTEaXGpmoYNxcqS73/yH7/+s/zHwp07WdIeOj0jV8jKzpPKJWX/lRVi/nuVFeLPBfmtVP/4gMObN2Nk52C0a+Am9GveCBuHhCAzfIHw/tZBFCaeQXHGNYV78Sh+lI7i/Cyh5ClNskiAi/PvaWARvovi3EThY1okPiRdwrvY08LbW8fxPv4cHp7aIeQeXo9TCyZhRHAboambI8z0dVGzalWBV3iqVKosAyXDGeFGujrarPFm9VyxZt4srRCfvRCLw6eiJFSCmTh5LeYs/AOz5oYLo8ctw8WLcVJqjUlNz8Pu3X9i85Z9wqH9Z/H62bN/mDCq//jn17QNqvvjvfQsfHjDjVGUpNWPtA/G04RxaMgwoZ6JJRqYGWJeFx/BWb8OrGvWgDlN8pke9R1xclpvrO7bQujR0BahRDBJLcNhD6ESDmEtBLkYo5U9rxYbCh3dzZUwCA8zIYxXeenxoSTHTDt6PBNIMsy0djRASwcDBLkaC+oqMq8MM30aK6EYA7mNMjGuRV0s6twAG/s2EXYN8ceR8YE4+0tn4cL0brg+rz+uzBksXFjwMxJPHKPP6Jkgk+BXLMLKvstt7FmEldKK3Jr9kSTVPXz4UPhSiLOzs0WIWYQZZYX4cyGOo+NnVFSscONGJM6fu4Q1q9YJ/k1bYfywwSKazMIZ02FnaYlBPXoKnDDG5dPGDB0i6OsYYghJcHNvH8GrgRd6dOoEBxp3mDbNW6KFjw+9lqnAZ3+96tWHvY2dMLBXTynNxivLTNsW/uIh3iSSTNsWLWGga0jP8RA6tAmQMqxtWjQX3J2doa+rBysLS6Fnl04SGmFkYCj0DessSXh16DbG3dUZziTdBnp6ghHJMyfn6esaCPxehvdTyq0x/6rCRNmkOg6ZYClmAri6hqYCBsNJdbJKzOEThB+vEDdsqBXfsjIsQkzy37hBfSm3xliYGMOUpF4tU1v5h0qS6Obhwmd5HWFhbITv7Fzx7alsody5h6i47iTKrzom/H3lUXy74kgZDqEC3VZ+9THh25WHhW9WKJSn+yrS7eVWHRG+2ROLb26+xbfjfxP+9ndFlGvw4h3BlW0kzKEMUvXmBwURcllNLhXispQjof7/ocrEVyH+KsRfhfirEH8V4q9C/FWIvwrxVyH+KsT/i4V4+9rlaEJfAmNubAFDfWPs2bxBmDZxAixMrWBtYSvM/mUSpo4fjb6h3QRDA2N0DOqEY/v3CVxDlpPmuBkHwzWJufzanZgYgX9O5JAKTdk1/jk24gouH+fkqhMkROelfWLFHzge+Hs5HVClajX4dQgV+g8cgXk/TUP/0D7CZJLj3+bPQdvWbQUOkeDn8BfDlCv/A+p6tYC1q5egb2hE4tsHS2dNFa6cOIxWjRvCjAYFZurYEfj1pxEw1KsjVPmhMto4WmDngCAhfsUUvIs6i0/vngslH16RNBUTRQpFb/Dpw3P89f6ZUPI2H5+eZOHRmW3CjhE98EeAM7Jm9hXeHlmJotgLKEqLVcjLwKe3r3B44ybBSM8Eejq1tDHFLMG16VJEl+sQc4xwrepyG1OThJmT8YyNDAR5Hj1fT1dX4CYnNWvWgp1dXcHezhED+w2ng4SOYEKfj6uDg0gxw0XLjY1N0KPHAKFjx+5o374Lfp4wWbh5+RruP3isSA/BMb3Hd+7GwU1bhG1L9rKIGwAAgABJREFUl2HX2rUIX7NG2LxkKQlzOE7v2y+cObAP10+dxq3LEcLVU6ekZfN5ji8mpo4bA78mXmjl5yPwQfwJx3+WCZn47dfpmDJuvJAczUl1CUhPTBKyk1KQkZyCHHqeQoZSdk1DbnYOHubmaUMmFCF+Su/jg8ADdknheyknx7AQF9BAk5d9T+CwCaX81+d1idV/n0ionz59iQtX4oTTl25jy46T2BSuMHfBFsydvwkbNh8Rmvu0gm5tHXA7dcaHDvrHTpzEsgUzBVtTQ0ScOyOn6pkXJOQ8SKpCyQl2HJOrFWKW3TIhEBwSURoewZKstGRW6wwzSnxyqRCXDZX4sgGFEirBIQMatEKsEWFNqIQ6YfpYyJccXqP8rArzl0KsJi1yzdQ0msik3lFIvJ2CtNjSkIn/shA/eiikpeaQxJUKcQ4JMYt6WYETIdaEdkhctEbi1dhojpt++qRAOLZlKzr5NMbI9i2F6yt+xJuru1F4+6RQlHIWhSnnUZx+TSE3ASWPM/FJwiMeo+RlPk20aSL9KFPhcQY9JhmFmbcUUq/jQ+JFvIk6Jry4dgDvSYzvHtss3N40H6tG9kfHZo0FGyMTGND+zqFVjA6XcaQBswoPnEQ1ul6rWhUY0jGCcbexRjAN1BeOnxYuXU3A7iPXMe3XLcLP0zfht+UH8PO0jcLixTsldvj+/WdCdHQStm7ZjS1b9wsx16L+6f6hfrY8qeGQJa4HznCd8HevSutA8ySUE2dfPHomDA7uh4bWdrAk6WHMa9SEIY0P/Ru5CQfGdMOaPq0w0t9RmBRQH/O6eWNiOw9hgLc9JgW6S2k1hmsKd/awQAdXUyGknrlIcQdJltPEC5MAt3dVCHAyQOu6+gjkeGGiPclvG5LiQLqPYRnmGGRViAc0s0P/ZrYYzg00iF871MeaXk2xqb9C+GBfHB3fDscmBAkXp/fExbnjEbn5d+EpTdh5e+RcAYbj6iUk6sVzgXMECsok1XFb+/x8FuPPhVhNqrvLSXUaKVbEOA1JScmIp2MmExsTR99hrJaYmFjcvBmJkydOCb7eIWjfKhBdgjoI9ubWJMjDYaxnJHBrYxbaZp5ewtghg6XZxfhRowRbC2v4NGlMUtlXMDYwkVCIxvW53q4nGjVshN4kklw7mHGwtyfB7ETSZyJwQlwbkmD9OgZCaIcOqO/KMbU1Be/G3NK5vsQCM8FtWkOKBujqC43JcVp6e8OY/iZGV0cXXToEo1aNWgI/hsMaeNxjuFmSGfmIKrAjBg7AEE2ohNQg7tlTQibUpDqOHy4rxBw/XDZkok3z5krIRLNmAodLcG3i0lbOjdHMS2nGoYZIcO1h9WcvD3c0cHXVxgybGBlKIr5adq1mtWpSj/i7cuUEE5Jla5Lm8vomwt+GTMe3C3fiu6X7hfJEhSX78PfFe4RvFu3G35bswd8WK3xP93+/7AC+4fuIb+VyN35YflCoOHUNvvNsjr/T72IkSe5vf6O/jRczK9Cxhv/O70tjhr9RwidU+eS/kctAflfu78KXcsphF+X+Xg5/44S6f1fM8JdwYpq+nr7QwtcPPTuHoEtwO8HPxxu2lrboHxYmRJz+E1MmjIWbs4fgVb8pDu3ciXkzZgkzpszCndhoJHIinYYk2qk40U6S7UiCuWNd/I2bAjfniL5c2qnu5tnTsgP9IDJMM4gKXBWhNroNmSlMmToXC6fQ9aBuwthBIzB/zq9YOm++sJ7ka9KYsVi2aLlwYPdONPYPhI1bI6FGTR208fPH9AnjhQVTfsT21ctgb2YmWJkYYcmvP+Pn0QOEWiSXbsa6WB4WIJybOgh3dy1HcV6q8OnjOxqYC0l8FP4qektC/JJkuUDh5UMU309GyZNMofBlHh5dOYjH22YJHy+EozgrGiX52Qovn5Bkv0FxIVds+IiZoyaKIKkDWi1JoKsKHV4ZJgx1OZ64qjamuE7tGpIVamykJ3DSnX6d2hKXynBjjlq1asPayk5wdnLD4EGjoFO7lmBuagoHayttlQ17um5iYoaePQcKXbnKRPvO+Gn8T0JUxE060D7UNoYoocHv5N592Pf7BoXNmyV2+Gg4V5jYib0k+VuXLsHxXeHC5eMncfHoEUSRDDO3LlxC1KUInDt8SBg7qB8dBBuiQ0BrIedurqyKPOPBgCgu/oiVC+ZgOB2cmJTbcSTESUhLSBTSuR5xUiqyUxR4VZel+F5WtsBCzAOyCgtxQf4TFNEgxChC/KG07i0J7nN6TF4Ory7n4B5J9oe3/zxZiP/xbSyK0bFpwpkr8djxxxlsDj8lLF+1D3Pnbcb6zceEwf3GSEwdH+iYenTwWzx/Lo6fPCVYmuph1dJZeP32o6AOlGqM5if6fYWFxXhNgyajiDGLrlLXl6tG8EqxrAoLXGdYfZwiwhyjqOXlG7z9YnWYKymUrcvL76+06oKCGlMu8sjXC1WKlUvN/YoUc3x2saB+ZkUkQsy9nHtIT8vUCnFSfApSY/57McT0TeHp/TyB45PT0rOlljaTezePJkJ8JqBUiIuKWICV+Od/EGKNFHPiIrN+2i/EZJxYNFEoijmKj9FHURh9RCHpNErSI1CcHS2UPKF9/tl9lLx5rvD6KUpekRg/zhKK76fQ8SEGH5Mua/mQcBGvbx0TXl7djydXDyJ661IhfPIgjOkQCHtjI0GnenVUr1oVRjq1Ba5dzjHEnHjMcFIOrypVo+uMQa1asDE0xLg+fYQrl24ifP9FSaZj5v62G0tWH8KEn9YIBw9cJhEuoGPAE+HyhesI37EP+/ecEB7nPZC4e+3+wf8v89m+oe2Na4OrMf25qZl487x0RZknoXymRq2i8vzhfUzoPQh6lasJxiQA9Wg/OTS6u7AszA/Tgz0x0s9FmN+5KdYPboPw8R2FRb2bY3ZXb0wIbCAM9nWSxhodWYQJXuFtT2LMiXdMoLMJAhyNEEyXTFsSYq4q0UmacFigjTOvEBtK7WGmub2+VKUIa2AhdCSh7kFiPNjbTpgRVA+/dWqI9b2bCpv6+2PHkCCcmDJcODV3JhJPnsb7N28FPqbymRZ1f+N9nc8AqUm1L7nu+DPuTlmgFWMWYl4lVleK1VrE6kpxDh23WIpVMU5PT0dqaqqQkkJyHJ+AqFsxwrWrkbh5/RZxU1i0cCNsrT0weuhQgeOEA/xaYGDPHkI9Zzf0JRF0snMSenbqjNa+LeDs4CT8PHYcTI0t0K9rmMCyZ6BviLHDhgl25Brcja0HJ6R15tVbczr+l66ocsWrzu2D4FrXWeAeCf26d9Mm1Rnq66NZo4aSbMfo6+qiX48w2FnZCnVq6aG5rw883eoJfFbU3Ji+1xa8+uwnXVm5QVIoSTJjpG9M42ot7ev1p9dSu9MxA3oo8cNlq0yUFWJ1dVjtzNe2RQu08vUVsWc4bliacvAqMcELINyp7suVYRVpzFGvHklmJYG7wXGMb0NXJ8HG3IwEk2OKlaQ57lJbh2BRZqrQ47/99u8oTyLKVPzuO9jo60G3ejVBVnjLfadNqjOqyfW+lUQ4qW9Mr/kt3V6RE/aI8nS9Ci9aVuZiBpomHGWElytHsLeoOQtlxZjhxDmWYv6djFSx+A/EV1aT/4P7/0eo+EMV1HNzE1YtmI19W9aSTBkJ5jQDbOHbHBcO7RV8mzZBwwb0BdJtzKQRY0VAB/YdLIwaOk6y/JOibynERMmqXXJ0tMCVJuJvKqvEDK8mR1+5LJUmpNrEmVPQq2OEKtX1hRq6dtCx8EWfCauEHyfPx8/DJ6NzQCehe0gYfhw9HhOGjxEWz1+IYUNHwbNZS2HjmmXoN2goTO1cheo16mDsLzMR2LKFMGnEEIzo0xPB/v6CsWZlePKYIUJr/6aoVaUKenu6CAdG9UT8ql/wOuK4UPL+tbIy/Bc3aVC6Z5UUk6B8fKXwkkMn7qLkOSfMEG9Jkt/z4PdUKEy8jOJ7CSguyBM+vcyn59HzS7jr20c8yctBY9oBRHQJXa4qUbM0NIJ/rlld07CDE+5IkvXpNlNjfcFApyYMDerAwEBfYCGuTTs9t2xmnJxd0X/AUHotXl2uDitzM5oAWcgqMWNjYQ4zM0ttlYlOHbujXbtOmDJpqhB55ToePHiEjyQLDEsMV5fY9/tGBRLgP9atx/6Nm4U969fh8I5dOLRjh8AVJyJIiiNoEGBunrtA28M1nD2wXxhHM3LfJl7oFhIsZGTlIJ8O+izFjAgxCeO8qdOEpOg4JMfE4U58opCRmIz0pBRk3UnVkI6cjAwRYYZDJsquEHP3MpbiIhqEGBmUiz5oT+GyED/lxJV7ucLd9Aw8f/JUK6Rf/lOEqgSpafeEM5fisXP/eWwhGWbWbTiMqdNXY8nKPcL06atga2WlPaXn6GCPEf1CcflKnNAhoCl6dW6NJwXPBF6N5VUjVRhYiItLPtGgyQOnZkVJwh6UFV+lfFqpACuNNkrvV0RYaTmsVpR4+5q7tGmqKJAUv+eObXRd0KwIa1dPNZQKr2Y1WA2X0EycysK3FRcVC6rgqkmMuffySIizkJqSISSyEEf/N6pMMCRoj+9mC3dSeJWMpfiukEe/r0jOBHwhxGrIRxnJV8RYqTTx5FG+sHv1KmyaOAivruwW3kceQmH8aRTePiF8TD6H4hyS4cfpCu9e0P7+Bp8K3yrQdZHiJ/cUcpPwMeEc3pL8ChwqEX0Sb24dFR6eDUfS3rXYOWWUMDYkAN4uDnIMYHRrEDSpr01izBjq1qFB9Acp1cRUq1pFTmtWrlRZgeSYBbp1Y0/hwLq1+PPgWcyYs01YsuoAFi7bj1mzfxdiolPx6OELZGU+ECIiInHh/FXE30oUOGGu7Gcp3wHvUzS5ZJ4+fITcLD7bohHi9Cy8flagfTwLMSe3qmcQXuY/xsxxP8OoSg3BsmYtrOvdHlsHBAujW7hiHLdabmonjGvlhpUDW2PXhE7C9gkd8Vtvf/zarZkwpk09DGnhrG3EoYiupVSWYDgMgleA1cYcvGLczdMKnTzMBV4x5sQ6tQoFrxh3ptvbu5kJ/PiwhpYY6u8gzO7YCMu6tsSuEX2FfZPG4uLaDUg6eVF4lJlDn1mRbHMqElqkCUHibolfCjGfKWMpZtQVYjXJ7v9ViNWqEykpKVJ1IikxUUhIiEdsbBzJcZRw/eoNDB0+G97eHYUhvQZJw43xw4cKDtZ10bZ5c4SFdBLsrO3Ri6TY072BENiiJdq1bA0LMyuhV2hX1K/njoYenkLvrp1lpTm0UweBQyzMTM21wuloaw9TIxMJrWAcbLnkmhX6kYgypkZmsLG2pd/jL1hbcotnCwQFtBbsbe0keTyUxhLGhF6LFwI5DIHxcHSSUIQ6LMZExzZtpPJS9eo1hC7B7bWJdMygXr0/S6ZTy66pVSa+XCEObNlSVob9mjQReIXYj6SYk+sYLsUmK8KaKhPqCrGKskrsAV2SdoabdXGoBO/TjJmhAQm+Icp/xyXOyms7xVmbGgv2VhaoUL6ClF9lRJp1eHWcwzKryxkjniSrZdv4fi5uYKyvK3CnO5ZSTnxjeEW4dvXSBTmW5r9LlQklBIKT4kR4NUl430vpte+08qmGSXzHjyNYoFmK/0FSyzz+n4VW/I/yVYi/CvFXIf4qxF+F+KsQfxXir0L8VYi/CvH/aiHW1dHH2kW/CvOnTYQefdBqnd/QjiEYP2KExAYxXKqrOW3Uc6ZNE07/eVCaOzRs6CtM+WkG7nCIRFSUkHY7DqlxcUiJjRWUmGKSYY4l1nD7+jWS4YtC5MXzGDd0NNatChd27zqBo8cicSMmRTh99gZ+X78Dvbr0Fzq164xeXXti5o/ThMG9B2H9qnUIDgkVnGgnbOjTHEa0ozIVK1fD0JnL0W/SdMGbNsa+oV3g7+Up1HOwkxADHhSYwFb+0g7RonYtYXo7H5ydMwKPToQLhRkxNDCzMCkl15TYtxJJrmM+cYIdoxHgEk6cuX+HLjM1ZKAoM5Zuy1B4kI1PL55I4h5TUqIIZh3aiRl93doSKsFhE1KfmOW4TFk2TqzTJwm2MDUSWJiNDPVIhg2E8rTBcqMNW7u6gouLOwYMGkavVV0wMzKkncZS28vdhuTYgr7z7mH9hJCQbmjTNgTTJk8XbkbcwMNH3KhCiQnl2r1HSXgPhytsXrxYJPjg1q3CrlWrSJR/x4k9e4Tju/fi3J9/ahtxXD5xErcuX8GxP3YJg3t1Q9OGHnQQbSHcJWHJJwF9wqcHiaKij1j66wyM6T9YSIzibS8Wd24nCClERjKJMEsxkZ1KQkwSezczS+Cya58J8eN8FBDFLGmFihiV0O9QhZhjgrk0m1aIM+g16PnF9N4ZHvPLCgDDz3n8sEC4eDUeR05cwzaSYWbzluOYPXcTps5cJyxYsgNNGjWBsaGhYG1hBl8Sk1MnLwhLZk+hQcEMKUm3hfcfimVglNhcooS2PRbijyThCsUo5EsJVVDgnzmsQpDrdP/H4lI0kqqGOIj4FWrQXi8WlNcpUV6nSKm9zKiCXiSXSjgEo4iQJt5ZYp7LXC9RWmEz6uPz7t1HWmomiWu6kBifjJSoO/hE74tRFPf//Z/y+p+Ql5EqpCTx6yo1jpl72ffk95b9/pS/pcx7Kvv++POlz+PF82fCrXMXkH1yB97HnhKKkkiAMyNpH78uFOfEoORRKoqf5QolnIvwVhMqwRTkKsl1D9IUWIhTruBt1DFBKbN2AgWX9gmpe1fi8Jzx+LFroNCugYs041CFWIcGcVOa4OvVrCnwadMaVXjizHHFNBDSz3q1atJAV0WoVrUaqlapBNM6ukLf4LbYvX4zNm89Jqz5/QjmL96DtesPCIlJXMrrMeITsoSIK5E4e+YyHpJ4MWXDJRj+uvjyw7u3wn1p2HGvNISJhPglTXhL950SCZng2HjmNcnf7wuXwcnUTmjn7IjwQZ3Rp5G90N3TFqObO2FCa1dhcpAn5nf3JhnuLGwf3xG/dvfBjC5NhIntGmB4Kxf083YQejS2JSEmoa1nKrR1NhTJ7UhyzHA7Zk6uU2OMg1y5ZTPHFysy3IGT8tzMEeTC5du4nrE9Bjf3xJSuQcKaMaNwePlSRB0+JuTRsekDTTL5c1I/K55Yq9v//6sQqyET/10hVpLskpGcmCQkxMcjPu424mjsZmKiSYqv38Cy5duEnr0moGunviRVXL7MABNHjoI1ie7owcMEL48GaERSO4DEkTEzspCQggBff8HNyQ3dSGwtzSyFAHILTmIzNzYXwjqFoBGJsquTs9AlsB2NS7baEAyOIeZmH6YkrUz/Xj1gYW6F5hynSzR095CFBTtbTiC3RytfH2lApkvbNsNhoa5OjpI7w7T0biqvw7HDjI2lFZqRF6iCzI0+yibSDezZC/3psg/JOvOvYojVkIl2rVp9JsQMJ9VxMh3DQuzj5aVNqlNLr5X9uZGHOzzruQlcd5jrEKtJdQY04TU3MSJXqCVwbwIWYrUxRtXKlWnSYKBJrlXKo3GLZzXm187SjPxBR9v6meX2OxLrGjR5ZqpWqiShrBUqlBe++VYtqaaEWHBibrUqijQLf9OIsaauMB9bVOllviy7xgl4aljFl+EVZfm31iHuThtd/15hgr+PN82gasKDNiTm6O6dmDdzKoxNzIS6dk5YNGcWNq9YInBjB1sSzXFDxwrH9hzAndgyK8IcR3yLq01wZQn+OVJ+ZilWiMTta9dwi2SYuRMXi9s3ryM/L0d48/K5HATUAyLz8vkrjB0yWejWoRu6tu+Cn0aOF3p17YUBPfpj5+YtQuvADjC2cYKemZ1QsUoNDJmxBJNWbBL6jp+CBi5uaEezWoY3CBcHWxjRhsXw4MH1jW3NzAVPU0NsGBiEpC1zhfdJV1HykAawggfCXySwf8lRv0QQKS6mA947jit+SVL8BMXZcTRI3hZKMuNQkp1A12MVcpJpIORs84cCrxi9f/0S7f0ChNrcjEOHV4o1jTl0WN45a7ySwBKvR7ebGOsLvKqsr6/EDzPlK3xPr8FC7Ci40yy0Z9+B2hViFmJbS3PUtbURzE2MYUUHoO7d+wshIWEIbNsRc6fNFW6wED/MRyGJEsNxz4e2hePg5m3Cgc1b8cfGDTi66w/h4Lat2Lp8GY7s2Cac3LsbF44oFSWYiFOnEUnbwel9e4U+3TrB37sxfafdhft5D/H0WYEWHjDmTJ6IZXPmCfE3I5EUe5smYQnCnbh4qUfMUsxkJt1Bdlo6iSxXm8jE/bv3Phdikt2nD59IHKkaS8pCzA04GB6s+DEswUxOeiby6DVeP38p8AotryJr4YGOLtW6wUlJObh8LR7h4ceEHduOYPGSzZi/4Hdhxcq96NK5D8yMDQQulO5W1x4rFs0XDh48TtuhHg7s3CS8fvsBr16+0dYczclKQ1ZqAjLvxAtZqUnIybiD3GxeFc8gScmmSUA2vW9+7wq5Wen0maQIGSnJSE9OouelKKRx3HU6SUuW8CA3B48e0Of16IHwNP8RntMg/IoGZebNq5d49/o1TYzeCtyMgSsFFBYqFBV9kEmMugIsyYplJPnTJ0WaC2k7Yu7SZ8uruCn03TGJCSlIib5TmlT3nxRi/scT1uzUO0JSYhpS7mQQWQLHLH+2Qsz/KyN0pShJX+pEiSt9MFmRN1CYdh0leQkKL/JQ8vJx6QT4YRIKUy6S1B4W3scex4fkS/iYcUsoyqFjwMNUfOKzRQV8duk+irkLZkak8CHhPN7GnMSLiANCSvhiLCMh7NTIQ/C0NkcdjgekfZmpWa0qCbEu7ExMBDM6ptkYG8PaSMHJ0hL1HRxgStsZU41rt//wgyTiMS3qe2DK4H7Ysmyd8Pumo1iw6A8sXLxNWLduH5b8tgHTJk0VuDb8xuWr5JjFsOR9+Y/3oQKa1DJce5g7R6qd7O6mZeI5TbAh8qwIMW8/6hmYF7St3aFxZEL/4UKvpn4IsLeAq1EdobG1AQb7OGL1oObC+hGBWN6vNVYOUtg4pj3m9vLDpOAGwqgAN/Rr5oDeTe2FvnS9ZxNbqFUoQiRe2BzdPC0VuOIEXXIcMcMy3NHdUsSYaevIK8X26EF/FzNj4Bgc3foH7tyKE57x2adCzk1QkwzVCUPpdWm0o9kfuK44C7EaQ6wKsdq45l8J8b+KIVaT6rgecWlN4n8U4iQ6ZjIsxLdZiGNihRga06NoTI++pXD61HmsWh2OVi27Co08mqB/994w0jMSfh4/nsZUO/g29RG4a6y5qQUmjBgpcNMOr/oN0DEoSOAE7pC2bUkKuVlFY+lON6RvbxjqGQoebm7oE9pd2yehtW9z+DX21laBcHV0QnBAa5iZWgqt/PwkSU2P7mO8SCpdHR3ptfQU9A0kdljtVFerRk20a+kHa3MzgTvVebrXo7/TWujTPUxJpiMpZmSluLvSkINRY4jVFWJVhtUVYhZiTqpTV4RFihspDTlUWHy50oRabULtWsdw7WELU1PteM3Sa2Vuiu9JThned1mM7SzMBc4H4kUwllqGG/GY0v6vz4trRCUSXKn3W+7vAkttdXIeA10doQJXgeDVYo2wVviuHIzpOMG5CAzXGebnqILKVWukhnAFpXOw1CrWSC/Dr8HJc5Ur8Vmpiihfvpz2dnXlly/Lf8eryuVk1fjfviL8JYfCf9ck8hjBkhOtaIPZvXG5EBLYFk51XVDP1UMY3L8Pfho/RnvKwIo29p6hYTh75LDA7ZlZfJNoJsnw9TuxcUji2zS3swgnR8cIHD7B7Zs50Y5JjYtBxJkzWDh7qbBj616SiDQph8Tcz32Il89eYsLwn4XeXXvTrC0U/cJ6C4M5+atLD4wfPVbYvH49vP1aoraBhVC5Wm0MnrkMoxauFcYu2QT/4FARD8bV0R4mBrq0EzgL3B2MV2SbuDcUGju5IMTFDmd+GSY8Or0Z7yNPoyg9Tvj0qkDCJjRDqXKQo0FeDaEo4XCJJ9n02FtCcZamM1VOklCSewcl9+6g+F6aUPLsMT6RSBzZuUvgnVqXwyB0awumhnrQqcEd7CorVKssp0AMDesI/Fh9vdqowW2gCd459PT0UdfRVfCg2XePnn1pVsczu2pSxoWLe9e1thZMeZXS2oFkeIAQ3L6rrBDPIRlmbl69icf5BXLgZrh18PaVa7BrtcKe9RuwZflSbFuhsHfTRuxetw5Hd4QLJ/bux5HwnSTFx4VLx07g2tnzOLR9mzCgZ6jMiLsEcWZzIPLo4M4Hfs6uZliqZk4cixnjJwvJfHYiJgYpMfFC2u1EpMWnkBRrSEpGpia5juEVKnWVmOHT3k8f0aSliE/jK2LE7ajLCjGLs5qEp4ZcPKbrDD9Hm+BGvKPBK+5WNMLpc2DG0sF9XI/OmD4gTGFQDyyZNBTHN64Soi+cx6blG+Hh5CzwNlnX2gbD+oQJZy9FI7hFU/w4YpBQ8IwGxjfvkZ2TLSTExyGDxDbtTqKQkhCHhJibiI++JsRGRiAq4iKunj8jRJw9iStnTuDcscPC8f17sT88HHu37xB2bdmC8E2biY3CTmETdm/dLuyjSc6+XbtxiL5H5sShIzh19DjOHD8pnOWkybPncJUriBCR12/SQBqD2JjbQuLtJBFdNWmOwyMyMnJooFbIkk51WUhNzRSSSIiTo5KlIQrD389/9h8LcTqH0hDxcSlyfElh6ebwCfobcrJJzDIyBJ4UpNMkISUhXkggIYi9cQNRV68J1y9ewrXz53Dt9CnhUdxVjQzfFkRw78XQfh4pvI86jEdHViBv73zhwbHVeHxmEx6e2SoURBzBy9iLeBpzRXgSfR7v4q9IJQnmY/x5vL99Fq9Ihpn7R9fj1G8/oqWLg9DI1hr2Joba1u96nDlPg6axrq5gUqcO6ppboLGLq+BPg65/Q0/pIMVUqPg9DZI/kDjrCs6WVvCjQfnXMaOEZfM3YO+eM0hMyhaSknMQG5uCm9ejhMibcXhEE8ay+0DZ74ivfyCxU/cf3vfu5+Qhl75r5i59/1zWUJnolBFizQoqrxAnRkYjOfKmMKZrDxhVrw59GpwZB/1a+LGdBzaNbCesHhKARX1bYFY3H2FaaDNMCmmMIS1dhIF+zuje2A69m9kL3bys0bkBh02YC9KimQS4c33uWmeBLnzJ4RLuZkJXur+9C4mxm5XQ3dsPU/tPwqm9p4WCRwUy6VPPKPAZlufP3yL3wTMNnBz8pkwYjpqoqcA/K0KstA7/v60Qq+2by1aZYCFWy67llFkdlhXi9AykpSoizKQkc9e6RJp4JggJtxUhjqXjKhNNY/ityEj6nhVuXL9O33sEDuw/JgS2H4yWvoEkt+0ErhIxtE9fkjhzISykM4ldA5JLB6F/j17STa5T+yDB3cVdWjD3Ce0mONvWhZujM3qSXDJW5lYk1k3h28xb4AT8LsEh2hVjfq1GHvXRvGkzgUu2BZAUcyIaU7uGDlr4eKOek5PAZ0WtLKzQ2LOBwCEU1apVRxt/X8GCJpF8m1/TJgKHbXwmxJqEOlWI1dVhXhlmWILVkmsMCzEn06mtmjmpjoXYx7OhwK2Zy1aVUFeGPWhfZfjvrVC+orYTHa8AW5P4GtK+ytQigefbK1XkBjyVUIMmxIY0hlSvyo5QTbPyy+XZuH17RdiYm5AAV5JkOSVh7ltprKEeP3hFmMMctJ3pNKu2aplbPiOtSK9mhZdXhEmMq1apLPDvL3s/CyevOqtJemp3un+1GszP4bJrsnL8/5UYfxXir0L8VYi/CvFXIf4qxF+F+KsQfxXir0L8v1qIrc0tUbNGbaFNqwD06haKccMGCXbWdqhPG/CooUOFiDOH0NzXVxLrmHatAnF8905079RTOL7/kMQQp5IEMxwewSKsCjDHEPMl3y73ERxDHHf1qnDzwiVcPnkcJw4cFq5fuoan+fnask9cIoqTfCYMnyp0De6K7h3DMLDnAGHkwGHoG9YXwwYMEcaPGI3lv81HfY+GQo3aBmgZOhSDfl0lDJu7Bs3D+muD0Ln0mKmRPhzsLIWR/cPQyM0VXq4Kv/44Bo3sLPBLoI8Q8ds43D+2DYVJ14Ti7CQ5RfqppEgQkQIPDJrSbB9eo+R1Pg2SyUJhRrRcftJQfDdJXqMoK0EouZ8tsYXvXz8XWjTykTIqHCfMsLzr0c9qYX0lhpjuN9AR9OgxBnp1UL1GdYFDJvT1DUmGnYX69b3QlSYQ3M6Z4ZAJTqSzNVcw4fgrOyf07j1I6NAhFC1btcPc6fOEm9ciFSEu+ii8evYMO1euxu7fNwnbV6zAfpKqgyRXzO4N67F92TIcJrlnTu7di+N7duP8kaPCBeLGuXNaIQ6lg2ozOlAMpoMq8+jxU6mtW5pUV4hp40ZhzW9LhNskXEm0fd2JjRdSifQyQszNOu6mZUgsMcOJdRz6oA7Qj+9zLWIW4tIkr2KakJSeIleEWG3kcf8uyXTeA4Ivc/Gi4AkSo+Ox8JfpQmirlmjl4Yp2Dd2ELr5eGNclCEvHDRA2ThuNQytn4I9544Qj62bhxt51WDNzohDUpD4CPN3RN7iVcPbUBcyePAbtfDyFBzTYcVIXD3oMD4pFxZ+0FBZxO2clTlhihSXmtzQpjBMhP/BA+/adICXWXnNL6NfCyxdc1uk5nnKNU+ExnuQ/wpPHGh7x5/WALjU8oMnB/Xv0Wd5VyM3Bw3s08bibLuRlpyE3iyckyQrpCUQi7tF1ITMZeenJ8hh5XE4uiSq3bVZCJuLjkpBwM/6/LMT8eC6fx5N0JjaaB/4UiSVmski++ZRzwRMFDgkpeMyx5Q+Ep3Rd4ZGQz5f59Jk8ui98fJiJd7fP4M2VXcK7G/vw9tpeLbl7F+HWklHYNzFMmNTBH6MDfdHXu4EwyL8xpnYJwNzuQcKCsPa4sOgX5B3bIDy/sBOvrh9AwfmdQv6Z7XhwcgfWje4ruFuawtvJDnaGBoIlDYYu1pZyjGCqVa4CRxJiFxtbISQgAP5NGktcH8OJdXVq1IC7fV3BXI8mxEZGCGsbIEyfMB3nzt5AXh63aX6Cu3cf03eSjMuXrgsRxLs3r7T7Cy8KqJ+7fPa0/zwveEbbxX2BJ5P3sngCokxQ76Zn4iltx2X3NyVkQonFf0nP5eZOmQmJwvg+Q1C7clXUqlxZcDLSw+Lefvh9RFthXk9fzO7uh5ndfYQx7bzQo0ld9GjqIIR62aBrQyu0r8dxw+Zow003CLUxB0sxh0iojTk4hpgT5QKdTIVgdwt6nAtGduotbFy8DXlZeRJbrsaXc61uVXA5KbOoTEw6t11XUEIk+DYW4le8DxJcK/zpsxckza8Fbtf8RhMqwbx4wQ06Pi+7VlaI+Zig1h9mVCHmUAkmI0MR4tSUOwI3PmIhTmAZJjh++HZcHGJiYoQoFmIawyNZiiO5JNsNXL92FdeuRgh//nkM3XuMx/CBYwRnJ1e0aRGAzsEdBXuSYI6zdaPbGZ8mTRHSNpDGXV1heP8BcHdyQwM3dyGweUsak0zR2s9fgy+MDIxJTr2FRvU9JVSid7cugrWFNcxMTCV5j+EEZXt2GJJhxp2kkusbc31ixtLMgkSxBpo19hJYkmvRBNKcRJjxqu+OurZ2NI7qCa3o9w9iGe6hlFxj+pII83tS44cZVYjLJtQxQa1bi6j7c7m1xkqrZg6T8K7fQEFqEJeNG3ZHPU70I5Fnyn9XgYRWKX/GKDV8y0u5NcbZ3kZCPCt+r8DNSNavW0O32wlVaP8vT4I7f/58IYjG1w7BQfQZcLhlJa2YOtHnwPw4cSIMdGpLLWG1njBLqhpzrFOzuhKmUU6pe8yy+803nEzHCXlK8h2HRqgCzG2XVTkW6LEVObxCE+P8z8IjyibpfXnfvwVOquNVYIabcayYN0ubVamra4iRQ4chfPM6wZE7mLm6o0+P7sKPo8ZgzLDhcHH0EHZt2q4RX0V2E2gWydUkUmKihWSuPBHFnetiBL7vNs0yoy5fEv7Yuh2TJ/yMGb/ME36ZshA/zliDc9djhJMnL5EQv8GIQeOE9m1oZtmON7xQoU+3nujWqSv6h/UWRvQbjGG9BmD+9CmCRz03+gKroUmH3kK/mUvRNKSbNoj8e/rSq5NYujk7CCGdfNC7Rzu0btZY2L5+MfqGBqK+uYEwp3Nz3FgxFQ/P7RLexl3Gh+RIfCJ5FTRxYaUH+EKUvH0mUizcTURRBq8uRwuFxMc7t/DhTpRQmJmI4sc5KGGRJlb/thB6dXRhoFtboU4tWSGuzQ07GJJe/TrciKO2wDHEhjQw1qBBjqlAQszJdXUdnAUvr6boGNJVGzTPfdBZiO0tLQUjPX24unogjCYZTLugTmjdKggLZy8UblwlIX76TJvUxRUIOAlHbcSxY81aqTSxc93vwt5NW0h0w7F3wybh2M6dOLX/AE7u3iNwPHHE6dPYt2mT0L9bNxJiTwzt11948kQTK6eBC/f/NHwwFs+aLdy+cRMJt3hbu60lMzGNpDhJyElJRRZzJ03gxDp1lVdWejXd6tQVYh7Piz++K/3+aNB6RANM/oNHAsdAPiRp27Z6tdC5hQ+CPJ3Q0q2uENjICV39G6BnK28h1L8J+rXxwcLhYcKBBROweEQ3TA5tLcwb0hkLBnbA4LZNhJEdW2LmgM44vnqOEHv2MCIO7cTI7h2FqCvn8f5jMYnqU+E+CWiRJKsp8fY8IKsVJBil+gR3nvuc0trDShMOtb7xu7ccu8gJPaUVJNSBXSjkesFK/CyjDvZqFQFe4VNigxW54b9JrmtW/MquIqrCpKDE5r58+UIS6W7HJQpxMfGIZyGm98X8Z4WYv89PxUXanIaoW3GIi02k35Eq3Mu+iy+T6j7/u5SftSLD77WYG0h8FN5nxSHv8DpkbftVuLdzITK2zELWjjnClfmjMLOjN4Lr2Qrupvowr1kT1iSrjI+tGQb6emDruH7CHz8Nw8qBnbF+sELa1rl4emYbnpzZIjwjKX55hUT70Hph+YAO8HW0grOpkWBnzFKsr208ZFC7Nkx160CfLpkGTs6oZ++AOrVqCpbGRrA2NYEnDYZMrWpK9nh9e3th5oSfaAKRhdx7j4XUtFycPXERu8MPChGXrimLAV98rypcdYJXhdUJJV/nRjlqTD9PUp89ePDZ586NOVQhfk3bQ+yVa9rxY+m0OTCoWhvVuToG0drFCsv7+2Fyh4ZCjyZOJL4uGOhfTxja0h0hHjboWN9KCHbnlWC+tBACnIylOgRXmmA6khB39DCXhhtMMN0X5GaKtm42Qqi/H+b/uAipcanCu7fKvqJWUCndZjRViDTvS7s5fvH5KNsWJ2uWVpjgut9qI53cvMe4k56LrJw8QY6DT7m6BDflUGoQ/zMh1q4Ql5FhNX5YqT+cIiQlccc6RYYZluFYTqbTCnGUCPHNmzeF61ev42pEBCKuKFy5dAknjp3EuHEzhJ7dBsDKzFrOIjNcp5gT7frScZ2xMLVAW5Lexg28BAdrewzu3VsadjDc2a0dia1aR7gbCaYTTdQMDYyEjoEB9Bpm2k6sfUK7wtzUEjZWCq39m0vlCVNNp11vr0ZwsLGTZhtMax8fej0H7YJgK19vkWRVQBu4uaEhOYOBvoHQ2LM+BvckIe7eQ+DEOnVlWKXsCrG6MlwqxAGKEHspnem8SYY5iY7HOIZ/bsqVJDQxw/zevq9QSSptMFaWtiSI30kiHVOFV3fLfYeqVaoInChrSfu9oa6eUNfGmiaqF7UTAI4/rk+ivW7dOsGUfnZ0sNM2/uJVXfYDP19fYePGjRITXL1aVcHQ0FA8QhVnltTKlSqJMzD8/M+El+D65uqKNMc3l41JZgHln9UVaF4xVhPt/hn8nH97gw4rc2usmDtT6NWlM4mxo7aVYfvWgZj502RMGDNG0CF5btOqDfZu+V1Yt3wxLOj5NtZOwoGde5DEyXSaChIsvyzF3ICDke50UVx+TSm7xjIcTTsSV5dg1q5YjnLf0Wzh+8pCxcq1UNvCA9uPnBd6hw3AyvkLEdSyjRDYvBWCWgXQjhIqhHbsgi4dOtLO1lsY0rM/xgwcip9GjBQWTPsFTWmj41JzTEMSvKYkhOopCHVDs7Y0FaaMGYpG9VxosOAA9uo0y22NM8fD4WisLwQ4W2FuF39cW/mTcPfw73h++ah0m2K4aUdp4sRffASUxLuSNwUKBXkoyiQhTrslfEi6jvfxEfiYfFMhhW7n5DvuXkVkpyTBxtQKpob6grF+HdqQq2lhOeZVYQ6TUDGiQbEaZ38SihAbwqGus+DdzA/BNHOvXq2awAHz5jQo2llYCAa6unB390Q3+iyZ9sFdENAmGIvmLBKibsbgKR2opVQQ8fRxPjYvWYnwtRuEXes3YvuqVdhJYszsWrcBezduxuHwcOGQJmzizMGDCn8exuUTZ7SP79o2EI3c62HE4IECd1t7+jQfBc8KhKLCDxjaKwwbl60QOOzmdiR3QuSKJkrFiYyEz1eIc0iEM1MV7mVkKavENDDLQJ33AAUkxCVFxQL/K/rwRvMdKkL8gAaWgvynAv+9AXRAczKsLXjQJMm4NslFtSqCo0kdtHa3wYCARsL0fiFYOr43jq2cIiTsW4WMU+HIT7oqPE+9iY2TemJm7zZClyb18EvfLti7bLYQT0J8bP1v2DnvF+FU+DoR15ev3gjZ6clKtQmNfPKgyqdUn3BlDpbmp8rlP/C0QHhawCvvvOqkdLZTuty90K5IsVBzuTY1qUct76aiSDSXZXuvoDnVW1aoeZBXy/TJdcmiV2AZlcREDW9ev0BSPIc2JApx0beREJnwXxdiKKW84m/FCFGRMbJKrMITJEWIy6xQ8inrDwplm3EI7/g9fcCbe3eEU2sWYGpYG8zr2kI4MLoLbswfgaztc4RzM4ehf1NXtK1rIbS0NUV7EthxreoL+6b0wbXVU5BGxxEm/fg2RKyegd9p8sSc+XU47u1bJlLMvIrYh9c3/8Sba/uER4dXI3x8D3jbWQoNOeHMygz1rMwFF0tzaQfP3S0ZL2c6BtT3gCNNfhlvL0+aCJvBzsxUqEWDJLeCNaqtIyyaNZckKhfZWQ+FuNg7OHTgKPbvOyKk3E6UiYxWaNXvUpNk+vLZc+TSBPR+Xp4giXTpWchOyxRy7qQi/17pCjE/t/Ajn6HRbA8kxNGXriLxZpQQe+UqerbtCN2qtYQOnnXR18cV7evbCgHOJLmulghwsRDauliiLf0c6GJeBhO0czUT2pMUB5H0BjgrtOVqEa7maOlgLLRxMkOH+k4YGNxP2LfzKF7SPqKGjHEI1+eC+48hI19SOtlSHsuXn5Vce89twZWkXN7nntFxLzM7V4iNT8edtLvIu/9QYBlWu9OplF0hLk2kyxA+qyzByXRfCvFtpcLEvxLiG9dvyMqwKsSXSYgvXbiIEydOCrNmL0fXzn1E5JiRAwbC0c4JAc2bC03rN5TGX53bBQu2ljZSTaJ3l26Csb4JenTuRNLqJJgamyKMBFMNwfBwdUXLZt4wNjIRrC0spaFH9Wo1BDsbG4S0bUNyW0to4MahE27aTqAuDo4k6PVIdvWF2rV0ZGXWxaGuwIuFXNmhLkk004J+10AOldCEjPYL646+RFkhVmX4nwlxh7Zt0crbD34kw4w3jR28KsyJfyoN67lqV6SrVK5B+2AdtKTPijE1sSI/qiDjMuNa115CnH7QwM12mpBYq0Lt7GCPGVOmYOrPCty0Y8GCBfCniQYzaNAgDB06VLtgduzoMWza+Dt9d8cFlmYW1sWLFgmbNm3Cnj17EEaTAIZX03ft2oVVNMYzhw8fpu/Z8rMQiLKVI7g5B68YqyvIqoSqgvz99xWkQcd/tCLMq8xf3vY/ylch/irEX4X4qxB/FeKvQvxViL8K8Vch/irE/6uFeHD3Hpg/9ReBA94tLWzQliSTuXLyKLp37go3Vw/BzrYudm5eg7HDBgue9b1Q38OLPvTpQuTFK3IqSy2rJrHDZUIkUqKjkBZ3WxtjHH/jBqIjInD11Clh+byFSi9uDSxwtc2d8Mex80JY557oHNReW8Mv0Lcl2vi2QKeA9kJoUEd0IXp16S6M6j8Uw/sMxE8jRwmzJk4g8Z+DFr7NhB9+qAxTa3ttmQ8OmWAhrkCXjBXtNAvnTsPksWOEpvXdsX/7GqxdMEMw4oQ7O2PMCvUVIhaNw5Pz+0hmbwjF99NR8roAf7EYa+W49JTwp/evUPLsIYrvpgiFHCbBIRSZ8UJhajRBUnw3SeHtC/h6NZF6g4y+DtcnrqFp31wVOiTFpiaGMDc3FeqwHBvooirJLsPvz8DQSJtU50NC3C4wGNWrcotXpXC/pakJvW9TgX+HJN71GCC0DeyAVq3aY/HcJULk9SjkF7yQU6FMPh2ANy9dgT/WbxJ2rF6DvZu34s9t4cK+zVvwx7q12L9lqwLJ8dkDh3HmwJ/CqX17cOHoUWxcukwIC+4gtRmn/DhRePbiBUnbU20h+qKPHzC4eyg2LV8u3Lp8GbHXrtNkLFZIjuY62AlIJ6liMpNTkc11idWQiYzMz4T4UZ4SMqEKsQzI9B2pAxaHaORlZWPWj5MFW10dNDCjg1fVKoKTiQ6mhPkgcsMoIf/MInyM3YnitJNCyf1ofMpPxadnWQrP86RW9aei98KH/CykHFqDNSODhe2/9EPqtbNYMnmMEOjlgZ/7dsehNUuEoSHt8NvE8TQReSzczbxDA/RzFNO2JRSXSKhEWeF98rQMT5TbvxTiZyoswy+U9s/Mq1dKQk9ZIeaB+s3b9xqUMAt1AOfTvdzQQxVIkWKJp9QIpcCPU2AJKCsLb968QkJ8Em7HxgvxMQn0nSb994SYfsftW9FCTJQSMhEXmyxwO24O+1D3Uz59LeWuNA1IVDgulHlD7y8j5haWjh0oNKnrCEsdHbjTPsh0cLLB9kHt8ejQSiF21XTM7UgDUWM3YYCnK4Y0rof+zVyFkYFemNUzALt/Hiwk7lqBjKPrcH3tNOHAT70QvWoq8g6uEF5c3kUivB+vruwUCk6sQ9aOuVg/rKvgaGIAL3srOJsbC96uDjDT04W5gYKtqTEaOjuhMUkCY1BHB3q1ON64tsCNOviUqE7VasK2DRtJqh4iPY0bpuTh0vnr2LfnEE6fOCe8es5NNb5YAPiLP3Nlf3oo9bvzNHH3DySpNYdEOCuVExiZNOTn5n22DXAdYvX6K9oeo2iMibp0TYi/TuPMjUj8NGiI4OPmhEY2JnAy0hFcTXThYaEHL2sDoZG1PlyNdVDfTFfwtTGEv70RWjuaKNQ1EfFtZqMv+NkZIcDRHM3tTYSOng0xY8hkJEQnCyzBEhrEIlvmby67vZV9L/8MPq6UrcWt1h9meJLIrdHVHBqe9HIeTUEBJ9IpyXR59DkmJKULScnpNNF4gFwORbnHoRK50u4+OztHyKQJX3oGN6NhGc5Aamo6UlJSSYRZhkvjh+O5/jARxyETJMLR0dECC7GESly/Lly7dg0RERwqcVlgGb5w/jzOnTsnnDlzBvPnrIR3k1aCvaUdRg0ejGpVawi9unaROsNeGgJbtBJB9m3STGjp5wdDA2N0C+kgONrXJRwQEtBWMDY0gQ89ThFLLxjqG5Eku0lpM4bDDLjUWpvm/gInpXMYhH+zZgJLNRcRUAWY2zjr0v7r4eYicNk3rkfsYG0t9OnW7bM6xNK2uUwMsVpuTYVLrqnJdYoQB5LA+2iF2FfCJRqgWYP6gjO9t6pVqsNAT19oGxAAPz9/uWR8fHzJi74nb/lB4DAEK3NzGBkYCCzAHrQ/u9DrME52dvBu3BQX6LtguPbysWPHtM8fOmQIhg0bJlLMjB49WjwojN4ns27deri4uODKlSsCS/AQeg5vF8yYMWMwfPhwrUy2adMGy5ct1fpU2dAKhhPspCybBi7bVlZG5XHfqLWN//YfNun4t7Fi9lQSJz2BN752LVth3aLZQkMSZCd7FwS3DRZ6deuO8SOHowV9SUxDzyaYQAPyxbOnhEReCeYY4iilqkS8tqKEUpeYY4hTYlQ5jkHs1Wu4STtQxPHjwtyfp0q9PK6GwHxPcqpn6YKdR84I7q5eNEvzRQsfhbYkw+2at0Zb75ZChxZtSaJ4Y+SNMxSj+pG4DxqBfl17CpOGj8CcyT9j+oSJQtcOIdCnneqHihU0/CC1fKtVqSJUrVINhjQrXbhogbBk9nRYmZng+N5wYd2CWTCtXQON7SyEpQODcWXJZOQe3S68iT6L4vRYlOTnCJ/UeFTNiolIcdE7bcxxyYNMFOckSLMO5kPKNXy8w0X9WZLjUPLiMboGdYJOLW7QQYMW7bx6dXjwqino1KomlSV0alUXeIXHzMwYNWrVFPjzNDExg72Dk+Dv3xKB9L2qMcTGNFhaGBuTDLMUm9A2oYOGtOOGde8rBLYLkRXiVYtWC5E3YkiiSoX41cuXCF+zAesWLxV2b9iErStWYhVNQpj9W7YRm7Fn0wbhUPgOHNi8Caf3HxRO7N2Ds4cOYsPixUKHVi1R39UVP40bK7x4/QZPSdyeP3suFBW+x6DQTtiycq0Qe+0qYkiIb9+4JSTeUhLsSqtM3EFOiiLDDMcs3stU4oglljjvviLENCgxPGB9fPdSW2WCa4iOGzwI9ga1BEejOjCpWRXTOngKmTsn4MO1pSiO2yGUJP+Jksxz+JR7S+EhydyzbJQ8zxU+vXlC3/9bqEmXJYVv8DErCnHbZggzOjXFtO4BmNQjRPi5f3e0cHXExN7dhFU/0Tbs54v+7dsLd1MS8fjBPRSVfBJ4lZhFMz+f65PySrBGhPM1PHlClAoyxyMqQqzELLIU8ypxqRAzSob7/2HvPaOiyrd97XN36GDGQJKcFCVIUJCMgARRUFTMObRt6KBtq612m9s2Z8WIOScQRQwIBhBRRLIIiIo5YI779845V60C3b3Pe84dd58vR8Z4LKooyqJqhec/awZGyT9W8o6rco+rC7ESIf5YgKtQf67enyNiiiQo8OPl53P/4VwhOysHOReu4B3dj/lYPv7/v/j+LMRXSISZrAtcUc+Pr3CLZIKLodQcYZYSkfp/IcQP6bWbPnIkAuybCS0tTOBgbABHQwU7XV1sGd4Vlaf3CGXblmPT8M4YE+IhhNqawpXErUHNWkJNOv7Up4WpSf1Ggn1jfUzrEYyM1RMVlo9D9popuJMQIzxJ3YaX6Xvx8vwB4fHxWJTvmIvDM0YIUe7O8GhmAx8HWyHQxQHONpawMTYULAgvV2cE0ImZaW5liSa0kFYHE3HBDBfiGDRsIBzefxhXr96gk2GecGB/IvbsjMNFOg4wXLBY/T1Rpe/Zk0pBpkNy7+Fy7hh0Q65zIZ0aIb5G++Od69c/EsY3L59rc865fiT9WLJWiC+c4cmn/Ikj16qko3tYKEx0dGDWUMGSaG7YEC60aGVa0IK1Oe23TfV0BGfTRmhtqYgxE0hy7E3S7GtjKPgQoXZW6OjuJfz2w2zcLLslkWCG+2Z/tAD4k6/qEWCVqr7bH19/x4Wwb1iElU9TeNvj/UpZiD7D4yccIX6CO3e4eE7NGb6LWzcrhMKia0g/fxnXpENLqaaQjoenlArFxSUiwfn5HBlW+FSIWYSzuLsEkZmpRIdVIVYL6tQIMQvx6dOncerUKYGF+OTxE0g6ekw4mpiIQ/EJ+PXXeUJzW1cSQB90CmsvWJtbY8SgQdqc4TA+H5F/8HANpl3btlLUZmNpIwzq1QcmjU3RyqWl0CWiAwxJgvv26C7Ys9SS5LYlGWZcWzjDzMRcK7yco6tTryHcXXk6ngvcnJzpPKmLNl7cE9hTitjq1taRYR2MraUVzOh8yJFjxoVkekg/ZTqdijqdThXiTyPELMVdIyOFTuHtEezjWyXE7m7wdHGBJf0fTIN6tJ/pGcHH20cwM7NBWGgwTE1thNatPfHll7UkUMhwkZ10o3BrKTiT3POEWQcSYcaeB5LQ37B7x05h4sSJmDx5MrjwjRlFLjdy5AiRWmYkHctYRAf07ytwDrET/c1HjhwR2rdvjyj6e1SB/oGEmIValcng4GDMnz9fxJfhjhVcLMeFfAx3lGDprcXTMYmaNZRJep9KqSrE0oHiP8kp/rcQ4O2lrfJsTRvZhB+HYcWCmYK+nj68PH2xbPFc4WjcTphbWMgbw3BB3eF9W+Hr01bIPHNOGY6gEWIZynGBpeSicPncWWSnnZM0CiaDdqLUw4eRHHdAmDDqB3nhOJKpRGtrKkJ8IF5wtndGiH8bWUkyob4BCG0ThHZ+ChEBIYgMCkPnDh2FIT3645s+gzCwWx+Bo8UTvhuD6eMmCYt//wOTx/6i3eE4IsKVk3+T8Ybc0PpL6Fs0w5w5C4Ur6amYP2MK7G1shH1b1mH+1PEwbdRQiGxtj6VDOiN5+WShOGEjHp45hDcktsy7G4Ukvg+0XSi0xUWaUc0fXlXifUUx3hamC69zT+NF1gm8zE4R3lcU0vMdhxFDhwnb1sfA1dEWPKCD4TGtjfV559URGhCmpo1Rt1494euvvpZVs2MLFyGIX0NaaasnQI4QmzY21CbJN2zQgN5nL0R36y2Eh3eSLhNL560Q0s5kSKRCTZkoyLmCtQsWYgtJMbN15RpsWr4cO1avEWKXLsPGRYuxd2OssHvdOhLh3Ujcs0/gAjueYLdo+nShPa3qvWgFPXPqb8JjOilI2zUeV0q8efUCfSMjsHndBiHzdKp0msiibYvJyVCEuCArW7iWm4+rJMVX6STAlBZeleEaPKBDuF6OexUVHwnxi6cPNcVT77F93Xo6iRrAWq+B4GFliMTfe+DFmcXC26zNJMF78D4/Tvhw9Sg+lJ3Gh1tZwvv7RfjwqEQZ2EB8eHYfH969rJps+PYl3lfewdOsQ8KlmLGY1zcAg9u6CZGeLujZxlu6CTBBzi3QM9AXzpbWwoge0bhdlq+dSsdC/JpOrBz5VaPDd0mE79x+IEiEuFrKhFaK7z9ReMDt7aoE+eOxz4oUy4hnbdoEi7ESFa7i0+sfowi0Ast79WI7luSigkLarvKF3Ow85JOIveOPpwn8Cwn5V1/8fnKUP+9ijpCbxZX1V5GvgeWCJ+6xmDA8ffFTIRaR1/D4USWWT56Emf06CKtG9cAPHdqgp5eLMNDTCQ+Ob8M72m+ZytRDuLDgJ2wYHi380jkAgU1MYUGLVaYV7avdSGKndIsUxnRoi56tHTHKr4Vwau5w3D+xHk/P7RSenNqAV5kH6XG3CLd3z8ON7bNInMcLo9r5w8PWGiHuTkKYB+3zdNI319cVHEiAzQz04ePiKpgbNYYuR4bpRMbU4PZNJMXqpLvjCSdJqMplPDOza/te7N+VQBJ7Q6guh6ogcpoRLzKZW+U3cUOixArXSdCUffCawKPVK0pLNY+jbAOvXzzTHief0oL7XNJxpJ1IETJO0QL4NJ9TlPPJiB59YVC3Lkx16gmWDerRorURnEz1hOaNG8K8fl2ijmBnUJ9uV6SY8bY2hCdd+pEcM560f3d298bvY+cI9+8+0EhwVXS3+t8rt316vZrw/jPK31jVFeadpOSoC66ntE/x6HVepKqf3Ny79wi3K+4p3L5Ll3dQzlFhpvyWSG/q2QtCdk6BZhhHqSZCXIKiIm5hyMV0VQV1nCqhpktImoQmAshCfIHO3+fPc6oEka6kS3wUIeZUCVWITypCfDzpmJB0NAmJJFIH9h8U+vceThJsi4iQMMG7lRtsbZqiV5doQaduffTqGi3drZgm1k3Qq3NXaY3GRJJQBvr6w5rO1YyXuzvcnVxh2NhE6NQ+XEZBW5hZCD1I3ni8sxV9z/h6eMDSzByNDRoLjiSPLg5OEhlm3JxaSGRVR6e+YGNpiWA/H9Sl58VYWZpjcN9q0eGePT8S4k+L6tTIsCrEnTtEkBD7wY+eN+PBn8rwRDladDIBfv7oGBGBdmFhQiNdIwRydw06TzPGRmbkRbVleBrTnBzErQU95+bNBVWEHW1tBXtbTvWwwZABA4WKWxWwoeuq/A0ePAgjRgynRYW+cDAuTrpP7N2zR1i0aJEM/Fq6dLGwYMECSZtgCWasyBH27dsnaRgMp0xYW1vLQA9Gpw5Pv6yp7TIhrd1IiP/+Vx668Tf8hSfW/Y0jwQp/libBKRd/JSlmPv3Zv4XPQvxZiD8L8Wch/izEn4X4sxB/FuLPQvxZiP9XC7G5iRk8eOY4cWhrLIYP6KtNOtfXM8DcqZOwYOZUwaOlOyzNrenFHSCM/2kMRn//I0myrZCRehp5tCOpOcRqv2Ht9fQ0yRvOpPsxGadScPrIYaTEHxSG9e+nEeKvBe6pp9PIHJNmLxGc7Z3g5+mNdgFthc6h7dE9ohPCSYaZiKBQRAa3Q/fILsKQnv3Rp3N39OvcQxjUsx8Gde+Lob0GCn279MCUsT9j0ezfhSZ0gqhfh3NtawqcNG7p4g0bO2dhwrgJKM29iPm/TxU4z3b3xjX4Y/J4wUK3PgYGtsay7zsLRxf/jLw9i3Hn+A7hRdYpyLhmkmKGJbh6Ox7+2Pzdiyd4W3pZeHUlGc8zE/H0/BGBb+M826KcTKGi/Cp6REdJHjHDH2uyEHOqBFO/QV2YmBiiJu1sDKeEWJhZollzRyG8XTiCAgJQn04iDLdd48EclqbGAo+y9PUNRM9eg4X24Z0RFBiO+dPnC2dOp+PBoyeSd8mUlxRjBS0ytsasFdYuWIR9mzZj5+q1wpaVK7B11WrsXLNG4FHOh7bvIDFeK8Rv307Xt2POpIlCh+BAuLs4YxpJB8MniPsP7kmhGPOSTpZRoUFYu2ipkHn6NM7TNsUnSebSmXT5aLzwSp6Wa3lFKM4rFEq4JzGdIK5fKxFuXed+xOXa0cB8snrx5A7STp4VnIyNYU6vc4cW1kLRljF4TiL8OnON8PbKDrwvOoAPxUnC+xJ6v69zqkS2wr2rkjLxgWVYFeJXT6t48QgfKu9qR/8+PLMBaYuHYfWwUOGbkFbwsbWAHYkT09TECD52tugZ5Cc0NTTE9kXT8fzZM0GRundQB5ncJQG+e59l+L4GRYjv0omekbZ297nvsMKDB3wiVgrsGLX3qVpkxyj5xErbNhbip085/aFKcv+MKhlWJVpTlEe8l/x6RRS4jV8Bf7RLJ3aVwsuFeP/mtQCNdP1Xv0SI37xCAYm1kFuEwoISLfz380Li7VtOl/gg6Rz8vLRC/InE89+6b10MhgR5CI60z1g0aoSWllbCvumj8OFBOd7dKhIeH9mAks1zkbdtvpA4cxgW92yL+Al9hYxlo1G8cx5K968UyuNW496Jzag4sVV4cukw3pacw4srR4R7h5fg9sH5uLlzplCyYQJK1v+CnNUThWUjuiHapxVaNbEUAl3t4WnXFHbmpkJTer42JMGDfVsKe2Z+j7Hd20KXx8ISnGfI410b6+oKKbQPXLxUhAN7E4Rd2/Yi5fg5yfOtnutbHS6u1A7iKOdCuuvanH3e51iIWYSZIlr0KEJcJZOvXzytWiA9rcTZxGM4m3RSOJ98ls4555DFaVLEsG69YazTAIZ16whmJMS2evVhRyLMcJqEmQ7LcD3BivblJo100MK4gdDKohG8rPQR0NxCaNeqDWb8OBcPaZ9gFAFmNJueZvP7ZwGuTpUAc07/23fcE5x7FPN2xi3WePS3yjtZcD2TvHxOlXhB+9szPOJ98KGyQL1/jxa0d+4Lt+/cQwUtNG7euiXcoNe4rKwcxVw8R1zIvIws2s5LS0qF4uKr0nuY260xeXlcUKcZxqHJH87KysZF7tF9Uek/rKZKCHQOP0fnbxZhFSmoo2Muo80hJhFmko4cxZHDh5FwKEHYtWsX2rfj1AZ7gccsW5qwqHoK3GtYr5EhBvboLrDMtg8JlXZpjLW5Dbp36oyWji5CU2sb+Ht5wb6pndCoYSP06NoFxobGAsvvkL49SfYaC1xkF+znCz1dfUG/kS5JqSs9rrmgR4tBdgAXezuhXu16sLGwkJHJDPcxHtyntwznYNShHP9Z27XqQtwlIhJtfdsgwMtbsKNjRG0SRVtr7pfMA0I8SIrboCOJM+Pt5Q97O0cJDDJfflUDJiTufh7ugquDg0i9fRNOj6iSYW3KBGFHtzvZ2Quc8sHNA9Sc3vpcL6CnCzMjA6ERSzY9Xq1atYQGdL0BHQfqitjWRpMmTaR93V/+wmkN/4Evv/w73a8mHOzthQa0aJYxzprH/+KLv6NRfR3Ur1dH4LxhNR1CTZXgUc5cbMfwEI5PpVgdyvE/NpjDx601fh8/VogMCYarvSNtbE5CcJtAzJv+K4YNHCjwpBju4pCcsFcY0q8fnBxc6IVuLaSnnMZl6TChiDBHiy+dPVdNkDnnKw0XaUdiWIpPHDyojRB3pRUdF9Wp3R44StzI1A5L1m4UXB1d4U9CHEwbDdOR5DcqLBw9I6OEcHq+HYND0Tk8UmAh/n7wcIzoN0To2SkaA7r1IRnuL3AEeWDPPpg+4Rdh56ZtmD5lFubOmS9knj+Fzn36Q9fYQmjlHYiffh6P4oJLwrbVq9DM2hKbYpYKPwzshWZGjdCrjbOwavQAJC0bj5ydS4WKU9vwKicF70iKmff3y/GPN5xXrPapZN7i/csnwrubeXiTdxYvs08K70qzsGFVDFq1bC20D+HCAgNtn0B97jtsqEsbZl1BT1cZ3vEViTDDBTJmtABycHQWOtPqu40/C3E9Qe0yYWFqInDlqa9PIKK79xfahUchMDAUS/5YLGSkX8Kjx0+1RSC3yq9j87JVWDJjprBx2Qqsm8dT6hYL3Jd4y/KV2L9pk7Bnw0aZwMciLOzYibhtO2iRMlrgCLGnqwvmzp4lPCWBEhl+/ER4/vQJIuggun/bLuE0HYQzT5+jRdd5ITuNu5tcQv6lK4JIEHebyC0Q5ERccFUiVcyNkhu4ff1GVYSYTm5558+gBS18GCPaqbu0boLSXeOFh0kz8SxlPl6mrRTeZe/E+7xDeJefoFB0DO/LzuFD+UXh3Y3LeH87D+/vFQsfHt/C+8cVeM8STLAMf6i8QxJVJrwtOY0Hx1cifdFgYefP3RDZyhZeTc0FKwNdGb7g2byJEOJiD59mlii8cFpQB3BwHjAjeYcsxXQyZW5XaGT4jgLnFd+9w7nF3JlCKdy5f/+xSDLDRXYcpeLOE1XdJ56hUqXy05xilX+WYgVl8tYz/h2mslKTw8v9WP8h0dmCvALkkSgxBbmFKMgqrIoQ/ze/RIhfP0dRdq5QkF+M4qtluFZ8XeAFwOvXPMBEgf9/ef6aiF2VECuwJB/csg1WvJAkatIJq7VtM6ydNEZ4dY8WV5X38DqXO8ekojJhDZ6f2o6XWUeFR2d24Nzy3zApzE2YHOyMHaM64vLKn4S7R1fhTe5xvCk+K7y9loZ3JWfxOu+Y8PD4KpTvmIIbO6YJ1zdNRNHacchc9IOwYFBHRPu6oY2LneBgZoSW1mYwoRMhY2fYCDOjfHBu7g/Ckm6BiB/eGevo9xjuK1q/no4UFzOnT6UjJeU8du/cL+zfdwQlBQXaHHuui1BfZ1UO71fc0Qox9/qW6XSaT2S4qwfnDfP0SKYoJw9lhYVVj/cPzuF/rpXLZ5VPcfboMZw+onDu2CmkHSeSTgizx/9K+2j9KiGmY2ATkmD7xpyP3Qg2DevBRKcuTBsoWNavAxvdenA0bCi4mevBn/afbv7thBWzYvCABFQVcjUi/Ok2Vf3vrR4RFgFm0dUIMOcH86cOah9vlmDe3tXr3OObi+ie8sJSFpfPpKiVC+mYe7QP3iYBVvffOyzDN7nfME+kuyVFdCUlVRHhq1dLcPZcJpJT04QCWnzk5uaLCDOcn8/Xs7NZhqvyh9WuEtVzh9XuEtJZQiPDnD/MxVbaCHFyMk4cO46kxCTh6JFEEuIjWiE+FH8Ia2JiSazcBA83TzpPd4C1lY3APXpdWrSANYkiw1PuzIws0DUiQgjjTgtGptLZgeF8W8fmJNZhoYKhngFdd0Cgr6/AU+ZMjYzIa0IFLlRzsneQCbyMAUmxpamFdJJgjBuzSDeWzhMMBwRZpFmKmXaBQcqEOk2XCZZhNTqsRoh7dqkSYu6bLELcMVLoTEIc5OsvE+qYFk1soFOzlnS/YJxbtIQPibI9/U2MK8l6Xdr/6tSpL7RycYa3W0vJE2Ycm2miwPQ4DAuwkjvcRIGORXZ0qQqyaWMj+dS7erGbXLLE8oQ5klv9Rg3Iuzgo+YXmPv+Bml9/JZgY6ssAH1V41cepX6+uAu1z3EtY/fnX9BgcqKtRgwsBFen94m9/k7xgNTdYvS/zt78ohXTq9U9lVf5Pea7/xm4Tv/w4HAe2bxC4CtHczBzD+vcXTsVvp1WRHXw8fQVvd2/sjl2jrQJ1cnBDty498NuEKQLLLgswF9MxnDbBwxIu0aqSycnIQFYaR+/4oy4lQpx65AhOxu0X2oeE4O+0iviKXnSGu0BYOXpj8649QksnnuLSCv6tPYXwgEB0IInv2i5CGNqrH7rSyqofSS4ztPdA9OvWCz06dhX6cqS4Sy/0iuouDOreD707RqNvVA/hh29GYP3aWPi2bS8MGjoUP02cjLqNDATf3qPg0Xkofhk7VijNv4Tt61bSyYIL0YyxadkfCPZujebGjYVvO/hh+8whSF03Wcg5sBwVJzbhadp+4W3+Oby/w8V2z4T3/LE5CTF/jM68f/4Ab8tz8LbgrPCu9BItUKahNu1EjE5dhlZvGnhUorERf/yhK3CXCSMSZi6mY2rWqAlLC0s4ObcUunbtDn//IFkZMiaNDaXLhJkGHdoZg4Pbo1t0XyEsrCOCgtph0Yy5wvm0i1LooRaZZJ49ixV/zMPWlauF2KXLsWXFSmKVsHbhAmxYvAgHtm4Tdq1fi8N79mon18Vt34ZDO3dg0g/fCR1D2spoy4Vz5ghPSU5YhHlgA/Os8hHa0Yo/Zv5C4TwdkC+knkUGLcyY86dSkXeBp9ZlCxwhZhEu4YI6gqNTXFinfmRbfq38IyHm4Rzf9ekBXVotMz5NGqN401jcOfircP8ISXrqMry5tFl4e2Uv3l09ineFChIhLs/A+1vZCrcLSYSvkuyWCP94WE6LohKiVOEBUXmbJJlFmajIxds8jgTOFjKWD8OEyNZwMNUX/BxtYWtiJK21GPcmZvBuboXR3TsJ3KaKx79yJJOR4joWYk2RnZo6wRKsohTcsRw/kGgUF01qq9o1H9tWtWVTiu7Uoh+WYUWIqw/+qBJkkeRnSqGQWoSnFuYxlZVPJEr2jmSY4RSKYhKkHHrfmHwe85xNQkx/E/Pf/WJhe/vyqbbrSGHBNRHh0pKbAqeFvBIhVlJOqp5nNYkXIdaI/stXyKDtzcXcTPi1S1vETRqABxlJwvuXlXhdlo8nSZuFB/uW0MKJ9/tU4cW5/XiVEYdnGQeE0t0LcXXbH3h0fK3w+koS3pZm4k3+SeFVFt333FY8OrFaqNg7Gzd3TkUZiTBTFDMWRavGIHfZaGH9t10Q5ekMLzsbwdnKBP4OTRBuZyHM7ORN4huJIS2bCFNCWmKchz1WdPYVbOlYUr+uDlo7uwinT1/C4YTjiF2/RYjbGy9R2+qDJ+R11ggiT5m7WVaG2yRrAkkxi7BaxMpCXFJYRPtkvlBIQlxefJXep/cK9Bivnj+jbeGD8JLei3OJx6Q1I3M68ThJcTLOJPL47GM4tG0rLUgcYEwnZ8aqkQ6a6jeAo7GeYM1CXI9TJhSsdenndIx0MtIVAm3t0Ce4GxJ2Jgi87bLAVpdh9fJfCXBVtFeJ+Crt0xSk7eAbHtpRJcicIqEutCRdgrYpdX/ixb+ymOV9jVtO8j7JwzgUOGVCGc/MUlyhdJQo5fZqShEdt1bjNmuZdOxjzp5Nl8hwfkG+cIUlWMhRuHyFRPjSP4lwRrpCWlo6PcY52g5YhpXocEpyCpJPJgsnOUJ8rCpCfOxoIhKPcIT4kBAfF0eLqAOYPn2eYGLcBAN69yCRay7YkeR17xRFctdc8HLzQFhAMMyMTYUu4eGwNudCNzNhWL9+aKDTSNs1wsPFFXoN9RHSpo3g6uAkqQ8O9L4yPATDjIdR2DYRwoLakATWgTmd65iO4aEyulmdVBfk4wWe5GtiZCwE+npLZFhNmZCRzd0+TpmoXljHMly97VqXSBZiX/jROY3htmlcXGbXtInAk4KDSbpr1+J2hwqcKhISECDwkJAWzey0EeHm1izBTSQtgmlmo3TDaGalYGtpDTsbjhI3EXgYidJiVhlE9uWXynS4KoH9Evq6Deg1qCXwff7yl79qi+S+pvtzIdzXX3PQkkcv/1UTEWZZ/Q+S7b+hLi2i1cl2LM88MKxqst5X4itfcgcx4lMZ5VZsXITHI6KZT3/+P8JnIf4sxJ+F+LMQfxbiz0L8WYg/C/FnIf4sxP+rhXhIr2jpt8fwuELOc5kzebIQEhhAgmyJ7lHcU68Lpvw0GvNmToNDcwchNCgEK5csRjJt+MyVC0qrtStcUMcynMY5w2naFApOmWAhvpCSIqQnn8Qp2mFOxe8T/D09pDmzmoRdq3Z9NPUIwcaduwX7Zo7waa2MN2RC/P3QjqS4a7v2Qp8uXTGENtjRI74Tfhw6Er26dCNJ7iQM7NYXPSK7og/JMBMd3kmICukg9IqMxshBwxGzaoVgTf+fsZ0rdHQNBLduwxAwbDJaRfYWRo8agaKsC9i4aonQ1MoUy/+YgTZurgJLy8iO3oid1F84unAsLm+ZjZJ9q4XHJ3bi9eXTJErFgvSkffcCH96/Eni8M6dJvM5LVbh6BmNGfEMHgboCt1irxzJcp5ZQpw6PXtSTVAmmEf3c2KgxvvyKeyt/jVok0U2sbeHasrXQuUs0WrVqLcV2TMP6PMKyAf2ermBqYiHiHE0yzISERkjKxMp5C4ULnDLxhFMmeIQv9+i9hpi580WEmRVz5mJbzBosn/2HsHHJUmnFtnONwsGtO+j6KkmdYPZv3iJpKJNHjxLa0gGplZMD5s76XXj24jUJOJ8gWMQe43nlY3rfgnBo1z7h3PETtE0lS9oEc1GKPKtGORfQQb8gO7cqh7hAyV3k4QDM9eIy3CwplcIrJpdOIsaN9GDZQEdIWTCYJHgG7h+eLlSenIfXl7bgfWG8AucNl9Ei53q6ln/cuIgPt3MV7tN7/OQm3j+5Ibx7fBMfHpZppJglmRZHj24R5cK7m1mSdvEiPVYo3/sr1v8QDmczA8HJ0gjuTa3hYm0uOFsYwYOk2JlEhtm/aiVe0on4OX/0T9y9y62aHmhzECtuKcU5d+7wbRox5vZs99SCO81oWE6d0BTYSYGPSDL3KVbSV6q3Ynv6VGnHVjUWWulZrKKkSSg5w0ruMbd0e6bw+JEy4EAjxDz0orTkGgryrmoopkVNEd6RODCqgP1Xv/j+L58+Rv7lPKH46nWUld5E+fUKgZ/Dq9eKDDMs6dxu7iOhJyl++kyBv+eR84P93IRJ7f2xd9wAvLtXpvDoLu2zl/EydY/wOvsU3lzNRGVavPAm8xDeFp4m2U0R3uUn4z3t4++upQvvb+bh7fUsvLqSKDxN24mHJ1fjdtxCoWjDRGQvHon8FT8Iecu+Q+Gqn4ifhbixfdDFzRH2po0FJ3MTBDQzx3f+LYQlvYIxoFUTnFwwXkiaOhgruvhiY+8QoYu7Ex1X6iLA01dISc3Avj0HsGPHPiH7QhaqD+JQkmqrUgie3L+PGyU8Gv2WcLOcXutSEuKSUoFbrnGqRCHtkyrcJ1wVTBHiZ0+1QvycFnWphxKQfChRIf6ISHFKQqJwin62dMoU+Ng2F5oZ6qMZCTG3XmOs6ZjIucPWdFxkmhmQLBvpwaeprTA0qh8unc/S9tXmYSzVBbi6BKsirBTEaXKD31YtphhOV5KBLiTVwislhenlK5ZfZWHFRajq/8cpOJw7/PBhpXBfk6b0gPuDc2HsfaV3uLIf877L+cMVUkzHKEJ8XVIlmIJCzpEv1HL85Fkkp55DTg4X0uWRAHPP4SouaXKHL3C6RCYP4lB6D3PusDZ/mEU49bQCp0wkn5LxwMyJE0pBXVLiUYFTJhIPH8ahuHgh/mAc4g4cxPbtO4VePb+BkaElhg8aILCDhLcNQRsvb8GGhK9rZAeSOxvB1saWzgn+2hxhVycntPVvo80Jbks+4N6yJZ0X9YRuJKHmJM7q4I2OoSFSKMd1U4yLg6Pk2HJaEGNuaoxWLRwlF5mxICnu1C4UBvqGCnr6MrJZRFjDnxXVqX2Iu0VVybAIcUSEpExohbiZLWp8xSOYawlenp6wJOHXpefOmBqZIDSQRdhZaNGMFgrWTRTJFfh7G0RHdRa+GzECo4Z/i5HfDhP4ezdXF20KhTktBritrSrAnMZQswanUPxVsLW1RRN6PdS2rUb6jUh6WWb/KrCThdJr2NhAV+A+yNWFmvN869auqW1jW7tmDTSoW0f7+yy7IuI8fO3v/P2ft1VTc4Y5p/h/LHdYJYCkw9zEVHBydMCW5QswY9I4waSxEb1JXjiyb7ewZvEiWFs1oY3OQ1g6bw5iFi9E1849BOkkcV6JDgtc7V8th5hl+NLZs9qiunMnjtNB7BAd3A4IPOf8S5ZhTZeJGrV04ODbAWu3bBc6dQiHt3tL+Li7CYG0KuS+fu1op2A4j6gHrTC/HzZc+Lb/UAzo3gtRJMtMr05d0Z3EuHuHKKFbe/o+ojO6h2voQBtWeBQG9ugrrFq5Gq1DO0KHVp2MR69RCP5hBryHjBecQrti2KCByL90Xti8bhltsBaYNflnwd+VVnRmhvi2vZew4rtuODB9FNJipgh5W+aTWG3G64uJwvvyPIkMSl4x8f7VY7wruYTn6fHCi5zj+HHkcBjqNRQ4P1inHvdLrimwHDemA3zDRvUEPd2GMDZujK9r1FD4uga9f7awt3cSort3gwMdFL6uUUvQISFu2FCXpNpI4L7UlpZN0b37ACE0rCMC/EOwdvFygSPEj0gi3r59LeRkXsTq+YuwfObvwtZV60SQN5AIKyzB+gXzsTt2g7AndiOO7NmP+B27hbjt2xGzcD5GDewvhLbxRZC3F9bFxAgcPXlc+ZR4Irx4/hSjBg/A+sWLhdNJR3H+5CmS4lSBo8RZJMScRyy5xCTEhcRVOhkwJflXUZxfVeVeWlSCm8XXJDLM/PL9z6hNB6xxUR7C7f2/4VHSXDw5uUh4lbEeby5uxZvsPcK7fBKc/CMkNSw2yXhXnIp3Zefx4Va2Agvx0wp8eP5IgXPFnz+k2+4J757eUXKI75cK78vS8fbKQby+sFl4lDgPKfMHIszJQjCg996tiTmcrEwELupsZqSLFsZ6Qi+v1rh1vVQbgeKTqkSG1aKcCrW4TkGJHNMJlwvthGpSfJ+HofBgFCVSLEhxY/Uiu3/uVczC+8/XlQgYX+duFY852sxR54cPIZP2NDnEHFUrKytFAS1amPzcIokQvyVxYP5vhPjFk4fIz+FCPVoQXbuB62UVuHnjrsDCy5E7VWg+HkhSFclWczw5j/jmxVSsHBYpbBrRHc+4m8zT+8J74vnFFDw6vEV4nnkCT88ewuWFE4WlUb44N2s4XmbsE97mncLrK8dIhjOE9+W5eEsL4pfZicKDpNWo2D8X1zb/JlxZMRrpswfj1K+9hLTpJHRzhyFj9lAhYWwvjAh0R5C9tcD5sf3dmuJbHwdhYjt37BrTA9e2zRWyl41BbO9gpE8dLgwN8pJinoG9Bwonk89g58492L83Xnj64N6fvAf/0OYAP7xzG7dI0jh3WPKHWYivce5wqcD5wxIZvqJQkJWLazn5H+Ukv6IFltrl5SVJIw9wOn4wQTgZx8EUvh4vHN3H0y73Yz0dc5hIkngXMzM4mhkLTkQLkpwWRgqupmZo08wJP/YeJRTnX8Nt2v75UwzmUxlWhbh6lwiJBKsRX/qeF1QvX7H0viXBVXKCX5D8Mjxog4vm1AXVYzp2svByJwmGc9YrK7mrxBOlmPVxpSw61aJXnkTHIlxRcVfgzhJl9Jpy7jDDBXUcGS4s5OEbxSTEhR+RS4uNlNMktefOC9l0LOSc4YuXFLIuKR0mqkeIlaiw0lWCo8N8mcLDODRw7vBJkmGGhVgpqjsqJB4+giMJh5EQf0g4FBcnUnxg/35h8cIVaOMfBmszK2Fw754wMzRD9yju39sJXq3cSWCtEBXeXtDXNUAbbx/4e3gLPGXXo1UrbYRYj37OUtyEfocx4XzjbtFSN8MY6Bsgqn24VnDZb7iwT+3rb6ivBwcSQkvaZhjuuMJRV1eSZKa+Tn3yCUWCVViCP40QayfUdVIixGpRXVeS4mD/AHi7uQuu9nYklTW0AUCeNFevXn0YGRgKPq3dpFeytmtEE0WEWYoVMVYiv13o/2GGDh6MFHo/ZkydKgz/5hu4kUirk2fNjDiH+O9a+eMoLneBUCO63HPY3t5eIrlMTRHbr0VkGa7r4j7E/BgMR5QZ7hes9hiuDkeT69Wprb0/N0zg21myGZ5ax5fq/T+VU44q/1mf4n8rhoYmaB/WVlg5bzr8vT3QpKm1YEUrtrkzfsXwwYOETu07wtHeGUMHDhIm/jQGAwYMoI06WOCxzUohnSK+nC7BIsy3CbTC5IhKZmqKkH7qJFKO0IGNZJhxtHfEl1/xlLovhK9I0mw9grF2+w4h2N9XPjZQJ9MEcrUmCTtLMRMeFESrwDAM7T9Q6N2th3x00bOTwsDonugaHo6+XboLfaK6oVdkV3RsGy504vSA9l1IrDsKXTpHY/a8eXB0cRN8B46F3zeT4TN0guDaqR8JozUG9eot5GSmYdu6VfJRCDN25GC0bGYNZ3MDYVCoJ2YN6oCNP/cQkheOQ9GWxSTFa4XXF47ifWEa3t++JnwgWXr/sByvck4IL3OSMfOXsdCtryM0NmiEhjp1tRHiunXqQE+PI7xKdLhhw3owNjIQEWa++OIrGBgYoamtndC7b080a94MderUFUxpBckjMLVC3NiEVox0v95DhLDQCLTxa0vSulTIOJeJymfPce/mdeH4oThJmdiyZp0Qu2wFNixdiXUkwsyqOXOwnW7fHRsr7NmwAXs3bcHWNWuE+B07sHrRAgygAwvT1tebVuwOWL5ksfD85UsR4SckXcyxvRuwaM5s7Fy/QThFB+AzScdx8QwXbqbhQsoZXEjlNn88QpwjxZw+cVmKdxilwr1QOymrmE7QZQUFuFZ0VbAysYC9qS4uLBkq3Ds2D68vb8b9lBghY80YnFs5BkU7JgtPUtfj1aU9eFtwQnhXlIo3RckkNenCuzKSnLuFeP/ykSCt9j68lXHejEyse/UM7yu50I64noG32Tx0YZPwPHkZrsaOxo8dXAWTBnVhTu+xJb3njBEXUtIBiCvrmcCmVlg/e4r2I1tOc1AGdCht1u7c5khTNUG+cw93OPKkQYRYI8PSjk2bOqHwkB6Ppwc+fvJIqN6O7c9kmKVZvVRQ7q+mYDwkYecIsRqBY8GouHULhfnFChwlzi7AWxIH5p9l7D//4vtX3r9NC6NCoaS4/CMh5kUDRyLVNlj8cTWLv1qUyJPCtFJMvCK5fn7hAO4fWSO8PH8QL7OS8PbWVeFlVipeZSfjw+P7wvtn9L7fpOd/6YiQtXQChrRsjlV9goWKXXNQeTIWL9L2Cq9zT+FNbgqentsl3NwzD1fXT0DWklHC+bnfIGVaHxwY3VFIGNsFyb/1RfKk/kLcTz2xsn84urd2VHCzxcwoL/wW4S6E2TTGEO8WuHVwpfDoyDokfRuNq8unCr28WuJvf/8C06dMEw4fOo4d2/fg7MkUQaK4JK1qbFj9Rx089OjuXUmRqChnKS6Xsc2lV0tk4cmwDBddzkHepStCwUUW4jxtCha/Xy+fPqH35L3w4vlzCaAc3XtQSNoXhxMkxkf3HRQS9xxA3LadSNizT0giOd6xYgVWz5ohLPn1FywY/zN+7ttfGBAehdH9f0B5yU2h4s5DElflk4dPJVgVYU6LUOGCuDdvWIKVyC/DEswLd+EFpwdVRYD5+PWcFlKqAHO62SPuIqFB2qzxgp8Xibxv0PbG+5m6PyoifAflvLAQFCHmqDBTWsqpEiXaSXT5tIjMy2cRztOQK6OaT546I7AEX8lWJtKpcIQ4I4Ojw5lIT88gqkY1q4V0aoRYW0jHIkwc43SJY9xu7ajAEeLDCRwhZhk+RDIcj7iDB3CA3hdm7+49mDB+GppY2QteLd3Qg8TOQN9IGNCzG0mwIVqSFDLdSMaM6JzUM7qrYNesOWxJCiPD2gmmJL32dF5TA2ZNbWxJeo3Rrm2gwEJs0rgxyXWowJ+IcqFdx/AQgVux8bCriNBgwdTYRESZxz0zPNlucO+qCDELMUeE1Q4TfzaprroQd4nsiLZ+bbT+wi3TGuvpwUhfX+CUxsYG+nBzcRL8PFujpaODtohOFWKOCjMc9WWBt7WyEjjdcfvWrehI0s80t7aGA4n07zOmC0sWLRJfCwkJEWJiYrB8+XI4OzkK/ckHOtHz9ff3FyZOmoTt27djxPBvBS6yX7RoMWrVqi1Mpp8vX7YEMatWCebm5hIB5gEfzKZNmzBm9Gh8O+xbgSO+ShqGptMER4KlkE5JqWCp/lRQWZTl9/6kA8W/hc9C/FmIPwvxZyH+LMSfhfizEH8W4s9C/FmI/1cLsae7J2ZM+lkY9c1AGJEIubm7C12jOmHLxjUIahMotCXpHTl0GNKS4wUfLy84tmiF3r0GCvkXLn7UZk3SJM6xnJwVMk+fkXHNqhBnpCTjZHw8TiUcFJrbNiUhVsYSMjVr1YGTXwQ2bN0u2JhZwsXODq2dnQWvVm4kTX4IIRlmgnx80I6kOKp9B6F3dHd0DAtDVBi3Z1Pow+1QIjhVohMiSYK7hEVqhTg8MITuE4nQgGAhwC8IwQEhmDTpV8HWwRGOHQfC85sJQsvI3rSTNUSzJjZCr+jOuHjuFBJ27xDWLl2A7etXoH7tmoK9kR46eTTH+G5thI0/90LCb0ORtWy8cGv3ElQej6WT5VGB84ff3aWTa16q8PR8PLaujZHEdIbHNdcnCdKpV0eLoaEuGnH+MKGr24Ck1lDb1/nLL7+GibEZGhuZCoO+GQQbet41atYQ6nMOcYNGyiXRgA4GlhY26Nq1jxASGomANiFYs2S5cOlitnzM/OThPYFTJlbMnYs1CxYKq2gxsWnlSqz84w9hzfwFiF26BDvXbVBYvw7x23fhwPadCrQzb1yxDD0iIoS2vj7wp+1w947tAp9QnlTLUa0oL4VvS2dtX+OT8XFIPXoc6Zw2QaSdOEXbHS/IeKHGg2IuIJ+kuJhOxMxVTS7x1XwN9H0ZnTBiV28Wvv7iS/wQ5o6rO34Rji76HkNCPRDkaC5EuFqhh4ctNnzXTsje8DOepG3G67xE4Q0Lcf4xWsgcFW4cXYNLG2fh9JppQtLKKUjdtBAFJ/YKT8py8VZasN1WKEvD66y9eJUWK7xMXo4He37Dth86CU0NG0r7KOP6Cvr0/uvRwsi4Xm3B1Vgfw0P9cY9khJHCOpJebt/EsPCqY2Crox31/OCBMtRDlWKW4UecOqGiyqJS9FMlv2qKgSLE1fsWq6kVCsr9VSF+9PC+jABXRYTzMu/evq0VYk6ZyL+cjzckRsx/V4h5uMPjOzdJhguEaxohvnXrjsAFVDzMRBUeRYj5+T0VWGAqNf2WhZLLJL3xeHQsVriyZhaKYmbg5v51Qsacn5G7+DdcWjZTOD39R6TPGoPjP/cV1vUJw/6fBqGLc3PhtzA3nJ8zjBY9U4TbB1bgXuJ6VJAIMyUbJpIIf4vTM/sJJ6f0RtKvPXFgbCeFHzsh6ZceOD6xr7BzWCcs7xmGgV72wvh2rXFoQm+c+H24MC86AHO7hdJz+kF4dfkELk8ficcH1wvD2gdDhxbKWzfvFPbtjcfu7Xtxp/y6wK+nvFeoJsT/4Nf5H8LDe/dws7RcxjULJSzEnKuvUJiTq+T1X8oVeFhKcXbux4NxKh9rBfklLViSSawO794vHCEBProvHgk7eez7XuzbtA17Nm7GQTpXMFyouzd2k2ZkfCy20LFoDx13DmzZJRzcfQgVN2+j6OotgRf3n6ZJVM8ZfvdOKZJT+wdzgZyS96vJAebCOOlZzS35XtFtnF5DkkvHKubhI96eeEH/TFlc8bGTLpXhN1ysqoqwsuDndApOXbp9567A+yaL8PXrCuU3uO/wDVwrKRVK+JKFmBbzDOcQV2+zxoM48vN4RHOOcDI5lQQ4q6rv8AV1EAenS1wgCc7QpEzwMA4S4tNcUHdai7RcIyE+yQM5iGPHTiApSRnZzBw+fBgJIsRKDjHnDx/cf0CbMsFCvDl2CzpF9BOaWjWTXsQ8cpnhMcx9unaTQjrGz8sTfh5eklvLjBw8EE2tben3mghhdO43N7ZAoJ+PwK3UDPQM4EGewLA76DZsJDMWGHcXV+m1rxbNhbbxQ716OqhDssd0aNuGft4A9evVEzoEB2BgL2Ughwzl6KbkDKuoIly9D7HSfzhCgb5nIfbz4L/DE170/LhoVad2XaGZtRV5TQt4u7cSeCwz9xpW26ZxER3nPFeNZlZyiNU+xjbmZthG23xku3ZCcxtr2NH9ePgK04Ekmf++SSSyjJmZGfr27Yu1a9YKI0aMEFShnTVrFurUqYN4cjSmdWt3JCYekfkMDOeUW1pYSBoFs4IWn3y5ePFigX+Xx0VvjI0VuOUaF9N9nCLxf7QpGVyU92cpEmpOsfzepwL7/5p5Mydj2YKZAieiGxmaYdZvk4T5M6bCjlZcLo6uwlBaXaxdsgBurq0E5xZu+GbwUKxZulzIzbwg0st5wwLJsHSZoO+ZCympAncDEE7RjhRPK/u92wWeLsM5xNyLmKlZqy4823XFkpUbBF4FOdnbwZ1WVkxr2qC5YfewPv0E7mPIG1xEWKjAq6T+tIrrFhEpcG/Czu06oEt4hBARHKYQFCK0D25HQh2KkIC2gr+XP12GoQP9DsM5Oc3sXeAUOUBwCY+GXgOOwuoLVham6BfdRSkUJNJPp2D0yCHo3IGn54VBv05tOJjoIaJVM2FkO08sGtQB28d0F9Lnfo9rG2ei8sR64c3Fw3hXnIZXuSlC5fkEJOzdBoOGPIRDR6bqVZdhziE2MTFAg4Z1BY4Sm5gYVZv8VwPmZlYwJ8llXGiHa0wraLXrBEflOSL0Vw1///ILuLf2QmRkN4Gn1Pn7t8X6VTHCxUtX8OzFSzpRvBGS6SC4eNbvWDRtmrB55SqsnjcfMXPmKZAQr164ALs3bhJ2rl2Lg9u2Y+/mTUICHSA3LF2mjRC3oVV+AL2/2zZvFESISaCec3EWcff2Dfi6OuPAtl1CypEknElKQtrxZOHc8VO0vfEnFRlCTkaW0m0iW1PEk6NUt6s5xYWXs1FCl+Ftw4T6tWtgzXftcYDEgxkW6oYhIe4YEe4mTOvph9gfI5C6ZIiQt3kiyg7MxvNLe4Q3hRzZP4wHZzcKcdP7Y+O4blj6XVch5qc+WD12MLZP/0nIPbQJ9zOO4OHFROFF7jG8y03AS5Zh4sXJpXi8fwYy/xgghDiaQZffc5JhRrd2bTSqWwt6JMOMFW2bPVraISMxQeCTtxTlaFAKdKqkmCPE2jxiRhMh1kaGtfnDmggxn8g5//eJIovVp9epBXOfRok5Avbx7aoc02OQbHNxZnUZuX/3LolwoZB7hU7sl/LwliSD+b8R4gc3r8uEOoaL6q6XcZX+bYGr/vkxqwsx/32cy8moHTWePWfZeYWHGSfw4EgMSrbPEWb0isDsjiHY0L+r8HtkCAJsLGQABGPdsAG8jI0R1dRK+LV9EM4tm4Up0RGCp5khJtM2ljixj5AyeyiyV/yEgjXjhYsLhiNj/jdImz1QOE4yvJW2zx3fdRB2fxeJ+J+6ImFsd+HA912xeUgkpkd6C0t6tMH5RfQ4MdOEjQPb4cLy6Uj97Vvh+bk45P7+Pe5sXSq0tjBDG29fHElMFnbt2I/jCUfx5tUrobo4fiSRGh7dJSEu4a4S5UJ58XWUFF0jeCDOVcnnz710md7TbCGH9s2irBxtn2mOMrMQ8/vCcI7tiQNxIsJM/I49SOCCWrpk9mzcih1ruTZhsyBFuqtWa7vcrFu4iI5HC7EpJlYou1ZO4niDFnlPBRHfT/+WagskyS+XAjkulHstXSO4UI67Q0i3CMkZrpo0x5LMwqv2TWfhZdHlRZWKIr7K5E11O1MnS/I+WXGbRVjhVgVvpzyAQ0GR4RKRYIY7SnBkuGoSHe0zOVxAly9whJhFmHOHGRbgpKRT2r7DXECXlsYRYZUMkp50nDnDU+nOarpLcHQ4RWAh5gixKsQcJT5+LIlk+KigCHGCdJdg4g6SEB84gP379gn79u7F7l27sXDuMsHToy2JrzWC6BzOsAQH+fkjNCBAsDC1RFt/f7Ro7iCYkdRGSA6wnmBna0vH7SDoN+KhG/qIDA+RfsYcZWY6tguTYR1qzrC/pxfMTEwlN5lxaeFIYm0pE2sZE0MjkmYniSRLwTnJZE8S3X7kFEwfTWS4uhCrMix9iEkOWYg5l5jpTFIc7N8GPu6tBZ7UZ0Zi7+xgL3i25C5aLbVwIZ0zSbwaEeaIL+cMc79hGbphw8WGViK+DA/V2raVhDi8ncC9iVvYNUcGdwohrCwtxKtGjx4trFq1SiR28+bNwrfDv8XYMaPx/XejhMGDB4skbty4UQgMDMDRo0e1QsyfBvDwnpb0XJlYkl4W4K70WjAc8fXy8pLpdswXf+NOFdyL+O/CpzLK0svSrEaEP/05o0rxv02MoyM7wNfHU+CNoltUV/wxbZIQHdUJ1hZNwM2mmQV/TMWcmVNlhCDTNaoLDu7chQu0kzB5tINVjwizBCuCzMV16biQelojxUqXidNJiTh28ACt7jcLRgZGkjKhRohr1a0P/069MHbiJMGO3mDHprZo5ego8EcOHi4u6Nqhg9DGx0uqTjuQDDOhQW3RiVZKg2hVx3Bz7gCS5rDAtgpBwTJCMqxNoBAeHEK3B9NJwF8I9A2Cr6cf/H0DhOCAIAwb9A0cnVyFJk6taMVZX1vkZqyvC2NDA3QIaSdk0gElOioSLVvYCyZ0X2dTPfg3txA6khSPjfLDuu86CUd+G4js5ZNwffds4QFJccXh1XiWmSi8uZ6NgrRjMDXQF9SJdNrJdDp1YGysT5d1hQYN66GxkYG0V2F4MEejhkoHCYbTJPT09OHg6CKwNPOCpG7dukKNmrUQEhaJiIhoISCwHb0OQdi6fq1wOSsXz16+0kZwEmnVv3LBoqoUiblzsGlFDFazCBMLp0+n6yuxdfVqYQ/tZPs2bqbblgkHtmzGmkXzMTC6hxDg6Y7WTi2wffs24QUJ8dNKrvpXuH3jOnxcXbCbTn7M8YP8SQOnTRwT0k4kI+PUGdoOeVGWRkJ8Sek2QSdepvCKIsZFVxQKs7NJopOh20BXcDLXx8KhYdjza1+hLG4e7h5fitJ904RLq0fi1Nx+uLxutHAl9mcSje/xMHmN8CI7jt63nahIWiTkbpuIU4uHI3nJKCFtDcnOvgV4cCFeeFmei+e5J/EkfY9wM34l7iatxquMbcLL1BhUxs3BzZjRwq+dPCRtomHtWoJerdpowJckyYxR3TqIdm2OQysWCpyOwJFdFl9Jj2A4ZUKDGhlWhZlvq95lokqIq6guxCyLLLZVk+v4fVJbr1WlGlSNeuZhHE/lPWUqnzyh56gUyyky8g8ptJPIMJGbXYCczCt487RS+K8KcXXBuV1ajOzMHIGn010tKiO5qBA4Asj3UQdBSDRbE+2WiHel8vyfv3gtXD0Qi4vzx2LL8Cghwq4JOjRril/a+glRDnZoZWqMLq1aCN08XdHX1wsjQgKF3eN/QP7utTixYJrQ388TLWlhPdLbSVjdLwQJ43ogdeZAIW3uUJz5YxBOTukhHPutFzYOD8fWkQo7R0XiyPieiBvTTUgc3xtJ4/tiee9gYVW/QGStmISpYe7CqQn9cDNuPUo3zxOenTmA7Fnf4fCM8UKdL2tg8i+/Sas1ZvfOA7iWl6+NmFYJMIsk38ZTBqsmDT4kiSsvLsXNMh7GwaOauZCuEMUaCkiCr6RfQO7Fy0IOpzRlXqoS4n9wEeQT8LRF5iW95skH4hG3nQtwd+OgekmLYWZrzDpsXL4S29euF7aQDG9cthwx8xYIS2f+jpXzliP7co5QVn4Ht28/0j7/6hKspkio3SO0HSQ0aRGSGsHiy6kQGgHmiC+nQqgLPJZbLjxVBZdbGLIYq/uLIr8fLzZ5/7tVcUdQosLq8I0KXC+/KdtpefkNgVusFRfzAI5iLfkkwvn5hUKuTKIjGc7NE3j4xqUsZfgGk5l5EcmnUklmU4T09HScPsNRYAWOCrMYcyRQmVB3lkT4DIlwqgZFiFVYiDlV4shhHsiRKNHh+Lh4kuA4BY0Qa1Mm9tAihoQ4dsNGYfSYyTDQN4WPh6cQGRombce6dooSbKxsZGBFOzqvMyy9zg6O8HRvJRjoGZJoupMs2wlGjY3h7+VJ4mgrNCCp7UK+09iwscBFch1CgrRdJzggGOjtTeJbX6hbp54Isa2lpaBTV4cktyP69+gh9NEU1fVS+USK1ZZr2gixRojVCLG3m5tEgVVEhOmSp7MyrchvOFWCpVewthIH4lZrDN/GrdXUn/Pk3G3bSIjbhwucZuLh1orew3NCo0aNZPKkuoBhiZ06ZSq2kkQz3w4fLiOZR4wcKXw7bKhEbDn1gfGm1+bw4SPkDHoCP8anQuzj44O9tNBh+DaR4XXrBC6sq1e7Nmp+XUP4NEWCW7dxe7eqIr0/EdZ/N5+F+LMQfxbiz0L8WYg/C/FnIf4sxJ+F+LMQ/68WYgsLC1jbWAutaWM6sGsj+kRHCQ72DggPC8epQ3uEof37wc/LDy1d3YVdG9fh22+GY/mCJUL+xUxc0siwKsTVr3OrtQzakdJOnBROHyUhjjuIfZvXC9z7T3JdWYqJ2nUbIGrwSIwcNUqw548AbG3h1Ly5gl1ztCQxVkcv+tAG1tbPDz27RgsBPr5oH8wJ8qFCX5L69m1DaSfxFvjjwHCS4vbBoUIoyXBbvyD4kAQzfl7+8HRrDe/WXoKflw9C2gZjyIABQu9e3WBuZqAVUu7zW7NmbTQ2bSqknk5DgJ836pGoMI3r10dbJ2sMDHYVfurojel9QrBmVBdhz4Q+2P1Tdxyd1EfDAFxY8jPyYucJ988n4uWDcvi3dhNYeOvT/9uwgY7A+cRNmlpqUygaNtKBkQgxLzKUkdic16POKv/6qxowMDCEs4ubULNmDZFiczMTgXsSR0TSaxah0CYgFEFtQrA9doOQlZUjxSOqEJ9LTsXS3/8gqV0ixHAu8ZLFWDp7trBu8RKsnDsXm1fFCFwId3gX7TybNmrYhA1LF6M3HfyYQDpoBHl6IY5Em2EhZjF58VzhRtk1+QhpF+1sDBfWJCckIOVwksAFdufpOZ0nKWayeKRzGo9zvijkX75CIpyjiPEVzmO8jGX0/NRG5F1aN8OOcdEo2TVNKNs3AzfiZtEiZZ5QvHMirm2fhGt7Zwi5m3/Bydn9SJZnCc8v7sXj0xtQsneKULjjV2StH4ucLeOE3K0TcGH1RFw9tEG4c/4wKs/vwcOT64S7R1fi3tEVuHdkkfA8ZTWeJizBvU2/CInjusHdQh86tWoK+iTAOiTE+vQeM4a0DTgb6mHTL98LLJuVTyqh9jFVUib+tRAzqgyr7dakkK4afz6YQ+3Z+8lQCy2an8l9Ph7kwTma1UWWUyoKC4qF3CsFuHLhCl4/fiT8F334IyG+UVyELHoMpiCf+7WW4XbFXYEFiL/Utlqc1iF/xzOlDZfREAVcAACAAElEQVQMFREBeiEcmDYO6/pH4Ld23kJLYwNY0v5oSycLxp4Is2uKvj6thF86BWNev57YM/knoXD3BtxPT0bB3o1C7LiR6O7pAicDXaGHaxOs/yYcCROihZRZA5A6ewDOLxwmpNL1+HFdSJq7CUcm9sSJyZxbPFBImTYUCT/1wNKeQULMgFCcmjkCK/u3EyoOrsKLc/F4fnynkPnHGBQsmYBoN2ehRVNaTMUl4sD+w8KxhKN48UxZiCiwRH7Ao7s3hRW/T8bxfZu1r9/De/dx/VoJyq+VCmVFJSjKyUcRyRkjaRLnLyInXSE7jfbL85l4S9spw//Hs0c8TlsR4ld0rDm+dz/2b9mhQCfx/Vu20r6/Udi2ep2kXK1fukLYsmoNNixeiZVzFgoLp8/GgT0HUXr9tnC1tGoRVB1ViDlNQu0nrMJ9hbWDNDhXWCPCzKMnnBrxGDzunKngdoY83Ib2G4HbHtI+dev2PaGigvP5OT+fR6Q/kn1QXawq8OCN2yLCigwznCpxXbjGAzhKynC1uFioKqYrELjXMOcOq0V1V3I4VeKKVogvXLgovYaTjp0UTp8+i/Tz56WQTimmSxdJrhJi7kF8BqdSTgnJp5R0iePHjwv8ETqnSiQeUeCUiUPxLMQswgdxQCPD+/fuEziHmIWY0yaYqVN/x8C+w2FhaiV0IZl0dXRBE2sboUfnaJgbm5MstxZ4DDO3Tgvy9xUcmzUXsXV3chGszMyl9ZoXSSFjSMJsaW4pwzEYHs3coH4DtAsMEDgtgqU5PChAaEznxtq16iAsIEDgoR89o6K0QtyXqJ4yUT2PuHpRXVUOcYSmqM5DYAFmKWYJZvg5ehKqz7AQc5qEVogJTpNwaGorSP6wlZInzDSj12j4N8MQ0a6d4ObiCkdyJLWojfOHuajNlR6bGTt2LILJZ4KCgoRW9BxYYlvRc2K8aTHBAzg6k9wzXHTPOcdc/McMGjRIfKFx48ZCR3q/6unUQ7du3YRx48ZJLvKSJUsETpPgXGG1qI57Ectwj49yiqvgQR3/KnXi30YjWhX1juZKya5SVGfPk1BoQ2OC/AOxYPZMdIpoL/h6+yAqsiN+GDVCGD9mDIKD2mPqrzOEAu5DTDsRR4UZyRsmCWYpZliIuaju7LHjQjLtMEn792HHujUCT4n5guWNI5XcI6+eLob9PAV9+w0QOL/HiVZMzvZ2As/x5irKVvRcGRZibujNuUIM5x2Ft22rnVwTEdpOKbhrpxDgpUzcC2kTJAT6+NEGG0gy7KXQ2oc2VA94tGwt+JEk+3r7IdC/rdCndy8M+3aY5PIyX39di3YoQ7iF9hUuXcnHpLHfoW/3rkKDOrXh39wcY6J8hMk92mBWn1BMjQ4QxoS6Y4SfIwa7NxN+j/RBxuJxKNi6WLh7cg/ePSjD7Iljhbr1atGqj/7vhgoNG+rA0soUOvXrCNxlwtTMSBtx59XcR0JMgmxkbAKXlp4Crx55QWJqYiTwKjkqqgc6RHQR/NsEI6BNW2zbECtkZ+dJ8Yjat3cbrQYXzZiFZbPnCBtXrsbqhQuxeOYsYeW8+di0Mobe63XCdrr/jvVrEbt0obBrw3qsXbwIfehAwnBBnbt9CxyOixdevOKcvKd0EuKenc/pZFsA9xaOiNu2SzhMB9jjcYdwMj5BSDmSiHMnU5CWclrIPJuG7PMXJColkanMLOSTBOdf4kse3nERESHtUIO2Qea7cDckTOuFcyQfTOwPnTG2WyBmD+8q5Bxag5skqOWHlwkl++fhyJTuyNs8SXidc5ikeDduH10oFO2aiuzYsTg2a6AwJMAFAS5e6NmpuxDkyuLkhENTBwtFO6aSgM8lOY4R7h9ejMdxC/Boz0yhaNkIDA90RKM6NYWGtPpuQJecq84Y1OEocV1M7hopvKLXjIX03j2W4XtQJl4pvYm1Inz348Ec1aPCqgSruY4MR8K0RWZCNeElVHmoournPInuUzgXvbrIsjBfu8Yn/+vIz7sqQvzq0UOBf/5f+fpIiIvykZWRLeTnFUth3T1eHBAckeYvVegUqVeKpaokiKPDLMUvMXfwAPwS5ouBJLGMnV59yRM2qldP8Le2QF+PFlg1sLtwdNoYXF69AEU71ws3j+7D9cO7UZqwS0iLXYblo/qju4eLENTEFDGDw3Fu3ggheeYAnJzeGxnLv1NYPBKp0weTBPcRTk0bgDOzh9HlEOHkbwOx49uOmN7BQ9g3ujuub5+L52f3CPePxKJg2TgcHdZFODayG5b17Sq9t5nxo8bgWFIKiUyikHf5kkSAPxJIEsebxXmCj5Mzpn4/SFsU95C2pTIpoisRuKuLLDyzeUBOjux/V9IzkXXmvHDpdBqupJ3H65cvBEWIH+HN6zcCbx/HOLK4aYuwk45B+3ni5YZNQuzylfJJ1LrFS4WY+YvoOp2MZ80VVs1fLhHWMpJhRrpkfCLCSuFcFZwnrOYIswCzFKs5zTxcgz9BuMN5+MRNWlSx6N6Wji3KIpNFVx2swQVyN25x/+Dbwi1eiPFiVPNpzc0Kuo2jwpoF6q1b/FxvorTshsAyXFJWjsKrpQLLcGkpCXHRNYGjwtJ/WJNDnJ9XIIV06iAOlmFFiLM1cN/hLM0ADhLjpJO4mJmp7UOs5BQrHSYY7kGsSHGqIDnDGhlmkpKUCXXcf5hRIsRK/jDDEWIR4T17FOh4vXvnLuzasVPYsX0Hevb4BmEhEYKhgTG60PnaxqqJYGvTFJGhodDRaShEk2Da2TYjsdUXOpOjGBua0P2sBT+SzgZ0P44iM+w23DnCpYWL0MrJSYrqTI2NBXfafvV19aQXMNPG20OpqzIwEjzp+Ny/pyLDH0WISX4ZbVGdBpbh7lGd0ZWciekcwQX7QdocYlWI1QixiDDd5tFKgXOIuf8wSzGjDthQc4ib2ViRE1nDoZmtwD2ZWaxbNLcXHJvbEc3oXG4q8CfC3AtYFVJVAr/68guhVk2O2v7lI0H96su/k1voCBxUU38m3R9IZvXo9lo1vhT4Ni7UO3TokPDLL7/Ie97StaXAQ0ik7/B/KDnA/H9+yRHhvyiT6T6V4o+K6f5EmP8tuDq7YNmCP4RpkyaQlOrAxcVNGPP99zgatwcWFlZCcNsQLJ0/Hwd2bhR4SIdrSy/ErFgj8GAOLqZj8RX5pVVlJnedIElmWJI5ZUKNEHObrCN792DLmlUCt/LgTghqEVj9hiaYOHcZOnbqIvCb29LBgVaCzQQXRwe0JCFy4/QJgjcwFmJ1Eow/wVLMUWKGp+B05vSKjlFCd3rMIG9f+PHvEMFtAhFAUuzr4SMEtwmhVZs3Wrt6CCzEbbxphefhK3DXjeiuvTBt2hwhLuGoHCi27IgXuHBh8KA+WLshRmhUXwdetqbo5eMg/BjhiQmd/TCjZ5DwG33/XYAzfgltLfzR0R/52+bibdlFgVMm3ly/jHPH4wVdTVRYV5c7SiiwADdoUFfQoxO0jY2SSC9FiiS8Hwlxja9h06QpWtHfynCEuAbdZmLUWOCDSadOPRDZsasQEBhK20AYdm3eIuTnX8VzOinwiFZmV2wsVtIJiTtNMBwV3hizBqsXLRYWzpyBDctW0IlrubBj7TrEc1Edt18j9m3eRr83G93pIMgE0vsX4uuH06dSBJbvyqeVeEkywlzLz4YHve/bYlYLh3bvROLe/RIllkhxYhLO0HZ27lSqkJ5Ki7Tz3PlE4cqFS8ijE0POhYsCb7vOdi3QiBcaxM8dPbDxhwj80slT0KXXrrGuAWZPnS38MmwUNv08HKUkwswNkuLURYOQTzLMfLiZiXdlaXiZtUO4n7oBeVsnYRSJNvMFrZBH9PsWz548EeJjN6ONsyts9RsKiwe1R866cbh1cI7wIHEJHicsxNP4BUJ57ARsHBwKG70GQn16TxvWoedO+xFjwM+X6O7mLlTevysn9YcP7wvKibrqI9vq0eDqAzi0XSAecxU8p0ZoeFKJp5VVXRf+TB7/GSWyJnIhgwqUS3VogdpuS4UlSBXiwoKrJFE5ePnwgUB3+ER9//xLfSxugVCWm42L6VlC7pWrkjbxgBYHjFpQpRZRyVAF6RqgIFPHCB4ewsz+cRy+a+OFfh7OQnPdBnA1NkS0q4MwIcQH+4b3QdbvE4XSdQtQtiMGt+K2CrcTtqN8/yZc2bhUSF0+A3t/G4E5fSKFH9v5YPOPPZC9ZoqQPn8UUn4f+P+x995RUd5r2/ZOz46994a9V1QE7L33nkRjTExiTKLGnmjsvYENCyogRRQUFaQrSBcUFGyAFbH3rvt8r/O6uQfifr71Ps9a7/7+eWCtY80MzMAwc5fjd81VkOQ0TYld/SMCZo1G4OxRSvDcrxEybywiF32nHPp9JJzG9MKCvrZKvMMs3DqyBY9CXJUHgbtwz3877vtvUwJnjVORb1SrrhLgdxRBAeEI9g9RHssixHiNjJfeFOIsWZiSNo0bYOZ3oywpDxRiSnCmSBpJF0FjagRbHxJGh7UDDD+5EU5GRIsYx8ix5KnCNAb+TXP7IBTivTt2Km5ybOGi2m2Lk8I2j5uWLsfWlWuUbWs2YMPS1SLDa5TYyDhczLieUwzHor23OakeRnoOZTjvpDntGKHbMWXYeM8pyebtW7fui9hm4/LVLCWLbQx1UWl8AsMFJyPAN7JuK9fZzUTE10yhoAxfvX5TZJdT5m7IbSOCzOmRhB0lrjFd4oYBpficiO8FWVyQjAymS8j1C5eUi5fSkZp6HskpqUraufMaIT4jixAlR4pPnz6tMEqcmJRkKaqjBB8/HmnpOsFCrGgO5IjOIYqFdSyqM4SYaRLBwaEICDiag4hwTncJoh0mDnFk8yGFEWIK8T7vvQYiwxRiLxFh4innAkeHzejYsY/StFEz7XrFVEdSpkw5+V5jdJJzAmH0d/SQoZaiOI5lZueHkiVKK/Y2rdFSpLJK5coKi+6bNGggkltWGdC3N6pUrKSpE8TGugVqWlW3tCFtJPflgI7y8ncJO1sM7t0XX+twjpHGMI7BQ/ClPAcyauhQYygHI8PCMPWMAeochMG4Xl26iQy3UdglyyLCOdi0aK7PQ2ne3Gi3lpMiYRbX6YjmWkaBHYvx2tnaKM3kXNhQFggW5LH8f2uLTBMGHJm28P4gDXZ3IF+Ic3FQiDm5jj/j/czBIfQD3s98HGWVt81PVD/9xBgJbfoF5bhYsaIoVriQwsl1n3yU+3hTcs0iOkaQOQr6fUl9//7/UfKFOF+I84U4X4jzhThfiPOFOF+I84U4X4j/Vwuxh9N6/DB2tFK5QlWULVMBK/6ao/w+aRLsRZRq1KijLPxjBhbOnQ079tATGjVohllTZyIkIEixDOYQESZMj2DaBPOGiV4XsTGFOCIwCEGykzhvdFB0eIS88CbFRIjnrtosMjZIsW7aVD/WYLNqpWkTHaloI98jbeWkb2fdUvNOSbd2Iq3t26F7p44KP74YJRtw/169FY5xHi4wbYJ0ohzbtoV9azulc7uu6NK+C9pY2yod7CjD7dHWpl0ObfH1l9+jX9/BivMuLyxeugYnouIUHpBqyoZYvlxZhYMzrGtUxLA2DZTferXBfBHhlWO6K8vl+rLhHbFpXG8lduNcPE87htfXUpQ319PwRoT40a0MpWXjhighQkwpJmXKlEKNmjVQrlwphWOc69SroR+TEDNlgpeErzcHdDRp1Ub5QoT5iy8KoEL5cgp7EQ8fMQb9Bw5XunTpiZ7demOP8y7lzJkLRg7x61fKYW8frFuyRKR2lUI5ZpqE49IlyoZVy7Fp1Sp4ODsr3juc9cTmsZ3pE0YKxQaRaLMPcTs5YPB9DQ8NVZi3ybzO58+fKykn47Ut25F93sohL08E+vrKNnVQOeYfKFIcjBPB4UrssRNIjInHqbgEJTnuJFIST8l1fi8eESLQ1StVQ81ypRVK8I9dmqOCSAL54vMvRDiLI0bkmjy+lY3DC+bj5K55yqNTvri0dxaexHko7x5ew7/uX8abjAjl1aUTuB2+GYNa1VcaVyqLdbPmIi0uSrkQEQqv2dPxZesmyqjWjXDgj69x0XOu8iDQEc+Ob8WzoI3K7b0LkLB8LEbb1FVKykGnNClowDziSkWLoH3NWsqtjAuai2mmLDx+8vdBE+xTzKKgvEVwvM1eqkT7rVJ8mXpBnhjjZs0FivGRck5LKoFFfK/k8mUOvP361es88Hbu93gfpkzkLdri+2wK8YXzGUhNPIsnd+4ohuT+97+Y75pxOgkJcQZnUy6oED+8e0cxhdhMmTCeM/vO5oH/Uw4Hd3viB3sbfN+uldLaqiJ6NZL3wrqxsqh7R6zo3R2TWrVUxjdpgm+bNMIPLZsrU+1tsXZIb7hN/ErZPXEE1ogIT+/TUVk8sjfiNv+FU9sWKidWTUKcw1Qk7/hDiVg2HmHzxiBMRJj4zxqFIzNH4ejsrxSviYOwfmR3OI7uqtw44IT7wS64dWCT8uS4N+54r4PH2L5K9RIldFTzb9//ojCl5OTJFFw6e04xFiv/Ps74yvk0xb5pY/w8qj9eyrZA7ovcZaRdsBTRsXCVI9RTuN8JXJQmRTFQwuJrnidOIC70GJ7K4pDwbz3i4odS+swoYDu6d68WyhHXzU7YI1JspkhsWbEa6xcswsZlKxXHxcuxQUR4q8M25eqVG9rqzMx9Np+/mR7BRQ+L5kxhfvrU6DFspki8efNO9wdTgDPl92lqhPyfiqY6GK3SiPYPZq6w5baRM3z3ngGHbbB4zkxZYooSpdpsA3gjK0tbrV27TjG+jvQMYwCHyaX0jJz84XSFrdd4zjnLhYeQmiakMmWCMnxW84gNIU7OwRDivIM5TkRG6chmwpSJ6CgW2LHdGlMlcnoPHztmjGwOM1MmgpRAOZ9Tii1CfPgI/A5ShnNTJlhs5S3vIfHy9FQ8PTwUDpVwc3HByOHjlN6de+mAjtbWNkq7NvaoVaOmFsqROnJMa9G4CdrbtVGYFsC0ina2bZSqIsG2rVtpYRkpUrgYurRrqwM2SLnSpdCjc3v9naRQgcJ6u0zp0koROda3l9/TTP4GKVGiFOxa2eS2XRs+whDhnFQJM5945GAW1g3BsIGDtDGBmUM8sHdv9BWxZ+EfYboEMWWYAT2mSlCEFZFi1kqxkI6YaRNN6tdT7FhMKELNtFHSgHnFpLYx0pkppcwtri/XCfOjGYShtJp8+NGH+AeL13IK2AoXLGBJAf34I4pxbgoFUyrKlCphEWAWvakYf2hQrEhBFCpIoTZuf/DBhzoSukyJ4kohcQsVYpFeJUdwmaZBPvmIYpybUmFK6v+vQvz916PlhW2tWFWrgQE9e2HzyqXKcHlTGzdujl49+iib16zArz/+hIb1mygTvvkeRw/4ysEtXjkdG6/DOBJEhgkjxBThk8wfFphPHB0SirjwY8pxNvD22Y9Nq1cqFhnOEbjCJcpj2sK16N9/sNJUVjvNGjSyTI5hlwlWY5obGDtPtBZpbitSrHCjkw2mk729wjni7P7A7hKEecS9u/QwNlyhW8cu8ntl57FurVB+bVvaqQiTjvadZAfpYBFkRo+nT/4TX40er9jL/b8ZPxk9+41RLqWno17tGmghz4nY2NihRfVK+Ll7K2VqX3ssGtUNa8b1VDxnf4nQtb/jtNsyJSvUDU9PHsari3HKm6tn8ObWJbx5kKUsnj5TVn2FUKSoQSnZWDlow9IXuUYV1Ktf2zL5jxLMlVuuEP9ThLkhGjS3VszvVyhfRilZsjQGD/0SvfoOUjp17o6eXXvBY5ercu7cJTwUKTJz/DauXK0S7Lh8meK0Zo28r6vhvGmTsmzuH9jhKCeyrdsU961bsZcVxo7rFEaY1yxciEFduyvMIe5gY4t42bYII8QczGEK8ckT4bBv0VJzCQkHexyWA23IwcNK8EE/HJOFWsTRECUmPBJxETFIiolTKMRnRIjNE/TxgEA54NRH2zqVlZVjOmF0m3oikxWVLg2sML6rDSI2L1CSdyxGxt4VeJ58QHma4IGHUTvw9nqi8u7FQ7x7ehtvs1IN7l3Gy0tRuHl4kxK9dALiHWbgsv9u5f6pMNwM9cAVv81KVqgrMnxXIzt4o/I02hWv473wLHK38ujoOmRu/w0bxrVXOLWuqBzQOK2OlCpUEOWLFEGdUmWUuMCDeCDid++OwW2esG/csJB1/ZpcXrdw62aW3Ccbd2/fUThJ7v69B3jEIRwPGNV+hGePmdPNyPBzkYjnKsAmFEjNL3/zRmFe6bu3ZicCkU69fG8QgkVWDCl+8eIF0i9dVs6lXdIuE49v31T+ZYyD+G9/8fdfTIrHSZFhknr2Ii5cyMSDe/cV87nkCrlxmdtFwcAU5swL6fitR2fM7GswvrMdmlesgNrFSimNSsoJt7oV5n89WFn9yxjsWTUTBzbNVxZ9NwBfdWiJ2iWLK7WKF0PPelbYOGGQ4jvne5zdvQIRqycrR//6DombZyJh03QlYM5X8P5lKNx/6K/s/3UoDk4dicMzvlQ8Jg3D8iGywP66p5Li+AcurJuJjPWzlNSlUzCrU2uUKFBIYZ0BBwW47HJXfHwOwW2XG7KvZCjm+2J5PWHkW59J5H50EnYixN/074wXTx8r90T40s+kaWSYUIiTYxMsn9CYMqwTJY+ztiQcMUFhePbokcLX+uGd23jGfHOBPX+P7vWCs8MGhRLs7LAR29c6KpuWr8HGpctVhMnm5WuxbtFqRByPV57L9pk3b5hRYRXhnE80GBXmpwKPn7BQzug1/Tpn2yXXs+4gOfUizqdfVrLeE1xGhDnx8crVbOXa9WwVYQ64IXflvrfuMILMvP17GjGmUJufxFCeNSKcI8S3b7P3sBEZJpev5HSXuHxFuXAxXbtMaHGdcO48t+eLuHjR4Pz5CzqQ4dw5AxbVMW/YLKqjADMybEaEExM5mCMegUGhCovqmDNsdpU4dozT6SjEBuFyDmceMXvTEsowOXLksGIRYd8DivYd9vbGXjlGEw9PD7i7u6sIkz2uriLErli9co1i36arinCNquyxWxNfioA2qF0PjfkpsdBapNGqShV0bt9eaak5wGVha2OjNGnYAPVECM0c4qqVqigtmjCQ1kSucxJdqZz+vy1QoWx5LayjZ5C6ItzsytSmhbVSuQIF2wZjRwxXvh6Zk0P8XlEdi+m0oG7QYC0MHDKgv8IoMWuazAhxG+tcESY2GiFugVbiCoTRYvYhzjuIg7ctEeFGDeU51tTaKlK7enWNHNeyqq6wb3KRwkVEimspbFrw2aefWyLE5J/MC6a8qsAaEWFGesnnn3+mecKG+Iq4fvyh3P4QX4g3ED5Wc5EpqjlizJzgAv/8XDGnz/F++nc+YJ/hT/D5p58pH/0XBXMfixh/+jGjxf/+M5P3hfn/KcXlwF25clVl5NBBOBHojYb1aivWLVphwrdjcdDbTWnUsAnaiBAO7j9ICfbzQo8eAxAvq0qSLCvKpOgYo72aoEV1skNx5a+rf9mpokSII4OCc5CV5aGDWLF0gcIViw7myKFIyUqYvXw9evTppzRtxIbcDdG8URPFWjZqe9nwu7Rtr3RoY6tt2Gxz4McR3GnYgJt079gZfbv2RJ9uHMLRXVMk2GaN39ef9eglG5qdrMxaKXat7GSjZTWondKWqRLy/9uIDJORQ0bjrz+WYMqvMxVruW/DBk2wfN0O5eKlC9ju5ICZ0ycrlNHalcpjxYTeyiphzfcD4DZnjBKw+hdEb5+HFM/VyqUDm/Ew5iBeiwyTNzfS8PbuFby+e1lJS4jS0Y/FizN1ohhKly6JOrLjVKhQRqlmVVGEuK7I8CcKBbhQwUJ6qYj81hABrF6vgcKPRJhWUa5MaaVM6XIYOuwrdO/VT2nXvgt6deuNva5eyvnzGcbHynLyI85rHLB0zh/Ytnadsn7xYmxzcMTGVauUFX/Nw65NW7Bb5Jh4Ou/EXmdn7NnmpLBzxar58zC4ezelvayeO7e1R3T0CYURYg7mMCOOseFB6Crv+1GObRX8vLxw0INTAvcrQXIwDjl8BOFHg5SIkDDZHmXBJgd6kpKQiJSTSZZJdjw5c1Ezon1DxWv6YAQu/go+fwxXQpaMxskNE3Fu9ywl65CjSLAXXqUdVp7FuuH1uUCNDCtvnuPdg6t4e/u8wf2reHfvOl5lJiq3jrsiK9gZDxIOKS8zTuLNzQt4ffOi8ib7orzfGXKZpry9kYTXacF4leStPDu2FTc9/oTv7/2V5lXKoqi8h6WYNiFUklU+0yYqFTFY/fuPCDrihyP79yr73HfDy3Un3J23Kbu3bMDWDWs1kk8cVyzF+qWLsHqxwbqli7Fh+XJskYUO2bbeATsdHbHPbZfiu8cN+93ccGTffiXM/wgig4MRe/y4Ehchx4BoWRzHxSinTiYgWU7CqadPKZdSz4pknrNwOf0CMi6cRwpHzAonZdESFRyGB1cvKf9dHc4VoHdIiQ7HscBQJf5EvDyH00hNPqtoJFME4uLZFCUtOUk/hUiKjVbiT/AYFomo0GPKsaPBmDNygCxq+ykj2zZHlaLF0bBSBWXRz2MQ4r0DWeknlVuy/6ZEH0Lk3nWKw5RvsW/NX5j37RCDYb3hPWsCjq2eqQQvnyoiPAPe075SDv35LRK3zELY4h8U14mDsGtCX+wc31txESn2mTwUvlNGKq4/DMLa4V2xblQXpW/tyviqSS1MtGukdK5eEQX/yc4yxiTLTz/7FG1bdMDK5U7KTxNnYPXCZXj1/IliLhLyLmA4ICdGjvWkac3qGNaxpSyU7ikPZNF1KSUVl5LTFLZZOx0dr51eTHheiJXXkkQFhSPiSBDu376tcNH04NYt+RtPDURQj7h7wElkiWxft16keCO2rl6vbFi2GivnLcDaBUuU9QuXY+va7TnFo3c1+pv7P7wz5PcRRduICOvoZR7PcgSZCzh+EnBBFmMkLuE0LmZegTmY5v79B9pWzSyaY4FqliwyWThHKMO37uS2XbupU+dyWx2yIwVHn/P3mPB+t7lYvcPIMwXZmEZHdCDH1evIzLyqpIsM85KRYnLh4iUR5HSR4QuKIcJpOq6ZGKkSybnFdbJPUYQ5nc6YUBeHqBhGhJkaEYWw0HA57sYggmkSkXmm0+VEiM1xzYGBwUpAANMkWFDlp/jJ8dfX19fCAV8f+MhxgWkShCkS7nvcsUeOGcR1t4ssxHZjx/btyuDBcu7p0k3OuTzvtkPFChUxcuAgjRoTm5Yt0MHeDsWKlVAG9emNGlY1dcIdYYqCVdUaaFSvvtKsUVOUL1dRC/FIi2ZNUKxIcaORgFCjGiWyOKpUrqSwa0WFckyXKKtUrVgJ/bp3x5iRoxSNEA8zhnMQRoX/JsQDjYK6wf37KYP69lHvaNvaVmEUOO8gDh3G0bxZboS4uSHELKwjTJdo3rChSC/TJmppF41aVlVRUy5JXdn/KpYri08//aeiY5FFLGvXqKaULmUI8YeM/OakTBQSBzCL6j780IzGGgJcqoTRytWUZ0N+/4GCBf6pcFIuH2eJ+AqMKhctVFBhQR6l11LER+GW2+wuYcK0i7xCakaXDf59at1/nHwhzhfifCHOF+J8Ic4X4nwhzhfifCHOF+L/1UJcoEAR9O7VU5nw7Ti0s7ND2bIVlAG9e2HN0nkYPnSwUs2qNkaPHI3ZU6cqv/08CbXrNMPRw4HKmZMn5cTBHOIY5eQJQ4hjwsOVqNAwbbfG3GESLidMFtWtWDJf+eijj/WgbApx0bJVsGqnBzp06KbYcia5iGrLxk2VZiLI7drYqeSSTrb2Os4596OHZor5EUU7EWYmtbMXMWGRXZd2HM/cWenasRN6d++BDm3bKkzgb9G4haZNkGaNm6FFU+btGLcHDxiGZQuW4+eJU5TmzVujd4/+ItJtlZ++/w6V5cQ4aPAApVChQqhWvhxWTuijbJsxHE6/j4bXkp+UsK1/Is51CVJ9HJWMgB24d2I/Xp0/oby7eV5EK0sk64by+sl99O/SWTd0Uq5sWTRt2lR2ilIK0yYaNmyAT9jv7xOmTBj9A3lJPpWdo2ChIihQsHAORkpF6VIlcyiLwUNGoXvPfoq9fUcV4n3u+5RLl65qcYmZA+q8UU6k8+fDUaRJWbECDkuXYpWIMNm8dq1K1J6tOxT37c5wETHetcFRcd2yGSsX/IWBPboqHVq30tYziYnxCoc9cDywWWATefQIOtq1xV4XV8V923Yc2OMlYuytHN7rg0DfQwg/EqgcPxoiC7IwEZso5Uy8yNipFJyOSzCQbXZgn4H4a3hbJc1lBu4GO+Dxia3K0xgXPIrYjnvHdygvz/jhjQjwy6R9ypNoV7zNPod/vXlm8PoZ3t26ICKbYnAnA2+fyIn+bqby5vopvDwfjqepBq+vnsG7+9flPtkGz+9oysW7xzcM7snjryTgVbKf8jxSnsfBpTi2aIzSvVENlJT3r3ghA+YP1ylfCtZVKirrZ/yMWLZOEnkhwYFH4X/4MA4dPKj47j8gJ6wD8Pb0Vrw8vbDHxQ27nXcpzk7b4bbTFV7ue5X9XvsQ4HdIfmesEhoUhiN+bLkUrISFHEdkRAyiImOV6CgW6cQjJoeE+CQkn0rVXFVyKd0YpXzlSpaSmXkNGSIiaalpymlZwMSGhOPe5UsKhey/85UrcCLEUXJiF/kiCbGJOH3qDM6mcCz0eaSeuYDUsxeQkpKmJJ5MRlz8KcTFJimxcUJ0kv4PhP/b2l/HweuvScqA1k10OMqADm2UGd+Nwqqpk+Ay7VfFe9pU+C9bjNi1q5QUh+U4v3EprrmsU256b8GNvZuQvGuFErjkN/jOHo9dk4YpgQsmINbhd/jPG6dsGtsD20WEt47truwTCQ6YPQY+ckm2jOmDJYPbY3o3a6VrjYpoW6k0etWqotSQBdPnn7GA2RDiUiIH8+evwcp1O5VJk2YjLvy4JVXkfSF++/YN7oj0JYaHKAHbliA9MQovZeFKmJ5z6XQaLiSlKmnyeubNGU6IiEJMqGwjIlOEo9cjZD99KDJIOBzl/q1sPH30VGGOesDe/di2eo2yacUqWaDJMWbJcmXdoqUixHIumbtAWbd4Bfy8AyzHC6ZL8H94/PS5cvcejyVsn2aghZPPeb83yoOHTxAamYCAkBPKRdkWb4uw3rvPFoSEvYPvWtqosUXalas3LG3UKMharHrHkGVjHPo9Y+ALecQiVfk99x4q7On94IExnEMHdNy4ievXspCVdVO5eTMbV69eRQZziQUW3V25ckUl2ISpExzGQU6fPoPUNLZcM3KIExNPiQiz3ZrZhzi3xRoxew+bQnzQ74j2HWbaBGER3ftt1lhEdzTQgD2IKcVmqkSuCB9QtO+wwOMK8WDesKZMuCmucgynEO9y3qksXbQC1ao1xIA+fZRqlaujplUNkc7BSqGCRdGvW0/UqlZDKVmiFMYOHykSW1GpWb06enfpitIlyyrMw2VNUaFCRZXO7WxRr3YdOe8VUtratNS+vQUKFFYa1a+nKQnFi5ZQrKpU1jzgsaNGKSyq+3u6xDCLDBMW1REzZYKPpRC3s7FV2tq0zh3IYc20DKOQjuc8wustxHHMlAkKMYvszEEhTPmoWbUqaoj8k4IFi1hEV6FUfvShSHMVpXTJktq04P2iOqY2EMpt3u/rz0Sov/jnZwqHe+X9GaW5wBefazEe+fvPcgryPv3MIr+mdJopD/ybfNyHH3yovC+nxnP7yNJ+7f2f/0dgRPOA527lh2/Gokyp0pZJdBvXrsD2TWtQRV5sYtPaDgEH9mPV0gVKjZq10bCJLcIDQpSUxJMiFswPi7FMrNPOEjkRY+YPMzLM/rAk6KAvjuzzwtzZ0xXNX/lUViufM2rxBUpVrImtnr5oYd1aYaNqJrW3FuklLZs1R0f79hjRf5gydtho2chsRIKbW2jRqIlsaKzk5IbXCvY2bbQfMaEcMyrctWMHpb0sBrp16oQuOdiIkLVs2gLWOTRt2Fh2mMZo1dxG6dGpJxbPW4yffpyitLS2Qa+uffDrT1MVTvKjiP5TTjYK+/7KCq536/qK0+Qh2D5jDLwW/6CEOs1GktcanD/spFwLdcOdEz54ceaY8uZKskhVpkqVitXz+9i3a5tO7CGVyldEPVlJVqlQVqlcqRxq1KhuEWI2GS8vq2yz68QnIsQfa34xr8v3OAxFDgylZMch5cqWw6Cho9GtR1+ljazSe3brhb0iw+SSCAvzep/IgZ0snztXTlKr5US0RNm8ejWc1q7Dri1Oyor5C+C8YbP2CyUsjPH19ISzo4Oy22kL5k2fgu4d2iltrJuhZ+fOliKQJ1oI9tQSIQ7280F3+w7wE3kjvu4eIsTucn2vckSEOPSQv4WI4FDEhIkI8ZMLdj+JO6mYOY3JsfEYN2IUnH8boGQfXopnUTvwIsFNeX3aF2/OHMLb86HKuwvheHP2CB6Eb1Jeng2Qhco1/OvtK+Xtmxd4ezMV7zLjDW5eELG9KYuabOXt7XSR4jN4ffmUonnGIs3v7l0xuH1JhJpcMMiWn19OwOskH+Vx6Cbc3rcQkYvYWWAsBraoi9JFCqNIgS+UciLEZYuy00QRZdEP4xAZFoLjoUHK4f0itZ6ymHDbpbhs3wq37Tuwe9s2ZRcvWc2/y1Vxd92DvSLBez28LAQcOoLgo8HKAe8D8PU5jIMHjihH/PxFjIMQFBimHAuPErE8JSffZIUFW0lJaXLSzlAuygIrPfO6yAV7tRpkyu1zaReVsykpWgT55FaWYsrZ/+0rV4jf4lx8LOJFhEmyyBrziM+dS1fS0liUlIlUkXMSH5+ME9GJiDyRoESIHEUcjxNilWMRsXCa/QuinBYrc7/si9qykOxdr66yomc3HPtpEq4uW67c3eOCW+47kLl1rZKxZRVSHRfi2h5H5fZBZ2Qf2o2U3SuVwCWT4fLLSOz6eZgSvOgHBMwdj+0T+iobRIjXfdkVu37sr7j/OgS7fxyIHd/1VVaN6ILZvVvhmzb1lFHW8rzqVkXH6uUU9q3mccDs6mPfsg02bfPAvLmrlEVzFuLhrRv417t/GZivI8VYYFHlDRG07Bs3FOaEv6U4/8uAQpyWcBrn5H0mqbK4OHk8ComRMUpceCRiQsIQISJF2Ds8yMcPd7JuKOz08eD2bTwWeSQcjOIv+/X6RYsUh0WLsWHpcmxYtlJZ9ddCLJk1D8v/XKisXeqIK5lXLZPkKMPsJ3zr9n1FC0JFlHN7aHPI0FvcvnNfCQqNRnB4jIouoQRTiLNvM3p7RyT1Fq5p8Rtzfdk/+K5Gjm+L9BLevs3odE7XFlN6Hz54rGik+e4D7WVMuOBnTvLVq5xGlyVCzEI85hMbk+qu5uQQX73GfeS6XqcQsxcxSU/ntDrmDp9TdFqdiHBu32Gj97DZVYKT6vL2GjaHbzAKTEJDw0Vs/REWGqpQiMPCZF+WczgxO0scOXRYMTpLyAL70CELvr65fYe9RYY1d9jDU+F0NDc3N7i5GLjsdsFuEWJnOeYQpy1b0LXTQNSv20hh56cKZStYzv/NmjTTvsId5bxNqletppPtenXuopQqUVrO1w0tgzwKFymGRuzaUK++UrJ4CdQX0Wxct75Srkw5LdKvXqWKwq4MtapZWfoClyxeCk0aNrQU1ZmRYbOobvTQ4SLC7D/MKXWDDRnOGyHuY0aIjQCdfavWRlQ4jwDz0swh5nVGiM2hHCyqoxDXtrJSKpYrjzIljUI58r6QmrnBVSqVVyjE9BCzoI73MYrmjIgwh3kV+MKILOctpitdoqhSokgRcbRP8OE/PlIokEUKFkDRwoUU4znkPo4wD1kX3Z8Zuct/E2btLPGxpcuEEWX+u6BqcZ4lAv1fCOz/a5bPnWmZ9FKlsqy0atXBlIkTlDEjh6Nj+/aoWauuMm/WNPz84w/oKiJJ2rbtgNnT/hCpYIFSHE4nxOOUrDITZecicSLBcZFy0As/ZhAapkIcERioUIj9vDww5eeJClcjLP769DN+fPdPlKlUE7v2+qJSlRpK80aNdTpN62bccJqjV6duskLsjR6duyuTvvteN1yz7VrLJuxI0RTWTQy4E9nKRmjTggnsbNHWFv179xUZ7qh0bNsO7e3b6iWxZbGhrOSai4gTaxFs/v0m9Q1aNW+N3yZOwbTJsxR72w6yQ1lrMR5pLtfLly2DKhUrKIzClC1bGiWLFVXGtm+G9T8Mhtuf3yoBDtMQs3sJ0vw2KhmBzrgR6oEHsf7Kq0txhig9vGHw7B4e3rmOxrLyJRTiWrLTVChTUrHixDmrahYBLlysOOrI6/Dxp58YUNZz0ihIieLFUaZ0KZSSkzqhEA8eMhpdu/dRKMS9RIz3yiKFpGdc024CZlGSw9KVWD1/oYjwWmXVXwuwYcUqrF68WNmwYqVIrxNcnbYq7tt2yOUW7BZZJjsc12POlF/kYNZe6WDXBrYtm2uhB3nyjN0OnmjxFvH1cEG/rt3hIxJM2KVinxxU/Tz3Kb5uHhohDjsSoBxj2kRgCGL5Ma1wWgd0nERqwinlTPxJ/DruawQu/Ea5umc2HgWtx4u43corkeE354LxVkRYORci33fD7cOrldcXZNGSfV4WKo+Utw+z8OZakjzmmPL2fATeZF3Q7xNGg1/fzsBbkV7yOuuc3F8E+WKM8upMCN6kBOJNapDy9pyI+Fl/PI92VR7ktF4LmD5U6dOkJkqJ5JijnEsV5uS6AqhcuJiy8Y9ftGjnzq1s5Rar2K/LifVyhnL50gVcSkvF+TOnDZKTcO6UvEbxUUpy3Akky+Xp2EjlVNQxWfSGIj4ySDkZGSwEIeFEoIHcTogIRdzxQOXk8SAkRgSLDAUpSZGB8juCkBITqqQmHMeF09E4f8ogPSUelzOuIP2SAYcOXDx/Ec/u31FMQfu/fZn3oxBdTE7EqcQUhRHh9EuUDENALp2V7yVEyeIoRIkNOYyooz6IDNivRPh744T/foGX3ogK3AfXJbOQ5LJK8fxrEsa0bYl1/XsqjsKS7l0xo4OdsmFIf3iMH4WQ6T8pESLTF7ctx51AD+VeqDfuBO3FRU9H5eiyyXAc11dkeKhycM438J46UkWYbP6mB9x+GSIiPFRx+WkgnCcMwJZxfZSVwzthctcW+LJVLeXHDo3xQ/tGaGtVXuFJip8SlShcVHHfuROxsjA0uwalxERppDR3QZETGX5jFEjeuZmNKxkZuClyRoyCtdwI8kORRwpxSkyCcjoqHnFhEcb0SCUSx0Wowo8YcKjOkb37kXX1ssKCt3sihI9ERMlTEdYAWZCtXcC0CEGOLyvm/IFVstAmS+fMw3w5Hy2cMVc5eihIhPMh3sj/QJgGcenyTdx/8ERhRJgpEw8fPVXYSYLdI3z8Q5WAkAhZoF1WaTVgSsRtEdVsRdujZee0WhM0anwvN8J7+5Yxhc4smnvw8JG2L7wjMk4YIWbXCxNGk1mUZ6ZM3LnLIj1K9w2FUWJGjc2uE5ksrtPhHEydyNQIsTG22ZhUl5aaipSUM0hJzkEWlAknjSEchFFhRoRjomMUCnFEnpQISrG//1GEhoQqbLVGIc5bRHfkyBH4yftGfH394MNosE6lM8Y0+/j4aCFdbjEdu0q4K+7uIsJurirBZJezM3Y67xAZNti2dQt+mTQNpUpXUtrK+adFw6YqvaSdrT1q16gFG3YjEjjlrVzZ8nLutldqVK2hRXNavMaiuXIVRIgbqBST+uI6VpWroqlIM6nM82d1/m4rhW3WShUvaeniUFv+Zi35e5xQp4z4ryLETJkwGNJ/IIYOGJgnZaIv+nTvLiJso9i1bG2JCpsyzKCfCafwssuEOZiDEWKmTtSS50YKFixsCCjlNSed4e9CbHy/vDgH4afILJrP7TJhFswZ9+fjPxUvKFSQTpAzREN/ZggzH0MB/vxTFsZ9oikQZjGeyu9nnxlC/cHfI7oUX1KgAGX8o9yuFjmPM+/PgjtGhN+XVFOIdXjHP/7DkeJ8Ic4X4nwhzhfifCHOF+J8Ic4X4nwhzhfi/9VC7LhyqbzJfKNroFrV2hgz5iu4bN+stJY3rYV1KwzRPJhBOODhik4dOqJTp+7KsgVLcCL0GM6eOqWkJBh9iDmMg7CILpZDFZgqIcSKFEeHyo4VdFQJOeyHgx5umDB+rPLxJyz+yk2ZqFi9Pjz9guWNrKg0lY2ZrVU4jIP0694T3436Gh3asKCuPWZOnoau7dqLDNso/EiCbdrMj0R4vXljkduGjRUKM4voOralBBM7zaFm6gThKMQ2HLHIeeMCW7c0kR2nQf16BrXrok0rO/w04Telb8+BaNHYWu5rr1iLMNeqXhPVq1VVKJ+VKlRA4YIFFft6NTC1bwes/36gsvfP8YjYPBcp3muVywE7kX18Px7GByivLsZqYd27u1cMntzB25dPMX3iT0rFCpX0QFG2ZDHFqkolVKxUSU96pHSZcqgjC4SycmAg1eW5MaeocKEiSrGixVGqJAsUiioV5PcNGzkG3UWCiZ1dR/TuNQAee7yV9Mtscp/bZovpEY4rlon4rlDWLFiowzkcly1XVi1cgG3rHOAqBzqye/NG7Hd1w85Nm5Xtjo748/cp6NLeXmnXugX6duuB8+fOK4+ePBaeWPrA7nXdia727bHfzcuAucRyUt+321U5JCfPYL8jCDzopxwLCNS0iYTIGCUpOl5TJtKSkpWUuAQs+m0S3Cf2URIWf4ubXvPxNHyL8irJR8Q2BO/So5Q3aUF4FL4ZqZsnK3eObsCL5CN4cyFSeSXy+iYzDm/vsjjuIl6c9sfLs4F4m31JeXc/S3PC3z68aXArHa/TT+JF4mHl6XF3PAlxxuOgbcrT8J14GLQJ9/0dlGu7FyBl5QR4fN9LaV+nMirK+1ZCti1SoWgR9GvVGGF7tisBzmvwQE7q5uCJl69YRMRRygbPnhr9Xi2DKJ4z9/KV9i4mr14R5ou/NXht/B4TbUeW87G5fnT+jnmmzNt8k4Ncf2teZws28joPr/DuzUuRLaabsLf1S7x88QLX5eRPePK/dCETj2/dUP67KRPm15tXT3HqRATOnb2gpKdfxeXM6/rRP3ktf49/860+B8Fy23g+Bq9zn58QF3IM7rLQIDtnfoe+TRugfXUrpX+D+hjWtCG+bW2tzOreAe7fj0LkvN+UM5sW4vqBbbgb4qncP3EANw/vQtK2RYrnzG+w9pteKsIqw9NGYPP43nAY00Nx+XkQ3CYNgs/M0YrLxEHY8m0fbBvfV1k1QoS4SzOMt6uvzOljg4kixXbVyikUYu7/TeQ4RlJTRKJkkXA2KVV5+ujxv8kweS4LU3JNZPHKpUyR16vK+6OQWVR3Ni4JydzPBI5mjg09jhh5zUhUUCjCDh8RET6kBPoc0EE9WZkZyhvZvu5lZ6lYkydPn+KQixuWzflTWTlnLtbMm28R4gXT52De1DlYv2idclG2FaZGmCkTKamXkX37nqWvMVOwOGrc7Jt99nwm9h6Q44Wcp0h6RmZO3q/BjZtGigRTJQhlmGkPHMlMWChHaaYUE6ZHsE2hmSLBoTbs7W0W7T17/lwW+M9EfFlM90DTNO7fZ47yfYUybeYPGzCfOAuXL19VMjONdIkMWZQQSnDq2dwiOsowc4WTkw1OJhgpErmjmeMswza0YC6CrdXCLSkT7DN8WN4fDtQgoaEhOHo00MgbFvxFiDmi98ABX8VP3sP9+32xb98+hT2H9+/3saBC7MX+wx6Ku/seLaZz2bVL2bVrJ7Zv32Zhq5MTHNatQ5euvZTSpcphzKjhlqK5xvUbol/vniLLZZVeXbuhplVNPQ+SYf0GyPm2kpx7qyl9OndGpfIVLH15+8hitXKFKiKb7PFbS9u0lS9bAVZVqyp2IthMu6gjIkoa1qsrNMTYkSMUDufImzJBITYK6QYqHNXMlAkW9xHNIe7eA+1tbBXb5i1h2yI3ZcJMlbBIsVynENerWUOhFDOXuJYcW8jnnxfQuqu8EqypDnkRYS5bpqRSukSJvwkxUxg+++yTv6VI8HtFixRSWDiX9/fxeokiRbUfMWGLtLyFb5+JJDMn2MwZVsn+B0cwGznC7F1MyTZvG9Kc+9wpzZo6kXP7fVn9j8swKVmylE6AIePGjsHGdStQpmw5pU79Bvhrzkw4rFikWFWzEkm2xaxpvytuztvQo+dQnJOdjlCIOZGOhXQkTmSYxISFK5HBQTgRFIxjRxmtC0DooYMI2O+NkcOHKh9/whziz0QcCyoV6zSFlwhx8SIllfo1a+vs7nqyMZN2Nm2waNafIsFdlL9mz8PY4aMtKy6uwpg3TIkm9eTxjUWqufIillzjZgZ2zO2xtZVLG4WT8BhVtmnR0qC5MSe8Tq3aCvsUVpfXpFuXXsqwgaPQrKH83dYc7kHB7qSNwqtVrqhUKlce9evUkv+lsFKxTAn80NUO6ycMVNymf41Qx1lI2LNMOX9wM66GuONe3BHl5dkIvL2ck0dMHt/Cu+cPERcZolSqVE2nw5QtUUypITsNhZgDOEilKlZoadcBdes1Uho3s9ZE+QIFCinFinJmea4QV6xYBYOHfYmu3Xorbdt1Rr8+g+C621PJvHIdz0VY2KuWzJ85A5vXrceaRYsUFtVtWr0GLlt3KKv+mi8S7ISdGzYo7jt2wEsOhDs3bVIYNZ7+y0T07NhOYe/oru3a6YQlwhMiT2KmELMzwvDBg7B39y6Fj/eW3+e9y81g924EyEk2yO+wEiwcCziKmIgoJSEqVoX4XOJpA5HizQvmYl6f1krglCG4snM2noQ5KS8T9xkR4ksRyoskX1zeuwBz+7RRtozrgWOLfkDovHHKQXl8lvdyvEo8oLxOOYyHwRtUlMnbWxeNIrq7lw2up+FlmvzeaB/lwYENuOe9BtnuS5QbrvORsW02Uh2mKKeW/4yjU4dg9VB7pVPtyrCzKoemFUordWVRNLx1PZxa95tyNzkImakpeCFiq7xkhOwJHsmJmzzhCZvT50wePdJBKE+eGBiT6J5rtw+ik+dyCpbyLoxev8rhNfsQvxERfZ3LawqlEWFU+PMc3lKsX1OWzQIuCvVr3L51W7l2NQvpIjlPRULI/0SG+fWvf71BWkK0Fs6RjPRruCrb8IuXHCjyQgVbe9O+MgaGGEM5DPFX+c8hd1DHG1y9nInF345Wtkz6Cl/at8SQFo2U1aP6w3PStwhbPEU55bQU51zW4sr+LcqNgN24G+aFW0fdlJuHdiHFaQl853ynrPq6B/bPGYcDfxi4TRoKh7E94Di2u+L1+3DsnToM7r8NVVxFkLd91xdbv+2nLBncDj93aIJfOhnM62crQiwn2iplFJ68Pv/sC4wfPV5JPHkax49F4bRILOF78ffX71+yaHmn/YXJlfRMXL6QjmsZmQoXOH8T4rt35XyQgMRIDmmKRnx4JCICgnEiMFQJP+KvInzEe5/CvH/f3W7ITEtV+PrevZmFByKbhPu+v8deLJs9R1khQrzw9xlYNGO2MnfyTMyfNge+Hj7K9eu38Erep4vyPpP0jBuGiD59pXB7finbaVLKWWWHqy+CQyPkfpcVDs24zsK26+agjGyRYkZv2QningivUQxnCjAjxPfvPxJJfqhwsuN9uY/Zp9s8bj3iPveIUepH+nvuiQwT/j7ub+ZkSEq2DvfIZr/ibJHhbB0ukpF+JQc+z0yR3wsKh3CcP3/R0kWCHSSSOXwj0egzHBUVjWg5P8fFGYSEMC/4OKJORCrBISEqvSYBco4OCw/D4UOHFB85lh48KBzwUzh9jsM3zJ+zgM6QX4rwfosAmxFio5iOnSXcFO0s4eJiKaJzdnYWEd6O7Vu3KU5OW7DR0RE//fibYt20tU6n+3oEZXSEXLdCq+ZNYW9jrXDwBifS1q1RW2G0eIyIa+VKVRQW2fXr2R0lSpRRqlWugo72beW8V0KhBHduZ4/ixUooVpUri2PYoHTJ0kplOZeOHDJQI8Pkq/cixCMHD83pLjFQGdxXhLhfrhAP6NVLB3MwMmxEh8UpmrUQ+aUE58qwKcjsotWEQpwzmY5SzChx3Ro1lOLFKbgFRR4pkTlDNP6GIZalSvK8Xkz+hxLaRSpvUR0L6b5gYZxgSjEllVCWixdj3nDu/RnVZZSXcBDHPz//zCKTZrS54D8/t2AM6Pg7fIzJ++JriLPRB/mjD/9rATYjxu9///8JZUuXQXORRfLjhPH4btw4Hd9Mhg4egg2rVmDSDz8oFSpUxfBhI7Bo7p/KvDlz0Lp1RyTHJyinZCfjyGazzVJ0aJhGhdlqjTA6TCmOCDyqhB4+BD9vdwwZ1F9hhFiHcvCjPKFctQbY4uIlG2sppY5VDdSpbnx8QNq2aYNlf86zTJqb+O33GDloCFo0aKBQdlvLBte+jZ3CtAlOtzFHIDapV98SLSbc+BhBbmPN4RwtjQbebPHWsJFia802bi3QsA7HKdYT2a2NWvKc6tepq7Cgjt0l2tt1VOxEils1a4XqVSsr5UuXRjW5LCgbJSkkfNmuFZZ+01dxmTkW/iumINZlqXLuwBZkHd8rMnxYeXo6BG/SEzSSSN48yMa7pw/w7Mk9ZUCvfqhSuar8nZJK7do1UVVWxmbRHFfR1arL/y7/E2ncnEL8mXa/IMVk9VeiWHFZHRZVqlSpjuEjx6JHr/5K+45dMXDwCHh6HlAyRVDYyujOrVvKusXLsGLhQmxYuUpZNm+uXK7GghkzlLWLl2DLmrVw3eKkeIgQ796yBW5btyqbZVub8tP36NqhrcJ0ic5t2+MCx5MKT57yY85nltG5Lk6b0F3ed68dOxWPbdvhKb/Te7eL4rPHQ4XYXw7SJIRV00eDZZHGxRqnKMYhiWkTCfx04xTSTqVg58rlmGDXSHEf3xPnHSbjweH1ytOo3XiRsB8vTx9RnsXugfNPfTC6VR2lfc1KmN7DWuTYTrGtVhZftqqH8LlfKakOP+PmvqV4ELpFecVI8o00vM5MVF6lReJZzH48CXZW7u1fjaxdf+GS41Qlbc1vSF4xEbHzv1OOTB2K7WO6YU4va6Vd9fIY1MgKP9rWU/rWqYIfravDvZ+1ctF5MZKP+1siZpQBLjIsgzYePVaePn6iPCFPiDG57ulTTqh7ZolwmeOYc9tWGa2rcsffvtWostmF5N/kOOf7FsHMEYa8QszLe3c5FOQOrl/LRsbFTDwW0SL/UyF+9/alpgGknb2oZGawKOma/E1OpHtp+XssvCL8X4gRGTcw/i/+j/IzeQwn/v0x7ltlz4zxWD62P9ynjVVSdy7DFV8nkV0X5X7kATyI9sO9Ez7K/ZgDyA5yxzWfLUrM+lnwnD4GDuP6KDt+HgK/P7/DvhlfK66/DsXGcb3gJNJLXH8ZBM/JQzUqrJHh7/ppZNhpXG9l8cB2+LVTU/zR20ZZKoL8fbtG6NGwmlKicGEU/qIwNq5dryTEn0JEeBRuZF5WtHguj+CSV7LwyZLXjFxldPLcRVy5cEl5+9poa2bCTyO0q4QsPkl0cDiO+wch8miIEn7YHwH7fbUbDDnkKSK1K1eIOeznzo0skeKbyqOHT3FwtysWT59tMMO4XDjDYM6vU0WKZyMh+qSSkXkDl0UgY0+eUyihOn1RtmnCbfjYiUQ4bnVTAuTYwPZqV66w08kNbbF2MfM60i/fUIx0hvu4e+eBAYvl7hipEMojdo54ImL72ED2pZcv+UmCMdiDwQOmRrDTBLl6PVsn3D2UhSjhVDxe3r/PSDFTLdilgoV5RgoFxzdfu3bNkjJx5cpVLaRjuzXlwkWcOXMGSYmJSmJSoqZIRMdQhKMRGxOjUhwWFmYQHmq0TwsLVlg0x1ZqR49yBHMAggIDEOB/GHtZDCf4iPAe9PPDfh9fhUVyFN8DBw8a+MpCxIfRYW/FS6PBXnKu8FD2uLlqioQW0lGGXV1EiJku4ayY6RLbRIaJk5wjNjhuwG+TpijNm9mgdk0519atr/CcX6VSVbRmlFWoV6suypWrgC7t2imVK1XW9mp2rdhCtRXKly2HxvWNT4oJ0yFqVLOypFAULlgYjesZLdkIW7JxdDM7T5BSpUqhtojpGBFh8uVQYyhH3rZrFOFhAwwow0P69c8TIe4rQpzbZYJC3LqZtX5SbaR3GmkS7CxhwgEhpq/UVykW99HrtVCsWDHtCmUR1hyhzTtog6kJ5uS5UsWL//3+HxgRZaZJEH5ipI/PEU5KL7tIMA3CUmyX8xhS8AsO6PhM0xzMbhCUSnOS3WefGmOd80ag+fNPPmak+JM8aRt5IsIf5E6uM2X636T1P0m+EOcLcb4Q5wtxvhDnC3G+EOcLcb4Q5wvx/2ohZkqB22ZHxb6NLapWrQkrK4MDssGyly4HcpCObbsg8KA3Bg3spzRv1hz9eo3Amfg4haOamSJhCjHHNucV4nB/f4QdPoywI/5KyCE/HN6/R0Sys8IiL1PeSMEipfDrH/NQslgppW71GqhZpSrqVa+u1K9dC5O+HSeiy48XmqFnxw7o0tYOrWWjIszP4YZPKSat5D6tRGgbUIqFWrKxcwNjno5J/dp1LEn2Ldh3mHnD9RrkUF82zDqaNkF4X46CrFyxotK6uQ3a2rRHk0YtFOsWNuho3xGVypdTypQoIfevIBtlAYVzvtvUroYFo3sq634aAO95ExC5bb6S5L0B5w/vwo2Ivcr9eH88TzlujHDWnrUsrHuAd6+eKoflAFW5YlWULVlCqVunNirL6/WRvK7k40+YjlIATeV9I61s7bXfc8GChZQihQprKxqOeyTVRPaHDP8KXbv3Vdq174wRI76Gh/t+5Yoc0PlR+ZPHj5RVIsOOq9Zg5YKFyprFS7X92kaRY7J49izNE97h6KDs3OAIH3cv+d56ZcvqNfjtu/HaH9LADgN79sKljEzl8ROOCeZH9cbo5lUL5mJY/0GW0c0e251FrCnaO5X9rhzlvA9H5UCtMA9Otj+2XiNxxzg8Jlb7EZOzCUnw2emCgQ1qKKsH2CFm3je4unuWcufIKjw6vhtP49yVeyEbMF1EdHCTakqjCqXQ0aosBtavovzWoyUm9WiFOZ2bK5uHtMNN/w247b9OuRe+E89OB+J5UoDy+IQXHgduxV0RYZLtvhSX1v+O5MU/KTF/jEPsvO/gP2WEsu2rrlg5yB7TujVXOtWqgNHWtfCjXT1lROPq+MW2Nja2r6/EL5mGhOB9cjLnGFkOKhDxe/b8b2kSeYWYH98yt9YixEyVkNfdzDE28oxZ4JgjxC9e6+80PxrOm1pgkDfdwEBHO+eRY0rQ+0J85/ZthXmTF9Iu4tHtO8r/VIjfvnquqVxnU84p5y9kiBRnWp6vRYhzRF/TQV7lirHygpc58s/8annOm5esUMId5iLBaT4SNs9VMrzW48r+zcg6slN5GHUIDxP8cTfCR8nYtxmpbmsQvXaG4jF1JBYP64Q1X/dQPEWC3ad/iXVf91RWjuiCDd/0xvYf+is7JvTDlm96Yvt3fRTnCX3g+eswOH/fT1k7sitm92wpItxWWTuyI37t3AxDresqpYsUkWNgNcSeiFPiYk4iVhaJz7ifCe8LsSm5N+R9IFfltcs8fwmXz11Q+B7mFeL7InEUYfYaJidEgo8dPorQQ4eVQF85/nuJUO3xVnxcPbDP2QVpiUkKX1umTNy+fkN59PAJ/D08MX/aDAuLps3EX1MNZkycgiV/LEHy6bPK1cvXcDQ4WsTztsKWjQ+YriDbNfHzD8e8pRuwz89fuShCmSGPuXLthnI9K1vHKTOX1yiOM1IkzLZsLLS7L7cpvkRbpz3hsYmLxRdayMdt/BElXLgpEnwzm4JrPP4xj5vPZL96zv2KLSWfaes19iIm9+4bQzrYf5hQiG9cpxRfVzIvX8bFS5dw/vx5JfkMi+YStZ0aSTgp72dsLKKjo5QTkZEqvCGhwUr4sTAEhwSL+LI1ohAcLIsCf8sIZqZMHDp0UNupERbK+ftz8IYB0yf27zfyhYmZGmFJkRAhdnU15JcwRcLNdbdKsCJ+wVHNu+XYTZx3bFO2b9uqbBUh3ihC/NfceYp1CzvYtrZFmVJllfZt28KqanVYVammdJLbJURyO8slaVCnno5j7iROQBjAqli+PGzZ+1eoWKa8FpIzV5hUrlBJa3yYhkFKlzIK0Zg2QZi3zEDRaLZY0zZrhgyPGsKCOqZMsNXaAAzt319hDvHA3n00d9iAbde6WdquMWBnyHBuER0lmMM3SAu53UwuzQAg4fhm01UoxAxkfcLc3Bzx/JsQa8rBByhRrLDCtInCcn+z77AhzLkwhSpvUZymJXxg9Bom/B1muzZDVD+Qv/uxtmsjfA7aYziP4H7+6acizl8oLIrLK5+8D9MmmFdsFvDl/TmfA3OKP/rgQ+Xf5PU/wZTvv7VMcmORFZPDp0+epAzo0w8d2ndAp46dlGUL5qF3916wbt5KGTJwMNYuXYfTCewwEScnmyhDiEWCieYPh4aJDHMgghwMZSejEAfJjkT8ZTW5f89OEfHWCjsfaEeEnAhxsZIVMW3hMpQrVU5hlLZmlSqoWdWgrlV1EVvZSGS1RJrJRtJaNiy7Fi0UW5HgpiKuZh/iNs2tNVeYvf0Im1szOd1sdG3m5zQW0SUNahuzw5vWN2APwHo15G/Vrqs0ke8xMlylYiWlTo06siO1ERFtpDSo3wSTx3yJlVPHKaWKF0PVKhVlpyqiFCpUAOWKFcXP3dsoC0d3g9OkkQhcM1WJ3bUUKfu2ICNwj3Lj2D48TgzEy3PRytvrF4w84pePlcf3b2thYNkypZTWssCpIQL/kWyopGChoqhWrTqaNW+pdOjcRfuPctVICosQc4fnTkOsrGphCPsQd+ut2LftiK9GfoNDBwKUqzeyNepxOSNdWTznT6xbskTEeL6yYeUKOKxerXnEZMW8edi63hGuIq2EOcTsLrFr80Zl06qVmDhujC5qiH2rFugmK/1rWTcVRlcYIWZuJ3FYvhS9OnSE6+bNyh75nS6bN8FNDqZk3243+Hl6WiLER30PyPbnr5EqEn88Giej45ESn6QkxyUgKSICvevXUX61bwKfn/ojed0k5br3Ytw5ug4PI7Yp94LWY+O3Ihk9Givzh7XB5u+7wXPKICVxw1RErfwFIYt/VG6e2Ie396/h1bkw5cExFzyO88GDSA/lXuAmZHstwhXnP5RLG6cjaeEExMwep0TN/AZRf3yL/ZOGKA4jOmG1SPasHs2VYc1qYkqXphjQoJpBvaqYLbcPjmirJG9ejtPRwUg/d1ZhoRyFNq8MMyKskWAiAvEsp+BMySnAsxQFMUr8whBHlceXLMAz3hsj/9aMDBtYIsUmpgzn5BC/lscTLb4TqLvM672VnaUwApZy6gzu37yp/E+F+PWLp7JQj8SppGQlOfksLp47J8+T8p4rxNzGiCHFjBbnDG94bkiwMc3MgPdJlsUUCVwhYrthDoIW/KSELPwZx5b9jpPrZivndq3EGefliHacq4Qsm4yw5ZPhPGm4Mm9gO/wl7+fuX4Yre37/Epu/64/FQzooS4d2xJrRXbFhbE+Dr7pj7ajO2PlDP2X3jwPg9esQuEwYoKwY2h4O8vNNX3Ux+LqrFtl1a1BTsZET8qbV6xEfl6iEhUYgLUUW2m9Z/Pj3jhGE7w27SVCEyZX0DGSICGecTVNev3ypr58WVwoUYhbPRYeEKZEBwQgV8Qz0Oagc8faB7x532U/3KN67XOC+dSfOJZ1S9NOnrCxkX72iMHrqK4I1d8pUZf7v0zF/6nTMnTpNmTHxN6xfugaXzqcroRHxiI4/hUeyXSsipcz19dx3SJkxdyU8vA8h5cw55eJF9sK+Yuk7zIK6u/cpwewhfF+nyrH4LW+OMH8vRZtwW+A2bw724PeuX6fI3lKyRYZZaMdiurw8f2HAfY+dJ5h3TFiwRyFnZwkd0sFuEzduyMLwinI21Ri6YRbNxcbFadFcXJxBTEy0Tp+LjY1RzEK58HCDo0fZIeKQRXCZ/+vndxBHAwMUXmcvYUowcZHXnrfZPYJ4eXnCw91DL4mnHGvdOWiDAzcETy/jtqurq7KL9SJyzN++bbvCnGFjKt0OZZscv1lM5+TkZLB5CzY4OGLVihVKt259xBPsUKd6LaVc6XIY2KePDpAizLlt1qiJnPvKKv179UCtGjVRskRJZciA3iLILNCn6JbGgF5dLddJh7a2WlheRM7NpFe3DihTsrTId0mlk52tBopGDhqsjBpMKc4tqjOjw0P691MG9zM6S/A5Kr37oneewRwapJN9UDthcdhYk6YqxKYg83peITb7ETNqTIqLzBcubIgoYdT3ww8+xj8+yqFSTfyjsS0KteygFLfphC+s2+PjJnbKh01s8Q/S2OADuf5RU1t8Kj8j5s8/atRa+UQc7IvPGRHOFWpKLovpTBjxNSPCFEw+p08+MTAK+P4uvYwsmxHrvFFkE1Ou3//+f4wda5frx+SkefNmWPrnDDiLnJBKlaqiS+fu+PWHCcpBTxeUK1sBPbv1UDatd0CY/1GciolVKMEU4LxCHBsWpiJMgg+xiG6/hUPenjjosQstmjZUPv3MSJkwJydZNWyN3Xv3o3SJUkqzeg3QQiS0TrVqCiW4TjUrQ5KF2iK3zUWKW4o4kxYNjJVWswYGLKxjpNf8OKJVY2OjMze0GpUrqxg3qVtPYQS5jlWuMDNa3EBWmY3lZ4RFfowk1+RzqMY2LVXQoG5j1KvTUKlZsx762LXC5AH2CoW4bOkSKFaksFK4EEW0APo3r6v8MbQL1n83AHtFekjklgU45bER5/1clKusRo/2w7PTocrri/F4m52Od88fKG9fP9MRyGVl5UtsbO1RoWJlS9u10nIAqV+/EWxElEm7jh00ZcIUYh4EDCHmcyuMWrXqYciQUejWva9iZ98RY778Fgd8jijXb95RIb5z+5biuGI11ixcgm2Om5Qlf87F+mUrsWz+fGWVsGnlSrhu26YwmstBEK5ObMXmJEK8GpPGf4MOdjZKO5vWGDF4kBaTEI1YPn1miS5uXLMSY4d9iT1OW5XtDuvhumU73Jx2KHvlAOwrB+RDXl4Kq9iP+vgiIoidTkK1FSAn1rFVoBITh+wrlzF59EhlWJM6cBjZHqF/jFZSN0/BTb+VeBqzW7kTtAHnd/2OyCVjlfgVP+Ca22LcD3VXXqZGysIlAq85TEN4e/8K3j24osM6yOvUQDyJ9cHdECcl++BqXHWfj0tO05Wza35ByrKfEDNnnBIr28SJP8Zi36RByvZvumPL112wclhbZVrX5pjT2xoTbOspX7eoAedxvZCyYrxyLy0Rl9LO4ESAl/JMBO85C+s0GvxEpfhp3hQJYqZOaPoERZkpE0aRkJk2YRbVsUiPUb3/LyF+P10iV4hNYTaK2YzuE29EiCliFOLrytmzZ5GUcAp3r15T/qdC/Or5YzkeRYgkcEztSSSeFPE6m/I3IabIWYoGVXhf6eukr5UpyHr9laadPHn6QgupyMbJEzG9b2esGt1LWSc4ft0Xbj8OVzwnfYmt4/pj07i+yp7Jo+Ewpg/m9GurzOxtC+efB2OnLHbI6i97YOGgdvizr50yv78dFsvtRQPbKssHtxfJ7YHdPwxUXH5kEd9gHedMtn3TU/5uX7hO6KOsEzn+qUNzLPh5khIUcAwRIo2BgeFKwJEQPLxz+28SnJfHImnsLGEKcfr5Czh/hqOZzyqvXnL4hfEa5hVidpMgx+VcEXTADwH7fJRDnt7Y52J0hCGcNOm2cQtOnohUuPi4y+4KVzKVByKnB/d4YOakX5RZv0zGtB8nYdoPPytTJvwCj92eSJZFEzlwJEy7QZgpCRyN7O0bhD8XrVU89x5AWuoFZGbeUK5evalFdBy5TBgVpkCbAswUCUaIzdts1cbn+ObNa4X/M29fEwkmbEt5M/uOdpfQDhNPuF3l6eLygvsPF5nPFA4H4adgnMZJjDZst0SKsxR2mEiXRciZ1DSFQpwkCwdTgONEhk+ejLdEhCMiI3TghinAh49Qbjk845Die4AC7GfpAuGz31fFVwvnDhrt0ziC2Wf/PmXvXm/s9d4LH5/9yj45hxvDNrwUpkUwJYKFcsR9D6+7YudOZ4VdJIjZVs3ZmXK8DVu3GuyQ95/DOEw2b9oEB4d1WLF8mfLjjxNRukwlDOjRV6la1QrVraqjb6+eStFipbQzlJmCQEnu1b0zysm5kHCSXc/OHVGyeGmlfPny6N6xnbYvI+XLlkdne1sU+KKgwqI1O+sWlrakLLSzbtYUXw8bqhgyzM4SRhGdTqcbyA4TORHivv0xqF9/DOjdR+kv9OzaTc5t9krrZqYI56ZM5I0QMwrMgJwpxHSQOjWqWyLEJUuW1HP2x5p+YLQs+7BwMfxjqbtB2AP843guH1iuP8wlIg/6vUf/9vMPjhv848g1FBz4LUoWLqh89BEjycZIZsIob/GihfFPcQpiiGyubBYQpyvAQrsPciLQ78E0irwDRt6XVf6t/3ikOF+I84U4X4jzhThfiPOFOF+I84U4X4jzhfj9n/+vEuLqInylSpRRfv5hDKZOGo9aNesotWvXx5J5s/Dd2K+UhnUboKZVHaxZulD5c/psTPt1JpKiYhS2VosKDkFkYJASw57DRwNx/GiAEu5/RETYaLFDDu31xN6dTpbG18xnpaB9/nlBpZF9d+zcsxflZWMmFOCmderCWmSXUHqZNmFVsaJSSyS5Uc1aKs2keU5qhLmBsa8f+xGbs8FbUowpzjmCTPnl78k7KrG2/M7qlSor1g0by2MaayoFoRArteso7DlcswrnqtdSalSrqe1arOvWVFSIy5TUS1KkcGHd0RpUKq/MHNARq+VEuXvql4r/smmIdl6GVF9nhUKcfXwfniQGKi9SjuHN5WTtZau8foq72VmWdnJt7DqgTDljIAipUlkWEY2aoUOnrkrHLl21D6klh5iDHIoaifqEQjxo8Eh079FHaduuE34cPxGH/Y4qWbfuqgjdvnVLmTtjFlYvXoSFc/5QNoj8bly9RhZXTsryv/7ClrWrsWvzJsVNDoAcBrDdwUFxWrcWP349Bh1t2yjt27RC3x7dkX3rtvLw0UM8e/rcIsQOK5ZgWO++cN64QdnhIJcbNsBl82aFQz8OuHsK7gpHOfvLQT/cn9tigCzYIhAfwUETcUpStAhxZjr85ORMutWqgoX9W+LQ9MHKaYefkX1oFR5FOCk3/Jbh/PaZCP91lHJs4lfIWL8INz22Ghzei0cJoXhzPVl5ezMNb6+dxpuMWIMLx/D81GGRZyclc89fuOQ8C+c2TVVS1/+G5GU/4uT8CUoi0yfmjceRacOV/ZMHw+uXAdg+rruysL8Nvm1dG1O7NFF8J/dHkuMvyNj1h3Ij4xxuysIi8rCHcv/BY01zMIWXhXWaOvH4aQ5GLrGFp+yhmpvDbZArxOZI7X/PITb4P+y9d1RU6bavrb13B7W1tc1ZEVHMWUyYc45tbrXbNuecM5IzCIggOUsQkYyABANgRBEDCooCKma7bc/vm3OuWiW69733nDHuOX98V8d4RhVFWRTUqvU+76wZ1DxhVYjVFAnt139piur+Vj6y538sxCWPHwqXL11GdsZFPCt8KPxXhfj963IRtPOZ2cLFCzkkxNe0Qq4VYo2gvH6lpETweHIFTe60Jl2Ei6A4Z1S9/YiJJUZ1aItJXdsLywcZYMOIAdgwrL/C8P7YNILEdvJgwXj6cOyeOBDrRhgIe6YMhtncETCZPUw4MHUQbXD6kAz3FXaN74edY/pgD11nTKcNpNedpHfFJMH9j/EIpI2S78rJQgARso7k+vexwj6S9WBrG8SFRgtJ8emICI8l2YkS0s7Q5k1TXFgRtUVeCbf9unsPBbfvCLdv5iE35zJu5VwR3r9983nKREkJ0mITcCYyWkgmIT4dFIJTgUECp0sEuB+nzaurAkmRp70jskmGmXe06eDc4cLbtwUW4pM+/tixdq2wecVKbFy2kqR4nbBj9RZkJKch7GSccDHrqhS7qSkTcQlp2GtsB++AEIH79PJAluJiztMtRUnJMxm3zBLLSN5wmZI7LPnDtOlR8oSVfF9+7/DvqR7vfP87d4twr7BY4Ocr7xdtStF7KcRU3yfv3vFxxBtL3mS+kZQO6V387KlQWsojoEtJih8LBQX3cPPmTeTe4HHn3Gf4Ki5ezBIRFhnOzpI0iTPJycLZNO4rnIiY2CghPj5GBmWoRXLcOzgggNuiKWOVWX5VGWYiI0+K9IaHhQnBISGSChFKtzHKoI1gySNmOG/Y18dXO4pZlWF3aal2HMfdSYrpa09PDSzIbsdIhI8KnDLhTOuCi7OC0xFHONhZw9josLBn114M6D8I9es1FEYNGYomjZtBp2ULoZ9BHzRu1EyK35nmtJY3b9ZMxjMzPKSjnV4b9O7RTahfr4Hk6TZt3ETg9IhuHTtoH4+DQ1xo37B+A6F69Z9kFPTcadOEeTM4b1jtQTxdgjcsxp+EmFMmJmLy2PHCpDHjMJrWXMO+/QSl/WsX7XrNX6uuwnCKppraybCTsKOoRf5169ZDjRo/SR4v890//olvFm0nEX6mkFCKSvElBF+q8Ncqpcp9Eso+J/EL5D78f8tQ+dRd/KNeI6EqyS0XzVWUWk6h4FZujPQcVvOa5Xs8oOMbbcoFF85VFF+1aI/v82W+MSP5yV8K7P9tuGF1J3rRmR2bVmLOL1PRonlLYTbtgqyM92HKpAlCFxJCfsH379gijBszEQvm/oGslFQhI0ERYJVkko7UmBiciYoSYsO4mphPhL5CEL85nGy0jaY5ismDOapUqS506UuLg7UtWjZpJnSlA0SfDoguJJ+MIR30vUlQdZs2FThK3KGVrjanmA8oTkJX4YOb3wAsyowccJrdFiNzwunvwZFihiPE/DVfqvABqU1w12srQty2FXe/4N6A9HPadoJOUx2hZZMWaNGsOe1Gfxbq1qpFlyycSlEdR4hr0k5LHaTx66DuODRnLNzWzxEiD69HupsJcrxthLzQY7gf642yzEjh1aVEvM87J1FiiRS/LsPHD+/gYHFYGDh0tHSWUHe8rXX00KlTV4yiNyczjHarFbtM1KQ3F6MKMW+Ipk6djZGjxgsDBgzBkgVLcPpkrPDoyVM5yefn3hSsjHn4hpE2ImxjYgRLYyOYHzgg8LQ6V3sHHHOwFXzp9ffzoJPkUSfBzswUy+YvwKA+BkLvbl0wj45BdVLUi5cvZOFQq7ZN9+2hk9JM+Lq6Cm4k1cePOGgX2BA6KfPkulAfHyH6RDjiwiNJhmOEtIQknE9NQ3Z6hgIJccmD+yi6e1fgIQurh3aB16rxwnmLJbgXuBe3vLcKSQcWwpYkw2rEEMF88CAcMjCAx8QpQtSS35CwjoTWbLvwMtkHb7ND8PZCoEJOOF5dCEZJrK3wIPAg8kmIbziuE67brcUVsxXIMl4q5FiswLnDi5FmtEg4e3gRorbPhNeyccKesb2xf5IB4nfNF9IO/45LjhvhxgVYxJmT/rKgn0uKER7Q78giq8rtC5Zh6TTxSvhMhisIsTaC+prl+N2/iDAXxjFKxFeRYAXN1xoR/l+hCpgiZCzEj4QL5y8gnTYwJfcKBEky/i/8e/PiGVLjkpCRdkHgIrKb165ocz755/FxVTFH+rN8aY7qEWqXDuE1534q3LhyA1N6GWAMSTEzkjbBv3TrjPm9ughzenbE4v49sG5YX2HVkN5YPrgnVgzuIewmSd47eSBMfhkm7Js8APsmDSBxHiIcnEJfTxxAr3E/wXbOcHguGYeg1VOE0PUzRIBD1s4QgkiO7WaPhPvmpcK11EwU5N5GWnSqEOIbDj9PEpqgCOHh/Xv4j4//Ghl+zT2oiYcFRVJEd4dEmLl1LRfXsnJw/UKW8Ob1K/o7ftQOanlGMpdCa0DiySghnt570cEncNLXXwjlgiuSYC8nZ8GXrnvQ+eFcXJzwjv7WJQ+Lcf9WnlBGwhnpF4gtJMLMpmUrsGrREqxa8LvgbO2ANHoPh0fGCw+Liul1e42TMWeE7XssYePojpzLV4R7BYWS2/voUYnAnR/4PKNOklMj/2pR3OvXfKx/6hohBXMvXmv7HF+9fkciy0q/dHqvSMHppw2Usqn6VHSnbqrUx2fJlt7EJSzCT6X39uMnT/CgqFDgHHoW4qvXrgk8XCMr5xIuXbkscG/hNNpIqIM1eJocR3K5MI7hiHCwRHhDhcAgRYZPRZ0UWIBZhKOiTgk8ZEMmzkWohJNIB5MYBwqBgYEI8A8kaQ4WwsJIkgMD4OPtLXCU2NOTRPi4gqsrD9w4JpeMmwzgYBF2FpydHOBgbw97O9tP2NrAzMRUOLT/AKZNnSHdrphe3XrK5NhGJKsMF9I1I0HuResGo08OUOfnOujXq6fQVq81av9cG+NGDRd4cl2j+g3p+jChAYt2/foYNWKowHU+1apWxeihg4TGjRtJYGnkkMHCHJLiWczUqdr+w79MnqrpLqEwdfxEiQwzLMU8PGQgfzorQqzkDKs5xCzjXTt87iN8qXaZYCHmGidVmBvQ2l6jRs0KEWIS0IPeqMziSrDwVq4oxHEaEU58qhB6C5Usw1DpkK/wjZEPKh/yQaWDGuj6N0a++IeGb+jrynSfSjrthJ/IEWr9VB3f0s9lRG4JjvIytchtWNQrCjNLp9qFQu1QoQ7qUL+vdq2QqXZfCut/N1PGjcKWVYuERg0aSNuSPj14vLEBnbx8ZFxxdzrwmD/mz8XpAC90atdR0NVti42rNyMzIUE4G6eIcEp0jJBw8iTiI1hCwrScCghAML05GHd7O7ham6JZ00bCd99zyzUW4mpCx579sXDFaujwLpDg6HAH3dZoR1LKdGytBwMSYpZiphNJamf6PhfaMe01Oyq1K0WHNnpy0FXcgfHOq6N+W4GjxizOagoGR4tZjPkxmFYk3S3pTaEVZpJl6VghBXht0ap5C4kMt9VpKzSu3xjNmjSV2xmWzZ9IPL//nidE/SCt11iKVUZ2bIO1E4fhyOpfhLADK5FovwuZrsbCFR975IcfQ1FisFCWeQpvr53FX/evCH8/LcTHd+UofVwoTJs1VyLE1avVEFq3akNC3A3jJ04Tho0YpaRMaNrA1fypFj3HmlpBbt+uE6aQEA8bPlrgSXVrlq5G9Kk4oZiLTkpLaGG8KtiZKq3W7C0thYM7t0vnCWtjE8Fs334SdXOSVkfB08UJfu7ucLG1EuytTOgYmyfFdAxXBv82Z/6nNkblz6T1miowRju24ve5C+DuYC84mptKtwov56MCp2GEevsi3D9A4AgxS3FCJHc4OS1CzJMUs9LThQtn0/D4/n3tR/drZ8/AvD7t4bJkpJButhjXjq1B2I7pwtJ+XbCoQycsofcCM7B+I4yl4280HSvMlFatsbhde+wbaChYThyOLJdNKI51EF6cC8CrzACUxTsIxRGmKAw4gDvuW4U8um+uw3pcsVkjXLZeTazEebM/hEzT3xG5/Rd4Lh8vmEzrh6A1ExGxfqoQT7KcYLEBS6eNFkx3rpEioYzEKCHpVAAt8ix5ygL98ou2aypcWKcW18mlJoL6RoSYFn36vyrv3/FwjncKaqS4ghDL1/9GgtVIsVz+pcDGy0Jc+oTHTT9COke8ziTjMYk881+NEL9+9gQJp+n8lJgipKVmIPdSlvZ44n+KEGtSQr6IDEu0WORGLapThVjzcTdJTXp8EtZPnCCsGmqIzWOGYdPoIcKa4QNIhPvhV4MuwqweHbDEsDvd1lvYOqYfdowfgN0TFHaO70tC3B+mMwYL1rOHSes0h/nDheOLx8F/5RQErpwshKybIRFi76UTBZffpiPVzxvF94uEZ4+eoDDvPq5lXBLiw2Lh6eqLswlpwvt3b/HZn5SuS5ePx4+Fwnv3cefGLRFh5sYVEjMS4ksZmcIb2rB++PBR+4nAMxK6pMhIxIWeFGJOnMRJn0BEePkKIce9SISP4rjDEQV7Rxy1tEJ6bLTAHVBYiO/dvC5wxPQkCfGmZSzDK7F60R9YtfB3rP9jlRAfdRrBJ07hLG12mPLy50hIysCOvWaCicURpNBrnn87XygsfCjjl9U2aJwOwQKsnm/Ky/lYfysSLCL8N4v+B+3rfe/+I1y5ni/jnpnyF9wF592nFCLNZpMjwQocKVbTjZQpdSzC6uNxFJsn3amfiPF0Om6zlkcizNy8yQM4buDSpWyBC+muXr2MCyTGTGZGOs6fy9BMk4uFn7+/iGpgUIDg5u4pUVxVeJmY2NNKZwmChTg2NuaTAHPxHF0GBQYLnGYRLNFgZfCGKtafukwEwb9CUZ2/ry+8vT1xnFuqEa4cBSZcXJwVnFiCnSQ1gnE+4oQjR0iI6RzOODrYwcbaUhsh5k4Tm9ZvQId2nYU6P9eVSCy3GmWa0ZrM7dYa1q0v9OdJtV26oEmjpsKUCVxU10hbRDdx9Ehal1vKGs2MGjqY1uea+KmGwoDePVGvTh3p5sD06d1NWrONGT5UmEkSzJ0lZk1V4BZrPKGuogxPGT8Bk8cpcIR4HK25g/r1FyTS25nHM3N6BKN0smIvYTq300cXEmROkxDIVTgtlAvtmEYNG0l7XO0oZhZiltuEEg0kxcnlqHRGQ1K5fP3NamOF2vVR+YeqqFztJ+Gf9LtVod//G7pkKlVT+FYDf++fPyr3Zb6h6//4sSaq1FD4rvpPqFS1Gr7h58GQ4PJz+pbklvky6ssCzM+7YhGeevuXEv0/xlch/irEX4X4qxB/FeKvQvxViL8K8Vch/irE/08L8aZlCzFy0CCBw++cI/PLhAnCpDFjoKfTGuNHjxYO7tiEfr37QU+3jbB44WL4OLsgNfq0wHmZ0lYtPEKQ+fRhXMgUKkSfCMUJTy/4k6gwPvQmcDA6gLq16wicQ8xpE1Wr1hAGjZmC5WtWokmDxkLH1rpor0Ny21JH6EwC250L3PT0hP7dumJAt25o05JTHZR0BxZbFlmGUx4q9vSTNmt0kOnSfRj5SEKTr8O0b6WLZrRJaN6woaCmT/Bt6u16/Dz02ws6zehnNWtJB62uwBLMKRNt6HGZmjW41281rRD/UOUHySGu8eOPgj5tChaPMoTpbxOFwF1/4JTRWqTY7RPOu5qIFN875Sc8PhOGV9nxeH/znPChMA8fX5Tg419vhJOBgahdp772Dd5Grx1tbHpj+ozZAgsxt12rIc9B6UPMwzl43jnTjiRv8pRZGDpstGBoOARrV66nE2es8KT0GZ4/LcPl85nC7s1bpYhu37YtgpO1NY67uErxJWN5yAjudNJzP+IguJHE+nkexzG6zlibGmPBjF8wuH9foWfXTpg9dQaecUFMudI7lKWDx/kyuzespRPRdBFrxo1OoK729gRf2sHX9RgCaREI8lA4FXQCseEn6RiNEc4mnJE2XBfTeYwzCXFaGkoecW4qt5v6CKcD+zC9exscnm0oJB74FZm2y+C1bpIwWKcJ+tEJtjWdlJhBHdri0MpF2DBnqrB13kx0atQYnevWFUY1b4ap7fWQZrNSKDnjiGdnj+JpgqNQGm2NRxEmKDpxSLjntwd3PHci7+gW4brI8SrkWC0X0o0WIWzzDLgsGil4Lx+La/YrELdlphCxfwWs92zGnEljhBnDe6OARDL36hXB3WILSp48VYrHWPC45RoXLqoirJFeLSTDkiahQos6807D+3f8kTLLsDrG+V+F+LO2a/+GikKsfmRfVlYsJKckIDE+AY/ybwv/1ZSJ58V3ER0WiYT4ROFMUiJycy5UaDPGKRPcVk3J6eTesEprLEWMtf2JtXKsFBZqheal0ou26G6BcGzrLuyeMgnrRw4RFvTpimmd22JWt/bC8sG9sIpYN0yBi+p2juuP7WP7CgcmG8KIBNh2zgjBZJohrEiKPf4YJ/gsnYCQ1dPgvWSC4LNsIpzmj0SQ0R6hiCSq/OkLlJc+F0ofleIJSVzhjQIh9+J1hHiHooD+loy0uvtik8EDS4ofPBC4zRqnRuVdvS7cyLmCq+ezkE0bSebl8+eSKqEKcRlJXUI49xoOFaJDTiLC2x9Bru5CAHHcgd63dvbCUUtrOJlbIjkyXHjz+h1KSYhvXb0klJaUiRBvWLJCWPMbCfGvv2HX+m1C1KnT8PQ+gVv5+UJKSgZ27jPFtl1GQkJCMm7m3ZWRzgz3BOac4Sf0HmA4h5hFWNtGTQrmeLPEedEf8erlWxSRQGfnXBeu3ciX0cvq8aLK76c0Gx5zrrQqZJTjhkVYeXwlTYLhn/mShJyfR4l2VDTLMEswp0owt2/fVnKIc68JN27mSq/hlNQUhbOpiI9jEfYTOL3BP8APbm5uQnhEqLRNY/FlEhPjkZSUoG2zlpgQJ0V3oWGhAgtzCBc/yv/h9mxK2oRalBdNaz7fxmkTjKeHl7RXC6CfyQSRhHORHbdbY44eVYTY1dVZcDrCKRK0Njg6KBxxFBF2oPO4QNdtbay0KRN7d+3BurXr0MdggMA1QXVpfZsxZbzAPYg5Z3jksIEC5wgPHdCX1t5Wgg6tx9x+tTGJJNOwfkMMNDBA7Vq1heZNm8vgLrUPv6zd5AFqUZ1u61aoTyI9YeQIQc0drpgiwULMxXRSUEdCrIowM2HUGIwZNgIDSYYZLtLv1ol7DysDwNRUCbXGqSPRWV9f6yPsH0pxPzcG6CB5zyzE/yCpFDhtwcj3U45w6E1UGr8A/9Dw06SFqDp8Kr77lnN/f8A/5qxEpcAcVI64JVQ6eRPfROajUkTeZ1Q+eUv4B32vcuStT987qVBZC30vNBeVdzoIlar8KBL8049VBc4r/lJwuV1cFXIhRh3sURG+v9qH+L89f5hZtmg2iXBtoXmTFvCwN8auDSuEpo2b0gvWFUZ7tgh2pvskaX3qxCmC7/HjSOU3Er1ZmISISMRHsAxzVJggGT4VFKwl3McPIe4eCDjqKnjYkSTt3i7FXMy3nIj93Xcki1UFPf1OGDd5Epo1bCxIZwk6SLiQjmE57tJWX5tT3I0w6NQJBp0V9HVaomXjxp8holtBitXqTang1FE6VrRp0VLgfGWOEqsC3KR+fbRoxHJeX6Feffo/rWi3xg20O9Nza4/2JJ2d9DsIui1bSTNv3RYKP5EQN6z7M36kXRRTtUpVZWIdyTBT86fqmDOwB7ZNGSJ4bPoNYXtXI9F6p5B51BjX/RyRH+omFMUG4GlGJF5fShT+up2l5BO/LhPevypHr45dSHRrCa1b0xutYzfMn79IGCp9iKtof77aXUIVYh7GMmHCdAweNELo338wNq7fishTsUJp2TPpFXo+I1MwI+G1OHSI4EsjGO/bC7PDh2BrZi5YHTaCm9MRGc7BeHEuGZ30XFlkCVsLE/w2d7YU0zFD+vfDmiXLRTKkmIVljRaevz9wnumf2Lp8Kbat26Qt0nO0MIOLjQ2O2tkKbo52CPXxR2QQF3CGINzfnzYJQbQ5401aOFLjEqTTxMX0DIE7TpQ8VLoXMCnRYRjfpRW2TOglxOyfi7NWfyBi70xhtkEHDKfXd9UAQ8Fq2lS4zZ2F5D27hWwnB9ynBSTd0lzh0A4cXT4f1312CQWRxngSb4fniY4CD/ooieGhHVZC8UkzFIYcxG2PHULukfW4ZL0SGYd/ExL3zIPPionw2zpXmNWvA2b3b48104YLZyKD6ff0h5eLtWB1YBPu5GahqPCh4H3kEHIvXybxeK0gQvxGyxsuGHtdEZbgN3gnUeFPIqzy53vmnUwzY7TRX03EvWIk+N8W1VW4zqivw7OnJUJSUiyiT8eQzOULap/c/+y/pwXX6BgIwanIU0JcbAJysy9CLQLjx+JI4Cv6PRkeQiJDEzT5whXziZXoMEfK38omTSaglStTyp4+U+CiquSAMOydOkHYOGoQNowwlCgxs3pIb6wfZoAVg7oL64f2wJZRBtg0qrfAEWKj6YNgOXOwwF0i7OeOQOj62UIQybDf8ilw+XWU4LZmEW6cTcFLkmDmBReBlZbjOfe/ZUiInz8sISl+LNy/WYCcpAsoK34iqIM41H98nV/Pwnv3hLt5eci7ck0iw5+iw+dxLumMwJtjFkg1olr2+Ami6X0X4RsoRAaE4oSHN4I5Ukn4HSUhtneAi6WV4GptC2cLK8SFBAh8DJY8KsaNrAtCcdFj+ZRn9cI/hOXzF2LFr7/D48gR4WTEaXj7hcuADcbK5ijWbdyNsIgY4dq1mxLJfUhSy7AEc1SYu0Uw/Hpz5wc1R5iPCX6dC3kYBnE+6xrSz1+RbhQMF57KcJb3PJBGGdiiRn4Zzg9WPmlQ+lozfA7T5hjzfWnjKYV7ZTysgwv5SuixCwWW4XzaqNyjvz2Tm5uL3BvXSI5Zkm/h0qUc2dTFJyQIwbTG2ju6aLs+cFTY398XZ87wFLp4kuYztCmIRypdCilJiIk5LWLM8FQ6luDY2CiBO09IFDkmRuD3DA/2iCPpZhIS40iII0l6fYWjLsfgyQEvf44SMxwh9oKXl4egDOXw0uYUc89hjgo7OR5RoNfQ0VERYcaGZNjS3FQbId61fQf27doJffICZihJJUdJm2jg6bL8KWc3WvuZtrqt0bF9B+1k2RZNucCuHdq1bSNw0VyfXj3pMRoLtWrURL8ePWQ4B1Ot2o8YatiPHruxULNmTfTu1lWiwsyc6TyIg4voFFiCK8qxWkg3cfRYLWOGj8Sg/gME7nzFk3ErCjFHhrVC3IY7WulrPYU/kdZt0Ryd2+sLLZo01eQQKxHiT0KsyRkOvoZK/cbgmz4jhZ8GjkOtlq3xrV4nQaLIklesub+2CO/zojvOQ1ZykSvc998W6mnylDkqzYydK4M9VNlUn2fFyG/FSHDFPOJ/x/+IEHekPzgnkzO/TBiDSaOHoTV3SyA60cG05vff6cXjccSGGD5gCN3WhU5aJsLoYaPhbGmD2LAw4XQwnfz8gxAVrMCtrkLpjSKtdQhOkwg85g5/2iUyx0lezHZu0QrZ9xoh/o5kmGnUVAc9+g3QVoG2a6WDjnSQd9LTEzglgtMoVNq31EF3OuC70e/EsBSzRLfitAVChw5y3mWpKRAc7VVFWJVhSZVo2lRorSmkUyPMTXln2aCh7BKZJvXryf/r2r6TMMCgLwb2NURrjkwTTRo1kRGTXNnKcBS4Xu2a2ohw1SpV6E3H6Qo/CtWrVcfgzq2xg2SGsfltBoJ3rUCs1XYhw+Uwrvna40awk/Agzg+l6afwKidBeJubhr8KruLvsgfCh/ev4UknGnX0dWtdfUWI5y0S+pFwVmEp/1HpMsFFBBwh5ufE9O7VD5Mmz8Kw4WOEfn0HYc3KDYg6HS+UPnsuxVQFdLJmLI3NYbr/IBxtrIXDe/bAgoTY2viwYHb4IOwszOF51EVwc3bEMUd7unQQ7CxNMXPKJAzp10fgtjQL587BC46mSETlhQjxX39xA/z3WLVgPmZMnAov5yPCMTqZHrWzgdsRR8HfzR1BHscRoCGEC+tCQxF3MlJIjotHelIyzqWmChdT02QylhohvpqZisk92mDN6B5C0NbpSLVcjESTeULErpnwmT4W9w/uEV77+eFteCjKfbyEl6dP45GTI4pdbIWS8KN4nR2M0iRn4ZbfDjw8aYySWGuhjIvrSIQfRpgIxZFmeBRuggKv3cINxw04d/h3pO6dL/iTEHmumoa9S2cK1WkTo9+sPuJ9TYRbl1NQlH8Z925kCYX3b5NYluJRUaEQ5OWEOJJmbQoEL9qfRYE5Avzuc/F9+0mI379VxPdLAVYjxNo0CI0QK9c//1qNBjN/vf+UVsHwa/CReP6sVEhKikNcTDyK8m4LqjD/n/6p9yvKu4JAb9oghUcJ/Fg3JGVCFWIe28wRX6VITpFg5fLfSbH6d/uUMvFK2mVxYRTDnQm4a4DHgT2CxbwZ2DdlJLaMGSisH94XKwf1woqB3YQl/TtjuWEXrB7aXeCpcltG98KeiQaC44KRCFgzA0FrZwreSybD6dcJSD7uKpQVFeNFWTlePuMhPSRez18pYlz6XEs5SyDJMfOk4DGKbj1A/uVbgkTKNVIsQBnGcf/eHSH/+g3cyLmMaxdyhMuZ5+k9k65tq/bsyWMRSTUFh9MsogKCEE4yrBCMADeSIqejgo+zG9xs7XGENssMy7CNkRHiSYYZ7nLymIT42vkMoeh+EU7S+rL+92XCkrkL8MfsRfA/7iUE+AfjUnYW7BxchfWb98Ddw5/E8bpwn/4/t2GrOHmOxVX9BIBbBnIkWLpBEEW0eci+dANnMy8J+XcKpHVbRcHl7hGfuo9wweWnlAjeFHBUuGJKjcjy61cKrxQZ5k4STFkZd7so1gpwQUGBdJZQBfj69eskxdeleI6JT4iRNmnq5DdHl6MyDCMoJFjgaG5KahLS09OEs2fPSheKc+fShYT4OMQTYaHhAhfYRUXxRDpuucaR4CgR4diYWIHHPLOAq0J8KjJSCuu8aG1nfH39EHoiCCdCgwUfX28pomPxZTw8jsHN7SjBl1xc5wIXZyc407mbOeJgJ23WrK0tBQuSYXNTYxw+eEjYvnWbCPEI8g6mVQtOJdCT7hHMoL79SRhpHW+l0L+PAYlsE5JOTk3oBIMevSSiPGHMKIFbk1ajdW/wgH5CS1r7WYIHGfYV+FNrLrLr06uH0EqnJX76qTYM+/QVlII6TpX4JMGcIjFFUiUmYvL4T9FhJUI8WhMh7id079RZigI5UizR4g4dRITVIjouoJNCf/pdGHYR3ebN0KldG6E5OQlHiCsO5mAhrhxXKlRiYu6hsoZvEu6j+pCJ+K67oVAp4akixRWFWJtu8e/4d/ehn/UZJUq7N6Ly/C0ksRzZrayMgqbnV/3Hap9NpqsowBwh/v7b7/63XSb+XRT5/ypfhfirEH8V4q9C/FWIvwrxVyH+KsRfhfirEP+v+Xf3+f+ZEDdp2gx9SDyYo6YHoUtSyTPAmQWzZsD68H50IDFmBvUzxPTxU7BxxQqhrV57mO3dTyIcrOEESTC9Ef154EaAyLAiJUoOpz+9OaQ/rKOj4GppAaNtG1CV0wcIHsrBaRPcG5dp2aotevcfiOYklowqs+pHCJ25pyCnKrTWE9pzSoXkGCtwfnE3OqDUQR6c/sD9hNu2aKlAj6XmGUuqhHqfZk0FnWbN0IIkWk15aEubhIb1GmhHQTaoU1c+qumopy+012sLw94kxDq6Aku8Hj0vzkNialWvTmLKBWvVBE5L4LYualEbo9e4IRYPGyCYzJkMr42LEGW6QUi024lzrsa45m8v3Ap1xYNof5RlRAqvSYr/up2ND4U3hI+vymhBLKXn1F/Q0WmD9rShWbDgN8HAwECTMqHkSHHR3881a2lTJnr0MMCkSTMxbOhogYV43ZpNiDoVL5TQyZwLRS7lZAuHdtOib2KGg3TSYtycXeBoZQ3TgwcFe1r0jh05AhcHB+G4yxH4eLrjmJO9YGVyCPNnTcfgfgZCn+7dsH3zJvnoUdoTcdEKiZgqTL9OmYx922nRI6kWnOjEamuF487OAvcm9nd3IxH2Fk7QCZqPy+iICOEMneTTkpK0Qpx5JhVltKizhDF5JEvTDTrSa9FFcFg6EikWvyH60BzBib5e3FMfpsMHCDG/zUP6hpWI/mOh4D1vCgL/+AXJ+xYL+b57UBRljoLQ/cJt/10oOLEPhWFGwqMIYzwMO4yiUCPhUbgxikmMCzx3CZfMluPsrgUIXz9DcF4wDmGHN2F4fwNBr1FdRHra4tm9bOHpw9t48aQQWTHewklP+rsfXE1iUSCk0oLqbrlHipUYaQlFi7rkAgtqLrCmSI6F908S3T/fadDkBGulVpP6oOPMW/gAAIAASURBVIG/5vZp6mjmv4W/tKgDDbSDDfi+LMq02WFYzpinZU+EmFORiDgRjjtXc4X/qhDfvpQK1yNO8KONERMWEobr2Rdoc8V5r4oU89+Ah20wIr2SH/pJgiXXmr/HcEoFC/NrBR5c8uLFK+l9y/D4XU6hyE7NFH4zHIB1IwZg6cDewrzenTGlSxtM7KgrTKPrM7q1xcK+HYVfe7cjKe4O4xkDBY+lk+HxxxQ4/zpeCDbagcKbuXjx9LkCyzAJ8BsSYYGLwspfEq8E/vrtS5I4Ek2G84qfPiolKS4USgtL5HWS1mua9mu80bmXny/c5DSJc1m4kqFwMSUdGQnJSD4VLXC6EQ9kUdv4PSl+LDm/IZ48nlkZ0ezrQmJEr4GCs6RJOJiYCo6mprA3NkGE13HhBT33x0UPcTk9RXhwrxDRJyJEhJnfZ83HmsUr4O8dIJw+GYWAgBPYsm2/YG7hhKysKyh48FDgnOEy3iC84NeJi9m40I2O4b+4hdoHuV7woBjp5y4L0XGZyMrOpfcGpzKUiszyBojvxyg5wZ82RnIMaK/zcaPkC6spEq/fKJfqoJCysjJ5XDVlgnsNPygsxN2794SCgrvIy7slEsxwq7WUsyk4eeqkEBp2QlISjtB5lgkPD0FcfDQSkhKECxfO0+9/USvQFy/yOOdMpKYkCgkJCSLNgQHBQuTJkwjjwBZt5JmExATahCYhjUSaSaVzZHJSMqKjowUpovP3145m5rZrp+k9GhTkL/BwDS6a49ZqzFEWYBcnODk5ClxYp+QN2wl2ttawtDCFmZmJAsmwyeFDOLh/v7Bxw0bs2rENv//+u1C7dgMM6G2ALvodhYYNGkrhXN3a9YR25DAjhgyWccxMv949aV1uhbp1GwgGPbqTBLeQNY/p0bkjav/8M+rXqyfo0n2bNlWCcUzXTp1kuEendh0EHt88c8onIZ42cRKmTSIpnjBR4GEcE1mEx4xVGD0Wo4cNxwCSaYbzh7t14mCaUlQn8xhIiLVzENroSdpEO73WAhfVsbN0atdWaEFyzCkTqhBLOgKnTHDaAuN/EZXrNsI3NesKDeo2RK1atfFD94GCtF7jVAdVns+QyCa/+JTykPJSM6hDA3+PB3So/YklTeLJF0LMj/NM+HbhVumN/GWBnNKPWGmt9qX4sjh/2Ybtf5QxwwZh1LDBQt2f6+LnWnUxdfxYwe7wXkk8b63bVti/fTMObd2CevUaC82b6cHB2BynA4KEk34B0mxd22fY4zgCj7vDi96sjDe9QTxJUo6RCDMOhw5i6+ol2klq333/A779jgdzVBPGTp2JcZPGo2mjxkIrElSOEuu1bC70pANqGEl6FzqImNacX8N5N3pKkV0HOoA6tNZF325dBM4J5pxfLRw91kR/VSRnuGEDoTm9CXh6jVqFqkf/p1WzFmhEu0amDh1cnMOkNu7u3K49+vXsCx2SZ6YJPecW9Jyb0mMytWv+pAhxtapCNckh5uscHeZewdWksG3RMEPBaM4kHF37KyKM1gjRphuR4rAbF9xMhBshTrgVdgyPU8OE8guxeHs1DX/duST8XVogXSfC/P2EZi100bFTdzqZLBE6depIO+KqWiGWCtufftJGiPv0McTEib9gyOARgoHBAGxcvxkxMYkCdyzgnNKYU6cES2NT2FnZkNiaCIcPHCD2S+SXsTA2gocmMsx4ux8jST6Mo3RyZCxNDkqj8/60G2cM+/bFxrXrFOkgyl8o0RlVyGZNmohFM+ci0MNLcLKywFEHO7izDBM+bm4I9PSCL/0c5oSfD06FBCMqPEyIjY7C2cRE7WTFs4ln8PRxsTZC/LgoHwvHjsS8/u2FbZN6IXzXVARuV7BdPBQbxnbHHAN9BZLjKZ11SHTaCdvG90HI9nm4enyHUHjSEsUx1ig6aSo8iDhMQryfRHmHhp3I99qG2z47hHsB+3DXezduuW4VssxW4PQmEnESYcZxwQQkhx7H8O6dBB/bQ3j3+iVJzTvh7w/vROzvXzol2B48gLF9OyD7XLpwOTsLJhsWIszHXTifchpXMlNxM+eccOvKReRfy8ad3MtCwc0ruJ+fiwe3byrczcOjgnwU378jPL5/D08eFOBJoULJI5Ks4ocSORRKnuBZaQmel5UqPC3D82dlePHsqfC8rIS+T/Jb8lh4++aVFHUV3L4hWOzfBrM9u3Et5azwn5Fh/qcKcW5GAmxNjGFnYiRYG+9HfJj/ZxHyx/T6Pyp6JJQ+LlFkqKRMeFr2XCh7ytHFZ3j67Dme0XtAvb3kSanwpPiJIFPGiCdPFJwOmaJ34wboQhsXpjPRu3kDjGzbXBjbvqUw36C9sG54T1jMGgGnhRMEmzmj4bxmEW6mpwov6GeX00amnGSKefX0FV49I/l9/om3L0iASf4EjQirgqxEk/kxngnPip/h9UuO/P8pyPRA2gQ9LHgg5Ofm4fK5S7iYnClkJqYiLS4JieGnhaK7dyQq+oajrkQJ/f1CPHwQrCHQ3Us+sVJxt7ODs7kZHA4fFuzpnGF9wAjBJE/Mi+cvUExCnJ2SINy/dx9htMYsnfur8Pusediwci2SY+OFzLOZ2LnXFJu3HRQSks7i/n16Hem1YXgQzYsXn3LCWd7//PODFMox6RcuIyYxE8kZ2cL9wmKJ+qvnH+5DLMWV77hbBHeR4Pxhjgyz/PLjKvdTN/CKDPOERwW+Dw8XKqNjnSktY9Eu0w7eKCoqouf7AAX37wu38m/j8uVLJOXZAuf5hoeHIiQ0TPD180dAoL9EeZkzyXQuO58u3SfUDhQ5OTkkwucFlmGO+PJ0OmVC3Qn4ePvhZORJIYKnCEafJgk+IyTS+ZD/zzkNGRlpSElJJnGOFPxorff14SI6f4GFOoKk/AidyxlHXuuPuWiF2N7eHpZWlrCwMBc4GsxYWpoLJqZGOHBgL/bu2yns27eLRHgvSfBOYePaDdi8cSP27NwujBw6mgSvLn6ZPF5gaW3YoAHGDB8u/Ew+w4V3LJ1M3Tp1oEdi2aRxU0GnpQ7027ZR1j2iYzt9mWjHE+kYPV0ddO7QXum+RHTv0kl+Rq+u3QVeq1iIf5nCE+qmamWYI8PCOKX/8LhRo4UJo8fIYI7BAwwFFuKuHbneqL3Ana5YhLURYq5t4k5Z5DwM5w/zbR04isy+00pXhJgDiQx3dvhMiKPuo9IhTy3fW/jhx279UbW7oaAVYlWAF23Hd0OnofLgqUKlIVOEb4ZOFZTvTUblwwGC+v85KvwJFmKlq8X39HhVvlUGcChDOBTpVCPGVX6oogz2kNs+San6/e++VTpV/Iu0/neyccnvmDBihMCTWFqSyP0yZYIwe9pkqdycNGaEsHzRr7Sr6kG7Kl1h3tRZCHY7Toupr8DjN/2PuSPY3UPwdz1GX7vSyc9RcLO1gYedLYnwIcFm316s+2M+7W6+U+AuE0Q1OjiZFVv3kJBN1ibNt+S0BxLL1iSljGHvfpgwdBT6duoqcFeHNjoswXpC6+Y8SIPElwdqEDz6uZ2unlKIR7Sj77Vo3Egrw2oXiZZNGgvcNaIZvQFUmtPPZ5rS/2Gak/DWr1NX2xi8fp366EI7veZNmwksyf1690dLkmKmFhcPVq+m7erAQiyFdSqcSkGvwZDO7YQtU0bCbPE0+O5aKpwy3oRUx304f8xEuOJvh3wS4oLT3kJJ6gm84WEdN9KFD/eu4u/yR3j7qlyYO/UXEuIeWLhgsaCn10aEWB3EUasmd6P4JMSGhoMxYfx0kuGRQu9e/bFl8zbExp0RykgIOEJ8/doVwejAQRgfPARbkmLGeN8+WFuY4RC9zow1ya8TnQC93I4JbkedEODnCycHa8Ha0ph22hMxdMAAoTsJ+w7agKkfafJiwgvM+/dvhMmjRsJo7wE4WZsL7k4OOGJrBTcXF8GdH9+bZNlXIcjPG+EkxKdORggccUwlIc5MThYyklPwrIxH1ypC/PTxbbjSCXxid31h2YiuOLZ6JIK2TRKcV4yA9/oJcFwyXDi+ZjyCt09Hkvli4erxPSjNCMa7m8nCn3ln8Dr7BJ4mOQulCfZ4fNqcxHe3kOu+GTeOb9Vy8/g2XLBcgXOmy4WE3Qvhs3wqzGcMF+I87JERF4bshFPC6/JSEpi3+PtvnqD1J/7jA08d+4i3z+4Jvg4WGNazHTycrIRbt24iNfUsLaRJQlpaKs4kJSD2dIwQcyoKkWGhRIhwKvwEok6G4lSEwmn6G56ODKfbwoSYSPqb0tenT/L3QukxIhEXfRJxMRroeuzpCMTHRAp8PeZUOGKjwoTTJ08gOuIEkmJPCbks4yTC165kCWfpNYqPJjG6fkv4zwux8nrm5WQihKekRZ4WEhKSZKHPu3lDyL1+DYlxMXSc8LHihQAvDyGYjhvmRCBtLEMCERbkL4QHBSA8IAAhdGwxgT6e8Pc8RsecBk93BHrz//cSIsKCsX/NKgzV1xGmdG+HxYO6Y9mwnsIKYtOYPjCdNVww+2UE7OaOxcHJg4XkED+SYBJXkmDmOfGCRO8li60mOvyK0yU0RXXM6+cswyzGSoSYv6/CsvyOiyfpdkZJefk8ov/xA3fg+Chw0R1L8svyl0JRwUNcPn8Z8eExQkHebWm9p36fi+Cky8txL4HTJTwcHEmEHQRXaxs4mZvD5tBhgaPDVgcO0RrB64QNnj19ikeFD5GVkihwGkF0WBQW/TJbYCHeuXknzmecE1yP+WDHblMEh0QL9+4WoaTkubYolyPCasEfU1Rchos5uYiJzxSy6TpvYtQUB6V1WkUB5k9PODL8+WCNT11IlFHM6ij0ct50cDHwKw0vlajwkxJu9VYiQvzw4SP5vZgHD+6jkKRYTZHg6O6F8+ckLUJSIwICpe2Zr3+QEB4RjjTaGPH9mCtXLyH35nUpvGMuX1ZkOC0tTYii92M4vb/8/PwEV1qruXsEp0YwiQkJmtSKFIEjyjwKmp8Dk5mRISIcQudQJig4ULpYhNN5gQmj52ZuYYXDZibCsWPO8PBwgxvJMGNnawcrKytY2yhYWVmQGJvC1NRY2LN3J7Zt34zdu7cLe/fuwu5d22nN2SwsX7YMmzesw/7dO4VhQ0aiTWt9tNFtK/Qg+W3YsKF2Ml17fX1Zhzn1k6lZ82e0Jsnt27OnwNHSfn16Q1dHV+AosmEfAxLjdkINcpAutAa14U95pftELbQg75hCksuwEFcsqpvMnbnodlWI1YEcE8eOE8aPUoRY7TLRpUNHcMpqF3puTMc2JMRc5M/drjhK3FqJDKsRY/YRPZ2W0Of7cJEdCXF1FmKNN3GEuBILsZrOcOoeKu20RuWdNkKVffb4sXMvVO0xUOCUCSmWk6gwMXs9qvYbg+81VO47CpX6EAYjhSr9x6DqgLHawR2VE5X//69C/Fxh/mYRWzWC/d0/WX4/F1xut6ZGjL+MCH/59f8IX4X4qxB/FeKvQvxViL8K8Vch/irEX4X4qxD/Py3EHfTboAa90Ax/zG+2bzv6GfQWOL+ma6fOOGprJPCghFY6rTF7xlTB95gTInx9SX69BD9XN/iRAPsfVfA54gRfJye4kwgzHra2OEaCoQqxyZbNWDJrKtTRg99994OkTvxQpZowevJ0dO3RU1IXGB06uAU6MJi+3XtjaJ+B6NG+s8ApDW344G7OyecktnTf1s05L7iZAn3dXb8jurdT0Kfft2UjFluFFgTnFnckUWT4MTglQv35XFQnhXUamjVmaW6GBnXrCXV+ri3FdtwOhWlUvxF6dO4qz4OpU6sWvamU1AimSpUqSh6xRkAVIa6ODi2bC8tHD8ahXyfAfesfQpTpViTZ7kSGy0Hhso8NbgSQFEe4CkWJgXgmwzpShD9vXcTfxfn4+225kB4fjw76XbFo0VKhZQtd+blqygRLei3JIVZyunlU8/hxUzFo4HChf78h2L5lF6KjE4WndLLnBSM5MUWwMrOB2WEzWBw8LDjR4mduTIudmalgceggibCrtu+w13FX2Fub4bjbUcHG0hSz6CTTr1cvYZjhQBgZHcQb7u35joX4heTgvXvHi9UbjBk6GKuWLIGXy1HB3soMLo62cHawEzzoMf1Yarw9hTAWmBASoogwITYqEmfPnEF6arIGFuJS7UfsJUV5uEoLwvCOusLCwZ1xeO4A+G+aLETvn4NrxzfgittG4W7wQZQlOOBtdrDw4fZZ/P0oFx8e31QouoI/b8TgXXaQ8DrTG8+SXVB8ylzI99tNErwVuW6bhMuOa3HOfBmidywQvJZNh/Ws0XBcOU8oKbyLp8WFePPiqfDn65ckMH8S7wVFiP9D25f6hPNBTBxmiBXzJwnXr16VBTPjXIZw4cI5zSKcIZw7RwspL46pCnw9NSWZ4JZNZ2iBTENGxllaPJMF/vr8+cwKZCAr+4IsrAqc03hefg5zkS8v8s/UQNdzci7iBi3mzP3791BIklBw767ARUWZGRdRlJcv/J+EWP2uKsS3L2eQlMciIy1duHz5Cm7ls4w8EO7cKaCfcQ3nMi4IiYmpiIsjCY9XSEzgPq/J0s+WSeTbaWMYF5soRNNjn46KRXRMvHD6dBxJSLTcJkTHycZrNS2izJQe7bF4aG+sHtlP2DZhCMznjYcxvcbMwSlDYPf7NNxMSxZEhEtYgsuFV09fSlqEKrhSQFfGKRBK32EV9f4Mp0q849xZ5vU7+v8vPhVF/vnhsyJJ5TbO91bzvz8ocvyxIn/TZvut8PLZCxHNly9eC8VFxTjh6Y9AN1/B96gbvJxoo2pnL/AgDmcLSziamgm2h4xhvucAvLglI1FGv++jB0U4nxgvsDRGBIRg0ay5woJf5sJ4vzFi6G/LHDKxg4OTBx07dwTuK1zOhYWatnic3sBpDDfy7grRJMFxSZkkkXeEp7yJeMnFbwosuUqRnFow9/kgFhZiKcDTDN54+1YpnHtezkOEuCc1901/iWfPngqcFvGouBiPnzwWHj56JKkRDx48ELjvMLdWu3r1inDh/HkSzzAEkAgz4RERCAoJAfcOZi5r7pebe0PIJ4nOp03upUuXhPT0dMQlxGrbovkF+sLLxwOubm5CBG1e4+JOa9uwnTvHucbnkZ2dI+TkZNPlRaTTe4Vx8/DEhq274E2bPMbHh9b9YNoY0maZMTG1wJp1m7XC6+rqhKOErY21YEmyzP2FnZyOCHzdwsIERocPCCzEO3ZuI7YI27dvwtYtG7Bu/Rph8e+LsGb1Suzbxe3XdmDG9Floq9cOTRs3E3p07QJ9EuF69RoIY0aNQJ069aHDhfLEsCGDaI2tSU7TUejUrj3drz46tGsr6OvqSapEpw7tBA6C1eM6IbpkmtIaXp/uP6B3L4FHNXPKhLbv8ISJmDZxMiaR/DKqCKs5xONGjsaoobSOGvQRWIiZzu14CEc7tNfIr74up0oQrXWV21qzHOuK33CxvirE+uQoP/5YQzvXgFMmeNyytkguIBuVmrRCpQZNhZqNW+An+v2q9RwocB6wCDEP8GCC6P4+qVq+8T2Lyr58/ayGVFRmTuYL2pZsFfOH+edWEGKWTO4/zFSp8oMU/lUUUJZetQ8xD/H4F0GtpEgz8z8iyDyxhastGZ7PPahfH5LeVgL38hs7cgT06EBheJdk2L8/jPduEzp16A4/J5IOl2OC79Fj8KFLfxdXgWXY094B7jY2gouZGexJhK127xZMt23FzDEjtI2lpcPEt99rX+A+tIviyXksngxLJh+kapI7Dw3p1rEr2tIl07qlDkksSS7JMsP/p2VTuk4yzOg05QEcLdC5dVuhu357EeBmDRoKTRvUJ/FtpM3haU+/b3N6DDUyzBHfFpwPrBFj7kTRnL7m/oZMQ3qzcIPvpnTwMc0bNZNiuib02AzP/a7+o5I7LLAIS2GdIsiqnNYlsWYWDjXEtmmjYbdqnhCyf40IcZrTfuH8MWNc97dFXpiTcD/WF09SQ/HqUqLw560s/H33Cj4+KxLev3mF3+b/innzlgpNmjSX7hZq/2HuMMGdJqpW/VEYPHgkJoyfpu1DPKDfYOzcuodkIEUoe/4SPIjhhH+gYLz/IGwtrWFtbi4c3r8fxiTBTg72AkeLj5MQex7/xDGXI3A96ihYmRvRLnokBvbpK/Ts0hUH9u7RRmgk8vKauyC8Egb37Ycdm7fBwcpc4KiwC4m2KsTHjx0VKQ709RY4QhwS6I/IiHAhJvoUUpISkU6SwiTT9fJnZVohflyYh9evXmLDonnCVIN22D7VAD7rJwpxRvPw6JQZys8cE95eDMBfuXH4kJco/P3wCgnxDfx1P1v482Yi3ueEkAh7Ci/TjqE0zhYPQg8J11w3IcdhDdJNFwtnDi5E+JZZOPrbJMFk2igcmjYSmadDhNuXzpHYlOMdLbrMn29IfP/+i3gvqEKsCuGVRH/MmzweBu1bCZEnApGZydGjFOHihQwR2XOZ6QILME+H48tPYkwbiPRU4QJL77lP9+coUnZOlkSVGF5QOZfx8mWFT7mNykJ+7dpVXLt+Bddzrwo3b+aSlN4mES4Qiooe4OFD7smqCMPNvBv0M7JRmHdL+M8Isfz+H5Xo5s3sdCQlJpN4Zwm512/g9u079DPvCfm3b+MGFy9pnl/WxYvISD9Hf5sMITU1XUhOThOSSJBZmhPiEgXuaxwTTTIcnaBwOgFRUTE4GXlaiIiIQgYdZxYb9worZ8zB1N69Ma9vN2HLuCHYO3U4LBZOE0JM9qL4Vp5IMKPI7eeCq40OayLECizHn0eKpdjuxRvJDf7zncI7kkMplOTuHu+5CPKDUigpt/F9uLjxU1cQVY61EeQPHyRHXT2+PmreNx8/KnwgwX5SWIKrF3OFxKhUnPA+QWuEj+Bu54ojJEmOJhaCvTFtpvcchDN3nCCekEA+vF+EjNgY4e7dB4iNOI05U34RFs6aj9jwCLiRbDOmls50XGaJCDOcL8wSrI0IFz3G2fRLiE/MFK5cy5fCYG3Rm8jupyJJEWIpsNT0pdbkCb97pyAdJiRKrHz/xUsuqCyXqDDDUWnOM1cjwizEfFn48JFQcJ82YizEhQ+E/Ns3cZ42jalpZ4WIU1E4ERYhxW0M5+9mkaCqEeS7tEm8cyef/i53hFu0Scyh919KSpLAPYbd3I/CmaSUOepGm5Hjx2hjdkqIi4uRjaz2/UoSzDnLly8pZNN75HRUNDbv3CsMGjEWW3fspL+1i+B6zAnePsdhZm4mLPh9GQ4eNoILndMFZ0eJCJuZWwg2tjYykIMjx4y1tTX27tuFbSS+zKbN67Fh41qs37Ba2KBh+YolwoIF87Fy1VLs2blVWPrHUui3aY/B5AlMzZq1MW74MNSuXVfg+qdJY0drBbmNbmsS0A6oVYunz9VBp/Yd0apFC61PdKOv69aujW4k1gxHl3mgFXefYAwH9JGc3UYNGwrTJ06QyDAP4FCGcIwXEeZcYUaEmIvqRisFdXwb9yEeQM+V4SFoHdrqa1GL51iEGe4soUoxoy3u57xiooO+PqrTus2BNYYL1Cr/vlNb1CaFctEPiUdC5fgnqGI4Fj+SDDOKENN9Ul8J3/QejsrfV0ElDWqdk0yzY+i2b76vim/XmgucQ/ylEFeOL6vQZUIRYhXJG/6eswH+Kah5w2oOMQuvKr7/I/L776jxU22MGDhA2Lt2tYhQ2zZthSXzZ2PnmpWoX5dbjTVE7x7dMX38WCyaN1doQjsOni7k6+wmeDo4IeCoO7ztjwhehKulJVzpzcAcOWwMx4OHYLN3r2C8dRNG9euLf3KFJIfU1eI6iRT/gElzZqEuSWYVkkamaaMmym6vWQuhOe0KWTpb0PNgWjZpgdYtdNGqmY7QtAEXyDXVwl9LpFjz/0WO6ffU5+R6onmjhmhcv55cMtxpog0dkGqEl6PCTSoU2bEcsyjrtWylQJsITp1oXK+xoK/bRiS6Xu06Qo3qHBX+QXsAq10mtLAQV69ObzqFsT27Y+OU0TBfNls4vm0J4qy2IdFaIdPlIHI8zZF3wkkoOO2FJykn8ConTnh7PQ0f7l7Ch8d3hI9vn+PKxQv4ZcoioUGDxlJEp07m4UpbjhBXq1ZdGDRIEeKBhsOE/n0HYf+ug7SYpAhPyxUhViNq+/fsx8Hde+BgZy/YWprjCImwmjLh6uQIT3c3kmJnwcOdm8gHwOmInWBtbY5pkyZgQK9ewkCDvrC3tMNbWswYngTGKRNvSAIZQ9pl79q+TYZ9MPb0/4850zHn4iS4088I5KlNvp5CWGgIIvlj/qgoITYmiqQmFum00AipZ0WINSqFRw9u4q+//kQGSSBjqN8UE3vqY/8vA4Xj68Yiz3snSmMdhKfJrnieehzP0zyFZ2k+KM/ww6tzAUJpjCOeRFnisYaSWBvpLnHddbOQYb4EMXvnS2stxunXcbCYOQq7xg8RjH8ZgwQ3Bzhu2yCUFhbg/bs3JMKvhL/evpFUiX8VYoXnD69i9dxxaNukrnCAFqGrV3JERJk8Es6bN6+TqF5WuHqZpJFk9dp14caNmzIpi8fHMrwoc6oBS6WI5W1eoDniel+QBb9AuWTuPyjUwNeZIhLdIu3gA4mePVaK0ZiSkjKUcNGRJqJ29+5tWqgv42H+bUEbAv7f/KPfXBvNzL2YhrNnUnDlUo7Ak7+KHhbRz+XIHUfsHtPzeYg7d+8r3LmPvFt3kXsjX7h2PQ9Xr93Epcu5Qlb2FWRnc5T9snD+fA7OkbBnnssS0tMvIPXsOSSnZAhnUjOQcyEbfg4egoeZC077heDYIRMh0MIaSd6+SPIPEfKv5EpKw6ciuBco5wgwRz5Z+L6I/iopEkpqhHSU4IK6CkVyf74j6SXxfUfyxkgHEe4GokGkV1NIp6IIsKZjiDZKrEz243SKisfXlxuUL7/HrwELeNnjciH38l3EhKXAzc5fsD9sA6t9tEbwOkE8fvQIRfcfIuXUKeF2/l2EB4ZizrSZwtYN2xAZEg5jM0chIPg0Sp6UicQy7+n34W4SV6/dEeISzyP7Uh5J8HNB6SLyqQhO2zFEosHvtbcp0wo5UqwUz71iCdaIME+b49Z6DLfc48tnz58Jz58/lxQJLaWleES/092Ce8K9AqWTxPXca8KlyznIoA1mNG2smNi4OPlUJTubI7XZdAzmKu+pe3cEluDb+dyFQokQn0k+g6CQIAQE+QpWthawdbCGo5OT4OHlLuc87i7B8Cc6PNzjypUrWkSEs7IEP/9gjJ86Gz37GgrrN22Aj7c7nJ3tBSdnBxw4dBCTp88UtmzbRrc7yHANxsTMGAeMjER8GU9Pd3pMb+k0wezavQvr1q3GGnIMhqV35cqlWLpssbBq1TJs3LAGq9csFxYunI8VK5dg9/atwrbNm1C/QVP0pbWCad2qFX4m0R1kYCA0ICHWa8WT3ZTBFyy9Hdu3Q6MGDQVdHR0Y9OopUWKma6cO0CUJrVunrtCEHKBvrx4ShWV0dFqgYwd91KtTX5g+SRnEoQrxJB7EQVKs7SpBjGc5ViPE3HaNhbhvf4Gjw+3JP1S4UI4FWBVjFmIe2czdJhhOCWUhVrtWcREgPy/1E10ezPFNvaao7JEmVEritmqMEgGunPwCVQeNR/WegwRtyoTaNcLrAiq5JBJnNCShsksycUaQ25yTUOlEnkL8v0aIRbA1QvyPBVvwDUsmF9NpCuq+16ROMF92mGD++U+l+wTz5feYL1Mu/q/zVYi/CvFXIf4qxF+F+KsQfxXir0L8VYi/CvH/00LMaQad2ugLdWrXI1GrhrnTJwgzJ40hEW4gecOMtdFujB85FD//XE9oq9sezqbm8HV0FdysbOHt6AJPWwfhuI29iPBRug9jd+AgLLlX7a5dwt41qzCodw+tEHPLNe5DrLYR6UJCWEM+wlde8B++/0Fyelo2banQpKVILksxo9uc26LpiBgzqgSrNKnfGE3qcXGekkKhy2LctKm0Y2M60wHZogmnZii0at5MUiPUlAhO12ApVt9Q/DWLMh+oTPvWbSQto1nDZkJj+lnct7h2rZ+FGtV/xA8/fBLiimLMcA5xtR8VKWbatWyGZeOGYe/8iYLVslmINN6IRJvtQobzAWR7mCE3wFHgvsQPk4Lw7Pwp4fWlBLzj4jpNX+K/yx/j41/v4GRuL9Sr31TSJFiCBbr+cy3OIVZSJoYMGYVxY6fAcMAQYVD/ITA/aIZEkmHmaTkXuL1HcECIYGVmQVJqAxOjQ4KdrS0O7t8naQyMhYmRFNF5ebgLAf6+sLexgB/dxpiZHcbEsaMwoEcPwaBbd1gYm0FtfM9FdSzFr18+Fwy6d8cmOqEecbQVnOxtcNSJjjlnR4Hz3Hx9POnn+AghIQEIDg5AVNRJITbmNJLPJODs2VQhLSUFb16+EI0SIS66Ce6vq35EumDSaPRtrYM5AzoLWyf3g/fqKYg/8IeQ5bgJ19x34JLTZiHnCAmn66evz9msQpbDWlw7tkXIcVyLZONFOLl9rnBsyQRYzBkuuaPMjjEDsWlkfxyYMlLw3bkShxdOgekfCwUuoHv/9lMKyV/vXuPvjzzW+r3AUixKqBGSv9+/REKgI732u4VADzvk3bhKMsrFPPfxsJgEtZCHAdwVCul6fn4uLqanCufOnsH59LO4wOkRxMVz6cg6R5J38aJC1gVcooX72pWrwlVaYJkbubnCrbxbJM20kN9RKLjLqREPUFT0UGApLS5WWlAxyrACRYpFjEmSWbDLSKYZ/pj+//jvPz6J2Z1rJBXXb0IVdv6ZPAjhCbdGYwkvfkK3PRIpZu7dvSetr/Ju3BKuXc+VvOOsrBwhM+M80tMykZaaLqQmn0XqmVRJy2AS4pNk+Iea4xp1KhqXzl9AkKuf4GlzDDZGNlg2Y5FwNiwat1Iv4uqZs0JKTCpyMi9rekETJLXvSNLevVLgnsKvNfKrCjDf/v71ewWWYE6H4FQIFltuM0aCVzFnmAVYFV6tGGtkWL7+oKRGSI9ouVSGd6h8KcH/u39KagVvUTTvML7+8T/wopzHXr/Glaw8uDsEwe6giVBIr9EDIiE8VLh1Mx/RETEkw7MEtyOuJFZ+sHX0EgqLuFXfO+3vW1BYjJjEi0hMviQUFD6SPGAevsKIOLMUv1J4xX/P15wLzIVzfyqpWnTeUVMo1HHM6mhmHvfMA1jKy8s10PXnXDj3VCh+8kQK53gkM/PwUbFsBAsLi4R79+7SxvM6SW+WkJ3Dm6lzyMjgFmeZtOHMk/twsR1T/KiIHqOINnL5Ags09xoOiwgV7J2OwMLWClv37RUs7azg6eNO50GFM8nxMphDLcK7evWq5OXzc2CuXrkstx919RJ69B+OPoOGYdnKPwR+DB/v47C3tRb2H9yHiSTCi5cuF+wdbOB4xB7m5iaC8WEjEWMe4cycOBEkvYhXrl4r/LpwEZavXI6VqxSWLftDxJclmNm2dSM2bVpLty0TFi6aR5K8FNs3bxT27NgOg979ZdgG046ksjGtyeogrC6dOsm6xiOeGc4D1iPJHG44QOCewvpt9dC1a2fh51o10UaXJJm8g6lZoyaaN22Ctm3aCLVr10HjRo3QWldXmDFpouQOq4M4OEWCi+lYgpmxI3kAiCLCDH/NGPYzFHp06SrPU7+1XgWUVAntMA6dliTKbQSWYfYMNYeY85w/F2Jub/ZPVK5aQ+CxzZXG/YrK4xYI303+DTVa6qGGwWBB6SVcqm27VvnXrfh24ER8YzhBqERUJn4YNlX4dtBEVO4/DpWN/AU1B/lfcog1Qvzdwi2o8f332kEbX6ZBfPsPZZTzv0ipBulF/N8twF9itGk1yXAboWaNWmhI0rho9kxh+KCBtKtqjjFDhwmjhg5Cxzbt0VpHT/j9l/nwIek9bmknHLOgSysHeFjbCy6HzeB8yAQO+w4JFjt3w3znLuxbv17YQW8Gg64dSYa/E0SIpR+xQtOmjSS3tbM+z/Sm50cHN+cG1ajxk9CiaQutDDMcHWYR1iFZZr6MELOgihQ3UCK9HCHmCXa6JLVM62bN0KNjR3TU0xNa022NuEl3XQWeUteAI8Caojreceo2U/KSmTYtW6FtK/pb6ncSWtDfru7PdaTZN/Nzzer4sdrnIlxRiNXCOlWI69euiXlD+mLV5GGC+e8z4LttKeKtdwopDnuR7WmOq352wq2wo7gf66cd1FF+MRrvr6d+6ktcfBt/vypDMUkF06NjD4kK11apxc+xlnZHPHLkOIwbNw1Dh4wURg4dBTsTK6SkZgildPLnqupA/2DB+LAJSbE5bCwVDh/YCxsrC9haWgqWFsZwdTmibdzuQ7IaEhKozSnjquOxo4ZjQM8eQo+OnWBjboXX9DMYZcLTCzwveyJwVbGZmSkc7WwEF554R4/vzrlykufmTCdiHwQG+AohIUGIjIzQTlqKiSYhTkpC+tk0ITMtnUS7XLNwf8TDwpsyMEIV4hOBvhjcuRN60EaFGdejIxYP7gPbhRMFvw3zcGLrb4jY/Yfgv3E+PFbNhPcaDatnwnfdbLgtmyrYzB8Nk5nDsGvSQGHt8D5YOcQAywb2FlYONsAaYu0QlR5YPrArAox3CTez0khcuDjqpaBEiHnAhSrEf4p6aIWYfpeCnGhczVC4ceUiMmODcP1crPDg3k1kxIUgLcZfuHc7F1fOpyIywFs4Rb9/VJAfYk4EKoQGIC48GLFhCtGhdNv/x95bh1W1b3vcZ59zdrq3rVgIFoqUlIFdgCh2d3fRoYgICCidAgpSgiIg2N3d3d3drfv7jjHmmgtk73Pv+zzve+8/V/f+PKuTudb8/MYasSoXm4vyhI0FudhEbFuzStixfjX2bFqHfVs3Cod3bccRzl3evVOBj5N0H9mzUzhBwn3m+CGcP3lM4cQRnDlyCA+uXBT+exnj183ixZHML7h8bA+O0WOcOXpA4fBBnCSxV7sYHNq5FVvXrsZGki9mA3fXoO20iLYdJp+214LMDKxMWyrkpqZgWTL3V08QUmOjkcJdTqIUFoUtQMLCYCSHRwjH6f7fvnyOwvSVworFy+A9yQlHN20Rbp3hfsu0CLl4TTh39jItXJbg5rkrAneA4Nxf7nSg8Ekb+RU+MDy05rPw+dMXBY3MSlSYpwvydTTXk4iwNkdYM02wRHRYmeL3p4avcvr/rRArlxVfrm6H357m3GMNdH/v3n7E2WPnhVvXbtH7QUJckC9cvHAFa/LWYMzQ0ULG0hwEhSzC7j1HBR4kwxHdg4fPCWvW7cPZc9ek2wOjDNF4T4tqjuwqOcFKJwkF7fAVjTAzShRZgQvpuF+12kVCGb5CEvxKw8uXIsIPaSHHKL9wPJJFF8N58EoRnQJHfE+fOkvP8ZxwRJN3r+bQ37/Pk/V40XZPuEvHL12+jENHDgvrNq5FXFI85ofOF+YF+8PFwwNRsTFCelYaNtDnjXsTM1wgx1FgLtxTivdYiM9oc/uPHD5MQrsYRhathaat2mLo+NFSHMdkZKTQ9/YyhIUvFKY5O2HkuPGIjY0QYmLCMc/fH74k40xMXKz0Ol5LnykmPSMdk6ZMg6NjL2H8+AmY6TQNTs4Kbu5O8PB0gaeXqzBrlofkEI8bN0YYM3YUpk6ZAC83Z8F3lhfate0Ifb16AkdMrcwtxRMYe7vOMsGuahUdoVsXW4kaG3KPX6Jj29YoX6ES9PT0BCO6PfcbNjEyFKrRvp/326bGRkLFipVQoUIF2HZsL/Tp2RN9ehTDMixFdBq6khTb29ppBZmlmLtMtLJpLViamSm9hzUCz0LMhxwVZtQIsSrEHLzkX6EN6vKh0iOZc4jLlPld+KdGiNUitH/8wLBQKnBAkYv6yzXvKGiHa6hFcCM98C+S3h/b9xR+oOP/IEH+R7vuwr/b9cS/6fQPQTnCP7Y++7bLhFrMp0aIR3jgp3/9S8SXKS2fPK3uZ+6frD7fUpf/+5//Eikuff7/KNw2jNuLMKZGjTCsb3dt0jhHQFtYmSPC31uoUrkqCV99jB04UEiJjMLS0EgsCQkT4vznY1HgQjoMErgRfdzc+Yjy8RMWenojwNUN/i6uwqypE0nE62rbrimRYS6q00yqo9VRw/oGGNDNUZg0bDgmDR8OvZq6Am8E/NNFHV3uKMEizKkSdUREGTUyzCLM1KhSHdUrk9BW4xHMSuSXu1U0rMersvpKkVzN6jCmxQFTl1aH3EVCHbxRraqO9rh6mluvGfCGSpg04jGLBnRbE6GeXl25HjcEFypVlEEcv/3GEqxIMUeMS3aZKCnE5cuXgz1J18Ru7QWODiZOH458P2dhW8QcHEldgHO5CcKFgkRcW59ZYlDHerw7sxOfLh0RPt84iy/P79CO7o2wKisHNXT0aGVcUUEjxeooaVvbrnDo2hMdO9kLtiTEsQsjsWf3AeE57VQ+fPyAHTt2CrEcEfZTJJiJi4lGUlIyHY8Q4uKikbpkMTLTUwWW4UUJ0Vi6dLEQQ0LhYNsBNtYWClZWSIxLwFuSUebV6xe0Y3qNa5fPCUb0JeEyYwqSFkULySzDS+jLOzlOyMxcihUrsqQSWqqhi/JFiNVJS1u2bMSunduxf99+gYWYxVfdcd+/cxGfSTDfvH0lbN68TrpWNKXVOWNJ22c7o8YY2aa14N3TEYGD+mDewF4K/bvDu4ct3Olvx7h2aQMn+zaY0L6ZMMKmCUZxQVUzU2FUC3NMaGWJiW2shAmtLTCtrRWcOjYTnDtaw8XWGpuWxgjDu3bBw6sn8frFM+ETPXeW4K88kIPh1mua18J8/foZz26eQrDTSMGxtQliAjyxfW2BEOg2EgtnuyM9IUooysmk89dgDxffEPu2bCaJ3Ymje3YLJw7sxXH+2ZWkkjnJwz74cL/CCT48uB+nDmig4yfp+ke5kEcDS+iB7ZuF3bSD37GuiOQ6T9hWmEeiuh2nScpVztCO/cnNqwJL1H/9T4lGcicE5u7FEzh/7BAuHDuo5czh/Ti2e5ewpTAf2SS4uUtThDzagRdkZZAMZwuFy7JQlJ2NtctzNCynhUIOXSdTyE/PwIrUVCJFyE1Lw5rsHDy4cVX48lmRzr1rdglhLrNx/uARnD5ySjhx5Axu3LiNWzfvCeePnsK6RVm0zYwRbl+4oXSC0CAR3m9SHhQJLtkVgnnx8InARXQ8nli9vSrE6u1Lw9Hg0gJcWoZLUvqfKsT/6Tqlb8/3yY+nTj7kqPjjh4+xeVWRcP78FWxcuxU+rrOE7KxCZGev0aYy3KfXuGXncRw4fF549PiZpE2oo5ilUE4mEH4UpI3ah+I2bFox1qRIKIV0xV0luHMGTx7kbhTMy5ccHeYuEjygRUmPePjwER5wAZ2mkI47SfCvIIwixDckVYe5ePEiCe5FnOEoLXHl6hUpIr3/4J7AMnznDk+uuyYcOXIE6zduQGZ2hjAvKABOnu6Y5ecjeM72RtKSBFoIFAk7d+zA0WNHi4tYT3PhqpL2xJw7RzJ88pR0o2BCQqNhaNoCrdt1EsZPn4ykxfHIoO9RZhUtduPoe8E/0E+YPHMaQhYEIZTkmPEPDoQ/F9UlJwqruFXj2iIsTV0qDB42Bm1oHzKVo8IEd5Xw9Z2lxcfHiw69ZSAH4zvHG16ebnBymiFMnDge06dNhofLDGEuCXGfnn1g28FWqELS27oVtzlViupZfh06dUL1ajWFenXqoJmlOWrVqCU0btQIdek8df9sbdVEHKdqFZboKrA0NUWZ3/7QphTadmono5J54AfTw7EbenJ7NQ08lMORI8IqnCJh10UrxA582tYerVq0EixNzWHUkEVYifiy/LIUq0VzihDz5ODiCDFLMXeaYExJ4LlN6++//yFICzMS0JJdGSQqq+HHn36UX6nLmtsIkkax5aFm4hynTjwlkSXJ3abAxyXtQgud5vPVrhQ8/KOEEGu7W2gE+4eB00Qy1bZqv/ykRItLF82pKRIc4f6LoP5DKbYrHV3+H+O7EH8X4u9C/F2IvwvxdyEuzXch/i7E34X4uxD/nxJiHpFcv3Z9YWTvnujT1Q46tGExVsZGaNPcksSY253polJFHfSmP/CUISOEVtYtkRYWiYhZc4RIH1/E+M5DvF+gEDXHH9E+87DQw1tYQEI8d6YTPCZMFKYNG4wGtWtpUybU3OEyZXg4RDl0cewBm2YtkR4fI2zNX4Hdq/OREBwg2JiY4Kcff5GfDZg6tVlMG5Kk6mmoLRKsokpxLR0FbZJ63boCH6+rxwV0nBtcC7W5P7G0XePiOSV/WOC0CUIK6zjdQpMy0aSxKQzrcf9i7oXMgk1yTh9Mbv/CVK1SUZsawfxdyoRSVFdWi1mDOhjZsbXgM7ALQsf0QpbnRGFDsBf2JgTgRFaUcH5VEq6uzcCtjSuEp7vX4dWRTXh/bq/w6epxfHl4TYrrmA9vXmHi8MmSO85wY3IexKIW1dnZdUXXbr3QoYOdYEdSHBMaJcVCzEvZwX4kCU0TwsPCSUoX0ZelvxAdHYmA+QFIWZomxJIgZ+csw7Iszu1Nw4rcbPqiXILlK7KF8PAQdOncEa2bWglN6AOftCgBr9++UaDn+/rtSzx59EBoYmSE+IQ4JMSFC8lJsUgmEU5PTxGys9ORSyKcR9sNs4a+nDfSDmXr1s3Ctm2bsX37FmlGzxw6cIB2lK+0P+Hev3uJdtCf6Tweu/oam0iI9+7fA9fJ44WGtA1Y6OujdSNDwc7UBL1oAdnD0kzoQ1+w/ZuaYWDTJsKApqaECR03FoaQBA9v3gRjWloK41tZYBxJ8tR2VhosMaMDHba3EGYQsxxbIj8pTKhG20rK7DF4/eyh8Pkj9x8uLqorFmK1LdYXfHzzAkkBzoJ+1XJwGtkbB7iHMDFr6kg4jR2CjMQ4YUVKCjYXFmJrUZGwbXURdm1YT2K8STiwnWR2x1bs37ZFOLhju5x3UMMBem9ZeDk1gjlI1z1A19u3heWaFiMb1mLnujXYSvfLsASvy+Px75nCahLyw3QfJ/ZsE47tosfYth53zx4RSgvWX/5JukSxEF87shOHt23Aka3rFLYRO0ny6XkzhcuWYlFoCBbTdsukx8ciLYHfiwQhe3Eycuk9ySXpZfLS07AyLV3El2EZXr54CTbkrhTOk8C8e/VSUlUYztP9+P49koOjhcLMlTh64BhuXrkpyDCHB49x9cBR4VDuangNGodODSyF8R0G4caZyyLBags0RYg5P1jJEebcWTXn9ws93uOrN/H09n3h40clp/gbIdbcj4q0XiOpZpR0iWIhVqX170RWPf+bt197HbU129//vb4Rbc31GH5sFva7t+4J585cxOqC9YgKihQyM1bh3t0HuHX7obDr0Hlcv3kfat/g9yK5n4pPc3EhvX6Vdzxkg9vPaUWYUyqUFmpqm7XXr5UexgynRPCobk6TUHKHX+HJs2faFIn7Mq77kaRJMLdu31Fa+l1T4EK4S5cv4fLlywLnCJ85ewanzyjcvHGdRFjJXWcuXrqM4ydOomjteiGVFmmhUeGYNH26MI2EdPZcH4RELBRW075xGy0seagGc/rUaW0BLHORJPjixUt0/JzALdb2798Pv/kLhEbGTWHZtCWmzpgopGcuQdHqlRJUYOISYuDi4QYXdwUndxfMJmmd5TtHCIsIRU52JtavXyNs2LAGkdExJMFdhHYdOsPFzQnz588TQkIC6dAPwST2TOB87kc8D/4BvoIfCfPsWZ5wdXESpk6bhJn0mt1dnQRvD1cMGzYCenp1hebWVtDRqUGi2USoo0/n164tEsxUqVwJTS0tUaNGTaGaTlV0tetEcltR0K1VA1bmZrRP5v3ybyS/ZWFhZqZNSeAgoamJsXb/2NXBnqS4O7pzIR3BQsyHnCrBsAB3tedcYs4f7iLpEw6ETfOWgrW5lUaAWYYVIeaUCZZkRs0j/raoTl/yihk+j1NDVCFmGf47IVbhfF0W4goVKgr/Dl1O4sqiq6Q4aFMnRIS5dVuJ87SX8Vjm4uM/yHFNmzeVnGMKuvVFMks+PqdJ8DjmkiOZVSHmgrr/Snz/q8v+f4NXQNOGDxGG9eohb7D6hs+hFeKwPt0k+ZyxNDLDgK5d0Y7+mIxJ/cZICgwRCWZi5wYg1Hs2Yuf5K8z1R4yPH4JcPQQ/J2cEOLvCfdwEYeqQgahHGyGvXBilw8RPKFuusjAnMAhmxqbwnjpNCJs7B6uWLsaugjyhaPEiVCxfHr/Qxstwz7xaJMKN6jcSuBewdHxgGdZEh0WMqymoK0klL6cealVn+a2J+nX0Bd4AuX+wLn14GBZgjiirk/OU6Xm1YUAfPMbcyASG9Lj19Q0E6YJRkwv7agiNDeqjYoVy9B6XFVQpLhZkzXAOjQyzHHNUeUDr5sJ0x/YIG9Mb6W7jhNUBrtgc7ovDKWHC2RXxuLY2HTc3LhMe7CjAy0Mb8O7UDuHL1WP4cucivnJxHfPxJW5cuoQmDS2ESrTqLUdSzNNvGAeH7rC3d0TbNh0FR4eeSIxRen0yr95wDt5HLM/JFyLCIrAgJARx8XFCaNhCJJFE+M6ZI6TQF3pKymKJ3DIZGanILyygL95UIWZRNLrYtkfLptaCjbUlVuauwLsP74U3795IhPjRw3sCTxNynTGJdhSJQmJiDJamJSM9Y7EgucMk3VxMx6xZW4i164qwncRMINnavWc3Dh48JBw5dIiE4f03Qswi9erVc2H9htXYQ+KsFonUKl8O+pUqwbB6NaGJbg1Y160Fm3q1hQ6G9dHZyABdjBsKDiaN0NuiMfpbGwsDiWHNOUqsMJkjw62aYEobc2F6OwtMadsEk1qbCk4kx+GjHbFgtqtQ9pdf4dm/Mz6+fioo0WGW4lIRYs1//Jo+ffqAk7RdMN6TRyNjUQTJ62YhPnguBju2xdKoaCGD/oarc3KwMS9PWJ/LOcEFIsbM9rWrsW2NIrPFkECvXiVsKSogoaad9NpVAp+3IX8l1q5YLqzLXS45ufkaOC+XJ1tmkowzuamJ2LtxLY7u3iYc3rEJezetw42juwR6RRDr1fLtP/YvETaWOuLC7o3YTzvp3WvzhF1rVuIAifGhHduEZckJWODrg6j5gUJsSBDieRsODxcWR0YgJYYHSsQJafFJQmZCirA1vxA3L17E5w8fBM65/fyJDzkXl2XzIy6fuoix9oOFvVt24+WL19IfmHlCUnx5/2H6XssWnAdMxMz+Y5EbnyI4dRuOmfbDcOXYGYE7oGjzgAWlmEyV2yc37uLWsbPa/GClJ2+xEIv4lhJikeLPnHfMMvz3OcOlZbikOH/7/v8pnShUQVdv883ldBs1x1l7/1810PYqxXyaoj8uWtu8YReWxqULRw6dIYF8QpJ5W+BJdPz6OQrOvOeOGiy/mtP8Hn38VCzELMwsxG9l+IYSEX5douuEWkCnDtp4+vQ5nj19IWIscvzimQgwF2Iy9+49wL0HD2XanHBL6aF9+cpV4fTpszh79hwdvySIqF44R9fhKXVKxwmeNHf8OA/FOI7NWzYjOi4aPvPmCs5enhg2bhxcvNyFqJhoLElZgo2bNwj7D+7BocOHcPYc5yWflSJWjkKrAn718hU5j/sNM7v27YI37aPrNzATTMysMXr6GPoOTRSKVucha1k6pjk5CdOJUePHYeDwYcKYKZMxa85s7aCNVavypbfxKvpOZ1w8vWDVvDUcHXsKHp5uWLAwCFHR4UIkyT13FgoLDxFCw4IREOCHOXSfzFza3/uR8Ht7ewkuLs5wdpoBdzdnwcPdFRMnTEDlytWF+vUMZDBHg3r1BUvzJnR+ZXSztxN0qlaXX0K7d7UT2Gl4DkPrFs2E38uUlTxh7u/L8P6Y9/k8nIvhoJt5EzNtUwGW4Z4aCVZhEe5iZy9wlLiLiLC9BjvpMtHSppVgYWbxTVEd/0pdssCOo8QlB3EoRXW16Tx9gYWY+ySrAcF/ceeGEkJcWoz5snIkxDxrgPn197L4wdAS/zBvI/xk0RY/mLem4ypt8INFazq/naBe9i+LNsKvTfl85bZajJvjd/IIhvODlRzmYuFk8VUHcfxdfnBJgS992f8KtWvVQmtra6E2yR0LcX8HO8HCyEgmsxjxqoWYNXWUrGTKl60otGlmg0UkrTEsvkSwpzdiSITj5gUIwfSBCPbwRJCbhzDP2UWK6aaNGCFMHNAXujpVtMV0MpjjJ04j+E0wNDRD57bt4OfhLATP9sJ8N1fkLkkS1mQsldHJpoaNBB6moVO1Gm30VQSO0tYmKVYjxFJQR+hWU1Dbp/GEGqYBSXGd2vpa2eXoLxfOqSkSHB1mIVbbsDE8wU5NmTCk96Zh3YaoW6uuUI/ui+9fl2SJaVCnNgnvb9qUiNIpErxRcxu0khHiP2gD7mZtLkzo0gYhI3shefoIocCfhDjSD/sWhwonsmJwIT8RNzdkCDc2puHBrpV4dmC18PbkNnxiKX50Q+H1I3z99A45SRlClYo1RYq5sIBx6NIdtnZd0apVW8HezgHxEbHYu/+o8Or1O9nBFBSsFvhLMTBwLpJIepnUNJLc6AjtZKRFi7iRexqyc9KFQhKmRYuikFewUoiLj4RdRxZiK8GavtDS0tO0P3m+5ojN21d4cPemYErbZ2rqYsTHRwhpGcl0/RQsW5YmrMjNQcGqPKwqWilwM3pOk9i5c4eW3bv3aqu8jxw+Ap6Ap+7873MRIgnxmzfPhc1b1uPAwX3IycwR9OnLVpekuE6l8kLDapVgVL0yLPWqC83q1EJzluMGekKLeroyslcV5N7mjTHE2hSjWzQRJrQ0x+TW5pjaxkKDOUa1NMT41iaCp31zpLqPx1BapDJ//FoGPS3M8OredYGf69fPn/AnizDzVRHiYgFhwfiI/WtTBfdxA7A4Ihg5CQuFVbTz62/XEpG+vsKSyHApGstPTxcKMjJQmJWFNSTJKqtpYVCYnSVIegFXk2emC5xywFHUVVnpQl4GF6KlSloCk5WUgPRFMUiOWiAsjgpFIu0YWUSZVNpZ7ly/imR9k7C9aAV2byzCxX3bBPx3QsyIEPOwkk+0CCjE3vUF2LsuX9i9Lg+Htm/EwW1bhaWxEZjn4Yb5tPNlIgP8EU/PI2FBiBC/YAESadGXGp0oFKbn4cDmHXjx+JGgSpwqdCyJEunURIg/kGyFTQ/CzCHjBZ4S94ZF68Y94dTOQ8gMT0X4zHlCsl8o7l+5gRtnrwnbstZgUoe+cLIfKdy5fEMiutw6TUER4rc8ppk4uW6TRITVlACJEAvF1/8mRYKFmOW1hOAqclxKWEsJsQrfpuQ/Po+7WWjbtGlur/5Tb68K/X+6f23XC+L82SvYueWg8PjxE9y990RbJCgLkM9fta9PFgif/6TjXzQossyLeEaiwxJFVuA0CaUNmzKoQwZtcDSYo8IED9l49pyPKykS9+5xRPgBHnEnCeI+yTCnRnA7NebW7Zt0yNMPzwnnz5+V7hDnz50Xrly5QOJ8g+T4osCDb7jYN2tZtjDbby7cvD0wlaOjxMARIzFnPm0XS1OE5bSo5MlyR48cFnga5KVLV3D1Kg+b4UEdlzTpGUpbxIsXL0gKxd7dewS/wAVoYGCMOvUbCcNGD0VKehzyV+UIiYsT0dHBEUNHjhEGDR6OYaNGot+QwYLHLC+kLV2KTRs3Ctu2bUT28uUYOHi0YGhqATvHbvCifTcTEjJfRjUHBQUoBAdiPh3O858rsAzP5yixlgDMD5wHNaXCzY0jxUoHCsbD3Vkix3Von8twikT7tm1oH1pJcHCwh56evrYLhUMXTquoSpJcRbC2tJBIqb6ensCCzKmjzbnDEcEuxL/g2nZoLZTXBN/atG4p9O3dS4rntCkSjJoawQV0dgqqENt26owuHCFu0VJoZt1MxFcNQCoDOTgarLRh48K5kpKsdLOqrb0+R4/5+atF8DzcrLQMl44U//F7GW1bV07bLHn5b7/wQLSfSkRwf5CBGeXKlhH+KPMrXY+llW/DMstjmXnIxr8EVWLV++P7ZgkvKbgi5ny+htLiy6e5mI4pfVnJ6/yny/4/812IvwvxdyH+LsTfhfi7EH8X4u9C/F2Ivwvx/2khnjp6AMltOYE3Bg7Dh/h4CQZcaKavjx5dOgm9SJL1SAgbGzQWvCZPR9L8YCQHhQgLvLwx38NDeg0zC2fPRmCJIrp5Ts6YPXUappMMMyN69UBl2ui07dZIiPkP0sLKVDAxaYJp48fRjjdDiAvxR2psFDynTRHm0X1H04cmIz5eyKMddsaiWHRsaSOU+7086unXh4F+A6GWTi0Z4KG2adPX1RXhbVCHZ4QT0s6ExyMquTrqqGi1zzCnWbAo1yf5ZdT8H21fwMZGUkynpmwYGhjC0sKaJJpTLXRhYFBXNkLOTVJQ8oUrVCgvKO1i+FCBL/+dNmDjOrrCWPvW8BvSHRHjBglp7lNQFOCO3YvmC8czo3EmNw6XChOFW5tJjIm721YILw8rbdg+3z4tfH12G18/vJRetszwnkNogVGdZLii0LVbD3TsZId27ToJdrYOiImIw8GjpwT+OZF3tCmpacKCBfMRmxCL+cELBG4GHxQ0H+GREUJkZDSySZyWr1gmFKxaidyVK+hLNEuIiY+Gbft2sLGwEKxMTUmaV2lE+K3k+L16/RI3rl8RTBobI5QeMyMrRViSEo/MZalYlp0h5NP9F64ppMdZIazfsAYbt27Ajp3bhH379pDgHpD+nwz39eSUAjXn9MH9a7JDfvbiibB9xzY4u/vDplkHoSotVnQrlEUdDXUrlYVBlfIwrFpBMNfVESm20qshWBNNidYkx4yDUQP0Mm2AoVZGwpTWliLCLh2bCpPamGGMjTHc7KwE/75tsDbWB83MTYWyv/0G8xo1cenQPuHPr5+VHOKvCn9+/cTa8a2AkJjtyI0V+nVph1bmDeHjMknYv30rRvWxh9P40QK3DVsUFkyfuRghLT4W6QlxJLKJGmiBQ6TzwBVG8m3j6XrRAn8W+fPK7chUkiNZehcIsbSDjA70R2SgnxAxzxdhvvSd4eUuRM2bTRK8EgdoR8uszlyMbYUrcHH3VoFbqf13/yR3+vNb4diWPOxcu1KbMsEc2s45xJyOsQ3JC4PgPmkSZjvNFIK8+HvQD1GBC4WcxDQc2XUAL588E1hGRQR5oaFJs5H3uOTxr5wHywMvaCGyZiccG7fAkfXrhXcvSLLuPcLuDTuF1Ihk5CfQ4jQkVnhy5xE+vHmPpw+eCWcPnEZRUjZcug0X5gychuePnoroCR+4t/AnnN64S3hDEsfnKakS3G5NyRlWivGK84e/KaYrJcT0/zenS0pw8XUU+LbKe67ILN8fC7F6+5IyXPJ62jZvn5W/pzpq+yunbLDUai6XcdNv3+PZ05cKz16T8PLz5efCYs0UPyc+T5VgpZhQkz6hWSAohXQswkqfc7UvMY9cZiRX+KnSW1h4+QKPHj8l8X0kPH3KAzfo+L37AqdHKD2GbwuXSX6PHT0uecLMtWuXcfrMKZw7f0a4cvUCfe8cltZoDH9fhdPC0NnNVXCixdkMV1dMdp4pJKckYtXqfCmWY06dPiVt03ikOXPt2jXwsA41RYJl+CoL+IULAvcY3rNnF/zDQoXGZpbQ0amJEROGC7FJIchZkQY3D3ehkZk1howdhSFjRgjT3WZgitMMJCTGChvWrcYO+txs3bJJCAlZCGubDrBs1koYN2EUnRcgQREmMjJM2rVFx0QIXGQdHUXHo8OFqKgwhEcslLQKgb4fgkiMZ5N4M26uTnCh94EPGU8PF7i7uaCnY2+BX0vjRkYwNzEVOLhjQfuQerSvZvT168DIuLFmP1sBZqZGqEyCLMOpiI7tWHq5D79S9N6qZVPJJVbbvJqaGMr1dHR0BMeuXSVNohtLMcEFdV05b1iTQ2zX2Y4Ou0qqhBY6rwXJMGNt0VRT0K8M2mhsoPqEmjLBXsJFdcrQDj5eTwaTcTOA2nIbDlypATU1h1hFlVJVIEV66XWxFDNlyvz2zeUshP/85w/kYf8W+Difp96fIr8/fjNog3OCy5AoMz/9qLRWK/l4ZX77pXhUs+Y2Kizd3I7tPwmuIt9/I63/k/AbrEZkzY2NYdeuFSpXqCDUqlED3e06wIU2bIYL3cwaGWP2zOnCkogwpIaFI2VBmBA9j1Z9nl6ImOsnBHl6Cr4zZirMnAmnMWMwc9QoYXgvR6ne/PHHnxV+/hk/0yqlfp06grGxGWa7u+LMwR3CqX07EM2J+N7ego8zrRQnTcCS8HBhHa1Ozxw+hLXZ6QLnRP9Kr0udXW5Yz5DE2EDbp1jye0l465DsMvXr8pQYWpnVNxDq6deVBYEBnc/o1aqN2jV4Wp6+wPPHeSXH89EZm6bN0MTIHEaNTQVTY3O0bNlWma5HWDe1kIgwJ/czFSuWJyrQqrWSoCb383kMd5ngDb1yhXLC8E42cO1jh5DR/YQlThOwco4zNi70EvYvCcLRjAUkxVHCpaIkXF2Xgns7coVXxzbi3ent+HztiPD1/iV8ffUIXz++Eq7Rl6ZxQ/qSqKQjODg4okOHzjKhjuli74io8AQc4qlcxBsSVC5GyVq+UoiMjUNgUBBiFsUp0BdeWmYGAkh6GI4eLElNlu4SzOo1BciS4jrO9V2GpCXx6NimJdq3UuAiidWrV+P1u7fCWz588xxXLl8QjA1NkEASlpqeJGSvSEdWTjqW52YLBYUcHc6XvGFmPe10du7bib0H9gj7DuzHQdpeTp46IRw/cYx2mu9FYphHD6/KjvXt2xfC7IAo2HQeA1Oz5kJl+lLRLV8WehUV6hENKpdDY51KgnH1yjCtURlNdKsK5rWrETpoVb+2YNuoHoa2MIGHQwth4cCOCB/aGSEDOwh+vVoiYlgnRI+yFWJH2mLTklDUqFRJKFumDBpWqYatmamCiMQXniSmmVT3VRGUkgLCfYq3Lo8ROrcwR7d2NrAnCWd2blxHn9HJGNjVVoj290fo3DmIpJ0SE0OLzzjaSSUsDNGwAHF8GLpQiNFEdll0RXaDAhDuPxcRAX5CFN0+ZM5sBPvMEubTTi7AywO+3FOUmOvmhLkuTtoFb6DHTKzJzsSu9RuE1KhwxAcHY29OsvDnnyz8xVFFlBIuPi2v+e1zYevyxcimHXlabLiQtDAQm1fl49CO7UI0CbnLhMnwdfIWlkYl0+NuwZ3L14WP794pUqgi9//XqKYKSyAPinh49b4wvm1fjG7RGU+u3xKeP3uOLet3ITU8RTi0ehvWxCzBs9sPhXcv3+D1i1d4/fy18Oz+Y1w9eRb71mwW5gyZiQinYO3kuc8fP+LehSu4d/6SwDL64V0JIWYJ/sDi+0WDUoz3TQ5xKcllqWQxVVCjxcU5xqWFmF+3en1+bHXRIO+b5u+jjelr3ie1SPDPLxrh1kSUuShQcog1sq4OFFEjwPL85DkWFwCWfH58XM2rZvj1q3nDKrzIVvsPy/ANTXRYiRC/xPOX3E3ilcA9hh894qmJjwSW4tt37uLa9esCd5BgKT5//qJw/PgJnCIBVovmTp0+iTPnTmoX4Fu3bUBaVioiaeHIeM7xwRSXGfCc6yPMmqcUqm2gzyWza+9OHD5yUIZpMDw5kqWXexursBBfvcpR4itSwHf2zDkcOHBQ2EHbeHhYFJq3bCVUqKiDgSP6IiBslrAkLQq9+vVGnQZGwnR3J8z2p8sWBAnzFwSKtO/ezb+s7cCunVuxJDkJdo7dBZMm1ujZtze8vN2FcFr0xvGwDtoPKMQglhbFCfRambg4ZaIdX4eJiYlEFIkzSzGzkB+T9ht+kks8B160SHZlKXZR4Dxib093EltzoVOH9qhQvjIaNTAU6tdrIPvvJmZNBJbdTp3aoSJ9dzLSSUluw8OpykthubWVJbkQ/0r9K8lyFRHfslzoTjQxI7kmD1AHV7WyaQmHLhwN5qiwAwmyEi1W5ZfziDlSrJ5mQeZIsVpUZ8VFdewamr7CXMdUMoeYBZiFWY0Y86/TPCiEp+My7G5KUR3XHpWRorXSQlwSzuflSbmq8P/yy89yvdKR5J9+/lHhJ0VW1S4VHC1m8f3ll58EiSCXENkf/03S/O+S3S3+IbfhXGFB85y08vmDktesPn5pOeXb/qfOE/9jcJeJajo1hGkjhmJAr260eigrGDeqj2bWTWT8IcOJ5OMHDCBZaSMM69VXRjEvmh8k8CS6sFk+CNXAKRTzXFww19lZ8Jo8GS4kxOMHDhD6OnTC73/8ro0Q//unn4SyZcsL9es1RMfWrWFjaSX06GQPP+9ZWLdyhTDHyQV+7p5wnThFSKYP+9VzF1HE7ZGItVlZaEgbGUu28PMvqFm9JkwMjQQuqOM0iNq6uoK+rh6tJGnFRh8mxsiQ26cZo3GDxkIdvToyDKRRfW6e3VAk2JxWoNb03Jjm1s3RvGlLmJlYCFaWzWFl1Zzuy0Bo064tLQDKQl9PV9DRqYKqVSuTDCtUJknmIoBK9GFlypbjtAmucOXCu9/g2NwcU3p2gv+IXkLsxBHIdJuIQj9nYWesHw4smU8yzJHiaFwsXIQrqxfjzvYc4fnhIrw9vRUfLu4TPl0/iS9PbuErSSbDY3+Xp2agVvW6AhdCtGvXES1t2gpdHXoiIS4FJ06dF169fYtPnz8hKXWpkL4sDcGhCyRKzMQnJSAiKpLOzxTiSF6L1qxCfkGusHb9aixfloECklYmISkendq1Q1NzC8GscWNs2LAOPK5ZRja/5aK6l7h49rTQxNQCGXT7zOXpQvqyVOQWrEDh6nwNBVi7aS2K1hYK23Zsxc49u7B3/27hKO2Ujp44gdNc6U2cPX9G85OxwuPHN0Qgc4t2C2ZtJ8HSbhqq1TYWqpf9A3okxLXK/SHUpUVLQxJiw6oVBdOaVWBBEmxGh4xFLR1Y69dA+4Z1hPEdWyBpSl+s9B4u5HsNQZ7HQCx36StkzOyJbNe+WDy5mxA3xh5FCcH449ffhLL0ha5Trgr8aVHISJcJjhJ/4U4THCH+NmInKRNfP2JLTozQuE4N9LLtCAuSc4aLyhaFBqMDLdyYycNG0udqEgI9PYQgby+EzJ6FsHlzhfCAeQilw1A/haDZXoS3iK5Ax/083ER6GX+6j7luLpjj4izMdpoBr+nTtLhPmQQ3wmn8WMF5/BhEBgZgcVSU4OPhAg/Xmdi8NFT4+ienhLBEKXzVCJf6T+SK+PjijhA+2wleM6bBecJ4wWniWKTFxaMgLUcI9JxHC+tEXDp5XuD3s7TklqT0P3k8jURKdJIjkK/fYH18tjDYrAPWpS5DkF+UkJ+SgX3b9mDrskJhb8ZKPLp6R0YwM6+fvcDzx8/w9P4j4dnDJ3hw4x4uHDkrbC/YhLkj3ZAXlym8fvoM53fu0YrjB5I9pmQKgVKgpnSTUFMhtJSQ12/4wpL6p3Kbb6LJxSLKqGkPqpC+f/tBK8nFMvzX91G9P5ZoOS3P8RPePntGi5C3WmGWjhqf//oc1fdbEeLSFKeUKKkRPH2Op9Hx4A0uqOMRzAo8rEOGbrxW4A4TnDLBE+cYnjT3gI9r2qLdun1bukcokdlruHr9mgy8OH6CF9cnSEgvSCSYp88xu3Zvx+5dO7EyP1sIIwEMDAvCNC9vwXX2bIRFh2FRaqKQsSILBw/uIXk+Ipw+fQIXL13CpatXBZbhmzduaCPSN2+QEJMIX756WeDvtAMH9pF4bxb8abFq06Y9ylWoJNj3tIeb3wx4+7kJJk3M0bS5DSbPnCQEhQYiikQ1LTNN2LR5AzbR93FkTKwwkL4fTGn/1s6uozBl+mQEBM5BRESIwLIbE6tMr2MSE+NJfGNJeqOE+HjlvAS6jImLZWGOQmgYF9iFICiIu1DMQwCnUxA+sz3hRp9/N/oOYbzcXeFBh23adBTq6NdHY8Pi0czNmilpDy2aNxU4+FWuXEW0bd1SYAHmX2ItmpgKHHyqV5fHPyttSLmzhJmJkUynYziYZduxAyrQfTDc4k2RYSVFgo9zRLgLp0sISnGdKsS2nWxFiFuQDDPmZhYwqMPBNkWI1fav6qAOVYhVQZYUzlrFqZ565CyVKlX8S4S4tOAOGjRImMPF7b6+tLDwEozJX/r27fuX9ApVDjkN4hdNpLg4WvxP1K6tK9Sg96Tk9VnIfyVRlvHL//7r6OVffv5JIsqlz1f5uxSK/3W+C/F3If4uxN+F+LsQfxfi70L8XYi/C/F3IVbl8P+kEHMhl6NdW8GkUUOUJwmrV1dPiAqZBUszY9SqWVswIol0nTAWJo2NhN70x04KXoDFIQpJISEIdHNHMH24mRBvb0mZ8CQRVpkxahQmDhwk9LZrL+3GlHZrGin+8WftTxJc0Ne5Q2cYNTIRKlXSIUk2Qnva+Jnta4poBx6F2TM9hISwGFw/dwGFmRnC/o0bkRkXDf3atYVffy0jj6EKt6kpyb5BI+jV1hf455A6+vVQV0+hMQmxgUFjGDYyFhpwGgVdR02JaEK3tzC3QtOmNkKnjl1g06It2rbpJLRu1UGk2NjIWLDtYi+jHxs0qCfUrFkdtWrVoA2rmqCjw+1c1LQJJXWCc5bK0AeRMdSvhWGdW2L2YEchaHRfJE4fgVVznISNwV7YE+eLw6nBwtncWBJiHuecJjzal4dXxzfj7dldwqcrR/C5RBu2Lx9e0Y7pPVymzBDs7LqjbdvOaNmqvdCze1/ERifj+PEzwmvZmbxGTHySEBgwH0mLFyNkYbCwaIlyPD4hQciiL/i0pYuRuzJbYGnNXbUCq0iSmcVpyehIi4Y2LVooNG+Onbu24Q3tFBVIiN+8wklOcyA4XzuW/r5LM5OFFSTDKwpykF+0UtiwZTPWcCEdiTCzfe9u7N6/D4dp58IcO3EEJ06fxCnaiTFnz5+VRcEXEknm6dOb2LLnPKw6ewkmbSbC2t4ZRlY9hDqV/4BNw+oku5UFgyqcLlEBxtUqCiY6FWFFEtyqnq7gaNIQI1tZIGhYV2G5z2isCZqM1QEThLXzxmCFaz+scNHg3g95ngORMq2HEDKgA5JnjobTFG+hZnVdVPyjIga2cRQ4J5WFmHOHGT7+rbCx3HzExqxQoTIJfdvmVjBpoCd4zBiF1NhIWNHzZPgnwX49e2PC8JHCpFGjMYkWtJNHjxWmjyNxnTiBYLkcD9dJk+A+dSq8ps3QMJ1EdyZmObsIvq7u8HFxk/NUPAlnkm5mxrjxmDl+IqbSYzATRo7EtPET4DzNWRhFC/Zhw4YiNy5A+PPrF/nJvKQUl5YtPu/TqzuC27jBGD14JIYNGC6MGT6ens9CFGSsFm5fui4Lom8lu/g+/7t/iswVpx98fP8O9y9cRqZvuJDhF4qnDx4iIihCuE2Xvbj3AIc27hRObtmNN0+e4S23YuNRw6/e4N1LkrRnrwROm3j1/BWePXoq3Lt6G2f2n0CCR5iQ5R+F53T/799xz13mvaRIFKcNlJBZRiPFalGbKpvq61Vks2RO7he5jZrTKznIn4svV2+vXv7hLbf+U3KH1fevpPC+fvpchF19Pvye8eXvSESZJzdu0/vwEu/evBX4NuqI57/KsPL8+PCzho90f+8/KvnBCtxejYd4KCkSkj/89l1xn+EXnDdMi5AXCo/pb3Hj5h0STx6mcUP6Ct+9e4fO4/SI67hOAsrt1dRRzFy0dpJE+NQpBU6L2LZjGzZv3SBs2rJB2lBGL4oX4pPiMZck1T9sgbA0ayly8lZgy7YtAt/HxQvncOb8eYEHd9wgAb56VSma48e8Q49/8+ZNgQWZexvzSGZmP8kw91qfFzRfaNepEwlgJTRtYSlMdB6F3oO6Q4f27UybTu0wx88VUbGhQmJSHDZtWoudOzcJS1KS0K13P9RrbCaYWjVFr769McNlmsCt0hYsCEQYySwTERGKyMhwRESGCTExUQgPD0VEVISwaFEcknkRvihWiI6KpNuE0X0ECQslhzgQ/n6+wpzZ3JN4puQRM17uJPK04B5MLsHUqqkP+86dpL0aY25uJm3S/ihbTrC0aEL73JpajBsbSiE7n89UqVKF9rP0ndiquVCzRk2UIQ9p0cxa4B79FStVocepJdh1tpU0CQf7rkIXO5ZhB9hzmoRGiNXxzWoKBR/aaIrqrC2t0agBB9eUQRxqTZIyfEORYW61pgoxp0nUrEHOQM+d4YYI7Ahq29a/S5ngw5ycHGHIkCHo0KED7dPbCi1btkRmZqZWBvn2JeWQb1++3O/aAjj1fCcnJ2ESfd//RSj/oaZO8DAO5TaqmDM//fijPA7DKRElb8fDO/4udULlf0WWG9bRx7A+3QXuwatP5t/f0UEwrF9XNpyWTZsKYwcNoA2oHCrQh4oZ1VeJECcFBQvcWSLIwwvznN2EOdNmwn38JLiOHSe4T6CdG+3oJg0ZLDi0s5FcnZ9+/llQIsU/QldXT6hNEmtl0QLNrVoKutXpg1u1Job3Gy0c2r4dZw4ewrmjxwR/z9k4ceiwVMIz+zZuwIbcbLS0shAqlCtP8NAPpdH2zz/9Aj39ujAyMhEaGhjCoEEj1NXnYkLaSA2MSYoV+WVYivm0ibG5YGHeFM2atkSr1h2Edm07oX27zuju2Edw6NKDpLg9LC0thX4D+0pesKmZkaBbuwb06+iKGDPVqulIpFgVYqWwTuk0wVSqWB6D2zfHxG5thXkjuiN0fD8kTRkq5M2eil0xc0iKVXxwMmsBLhfEC7c3pePJvtV4c3Kb8OHCfny+dhJfHl5XeP2EdmDvcf/WLaF/zwFo354+wDZthe7deiMpYSlOn7kgvKKdyfMXz5GwJFUIi4hE8MJQLElLERYlJ2ExV0SnLBa45/DK/FwUrS4QCteuotPLUbSuSFiSmkQLHVo9W1sLzS2sJe+Nc4cZkWIS4v08XY7gHKz8onxk5GYKKwvzsJykeO2mdULhutXYtms7Nm7bKOzm3OFDB3DoyCHhBO1wTp87g/O0I2EuXlb6DqsR4v1HT8Fx7BJ0GBQlWNm6oWUPP7ToGSA0MWwCO7M6GNraUBjZ1gjDWxthfAdTYbqdFWZ2bQbfQR2EpBl9kTN7NPJ8xwhFAZOwyn8cCnxHC/meg5Hr0hfLnPoI+Z6DsNytP5ZMcRR8e7WES1cb6NbQF1KSl6GJiTU6GdkIT+/cIkFkaVBhGflWEjm3eF1akPDrzz/Sl25ttLC0EHq2b4W0mDg0aVxfqKlTmb6Qa8GgLlc215bjDfR1tafr6FZHnVrV0FCvlmCgXwMGejXRoLZCPdq++fqN6vOvKvq0gKkPE8MGMDdqLDQxNIQp07iR0MSYzjM2gjkdMpZmJrAyM6XPvoUG/hXGCvb0Zc5Eec9ETkwA8pLChLVpsVibswjbc9OE3QWZ2F2Ug7RIP6GdFe3omrZF1459hTASyKtnLmv/3sXFcMVyzRHmku/f3/1TL2MZ45zft6/fKpBU3Th8EltT84TbJ87hwfU7tO0eEY4cOI6H127izOadwuGNeyQX+ANHdznKy1LJYvue5e09nfdeKZLTXM6n39LjPSRpY56QXL+nz6QqkHIfnDesFWINarRVK8QK/0mIVbQSStdT+wOXFmY+1D7/95zLXnr7+4o3JMLM87sP8fblK20km6WY3/eXj58Kj67dwhsSVDVHWr2vko+nSrDKJxJ0FmGBI8OfirtK8HAObXSY4Olz0l9YOki8wJOnzHPiqfDg4QPcu3efJPiucPPmbZkkeOPGLYEjxDdv3ZBhF8y589z/9wwOHdon8JCMzSTBag1DTi5tixlpyMzJFCK5xiIrFVu3bhSK1vGvWLQtnDkl8PCMK5evagr1SLw5T5gjwnduC3fo8a9fvwZthPoK9zo+jT17dgvcNz04OAAOPRyEypV1UIv2qV0dOwtWzazQsHFj9BraVwiN9EdiMslpYoSQX5CNgPn+6NKtp1C/sbEM7ug3eLAw030GAgL9SH6DhZiYcIGL4ZjgYC6OW4jQUIWIiHCBi+mYRFoUJCbGISo6TFgYQiJN11u4cIGGhXQfJPNzfQRvLzc4O8/Q5hC7OTtJlNhp+nShoUFjVK9eHfYkfQzLbr0GdVGfxZLgX4cNDRtK716ma1c7VK2qgz9Igpn2LW1kgJbqB2ZmxtKbuK7UEtVFLRJQ/gXXxMhI6OHoiG4O3wqxPR3akfgyaqS4OIfYVmjdqo1gbm5JosvFckpRPzcxYAlWhZjRl64SSgRZt0YNVCdHqKajUKtmDVSqxEWAygwDLnhjoSwdKc4iF2I4Ilxy7oEVfZ9mZGTI7ZjAwEAsW7YM8fHxQrVq1dCrVy/t7TMzMmFra4vp9F4zhYWFSEtLk78Tw1Fqlko1QiwdK0pEqplfyO/K/ParwH2K/05y1euWPv9/hbbNLfErvZkMD+lo37IZovznCpxobkCSOLJ/f2FQrx4SWTU3bSIEu3sgzt+fmCfwII4QD2+SYk/Bz8kVXpOmw3X8eMFl7Fi4jhuHSfRhYuzpsXhEszqhjqPE3O2Cm2Uzhg0bo3/3/ujh0FOwbUcrrM7dER6wQDixZx9O7NuPSydOCRdPnsLNS5dkgACTGhMDX6fpSKbVNzO0bx8403NoZmIq8KjiH3/+BeUrVBRMTcxJjE1JilmMDUmATeg5GMOIpZgwMyWxtWgG66Y2QtNmLUiE28O+i6OCQ3d069YLPXv1F7p17y1FaTb0QWP69OspK7omFiaCPslCPRKFOnX0BI4WcxoFr1QZVYrVFmy//V4GbU0bYqJDG2H2oK6ImjQQcZMHCVluY7ExxBm7omcLh5cE4hiJz9nsCOHKqgTcIil+uq9IeHtyCz6c24fPt84IX5/fw9cPr2hn90HYumYd2rTppBX+Pj1JzpKzcPYMF2tckpQJHleakJgkpKSlIiImCglJi4Sl2ZmI40jIogQhMTkeq9ev045SLiIhzl21Ems2rRGSU5PRvnUb2PBQDqKFVTMcOXJMJkYxMqDj/Vvs2rJZaGJigajYcGTSoofJXVuINZu3YNWG9cKW3fuxfusW7Ni7U9i1fw8OHj2MY6dOCqdo53X20jlcpp0Mc+XaVdnB8sARZoRrOuxHLUHL3iFCmwGRsB+dhtZ9woSm9r7oYGOPMbYWwpwhrZE4wxF5c4YJhQGjsDpgNNYEjhXWL5iE9aHTsC5kslAYMAF5c0djmctAYaUrCbBzX2RN6yXkew4kIe6HqFGdhRm25phhxw3kywtGpp2Qk70BPez6CWdoMSjRbc3f78tnHkP9RcRYkWOu5H+PgiQ/4Y8yv0GXpLeDTUuhhVkjhAf6w65NC4FbBTZqwJOS6glNjBvBwpRF1UiwMKHjRNumFhrM0NTUEOaNGgimJMCmjQxg3rih0MSYLjPhKnAFCxMSXhMzug8Toam5OS1crbTPx7ZNWzh06oheXR2EMQP7YNqo4fCeNlGY7zETYT7cjcJDiAvwJjyQ4O8tRPu4InjmFHjRQpyZPd0JK1OW4e712wJHJHkBpBU2FEcx/47/dJk2YklC9opETm0D9vgGicz5K7h64qJwn4Tq3TOSwZevhQtnr2D3hl24deKscGbfMTy487CEvH5R7ktNgdBIsVaI36mirJxWZbg4VUKJ4paU4dJpDiVTJtTzSr4udXxzSfEtHZ1VT8t90/3w82D4sfl8KZbj67Gw0uvhaXzMq8fPFNlVr/+Bu6N8JRG+LXDh4bsXL7URZbmvEu+3+pzU58/v1wcunNMIsJIeoUyhUyfRMeokupfcTeIFd4/QDNp4/hwPHj3Gnbv3BE6PePyE26ndF27duo1r169p26pxlPbcOR67fEo4ceKYJiq7RdhOi/btO7agaE2BsCJ/BXLzcxGfnChk5mRIK8c9e7YL3HHi0iWeYKfAKRB3793BvbsK/Pglu1hcv34dV+g5XLx0UTh96hR2796JdevXCPMXLIBjnz4kiTUFLhJrYmWK+g0MhOZtW8Bt7gz4BvsIySnxiI2PpO/uGGHwiJGwadMR9t0chDGTxmK2zyxtkTTL9sKFLMNKRJiL4ILmB2jbpi0MDUF0dASSkhKE1NTF0hYzI4OHMi2V6HBkVJiMfxZCguj+QuQ+GS6sCwkORIC/nzDL20MixDNnTBFcnKbBw9UZE8aNETp37CxRXD29OgIP6aijr0/iZyGUL1+RFtTcXlZPKFeuPMzoO0mXRJepXKkSDOj7Sm2H2qhRQ7o/LnZXMDM1Jkk2krQLxpq+q5QuEiy9XaQtaRc+rYkQ29lyUR0JcidbgdMl7Drbo3XrtoKFhRUM6jeU4n2G276qwzcEeu519DkQoSfUrFFNKcCvrIya1qlahZ4fC7Ey6ZYd6u+EOC8vT1i3bp0c+vr6Cs2aNRMhZslnxpOjGRoa0mIlThg5ciRSUlIwgb47GStLS/QnD1SF2NvbWx4zMjJS6N69+19EVh3JzPBz4ZQJ9bRc9jcR4b9L3/hf47sQfxfi70L8XYi/C/F3If4uxN+F+LsQfxfi/9NCzONx1ZA7h+CbWzfRDqKoWqU6Rg3ujd4OtgK34mpibIL5vt5CjL8vQr29sJDeGCbUk853cZM8YsbfxR0eE6bAZ+p0Yebo0ZhGb/IYElPGtoU1fvzpF60QcxsQPd3qtKGZC61btobnTBdMnzhZGDVgOKaOn4phA8cJ7tO9sLlgHQqz8oSLp87i+oVL2FJQIGzIz8dcNzfaeU4VIknaizLTsTozQxjUs4ds+D/++JPw8y+/Qp8+SE2tWwimJFyMpWVzoVmzVmjevJVWEFuzDHftia7d+wrdHHuJBA8aOlLo1XsAbO26oGUrG8G+S2fJE27XoY3QkKTBwKA+6tbTF1iQa+vxl1c1QS2wU/sk/lH2d9SrWQ0jO7YQvPo7IGx8X0RO6CekOY9Cns8kFPpPFnZEeWF3nA9JMYtxIM5kLyQpXoR7W5YJj3fm483xrfh0+ajw5d5lkuIH+PruhfCJBNTHzQstbbiwriP69R6E1ORsnLtwRXj9/h2OHzmK6LgEIZhTZ5Ys1uaIJacuwZKlKQiPihQyspchPSNTW+S2btNa5K3OlUMmLTMFbWzo/bWxEdq1bIejR09Is3xGaaL/Dps2bBHsbftjw7Z92L7vuHDu2iNcv/scN+69FO48eiuHF64+0nAXx0+fxbHTp4Qz3L/z+hVcu3NTuEHwcIsnz14JQ5yz0XNSFmx6hQq2Y9LQdkgibEdnCK2GpMCk4zw0bzVGmNmnIxJIiAt8hwlFJMOr5o1E4bzRCv5jUeQ/DmvmTxTySYZXzR2LHNeBwnKX/pI7vMpzsFDgSYsc514IGtRemNypCSZ3tkDFchWEqjrGaNVuLO18jwuXaYfIgvD45lkh2nsMEoPckBTiIcT7OyPCdwbG9usvdOvkgG70Rd6/Z1+hBy3qhvcfgsG9+gl9aHvu14O2Z1oIMcMHDMGYwcMxevAwYRxt4xOHj8bUkWOEGWMnwmUiF8c5Cd4zXOHr6gV/r9nCfJ+5CJ0bgAV+wUK4/0LEhUQjKSJBSI1LQfqiNOQuzRHWLucR0Vuwa9NO4fCugzh24DhOHz4pnDt+FhdO0oLmzHnh6tkLuHLmIi6fPi9cOHEapw+RqBw4Ibx++UaRKU1qxNevJWRWI1vfwJeXED4tnDdLKHmyLHIfhPecJvHyleTNMlwUd+faTezZslc4cvCY5M3eOH5BeHT3PgrSC/Do3n3h/rkruHfltvTbZaRXrkZ0VVTZZVh+WSjVnFs5Tdcpbk+myfP9VJzXrA7IKCmVpYW49OtVxVeuU0qQS15fLv9ULMQssd+8n3QffP7L+48FTpuQFBF+XZrXxmkTN06eFZ6Q/Kmt7tS/T+nnzpKv7cNMSDu1dyoflHZqmu8Pbqn2jHOwnylwegT3GlZTJh6RDD9kHj4RuM0aj2bmNAXm2tVr0t9XHY18nNunHTuGkyePC/v27cWWrZuw78BeYceurVhVRCKct1woXKOkiK0syBW2bt+MPXt3k0yfFG7euiWpGZwXzMjQj0cPJG+ZYQnmNA31+bA0c5Edt4tkdogMFyF4QbDQt/8A2q8YSN0KU7OWLoxoITpk9CBhdqAHFqfGI3nJIiFxcRwWLY7HiIkThH7DR8DV2x3z5vsKwSEkpwH+8PXzFQIC5mF+UPEgDR68ER6+UIrpmJTUZGRmpmHFimxh+fJlSEtbilgpnouRorm5c+l+SXqZUJLh8IhQkuuFQmjYAgTSY3h7ewoe7uQC0yZj5nQF5xnT4EaCPHXieKGRoQnq0etlKWbatW1DEqmLxoaNBAszU0mBUE/r0vvBnmPYiEc+G0ivYQsLc3qvKgmcVmHUsCFMGhkKv//+B8zpPngACGNI50kOMUkwI/nDPIyjC4uxA+zkeFeRYEYRZwd0aNdBsDC3FCHWr60n1GMZJvHV162loKdLz7GGtgi/mk4VSZEopiI9z3LSK5n5+edv26ipcBoEY2PTHBUrFOccqykT6tyDpUuX0t9xPtLT0wWW4Lp162Lq1KkCp034+Phg5syZwpgxY0Qi+TxmwIAB8nglBZNzhX/+6UcFcqxf6Dn+U3KF/6U5/6e/5CiX5H9din/99Xfo0uqR8Z4yFp1aK9WXjKWpiZyWxG+ijq6eRGiMaOXFeE2ehAWenpjv6qrBDUGu7phN8sv4TJsJ70kz4DVxqsD5w1NHDMeoPr2EttamkjNcMkLM/Yg5WVyhNiqUrwJHO0fBf5YPxtIO2M91tjBlogtGDJ2ImJBY4fyx4yTFp7Fz3QbhxP59mOvuBl+nmQJXubtPmYzFoQuF9dmZ6Exi+httTAzn73LhXZUqnMuroxFjG9pwWgjNW7SW4rLWtGpm2nWwQyd7R3Tt0Udw7NEX3Xv1x8ChI4ShI0aje4+eaNGyudDI0EAeo6NtR8GkiTFMCYNG9YSGRAODOqjD+ZkE5/BUrVpV23WifPmy9CH9A12tjIWZPTrDf5gjoiYNEDiPeClJcb7vRGFLmDu2kxTvS/QRTmQE4vyKCFwvTBLubMzAk72r8ebUDuHT1SP48uAavnCBHRfafXqL21evonNbB6FPz0FITEjHhSs3BC5Sefr0GWISkoTkxSmIiU9ASnqqEBsXhazl2UjLyhRWFq1C/ppCbNy6UVi3eR1Wc37dlvVC4pJktG9rh252A4RJ471x6cotbc7fR4kAfcFLEg/m4ZNXePTiIx48ea/w9APu0eG9x++EOw/pOk/p8MEb4dZdPnyLyzcfC+eu38Suo5ewctNZIWv1aRRuvwLfqJ1C78m5cBiTDvvxWYLDhOXoNnklOo9ZIZh2CYFxRz9ijtC2iwt8RvZEplt/QZHhkcidNURYPmsosj2GYYXXcGG512CsnDMSKzwGCzlOfZHr2g957gOFVV6DkDmjB7x72Qj9mzXC8FZGqFtdR6harTFq6TXH2KlJwuNnLA9f8Ob5E2HGqIGw62CPrp0dhG70GerepQd6O/YU+nTvJdLb17G3MKAPbbt9BmBIn4HC0P6DMbjfQIwYOFQYx+I7ZiKcx08RXCdNg8fU4gK5ea7cjWIOFvoECuHzghC/IAyJoeFCcngUEY0lUQlCamwilsYnY1nyUiE7OQ1ZSenIWZIl5KUtR376ChQuyxfWrijCmpwCFGbmCgVLs7EyNRu5i9OFlUvSkL1oKbISNJBgZ8YtxZXTpwXJD2f5+/hBEGnk7UqGVhAaMWOpZSTX9fEzOnyhQNL0kkTp6Z0HwqPrt/Hw2i08vK7w6MYdEj4u/lI6Nrwgobp/8w52btghHD92Bi9fvcHja3eFlw8f4vq127hw7qrw9PZ9vHpUHGF+95YjvsUSrIqmmiP8liSYKZZlFnMeAlIcYVbktUQ0Vw6/FdqSp0svCpTiQEXQP2ruX80hLr598f3z5VzMx6hFctr7Ipl+S6//5YPHwjuSUYkQ82tgoafLnt19gPN7jgkvHj+F5HZ/I8R/aovmPn1WUGX4/YdPWglWuke8k/f7+YvXwqNHz/GQ/p5cLMc8efJcps/xr1zMo0fcW/gh7t9X4IjspctXcOHiRYGL5k6cPI19Bw8LPPWNB23w9Erm4KH9OHz0AHbv2SHwEA2ucVixMkfIWpmFzfS9d/jIAYGvz32C79y5LbAMc/eKh7RdMI8ePqbnwXnM94Sbt2/h6vXr9Dz4uVyUoRwHD+zHpi0bhXXr1yE8MhRDxgwVGpuaSWRTR4cLtquhiaU5XObMhE+Ql7AoJQZL0hMRFR8ppKYlIzicPrOLooW09MWIiAnHPJJexnOWNzy8Z2EWyQ8zP2i+DNpYnLxIyMrKIOnNRt7K5UIhTwktyMMyOp/hojpPTy9MmTJNcHJylkI8zhNmQhcukKI6JUrMXSYC4OvrI/2HpQex83RMHD8aUyaPF1xnTpPzZk6bJDQguWxt01JEl+GiuNatWtC+k/ehVVGzZi2ZNcDnM6amxij7RwW0adVcqEbvEU9+a0xyzDRqyNHisiStDQSecteYvEeHZJgxb2IhgznsWYRVGea8YY0Qd7Hvqpxnay+wDHexc0DHDp0Evj0H4FQhrqNXG3q1yXt0awocEa5RnXOFuZCuunSkYgFW5heUl+gwOwEH8gSNEKuC+duvv6J6lSrIz1spmJHM//E7NyxQIsrW1tYixBwVZtavX49OnTph06ZNAhfNZaRnSDEe069fP6xatQrOzi7CuHHjRCK5ewXDl//y8y9aES8tm9K/+OcftRHiMvT8OGJcMse49G3++Y8ftJS+7H+E6jo10Nuug1C1YhVaMdVEK6umwhza2KpUrgo9XW4IrQfHju0wtHdv7QpsEr1JYbNmIZSjwwRPqpMxzSTFDEuw69hJmDFytDCNVpycsjCiV0/B0thAxjX/yO04hB+lyI6jpAw3zzZpbIYuHToLS6Ji4OM+G/6z5wqD+w6Ej4cvxo6cKowaMlpan81x8xZOHj6G2JAFMs2O8Zo+BUH0fNu07iwMHeOCUeOd0L3fcCExKhLNaCOpUL6CwILOo6AtLJsJzVu0QQuW4pbthHbt7dCFRMKhh0LX7n0waNhIjBo7URg3eQocujrCqqmFUIE2YI4Qd+zcQbBpawMLOt+0iZFgSO+HkUkjNDSsJ9StVxu6tWvSB4Hbs/G4yYr4o2wZNNarIQxt1wJuPTsjcLCjkDBlCJY4jcQyzzFCwdyJ2Bzuij0J3sKBxb44nuaPCytjhetrknF3yzI8P7BGeHdut7Ri+/zouvD1zRP8+ekN8rJyhN69hiA5MROXaOfP8FQn/gkyPGaRkJCcjPjkxYhdtEjIyV2JJDq9JD1NyF6ZixV5ucjLV+DOD4UkxJt2bBPWbNuHlJVHEZi4U1i84gQu33iGZ68+CO+4Yp52hG/efRJevf2MZy8/4OFzhRv3SHifvMPNR2+F6/fe4Rqf9+idcJ9Fmc6//UDhwNF7mJdwEM37pwvm3RNh2jUBJnZhQrdJOeg7cy0Guq4Tes8oxCD3DWgzJF2wGZCMtsNS8f+wd9dxVabr3sDP3mcf98w4dneBRUsoCgpKiLR0g0ijgCiYGKhjd3d3d2B3C5LS3SVYo3N+731dDw8y7r3f96993j+O8/l8h7UWtVws1vN7bq77ukwnHmJjfQ/AZfIhLAydxI7PduVV4ku/TWSn54pwPNMT+8Ic2Z5J9jgyzQXHGlAIPh3tggtzPNmZmW5Y7W2EEBM1ZqXRD76GqlATP3vSpmUnKAw0gu5wb5aWWcNdF+SuAWd2b4ah3mhoDtFnOlpjxIkdXTdkOlrjoK1jDu2h45iW5hgMURcnfxpDmaaqeN4qq6Ffn95MQfBydkVkWDQbayhe6I3MYG3mxJydo+HkNgNunhJfv/kICliIyaFLWGTkKkRHr8XMmevZ/PnbsWjxPnHgO8yWLDuClWvOioPjATYvehlcbRzgYi0J9QnE6VMPkRz/luVmpKLgbSJyUxMavEF2YjzSX79kSU+fcxlJ45/cRSCj0Pj+XR2jVdXKkjLUiJBLqMShJDMX5dmS0sxsFCSlo6hBYaL4nq9TkBefzHLjU5GfmI7itGxGG8AoqNaIsEVK8gtRlJqF/PhEVirC7tu34kSSwiwFwdo6/P7xPTLSc1i28L6qFvLADCkIS6URTQOxTFoF/rY6SgFYLluQUHD88wpw0xXW78Nv46orfS0KmPR9GsK3XIrx+2eprKHpiq0cqOl786p5w/39fhMcnSTQSGn5hII6SNAJiPz166reIftVCgpTsxl9r3+8f9/autG/iTtJiNcFQq9HUgB+x6iNGo1frhHfh1TTCGZaERYnN6RCnMxTKzV5kxyvuIoAnJKazOJF+H3xKp43yxGaNhcfHy9C8Wv2Kv4FHjy8h2vXr7JLVy7j6vUrOHrihES81tGq8CkRCsmlKxd5VVneNJeamsrjnUvLihmF3hIRyKuqKllZaZkIyoXIzs2RZEtt3RLEyR15+fI5Ll45i8PHDrHpc+fDzslZHKuGsHbtO/AEVMMx+swnyBuzFs/E1j0b2aYd67F282ps3raRzV0wX3yNOYgWIZVEzZ6FmEULsWTlCkYLFgcOHRCh6BS7eOEcrop/05UrFySXL+DixXM4dvww275jKyKjpsLW3pEZmVnAw8MLUeI2Ehs7j7tJUKkEWbFCKpWgEc5k3tzZmBMzQwRnCs+TEB4aBH9/HxHU/BhdnyKO6VPCJCP1DUWAbS2CJ5UnmHDLta6du0F7iAbr0J5WgwfyMZ1oqKmhbx9qJyttYlcaPAiK/RR4pZj069uHSzf7itc90qVzVxGgW4rg3JFZmI/jQRwmJqaMVoSbrhDTZfNxFhyCCa0Q01ujMSaMulz16d2XW78SWg2mtmpyAKYV4S40Fa+jhNqyyuUchMYv81+P6a3Qp1cPEaA7Y0B/BdajR3e0aP4rb4QjtLhGK8M0jpr0EgGcuk7IYVBHR4fbs/Xr149RU4M2rVvBycGRUeClx4k25xElpcHcTUJDQ4P16dOHQ23TLhf0deWw21yEcFoVbvY3Ca0YNw3B8ur2P4TU/0k/AvGPQPwjEP8IxD8C8Y9A/CMQ/wjEPwLxj0D8vzoQ62sPgauVGaM6YtWBg+FmacG6duqMzuIJZWdmyuzNx6JVizbo0bUHC5/gjYVTp4oQHMXmhYVjfngkpgcFsSk+fpgmAnHEBD8WLAI0DeRws7BgKv17429Uv0uhmIjLPXt0FWFTh3Vo1xGLZs7HzdNn2IXDR3Fqz14snTOfxc6YBz8vP0x0n8jmR89Dv96KCA8IZTfOn8cCqmeePp1tWbYUkeJ+9RmgyTTHekFBBAK1MQ7MJ3Q6VixZiqHiZIB0795Fqs+hJ5EwaJASb6LT1TNgeiPHYMRIEW7pzyAClUu4e/tiggjDJEQ8HgaGY/iJQ2hcYrduXTHaaDSjMKw5VAvauhINLRUoqw4SBrJByorop9gb3bp3Zp06U9kEtb2TWGqrIdxiDBa7W7IVE8ZjQ6Azdk52ZafnBuDikkm4u2kmu7d5Dp7siEHysbUs7fRm5N84gIpHZ1n96xv49PYpvhakMNpk9/VjDepqqtnMiDnYsuUA0rPzGf1JMie/QISYzWz95s0iFG9rtG3Xduw/ehDbd+9gpy+ex6mzp3A17iq7dP0ybty5jfPX7jKPqRcwyGAlhlutZfp2W2EefAYPEkpZ1bvPeFf/GSnp5exVciku387AzsMv2KZdD7F22134h21nxpZTYGIZASfvWDZrsQj2V+KRmf+OvYrPxeuEDESuuMfGTzmPkZ5HoGy2khk4bYTfgluYMOcG8517A+6zrmFc0EnmNO0SXKdfxfiIc8x28hk4RZ6HV7Rk3by5OBvrjQu/+bFTMV7YH+GIncHj2WY/S+wOtcN2f2u2L8QW52d5IG6hH6M+xItdRiHURIO5Dh8E/zHqMFbpzVq1aIVefXRgYTWNXXtQqzR5YwAAgABJREFUwG2mPv3+B3t0+TS0lJQxeIAKGzhQEG8HDFBig4SBtGl0oCpTHaQGNWUNaKppMZWBSugsDiJyGyI6STQfYypORF3ZaD0jmIwSJ4WjLZiVmSPGW3nBwyWU+XpPRUjAPISFLmYRU5YjavpazJ23hcXO34YlC7dh+eLtbPXSnVi/Yhc2rtrJJk0IQ6tfm4vXiP9iQwYNws6N+xF35jJ7dO0GXtx/gNSXr1nyK+G1CAvPE9iTe69RmFsMqVb4v0E9eT/Q0AURXAmVS9RWVKOqpJxRGM5PEiE79S3LFwE453Vy46a3vPgUEYJFYEvOYCUZuagqLuOQRyigUYCsLq9gpUWliL//HNVZeYwCZklJJXLFfSIcckVgqxUhmCS/TuOgTiOYyfcDNghdb9pLmEsj6K3ApRb0tgHf1vBW2lwnaSyR4PD8tbHEg742l2TUUV2yVA/NNb4N35vrkZuE6qYhlVH5AgX4hk1+vJHui/R9CN3fmuJSlIrHjXwQ/1Yu9WhQJ0JqhgjEtRWVjFreNQ3wMvn7UQkVbZ6jMgm5VIJek2Tv6j7wxjk5IFOZRFl5OYdOkpdXiLdpWSIIZzLaoJaUnCJC8GvJ69fierIIrpL4hAQekPGiwZ17d3D24gURes+zc+LyEXHSf+j4MXbmvAjD507j6rVL7NmzJ0hNS+FewYR6BxcXF3I/Y+5pLE6gysqoXKKE0fszM7O4VIOkpCbx+OcnT6nc4jGuXL3A7SuXiBBJ7Jwdoa6hhtYiBJNW4vdVYUB/RM4KYUs3LMTGneuwfP1ytnbrWsSKz5s0LZrNmj9PvIZvbAzYV69ewr17t0Tov8sePryPBw/u4M6dm+zWrThcvXwRp04eY1u3bsaM2TM4lJOR4tg3XE8fZubmzM3TXbwGRCBGBF2yaBHVHS/hXsXcr3j1Ci6diI2dy+bNnYVZs6MRNY3GNEcgWIRgby+RIfx82KSQAESGh2FKeCjz9vARAbI7OnWizeldxcm9ugiKraAlgi/pIkLnYCVxfFVSYh070qbh/uJ1cABr364DBvZXbKyppZKJLp27cO0woZIKHXHMbgzMIjybjTWFgYEhM6HSCDNzWFjQ5norvmxu9q0tm6mJtNHOxFgyeLAyl0xQaSTp1kWEYAq/IoSTjg2b5zqIExtCYZQCrRyI6TK1OuvYoQMbJk6CevXsIX7u9LNvzW3nqDTip59+YhSCm16nPCIHVxmVXfxVvCUUEKlX8F/++hdGgzr+8pdv4fFvf/srmjVr0lf4uwDM5RFNAi61dqPv91Ozv7Nm3wVimfz539/+P2KICGrNqNODQB0kvB3sEezjxWgX5rAhQ2BpPJppq6uhW6ducLUZz2IjpyJmchjmTKJ64cnS5dDwxk100wNCRCAORqibj8TTE542NnAdN44N7NebJ9M1BuJm0sY22g1LunbtiZ0iaF06doLdF2fgDy5fxl0RdMkk6hihNQKLZi9g/j6+mDc1BgujJZdOnMTtixdxbOduNkcE1ChxPxVV9dkIuyAoDLWAhqkbGzjKEo6BUdiyYzdzc7Ljfqhy38Jmf/8JXbt1E78UemzocAMM0xsFo7EWzMTMCp7iJGBiQDCbNW8+bMc7NHaRoNXvvuKs03a8DdPQUsegwQOgpqnGhuioQ0ugYMzhWG0wFAf0FaG4F+shThZolVg+Ixwq3udloIPZdiZslZ8d1vg7YHuYO9sT6YZ9UW44Mc+XXV0Rgdvro/F4dyx7c3Q10s9vRV7cQVb99Ao+JN7H71mv2NeSDHytK8d/f/nIXjx6hg0b9iAzp4BxH8/aWmzYvpNt2rENq9auxuHjh9n+I0eEA9hz5CA7eOwIrt6IwwXxcyRXb13HpbgbWLThATtwKhFJ6RW86ksKyupx8V4uLtwrYKl5NcgvrcfD5/ksKaMSb3OqkZVXxbLza5BXUoeElBIWOWM3uvS3QeuOWqxFW1W0bqcCJQ1rFh2zG4dPPkbE3FPMJ+YmPOfehIn/caYxZhai1z9F4MI7LHTpfUyYdwMhS+4xr5g4+C+6DY/Z15m3uO4lgrN/7G22YOsD7NuwDVeWBbPLywJxbKY79oXbs63+VtjmZy3YsBPTXBH3WwDurghlR6bZYaGjCMRjhzCfkcqIthkG95EDmWrvzuJFvAfcA7ewRdtfIiW3RloVFBIePYCH2QjYGmgzCz0tGOuoQm3AIEaDZhT7KYrfw4FMub84WIiQ3LdHL9ZaPMeaNaMJj81Y+zZtoK2iBgPdUcxwxGgYDh8NI31jZmpoCgsjcziY2zHX8W7wdvaBn6cfC54YiqnB0zAnfBZbGL0AK+evwLpFa9iWFZuwd8Mu7Fm/m5kbGPMLNE04Is5W1jh3+AyuHpdcO34Wl4+cxqXDJ9nZvUdxnOqPt+9jR7fuQ1lBoQhjXxgNuZACcAX7KALUu6oarlUlpbn5yE9OF96ygpR05L2hlWApCBenZqA0MwdVRSWsXgRGCsGNK5j014t39Vw7TLJSsnDmyDnUlJazT3X1vNEtI7OQlZVLm8o+ipBOSsR9ys8pkuqAm6y0Nm6So8BLm/caVoh5Ix2HcanmWV71/hP6+k1WlZt2qZA33n3++Dujx4NXgsVbQnXDtFL8lWqRG+qR/+mqcsOKNJ8QiO/5VdxP8t9yiG0IxPT9C8TjWpqRzaQOEx8b+wxXl1aiOKsATftCyyvP8oowdZFoHLTBfYU/N64Q0yZE7i9Mq8310uowrQiXi8eZ0ONbUFCCzKwclpKajmRxfzJE6CRZWZk8nCcx6U0DWhFOwLMXTxnV/N5/cB83b91k58Qx6Mz5c+Ik/yyjMHz09ElcjrvC4sTr24NHd0WQfsVSqRtEWhp3jiAlpcXiPhEpoFMYphVrWjUmOTkirKdTrfAb9vr1CzwSv9OXLp9nx44fwvJVS+DjM4FpD9PioNa8eUvWvUd3TAz2wKLVc9ny9YuxaFUsNm/bINm5FXsPHRDB+hJ7KELvs2eP8PSJ5In4XhSAb9y4xs6dO4dd+/djxfo1LHrGDPF9fTHO0obpjhgJdS0daA4dzozGjoWHCLCTRVglU6MiMVcE4ZUrl7EN4mts27IR27ZuYnSdVo1nz5nB5syZjtmzohEeEcp8J3rB3d0Jvr5eLDBwIm+ymzJlMjMeYwJFxQHo0Z0muvWEqooKFBQUGrtWGYzSF8fPjujZizav98BwnaHcRUJJhGNC9daamuocggltRKS/zKoqKzFacVZU7COO4T1Zh44dRQg2xsiRBuz7QCzXFdPKMWsIw/L1wYNV0K+vYuMKMHWWatemrXhNb8/kvUPy5DwKxE37CBNaIabXSNL8l+b882+6ikwhWA7AhAOwCKkSmkD3bfPdfzRcl/sIy9PpZL82/1mE2m81v/LtFJTZ3+RwTaH2PzhU07AN+ePpa9MmOjkQywH5+1DaNKB//75/O0UR1OQzIIU+0lSUju07sb69e2NBdBj6idtJ7169YDraELHiiU1oLPOcsG+BeK4InLOCKRBHsEnuPpjsOQH+jq7M18EBEx0d4Ww2lvXr2VME4v9qUjJB/s7TYMjgwarYtW6LCMUb2GMRph6JQHzv3Bnm5+khztp6Yvuq9ez80RN4eP0G5k+byYI8A/Hkzm2UFuSz8wcPwsfJCz0GDmcGrlOhONwa6uPcmZFXOMZ4T4Ht1CUsZtkKnDiwV5w9KjIeIiJ+kC3FiQJRVR2CYcNHYKh4ISBjza3g4ekLf3EiQObGLoarm1djkTw9IRUUFUQYtmZDRCBW01CFsoYK09TRgNYwDRG0NRldppVi2mhHevfuzr+gVFhPOolw7DBCAxNNh7Iou9H4zdMSS7yt2Gp/O2wMcsD+GR7s+NwJuL4qAne2TGfPdy1C0tE1yLm8i5XcPYl3L6/jfeJj9iUnEX9UFOCPTzXsQ30tTohAkp1bxGrEQadCBIrlazeyDVu3Y82GjVi3aTPbLwLwpu3bsP3AAXbw6DEcP3MWV2/fZXGPX+DK/TScjstgy3e9wKJtz7D9ZCp7klTBm+NyiutYZkGdCME1yBZvSUnlB+QV1yMtp4a9Sa/ild/U7BqWmV+HM7ez4RF1ihm6bYWGyQL0UvNhCure8ImgMofDzD7sHHzm30LwkvtsmMVS/LbnNaavf8LocviKh5i44CYLXf4A0ZueInLdE8mGJ4ja+BiLxMeRsHlHYeO+ECvmLmc3Vk9G3PIQXFsWxC4v9MPlBb64PG8iu70sBC92zMbTzVFsT6gVYuyGI9JShwUaDcE6P1PEuoxivgaqGNCtOzbvi2O3XxQhOaOqcbNRUXYOaopy8eV9BftYU4y6smwc27KUOTm4wnKsCLA2DszDzh0mBqYYN8acjbcaDyMRch3sXJinqy+sxo2HpZktszZ3gK2lE6zM7BjdZmNuj/GWDszBxhn21o5wtHVlzuLrezl5I8I/jEWFTMPsMBGOI2JYVPAMRAZHI8Q3go23cIKDrQd8xe8xWR6zFE/Egbm6KIPVV+SgrjwH1YXprCQzCflv41Gak8zKs5J4o5y8mvq5/jNqyqp5/DGh1mdVJTQSuZyVF5agOCNHyGYlDZdLMiXl+YWor6lt7Cohr5LKaLW1vqZehFMJdcU4vOMYCsXnkU/19cIHvK//yJJTsrn7AQVlJgJqcX7JtwDcsDrMoZHKk2g1uaIK1cUVksJSaYNauTTI4h21dBP3Tw7ItAJL5M13cmlCYzimsM2ryFLJhTyogztrkO9WZr8Pw/xvptXmJivNtOL9p44W/D4pMFMrtayn8eI5Wcw48POGPenfWlFULoKxOPluGIzylcZFi8+XV7w/idBLQZjKIsi7dzSohzbOUfh9jxrx86RVYLlLRLl4TMqaoA4SvDLc0K2BVmUzMrKQmvqWvX6VwJvmaCWYPHn2HNdv3sT1uDh2+84tXLp6FUdPnpKcolZqJ3Hg8DF29OQJ3L17Bw+e3Gev418hK5umy2WxzIwM3hgnhWBJcUkJKirKWKkIyFnid5Ym0pHEN4ncyi0+/gV7/PQBzpw7gSPHDjDaeObh5Q390QaMSgx/EgFIQbEfc/Qcj5jF0QgK92eh04Kxc+9GXLlyit2+LQL7g9vi30X/tjhcuHQOhw4fxNYtW9my5cswY9ZM+AUEMTtxDB9lZAKd4XpMa6guNIfp8l9JibmVDZzcPREwKZRFRk/FgkXzsGLFUsadJ3Zuw969u9j+fXuwZ/cOrN+whsXEzEKU+Jyo6Eg2Y8Y0RE2bAn+/CczdXbwGebmKY6oTCwz0RXCQP6ZODWMGBmOgIE7wlZVUWPv2HWBrbYE2IugSaq1GnSa6du3GVJWVRfDthgHi2E4U+vXjTXWdO9OQrC5QVh7MQZRKAQhtTOzTtzfU1VUZreoaGxtjqHgcCAVgS0trmJtbMrpOAZmCMqEVYhNjKq+QrlMg7tWrrwi9FH6l1mf0Vzi5hENeqZa7TBG53EFe7W0aiOXbZHSdbqdSCaKoqMgfL4c/OaQ2LXGQbpPQJrjvSxgo6FLphly+QbfJm+SaNaMxz98Gccgfz5vpGr7WzyID0bQ6eWIdBeN/tWnuRyD+EYh/BOIfgfhHIP4RiH8E4h+B+Ecg/hGIfwTi7277t6M/rWgoqbJV82ajS8cuPDOb6GprQE08KWi8IdEdooHIAF/06tmLxYSHYf6UKRyEOQyHTuYSiVkhYSzE1QdBzl4IcpEEODvDy8YWDibGrId4QlEIltuu0WX6AXbo1JX17dsfy+ctxLE9+9kNEaaeiReo+xcvMG8XV7g7ueL5zTss4dFj3LxwAa8e3GfUw9jMwAzLFyxgGSlJuHL6FPopKrGBqkPRobsIu/oWTMnQFvouITAJmcMWrt+Kc6eOY0nsXNaagnDLVo2jHunPyfRLMULfQCJeFOypvtLVk4VMioCDCB00cINQIB4weABMrcYyGs4xRDzGWrpaTE1LVVxXg46etmSEFrRFKO4/sC9T7N+PZ5nLfQipfkhPRRH2eurM31QX021GY6kIw2SRhzlWT7TF5sn27FiMNy4tCcWtddPYwy3z8HrfMrw9tZ5lXdyJ/LgjqHp6mX1KpaEdSfijpoh9/foRKQlpSM8qZHQwzysowcoNB9maTbux79hZ7D58iZ2/9hB3Hibg+l3JyzcZKCipRGVNHaONcndEiNt/NontPPgI02KOQEM3jHUf4Art0bMRFnuNXb5fIELwR9R9/J1V1HxGbd1nfPj0hZVXf0RieiVepUmeJJTj9dtKpOW+Y1ceFODw1WxsOpLEtojQvedCBtbvf8oMLGOw51ImVhxMZGY+2zBzxWXsv5rJlu9/g8iVDzBz41O28mgSlhxMwuxtr9j8PfFwn3YMnXoMZb/80h7NW3ZBl94j2MG1O/Fg4xQ83TadvdwxE082TMXT9ZI3+xcg5dhSPNsczXYHW2GZmyEWOo9i8+z1cH6hF87Md2OrvQ0RZDoM3p4LWNScI3wC8Twhj1F4kIYdUN3nV5SX1nDwSXr0gK1augtBPhFwc/Jj7o4+IhT7wsctiAX5hyM4cAqmRsxhU8LniOvRCPCPZCFB0xESOB3BAZLwSbMRMWkuIsPmsynhc8UBKwphk2eyyZNmInraAiyav4YtX7wRK3/bhKULNrCFM9di9vRVmD51GYuduwGb1+/HwX3n2dGDl/Ds3iPUVZWwzx9qRZCkdmgVrKa8BNUiZNRXV7KP4n2f6c//9Z/Yh9oPqCgsR25qDisSobhUKC8uYaX5xSjLKeTbSEVuIaqKy/Gusop9EmGtadmAPKhDDoxU0kDB83d63IWC5DQ8ffgCiQmprJ7KEeqoLZu0yY/afhVQAOZSCIEG0HAwpqDYsJGO/vwvwhypyC9CZVEJD7Qg9VW1Uh1uQ8kBl1E0KY+gGumm5RL/jNRGTQq0/7fg+69IJRPfAvEncT8a64bp632Vaoe5v/DzN8h5lYj6ykrG9dD0OQ0lGnXiNYF7Pzfcjy/ipI5qg2mzHKESLQq97zgMi1AsTjroMeRWaYI0TKMShUVUelAqQmUO0jMzRcjMleTmI1PclpObx/IKCjiAvkpIZPHC6/gEPBDHEXLlShzibtzAoycP2fWbcbh4hcYsx7FL4vKBIydFsLzNnr94yjXGySkJLCc3E/mF4ntmZbKCwgIUi9ArD/agGmGqaZbvD/UUzs3N4Y1z5OXLF0gQofrR4/vs+MkjOHHmKFasXcY8J3rC2soKPcSxmPwqjgetRZAaoTeUObnbwcjcGBa2Fix8RhgiZ0+FX0gwc/WeAFsHR5iZ27IxJhbiGDYGmtp6TG3IUKhqCPRW0NTVg4GpKawc7JmHtwfCIkKxIDaG0SCOTVs2YrcIueTwwX04RRsLz5xqcBJnzpzAmdMS6ku8a9d27l1MZs2KwpzZMxAzdyajQBwWPgkuLk7M0dGeSybcPSQT/bwxaVIQJoVKxtvYi8DXToTNMYz2P9G4anURgknbtu35bRdxDCVUb6s/XBfNm7dgnTp1Qv/+AziYEgrBVLLQr18fpqqqxO1Y5cA6Ul8PY8YYQU11CLMQIdjK0qYxEI+jsc4Cl04Ixg1hWC6ZGDRQGT179OaBIYRKNJqGX0LHeBkN52oaiMn3gZjIeYpCLvULPnz4MPvtt99wQeQjc3NzRoFTDsPyhramIZRCMQ3P+L58ITY2ltEmu+8DJYVcOVDTdflz5e/1Cy0qNgRimjvR4tdfGjfZyXXLTf1FBGXZ9+/7t6CuB2ONRzFaJaYnkLWZCXMRZ1f0SyavELuNt4aTrTUXfpMIXz/MnkThN5xFB4TyCjGFYhLg5IFAYYKtE3Mxs4K7hQ3sjY0Y9cj7Lyqu/ruM6hV/guJAFTZokAp+i4nFzLDpbNvKDbgozsRplZiETvTH0Z078eLWHfbqwQPcunAO8Y8esi0rV8F8tCm6de7OBvUdiMkT/LB7w1oWHhwM3aFDxROtDeujpguz4FkwnTSP7TtxAW9Tk/D08UMWGRYCg5GjoNC9H2vXph3+3uxn8bhR3U4raAwZDtvxrnB282IT/QJhZ++EXr17MnqSDlIZDL3RI5iK+AXT0NGA7sjhbLjBcAwdoQ1NHXWmrasJDRGQldUHMRreQQM75EDcsuWvaCN+IRxGDmF+IhyFW+hjqqUeW+g+Dos9zbEp2J4dmO6Bk3O9cHlpKLu9bjpurxfBbP9i9vbMNuRc2IOiG0dY7cur+P3tM3wty2Y0xe7L77RxR1pRohpB2thSUf2OZeUWi6BcwN0gCA254IMbHThpNUlczyh8J8JlFjv/IA8Z+TXYdiKJ2Uw+h5lr7uPK/RyWKMLsgROPYWk/j3Xu5wh9298wb+1DFvekkFeI5YD8/tNX7j4hd5FIza5Fcqa0UkzKRJh+kVKBa4+L2MX7+ThxIwsHRdglx2/kYc2hJGw4nswCRAjXtZqHMyKIk10Xs7B03xusPZHK1gtzt70UoTiZ6dvOxa/N26NFmx4Negm90bxVD9alpy7WxW7F8+0zWeL++Ug+GIu0I4vY25MrkH1xM17tmMG2+1tgR4AldgRZsdMz3JCwPxoJ+yRxiybgxEwPOJhPYNHzz2HFluvo2d+Z3b6XLIKE+Fl8lNS//4THT7N4YxcpLy3DxTNXMMFrBhuu5wIDg/GwGOfErC1dxEFoIuzsvJmT00Q42k/E+PHezMHeFw4iQNs1cHIMhItzENxdQ5mn+yR4eUyGj1c48/WZCm/vSPhOmMaC/GfB328WJoXMZ0FB8wRxOXQRmxy2FJMnL8ekyctYcOAiREetwfaNB9jRPaeE09iz/SjbLE7Ktm4+gm0Nnt9+zCuncp/bd5U1KM8rQ44Iw6QoqwgF6XkoEUFTUogy8ba8sJjVlImgLQKn3KdY7prwfSCWSZvaPotQnc9KU9JQVlQkgk4WoxpW3uhW/4F9/fI7ikRAr6p8x37/SKG9rrHGl8JuZXFpY1cG+rdQ4G5aWyytsso1wQ3BumFFVVp5pQEfn1jTOuSmtchyYOXV3M/fNtlRmP0+/P4zciD++pk2LdY3DibhzxFvP9TT6nQ98uNTUJadh4/v3jP699LjIQd67m4hQjCtBEurwR9RW/Me5eU1rKikHNm5tIqaxyjwpqZlIjEpjWVkZCMlLV2E0bfsbUYmklNTkSROTAit/tLtaeJj2Fv6WNrk9pbR0I3Xb5JE+H3KHj58hPsPH+DOHdpIdgf37t/ngRvUWYLcu38Hr18/x5uk1+x5PIXhJBF2s1gOBd/s7MY+wjT5rqiomEMyoRXhwqJ8ZGRlSER4T6Ea5kSpCwX1GaaQLU+eO3vhJDbtXI+o6CnM0dUOg5UGN27CohrUXr16NG7KVh2ihhGG+rAab8WMzc0wcsxocZvE0NgY46xtMN7Rkbl4ecAnwA/+ImSSyZHhiIqZgblL5rPFK3/D6g1rsHHrRrZrz04evHHi+DF2+jSF3jMidJ1jly6Sszh/TnLqxHHs3bsbK1fS8I0VCI8Ix3iH8TCzHMe8vL0RETEZU6eGNwoK9kNAoC/z9HKDi6sDPDxdWEDABB7QESruK3F0cMbAARRau7BBAwbyRjhtbR1GG9i6de2KkSOGMdozRb2FFRX7MdozRbXE8mQ/6sKgpqbS2MeYHl8VZWX+OEIb84yMjKGsrM5sbKxhZWXdGISpD3HTQExh2MiIulFIlAargSbqyYNASNMaYHnTnHydLtOimhyA6XLTkEw1uU1XaIcPH84DNuSATLd1Ff9+6j1M6GuOGjWKJ84RGqxBX1dfX59RT2KaVid/fepAERERgbVr1zI7OztewaYBHWTatGnipEFVhN2/se8D7t/+82/49Zfm+C/xltC+EOpF/G1l+q//EHx5U9//ZCB2G2+OjYtnsqFaGuIMSgnW5qaMyifatesAJ+txjEYL/tqCGlUPYGFeEzF1YgCm+Egmefpiqq84W3Of0GjCeKdG9sbiSW9jBydTY9a5YwcumWhGq8QNJRMUjAeraDEz8fExU2OwcflatmT2b1i7aB2ObD/E4k5fwaPr1/Hy3gP2+tEj3BFnQAmPH7FrJ08ifOJE9O7em3Xv0gsd27aDno4u27l+LY7v2Q4nSwvWXJwQdBBBV18c1Im9XxQ2bdqNx48fs4M7d+HMoQOYGhDGVBS1xZO4C4di8vPPbaDQTwk2tg7M3skZlrbjGwdtULmFkpoIxEZ6bLDyIA7AuiN12dAROhgugvEIQ4nWsCE8anOgkiLroyB+obt9WyGmk5Wffv4FOv17Mic9dUwYo4Mp1iPZLIfRmOM4BrFOxmy1jwX2TnHijV3k+GxPxK2OxNNd81j8kdXIFKE4++JOVnr3BOpe38Dn7AT2R02pOPB9Rn3dR/b+oxR633/8wmrefUZtvTjAiYMqoRZgfDCltw3otrzSOjZjwxOY+p/Cgs2P2YXb2ZgUGwfFkRuYpvlWzFh5D0mZ1ezs9XSo6wWjVSd9NnhEFBwizmLLkQRGQzg+0qabT5Kcojq8yahBQkYVS8qiKXZ1SMmpYbdflODsrVzsOJXKtp5MxWERjNeKMEwiVtxHn2HB2HjkNTt1JxdrjyQhdtcrtkJcXrAzHsNMJ7Pmv7QRZ7y06bFDg85o2VoBrTtpslZte6LnIEuc27GLJe6di7TD4kTk2DKWdW49CuL24M2+GLbZaywuz/PC9YW+7OW2KBRcXo3iuM0s/TitKC+Ej10wsxw/H2GzD6B9Vy1m575EhAradEStqb7gjTjBmL30ClwnrGPLVh7C/fuJKCt/x168yMDSpXthYjaRaWqOhb6BPXT1rNlwPRuMNHAQz1MribiuPcIaQ/Vt2YhR9oIDRhg4fjPKCXoGzmyEgas4EXQVB2V3pi+MNvWGsaU/M7MOFQftIJhZTWLm4yNh5Tgd1i4zmJltJMztpsJlwkI2IXgZfAOXwdN3MXN0nwMXn4WInLaelReVoDS3kIdBkHeVtagqqUKBOGkjddW1KMosQEVBGSsvFOGztBy1ldWMwh0FNvm5+6/+axoaqbQh+UUiK8nIwrsS8bXLK1iGCN+0yikH0t9pFVgEv/z8MkZlFLTC+oHGlL+nTWblPKiirrqGSWUOTcopOABTdwkJddGQOk80oMt8u7RJj1alpc4TUnD/+OEDB/6mpRRNAza1fmu6YkzhlleSm64A//FtdDJ1xqATjz+FZRGsP9TUscLkdLwrkzYzEgrrXMrScH9oRVgesEGoS0RVZR1KaaCGkJNHYZhOMLJZSmoGXiek4sHTl+zZK9oEl4IkcSJC3r7NQGYWbUxLZ6lpUmlEmridpIjrickpSEt/y1LE+5KSkkUwpnAsZKSLoPsGj54+lTx5jKfPnuLxk0fs2fOnInAniq8rSc9IawzDkmwOwaXUOUKQJ9GVl5cy6iSRX5gnbs9l1EkiPiG+EQ3vuHL1Ci5ePsf27NuOWXOi4ePrwXQ0Nbl0Tw4sFJiUlAfAxt6K2bo4wFy8tRMhkrh4uyIgPARTZkex6PmzsICmy21cx9Zt2YBN2zdj264dbLcIu/uPHsZR2iwonD17FmfOnsGlSxfYtWuXhSuIi7vGrjdcv3rlErtw/jyOHD2ETZs3sqlRM2Ahjoca4thLlMX9Hz5yBBwc7VlgUCBCQ0XADQ1iXl6eIgS7w9XNkY23sxahzB4+Pu6MhnSETw7BpEnBzNRknAi91G6MNqD3gvKgQVAaRJvhpNIDq3FjRZCl1qfSYI0BioocQtU1VFnLVq247Zmqqgpr17YDh2BFhX6MPlddTY1bpxIKr/p61Ip1BLMRJxc2NrZ/WiGWw3BjIB5jAmNjyeBBqujVsx8Hc0JdIZpumJNDsVwCQde/D8TyRjlps9xfeGOcHO4ovHp5eXHQlEsjaAVXfr7QCvjOnTuhoqLCduzYAXt7+8ZJdatXr+ZpdlOmTGG0wjxy5Eg8f/6c2draIiwsTBwzljIaBb1+/XrxtamjxU/chaLpyjJ9bwrtclcKCsO/iPvfNBDL3Sqaft7/qB+B+Ecg/hGIfwTiH4H4RyD+EYh/BOIfgfhHIP5fHYhVBiiiS8dOrH///pgdEYxhWkMYPRn0hunA3c6K9ezeA927doer9Xg2I2gywn38RRgOZDODwxE5IZBDMQl08cJEB1e4Wdg2sh1tBBuDUax9u7YNm+pk1Hbt7+jYuTtzc3DDw2s3cHz3SbZ34y7s33IAsyYvY4tm7sWFY4/x7JYk8dkr3L54CUniRYs8FC8mS2Jmiwe5GevYrjP69+kvnnhUm9MK7dp04PHQk8SThqgNUBE/sJ8a29aYjKNfvkCcPnqc7du2Dcf27cWR3bvYhtVrxQuQBtqIoEM6th+Kli26N/75Y7SxMcxsLNGvX29GT0JqpTbMYBhT6K/A/YeH6Q1jI0eP4kCsaziCDTfQxZBh6hg4WIH17kPjnDuirQjDhOqYqZdg25Ytmbn2YHiM1kS4lR6bYq2HSPF2lt0ottjVCGt8LbE73J4dmeGGi7+F4O7GaPZk+3wkH12HzHPbWP61fah4fBofkh6wr4Xp+PqhWhopK1w89QJvkitQU/eJfRYHycraj6io+sTqPvzOgzSofdI3XxsDBpVbpGZXYcmmh8zSbQsevSpqZDf5jAikv8HEcx97mVqBZ8mVMPbYwtr3NkNnRQcMNl3HgmJv4UVKOT6IcE4osGcVigCcXcsSs2rwJquSSynIGxGSn7wpE8G4mJ24kSMCcg5OxGWz2G0voDxmLiw8FrETt/Ow+XQatpx9y5bufQ2VoR7ixKQza9GigwjFrfBrc0nLlp3Qpos2OvYzYy3bdEfrDmri5zqVPdu3GVknVyHv/FpWfGMXqh4fReqRhexouC0Sds1CMpVWCFknl6Dm4R7Uvz7Bap8eQPbNE7A28WYTArbAL2IrevXXZ05B23DmwrPGE5ZP4vGmQQanbuawvkMi0KWPDYbo+DE7xzlYuGgvLl9+yvaI3zk7R39oiGDMNEwwdLg1NHXGMQ1tM6homkBNy4xpaI7DEC1B25xp61oJIjAPt2XaI+yY7kgnNsLARYRiN4w282VjzPxhaOILY4sQZmoVhrHWEY2MzINhIm6zd4+ReM6DmwjArt4L2Hjn2bBzi8GzJwmsnFpsxadyrS2hQFySV4KCjHz2gQJXSYUIzuWspqIa72uk3rhcXysCJIW6f/UfhUTx/8bwRyG1THzPZ7efsoLsXHyorMQH2uAm0Ojg3JyixpKGLxQ6xfeQRw0XFpSKUFzX2LaNNvrR5ji5ROJPLdgotHJ5xJfGQCyXPsik3sNU/iDVLLOmgVl8Pv07/zR4g8IzlS58btgY1yT4Ul/hfxaI5ZIJKoGgTYyN7xcfT/ehrqqG0bCTD7W1HOrlMdN0f+S+yDz6mXoLNwTienGCUF1dj8qqd6xC/AypVV1ufjFLfZuDV2/SRHikIJkqQvBbvEkRl9+ksOciIFMJRGNATs9ETm4u3mZmMBq+QWUTb0X4ZRnSZbnm923GWw7RcmCmvsRPn7/Em8Q3LO1tGhLF2wzxcURql5YnPjebFRQVchAuLi5mpSWl4sSoFHmF+Yw2zmXl0Pei7/lWKpVIiseTZ48ZheFLly/i0OF9LHbxXASHBkJvlD7r2qUbaLQwBTUy0nA4omeFYO3mhWzTntXYf2QHzpw7xC5cOYnL187i5u0r7O79G3j4iPoL32FUp/zkyQPhIXv8+AEeP7ov3nePPbh/R5xA38XdO7fZnVu3cPNGHOIoFAtXqCfxqRONm/Jmzo7hTWbqQ4aygcpqUNfShr6hARvvYItJof6YPiOSzZwZxa3WpkROZmHhwZjg6wU7e2uJnS0HYzkQBwdORGhIYGMNsbXVeHTr2gNaQ7QZvQaPMdTnfsOkW7duXCNMG+cInVBQ3bDU67c9dHS0uRSCNuMRRQUFbrVG/YwJBeQe3XrAZMxoRoHYaIwRDA3HMHNzC1hYfKsdpg11FIQb264JRkY0JEPaVKespCYCeJ/GPNI0DDcNwjK6TQ7DciCmtxQy5XKJpiUTEydO5CArv5/KJujrBAcHM8p3AQEBHIrJ3bt3+fbdItsQKn+gkHjs2DE2YMAAUDs2uYaYSib69u2LbSIXkUOHDsHDw4M/RkLB9899jum2vzf7O6P7T7XE3wfg76//j+rauXNjDa2S0iD0F2dCVDhOBg/oD393x8aib5oV7iEehBWz57BpAcGIDgxpXA0OdffFFN9ATPb0YwHOPiIQu8Hb2pE5iDM453HmsBBnGaRtq5ZSEKZQTCvFzSgQ/4Tu4iyPuDu74Pn9W4g7fYrdvXAZ6xauwbypS9mSOUcQM/sC9m26yzISU3HnwjUkv3jBXty+jYUzp8N41GgW7hcIdZUh6NShK6NfCnoiyv/+Du06oF2HHujQS4kZWYxHStIL3BIvTOTauTPCaVyl4RLCqmWLsXPLRkRFRTNjU2PojdTFL81/ZdQruN+AvujZuzujTXjKGsoYbWnEBikNgIaWGrSHabIRhnoYNopWi6WaYi19HRGcdUXoUGG9+/VEl65Uz/RtUx0FYppPTgb26AwnfTWEiRBMJlkMx2wHQ8GAzXMejSUeJtg+2Z4djHbFmQUTcWttFHu4dT7ij65C0vENLO30dhTQJLtnV9jnt8/xtbxAHOw+spunL2FmwBLcvJPDcgtr+MBW9/4zKyipR3nNJz7IEeotSn1Em64gUSiWFZVUY8mWxzhO9bzCk8RS7D+XgkGjlrGxHruQkVeL608LmanvEfTTnYV+qn6stwh4TqEneOWX1NZ/5pri4oqPLJvCsQjFtFJMKCS/TqvE44QyduFePraKwLv/Qjo7eCULBp470FPNjR26koEd59IQtfYu69JnDFq06olWbXqxFq17oE1nFbRu35f9+ivVEw9Ehx4mrHV7FbTrqoeOvcYxS5eViJx9GPODYlj1i9N4/+YSsk8tYY+XB6Dw8nqUxu1g7x6fwOe0G/ic+Yj9nvEAN24kwEp8HeIVuA0DVceKEy+qK2sJJU0XDB0ZhtKKelb3/ndeRd9xOoWtPZyE2K2vMH3FfeYQdBCj7ZZi4BBfpqJiCg/fSETP38H8Jy/CMH178Rx3ZLQCPGykPUaOcWEGRu4wEAF3jKkHMxnnA0trf1iND2YWgp1jOOycIpij6zQRaOdgYshiFhKxEi6eM+HjH8uCJq9AQOhyBE5exWgF2NknFr6TVrKw6C2YHrMbc2L3sZDwDViydD8+faR+ux+Q8jwJL24+QlVRFSvOLkJ5fhny0nIZhTKajlZbUcOoiwOtjMo1sP+v/6S62q+NK74famq57jjhOQ0HEYHpTTqqRbD9VPOO0YosrXSWlVUxDowfPzd+v2IR1iuKykSoLmLy5Lumm+D+FI4bVn4bff7MQffPgbjhbcNlDqC/S2FXCrINlxuucx2xfL0hTDcO8qDw2/CWA7K8ciz/LlOg/kCvDd9CMw3qeCdCLKnMK+AVcLqNUKeOLw39hmXSgA8pYFMvbbrPck0xhX6qK64QjwspLitHXl4RcsVJCCkopA1rBUhOpdrhTKSmSLXCqQ3iE1Pw9EU8XsYnssSkJF4VfvYqnr0W4ZZCcW4ubXjL5nBMG93kwJyUlCI+PoWDLElOFp+flsYrvyRPyC/IFz/bMlYhToZohbikpISVV1aIIFzUuGJNq8gUvN+8SWRUP/zy1VPcvBUnuX0dh48ewpI1i9nkyDDemEUTxIhUA9sBfRX6MoPR+rAcPw7u3s5sytRQLF2xEFu2b2BHju3nYR53795gTx7fw9NnD/H8qeTFUwrBNHzjLrt37zZ/HA3gINevX8Yl8fknTx9n+w/uw4bN67FgYSxz9fSGoZEpVDV0WH8R+AaqUH/9oczEzATUJWLmrCg2d560eY6m0ZHYBXMwe040pk4LZyEhAfD0dOW6YeLgaAsvbzf4T/Rmk8X7Q4P9RRimUBwoApqDeDy6QlsEXdK/n6IUYrv3Ym3btIGu7lB06tyV0SY2YyMDtBYnE6SzuI38+iutzjbHCF0d7k0sD+LQ0dHiXETdKAj1OrYQIVhe8bUQ4Z9OACgIEwrFcgiWgzC9pZ8hUVfXFD/Hb4FYDr1N+wjTdXlFl97fdGVYDsRyjbC8AisH5u7du4uf2y3xfdQZvY9qgvfu3cv09PRw8uTJxu+1detWDsi0UkzU1NQ4mC5btox5enpyzfK1a9eYjY0N/Pz8MGzYMEYnF/fu3UPv3r2ZHDLlFWy6/F8NK8OEehr/s017sr/+5f/D1LqffmqO4dpDmIutOZr/2gq9e/VgRiKcWY8za1zSH62vB1vzcRhCT3IhcqI/Qtw9EOEdwIJcPBHoTDzYRAdPeNs6wMnUUjLWHHYmxjDVHcZaih+CXCrB5RI//Z3PdBUUlZjJKBEwNYZh9NDhbJjmcOxYux2Xj91gi+dewvJV9zB3zlX2/F4K7ly6ibfxCSzh4UPEREZh3eLl7OyB/TAyMBFnZuqsS5fu4knTW/xitGctWohg3KI1+vZXZ14TgnH18llkZh5g+RkvkZuWiBsXTrOjB/Zg5ZKF2LF5I7t68RKuxh2Au78p66PQW/xCtRZPanqiS21QBqsPxihzQ6akPIj/xKWiNphRpwl9w5EiZOgy7ZFDORRrDB3CBioNFGe5ndGmbSvWosWv3Iy7bduW7Jeff8Fo9f7wMFRnQeOGIcJyBGIcDdl8EYiXeY/FllA7dmiGO07GTMT5+YHs9vqZeLQ7Fq8Pr2JpJ7Yg+8p+lN4/yT4k3sEXmmD3sVry5RNuH9mHzZFL2P4t15GYVsGhl9AqDw3KKCr/yOi2iuqPjX/C5zHDX/4QlyUfPn8VB4wa7DqWyEa77kJiegWOXctgA0Yshu/0M0jNqWUrDyVgmOdhDBizkPVVC0Z/wwUIW/OYJbwVQaj2M5dykDIRBvNL3yO7uJ5lFlL3idrGkoy7r0ux92IGVu5PYPsuZ2Lb6VQMHj2DBcWexbR199FVwZi1bNVVhOCu4m0X1rGXIfrrRWOgwSzWTzsEfTR80aajEmvXaRjadTNC6w46rH13Q/RRskXrNqNYmO98vEu5g4Lz61jeyeX4+PK8CMG32deiZHytzMCX8nR2dNdJcdBxxNylx5hL4G7xwtYRP//UgnXqqAL9sbOxefd1RivmNx4X4PrjfJaW844fx0xxokCyit+juOqT+JgiNnfDQ5i5L0WnPvpspJEdZi4+jPHO4czZYyqc3CPg5jWNefrMwISAGHhMmMl8g+ayoMkL2aTw3xA+ZRmmRq9k02asw9SZ67Bg6V62ZPVhTJ2xCTPnbmOLlx3A8rXHsHLdSRYauQZeQcswa+E+tmzNKWzYch4bt11g8xbuR1J8Gt7RarDw4NoDXDp6iVeFSZU44SrLL0VmQjqjsFlfI02ZI7xxrknQ+3/9xyHwEw3IoIEYIkxToK6uQn5mDot/kYyC/KLG93+mtyLQFReXM2obxl0YKBh+orZjZchJy0S1CHpELmf414G4YbNcQ8kBrTpT8JUD8bdQ2zCJjgIz3d7QBu3byuyfyWFWLmeQP58+p+nj0xiGGwI9TZv7wgGfbhO+ULj9gsqcIklugdRRouH+f/lMj/fXb4H4Dxo/Lf9bhI/UFk78mz9RaQmVctAEOnFiVyd7x29pAAepqKxFcUl5Y5cJkl8gQnJuLktJEyFWhOQ3yWnsyas3uPXgKZ6/SmBvMzLwRoTe5y/j2RsReDOzc5CWnsZofHJWdhZv1CNUbpGVI27LymK0+kzdLioqy1kxt1UrRnlFOSsoLBTyeRwzoTBMAfttuoRGMVP3iutxV9n+Q/uxctVSxCyMYXYODhispCx+t5uzn376hRdeeorwQZTVlDBQWRkDBw9kg5QHQ0mEGhURDom65hBoDx2BUWOMGY1SHisCnI2DE7NzcIaNCJVU5kesx9vDyno8xppZMcMxZjydVWu4PlPV0IaS+hAoDlZl/QcpY5DIBcpDNNmwkbShzxKBof5sdkw0lojj5YoVy9jyFb9h6bLFWLh4PqPJdLPnTMfksGDm4enGK8OWlhbMwdEOLi4OCPCfwIICJyIsJFCEYgrGASKcWmGU/mjeKEdoY1x7EYhVVZTZAEUay9waBqNGMQrBfXr3QUcR5Eibtm0xapRe44o7DcsYNlQbv4rjLKFWbdz9gVqhCboiMNOKsDSBzkwE4HE8kEMumaBQ3LSrRNPLRGOIljie94Dc9lYOxE1XiOUg3HSFWA7A8uXvV42bhmXaJLhp0yZG4XfBggWNJST09ebPn48DBw6wqKgojB07tnGTHVUM0NeXu2qsXLmSN+NRKQahTXsUfDds2MCok0VISMi3Eo6GkCuvUNNtNLq5+S8/MWl4x1/xnw3+WSj+Z7f9W/0IxD8C8Y9A/CMQ/wjEPwLxj0D8IxD/CMQ/AvH/6kDcqWNHjB45nCn06Yt2bTtinPEopqWuwn8qGNBfgYV4u0NXSxvKgwazaYGBmB4cgnBvP4mXH4JcPeHn4CZx8oKb1XjYmZoz69FGsBptCJNhQxmFuT+VTPzUjL8f9Q8ketr6MNMfizbUo0/o2a0fVAYbYkbEDnbzejpexhfjsnhLrp2Lx80LNxH/9Dl7cfc+Dm3fjc1LV7DT+/bDycoO+sOHsh7de+A///Z3rsUifcW/v3OnrhihO5IZjDLBBPHvOnFwLVs5fwZ+i5mB8JDp7PK5czi0Zxd2btnEzp08jTs3RfhYt4q5udmJX7T24uSiO2vbtg16K/aBzqihTEllMAYM6i8osiFDNUUo1obWMC3JCB0M0VaH6hBlpqw6GD17dRNfsx2jP1/8Ip5Y8qAOalnXQ9xur6fCJphoIdBUG9Ns9dg8J0Ms8TLF+gArRqF4f5Q7Li4KZnGrp+Dm+mg83L6AJR7bgLcnNyPv2h5W/uAMPqY8xNeqAslX6nH7hzjIvWOpd+7g1KbzePQ0n9XVf+S64oLSD6yolP5s/xn5JfXs/UdxEP30lUsbCAW2d+L9F+9ks7UHnsPOaxMKKt6zZbufoY/WbOw+lcjuvSjC5GX3oO1xiA0wWQEFzTAoW6xlS3e9wuuUCpSJkEdoHHRp1UfkiVBMsorqkJb3DslZ1SwpoxovUitx/n4BW3ngDZbtS4CLONkivVSc0LaTMlo0b9OgrTiB6ozOfU2YwvAoDDT6DUYTjjOb8HOwCDgKNdP5rGPvUWjTQQOdu41kLVv3Q8u2KuivHsp69HPGgplbUPXkFPv04jS+Zj3BH+UZ7GtZOr5WZOLG+dtsgLIvuvaxRIuWPVjLFp3QqmVHtPi1A2vZsht0R4fCwWcze5VYiPUH3zQOOikoe48S8XhU131mde+/oqjiA54llrJ0cbKQIgLz7RdUZ12Gmb+dwkgTX6zcdI55+8+Bt98sBIUtZKFTliBs2gqER0tCI34TAXcNps9Zz2bEbMTs+VtF2N3I5sTuREzsdixYtpfFigA8KWIlZs3bwZavOYotu89jx77LLGrOVngGLsOSdafYzv1x2HcoDpu2X2BnTt/lAJmTksEuHL6EA5sOi8s5rDyvFFVFFchLzWH1VMZAm9waApgc9iCVBv/Df02DIJFahtVxqQUPzaiswvvycryvrGS52QVIepOGyopq9pFKJ8T9k2uGqQcxjR/+Q4RNkvksEVWlFY2DNJoG4X8aiBs2v8lt1b4vmfg+EHP5AwdbqSRBfr8cgJuWSvDn0dehkosGFHr//BhIYVgu2aA66S9UDlH3gRWLx5huK3iVymoLS/FZPF6fP1CP5A/IfFuALRuOY3LgXObjOgmeziHw8QhlkZNnYf7MZVi8YBXbvmUvHtx7JMJnBqsVJx/178Vj/6GefRCBuf59Pd7VS2reUd1xFUrLylhRaTFy8vKlzXVptKEumTfZvUlOZc9eJ+CVQEGXpDdsyEtPz2Q0yCOvgAKthDbISeUS+ayY+lmL4FtWXsbKyyvE9UoUFRez4mKpnjgrK5ulijCcmpqMpzQuWbh56zpu3o7jfsNkqQiM0+dNh6s4jhB9/eE8YKJ5c/pTOv2ZuwVvzJ48PZjNXzkH4bPD4TTBlY1zsIHB2DHQHjGcaWhpQk1dBGMNLaYmAq2qqiaGDBnK1NXFbWqa0NTUkWgPhRbTYZo6Q6E9jBZraNFmJIYbGEJ3lAH0xDGdmNtYiJNiL0yeMolFzZ6GRUsWYNWa5Wz9+tVYt36VeLuGrVy1DL8tieUQTKKnR/KIZj9/b+bu7gpnZ3s4ONk1okDs6+vJ/P19EBLsj+AGY4zN0KV7L5FVBjIaS0+bwlq3bsdG6unyvqWB/QcxGrRBfYapzpjQWGcakKGjrcW6i7A6aNBArismLUQ20R2mLbJJJ0ab4ChYm5pS0JXGNsu1w7KmNcRy7bCxsVQyoSUeY1qQozpw8ssv3zbTEQrBFGzlkgk5EH8ffpte//52OYzKpRRUViEH6qZlFvJmt+8HdfyVLv9NwjXKTUoc6GPkumX586j/cDMuf5Vqg78PnH/7z7/yiGfyH3+Rb/tPJtc/f/85/6qk4t8iwM0WmqpKrJV40uioacDewowNHjCAN9Hp08qlQGdULcQZ1ggdLTbJmzajefPKMAlwducV4kkevszNyh72puNgP9aCWY4yhJXBKIwWTzZCPzReIW7WQITj5uKJ0K5dJ6arOQJGBmbQHWrEVAfrY3rkLpw/9prl5FTxCsMHmmkvJDzLxvUzcbh79RabFRaFPes2Yf/WnezisZNwtnGEqZEBo0l8zZr9DDMTE+ZgbQ4nGxtYiicysRXh2cDQCMO0hzFjwzF8/9q2ac8MRhjgugjF50+cYKePnMTj+/dx5ughtmvLcoyiXbQO1qxVK2kXacfOHVj/wSIIKw9sCMX9oaquBBV1ZQ7BRENLVbxoKUFJfAxRHKCAHj27izPfTqx161b4RXw92mxHaEPiz8Jwpd4s2EIfMS7GWOhuwha5G4tAbILlIhSTdQHW2D3FGcdne7HrK8NxbWUE7qyfyZ7sjEXS0bXIvbidFV7dj9pnl/B7TgL7+qEK//3Hn2uCa4sKcWzNbvbwYRYHYK4LFEorRfh69y0Ql1VRp4ovXNtKaDX3Xf3vPGyDrNjxXISw89h97BmjDhG2AUegb7uBXb6fh13n3sJr7k1mHHAKKiaL0Vc9iA0dvwVr9scjIb2K0QoxfY+Syk+MAnFyllRHTF6mlONNZjX3KiZn7+Ri44lkTFx0hykMC0HrTqroOsCCKer4QHnUNCiNiWVDbDdD3/sYzILOMP/YW5i25hEHYzLIcK4I1V7o0N2AtWgzGG27jICi7gymMISGkXggNno9+z3rEb7mv8aXklT2sSQDB3acg5LmVNZNcTzatKdd1F0bdBbPsW5o39uA9VH3RfuuQ+EUsINFx57G00RxsK7+xKi+m04S5Mf/3YcvSMmuRqE4cSE19XSCIn4eDWiV/XVKMbbvvcXWbT0JL+9IeE2Q+PhGYWLgLPgFzWEBITGYFB4rDo6LJOG0ShyLqKhlbMaMVZg1azXmxW5i8xduxeJFW7Fp/UG2ft0BbN12Ajt2nmZRszZi0aKdeHLnPkt9+QJZiW+QmZjE6mtrUV5YhvhHL9jx3aexfvEWZCdnSxIzUZZfhsLMAkaryNTpQF7RlCakfQt834dgWj3lINwQED++f4+PIojJk+vys/JQnFuADxUVrLKkFGlpWUh8k84qyypFKKbvSWFWGjRRJO6vHHbTHrwSt/859JJ/CMPUW5g7TJCmK8QNm9Sahtqm5HrhhkDMq77/JAQ3XUH+04owrwZ/+13nVWFxf+qrayVVNfhcK8JocQXLf5mC8px85Dx7w+pLy3laX6kIxsTbZhJsxeuqozjZJy6ayrBWVYRun+5scKdO6Ne2Pfo06N2+E5T7KsF8tBkLDQ3HsuUbcOLEOUY73/MKslFZWc6qaqq5jre6uppVCbRqnJWTxygc5xcUIDMrh1Ho5RXht1KP4pS0VBGIMxq7QFDozczO4iBMaMMcd5EQ4ZdUVFaguqYKtbXVrKamRtyPag7KklLkia+TnpHJ3r5Nw8uXz7hWmFyPu4wDx/dj3abVbOHyWIx3tRfHoBFMQaGPCG1t0a6tZNAgRXFiGYHdxzezbYc2Ys/hrTh0co/kxF5s3bMZSzcsZ/PE15syaxrCp09hIZGTEBQeIk5qfZmbjwfcvF3hPqHBRHd4CN4B3iwgzB8Bk0X4nBLEImZGYOrsqZgpQjtZsnShCLyrsWFDg41rsVG+LGzatFYE4VVYsXwJmz8/BrNnz0Dk1HAWHBII/4CJ8PZxZ+4ezlw77OwssbOz5k11E0QYJtSbmGqHKRgTIxEyqf/wGEMDRjMVtLW1odhfkfXq1QtdOndt3CM1cvgwHjAmT3LT0lTnlVNFRQVGG+oomGqK2wlNAqTjt/x+WkWmr29mRhPpxjWuCjftMvF9EKb7KNcUa2pqo2vXno01xD//InWSkAdxyDXDMvl60xXipivCP/8sBWj5/fJGuu81DckUgpsGYL5M4bZJOJVXdKn+l/oCNw2QFGz/PIhDGuhBmq4Sy2iTnfz9/iGM/gd97j/WDUu9iP/xY/8tBin0a5y8ptBXEYHiidixQ0fWrUsPjDMxxgRxVkboh9azRy9McLZjQe5uCPX0hLedE5vo6MLt1XztXZm7tR08re1hPcaUWRqMhrU4kxyuqspoEEfTsc28QtyqlXjS9mDOdo4imDtj9ChLNs7EHWFB67B/5xOWmFyG379+QVZmJXt4IwVx528j6ekrtnrBUuzftA27162XrN+ANUuXwE2caZJBAxXFk6o5vD1dmIujLSxNTBE9OZzNnT6Dp+Hp6Q5jffr24zZ0vXsqsMUxc3HnyjUkv45nb14n4N7tWzi2dzvbvVkKxGbmxqydODtt3aY1j9ckFK679ewGBRF0ySAlKRzTyjGhFWEqqegv7ifpJ14Qe4pALLd94T97/NocAwYqMP4F+fnv6NSuFbMZoYaZTqMxz00yx94AsS5jsNTTmK2eMA6bgmywb6oLOznTG6fn+OLyolB2Z100nu2ai6Qjy9jb0xtRFHcQda9vsT8q8vDH7+/FwfKLhA+UX1FbXMCmu0fgwpXkxpIFKpGgTW60CkxyCutQXSuFX1JU9h7puTXIL33HHieU8Ca7iNjLLL2wFgcup0NhzHI2Z+1dxD0pwuojScxl1nUM9zoKRdPVTEF7Ggzc92Dn6RSWJEJxQdkHDoKk5P+wd9dhVe5bv/D3s2PtvZbLLkpJAwsTAxUFRQURRMICW7G7C1sUxVYExQCxAxEbDBAVUUBAGumWMFed7xlj3ExE9nre8/5z9vPH0ev6XBPmnEwmOON7/xi/MUq+SBcK1QpxdGIpYpNLq0soIuNLcJ1C8dqDz0XfcafQZ8wJWM8PFFM3hmLO9keY6nZXuG4OxdwdYRi/8o4Yu+I23LyiMHfzA9Hf/hjaDd6GzkM9hH6PeWjZbhwF7WWi64ij6Ol4GpaTz4js2Hj8XpiKytw0sXLxUbSiINyu+2Kh3nIIHcRq04Fqc0U9ekw0bgu11tZCr9tMGPZajK6ma8VS+h1GRGaihH52FV6Z5yDMeJU4NrVMfkfye6LQXPb+1+oV5NJK5f+N/w9ls2JRBaIi3yDw8nVx69oN3A2mN/fbIeLBnQeIePwUT8OfV4t48hyvnseI+Jg3SHqTgvTUDPE29S1ys/JQWFAk8vPykZOVg5zsXPHwVigF21jlz+zyp3b2dVMXr/ZmxKfh0Y1QcfnkFWxevB1xz2JEXloeygopJOWViE8fPknA++23X0XNVeKagVh1+xKKKUjWXLHlP/GrSg0SY5OQHJ+KimIep1yMz+/eoYBCUPSrNyIxMQ3lFJB+Ka9UfPqEMgrlGSmZIv7ZK9ls9m8BuMaKMK/EVrdZk24QqmCsqF0yUXul+JtNdCpVAVgpffj2oEAJwgr+evn+dN/Y54r3+FDyDpWFJeI9ffyh+B0KE9JFJq94Z+QgMypOfCzmEeIfUJadLcI83XF1kRO8XMzE4XGm2Odkgs3W3cXywZ0wb0B7zDBpLaYSu6666KuvKTqoN0PLRo3RopmG6NSuG+xsRmP7ZnfBZQdJSW8olBaJsvJSCsXvJCizopJiZOXxGPocUUCPubw8bo+WI7hjBJdJpKSli7dvMykAF+Ddu1LBG+V4JZiDMCvl88sogNNts1IK4yUlrETk0fW5rCI9I0PExMQgLDwMDx+HiEvXzlMQ3oMdu7aKufNcMZTeN1q30Rf853oeJaym1lS0am2Avv37YrSzg9i4cz0CLvni9t2r4uHje3T7oQh9eF/cuH0D/ufoINPnsNh9YDc279iMtZvXizVua7Fi3Ups3LpebN6+kU43Yucud7Frzy7s2u2B3XsUu/Z6yIrv4cP7xNGj3F5tH4547ReHDu/H3qpVYbZjxzZs3rwR27ZvFitXr8TChQuwaLFi8ZL5mE8Bfc5cV8Eb6FwIt1pjjk52cHEeg2nTJopZs6fL6OZJk12E5bDhlE90KWQ2F906d4G+fmtoabUUvOmri1En6OnqivpcBmrav7rEop1hG/r98l9elRLRnr26y4qxatO9jo62hM4uXToLnnzXu08fWA23FtJmrdbqcHUIrgrC/Lm5+WDRrbsxNDR5wmB9wSvEqvIIVfituQLMq8Q1P1eFYl6pZhz2mzVTx0916gq+rGb4VQXgmmquCKtWen+kHMaUcPo1oMpqca0gq3ST4HZp/LVfu0nI6rKE4m9HObOvl/97+K3ZJaP2Zf8R3wPx90D8PRB/D8TfA/H3QPw9EH8PxN8D8fdA/P90IOY2Z6qibhPj3rAwN0ejBo1Ft05GsBxoBtVoYh4zuGLBHKxZOFdMsLPDjLHjMNHeUTjbOWCa03i40ClzpkDMvYedho0QNgPNYdmvH3oZdRQ8qEJGNquW8qtKJnR0DISlxTB4HfDCVGdXsWzeVkyfuB7DRuwR67Y8wMWLcQi6Ei+i6c05JOgBMpPShc/eI/DZQ0/U3btFwDFf7N2yBed9fcSc6VOkLcucWZPEPDJxrBOcHR3EscMH4LltC1YtWSiGDB5M90sXOtqtxNTJkyiYH0PQ5WsilgJx4KWL8PM6LOZNGgddTXVY21oKTS0NGLTmUY0NBG+I+JGeBFzXxDjwtqZg3KqtQq+1HnT1daRUgmm20JBSCW61w7htDA/nMOrSUXAN8b/o99mYzmctmjXBJPNucBs7SDF6ANbbD8TmcYPENnJ41kh4z3MUZ5aMw2UKxDc2zRAhuxci/NAKPPNaK2L8diLlqg+KwgPFL+mv8HtFAf7Xbx8V/+tXwmGF+7f+ivSndzFx+AyERmSLj594kMcf+PKrIjXnPXIpBHMoZnklH5HMAzNe5ItcCmWLNt7Gdp9IERadhzvPcmAx+bwwcz6JC/cycPZ2ujh46Q3m7QpH/xmXhOFgD7QyXgHHRdfFpfsZUjqRlssb6j4o7diKPyE1q1K8psui4rnXsUIpoyjF6cAk4bA4GKOXBmOeR7jYfDIWB87HwzcwRRy7qrRs87uRKvYFxGHJ7ifY5PNSzNn6EJ2t96PTkJ2ig8UOtLfYiZ4T/MU4CvSL9z2X22W3br7GH+8ycfxwoGjZ2hktWtmjqZa5aNC4A9Rbj0DLjmNEY81eaNVjBjoN3iza9FuFDqYb4DTzrEjMKMPuQw9QTiGYcRiWsPvhV1FU9hkxye+QRP8H7E06h2Meg62UuKRk8oHKJ5TT1zAuo0hIKkYhhQgWFxmJN1EvkfRKkUJv+Onx8XhLoYRlpaYgOyUFuRQKWEFuHooK8/GupEiUlRbjfWUZPr6vVHyoxAfykUIUKysuoOD2BUppgxLceDPWbxQOWfzzeLx48BzXTl8TNy/dwoZFW+G9+7goeFuAktyS6k10HGJ/+fRLdV/iktxiCZh//MEhWAnCNYOhqkRAhetrJSz/qtQA57zNwZu4ZPq5CsUHCr+fy8okZLHoVwnIySnAh/IK8UvVRr7op7EiNTZBNqap1AzerDoQV5VHKD2Gq2p9/0TtQKyEXy6XUIVgDsBKWYTqZ60uh/hDabEmbc94I9xHpTSigoLvu7wCUU4qKESqAnElhWGuE86ngwKW8TRaNtLlxiYK3lT4Gx0EpIbcFvc3zUPgIgecmmIhTk4yxzHnfjg+ob845tIPh8b0wUGnXtV2jDTGiqEdxZyBhpjQpxWsOrQUPbSboUXD+mhMYYbp02v0qFGO8PE6Kl4+f4bc3CwKrSWiuKRQ2qNxmQPjeuO8/DwJrqywmDfC5VW3VeMSCf48422WyKdwzCUZqhphZfBGHgq4lIL7D9PluXRQV1DArdcKpf6YSzRSUnnoRzJevHiOqJfPpZUZO3r8CA4c3otZc6cLewcb9OrVg4JbQ/FTnZ9k4aq5WnPBgdjQsB06duogBpr3w/gpzti0w02cveSPh4/uIfIFDxGJwKtXkYiKeoaIZ+HiXsg9BAVfl97B7HTAaRykoHz4mJfYTWFWQrCnwtNzNwXcvTh4aL/i4D7sP7CHTvcKz7274eGxHe7uW4Xbhg1Y57Yeq9euEctXrsTixcuwcNESsXjpYqxavaJ6FPVi7j+8aJ6Ma2Y8nnmknTVsba3E6DEOmMot16ZNElw37DpzGoXjyaJrlx4YMGCA7NVhWlotKLPoSZBlfXr2RCOuEe7eVXDb1S6djaR2mPHsgN49jenjxoJbrrXU5pIGpYShF13GgVhVU9yihTYF32GwtBqu4PphYsFlElI3zIGY264pBg/6Wi7BevbsA3WpIVbylWoDnapmWBV8VVT1xKq8xL18m1MO6NGlizA3NUV/k35Qa6Yl/vEPpUZYFXj/TO1ArAqy7J8/8LjnrwGV/Uj3oWaJRE18G1wyUfP6HIhVt8+X1b7+3/7656UT/53/60GZd6oaG3UV/Y17STNrA10DMdbOFv1794Zqlre99VB0M+oCC9N+YqKDAyaMssckx7HC2c5eVorH2YwU40eMxNjhthhlwd0lrGBNgdi6X390b28o/vFDVb0Lh+Kq//AGFOR0dHkIhVKj07hhc8yevEhsXu+BBTPdsGKep3B28aAHIPcCvikO7TkGn32+yKAwzE57ncD+zTvhu/+g2Lp6HaZNmo8RYxeLZZv2wdPrGM75+4pNG1ZjwSxXLF80X2zfuA5Xzp3CFOexYkDfvphJT7y+ffqKbl27ow+drlm1VryMfEmB+AIF6YNCvVkzdDI0hKlZf8Gruu07toG6RtMqzeQJxnVJrG69ulBTV0NLnZZC10CfAjGHYl2hoaFGQZifrE0EB2LeGdvXrJ9QAvG/pLMF++Ef/0SvDvpYaNNf7Jk+Atuch2KDo5nY4WwBzylWOEShmPktHYuLqyfhyvrJImjLDNzftQAhVV4ec0N8gCfeBp8S5S/v4LfcJPzxsUTBq8V/cKBQAvFv74vhRS96TmPXiRevi6TTBE+3Y7winJpdIbXELCv/PSLjivE8rlA8iyvCKo872HT4ifC+EIPHr/Ixa9MDYTTSFyeuJcEvOFVceZiFA5cSMH7LI9F/6kW0NndHu0GKmdsf42poBuIo6DFeoc7mwFeoSKeAzv2JXyWWCB4EEkWBmOtu2ZlbaThxPRU+VxIF1y9zCPalU3Y6KBnX6PbvPMkVIZH5uPows/r6Z++mY+bmUBg7HBPdbb3Qb+JZ2C25LuYs98TYaRvhOOus2HfwCYpzMtHLZLbQNXSGuu5wNFLrJbSNJqJN3yUUfJeKtqYrYTPzIuznXhMDxvnB2PYQNh2IEHEU+LPpd1xa/kVwHTGvElfyKjHhDYevKRAnZ1UIXi1PzCivFhFTKBP/8ks/CR5qEvYiD6FP3oq3yemICn+GmOdRIj4qBokxcUiKeyPS3qTgbUoqsjMyRF52LvJzc1FC4YGV8spqOQfij+JD5Qd8eM+bpj6JLx/fg1eGvwmpFFzfl1aIN5HxuBEQiGOevuLWhdvYuXYvls9cK+Locu5DXJpfIkryi5EYlYDYsFeCA/NnDrpcX8thsUY4ZDyJTRWEVWFYVo0/fxa8WpqRno3kpAxRwoM13pXJMAqWm5uP+LgkqStlv7z/gN8o6KbHJon8jByZjldzcpwMzKgKyLwqq1oplnDMwfdPNsP9t/i6VavZqvrg2gGYr6faJMffv5J+prL8AlGSmY381HRkv0kWOQnJKKJgWEYhmFUWlaI8uwCldHDBCuNSUZaViwL6mdmv9DsoT0/Hg91uImj5eFyYPQJ+04eIgOkWODtjMM5NH6SYZg6/SQNwwqW/8BlnggMUio+M6yt2OfTCVtsecLPuJuYMbItR3XRgoq8uWqs1gnrd+lBr2Ez0MjLGIteFOHvGX8S+fkmBNat6clxRUTGdFqOgCm/E489VK7wFhUXIosesKgDn5Sm9j7OyskV2djYF5bdIS0sRvCGPV5lVl7/NzJL+xTHRL0XUyyg8Cn+AsxcCxJnzfti4bQMmTXMRFkPN0aJlS6WzAalXt578ldF8sKmYs9QVoyeMRo/exqJ1G96cbYhOXTqLfv0HwGm0EzZt2SQuXjiHhw/v0/vUUxHzKgqxMS+luwV7TudFPAkDd7pg14MCEXDOH8dPnhAHj3hh1979FI73ii3u7ti4dRs2b9kiNm7ajPUUgNdv3KDY4EanbnDbuFGsWbeOgjG9V65RrFu/GmvXrsLqVcvEsmWLpLvE9BmTxOgx3OXCkg4MbMW48U6yaly9QkxheMaMKZg0yUUYGXWGhnoLaLXQEs2aNYW52QDUb9BIdKGDhvaGvNnOQDSmwMu9iY06GQkdbW2pG9ah917G9by8iU616Y0DMr+Ht2ypLQzo/bk//Y6tuLPEcO7EYUVB2IpOrYWFBQfhoTAzGyx4VdjMbFD1CjEHYo2WuqjXoLHgFWLVKnDNleCagbjmqu8PFHib0uOhV49uYvhQCxkY0qVjV/Gvf/34/xmIVSvCNc/jUKgKsz/88DdRe8W25tfXDJN8n5Tg+zUQ8/lfa4r/fUW49nVrX1b7vP/rdLS0YE+/SNaJjjYbNWyKQb1NRAsNLTRtogajjp3E2mULoKXREqYUkpmzrT1c6Ah8PJ2yMRSAR1MAdra1E+Nt7DB62AiMNB8qbM0HyUCOzvTEZcpGuq/F3rL8X69e9RGbhpombC1tcOKAl1gxbzVWL1qLjas2idmTF2DlfDdMGbNAGHftj2GD7PHmZZzYs3UXTh85hrM+PuKA+3a0N7ZH60HzRNuhM9HVbhZsJi8UO/Z5YvvWLfDY6S7OnPZF6J3rGD/WSejr6mLaZBfMplDMxo12lML4Tt26iwkTnGFjNRT7d+8UQ/qb0xFccwozfQW3SeMnqWaL5kJXT0uOPFW7hvkBz0eIEnSJuoY6NLU06bpaonlzXhluUt02pSGf8uaKzu0Frw5zIG5Qv57gFfiG9EI62qSz2DZhGPa62mC7i4XYMWEIPCYPw9E5o8SpxWNwZvk4XF43SVxzm4Jb7rNxZ+dc8fTwMsScckfK5UOi4MElfE58gj+K0hXvS/D7l0r88Tu3kyK/VCL32X2MdVoqXJecRNLbiurAUVr2GQnp5cgp+Kgo+oAXb0qQmlMpgh5lYP2em7CZelis3heG56+Lsf7gc2Hicg6LPMIQSEGYnb+fgV0BCVh19KVwWHUXXZyOo7XxctHFeh+mbXyASyGZgjtKxKWVyUo14017GbmV1ZPtYnjFmALxq6QSEUMB8Ul0IW6F54jAR1m4xCvUFJTZyevJuHA7HRdDMkQQXX7vWQ7CXxWK64/eIjg8G4t3h4txK25j9s5wjF1yQcyYR28Ym/Zjtecd4X3xDdZtPA+9TtOEYZ+laN1jDgx6LRZdrDzQy+6QhF7W2+4wtnu/pIOHSDF64Q3YzwnETu8XIvpNMXKLP6O04hfBJRHcfaOYPya8Ys5dObiMhHEITs6slJHPjFftX9Lv7G3+B8HT/cLp9/EioUSkpOXi0f3HCHvwRIQ/jMDz8Ei8eP5KvHwRS2/ACUiMTxYpielIT8ukIJEv8vL4T9vv8J6CMPtAYZBPS9+Vi88fKqpXhr8G4j9QXvxO5KRkI5gCsf+hM+I0ObjVC4unrRKPboejJLcIgaeviQs+FxHoF4gECsqMJ9V9pqBZMxBL4P2NN5r9KiGUN6bV/P4cIj9Q6GUc+HgQR3patnibmYuy4lIpnWAf6fLsrHykpmaJjxxy6Wd8HRomSih0fqisVEJxjWDMnSlUapdScJkEj1hmtQOw0jmCw2/VwIvflftbHYI5AP/GZRdKu7YvHOorKmVzHKsoKpGgW5KVI4op/Ba9zURuUqrIep2EvOQ0FNLPynjMdHkOBUv6f2W5ka9RSYGx+E2q+EQHPa8vnEXwyuni8nw7XJpjjYAZQ4TfFHOcmmiKCzMtxOVZQ3Fm8gCcpWDM/KYOhO/Efjjq3FccGGOCvY59sHOUsVhvbYQlFu0w1lhPDGuniUGtNdBZq7FQp/eW+j/9DO3mOmJQ/6HYuM4NgdeuiqSkOHr8cds0pQSipKRYSiw4FDPeFMeb5/ILCkRWdo60UuNVX8ZhmDfjpaamCR68kZiUgLh4HgISh4Q3CRKCwyl0Mi5juHrjCq5dV3j5emHZysUYReGPte/QQUokVF2WeLGoVSt9OI0dKWYunI5Zi10xeeYkwWUT5kPMYdS1i9AzoODXug06deos+vc3g72TPRYuXih27NyFk6dOITj4hgh9cA9Pn4Tj6VMe0KGIiAiT6XQsJCQEd+/ewc2bN0XgNXoOnT8HP79T3zh23Ft4HTkEL69DOHx4v+BVZF5RVnWZ2LN3Fzw83LFt62axcuUyLJg/G1OnTRBjxykDOZxGjxK8yc7ZeQxcXacK7jAxk0Ixd6NgvXuZ0PujGkz69BJNmzWDnp4OOnfpKFq3UconmjZrLtpxOKZQy6UPzIB+X/y+261rJ8HvyVxKoamhKTTU1aX1GgdhxivKHTsawZI30JGhQ60wZOhwDLawFLwqbGZmATMOwtzmbvAQ2aQ/0EzRp08/qGtqV7d95cWxmivA7NtNc0pYVgXixk0aUMhvh56UPVhnzmkdOlHoNxK8yPZnIfjPzmM8KKNmoP3r37irBJ+vfL+a4ZVxXqsZWqu/rur2VJepzlfddu0Q+t8F4v8R3wPx90D8PRB/D8TfA/H3QPw9EH8PxN8D8fdA/P90ILazMKfgqS64OTW3Hpk2epxoSqFUR1sPfbr3EHXq8AjDRhjcr5+QMDzSAS62Cvth1nC0soWj5XDhZEVheNBQDDc1V/TrDwsK0h309QXXuEgg/mdVLTF9zH+aaNK4mRg11AbPQkJx7+pVceGYL26cv4j1S1aJOdNmY92KNXCdMFOsmr8KHm478DD4nnh8JwQB3idwaKeHWLNwMQYMm4oOVquF4bDZ6OY4D+0sxon2FmMwau5arNu6Q4TcvYmwUAotrjNEWOh93Kb74bHBTcyhUDxz2nRYWnJT7mEY1M8U58+dgY+Xl9i6aYPU+nbvaSy4Xpv/LKKh2Vxw2QSPYOaQK0G3IY/c/VpDxGGZ+yTyE5txXZMqLDNult2seTPpX8z+xW3X+Ot+riN4VDQ/KVprqouldmbYNcUKu6dYCo9JQ+E5bTiOzrMTp5eMxckFDri8frK4sWWmlE3c2j5LPNg1H5FH1+O1/zaRdfMUKqLu4de0KPF7QRp+Ly/AHx/fid8/UhjIToS/9y1hPHg+Nu2/V12Dyhvt3lIAzcz7IHjU89O4QgTcSBB3nlAg3ncPHfsvEtzCLDqhEMcDU8ToZbdgt+AGLoVmiJsUUnefS8DWU6/FvN0RsFoYCIMBW0QrUzcMm3oB+8/GCy4B4M1zPM6Z8XAKLuPILngvMrhP8dty6U/M4lLf0fXfITK+WDx6mY/HLwso7CoevsjDYwqJNyn0ssuhb3HhLgXjh5kihAJlWEwR7kRkiXN30nHzSQ62+0YKS0c3TJy9Byv3PBYTVt2ByYi96Gu7T/SxPQxjK0+Y2HsJ65nXYL8gCFYzLgve2HeDQvjFe+nC/fhLLHR/jG1ekeLe01zpB63aJFdY+gV5FIIL33F/5i/0M3+UmmnVoI7U7Eo5gOEDAcbjsCNiivGKQjHzowOAszdTcS3krUjPKcOTR5EIf/RcPAl7jogwCsSRMSImOg6vYxORmJAsUhLTkJbytjpAZmTkEq7DLBA8vIJDcnJSlijOL5IQyqFU8bvU0pYVlYqK0gpkUSiOfhItbl++jTNHz1IYXin8jwRIqcQR98Ni/8Z9uHwyEEU5PC5ZaX/25cvXTXKqwC39fQmXHHwTxn/nwRy/ojAnT0hLtffvq0sikpMykZNdiMqyMvGpvJwCfmWNA4BiaZ+W+jxGfOZa3S/cUq2qv3CNDXZ/ttFO+hDLCORfxb/VC1eXStTE7daUkg++Pt+Oqo/yx/JKpUSisFhwIK6g/4OKAkUlhXu5vKpEopD+r7ITlGAs4Zj+P99lF+Adnc+K41NQyXXGFKZZFoWre5uW4jK/xpDzs6xxZtoQnJ5sLvwmDcTFmUOIhbg0i4LylIE4M2WAODGB64spEI/vKw6N7YuDY/rBw6GX2GTTBSstO2H2wLZijLEu7IxawqKtpuit2xTt1RqiGb2usno//ozG9Rqibav2YtyYCTh1wgdJCTGipDhPNsqpAjEHZD4tKubNdAX0/5cnwVgZuMGPXR73nILElCTxKiYGL19FITrmlQh9EIqbt2/gbshtEXApAOcun8G5i/5i195tUirQ26SP4JBWn0J8wwYNhRq/1tP7s52jrRg9cQwmUhDmYMwWLJ+L2XQ6fvp4YTnSCiamfdCuQ0eh36o1aYO27QxF1249YELvycNsbYTrHFfs2r0TAWf8RFDQdYTcv4Mn4Q8UT5Rg/PjxQ/Ho0QM8CA2BarTz/bu3cec2heXgIBF0nQ48A6/i8uVL4tLF8zhPATrA/7Q4fdoXPt6HsXePh3BzWy2b6SZOGifGOzsJ3kzHnEbbS8kEb6QTXENMwXjMaEdhbmYOfb1WMuyCmQ8yl/dJPT19we/FPEiiW9euollTXpTSk43yrIdxdymLUNX0ampqSO0xzytgBvoG8n/CI42ZOgXk9h07VpdMDBs2XAKxOWUelYFmgyUEK0F4MAYO/Pp5334DoKbeAo0o6zBV27T/vmSCW6/9CNVoaQO9FrJ5cEDfXkJDXUtqmzmoM85XtcNvzQBcm+pyZaPc15pi1ffnwFwzPPJlNUcvq0Jt7a+veVntz/+78/7HWPTrQ79kbgL9M9q1aQVnO0vZ2CYdENQ1YD/cEiMth4qffqyLjq07YYrDaDHWxg5jR9jJqrDKyMHD4EBhmLmMdIQtPSiszYaIEQPNMLhXLxjSg5L9vWqFmIvDGRdsy4SYJupi/pQ5eBpyH49uBouIe3fx+PYtXD93UdSpUw8Ow0fB94CXiHz8CL779mGx61zxKuI5KspKcefyRbFkxixoG9mhm/1W0WnkEnR3mo8+4xQ9HFwxmN44HeauFhfPnUVSdDS2u20SqYkUokJDcfHUCeF7+DDU1NQwb84scfvGDdwMCsLpk6fEi2fPJNCa9O0nlJD7M7RaqInmajwdry5Um+y4PkzZYcq7TZUdp1zHpKohU60Mq2qI+WN1+v5GRh0F//74e6ieMP+g3+nPvPr8k6JnG10stu2NnZOGiB0Th2DXVEscnGkr/JaNw2W3KbixfaYI3jYbwVtdcdt9ngjZuQDhe5chymejSDi3H7mhF1D5KlR8SaZgnJWA34oyxe9FWfhCnz8MjBAL3C5h+HhPClPvRGHJJ2RUrUSytJxKClz5WOV+TfhcfI5ZG4PRzmyDmLU5BGEvc6SOmC30jMCYZTfhcSpGPIwuxIWQTHgHJgv303FYdCAS5tPPinYW7jCyOYCl+56KG4+y8YwCalRCqSK+BInpFcjO/yAKS3iIx4fqyXhcXxxHwZhDIuPV7ai4EjyPLRAvKCRHkZcJJeLpax5okYcrIRki4GaKrBqHUjBmdyigPnypfMz8b3GIjcbkNffEVu+XcFl+G44Lg4TToiDYzL4Kl1V3xWLPpyQCUzaEiM30tZcpCF9/mCXOUuAOuJkmtc0sNDKPDjwqUVr+WRSUfkYeKS5TvKWDkuf0O0jJqhC8OpyS/R6xyWXiEQXiMPodR8Qq9p6OgfeFBBwNiBPxSSW4HRyGvbtOiX17/HDgwDkc9roovLyv4MSJQJw4fU2cPXcHV648wM0b4eLu3ae4f+8Zvem+EuFhMfTG+wqRzxLF2/Q8CcHlFe9Fadl7fKCQWJRVIGQFl0Le+/IPIj8jHy8evcAutwNi74YDqCwtx3mfC+KCzyV6fidVh81PvGJb1WlCRQZdVAVwDsH8TxWYOVS+r/iIlPg0UVb6TgKxqgtDCQXKhPh0Clal4lPVRjrVCnhmZh7yKFhWcPgkv//Gk914dZo7X/D3/u1rr2Gmqh2uqvFVrezy9WSD3S9K0FUF4eqNdTUCMFPdTvXPXbUizRv93peVS+hlFXSfORS/f1cuPlFolusUvxNldIBSmpWP/OQMkU2huJBOS5LTFRSWP+TloyItXTw77Ing5VNxYbat8J82DH5TBlPYNRf+U81wYcYgnJ8xWPhPHYgTE03h42xSpS+OjO1DTMTBMbw63Avutt3FGgrDy4d0wFwKw2xy31YYb6yPER21xKA26rCiUxP95qJlo/qoV6cOGv5chV5vW9D7jlnvQWLx4lW4cf0y0tOTRGFhgWysUwZsFMrHXHucl891xSSPV4kzEPs6TkTLoI8oBN8OFt70nnH28jkc8DkkDnodxCm/41iwZJ5YuWYx7MfYQLOFtuAe89w9gLshMG3dlhhkaY5RY0dVccC4qeMxdc5ksXDlPCxduRCLV8wXcxbPxsJlszF73lQxado4CtJ2GGA+UHTv3gNtDdtBl4IyM2jdDh06dKHze4sBA+k922YUJk1yFStWrcQOj904ecJXXL58HoHXA3E98Jq4xivtFICvUxBmQUHXEHzjOp0GimtXr+A8vaf6+50Ux48flRXjrVs3itlzZ0r/4dFjHQVvquOVYRub4cLBYSSmTZ9cPYhjxvQpUkvs5GQv2rQxRJ/evSnIaopWrVrJtDmuFWaDB/aX36eGBq/0qkNLSwMdO3VE8+bqgt9PtVtS+G2pKbhrg46ujsxeYF27GMkwD96sxzh09ujRE8OtbYT0HB5iSUF4iJD6YXMKwWYWQvl4EPqbDhRc481dJho3URNc81szEKtC8dePeY9VfckNzECvJYXyJmjfxkDwULOawVcVMmsH4trBuPb1f/jnP4Tq85o1wByAawZI7i7xAwVlVjvQytfWCrt8+ve//V3Uvr7q8v/RcMytz36uU1eMshqMCU4j8eNPdYUJHY325AcBHVkx3mi3ZekyTLZ3FONs7eFoZQPnkQ7CwXIEbCkQ2w+zEk6W1rAxHwqrAYOEJR2NDjI2hoGGlvj7P/4pgfhvPyj4Y/5PbaGhLTw2UBBduxbhd+6Kx7duIvzuHVw8eVrUr9sIF06cwMPrweIZHa0GBZzF5tVuYspYFwQcPYrYyEjx/GEoRjnORod+E4R256FoP9AJbczHCCPryRgycw1mue0W8XFxyM/OxvXzF0XQhXOIfPQQV/z9xJG9e2AzYiSFgFsiOTEJ927dxfFjPuJpeIQU6ffq0080a9ZEukS0aKku9A200aRpI5k4x/jJysG4ehNFPZ5Ywy+Kyi5Xvo7qMsbjJNXV1aCrqy04QNerV5eONhsKXiHmr29AX8vqk+HdDbDWsb/gThOeU62xZ9oI4b98PK5vmYGgLa7i1vbZuLFJORVbyZZZuE/BmD097Ib4M/uQdeuMKA4LQumLu3gf/1R8SnyG96/DcWjHSREUlo21eyIQGJIuOBBzF4MMCsIsNrEYV+6nYdICL9Fj8DJsOPgEw1wviHHLrsP3SgKSsyvF3nNxmLn5ATb5RIngJzm4SSHzQmim8AlMwQ7/eExYf18YO/ig3aAdGDHriuCShOBHmRSuC0QkBdjIuCIZ1sHS6T7l033MK1Vk5PGKKYV3CsYsKUPpxBAZWyTCowrxmAIul1WwxxRyH1KIVG2yOxucipNXk3Dp3lsRQgGVV20j6GvZk9hiUoDQ57nC61IitvrGYJ9/nNhMP+PKA8+x9VSsOHDhDY5ceoNNFIQZbyx8EJkrE/xYMP2+74Rl4XZYpuC2ctxJQtXmjjfWlfCAjnefRVbBR/n53xZ8qPKRDlIq8JoOAhjfPy79UAX42WvvYon7Qwn5jMN/bHwWfHwCxbHjgfA9EQQfOlVcx0m/Wwi4cF9cC3qEO/ci8ejhKxEREYenzxIQ/SpFvIxKxsuXSUhLKxDpGXnIzStFTk6hqKz4IIEx9XWqyEzOQkVJpbLKSjgU52XkyuY65n/IHyV5xYiLShAZSRn4/Fnp1iDhUzo3VHWO+INDKZ//9fPqFWM+n0MyXVZWWoY0uh2WnZUnmwC5tRjjAJmdnUevI8niHZdOUBD+hVd3eWX28ye8ehqHdwXFQrVJTvX9vgZvpZsEX87B+N8CcdUKsbRhk+upfA3Lyvl8PWVjIKsOxB8U8jlvaKxaMf5A4fhjpTI1TybncQmHajWZL686VQXowvRs5L1JQWlKhniXmIaKzGwkXD0nbm2cixtLnHHO1Vr4TxuCkxMHwq/K6QmmODbeBN4Uetnh0X1wiHiP7ysO03l7HHphp52xcLc1xibrrtg8optYPrQ9Fg4yxEzT1mIqBeJJfVpjZNeWYnBbdZi3UcNgQ3XR14BCRdMGaFy3jmhQ5yc0oNfLJvS6yprVrY/W+oaYNG6qOOnri+iXz+kxmCMKiwro/zcL2TncPSJbVolT0njoRqp4k5ggpRH3Qu6KazeuwfPwHuze7yHc9+zEgqXzMH/ZAjF+sjP6mvSm8MUDsLirhDKxTNVVaICFKeYsmwXXRYppC6Zj5hJXLF6zUKzZuBJb3d2w23Or2LJ9PdZtXIFFy+aI6bMmwWWqCxzGOYkRo0Zi2HBLmJoNEEbdusKgVRt6L9FX6OmjlUFbtKagzLg8oFv3nhg4aLCwsR2B8eN5QIarWLBoIdavX41dO7aI/Xs8sG+vJ3bu3CF27HAnO6s31S1ZvhTzFs7BpCkThMuEcbJxjksl2MhRtrC2pSxhbys4LE+fMVE6TTBX12mYTF/n5OQgWrVqK0FVU11T8PTZIUMGy0ow43IHbW0dtGndSkEHARxqeeGP6evoyLRaXV0dwYtO7du1odtRE/xey3/BVm2qU1NTV4ZwqFaIqzpMmJtbCDPzIcqqcFWJxICB5sJ0gJngDXnqGi3QuDFPzPs/B2LWtFlj+hk5lKvR/ddF506GaKmlLngDXc1AqVI7CP9ZKFbhUPjDDzzNTmnLVjuY/vCPr1+j3P63JRG1A2bNFeTal/3Z+d8D8fdA/D0Qfw/E3wPx90D8PRB/D8TfA/H3QPw9EP/J+f8xP/5Yh4KujkJPBw3qNYaetq5YMXMq2hq0hq6Wjpgz0Rl6LbQp9A4Vo4YOx2jrkRhpYaUYYgVbC8vqy0cPt5GRzXZ0Hhvarx/MjHtAlx5ITEomfvinnKrKJ/hFQK+lgZg9cTKO7d+D04cOiFuXLyLi3j34e3uL4YMs8ZQ+fxkeLsLu3MG9a9cQGhQkZk2ZAaMOndFaz1BYDrDA9mUrcfvsSbFspiuaNm4CNf2OwnjkZJhPW4nxSzaJcxduICczE4EXzotL/qdw93ogbl25LLz2eeLA/gMIuXtXpGek41ZgEI4cPCJCQ0KlBsx0kIXgJxX/mUbVJ5HDr46ulpRKMA6z9ev/TJfVFw35T3p0nqqEhV8clRn2X2lrf/0Tz08/0gt6g3pozOM9CT+Z6nDvyro8DpKuX6cO9DU04Nyvi1jjOBA7XKzgM99JnFs9BVc3TkfQVldxd9c83N9N4Xf3QnFn2zwEbZiO8ysniGvrpiNk6xI8ObBFhO/bjGfe2xF/9pBIuXEayTf8sNB5ldjo9QIPXuTiiH+U4PrhtOz3ePO2TIRFUWi88QYzlp0QddX6Sg3xltMxYrDrJSxyv49k3uxFrj58C3c6f9/ZOHH6ZhpCX1IAfZYvjt9IwyYKlDN3hIlRi2+is9UB9LDdJ9yOvJC2bTcoNLK79DWPo4uq+xDHp76j+1cpdbeMQzH3TU5+WyG4fIJrkBMzKgS3ansaw6G6RHA97qsEbuHGdbcUJqMLcO1hFgKC00Tgg0wpqwjnME0eU4jmYHmagi3zuZooof0ahXsWcDMVweFKOzd2nwL17YgcXH2QJbiMJCq+FK9TysRzLtl4TuE1UsH3l9us8WY6xgcjOcUfldZzJDP/g5SNcO2w4r18japm+ElMISLoNm9S0Gaz1t3Das9w2SzIAgIT8eBJOk6cuCE4AB8/eQO+p2+K0wF3cf7iQ1y6FiauB0fg1p3nEopZyINXCH0UTSHiteBw/IJCcXx8pkhJzUVGej5KS3kkbrkEsJjwF7h87IK46nsZN87cQFZqtijKLcS74lLEP48TMU+jUZhVWF0z/MsX1dhxDrrKhrOaVGG45ga+r/XLvGntD3wuq0BxToHISMtCYWGJhEb2S2UlKssr6D5nibTUTHykUPkrBU/G5QvpCanI5YEk5H1ZGX6t2rjHlPuh2hCn8nt1EJbyBw7xqoDMfuUQXNO/B2JVyYQK1yEzDulfPtYo0ZDzf5FT+Zju88cPH+RnYF/bw3G45lrkDyjlzXdJqaIyMxd5zyMRtnuDuL1qMq4ucMCJiWbiuLMpvMf0xSmXAYJbrB1xohDs2EsccOwNz1E94Wmv4B7Em6y6YOPwrmLtMCOsGdYZq4Z0FAvNDDHb1BATe+qLqb1bwaVXK4zq3FIM76gB89bNYdpK0UevCYx1m6Jlw3qi0c8/SelEY3pdZU3r/Qw1ev3lzXislbouvc/Z4tD+/eLpk8fIeJushGKSlpEm7wG8mY69io7BCwrQUS+eictBl3HIZz927dkhZi+YiVkLXDGBgjAbZjlIQpzq9Z5f6xs2agKzoeZinYcbth7YDjc6ZUvclmH5phVYtXmlWLtlLTZv34BN29aLlWuWYe6COZizUDFj7nS4zpuO2RSm2bR5rpg+dwbmLpoj5iyaiWlzpsBlhrMYNcYBQ4YPhUn//qJzl64w7NARugZtFHqtoUen+vqtRJs27WDYrgOMjDopunRG95490LNPH9FvALeLG4TBQ4aIQfSx2aCB9DGfNwjWNsNgY2cNm5EKB0cbODiNlLphpd0a9x6eRqF4ipgxYxomTnDGCGtrYdi2A5o1U0OPbt2FQatW9H7aSPZFsaZNmqKtYVt6j2xcpQE6d+4ETQ0tYWCgJ5sXjbt3EbzIxHXCXMbJmvFmPDow6WvSR9Sr21B6EatKJjgMD7YYVl0/bGY2BAMGfA3CHIo5CPftZ6roawo1dW4Ppyl4WBfvM/q2bvjbz3lhjBfWmD5lhw5tuTa6kfgaUr+qHXhrUgXir4FW1RaNw6hy3j9/4NIJDqpKYFT6CitqB1ce9/x3uY2vX686VXwbPvm8f/zt27rk/3Gt9XSxYIqLMKCjwuZN1dGHHgysYT1+EGhgcJ9+YsOSheAJLpb9zYX9sBFwsBwJu6EjhC09IIb2H0hB2UqMsbaT0KwKxHaDLTCwR3doNW8mlBCsbKZj/+RNdXRUrq2lLZbPnIXpY8fBfe0qcXLfPlygo/Tj9GLETh3yxvMHDxATES6e3L0nQfj25cti9aL56NG5B7p26Co01bTQxsAQq+bNFqcP7sWZo/sxxNxc/PNfddCybTeYO04TIx0nIjiQAvDVa+LKGT/6vvtw7Zy/CL58AU/Dw3Dv1i2RkZqOa+cvYv/uA+I6hfP69II6gJ74zNCwDT2BNKpXhHljna6eNjS1movGjXl1mHseKmG3Xv069KTjGmIOygo+YFDVfPOKMDcO597FjD/n4Kt6QeWao5rhmc9Tb66OoQMGC+eB3TDfshf2TrcVQVvn49GR1XhxcruI9vfAkyPrEbJngbjsNhHH5zjBY7y12DV+OHY722Kb43CxxcESh6eOg++8KeLcirk4Pn8arAdNFlO2PcLQaX6YvOS8eEIBLp2C16s3JeLC7QScuRGPMXO8RDNtY5hYraCwlSWGTQ9A75G7cP1xluAVz0OXEuF+Mlrsu/RGujucu6u4Stc5fiMFW0/Gijm7n2Dk4mC0t/QQtouCsNz7FbyuJIrz9DW3nmTjUVS+eB5XLCujKdkVIl2GeXySVVXGvYtVAyxYcmaFDPeo7mPM9cRvuJ9xqXiRUCx1uIEU5NnZW6m49zSHQnGx4Prj0Bd5shmPXX+cjVBe7a1awQ56mI3zd9JxJeSt4KEk5+5kUMjOFBxYY5NKZfMf4yEbr5Po/nAwJ9y5412F0oOYcd9hDvnZhR8EB2K+3ylZ74Xys5VX/zwcqh+9LETArTQxdt5V2bgXRd+Drfd4DN+zsTh75po4etgX3kdOw8fLTxzzPoOTx8/C7+R5cfb0RZw9dREXAwJF0KVbCLpyG8FBIeLWzQe4fy8ckRRkWWZaJiorKGC+Tha+bh5wX7AO7ovchP8+P+xdtxfHPHzF45thFFQLkRqbJBJfJSI3LRflRRXi82furFBjUxqH3Bqh95uODDVWbGue94VC7BcKvawwvxhpKZlV08lK8YVCMSt/VyaSkt4iP08Z/sG+lJcjOykNRZk5opi7UhSVfF2R5d7Lnz9Xh1uZNMerxVVhWAJxjTAsAZdPf6miCrZ8XhXlegr+mflUFYhVK8e/yiq0srGP66o/VbwX77l+mGuLi7i2uFQ22XHv5XfZuSInNh7ZUTHIfaV4l5aGmABf3NswRwSvcMaZ6UNwzLm/8B5rgpMu/eHnMlD40nkHHHrB066HYlQPuNt2wzabrmKjVVespxDsZtVZLB/cEcsteJqdoZjd3xCTjA0wuou2sOukCXs6VRlBnw9qo4Z+Bk1FT11FtxaKFg3qokmdOmhCr5OsOb3eqtPrsUYDhXxcrz40G6mLHkb94LZqAy7Rew17FfOCgnEGYuNfi6eRzxEZFYHQh/fE2asXcPSUF5asXC4mTJ8Ia/sRFJ4GCF16L1YWPJS+t7yRrl3Xztjk6Sb8rp7E6Yu+8PTaLTbu3ox1293IerFhxwas3bAKq9avFMvXrMAy+j5L6ZStJAuWzseiFQvFijVLsX7jagrRbmKb+was27QKazetFstWL8HM+TMwZcYkMX7iWDhOHI1Rzo5i+KgRMBtO7+kU1pnJgL4wNumJLt27C6MuRmjfqSPadeokOnQyQtcexujVu7cYMNAUgywoS1hZCDu6PQdHyhP0O2EjR1ljzFhHWQVmsjJModjVdYpwcRmPsWNGw9p6uGjbth16dO9B74N1RRf6ntylg2t/WUMeONa4Ebp16yIaUPjV1dGVjXiMN83p6+vJRjvG4ZP3CGlqaonORkYyIIU7RTG+PnfDsh5hK4YMtaSQP4x+Lt44N5jCLwdgJQTLinBV7XB1IO6nrBA3pYzFVCvENbtufVtDzAtcPLOAZxf8RCGecoNms29qfiXg1lA7BH8bgL9dIVY+/3ZlljNZzQDM5/1XFQ6zNQPxX/9S1ZmienDHt+H8b3/791D8f1Lz9v8jhvY3kY1XjMf+DTTpDVd6oLGf69STUYid2rUX9eo2QN2fG2D4QAthP4TC7hBLjKJTZkMPBit6INjQ0REbYz1SSinshlgJHsxh0ac3tNWaCw7E3F3imyOg+vXRtVNnscR1GnZtWI+92zaK+dOnYfOqFfA/elTEPnsmq8JxUZGCA/GTe/fw8Faw8Pc6pOzSrddI9Oneh44Sm1Mw5FVXDpiN0MmwPfoYdxc//sQvRg2hrd9WXL91FQF+Prh55ZJ4dDtYSibOHvcWB3duw5VzZ/Dg9l2RSoH4gv85+BzxFlcvXZSQ2pmejExPj//UogUersH4CJUHaKgCcp2f6siKcMOGXDrB59Wl69RHsyZNhL6uJhrQE5xLJRiPbdY2oIMYOoplvAO15oryP/+lPIGqSy7q1oOejgHq1msidOiId3zfLnC16Cl85o5H8Jb5iDyxXcT470KE13rc3D5LHJs7CpsczDCDgjQb1aU9hhq2wvAObcT4Xt0wb5ApltGLG5s7xAy23brCsI2pGDn3CkbOvoAlO+6Jq3eTkZBWhtuP0sVe32fYczIS7XuMEV3NJqGxlgnW7A8Rbfstgl4PVzjNvyyu309FwO00zNwUIniT3dyd4djk/UK4n4jGJp9orPV6KebseoJx60Jg7npZWC+4ga0B8fCj2xA30xAcniXBkkVSgH0aV4RXSdx6rRRvMiqRQqE3s+Cj4PKDIgqUHCRZSs4HaVfGGwVZDIXEiJiias9ji/CMgu8DCpbM73oKTgalVAdiXl2Oou8ZFs2b1wpwMzwT0TI5TtnEF59RRl9fiPvPc8VDCu18f+8+yxPcNSOavqdqhVdW0inQpmYpeFWYu3vwCGbGq8W5xXT/KdiL/I90n0vpZ6gUWXwe/Zy8Ssz4d/I0thiX7qWJqcuCcfH+WwSHZYllm0OweedjpKfyOOYUpCa8RFpiNNKTYkRG8mukvYlGRlKsSE95jaTYZ0iJixRZaXHIy3xDkkR+Fp2+TUROleL8DHwoL0L03UfCe4MnVs9YisUT54gdK93hvcMbmxdsELtX78Sj4AcIv/1YPL33hAJoJlJfp4g0khKTjPKSCvELty6rtUr8daX2axs2nsbIODwWURD8UlYuPpVXIi+3CBlpOYI7TXyurMSXCkVJcQnSUrNQUfFR/PrpFyQ+jsS7omJRkpOPAgr9BRlZopTbmFFArqBwzXjDm5QpqAIzb96r1XXi25VfPv/bz7+ez5Qw/LV0Qlnx5W4T0nGCAm85l3NUTabj1mu5CckkRRSkpKP4bQ7yk1NFxrMXeHP/AVJCFGl3gxGxdx3uuk0T52fbSDcJr9F9xUH7XvAZ0wfHx/UTR0abYCcF4O02XYQ7heAtIzpTGO4iNlt3xSqLjphn2lbM7tdOVoQn924lOAy7GOvBkcIvs+moCdtOWrDqoCFsjDSlbKKffhPBXSe6t2yMri0Uhs0bSuhtVu9nwavDGhSKNSkMM42G9SkY0+txPb4OvT5ziUXdJmjTuoNwdnFFwKnTiHj+ULxJikb4s0e4fP2yOHPlArbv3orZixcIx7GjMdDMjIKcoeAwzAseXyehaWLcjDE4cmqP8D3vg2MBR+EbcEwc9j2MA8cOYffhvcLzkCcOHdmHfQd2i527t8N953bs2OUudu/ZiT17Peh8d7F730547vOAJ53Pdu3aji3um7HabY1Yv8UNbpsoKHtsF3v278KBQ/S99u4Q27dvwtr1q7B45SLB5R8TXSfCwdlJOLnQ6RgHOI1zEs4Tx5NxmDjZWTFpfFWLORsxnq7vPGE07B1tBJdPTKSvUa0QT5niIm3WVMaNGwNHRwcMHTpE6OoaQE9fn35vLUQrA3qvo8yi6hox0HQAve82h662juDVXw01DRh37ybqN1Q2rOtRGGbqlFF60PsXd9ZiTZs1QYuWLaSzE+OOFWrqmtWBWEY1W1hWb6Lr118JwtUGDpKNdCZ9+wsOxBqaLSkUK3iFuHa5RE0ckvn9/OsYZi57qBGAOXiqPq4Vgv//4ECsGq7BVEH26+VV3+MvVYG4auiH6nrKyjAF4//6q/gLr/7y+VVqhuM/C7r8Pf7s/P+o74H4eyD+Hoi/B+Lvgfh7IP4eiL8H4u+B+Hsg/n86EI+3tQKPb2ZdO3SBlfkg+qXzsIi60opk0eQJ6NKxveC2a8adu8NukKWwH2oNh2HWGDXYUlibD5HNcyPowcC4LzG3YRsfpDBIAACAAElEQVRFYZgN6WuKPl07QbNpE/H3f/BS/7f/4U2aNIXVYDNx+8IZnPfxwpaVK8T+bdtw0MMDC11nCLelq+B39Bge370twu6F4On9+3j2IFSc8TqMDm3aYfmcuWLhzPnQ0tSurhnivn0cHOvSg53Jg15NG63adBKe+z0Q8eIwCvLCRFZyAlLj6UUu9Ka4EnAKfseOwvvQIfEmIQFXzp/H0cMHxJkzpySIdjLqKLipulYL9eoaoMZNGqJeff5dK6Ob+Unw4794Vjq/KP6MJk15jLUe/P1Piaz0RDiOtKcwXFdIvTXdZhPuUUw4UPOwDt6cx7hkomYgrks/qxY9AZs21xU/08GNWqNGGNG1rRhrbIQ11mY4Mc9OXFo7iUzAwWlWYu2IvphjZoyRnQ2FqYE2umo1xwA6ZcON2mFMr84YS8GYDevYFm3p+zVTaytcNtyH5fSTcF0XKPb4Rkpbs3thGSLiZR5OXY2Bpv4AYeqwCj/V18ew8btER9MlaNluNCwnHBOr9j+H17VkuB19ITzOxMFlfSh2nI4WXFLApRTj194WQ+dcRk8nL3Qcul10HrYNA8YchOOSy2LulnvYSdc/evmNOMtlF6FvqzeRcRjl0oG45FLxOvWdtCorpaDJ8ilcpmRxqzIFh+M3FGKfUhBmEdEUsqtKI9iD53k4eS0VgfQ9GA8Ciabb5zpdduZGsvT/5TpllkS3ydfhYSKMh4dwUFd9zmUSKW9LsXLtIRFw/iEO+4fC92KYiE8tRlnFJ5R/+FVwQOZALLXEJKvgkwwi4QEljPsSp9PPF5daLjikcxlJQFCycPeOQlA4l3FkiOmLr2LMzDOIf5MiEl49QmLME3rORIqUuGdIjn1aLTE6HAlRD5Ec/UikxT1BSmwYkmPCq4QhI+EZPe+iRHbKKwpwH5BLoZKFXg+Bl4cPNizfKhZOXAjvXT7Ys3aXWDdrFTxWb8f101dEQlQC3r7OwOn9J8XJ/adw3vcSSgreiV+4DIHLJTgIV4VhVRmFqmSCyxZUbcpyM3KQRKG6rLBI/Pa+UgJrTk6B4DHOPI76y7tywWUHXPuckpotuB43IyoO5RSUFaUo4UEWb3kIRo7USJdk5qOUxyFzf1+6zfL8oupNbFynzHW9qkDLvobdr4H32/O+xbW/1bXAfEq3WUlBXhRRIM6nQExBnRVmvEX2a/odRkWL9MhXyI1NQBGdz0reZiHjaSRir10SkT5bELJ1JoKWjBF+04bhuMtAHHbsIw459MRRpz444thb7LM3xi67HtgyvIvYaGWETVUfs3VWnbB4YHvM6tdGzDBpjSm9WsGpq44Y1bkFxnbTgx2FYMaf23SkMNxeSww1VMNAg+boq99MGGs3hpFWY7RXbyTaNWsAnUb1pXaYNaPXYHUKwlw6odKU93n8XEf8zAsYPykfM36N1dNuhbGjxwnvo3tx/cYlhDy6I076H8P6TesoDM8XtvYj0LNnj6re84Rui9+P+M/8rKNRB9hPsqcDzeXC/dA2ePsfQeCtKyL00V08ffoIT6qEhz/EvdC7CL59Q1zlNmfnA3CuSsA5P/idOQGvowfEXgrD2z22YqvHNrFz1w7s2LkDHrt3in3792L/wX04duyI8Dt9HCdPecPn2GFx5PB+HJBhG57iwP7ddLobezzdxY4dW+DuvgW80Y4tXb4ICxfNxZKl84XrrCkUisdW9x2eNJlQSB5H4ZnxIA5V7bDUD1MInjPHFTOmTxYuLuNgO9IGlpZDRc+evdCoMbckVQZ7cd0v1w7r6iqb5NTV1Ok9mMsclLalgwb0QwO6DpeBMgO6rHnz5ujWvYvgkgpu26bHm+2IdkttaGu3rG5/yq1Rexj3xPDhIwSPblYGcgwVpqbm6D/AHL1N+gvTqh7Eqs/7DzCjgK2D5hSqWe1NdaqyidolE6oS09olD9WBuFaQ/QaH1Rqf17wNCbx/+dpHWMJpjQCrlE98u3HuvygE//2vfxd/4VpjOu+vOm3E3zS0/y3gyv1SBeaqAP3NZTXu/7+F1f+Ef/zwr+o+h7MnusCKjljr1m0o+vXqDX1tXag30xRt9Ntg5cL5GGUxTEjwpRDMdcJsOIXhof0GYjj9xzMnKxsJwiPpQcKs6TyzXsZowr10iTKU4+tUFg7H/EBzdrQXNy+eQcj1i7ji5yuCAvwxf7or1i5aLnZs2Az3jdtwk5747GnoA7yMiED0c8U5H28snT0HYcFBYtnc+ejU0QitWusLpWm3njwJGE+LMTTsiJ4mpmI4Bf49u9fC+8AGsXzuDDjY2tHH+8VlP+404Qn/k6dEfFw8rp2/hI1rl4l5cyZJ/8M2bVsLHd2W0NbRqu6D2KRJI/qe3DGCu0fUk9VkXiVo1IjnptejkNsQA4dYIDTsoQi4egnWIx1kFZhxKO7QpRM9mdREHfp6NfXmcqTL+Amk6mUsNcn16tFRsQYaNGwqmjTVoqNSflH/WRjr68G6Uxs4G3cSM/p3hatpV9h3NRSW7VvRG0srjOxkKMz0tSUUD2lnIOy7dcTIrh0lGLOeerrQoBcoLb3eYugUb9jNOw+XReeE294QhDzJRODtFHH0zHO4LDyNplrdRRuTSajfxADtezqJaYsOQsfIGfbzLwiXFTexbG8Ejl1PESeDUzF/VwRmb38kPM/ES1/iPefixUyPJ7Cedx19XU6LLnYHMXn9Tey/8EZsPPYKx64mVa/A8iCKsFcUAim8Mt4AxwM3uO6XhZBoCqTJmTzRrRyZFCJ5093XgFnVrSH/vUjKqkBsMtf2KoMueDX2Pt2Gf1CKCHtVKL2NuVMF23PyRfVwEOluwavEsolP6dvMNck8IY7vA4ulMD3YYi09lvTEcGsH6LbtBw0dE6FlOBJGA+fBzGaVmLXkKA753MfVW9Hi2atsCthFdF8/VnmPRLrPUgdNwqLyZaPg+VupYqdvDE7fSIVvYLKYu/oG7Kf4I+xpqkiOe4GkuEgkREeIuJfheB31BLGR4eLlkxA8f3gLESFBIvzeNToNxtOQm+LBjcu4d+08Pe9Pitgnj2QzWiGFRPbgRigu+l7FwR1eYtc6T2xe6AafXcfE9hXuWDp5IdbOXi3eJr1FakwKdqzaKTYu2YarfoEUYj8KXiFWNqBV1ez+ptqMptT8cnj8UF4pwZVlp2XRz5WIvKwcwZPofqWg/K6kVCQnpstGO1WA/VxWSQH2MwqL3om46CSkx76R6XRMOjdIL2BFBX0N1xSXFhaLsmJeLX4nK8WMw6uEWFWg/ZNwrNrwpvLlAwfgqq4SfMqrzbzqXMl1wpXy/aX/MOPV4dxCCuN5QlaDU9KRn5giMl+9RsZzDsVvREVeAYpTUvH67AnxZN9K3N8wHZfn2InTkwfLyvAB+17ikEMvHB1NYdhJweftpZCs6hqxdlgnrBnKOool5h2wyKwdXE3aiCm9WsO5ux5GGbUUdkYtMNJIEyM6aAgrQ3V6vVLH4DbNxYBWzTGwdXP01GkqumgpQbi9WoMq9H7QiOuGFbxCrFYjDHMnirp1fqTXVB6wxN2ZfqQg/DPq/vyTaEABukE9Vk/o67XBiBEjsXjJXLF3rzuFzm2YNmOiGGZlgcYNeRCE0jee/2pZt159tNTTETZ2lhg/zRkTZk4Ws5bPwbZ9W3Hm4ilx7/4tPOXn0atI8TruJeLioxEdGyWe0Xvgw0ehuHv3trh06Tz8/E/gxEkfcfzkcRz3PYbD3l7i0JHD8D7GgddLHPU+Am9veo3wOij2U/j13LMLnp47xb59u5TJc1V4Et2RI/tx6KCn8KRQvN19EzZsWCM208HAtq30Prp8oVjIG/noPZU3yrEJE8Zi9Bh72DvYCl4h5sl0s2fPEDy0Y+q0idU1xRMnuMDe3g7W1lZCR0eP3t94c5wySa6zUWf6f6mHdoZtBGcLi0Hm1YGWN9bxKrIqIPfu3RMN6f1alQf4NjQ11dGyRUvBm+r4oMfQsK3gRSd9A3pPtB4hhllZSyBW1RBz+DU1/bqJzoQyBa8am/Q1FbxarNVCG+qaWoLfq1VBuHYdcc0VYtVl3AXizwJx7cCr6vv79WM+5dDLnSRqhmpllVcViH/44W8SeGsGRg7NXwMtn6dsvGN/+yuFZbNR+Eu3AQquKeb7xbXENW6n9n2uHUr/+ldF7fP/I7jLhKGBntBp2VJCob6ujlg5fzKa0ZEWr7KymRPGyZHSiEFDhAzd4BIJsyFiGP1n8wqxqkRi3Ag7WSFWrRiPHDQMAygQqyatKSUTNf7T6cHAbdfM+/UXo21HoHfnbjDQMxBj7B3g581DOPaLfdvc4bZ0LW5euSoi7oci7sULvIl5Je5fv47927bi7sULYu3SpejXtw/at28juOUcly60a9da9O3bFya9+2IEPbjZEAr9hm3bojfdZ8Yr5vynFy168LL7gVfw6NZt3Lt1R7x8+RLXL1zEXnrRYx7u6+VPNy21FTq63BFCo7orBK8Q8wuhKhCrukioVoz5ycclEobtOoruPXrKKnCD+vVFXXrB5j8RNaDwy/hrdVvpo1HTJoKfXHz9r23b6L5racnGAKauoSebD374x78Et8FrRAdG7TTVxABDHVh1bAMLQz3BgXh4h9b05mMobPnjLu0pLLcTo42NMIR+r/1a6QmdpvQCQr8vM9uFwsJ5F6yn+WKQo4cwsVwNsxGbMGXBCcXiU+hhtgB1GxuKll2c0LxlN9RtZCh+rq8Lnc4T0HmYu5jidg87eEU3MFVcfpSF3f5xmLrxgZi7/TH8b6dTKH4rdlBAtl0YiF6jjwpTFz8s3xeByw8zBXdq8L+VJhPkZIpcRA5uU2BVrRBz+JRRz1UlCZGvC6VzxLPYKnFFiHxTjNd0HcarxZkF76tLLLIpHPPwkThe5SUvE5RV5rv0fdg5CpkvKdSqukSsPxiBLJ7kV1WSwZv4MjmkVg0K4dXaR3S/HkQVinlLj9JjSF3+TMj4uaxDBzljRo0W/U0GoqexKbRbthXN6GCjcZO2aNC0k2iqZYI2RjboP2iumOy6C1t3nsWR0zdFQFAMHQhkwSfgtdh3KhpXQnls9v9m767Dqtq79eHrfva2lS6VkhakEaRFbN12YHd3i63YolhgYweKoCggKGIrNoKJYgdix+7n/o0x5poLts8+73/nnPe6jn98LhZrUQprznt+1/iO8Uj0GJGMLkOSkJCaL54/fYTCezdx/26+KCy4hYLbebh787q4cysXd/JvIP/aJZF3JQd5dGLPu3pJXLlwGhfPnJB2iuyXL5/lpfwXhc/EybQTSNx8ANvX7BLxq7Zi8dSF2kC8dFo0Zo6cgXnjo0Tx09e4fTEf0VOWiHnjF+BE2in8wmUDXFoggViZfifdG377E7/++rs2THKZwifeIEdhl3EZweOCRyi4dV+8LnqFX+nn44l17OXz57hx/Q6ePn4uvrxXJtmpgfvG5Tw8vVv4TalDSReIX78qwVYtkZByCQqtKh6zXLotGlPD8d8DshqIf5Ug/Pkjfy0exPFJGbrx5p34+FoZxsFlGlKqQYH4PQfipy/E60dKKH7z6Jl4ee8+nl3Px6Oc6+LZtRt4cPwwLq1bIE4tGIWMyJ4UhluLrb3DsT4iGOsiAkRcRz+xsn1dsaKdL5a09tFumptOJjWqI8M22ISGLhge6og+vraiq5c1Onpa0sW5uWhW2xThjsYIsTFS1DJCOIXgYBtj4WdlCC8LA7jW0BMuFIadKATXNlM4mujA3kgHNfSqCQ7FxrwqTEGXVeXNTJUq0nFWUbWyEmTVyaC69LF6TMr0OBRXkZI9y5oWonHjMHSK4K4JnYSTk5MsaqiT0qrXqA4nNxd0GdhVRK9dhFmLp6HfmAGix9A+GDpxpHYT3ToKrzz6+fTZbHHx0nnk3rhKwVhxPfeqjIq+cOG8OHHyJLKOHUNq6iGRcjBZBmYk7t8rduzchs1b47Fuw1oRt4bHLq+ikBsrVtPt5St5NVgTglfGYNUqCsnLowWXY8QsXYQli+aJ+fNnYzaF4OnTI0XklAmYQiKnjBcjRw/BkKH90aNXZ9G9Rye0a99KNtcxHtvMK8aDKSyzgYP60v9bFwnFjEsmWrVqKa3VmJ2tAwXQUPq/5A3qJtJazcDAUFsSwVPomKOjvdDV0YWnpzsdA/nVWmVarKurC9S2ppaWlvTxxrJyz1ycHeUcyxvZmSGd33hzu9pWrWHjpghv2ATBvDIcwl0llI11AUGhCimXUDfUhcDPPxA1LSxRw9JK8NdSg++3YVi9v/RoZ6VsQgm6f1/pVd5XH1dLLHh4RvkfuaUaf63y0uHrJzrn//hTOfEDfUxZLnPQKCufWw5l6K2g+3748Sft9+fwLSGyXAVF7zEUiNv8bYW3dCD/j/Apj6vBukTJprz//Pj/dt8D8fdA/D0Qfw/E3wPx90D8PRB/D8TfA/H3QPx/OhA72VpjWO8IwSHJ1MQUfu7uwtjIFAb6Rujaro3o0bE9nURN0Yx+2YxLIjjoNqfbKi6bUG/zx/zMYbmBomlQffh7uENHV09wyYSMblZRgOMaIC8Kwax9y7YwM64udT7M3qY2hvfth5uXckQeuX4hBwnbd4kzmcfk/dmTpojYxYuxZ9MGZCbtFzPGTUTL5i3h4e4suIjd2ckeYcH+gl9OGd6vH+ZNnSa6dOyIsNAQepK4Cl09pZSke+duInn7DhxM2IsLp8+L65evInHHdsTGLBazpo6RZt7qSzK2dlYykMOCQjEzpEDMwVfdRMeBmOuS1EDMrVW+La5XRjsreGOdfW1n7UtAXEZhZW2JavRkZvz/WaUyl0woB25+knMvZK5TZvoGZvQ5hihfrqKoWJ6/blVtX2iua3MwNUQ4hWHWxNkWzV1sKRRzMLZDSwrETWvbSlBmDZ1sUK+WJRyqmwpd+nuqWEkHfScniLAuMbD3iCCdRK06rWHr2oHC8BbReUAcGvw8EZV0HYSlR2eYWdVFFT0rUakSncTCJ+HngXvEyEWnMWlVDqLir4stmpfvJ6+8IFoNP4h5G65q27DtOVooI5v9O28UfhEbMGPNRew99lDsyChUxh2r0u5Ln98MjZNXXkp/YS51YFzGcDG/ZNPd/aefxJ1H7wWXP3DNMZdJMG4tp46oZgUUmAuefpZ2bewwBfrUU4+1Ncbz4y7g3OXn2pKJQgrHXNdb8OSDuEFf8+y1IuxOuSL0DZ3BF7hVq+gJbt3k4Fwbvt6eopa1DUKDwxHRsatoVL8x/d03QmC9EFHH2YMueB3oxFBDVNMxRZVqNVCpak1hYOwMK7tA2Ls0EqGNB2Dw6GhMnLZeRPRajT4j9yJ6zVmRsG091sXMwqrFU8Sy+ZMwf+pIzJ82WiyeOQ6LZozDghljxbQx/TFxRC9MGztILJo6CesWLcWjgnuCW4g9v/8ERU9eifPHziFlZypSdqWJfZv3Iz5mM5ZOXypWRq3GwsjFyDqQKYofFyH/XC5i58WKRRSKr1/Mw1cKi4xriDkUcwgWmvrbX75wuFQC5q8UNLlsQvDIZQqRD+89EgW376OY7vv65o349PYtHlOAzL9xT7wtfqtsgvv8WbwreoOPFLDVQRp//F5St6yUayg/T0kbtd+kZli7+U1KHf4eiDk0q0pCsaZcgkM2Be5P3EKNfHjzFu9eKmOj2Ue+/aJI6pTZOwrD756+RDEFYfb6IbdX41rmV+LdsxcoLnyIpxSK2YMTR3FrbxxyVk4VR6f1QcrojtjWu5FY2zkIse156AYP3wjA2k7+EoSjW3mJ5e19sZgCMW+eY9ObuWFKUzeMb1hHjA5zxsBAO/TwsRVt6pijeW0zOgaZikZOJgixNUaQtaEIoAAcVEsJwsythgGFYF3UqaEvapvowsFYF3YUgpkj3bY24BZrVYWUSVTj+uBKopoEX6U8QlTm+0hVbo+pPKZDx2R93WpCKZ+oSh9TRUGP2VlZoa6bq+CN0nxMNjE1Fc3aNcX8VXMRv3ed2J+RgK1JW7Bk/WIxO2Y2ZiyejklzIsXUqBlYHrcCu/ftFMeOH5E2b9dvXBG5uVeQl3eN3iouX76Mixcvap07f5ZCchYOHz4o9ibuwa5d27F16xYRH08XlhvXYVP8esFlFvx+3JqVYhWF4+Ux0YheukTMnTcHc+bMxOxZ08XMmdMwjYLwtOmTxeTICZg8eRzGjBkmho/gkdB0LOrSXnTs2BYdOrbWvt+3X08MGtwPgyk0swEDuZa4lwRj1qFjOzRv3hQtWjQTDva1Ka8Y07ndXTg58lCN6nQsMxW8uMUb6epQsGVctqhvYIBAf19hbGwstcY8TItxPbevj7f2fGxqyqUUZrKZndWhTFC+QkUE8RjmEO6nrPQhDgwOU3C5RGgDCsL1hV9AMPwDQ+EfFCx8fP1hbmlNX7em4H1bfF4vHYBLB2O+/W3JxLeBWA3CrDx/HAXan6roiH+1H4iyi/ai7JosRdwxxRpFmbijKCNvNfh+vu+/svIwygydi7Iz1iiatf9bCca3NcL8s31bIlF6mMh/hNP/DfUDvGGgpy8MDU3QILgemoXXF9x42svVA7Xt7AUXqnOf4pYUghmHXl4VVjfN8WpxM3q/Yb0gEeLjJ7XEateJ5vSYn1sd7aawn/gqh4LwjxrcFUFfX1+m4zA/+oOp5xsABwcX0atrb2QkJyInK0vknr+AwvxbyMvJEdlpGbhNT/zY6GgREzUPUZMnYf3SpWLzqlWYNTESoQH1BF/11Q8OQd9uXUVY/TB0adsBS2bNEgmbN2Py2HHo37e3qONSR67qra1qiYj2nbB6+XLEr9skbuVex574TWjcsL4YNrQnXaEaaAOxnb211BBbWFYXPJyD63p58xzjVVyljlh5AvJtviJUN11wOC65j1cpqqCWrZ12BZhxDXFJl4kK4L7E2ul29L14p2wl/tqyusHvm0sIZlI7XkVfekMznh4oq/iaK8qaBnrwtDRHmJ21aOTItcN2CLKxEl4WNWFpYAQ9+jrMkL52YNPBcAwaKjwajoGVS2vUcGgqLBxbSCCu22C0CG0zG04eHVHNyFVYu3eGcU1P+ndXFZV1qsM5bCIiJh4S09ddRr+obMyNvybWJd3GxgN3sWx7rmg76iDaDj8gtcFsTdJdzFp/FaE9NwuPn5dRYL4itcdse+p9rOUNdfRxjKfAcd/flNNPRMb55zh1vQiXKNiyWxRuuTvEiauvRO59pZaYh3mwB8+/SO9i3jgoXn6mQPxOegUz7lOce+8dXhT/Ijjw8nQ57h7Bthy4hW3JN3Hl5mvF7bdSy5tzU8Hf+8KNF/D07ix09czBXWAq0++S8SYNnlZYoUIV0aJ5C0yJHI2Itm1FywZN0SuiC0YMHyG60QVg7+7dMXHcODFm8Fh0ad0RrZo2FQ3o+W5fyxGmhjWEvp4ZKtHfS9WqRkJPz5ROKjawtvESjZu2QveefTBu7BixPm4lkvbuRHZmujh5LBOpKUlIO5QiuCvL3gS6uN2jyDhwUELlX//+S3AYffeyGK8pqLH8nHwcT8lG+r4j4vCeNOzZsA9x89eI1RSI92/ah0f3HouX958h79QVrF2wVsTMXonHD57h4/vPgkPor9x/Vzaj/SY9eNXODEzt9csrs+z9i1f49d0HvH1ZJO7k3UXB3Qcofv5C/EJh9+u7t3hCYZI9KHiCrxyyNV0n3j99Lv8mbR9hCr3KVDruOazUMEuHiz80ZFOfMpSDKWG9pGZYQnKpcKylqRH+9JZC8Ot3ePPitXj9WAm5xY8UvPqr3FYDML8teb+oUHn8PXe/IB9fvqIA/RJFt26JOwe24dr62Ti7aIRIG98NOwc0w5rOgWJlOz8KxL6I61RPxHcNwMaugVivwZPplrX3w5wWnmJWCw9ZKR4b7iwGB9mjl18tdPayEM1d6FzkWh2NnUxFuCNv8DWiEKzwpxBc19IQ7jX1hLMZXVBTKK7Nq8LEzlgHNoZVYa2vsNKrihrEVFdhQMdO7iTBtcJKvXBlmWSnBuAqmmAsiw6V+TaFZ554R58neAOerBJrSA1yZbmfmRkr54XGTRuIVZuXYkcKBdLkzWJHyg6kn0hHckay2JKwFRvoInP1upViEYXRuUsXIGrhXLEydjn2Je5F+pFUceJENq5QCM7NzRV5eXkkF9evXxU5dM48fjwbqampWsnJydi9e4/YsWMHtmzdjPjNG8XmzfHYtGkD1q2NFbGxK7BkySLMiZqtMQtz585G1JwZYv58DsgzMHu2YgKF4cFDB2LQoH6i34Ae6NGzC3r36SZ4dbhT57boP6CXGDS4LwYM6K1dEe5Pt1mfvj1Eu/ZtKAg3R8cObUR4g3BZwKtlZSN4A7mNjS08PdwFDz2xpACq7pkKCw2QV6q5FzHT0+djWTXKAQGCF6j4cfX8zedkTw9X7fnYwNBIFp6aNG0mGjdtjsZNmiM0vLHgVeIADsWqIArGFJzrURhm3n7+sKrFdcqWgmvIv60h/nalmM/76ia7f1ohlhXhH38SvCerHJ3jy8Qki7In3qPs8kMoOyVO/DBljSgbGSfK8Nu/vb9G7iszRUN9PzJWsSodZU9+Qlk657Iy1a2lVpgHdLAfJOiWhE1eDebA/B8hVOOfQvE/3fffKsTXU4IRC6rrg3reHnQ1ZSz4D6hPl84Ugk0EtykL9PZFI7rSYRx+ORCH+wWKJnT1wyvB4f5Boj4F2nD6OHWFuFOTlgjwcNOucKqBWLtSTIGYQ3fjBvVFm5/bwtvDh672vERwUANMGzcRq5cuE5lJqcg4nIELp06JY4eO4NbVaziYkCAWzZiJjSuWY8OyFYoVKxC7YDE2rl4l2rRsRQG4LSaOHCJa0tXm2CGDMGPCOLFy8QLELVkINxdnMXnsaHRs1xpBXBBPPDw84eLshpXRywSH4z2bNyEkwF8MHd6XAjE/oTgUG1AgtqJAzOUSyuhmQyNdekJVg7GJvlADcemdpkoQVvCToXQg5tsuntwWRmnbVq0qT7Hhl3h4x7LydTgQq5vwGP88amDmCwL+nRoY8LS8mhRgrenj9bUryD+W4ymCP2neal5iIVUobDEzXQNY0ZW3mZ6R0K2qIyuUBkbWYtxCCq27bsKnxRxh7tQSpjbhMLEO0wiFoXmA3M+sXNtC18gOeqaeojrdp2fiqC3p0DFzh2/raPw8JEFMWJWDYUtOawPx6r23sDnlHjYk3xW9p2UiqMsW9J91TKxJvoNNh+5i2PyTwjl8AdZTiN6VUSi4XGLr4QLt4Il9xwqReLQQB09wWcBjZOY8l1ViLnVgF66/woaEPG3bMW6RxsMw8ijkMi5r4PZr6ia7l8VfUfSWwu+bL6L4/S+4/+yDdK9gTyk0Pyv6TLe5PVsR0s4+xeK1p2WaHHv44qOUYaib/C6QyVM30om4htDR4Q06/MoATzyqKL8rfhmOL2xFNb7o4gsjfcGbSpTHdIVMb+Jd15r3a5hZwM3ZE/4+vqIVBdyJw0Zi4pDBolfHbpgweCh6duoh6kp5kw0dN8yFni5v3jSmCz+++Ksu4+B16W2gn6/YvnY5Vi+cjRULZorFcyZj4cxIpO7YLn775Rf8Wzo8cMszDoR/4GPxewqfxYJbqOWey6VQfFwc2ZeBpK0UHFZtF3s2JOAaBeATe1PF6aRMXDl6DqumLxMbl26koPwEhbcLxXsKi7JaXKrsQMIkjzP+pATXvyiYyqoseXjvIT6/eaPtIvHy6Qvk597Go4KH4h0Fxt9kA9w7weOmi4reaAPvw4tXpWRBu6mNV3S/Kq3UhCYk8zAOwQH5j5JRzjKYQ1Z9efVX6Rrx/1Uy8aH4HZ7fe4QXBY+1XvJ0vQd/V/TgiYIeE5r3X7NHjykUK94+fYLiBw9x/+hBkRs/HzlLRiF7Zn+ROKwtYiNCsKwtD9vww/K2vohpo5RHsJ29Q7GpRyDWRtQTcSSmgz/mt/YWM5p7YGpTN9lIx5RAbINOnpailWsNNHE2RZPa1UWIrSGFYlNZJWZ+lgbwtNBHnep6wkXKInQp/FYTVnpVZBOdBd1mNdVV4arKKOdqmiCslkjwKrE+h1xeZODjqiYYl14h5mDMK8lMDb6lV4w5NEvZBTHQp5/FxhLT544XKcf2ISlzH/Yd2SNSs1NwKOsQjp4+Ig4eOYjdibuwO0kRt2kt5kYvwvgZ08TkWbOxOCYG2ynIsiMUik+dOoFLly4JDsHXrl7G5csXBZdRnDlzCqdOnxDZ2cfJMQrJRwV//oED+7Fr1y6xZWs8heKNWLN2leBNdCtXxCAuboWIjl6IBQvmYt7cWYI7S0yYRCF48CDRf0BfDBzcT7spjnHo7T+gp+AV4e49SkoiBg7qo73NhgwbQB/TQ7pPsLZtudVZY3Tu1F7UcXGVlWA18DYIDZEcY2lZUxjzlDm/ANkcx2rU4FfCTCjYGgifut5SUqFOpjMxNZZFJ08vN8HnYt6kp77CXZXOuU7OzmjesqXgQCwrxJoAzOUS/LZeUKjwCwiBf3AIfAMCRV36WXhTHq86M/56pc/93wZjJud+zfmd31dDcelgzKvCCrqvZU+UyX4nfqzfGuV4sxx/DCmveasGWFmp5Y1wZTV+UN5X26yV4w11/HH+zUSZg/dQtsc4lE15KMqMi5FQqX7+t2US6kpw6RXh0oFXCdD/wwH4W98D8fdA/D0Qfw/E3wPx90D8PRB/D8TfA/H3QPx/OhDzy+hq4B3VpwesNe1FWKBvXdjRCc6Q/qiYv48PxvTtqy2J4LIJDsSN/INFY/qF8/316RfNQnzqyVsupWD8uGdtBwpbFYUSiMuXGt1cXkoMwkOCxNJ5czFi6DB0adNB9I7oiWaNmiMwoIEYN2IiNsVuRO7FC2Lf9t0oyM9Hyr59YjEdIGKXLMXqxYvEpDET4B4Wge6j54n+Y6OwYuU6bIxdKkYMG4wFM6Zi0ZyZYu+2TYiLiYalhblo0bQhIscOReTEMaJtq58REBSCsPDGoraTCw4nJyJmYZTo3bMbTE25JyKHYj0Z1WxhaaYd1cyBmAdzGBrqCA7E/KRTSyaUsoiSTXFcX8xPFPWCgtk4ONGTlHsMKx/DT+zy9HmiPG9S5L6WeoI3EXAgLl+xglC+XkUK5fzSjxFqWnlB39BSXnZn5SUUlwRi3nTHRfgVyldSVOCfkTcCVFaUqwRdQ3P0nZQgpq2/gvABG2HlHiFMrYJgYl4XxjW9FOb1YGHfCJYOTUQ13ZqopmcB/eo+wsK5Lb1vhUpVjIW5a1d4NZ+HvrOOii6TjmDY4jOYvvaKmL3+MjbRk5RLHxhvuGs7MhmhPbeKqE3XsPHQPcyLvyr8u25Ey25RmDB/r1i6NQfb0x9IEGXJxx/h4KknOHz6qci48BxnuUdw7muRfqoQdwpe4O7Dt+JifjEF4mKp7WVcQ3zzgdJDWPoIF37AA+nx+0U8pfDLvYvVTXqXb72WwPvs9S/i4csvGD71AO4+eitevPkqfYPVPsGZJ2/RQd1PgifjjXT8O1MvMMtV4N8/N/lXDvB6ejwMhsKwpvG/rg63/eNgrNTMcbmS8rei9EFlymP8VsFfj78O4yE3psZmcKa/Qebj7oFQuggO9Q/Q8EeAbzDs7Z2FNb+UaW0LT1cvMbRnLynJcnfxFJ6uPujSqgeKnr0Qv1M4fE/B90MRjwt+iwf5BbiYdQG3L90UeRdu4GTqSaRTEGaZyVk4uCMF++MTxYnUU8jYnoyVwyLFnJ7DcHhTIlZNXSy2xGxCwoZdOH74hLhzowAfeSDF2w+CA/Ib+v6vHr8Qb18USQ3vG/pZ2PWcXPo5n+MXCr2Mxzg/LnyKG5dvCmnF9vYdfvv0WXBrt6dPXuLdu4/iWlomCs5dROHVXPHkxi08v3UXL+4VCilRoJD9/vVrIX2HKeiqAVhGTsvmu9K9hUtKKNQw/PnDJ/Hy/hM84sCef1e8uFsoXhY8Utx/hFf09hXdJ+7QY7fv4xX9LOw1XQC8LqC39x+Il/k3UZh9GDe2LhY5MeOQPjkCSaPaivW9wrGwVV3Mbe4plrTyQUzbuohp5yPiOtfDhq4BWMv1xGRZO18sbOODOT97itktPTGhkQtG1ncSfevZoaOXFTp4WIgWzkqpRFNnMxHmYIT6dsbwpSDM6lkZwMvcQNqpMd44Z2vIYbikRMJcjy/sqwkexsE1wxyEWWVur0bHxyqVFNJaTcKwUhrBLde4FEINvhx2q/DxWlNKUZU/Rh5T2rFxb3muI1bxx/NGusgZI0TclmVIztiLjFOHRerxFCRnHsSpc1ni4tULuHD5HLJOHBWZWUeQnnEY+/bvFRs3b0I0BeIlK5aLmNhYqfvdn5QgUlKSkUEhNysrQ2RnZ+PECfrbpyCsyKL3lbcs82g6UtNSpF2btGzbvpUC8SbEcms1slo21y3DSu4/TFZzD+KYxYiKmiGmTZ+EsWPHYMCgQWIInV+HDBso/YeZbJYb2o/Cbg/BIZeHb/Tr31PwhjoOwlxHzIYOHySlFbzZjnHdcKNG4ejQvo3gcsZ6lDe4dRqrUb0GbKxtUNvRQdSiLMP7okxMFHzs41pjbkXK+PjHg7N4wBXz8fWQc2QVOrcyfpw3qatfj2uQucQigDfjk/CmzRBUv6RmmDfS1QsORV3/QME1xH6BQdpA7FsvAHZ03OTNeYxD9rdBWDbDaW5zPqpA5+2KdNHFODOVDsTqBjrtx9P7P4xchDKJd0Q5Oj+UfpzLKqSGl24LHQNIqzRNW7VyP/2gDNWQWuCy+Ff5ivih+xiUOVYkyrbspWy2W5woym46+7dw+eMP/zkKmpVuu/btY6x0YP4fx6HJxd5eONhyxwJ9eLu5iP7d2tMfQBXU9XQTYQG+CKaQq26qa0q/dH4b5hsgeIWY+xDzyrDQBONwCsksxMcXdexspLaVSSAux38ASo0qB0AOxFxby3iTX8vGTSmkzhJTJkxC7+69MGzAMNG00c8ID2uOAX0HCw83b5zNysb6lXFi3rTpiFsSLcM82KTxk2Bbrx3Cuk8Vzo17w9qvGUJbdBTdB43EYgrhe7dtEUcPJ2H1soWYQ1ff7MrpU5gzbRIWzZ0pBvbuiSGDBmttjY/H8aMZmDt1gmjdqgUFFlP6N3EQ5dVgOvhWN9IyMqZ/pwH3HNYRurq8Ul9Zu5rLm+qk04Rm09w/rR47urrLVSzjVWILC83EGwnEFcF9jg0N9IUBhR0DeqteYSrBm2uNlRVFPf3qMLV0gYGxhahcWQdcg8q/I8aBmN9X8aAWXrkuV05RoUI1BHdbjHaTUkTdNlGoWacVDGv6Cj0zL1g4tYCte2dh7dIe5nb1ZfMW09GtDl0DJ+jXqCcMazVEJR1zYiWsfAeg9cgkDJ53QjQeuBdDeWPd6oti8qocrE66hZ3p98Xa/XfQj4KzT4dY0WHMfszecBlxibdE98kpMKrVFLpGbsLEwh9uvh3Rsc90MWdFKvYevYcj55+J9PPPkXb+KU5deyWu5T7Gk0cP8YWCB7tOgfbq7Tfavr2yma7gnSYYK32Epbb42Sdlot1z3oTHG+s06LHjOc9w9LyCO07sp++feqJA8IY83ph3lTfoEf+w3vT3YUjBlld2DeTiRMKwZiWff7d80NfXN9Ti97U15Tr8N8fhuOR9uU/CstqrsyQMq4FaDcQq7SaUynzi4H7aXP/Orz7oyopNjRoWwsHOQWrveTc4c7C1h5OdE+p6+Qt/nzDkUzD8669/i18oxD24dgu5Z66JnMyzyE6mIMDhl2QkZiB1T2pJIE46hiOJR3Bo1yHB4XnHojgs7D1ETOvSD0vHTMfqyEVi/oipiJmyEKn7MsVl+h7vi9/h3ev34vWz1ygmLwufi4d5BXh06z6eUihkt2/cxt2bBSh++Vr89u6DBOD7tx6Im1dvy2CO3ynIMl7x/vLlV9y6cUckL12Nk1t24dyuveLyvgO4npyKGylHRF7qUdxMy8KdzGxx/+RZPDx7CU+u5YnX9x9KJwjuXsG4JzEHdpXUFX/6guJHXPv7FI+u30Lh5Rt4eCVPPMu7jRe37lEofiCKKBAXUSAuouDLXsvtx0oQFvQxd+/jxc1b4j4FsmvxC3B68QhxYFxn7BzcEpv7NxbR7f0xo7E7pjdyFQtbemFpm7pY0tpbxHWphxUd/RDbyV8saO2FqFaemMidJciEJhyGHTAo2E5087VBJwrEnTV+lvphEzSubSq4xzBvpPM01xNcN8wrw9w9gjkY68jKsK2GBYdhWRGuokFhlldveVFCFiaUnsPaGuHKvLmusqwSM15sUDfOyeY5WSVWQjGTlWIO0JoaYu5AwZ0oSlaUleOvu5e76N63PZatWYhTOVkiLZuOP4f3IYPCL7uSexF37t4k+SL/Zi6uXruEi5cuiFOns3Ho0CFs5uBK5i3hqXRLsWw5d4JYjlWxq7Fq9SqsWbdWbN2+HYlJe3GQgrIqOTlRa39SIvbtS8DOndvF7t3bpY/xls0bxLr1sVjLPYrjVoqYZUuwaNE8TJ0eKSZOHo/x48dixIhhYvSYETKYY8SoIWIohePuPbi7hCoC/fr1kIEbjLtIcM3wYN5YR7hXce/e3dGlawcRHh6GsLAwOs82F3Xr+tA5xBB1XNyEqYkJnBy4/7Dm+EXsKOfYUM5h3HGJz6m1alkLPt45uzhqF5uqVONXXHmhoYqws7eFAR1D1eObJZ1rq1XVgae3l6gfzl0lwhAU2kDwqjDXDHMIZnUpBKu3mVddX9g51ZZVasbHy9I1wv/UZYLvVxfM+HbpQKztJqEGau4KMWYZyiTkiXJ0fObH/8WryRyWOZBSSNbWCK8/SqHYUBsOf1In4dF9cv+MjSiT/Rr/6jBYlC2rqQeet1OxLQc/fBMwOdiqK9elV4XZf92H+L8Oy//tnO3s0DjYX/CTk9uJebg6CwtzcwpSxhjZs4vw9/aAg7WddtCGGozVtmq8WhzmF4hQCsesEf1BMPX9AA8vOFMg5nZnjANx6Ul1fFXGm8LU0cbtm7fEwqlTsSRymhjasw+ipk/DvNkzRa/OPTFs0Ch0ieglQvzDkHshB0cPpInELduxa+MWrKRQzPr2HgjHkM4I7TZZuDbrQwG5JazqNhJudMVTP2IoXd3OFWeyjiJh80Ykbtsh7t/Mw6Y1q7BlwxrRplVrDOrfH8kJuwXv3N2zfRcunDwh2tHj9vbWsLauKSy4VMKcAkJNY1HTXFkl1tHhMdKaA6wut2BTVhM4DJe0YquifbKoJRN8n529k4zYZtzU3YmeYOoFB4dVvrCobmYmTE345Wt9VKIDu+CALRsE+GtyeYUufQ0D2NQOFoZmtspL8OWVcK1cvPCTUFkprlihikZV4dloOCJmZMCn80pRvXYLCsGe0KcwzAwtg2Bq0wiGFiFC18gJVfVqoppuDaFj4IBq+g7QMfES+pYh9HMawaCGn3BrSr/z6Zlo2ne3aE6BeGzMeYxfcUFMWHkeMbtvIf7QPbE19T6mxl5EQMQ64dEymj5nN6atuSi6Umi38uyPGs4dhYV7D1j49IVN4EjhGDIeLiFj0KTTDDE7JgWHTz/A+ZtvxPYDuVgam4z50UnicPZD5OQVaQdvcIs2DsL3nnwWhc+/oPDFZzx+/YsofPkVT15/paDM5RXvZIw1d564crNYbKV/Q+yefGzYlyd4tPKlvBeYMmeLqFzFTEof1MmS6nOKy1aYMhrcAGpbJ/7dqyG4dBDWltxolL5fOZkogVdZIebPV95XV53VkitRlT+HQ7IBHTvoe2pCNONyDf4bU1dELM0tYEvHE3t7DxE9fxv++lMdj/xv/E4Bkl+qzz9/Q9w4fQ2XjuXgGAVfdnjXYaQnpJF0kbE/U0JyekKqyD5wDOunLMDMzr1FVLeBiOo7AsvHzhYz+4zAsglzkb43Q2QmHcebV2+VlVfCrc04IL8teiNeP32FJ7cLZSKbeP4Cd2/fx907D8T7oiIJxWrbsvs3H6CQQuUvnz+LP75+xZ+//477+ffEhrEzkb1xG87u2COu7E3Ctf2HkHfwiLhBx7DcpMPkkLiSkITLu/bhEn0su7onCbfTs/DowmXx6s49vH/xEp/fvBM8Ge8LvX1FQZa9uFWAJxSKH1+9IZ5dz8NzDsWaQRscdjkEvy58ouDyiXv07y14KDgQv7p1F7ePHBa521cja95QJIxsKzb3bYT4Pg2xvFOwmN3MG1Ma1sE0CsNsZhNXRDX3wBwNXhFe0NoHS7jdGpnbygtzKShHNnMVI8NqY0CgLXr6WomuPlbo5E1hWKODpwWa1zFTQrGTsqGunpU+6loovGoawK2GPpxMdIWdYTWlREJXweOYDatVhl4VhQ6XO1Tm1mrcrlIhgZjDUSXlMe4qYaSnIzgM6+twizVutaaoxquJvKpYiTfQKWUVamBmHIr5c5gBfQ3uPqE+f7283dC0Bf0fblsj7ty9jstXzmPvwSSRmpGGy1dzKAhfFw8e3BP37t0R+fk3KBjnICv7mDhwKBlbd8Qjdm2cWM1v4+KwfOVKjeWIWRFDIVmhdI9YhVWruJ1aDH3sCplEt2bNahGv6TaxYcNaERtLITgmGgsWzhOzZs1E5JRJiIycIKZNi8ScOdMwZeokwR0mJkwYReF4kOhN4bdXn27aEggexNGjF0+u6yYGDuwrI5rVwR28otynT0906tROBAUHwN+/Hlo2byzat2ktwdLRwVHwsYhLJzzd6wgjYxOZVKcch3RQ28keJhR4Hekt45IFLiWsaV5d8LnT1rbW3zbV8bRZ9RU27lrBJWl+9DOwBo2bIJA30mnarAUG15cSibr+AcLbrx78A4Phx8GYeNfzh6Ozi3axQkdXCcTfBuFvA7H6ijHfp4bgvwVhdQWYw+xYCsR788UP9LMqIZRDKYU/AxMKwRkoc/yNIovM24Yy5SspeLXYwg5lN50UZbKLUTZiBMr/yKvP5ZQyC149VgPx1hz8yGUW6gqvJuyqbdck5GoeU4OwGopLB2P1/X8Ky//tvgfi74H4eyD+Hoi/B+Lvgfh7IP4eiL8H4u+B+P90IA728YSjrZ3gk2fT+mGwtrQS/BKDn6c3nB3sBZcwONSyQysKv6wR/dK577BaMsGCvXyl3RoL8qyLBnSfv7u3hhccbaxLXoIvx61BStqKcEgzMjKCNwVndjLtENJ278ba+QtEys4diF28CK7OHmJ25AwsXxqNtatjxfqlcYgcPgmpiQfFx/dvcT77BKIoTLMevYfBtVEvNBsUJZwb94R9SFv4tOoj6rTsA6/WA7CZgjS7ev4sTh3LwN5t8SI35zzi6YCxef1q0a1zN2Slp+NY+hFx9tQZ7NyyRztqtRUFYmcXexgY6grrWuYSgE1NDYWdvQXMLUzAdcSMw7D0JNZXcJ9hfqlGbfNSiUJOBXm5hvsVKz2LORBr26ZRWDE1q6Ftm8b1wbxxwMbGRjg62sHY2FBbMsGfz8FZbTzO4Zh/L5Wq6ArPJiNg7fEzdPVMRMUKXCeslE6wqtUMoWtgB7f6Q0SHKWl0gTEAJrYNhaFlAAysAqBn7i9s6jTFGA4o85aJGtbeFIjtoGPkIqoZOEFHzx7VTLyFbnVfcLs1y7rdRdcpGeg5JZ1CbYKImHgYkXEXMXbFOcFt2GbFX8eqvbcFjxVenXgbnSekinoRG9Cg3w5Erb8sek9Pg1urxbALHqOgEGwXMhr2wYqQrmvRangSukzNEGG9NsE1bCaadV4iYjaewKFTj3DmepE4e+Up0rLvYtXGbDFm6i70HbYO3QZuEL2HbkLPYRsQMWid6Ez3dR24HhmnCsSrN1/xkqht2J4UfZFBH0s3XRa3Cj9g1uyNMDW2FuqIdbVERimVqKANp9+WS6hBmO9Xaoc54HKAVcsjuFSCwjCd1IWE35LgrHyuUo/O+KTANcWlS3b+XkrBGzY5iKvlGsr9ak0zh3kD+rsytW4kUg9dxV9/lQRi3kj2qegdHubdF3cu5iP37FVcOn5RnEjJphB8hILsUY0sHE0+jiwKwixzZwqih4zDtPbdxexuA+j9CYgdHyUWDh6PxSMmY8vKHWJr7G7pS8yhXNDP8gf3JZZ+xL/il09f8PntW3x8WSR+e/8Rr1++xh0KyezZo+f4XFwsrdgYHwPu3X6AYgrVjMc///H1C148eCSOrNuGyykUelMzxI3UTCmTuH7oiCIlHVcPpuHS/hRxjsLw8dhNSJy+QGykf0tcz6HYM2GGOLl+GwqOncZzCr2MA+0n+r5fP34RH18VU9B9jOf5d8Sz3Jt4wYGYbrOiW/dQTAH4DQ/fIFw28fI23/dQcbcAj86ewrnVS0TypIHY2K8VVnQJF8s6BGMlBeE5FIRZZEN3jK/vrDWBzGzijgnhdcScn70xm9urtVLMbOGBKc3cMZHCMxte3wk9/Wqhh5+tiPC2RkcKwl3oLeMxzU1rmyDM3kgE2xhSEDZAXSuFj6UB3M31pVSCcf2whS4P3agiTLiMgYNwFaXPMJdEyCY6zaY3FQdlprZeM9CpIgx1lXDLZRAylEOzcU7dVKf0Hy7ZdMdlE/q6OqhuYiKatm6Izj3aaS9Yq/JQJDpGt2zRTKxZvxK37+TizPlTYtPuPdi6ZzeyT58WXDZRWFhAoVhRQKH41q18XL16ReTQ+er06ZPaPsMHDx1EUtI+7Ni1XayOi8WchfMxe95cMW3mDEROnYLps2aIqAVRWLZiKZYvjxbRSxdh7vw5mDlntpgQSR87YwamTJsiZsyaTsen6doa4tkUhufPn4Xp0yeLiRPHYMSooTKCmXE5RLceHIQ7ioEDe6PfgJ4YOnSAGD5sIIaRkSOHiOHDeXPeADRp0ki4u7ujTh1ntGzZVIQ3aEDHPd6vw/t2jBEWEiwX8JYWloKPPbVqWWlHO9ey4WMot4BVLuRt6DEzMxPUqG4qTEyM5XEHBxvBxzdHRwc6D/O5mC6cqnC5oyEa0c/CQsKUTXT+vHmOhFBG4mDsSVmIeftQIA4Igo9vPeFNajvXkV7ITE9fGaalBtrSQVh9n9+qCxdqIP5bCC4VkCWwjommMHxTQfmhdNgsW7EKyqxIQZljxYqjRRSM36Ls6MUKv0Yok/qQgvAbUTZiJMrw19TgOuMfOeTO26XYeoG+Z1n63ly+8Z/9hUuHX20gLlsySKR0i7b/NdZ0JaSu4Ph6eSLI1w8mpmbCwrwmWjduUOqEp4smQWHamuCG/sFoEsw1w/VE0+AG9DZAgjAL9CKePrK5jvEKsa1FTVnFKt1hQv3FV6HvYWxkTN+zsThHgThj714c3LpVHN61A/vj42FmYiZaNWmNWRSKz2RliZ3rN2PGpEiMHjBI7FizBlcvnENBfp6YOnkaGrfsAt/QVsLU3gM2vo1h4Rkm3Fv1g0/bwcjMOCXeFL1BZspBJGzdILLTUnA09QD279wqFsyeg3N0YDqemSmyjh7H1k07UUyfx5o3aUZB1FJbQ8x9iI2N9emJxvPSDaTTBG+uM6bbCu4FzTtYqwipXarCqwfVBK/WSvNujSqVdeDm4aMNxNwxwMjYjP5PKwgOxFxTzHVTzI2uknnnbMVKvFNV6VIhXSs0gbh8Rd5EV6oGVccIgT0Xol3kbmHt0Qr61Z3g1XaWCOy9Fv49V8O75RRhZhuOqiZuFGQ5zHpTyKEnfmgbDBs3VfAu6UNZByn8pYs9SXvRNqInqulbi6r6NoRuGzoo9C0p6NEBzbe36DoxFV0mHUbHsQfFkPknMGTBSYyIPi2mxl3CrI1XsWJPnuBhHDuPPMC4mDOiYb9tqNd1PX0Of94JtBuXAu8OsfBuv1yE9tiEgIg4+LRbJoK6rEFo981oPnifiIjMwOC5J9FvVpZoPmAHgn9ehPotFijaLEZ4xBq0GZ4oJiw7g9V0IErKeiSyLr7AqSuvcPr6G3H2RjEF6de4eqtI3OUa42clm+4ev/qCwmefEbvrmsgreIvwpr3RILyxqGVtRwfmKnQg5H7DFekipYKscKgBlsOrsllOmdCkTogsCcbK7dL368vK798D8H/18fwxvGqiHqCV78OrKcoJSer2vgnI6lvGHU4M9a0wftRy8TsF4NKBmDtM/Pr+E94+KRJPbz/G/et3cf3MNZFz7BzOZ57B+SOKk4eykZ1yHGePnBZH4hOxuO8IzOjQS/AKcfSgsYgZHikWDxmP+YPHYsWMpWLjss3YFLMJHyjoMvXn0AbkP/6USXIvCp+K396/l81yRS9fiTt59/Dy6XP88vaN+PUjBeaiYjx+9EzwNLw/f/0Nd09dFDdP5+Dlw0d4fqdAPL15F49u3NRusrt/6RrunMtB/qmzIjfrFHKPnsDl9Cxx49gpXDmciYOLV4q1A0Ziy/DxOL1mm3h48rys8MpGPMIb8L68/YC3j5+Lotv38ZKC8Kv82+I1/QyvCx5qH3/7iILxg4co4rBMHl+8gNOblmLnhF5iYURDTG9eD3N/DhBRdDuquS8iG7mL8fVdMCHMGRMbuCjCXDClsRsmU9hl3EEisqkrpjT3EJMau2NMuDNGh9UWgwLtKRDboLOXpejiU0tqiDt6KlpqVoe5/zDztzakEFyyQuxhzgM49GT6HJNNdLolm+j0ZWOcsjLMqmo20ql9h0vfZjKEo0rJiq+JHj3HNLXBzIAXNHjqaDW+mOTjsbJxThuY6TFDet641HYSY6YPx9qdK9CuS3vB+wD4mO7o6CiaNW+MefOjkJt7URQW3kHG8SM4lJouTpw+gUuXc3Dt+mWRl3cd+XSey7uRK65du4rzOWdxJCNdJB08gIS9CdidsEtjBzbFb8CSpdFi/oK5WLZsCRZHLxQzo2ZS8J2GaTOmisnTpmIG3Tdl5nQxdToH3rkUnBXzF87FggVz6OsoZs6cgkmTxmLatImCQ+3QYQMweEg/wcM1uN9w3/49Rf+BPdGrT1f06ddDwV0oBvXTBuJRI4ehR89uCKGgy5RFHns0a9JQBAf6y8Z2m1q2wtDISM5/vC+J8VQ67sKkdong+uCaNWvQcdRC6BvoyyZ4tU+/s7MjuOmAOmmWGwHIMVKzx4mHYJmaVkdgcLAIb9wUoRSCQ+qHC+5BHBQcinoUghlvovPzC0BdykrMy6cuHJ2cUY0XFnT4lTOj/6gdLh2MtQuH6nlbs5qsBuDSQy60oZMDccJNhSYQl+GNbpqV3H9ZOqDM4ULF0dcok8kb5l4rsigEcxjuMVbwxnqpKf6hjII+v+KPFGTn7xIciDlUqt9brRsurfTP+B9h9P8PeJWnRvXqolO75hJ8a1IQZsHBvnCt7ag9gTUPb4TOLVsjtG49EabZNNcoMFQ0C20gQVldLQ6gsBZI6rl6Kup4wLamhYQuCV6lukuogbhGjZqYOX6smD5mNLKSkpCyY4c4THatWwfzGpZi29qNMjr5YvYJkbxjF27m5GDFosWiUWiotIJqQn+cbHCPvkjjxuXJ+8SIIYPo32lBwc1BOIW1hwsFjhadBorkxGTkXbmMpD3bxO74tUjcHo+0pD3iwsmTuELf7/SJkyL1UBq2b96NYjo5siYNGsPcnMskFI6OtrCyqglTM0PBIZhXhtWifaZdJRY6cLJ3xny6cmc9u0TQlSwFEjpwMm6z5eDshsoVq4lqVZWXqtWuEPyEseZdts6uIig4CNXp96yWXMjGOynB0KxA0/+/tFfTlERwKC5XoQo8wruI+t0Wwa/LMrhT8GO2dTugZu0G8PBtKgLD26FJm+4YNXWmWLttEzbt2oyUjINi2+4tyDh5BGnZaSIpbT/Sjx+iUNxFVKtmRP8+A/BGMcYdEyrrmMKt8VTRbnQyBkcdx6SYs2L00jOYvPoCFu64IVYl3kLMHnqbcEtsTy3A5pQCzN9yXXScnAq31kvRYvBO0XliGlqOSIZ/tw0iuNtGhPXaguCuG0RYr81oNSwJXSeniX5zszEh5hxmr70sFsRfx9Kdedo2b9tSC5GQyR4oMh5g/7FHOHDioUjOeoh90sZNGXWcfvYJTl99ifO5ReL6be5S8VaCL+PbPA56Ttw5MX3eDnqO8KqF8pIfh0suOfqp/E+Cf6fcNo03frDS5RLqSq0SZv++Ke6fgnLJSrDaeUK5rT7GuJyn9AqzfB8OxAbGQg3Ipb+//AwcjCUQ68LFxg03M8+K3z9/lRCsDcS8Svzr7/jt3Sfx4Vkxiu4/w4PceyI/5wYuUii+lHVenE0/KS4cPStSVm7F7A69MaV1hFjYawjiRk3DiGZtxdBGLRE9dDxiJs8XWykMr4pajbTdqeLPP36XgSClf54vH7/g5vXb4sObYvxBgfiXj5/Eg4JHEoo/Fr8Tv1MI/e3LF7wpfi9eviiWtml5aafE6ydP8Cu3RNN8/qc37/HxzRt8eF2sePUab5+9RNHDZ+L5nQd4mn8X9y/fELfOXMCTvJt4nH9L3D19Ecc37sD2UVNFcuR83Ew6gqK7heL3r7/I9/+Ff2by/lmRlEgUF3BZBH3Mvft4c58C8cOn4gMP4HhM3zc3T+QdTML2sf0xt2NDMbS+N/oHuGJcQy8xqYEnxtR3w5AAJzE21AXjQikQh9cRo0KcMCLYEWMpHLPJvFrchD9fMZHe5zKJoSGKAf726FrXWttmjUNxB3rbzsNCNHepLqOaQ20VfhyGrfThWVNPuGg21FnrVxE1dZQpdIbVFOrkOQnFfJtXgbmbRGUFrw5XrVQymU6ZVlfSVs2Qjs/GvCGaw7WuUgJhoKsjK8XKajG3aONyOKUETo8uIE1NTdGydXMxbfEUxMQvxeqty8XQcUNh42AvCx+sJp0r6zeoj+nTp4hz507g/v1byMg6LnbsS0by4TQcO35ccMne9Vy6cM6/Lm7Q7ZyL55GdnSUOp6XjYMoBJB1I0tiP5AOJ2J+o4GE4WzZvQlzcarF8xVJZFZ5HoZfNjJojgZiDL4uOXoSlFKDV9+fNn43FS+Zh7ryZYsbMqRg3fjRGjBgsxo0fgSFDB6DfwL5igLRc641evbsK2VjXszN69+0h+vXrhREjB2Ps2JGCv0a7dm0oVPoJXs2tTfkkJDhQcJs1/n+rZWUrDA0MEexfD2qXCO48YUSB2IyCMPP2cAN3ieBXTRkfzzzc6kh7NkEfowznUF5R42xibW0FHvHMLCzMZQXa3sFJcKcpXiFWRzf7c6s1f6WbhIRhDV8/f+Hp5SMrxOrx3JBbpkpZJL+6y/55Y512QZFXgf9VMhlOQmYp3CqtzOi/B2IJtGogLfsDKnAXqVa9RJkTb5VVYg7GjFeFB06Tcc7sR/pe/JxQ27RxgJSvNW+XUAOxSt3sp77/bThW7yv9+P/aZjrV90D8PRB/D8TfA/H3QPw9EH8PxN8D8fdA/D0Q/58OxPyyuo+nq6gfVE9egg30ryuCAnzkpNUoJFiE1vOjoOsvdcGMh25I31FNQG5MfwD16/prhXj7SU2xv5uXqOfqAesa1WUkMJOX5jkUl1Pwy/bmlpaYMmaE2LJqJQ7v2UN2iYzEfdizYT3aNGkpTqenUyBOR052tji0ey+dJHPQrV07Uc/TCy5OznC0dxTc4qlzmw6YPnGymDVlKtauXI6aNcwFb0IzNrfD+ImzxPz5C5CwbSsyD+0Xl8+eQBaFuDUxS8TS+VFI2LIF1+h7spQDqdi1bQ9ePX8qAunJUN3MWMY1Mytrc3pSmWkDMdcRc5BQ26goLz9zqxd9pbTC1Ahz5yzByeyj4tLly/R5NWFoaCoM9E3g7OKp3VTHgZjbXKmBmGuO7ejf7ezqJsKbNJK+l9oAXElp7s1PeqYOc1DJSyQ//gQrW2tRoXwFCs06+Ln9IHGroACx9PtYv32TWBi9EGvi12PN1g1i677tFIrXI4H+z1jSkQPYk7IHmWeOiyOn6N91IQsTIicInj2vR4H+p58qih9/KodqRo7wpvDNeBRzh7GH0G1yumg6KAE9px3BsEUnxeil5zCSQ3LsRRGzKx/xKfcQs/OG6D//JDxaR8O5wVThF7ERrcccQtPhiaLr1HR0mXwYPw/fJ7rS7b4zj2JszGkxZ+MVCsFXsWT7dbFu/23szniI/VmKQycf48i5Z8g491Qc41ZtFHp5HDPbm3Ef8QfuIobCO1tPn7+Nx0bTz8iOnHmMi/lFuHbnrcgveCfBOG7nBVFNx1yeI7L5kUjNNx8oNW3z1A1vatBV63ZL1/Cq4bUk+CoH+9Lt2EoHYh7prn2fyy50lXHjpTfgGRhw6C0pleD+xEy9r+T7c9s/I7loU+gjgC6gI/sME+e2p+E3CpzqII5//1up4/2LSynI75++4jNvbit8Lh7fLMSNc7m4SGGaXcg4i3Ppp3GJQzLZu2gtxjRpi8ktOojl/cdQKB6KcLvaYnBYE8RNmIG4WUvFhgVrsG/THiwYNUdcP3VFAiT/HOKvf0spxe3cO+LF0+f4+uEj/uANc+Rj8Rvcu1mA54+eid80G+l+leEZv1Iofod3FHpvnbwkvn74jL/+oH/bn38KHrbx+6/cX5jHRPO4aLoY4NplTWD+Qp/76VUR3j17IV7cKaBAfBtvHj9VPHqKZ7foYuHcJXFs5UYkTojChQ17xCu6iPj10xfNgI8/ZPjHx1dv8e7xS8X9x0ogLnwsPjx9Sd/vNV7evi0OLYxCVERr9Ar0FK3q2KBfoDtGN/ASA/w5xDphYD1HMcjfAcOCKBwH2othgQ4YQaGYSyHYqDBnTGjsph3NPCK0NoZREO7qbSV6+drSW2upHVbxRroWLmaiWW0z6TscquFnZQDXmtxvWFfwJjobg2qw1FOYcRjmRQcuY9CEYV3e9KZ5n3sLq6USgssoKik9iRn3INbjkiRNOOaPr2GoDyMKwYzDsLGeLkz0FVwioct19dW4tIJbaxrAw7cuRk0bLWYtn405q6IQvTFabEuOx/hZE2Ff20Xwc7xG9ZrwqesjBg/pg4N0HnpUeE/cvZuPI0czcfTYcXGCN3NfOIcrVy4KbsWWk3MWp08dF8ezM5GZmYa0tMPiUOoBHDlyGEcz0kVqagr27t2DrVs2i9VxK7B85TLELI8Rq1bFyLjm1Rq8oY5HNy9YME/MnD0NEyPHY+gwLo0YgpGjhmLU6BHylnGbNW6fNmBgH9GtZwTad2qjbaPWrUcndKVQHNGtoxg8ZAAmTByN8eMVgwb1R/PmTeHs7CJMTIxkX0z90CDRtjW3Oa2JOrWdBWcXqQG2txN8/HH3cNWWIPLxh3sVO9rZiJp0bubxzWrJhKmpmZRU8Pdg/PW45ELt0V5dao3NYGVlJcKbNENIWEMKwvUF9yL2Dw6FTz1/UY/ygE9dP20g9qJAXMfVXRuITUxNNItVvJilBOJva4rVmQ1MDZxqDa76vjYgU8Ary23XStUQc6lkuXI/irLcb5iHbfzrJ/Gv6AQplSh74o34afQCVKJg/m2A/elHHg+tBF25n8sluGxi69/brqkB959CcOnHvg2lpT/2f5yZiSn9sdgIrkPlzXSNw0MEF6CbmVbHtFFDBNfterm4o3FgqOB64WAfCr3evqIBT6ejIMyrwiyEQ7GnHwLcfTS8YEF/RBx0mLK5rqSWmDd58fzxoX17iwlDBmH+pInYvGK5OLhzG1ITEuikFS/OZmTg9JF0nD16TKQnJuHa2TPI2L1buLvUkaDg6lJb1HFx0Uzi0he8I9XB3gGmJjVFTUt7mFo4o2GLdiI1fRcK7ifizo0ckX+FDjCnMpG0c4tI3LUV+3btREbqYZGSdAgJOxLwuLBAeNIVqImRUpfEbG2tpPG3paW54Ol1XNukq8tBhp8UygqxiSmHYX1YWlvQgWMYdmzfITpEdJdgYUw/N+NQ7FzHS4KwrA7r0JWvmQV+oD92xk8uvnJ1pScea92xLUzpCaxuwhIVSgZ9lKugXKBocSimQFy7tpOoKBv5dNE2YqB4UfwaM+fNwxr6XbDV69di6aoVWBm/VmzZvZVCMP2fHNitOLgXew7uxOGjhzVScCDjIIYM7Cvc67jAx70O3Oh3xdp16AxDqyA07L1NtBtxAL2mZqDt6IOiOQXifnOyMHThKTFi8WkMXHACkasvitnrryJ6+w1ZxWUjo8+gbqc41PIbKiy9+8Ht54UI6r5etByZiO6RR9B6RLLoMPYA2o85iI7jD4uB87IxqlTgXrI9F/GH7mJ7Kg8DuYc9mQ9w+BSFYgrBLDvnOb19hrQzT8QBCs1bKfgujL8mpq/OwbRVFzB301Uxf+M1evwujp17Is5ffyXT78Kb9hfKgZz7USs148rmSbqgoYMp441qyqs5alcI9X1VSX3w3+uMS0KysjFOswqsq9QUy8AOff58ZYOdusuZP9bQsGTll8MuP6fUYKzszlZvqyvGRvJzskC/+vCtG4Q542eKSV2HYeWYeSi+/0x8Lf6APyhI/pvDMYdkXjGm0Pj13Sfx+uELPLnzGNdOXBFnUk/gbNopXKEwzDZOmIN+9D2mtuwkVg4cixl9B2Bi335i6sDBaBMWhiWT54jVM5chLTEV25dvFgtHzsbdK3fwB4VHxqvFv36i7/v8peLFK/z68R3+/PpJ8eUjPj5/hgc374r3b4rx+y9f8SdPmyO///G7TMbLy74ofv/tVwnEpVeguU75D/o4xh0peKIdb8YTHKy5x/BnpSb4K2/ce/KCgrDiU9Fb8ppuPxPPbt7DzYxspM1fKbKWrcOzc9fwy7uPgr8Xr8B/fftJfHhepIThBw/Fh4dP8Yn+nY8uXRYrB/fC8KaBaO3hKMIcrNA/2B1DQhQ9fOzQw9sOvX0UQygM9/dzQJ+6NmJQgB0GUxAeHOQgRtR3xujwOhgZ6iwGBdqhP31MBIVh1sWHN8/VolCs4N7DPJCjlVtNwUM5OAhz7TDztNRHbVMKwgZVhaVuFZk+Z6qjMKzK3SSq/G3QhnbIhqaeWPoIV1K6SvAqsdQXax7X5dVCelyPg3FVZUCHCYWk6gb6wshATzneGxsKYzq+K6+s6AobG7owGD0Ii9fMF0s3RCNq5Rys2LRc7D64C3E71mP81DHCw8ebjufmssjBbG3tKRC2xIpl0eLaNbrweXBb6ojZsawsCrmpOHQ4TRw8lIbUI2k4fpynzx1DluAAnSHSM9Kw/8B+JCUniv37E5G4bw8SEnaI3Xu4//BW7NDYti0eW7ZsxNp1sWI1heUFC+djxqwZInLaZEyaMh6Tp0wQ48aNwmgKxBxsWZ++3aXXcLsOrUXLVi3QrGUT/ExBlnXu3E5qiDt37yi43ng0Benx40cJHtLBvYetrS0FrxDb2lrTfaGiVYumcnzhVzpZbQc7VDczhZOTg+BhHPz7cKZwzHiV18amlhznGG9ENjHh4VkWgjfQycqy5njIK8a8aGNJoZvxAgNvbnfz8BT1wxshmDfWhTYQvhSCfQOCpLOEdJfQrA57+/gKN3dPOLu4ahcXuMPWt7MGvg3Epal1w6U30qn3M5789q9xy1Fm303xQ8UqyoqyOniDV4e5BlgTQCtWt8QP6fdQdtxSxY/lpTtEOd64R9SQyp+nkvu0m+o4EP89/DI1oPP3Lh0+SwflfwrA/3Tff7vObVvS1ZGt4F96kKcnnQT1hQGdwOq6eaBp/RDBk8k8KRD7e3iLEF4Z9vWXVmssiEIxb6JTB3PIpjoumajjLurSVZ1FdZOSl+S1Vzz8trz8QdpY22LWxDFi1cLZWD5vDqImjhczxo7GsqgoZCbvFxeOZ+MMXSGfyTwqMpJTcP3MGaTv2SM867ji50aNMX38GFHL2gbmNczpyWQrzExrSFCoWkVH8KqVYx0/ulLtJ7ZsikXmseVYPHOymDFpAoZRcNu3dYvYsmYNNsWuQgodSNiBxANI2r0fjx88EO6uzrJ5jodzMDs7awnEKm4tx6GhZJVOCcV6+jrCxIRfxuFRnwre1MiBw8S4hjA1MYendzB9nrVCtzoFb3P88NOPgp+stWzt4FHXV7Tt2gnGchWqlkgoIVhtw1aBrx7/FojLyQqxm5urkM13lfXQscdgcf7iJcxbEk0HwqkifvsWLI+NwZqNcWLV2pWI3RKLg5mpYtPOeBzJSkVyWrLYsXcLjp06ikYNAoUzHWzcnBxRr66n2H8oHbV8BqDJwF2i7cgDaEYhuNXwRPHzsP0YNO+4TMRjkasvICr+KhZvuyGWUmCN238L0XSb8eCO5hSqXVsuELYBI+AQOgEBXdYJ3w6xCIxYh8b9doqWQ/ejEwVhXoVm41eco69xAdPXXRIr99zElsP3sPvIA7En4z720tsdafcFr/5up8f5fsajoPdlFGLLgbti9Z48TKVQPGjWcdFlfCoGzMxC5PJzYhN9zMxFu+nEbCgqV1IGX2hHM8tFZCXtAVUJtSWBmFc01JVhZXVYCb+lN82p96n36+koJwcJwxyEdbkEw0Dw8UENw4z/Zo1KBV5ZHeaLNWMzoawcl+4yofxsVha2wtGuDhbOmIVHt++JIzsOIar/ROycESNe5xfi3e0neHvvmeBRxcrQDmXlmFdQP1Owe//ynbhx6hpu5+TjAoViNq/nYPTyCsLEJu1EVK8B6NyqOUyNjAUPqjGkC9L6fjxdMwhxc1YgfW86zqSfFhvmrMSuRXF4RyGX/UUh9fcvFNKLn4hfbp/Hl5w0/Hb3ovjz4TX8fv8i/nicJ768fI5fPn+S0Mk4gL55+QaP8+6JP37jVWG+/4+SYMz/Ps0mPhnT/BsHY83oZs24Zh4hzXjV+evHz/j46o34TIH4FwrJXz+8Fx9evpTJci+u3xSXtyXi6OI43M86I768elsyBpovND58wseXr/Cu8Il4f78QHwof4uyeBDGmeTNE1PNEqL2VaOZih76BbhRenUQ3b3t6a0th2F4MDnTCAD97DPJXDA2yx7BgJwwMshOjGrhgWKgThoYoBgTY0/322q4SHIIjvCzR1aeW6OBhiZ9da6Kli5lo5GSMQArC3lYKHs3M3SR485y6gc5Ul1urVRG6HIC5HEJKIZRVXx7BXHqFmEsiqlTmzXQKZWW4soYShEu/z2xqmAgXBxu4etSBu7ebcKAQVrOmOWzt7UXLNs0xf/lsLNu0RCzdsAQrNi9DfMImkZKZjKyTmdiSvFPMj41C92E9ERASKMyqm1OAs0XT5g3FsOGDkZySiFt38sXly5dwUAKxIj0jA8eOH8WxY5ni8OFDOHgwGfuT9ondCbuxbccOxG/ZqqBzWsKe3TiUkiTS01Nw6FAy9lJIZpspDK9bFyft1hiXVPAwjpUro8XyFUswd/4szJgZKSZHjpOyiIgenYQE4fat0KxFI9GWbnfp3knbZo2n0PWkt916dhEjRiqrzJMnjxeDhwxEQKA/BWFTwZNfXV1ro0GDUNGIwjJ3qXJwcBBcMsGdItSuSoEBPNVTVwZqMC4P5W4Rtemcw3iFtjb9ztS2anwBzyHa0spCcMcm7uTEw8yYKf0M/Kpcw8YNRXB9HsjBo5pDhIxn5jIJ/0DBq8MchLlUgrl7etPP74FqdNxl/P35PKyWNJbuLPFPgfi/evwnCqqMyxp4MMcPHIZJBTpm/+vHkhVbvigsX6FcSSjlaXQ2tfETn1uIEkjLglsPsv/H3n1ARXWufcNPzklOil167713EbEr9oZdUVEsICo2REGkKL2I9CqggCIqNlRQxN57iy1qYkzRWGI3Oe//va9rs8eJJ+f71re+9zzPWu9D1vqtKcyMhJnZ+7/vfd3XLZU/fKoomfiMRpeVAzEtzPHpn7tMUMiUA7jy4hwyuq1cgvHxzz6+7z+uJRC3BOKWQNwSiFsCcUsgbgnELYG4JRC3BOL/0YG4A7UQUenIaH3uiWKH0bYN1aNKffmc7e0VO2CaKENlEHLNME2oo2Dc16sbo1Ds5ejKdcOki7M7T6xztbJjzpY20FJXVfSx5clASm8ktR6xtbVDWUYKq8zLRHpsFDJWrWRxERGYPzMIi2YHsqSolThQt0uE4f3swM7duHLqJPbX1rIBvfrgSN1ulOXmsT5d+sDVwUVRA9RafECsLMxhbmIiMbeA36Qp6NmzL/Nw9YbvoOEinHkyammlqqKBOTNnsF1bqnFJbISuXjjPtm7ago3rNuLB3bvM090F2trqMDbWY4aGdGmgFIilukrFUtXUsofDirRQR4cO7flLr6Wlzqi8QlqHXYsZm9jBrfNMWNgtYabWc6Cn10P8bT9jtNCJqZkFbOjUjDBCbHxUlPoQ85fuiw+BmMIxbSS++JLqUqXT8bTEo529Hfvyi1b4unVH+AcuY5eufYNVyclIzUpjYSvCkS4CcWJGEkvPTUNWqQjHZfls47ZqbKzdgLoDe9mmnRtQvbUC/hN9mamhIYwN9GBhbMw0dUzh2HcZhgTVsJELtmFw8GYMmyMZG7oLgSIQz087wqRShlMIzz3DVhScRUrFFeTUXGeJpecxO+kohsypZc5DkmHdJxJ9p5WxkQu3YtTibRi5aDubsXI/FmYcweyEgywo8SDmpRzFIhFWSbgIs1EiiCeUXWSJpRewpvIycsXGh1AoXr/rNip3SzbuvcMlEWnidyLp6y4iOv8MfEXQJxMW7cZI8Xv5he1lCxMPQFXTHF99+TWjlnu04IZc403vH9V+y0stU4sg6h1M/cKJFII/lEzQRl45ENPGnGrX5EDMn8X2Ukgk9HmjySVy2yIKwR+CtDSJjnYa8tKj/0JVKp+QT/mqiO2HrakhJg7sxuYHTMHzp8/w7NGv7NGDX/Dkhye4f/YW25NZgd2ry3Guqp5d3dwkQtxTaeJdcyh+/5bqbqWFNB4/fIzrJy7jUFUtWzxwFAfied0Hs8SA2ShOCkN04EgWGzwW8fMDkLhQUpacgaZte/DTndvstx/u4N0v9/D7gxvs/bfn8fpSE14c38FendyJlyd24fWFBvb73XOCCMXikvz+wzW8f3QXf7x+LqHFPp49x4tHTxgFbC5boND7jsojPmo7RyUUVF/8+wd/FY7fvXrNKNC+FQGZJuoxcZ1qrp989wOjhTXuHjmJU0VV7Oa2Bvx27yF+f/2W0Wvyc356xJ6L5/x4/iLKQkPZGE83dLc0gbOBJhvrbodpXo7wdTBlo50EB2NM72zFZnexQUAnMw66JLirJYK8LcV7Yc3mCLO7W8JfhGUS4CUCdmczTPWUTPYw5cl0E92M2BgXCsQ68LHQZDSRzk1fRVEzbKnRHkYqbaHbXkLLMmsIaiIME53mGuK2dBApyAtyyMGWSibkxTcIl0xQUKayCYFCs1wuIQVjqWxCV0ONTZ48BCuSxedr9XIWk7Ycs8PmCcFsZVqkCMHJyFibzlYXiSBZmoGyTcVs6+7NOHryMI6eOsI27KhGXEYclsdHspnB02BpaQ1raxs2YJAP/KdPwZqMbHbu7Gncun1dsZRzQ6MIwXt2i/C7lW0V+8RKEXhL1pazomIRcIXCZmXl5bxEc03NBla7jYJztaKEYt26UpSUFCG/IFsi9s852RkcjElC0kpERoVjwYK5LCh4FsZPGg/f0SMkI4dh3ISRGDd+FBsz3hfjJ46G3+RxbFrAZEbt2EjI/GCEhs5HeMQS5u8/BfZ2dtDQ0mCGRrpwcXFAr97d2KBB/bh0TENdnVEZopuro2LASVtbF1SqRRPpiKe7G2/TjI0MWHuxvdQQ2ztDPT1mLPZB1GxAHgCgQSSag9OaW562gaurM+ciLfEY0qN3bxGKRSDu4i3x8uYyCVdXD+YiODq5cO0wcaaBKlc33u4SDsStpSWZlSfUyQGZriuXUHxcWiH//IsvKFMJ4jF/m7QAnzT8yNqb2Yj9yJcf+gj/7e/8nL9RGQWHVen+r76mtQm+lALsJxRw/86ovIJqjuWFPahG+TOxX/o0fz/7JHsv30dLPkvLPv+5RIL81UIcn//9M/bfPqGO0JGOkZE+697dEzSxTFtHi/Xt0Q02lpaKvn0DevbhLhI8kU6gPsRURyz3GaZ6Yg87J7jbOjIvZzcRiF3hIa4TCsUa6jRpimZISiPDHL6a33hqTN67Z3ccq69lx/dsE5fbsauKehCXI14E4vCF8xGzbCmLi4hCTkoGjuxrYEcbGnHn+lWcof6Mwiz/aagVR8Al2Tls/Iix6OreBWpix0wo/A0SR5W9vNxZ727emDJpMgKnz2QTRo9CT/HB1tLUZR06qMLCzApZySmsNCcHWyorsWtbLVtbVIidW3coArGTjbUIAe1AK9QRWpiDJtbp6ekwCrw0Kqyi2oFJIaUNqI6Y0KgffRHlAELhQ0dHT3xJJW7uPujrW4DOIyokvhWwdJ2Ov4sPL6GabCMR9C3s7JnvhDHiS98eNJFS0ryi3VcSWulMQ5N+LwrqqrwB+Lv4YNs4OrAvvhDBuXUHzJofw+589z1CxI6S6oZJXGoSkjPTkJK9huWVFyB/XT4qNlexdRvWYcuuTajcvI5t3lWD7eL9LVibyQYN94GB+LvErVrOKAz2HJ+FPtMq2dDZmzFkdg0GB0mGzd0Cv/A9mBrTwGhxjiVZJxGWfYJRWI0poolwF1lcyQUsSD+O4SHbmbdfMTzHZKPn5BLmH70PM1Y1YU7yYRZddAaxJecQX3aBJVVcxioReuObJZVdQroIwOkUboW4kotYVXQekblnGU3CS153ieuYSf6mazzqm1R6kQUnHkZQzAEsSjvKeJR44U74LZK4eY4TGz5xkPJ1a0bvGR2kKL4vbaQ63j9pPpgltNFX/plymJWC8Z9HiHlEuAOdGZLQRlq1I3UzUV65juohpcdJdcF0qcbkIKyursnooI1WpFPX0GUeHj1x+ewJPHl4jz1++ABvX7/Gm+cv2cufn+Dx3R/w+Nb37P7Zb3Bhx2HUZVSw/KBoJIyZg4PVu9iLx8/w5uUbEQYpFAqv3+PWmes4vmEHq1m5BllBy7Cg32h2rHanCJhvhffs9ye/4I8Ht/DPt6/Yy4ff4t3Pt/H7vfPs3TfHRNCtF+F3M3u0twT3Nqbhx50F7O3Vg3h/7wL++PUB++fbF/jjt5/Ea15nv397Gm9vHcP77y4xGlX+7f5dvBfhlXDg/Sct/vGevXsjhVJ5BFwRiptvy72QPyYHZB41FkGYXoeJvy31SX7z5Cl7+fMjPKP64m9usZs7G3Gzdj+eXL3D3opAza8jnkNe/PgzropAFTFyKOthI8KwoRb62JiykH6emOBmg/Gulmycs7kIsKaY4m7OgrxtMLOzBeZ0s2JLfBwQ0tsWC5rNF2Z4W4hQbc4mupuIEGzCE+kILb4x0c1YBG195uuoCx9LdXibqDIXvQ48iU5eic5EhUaF2ypqhtVpIQwayaUwy6G2FTRFKLbS1mA6HcV2V2xvP4RcaYSYQ3EzmjynHII7EvEcQj2IuZMEjTwL3l3dkLc+GTX1m9i2AyKA1m3E2u0bWPnODSisKcWasjUsITcRGYWrUbShiJXXlKOhaS9Onz/Jjp0+guodNXxmjazOT0dY5GK4ebgzBycnDBjQBxMnjmExq1aCaoWpHzE5cfIYGsR+cVddHdu6dQs2VG9E9aYatrmmBlUbq4RKVlElQu/6dSL4Ur1wOUrLS0RILsb69aWM6olLy8TvWpTH8guykJaejGhakEMIW7oI8xfMgX+AP5viPwkzZk3FhEnjGNUQS6vSjWGT/cdzH2K57zCvVNc8MkyWLVssXjcCy5cvZaNGjeQRcnVNdWZjZwkvb3f09enBhgztD3MLc14/gWiKgNm2DU1mlOZA0DbRu5OHYvulqa4m8oiGYnvnbEerxtFZLzVGZ2RpG2pubspo8Q5aoEOec0OB28TIkFeYI91EGPaieuHOXRj1Guaa4eZA7O7uCSdnVzg4u0hEOLZ3dFIszEFrBLRuS8G7uQuUUigmcgiWb38ciOXnyJPuKEt8aW6PT/Z+zz7N2Il/OHXB5yY27FNjG3xmYouvxGMI3f7U2Br/MLVlf29+jDK6/1O6X/jExh1/C83EJ4d+ZZ8OmSJ1tmgm1w4rB07lrhj/EkY/+W8aFVZGoadf966sl3cXHjnsId5MYmxgyG2UvDt1YoN69+Ug3K0ZhV1vGg2mbhJCD48uXDJBo8LE09EFHvZOIiQ7MmcLK6h0aKvogkA7d6k4WzriodPBbuIDM2boIDZABFQ7G1v4jx/LynPzsF0E0BIRREnc8igkrUrAoT317Nj+AyjNzRVy2K4N4kteWIDs5GQWMMEfPt37KkZYadRsugiJzg62rE+3rpg+1R9xkdEsaukSrIgIxaAB/ZiZCJfGxmawd3Bks2bORHDQTBxuamQ7t2xFcV4utm/dxEwM9aGqQqO86szAUEcceFAg1ma0CAeFYg1N+jLQhCM6epU6PhAKPPTFk2/TiJ6ujiHU1bSZT98xGDl9E7pP2MA6DS2Hmd0kfPb554xGEw2MTWBp58B8xUaptQg1ciCm95pGheUSCjoYMrGygoGRKaPA8+VXrWEvjoQJBeIvv26P+Uvj2d7GRiSkpGB5TDRLXUOjw6nILS5isfGxWFOYiZJ1xWxD7UbU7tmO9TXrWMWWdWg42oi9R/ey2SFBMDU0EP+2GVMz8MCI4CqMEeGQjAzZAp+ZG9BvRiUbF7oTk8N3Iyi+kXFJQ85JRGSfZtGFZ5FacRXJ6y8xGsENyzoN/xUNrFfAenhPKILXuDzmu2g7xoXtxIiQWjY+bDcmReyB33LJpIi9GLO4DpMjGlhg/EFeAjql/BJLr7iEjKorIvxSCL6E1ZVXkbXxKrKrr7EkEaqLtn6Dyl23WK74WYZ4TmqZJCbvDAfkof6rGZUoSUtrS+SuLPJCOXJIVQTW5hAstxmi+5QPqJRHgiUdeURZ3kEoNO9AaFRYufsE/Vu041AV2wQijQJ/aOsml0zI3y9NdW2xw9GCnW0XduLQMRHYnogw+JS9+e1XPH5wH7/efcDuX73GoY5KBcj719JCEs8e/MIeXryDc9uasC4sieXPisCFnYfx0+2H7NWz17h/4RZOirBM9q5Zi00xWdiWUsx+unO3uXuFFDSvb9mC20mReNJYzR7Vl+PpoWr82lTJHu0rxf1NafimJIodiJ6OXUsm47UIwuSP767gj0f38PvDW5Kf7ogQfVzh/bVGvL20B2+v7GXv75zC799fVZRc/PH2dXPQlbpMcIgV//+/v33POPDKYVgOyf8mFMuoBEMO2DQJj1qtySPI7357gdfUEu7HX9ize9/j53NXca/+KHt88QbePPoVv795x948eYL63HyM83Rl9rra8DDRxyRvFxYxvCcCvBzg38mGjXcxhZ+buQjBViywizXmdKVFNmzZwl523FUiaqgbW9LPAUHdLUUYNmUBnenSTLyWEZvsboxJIiSPdjJgA2y00M1UHe56HRkty0yT6CgIEwNadIO69IigSlRESG1PZ8JoGye4GGoiYWIfrPHvz+b1cYMBDUbQ57otdYOgleVoEp2EyiJohLij2PYSCsSq4nHq4rtANFU6cAmgKpVlCGri4HFhaJD4bq9ntY1bUdOwFZvqa9mW/bWo2rUJeRUFLDEnSQTofKzbtI6t3ViGyi1VaDrSxM5fOoujItTuPVDPSqrXI0UE6JDw+azvwL7o2q2LCIIDGE1YW7ZsEao2bGCXL53HjRtXcfAQdaA4gL31e7F7D5VT7GQ7dm7nhTrWVVawsvIy5Ip9bGJSCouMjkVKahpy87PZ2tJiFJfkI19cJ2lpiYiJjcSS0MVs7rw5WLBoLkLmz2EzZwUggBbemDGZBc+ZgYDpkxVLNY8d54spUyZg2rRJjO6bLG5TqCaRkcsQtyoaS5ctYX36+kBXj/YP+szJxQ7de3TB4CH92dBhA0ELcXz1dRtG2yYuWTE1Zro6OrwflSe106qcXp09FAMINOGeMoG8fXVwsOGRYOoMRWjlWDoLRxPxiIrYX5sYGYDOspNeffqgizetUteVyd0k5El0zi7uzIFDsSts7R1hJzISLSlNKMDTWWjlhTf+KhQrl0go/5zuk0eSCYXPL8Xl5z2HsU+238Anx17jk8Mvmr38iHz/x/7N446K63sf4JMpixm10lWUX3wqdZGgyX0fjwjL/ur+vxpB/i/VEohbAnFLIG4JxC2BuCUQtwTilkDcEohbAvG/+jeP+78xEGtrqENHU4vRxDJdbV0REicwKko3Ex+kQL8JjH5OJRLyJLru7p15Il03V0+JWxcOwJ0cJO62Duhk7wxnaztmb2IOdbER+VMglutdmnf0ttYOmOw3mWmp63IZhaEhLWhhit7dfbCzeiMunDjOHty6jWvnLuBw/X528sAhHNyzG0UZ6Sxu+TLkJiciPy2VZSTGYVj/QfwlIbQDX75gHvqKLxWZJkL39Ml+mO3vz/JTUzDApw9GjRjG4qOjMHKEL7p368ZsbR3h2dkLQdNnsdHiZ4X5WQhbFML0dXWgrU21TjqMlmmmYCy3VevYkU5BU8Pw9oxOcRC5Zon6EsunQgiVQFBdaLu2kh5eIzBx7g4ErahnXUZVwMh6gqKGmL5cBiLEm1rZssHjR6NVG6oRlkol+Esk/u5ft6ZSiK/5PlsXZ1iL946YmllCVVMbFnZW7It/UB/iVjy5gyxcsAApa1KRkJbMImJXID0nA0ujIlhqZpoIyMmKkom8kjwRiquwaUc1q6gpw479ddh9aA8LFRtzPV19fN1Gk9l2nctLNE8K38vGL6lD32kVGDl/GwuKaxT370LgqkY2LaaBA7Hcdm1J9kkklF9GyvorLCznFAJWHcKwkB2sy8QiuA5Pg9PQBMmwBLiPSIfHiAzWe3KZCOG1mBJZz0Yv2CGC8jaMFUGcTItpROiaY4gqOMtSyi6K0CuVZsiotGKNCMYkSVwPF79T2rpLbG3tDawsOMehmMTknkbwygaoa1gwen9oYqQ86ZQn0dFpXArBbWkDToFXCsESqYRC/vx8XFJBIfjPgVjqMyxPoqXyCDWqC26+LYVhqZcn4briDtReSk3SXCIhT6jjECw+Lx9KJrShr2eHbZu2sncvnwpPRDh7IXn7AjnLo9HXpRcrjM3Ey+cv8fql5O0r6scrlQGQl4+e4ftLt3B0/U6WGxCGVcMCkBUYzo5UbMfpzXtxpKxGUlCNPWvKUB2fzbanleD22ctSaBTONTQirk8vbF82g+1a5o+jSXNwPHUu2710LKpmDcKW+WPZ1U05eHv/PN5eO8x+2S+2RWnLcTFlGfuxNhePd5fi1z0l7NWJarw+U4tXZ7ayN5dFOL6+D7/fOsre3b2Itw9EkH72mP3x9g3++f6d+LtQMJZ6Ef/zPZV3SIFZJh8w0PX/pRSGlWuLGYVrCsXc21gE49evuITirTjIIK9/foznDx7i2d377OdzV/Do4jU8v/cde3rzFlIDg+BtYc6sNTXRzcoES0d0Z4nj+4mQ644AT1s2zdMG0ztbY6aXJNjbFkFeFghsRoF4aT8nxA5zYxEDnbHYxx5B3SzYrC4WmOJhDH9PM+bnZsK1w8PtdVkPMw14G6vBUYRhQmUSZmptYdRRQjXCVCqhIbZxZKCLPU+iM+rQls3r7Yi8GQOQ6S9Z1M8NTvraUBXfI0I1wW1bN9cNN9cLq7QTAZgW4BB0NFRgaqADW0tT5uZmjwEDe6BrV3emIrbNdvbWyC7NYFsaNmPHgZ0iFNey2gO7sPNgnaIve2lNOYqrSkQIrmRrN5SidMN6bNy+ndU3HcCpMydw+eoFtv/gfpSJ4LwyK5EFLQ7GgME+6N23Oxs0pB/GjPHF9EB/lpmdjiNHD+H69cvs3LlT4vZhNDbuZ/sa6lHfsAe7du1gtDBH6doS5Bfks8ysLGRlZSI/L4elraagTAtvRLPIyAie7EZLNJPIFcsQsTwMS5YsYBRqg4JnKJZeDpo9ncsmxoz1ZVOnTYS//wRMnjyeUf3wrMAAhIrnklixP1m1Kko8bxbrJMKlppYWLKzMmKOTrfj794bvyCGsf/8+oBphL6/OjA7oqXSCSh2IpZkRqP2dh6szoxBMB/rqqtQiT5rP4+XVSTFgJJWR0cG/CrOzotZtGtDTo0EtPd7m0uNMREYivfr05ZKJTp5dmKenFzw8POHmLnFx7SR+Zzdut0aoB7G9kyuXlRGaEEiBXbkMQjkMy6FX+bY8+U45JH8IxJ+J37EVD0KST79qhb9ZOeEz567sc+FvTt74tNnfnb3xD5du+NTRm33i2AV/F7fpfvKJUxf2qbhO/mblhk9EJpTD5D+4zvjPC3HQpdwn+eOQ++9KJ5RD9cc/+4+bNtqXZ4rzbHEVdTiIL7RcNE4dELp5eaBXNy9GR12dnd3Qy8ubcc2wCLxdxVEP8XbpDHc7RxGGnRmFYDcRip0sbZijuSXXXClWWhGhmGqI5TefAreNtaP4YA1izuINMzOzR7fu/VlFQSn21m5H464GdvbwCRzbfxBNu/awU02HxWUdVkYsZXkipGUlJSJFfLHYyiisSYpXdJ2Y6jcRq8KXwFccXZP5gTPF88RRaUQ4q8jPw9ABA2EgwjMJnjoVwTMCELF4CfOb4Ichgwejby8fVlcnjrrFEXdawkpGNUrq6rSRtGRGxrrQN9AWwViddVShPrBiY6zantGkOnlkWB4dlo8UP6AFPKTG4jo6/eHuk4/hM7awLmM2wtxhglKXiVYciE3E354MHj+qeXU6iVxHrPjyCZb2Doq+xTaOTjCjCRwOduwf/6DHiR1FO1VmaGiBxWIDuGJlJItOjEW0+P+OS01gKSIMJ6bFobCsgJVuWIusonSsXV/A8kqysEvsMOqP7WPBcwNhaGCMtmqmzNN3NQbN2ojBszexATMr0HViCcYt2clmrNoP/8jdmJvSxKLzz2Jl0TlFX98EEUBTRPDM3HiVxRSfx8z4wxgTupv1E6/tNS4HToMTWPdJtFJdCbr7FbKe/mUYRQF40Q42bPZmDArciAGzJEODN2F69D4szTjBqC6YRoJzNl1nuTXXefGO0u03GXWiSCw+hwUpx9ii1KNYnH4cs1c1sZi8s+jUcwq+En9jQmGY3hO5Joy+K/S5kCbOSSPCdNZAHhFWPrOgHIg/HiGWcY/U9vJqdBSCpYAsr3QnjQp/WKiDRlzUlciT5igEEwrEFJCpdznTMMTMwDi8+u1X9ua3RyIQ/8qdGtib33Dr0mWUrC5gD27dx70rt/Ho/o/s1ZMXPFIqLyTx5reXeHrvIW4eO8saCzci1W8OQnoOZbO9+2FuFx9EDZzA0sbNRHHwMpQvimGVi+NRvTwDR6q2sVfPnmJffiYWDO7NBlgaYXZXByzobsvSJg3AlS35eH2tib04tQOP69fi/OpQtm3eOKz1H4ICv4GsbokfLmUvxJ3yGPbt+hjcr47Hk/0F7NXpGry9vB3vruxhby/vFvbg/Y3D7O0NEZLvX8H7n79j756Jv9Xr1yLcvmNvX7/FCxFkX4m/A5EnFioH4vdyGFYiTzrkcCxeQ65hfide482vT/Hyl8fsxfcP8fzWXTy79g07vWEzxnp7w9FQj9np6WCYqx2Spwxh0SN7YXZ3F/h7WLM53R2wrL8rFvV2YvO6USC2REgPW7ZABOLw/k6IGiKJGOTInSYm0wQ6YZKHKSa6GgrGjOqGh9pqo4e5OqNew276HWGrLbFUbwfjjh8m0WmIQKwuQqx//x4syLcfOn75NXqb6LDpIqQv8XHFfPG7kSmdrOBooMUjvUSFJjJT7bG4TnTUVWFmpCf2iabMw80WvXt5Ysy4IWzK1LEIWTwLK+IWsT59e4jvkBpGjB7ESjYXoe7gLmw7sINt2b8de442YM/hera1fhu27N6GPY272cFjB3FI2HdIsnd/Ew6JAHvl2nl26sxJHDpyEDU7a9maghyERs7HsJGDWd9+fXikdPTYEWyWCKMJyauwb189u3TpLI4fP8YjxbI9u3ejXlwSesyePXXYIV6b0CIdBYX5SBH7URIVE4Xw5eEIDVvMlgi0gl5U1DK2QgTi8Igw7j9MgoJmiJA7RTECTDXC48ePhrwQR2BQAKZPn4Lg4FmMrs+ZEyhedyGLjl6O2JhIzJ47mzk4OEJbWwcWliasW4/OGOE7CAMH+bCRI4dCRZUm+kqT1GlbRJPlFZPkDPSbz6JJk4kNxH3tRB5xsLdj8qACjSQT2vbZWFsquu6oqdAqnCqKwEwhmLa7VlaWrEevXiIQd1OMDLvRyLCruyIQO4rw60wjw3YOEhGInURu0tTUYepq6rz9Vp5E9/9EDswfB2i5RzBNmqMzI3JY/vJLCswfRmy/+MdnaP01TbL7VEL3fSGtfqccYOW+xjxJTp5QJ3xFoZsDLT2uOcR+Io0MyyO99Py//Y3uk7pP/EsA/eSvR4rl+z++7z9OnSbGdKAG4irwcnfHEJ9+oAUYiJmJkfjQ6IJOpRMDPQMOuoo2a+LNpBHgDyUSbjxC7CZCMaFw7GBlI4KxLbMzEUFHfODkpZsJjXwpArH4kPbp3R854siUTPGbLI68xRGwz0g2fcZChC4Ix8aSKpYSm4wzx06jccdedvrQUZxsOojUuFhWsDoVxWsykBYXxyb5TYfvlCAsXRHHsvPzsX//HiTERrLIJYt49bmKkkJWLo6K/caNx6H6PWxtTiYiFoRg8dxg1lkc/VErtprKdaxux1aUFeWjuDCH0agvhVxdHQ2mo0MTjDooSihUOAR/GMWjx0pHpdIXWhGMm1fOacWhh7600kplGuoe0Nf3hantPGbpuAjaep3E3/UzRiPuRqamMLawZAPGjABN0qLT8NKpeArG4ijzayqfIK1g6+QCO3HQQ6gzhb14j+W2QXQAQyFNTV2HuXl6IkYcYISGLmZLxQYsOj4aGbkZbNnyUKSsSUFSahwrWl+M0spiVNSUs/LqMhSvp8U8UlkXb08RsLSgZdaLDZhVgUnhuzmEkj7T1mHE/C0YNLuaTV6+UwThA1iUcYRRiURiuQjB62lU+DIyN1xFWuVlEU4ppF7jxTlW5J/BnMQjbEzoLnQZnwOPkWms64Rc9JhUyJdk6JxNmBi2C2NCatmE0J0YJu4bvWg7GzF3M6ZHNYjXPMuoXKJw6w3kbf6G0XX6dwvEdbK29ibW77iF5Tmn2MzYJixKPoqlIhST6YtLxN+3neL9oe+cdBZFbktIp+ykMMyBuK10AKW80qFyGJYm1UkTQwgFXA63zRt4HgWm9kLNI8I0wtWxvQrvCAg/vj2NCKtKO4OO0gixPGJCOxxqrSZ3keBRYWq51jyJrkefQGyrv4U3L35lbwUaIf799XPJ29f45fsHeP7zE0adJmiSHC1YwV69/VPXBKkE4B2e//KEfX/lDk7s2I/kgAVsuI0ruuuZYayNB1vcYzDSxwSgLHAJq1m8EjtiM1GXWsSePPgOjeUl8O/iyroYamPJkB44V5bInh3djMd7S3CjPJadzwnDibQF2B8zg1UHj8X66cOxdvpQVh89DTcq4/HtxgR2c3007olA/KA2nf28J0+85nq8PLeZvTm3VRCXF7axd1fq8e6bJry/eYxR2cWbm2fw6+2b7MHNe3j2swiu1KlCUKygp9SV4k+T8IQ/lEaUqYsFjyK/k7pacIeKlyIYP3vBXlH3C1oq+spVVrgsCl2trGGjp83cTQwxy8cLGQEj2Ozenhjnao3xLlaMVqsL6+uC0L5ObImwuLc9Fva2YzQ6HDnABdFDJDHCgj52IpiaMZpIR6URQ+112SBrTfSgEglakllwFWHYoTkIE3PBoKPUTYJotm0NJxFS9hWnMhtDI5h2aIshlnpslK0BxjoaY0yzgdaGcDLWh6nYxxEDHW2YGBrAycGade3ijp69vOA7pj+bNsMPM4OnYsHyeSw6JQbxmauQXbqaxWdEwVhsb40MTVhkotg37N6IvYf2sqbjTThx/gSOX5DUH9kngvAe1B9oYAePHsSxk8dw8vQJdkI4e+6UYinmS+TyBZw9f5o17Og8yIUAAIAASURBVK/nkrTAkBlswNAB6N23D4YOG8yog8PsOTORlBLPNmzcyIH40qVz7NDhJjQdFJoOsIPiekNDvaKkompDJXJychC9MoYtDluC+QsXYLHY1pNQsb9csHCeAo0I08p00wL82eQpE3mp5sDZ09nkKeMV7dUILbQxa9Y0+Pv7NZuMhQvmKSbRRa5YipUxK8TffTozFvmBRmYdne3YoKE+GDCoD0+mIwMG+MBC7OfkA35aWIPKENrQPrO1tG+lhTzkpZl1RbhWUemoGEgwMzMBTZRzcXJgtNIr7XPVNdQZDTA5OdrzJS8ipkslYR/aulEA9vLqypPneAKdCMBUKkHt1phbJ7iI/am9gxOztXeAnchLWlq6jCYm0zZXefT3r0aJPw7EygGaR4mb0c+p24McUKl1Wtu2rRQB+O8iMFNIlle44y4TIoTKK9nxMs+f0BLMUoeJL7/4c0kEkSbJSYFXCrAf2q593GWCfv5XJREfB3Dlx/9LYP1PawnELYG4JRC3BOKWQNwSiFsCcUsgbgnELYH4f3Qgpjfd1sKCudjbgIrK5VMG/r6+MNDVFWFZlQ3p0wuutDCHswfr6uoJT2dXONs4Mg87FzhZ28G1maOljXi8A2yoF65gKTZQFLz+Lt4smXIfYtppj/EVO5miQrY8NBTRy1egMDufJcSlYvS46Rg1diYLXRiJA7vqETR1NjvS0IRLZ84iOSaKleXlIlME3BnTp7N2utaw6z8OZj1GMpMug+HcczBCl0ez8qJi5GWkYvuGCralshyx4eG4c+0yq9tajSwR7FZGLmPUm3hdYQFOnzzCajdWISFqGZYvnsNUxZetjdhIO4svL7G1MRdfwPYiTHZgxiZ6UFVrj7btWks4FEtBh6+3/bhGtB1afU33SYFYRcUQHVUMxHujzzq01xLPVxF/188ZLV+pY2AEE0tr1ktsMGmy3Rdf0JeHwjC1WxNfJmoGzr2IW4sQLAKx+CITum4lvrCGRsaMAnGrVu0QHrWSFZWtQ0R0NMLCaclOsfFKjMOyyKWIWhXLklcnYXlMONZWlLLYuBVYt7EMa3LSGZ1W692zh9gR6TBaRrxNB11Ye01nI0NqMCVyN/oGlLOhc2owdskODAzcwEaEbMHkyF2YJkIpCYo/iJDUIzy5jsQUn+M63gyavCbElV7k/sTBIoSSCcv2wmtsFlyHpzD7QXFwGhyPzqMzWfcpJRhBfY+DNrHhIgwPmF6FgbM2sB6TijBwRiUmLK1ji9KPYVUxtWOTaolpaWeqIU5fd4kVbb6OjXtuY1PDXVa85Tqis09jYUIj09Kx4H7DciD+ggLxP77kjTJpQxPl6HNAZRGtqd6xuUyilYTukwKyRDp4os8T1ac39x8Wn6n2zbhcghfekFutqfG/8eEArR2XRSiXSSgHYnkSHT2GH8cT6nRgbTuQ1Tbcwo7GO3j78hl7T17/ht/fvGRU13r78jWcrD/MDlTvxI6CStQXbmKHK3bhTG0j7hy7xJ7e/wmvfn2K5z/8wn6+cQ/fX/wGt45cZPWFlUiYNg/DbDuxEeaOmNe5L9J8p7LKkEjsSy/BrvRC9vThA6wU24VhzlbsUGYEftxRgO+35LCblWm4mB+BI2nz2L74IGwIGYOiaYNYU9xMHBP3Xy6MYL/sK8HzE1vx/bZ0drcmHj/Urhavmcl+2puLnxsK8ehAMfu1qRi/Ha+QQrHw9tJOnnz37nqj5NZxvL7/DZ6KoEpevXiFK5eu4fHjp4zCMC0nLQfh/9f/PgrOvAiIcskFl1i8wxsRtkmiOIBwNTaDjdjxE3czQ4SO6IMk/2FstJsd+lgYYYitKQvsYoeQHg4i/Dqy5QNcReh1x4qBrixqsBtiBoswPNiZLepli4BOphhpr8f6W2uhN/cXVmNdTdThrK8CO62OzTrwJDpLtXaMyiV0uM2aRFsEnrJV4YibO4OpitDirKGKPkZarJ+xNoZaGqCviTbrbCzu93bDyFED2XDf/hg7bigm+o9mAYF+CF4QgEUi/JLE7HjEr4lHSn4SSy9MRVJ2grhMZvnrszBlxiSxD1Vj3bt6onBdrgjCjezStYu4LFz95hI7f/kcjp4+jsMnjrCjJ47hzPkzuCr2NeTKtUu4fEVqoUZu3LyKb25cEeH4Ajt56ih27t6BnNJcNm/RXAwcNAADBvZno8b5Ytp0fyxcHMLixL6QJsbt20/LNzfgzJlTHJAPHjzIDjTRxLt6bNu2jVVVVSIrKwfxSfEsdtVKRImAumRpKJszLxjTZ1FYncamihA8Q9z2nzqVTZ1GNcFi3yt+JpmKaeK+Kf4TWEDAFA7CEyaMYdPFz4MCZ2DZ0sUsPi4Gq1bFYMy4CUxTSweG4oDFy9uD+fTvBZ9+vTBq9DBGgZiWt/6qVRtG20BTEaLVVFUZLbtM+1F5oSyaqGxna6nYnlIgprUJ5AFAXR1d3p46OjoweX6GmqoKo8BpbWUOeaEOKoegumEZlUtQmzUXcUmcnN3E6zgrUCimpZt1dfUZt4ZrS3XJfy6BkK9/KH3411Zr8mOV64m/+ooGGVtx6QSh0Ev3K5Z25qD8qXgchWqqOZbCKpVNEHlpZuUSCHoN5dvKAVoOxTLlx8jhVvn15BCq/Ph/Caj/1WinGTBhMLMQGzzaQfr07MbozdHU1ERnVxc2zncoHK3F0ZOtE3O1dRG3HeFo5cBcbVzgYGkLNzt7Zm9uCVvxAbUyNmXm+gYciD/UENOKaF9IvYi5PrI9+vbog7UFOezkQXHkvG0rVscnsoTlq7ChrArVlTUsIioV48fOgLaWPtu5aQu2rFuPojWr2drsTOQkJyBswQKmZuYC+wF+MO/my/Q79Ye2QzdoOvdmVj1GIXRFIhp21rLGup3IS09BbVUFq9tcjZz0ZEQtW8KSExJQv30HromNFdm0fh0unT0tfudKps+zUzV4cQ7i7GSLDmIjTiGY0MQ6dQ2azd+ByX2J5UDSVmzktdS1YCz+boQWW2jb5gOVjloioGiL5zRrp86NyeXRd/oy6xmZwNDMnHn26c4LbXwciL8QXxxCoUtaxMOFmdvYw0LQ1tVjNErZqnVHZOevZU2HDmOS2AiGRYSzWXOCRDBegrDIULYycaW4XIi4lFUsK3c1UsUOJSp6OTPQ0RcHXPowMTRh7TuIHYl+Z3hPWMMmLd2O0YtrMXg21RFvxOhFtRhFi2cs2MJGzt+CsaHbOCSTqSvqERCzD3OSDrHI3NPcNzi68DxbXnAOQRSEwxuYX0Q9uozLgmmnmcym5xIMCFwP3/k1bOTCLRi/eDvXMZOxC8XvEliJcUtqGQXkseIx8qS72PzTyKi8LFxhNEKdu+kq1zaTxanHEJF5HHEFZ9iaqqviOWfQq/8sJr8v1A+aUBimkQhFb+Hmz4XyKLAUiFs1k0eLpUBMYVgKxTIp7MpdIwhthOURlY9fT+5EIY8Qy6PEHwKyVEOswSPDNEKsDT2TLiiuOcuazj4UgfiuCL4Ufl/iD+r3+/sb/PFesqW4EjHBKxDbLDc2E6cajuC7b+6xXx8+wuunv+HFT4/Yw8u3ce/4Bdy/cJ39eOOuuLyB64fPsfN1TTi7qxEntzSwg+XbsCUxF8nDp7BCv2BsX5GFnan57NVvzxDuF4AFg/uwH7fn4XZFKs4XxLD6xLnYEu6HgpmD2Krh3gjxtsex9IXsXnWSkIwft2Wwp43leHm+Dr8dqWQ/7VwjgnUKHm7PYD+K2z/tysYP21LYz7tz8bSpBC9PVLFXZ7fizcWdeHd1P3t78xTevnohgtED9uNPj3Ho+EXcufeAUceM/0+B+C/++3h0mUaSafU7Ms8/Ao6GhrDU0mJdrSwQPWkwwnx9WG8rU/Q0F4HY3pyNd7fCNC8bLOzlyCgMRw9yReKITizXrztWj+mM2EFObF53K4x1NsAgKx3Ww0QDXoZqcNFTYXbaHWGl3k7BQoRgM5V2MOog0W/uOawqPqtk4YRxOFpVDCt9Q2YoPtMemqroJF6HdNPVEKFYB976GszL2gRhy+ciPi2aJeckIjEzDglZq1hSdiJikiKRlpvECkqzsVqE4LSCFLamJA0ZRanivhSWU54h7kuHu5cnU9fQQvC8GWg4sIvdvHMd9767K967O+zW3Zu48s0VnL1wTnLxPC5duYTr1682u4Zr4vLipQvs/AVyHufOnWYnTx3D0eOHsLdhN6MzcCFi+zt63Eg2YqQvJviNRfCcWSx8eRiSU+NRVFzA6vftxcmTx9DU1Mj27WvA7j1UR7yH1e/dLYLxVlRUlLM1WasRHRulqCEOnhuEmSLwTvKfxGgRjmnTp2IGhWCBwjCNUAeKSzJj5lQRhP0UK9ONGu2L0cLYcaMYTapbvHg+YsS+gSQmrBSheCX6+viwDmJbY20j9R4mXbt5YsiwAYpA3H9AH7Rvp8KrzRGq7zU3NVGMANM+VkvkGTsbK0aTkulMLG0j5e2kpbmp4mwbrc1AZ23l7TINDtI+0NHBltHosK62Ngdr0qWLN7y8vOHu3olRAHZwpF7DzszRxZUX5pADMdURW9vYKQKxtELehxFimj/0cTjmQEwhuHlUWPnn8qS6D6H4cx7ZpWBM6D4Knq1b0WqMXysCLy3gReTV5ZQDLy3IQUGZUGCUXk8K0HRbqif+MFqsHIDJZ39xn/Lr/0sg/e9mIYKqppoao2UJqdXavKmTGb3JnR2dMKR3L6amqglnWxF87V2Yg6U9nGycRdi1Yh72bnC2coSThQ1zsbLnUWJ7cytmZmDAs+TlwCa3kZK7HtCHsne33lgSModNGj8ByxYuRv3W7ez0wUOoqarCkgVL2MrIWGys2IjivGK2Z+tOYQce3r3Hzh4+hKLVafD382ftDMQHc8BEWPUdx7QcusOy5yhoOfdh+l1GIDKlADfF0Tk5ffwoctKSsHPjerZvx1bsFP9+aWY2O3aoSQTi7bh64Swry81GfkYqUmPDmYmxEfR0qb2btNCGvr62+JLR6WQpCNN9bdq2UpzyoC8tnbJRVe/IaBnrTdU1+OnhPTZqxCh0aK8mqDI1VR107KAlBWOhvQjEdFAhj75TwNUROzRDMzPWxacnr0gjH9HK5SofAnFrDsHyJDxTgUaIdfX1GI1YqmobomBtOVudk4NF4YvhLzZ0ZO7ihQhduggxiVFsTkggMnIykJASxzJFIM4tyhQb5mVMnyYr6uhBT1vSTsUIqlb90Wt6ORs5f6sIqBswRoRSMmR2NXr7l2P4vM2MQrD/ir2YGbufzU06jIWrjwtHGXV+oFHi+PKLLELcnpd+HAErm9iEZXswYv42dBmTw+z7x8Cu5zL0n1HG+kwtRt+Atejml896+ZfCa8waHpkm/QPKRFCuFNc3syWrjyF+7QXFQhy0Gl1h7Q3FUtLhmScxY8U+TA7by4LiDmJmRLXYGLVlNCpBkyapmwcTt+WNpDS6K40OywGZNtq00VQumSDyDoCvf/0hIMs/k59Pry2VR0hBW34+jTyzNlJnCkWJRHMolifdSSFYUzFCrKlhjeiUnTj3zSN27NLP2HvwLn5/90by5gVe/nIPT3+4yb69dgdXT13BT/ceste/veLOCtwdgU/nv8GrJ8/w5ukL9v7VO2k1N7nbgrj+9tVrPBdBkXx37R5unLqKy4fOsgsNJ3CiZj82J+Wz6sUrsT86D0dLN7Hf379D+MSZ8PPuxHKmDsOaKYORNWMIWz3VB4F97OFuoMam9fLAjwer8PzIekaB9tuqBNwoXsHuViXimQjCzw+tkxwsxZP9hXi8r4D9sidXPCdLhOJMSV0WvtuajMcHitnL0zV4faoaL85sYa/unMWOzbvFwecO9tOPj7Gz4Riu37jDKAxzK7b/k4FYhOynj5+xSUOnwkZPDyZix096O9ggYuxADHC2Y456mnAz1EY/a2Pm62KOiZ42mN3Nji3r54zYIa5IH92ZrR7lhdXiMmqgMwvobIYhtjroZqzBPA1URQjuwMFXCr9tYarSBsYd2jLD9rQkc1voihBMNLi9Whs4GRixU1UFmOAzAOriM06cNVTgriUCtmZH5qSugk46anAQl2T0kJ7IWLsG67aUsuqdVSjbWobMkgyWty4HBeuykV2YxkqrCpFekIr4zJUsf302CirzkJSbzNIKklFYkYOVqdFMS1sfzq4uKC7JZCdOHcG3d+/g+wffswc/fI/vfvgOt2/fZGfOn0fT0WM4c/Ysu3z5Ci5fIVfZBRGYT586hWPHjrCmg404eLgRh48eYvUiFFdvrsaqlJVs3KRxGDVuNC+fTMLDFyJBbJfT0xLZ2rVFqKvbgZMnjrDDhw+i8cABHDokOSpe88iRQ4pJd+vXlyE5JQVLwsJY8NxgTJ0RoBghnj17FkIWzEVISDBbMH8OT5abPHkSGzZsGAfgCRPHsrFjaSEOGi2exBYtnIeoqOVIFftckp6eLIJxNJwc3Zi6phbsxWfQ1d2Rde/phXETfBUlE2PFQYCBoZFSiQSF3dawMDdhVCJBSznTKLCMujrZ2VkzDXWakEfbW1okqwO+FPtIcyNjRYmah7OT2C5TUJVKJqgrBI08yyvd9uvbn7tMeHbuwqhEggKxnYPEkUaInVyVukxII8QGhsaMtse0vZVfXznsfjwqTOQA/HGbNjkQyyPCqiq0+mgHfiyVSrRuTfuBVkqjxB/wanTNJRAUEL/6SgrW0iS9P7dR+7jMgX6uHIrpPgrEygFY+fEf31a+7+P7/8u0BOKWQNwSiFsCcUsgbgnELYG4JRC3BOKWQPw/OhB39+yseAOo0Nze0kLxgaDljf18h8LV0YHR6VNv107o5OjOPAVnEYgdrahswlE81x4OFvZcVkGsTS0FC1iZmDJTfQMOXnIg5uF9mtTV/AbTztnTxQOjhw1lUydOxtKQRZgzM4gFTJyC7NQ07K/bzmqqKjB/znz06jmAZWXkiYC8AQfqdrObl67ih+/uInNNFvMZNh6eQ/2g49CVadp4QsXEAToePhKvYZi6KA4HDhxm1y5eQEVRAaqK89m6vGxUFhdgd80mdvX8WTSKf+fS+TOsKGM1Jo/3hbGJLmslPqQqHel0tBSIaRKdppYqL9BBqC8x3S8HETplraraETp66qx3j26o21WH7Tt3s9EjJ4jX0xQfbgmFYOpHLNesdWivzmUVn33xOaO/p47YQBiYmjG37p3FB/5zxSQtauXFX6KvJRSaLMUBj5m1HaNQbGZlxxsioqlriMF+E1FasY5lFxRi5rx5CF4YwlasXInZ8+YiJj6WRUYvRWjYfCSlJrLE9FVYnZ2KqTP9mbaWNkwNTKCpacja63jC3HMWBsyqYkPn1WDInGoRStexXlNK0XtaGYaJMEymr6rHzLh9GBdGC2psx6SIOsyIa8S8tCNskQjHy6lcoegciyw8y6F40ZqTbHbCYUyNasCgoCrmPS4HnUalo9PINNZ9UgaGzV6PobM3sJHzNsFn2lpMW7GbzYitx/iwWkxctoMtzzrJC3TINcSrq64ip+aauO8iW551CnPiD2F2TBObF38QhpbeigDMpRK8MaNLmgDx58DKZRLNYZfIYVi+LYdg5WBMk1iVfyZPtiOtuX3fh76X8iIwyiUZ0uS75lrjDtKiHPLS51QzrK5G5RKmbOb8HFy5/QQ37j9jhy/+jHUbz+Llz9+yx3dOist7ePv6N0YhmdqpyW3B6DoF3ncvaMnh1zyBjpYrplpXxuUBH0Ic/ew9TbijiXfCozv3cXxzHdZHpbKUmYsQOSEQKbPC2NplaTi/ZQ9eP3nC6N+LmxGCIB8f1t/GDP7eThjtYsU89DVFCLRAdXYce3p8C54drsLPewvZg+2Z+LY6CdfLY9nN8lX4+UAZHjVVsO+3puHehjj8sCOd/bQ7B48ai/Bon+RnEZAf1q3Btxtj2b0tcfhlby4eH1wruX4MyxZFIDAwnB1oOoNbt77Fb8+eMrnt2v+fQPzxf1RL/PDuD2yI9xCYa2nBSOwXyEBXR8we1AuOBvrMVF0Vttrq6GpuwHxsTDDa1RKzutqyBX0csdjHEUt8nFjCiE48sW5ed0s2ylEfPc3U4arXkVlrtIO5mgi/Hak+uB0MOrThdmraIrTIdATNNq2ZmqCr0hHrVq1glQmxUGvbEQbiOcRVUw2O6h3hqCGxV+sAa7ENdtRSZ6viw7B9/3bUH29gW+q3omRTKYoqC1lO6RpuE5mQEcfoembRaqTlJbPVIhznlGUhNT+FJeck8P25JavZqAmjoSK20+Op3Ziwv6kOt7+9hUePfmG//CI8eiRdCrdu3xah9yJOnjrDTpw8idNnxL7l8mXJlUs4evw4GhoPsKaDIsAePIC9++vZrrpdqNm8FUWlxWzZ8jCMHT8GU6b6sbkhsxC2bD5iY5ezpKSVWFtegro9dezYsWPCIUXJRENDA0+0OySCN9mzZzcq1leiIL+AJSTGIzIqnJdsJuHhoZg9R+ynRTgmEyZNwPCRvhg5aiQbNXIk/PzGIyDAn82YGcAhOjR0PotdGYXERLGPEEGYrMlIxfLwZTA1t2SGRoZwdXNEl66dmO+owRg5hkK2pF//3tDS0OFSMeLsYM+lASqqKqxVKzrIbydex4DRYhvUp1huo0aNBb7+6mvY21syWiTLyMCQmwkQKpGgJgQ0+Zg4OtiJfRit3yDN76CaYeqVTL2HCdUUU69hO3sKvxSCKQy7wtnFjVHJBAViQyprFKT9vxoPREoLZf05CMulFHJeousODg7i4OUQ27x5M7Zu3Sq2FYFMCrifiUxAk7Fbc6iV26dJ/sb3ybcpEH4p8pg8KY5uq6vTPBHqOa8GMzMzLFmyRBEeae0I+jfk2xRilWuMle9XDrnKtz8O0Mr+6r7/OEcbG1DnANLFwxUu9naQa2qcxBumpiJ9kIiROIpxsrODgwi7xEUc4VAItjW3a2YLW1NbEYKtmK2ZtXRpLjHU0eYgJgc26nhANcRfipBM2rejiWLq0NPUYT06d8fwfkMwwXc0Cw0JwbIF85CRtZJVbp8j3qAA8eF1ZpGh4Zg5dSb69OzL/CdMReD0YAQHzmZhC8Kwd1styovWsuHDRkFdzxRaNp0Z1REbeg7CqKmzWNO+/WjcvgMHdm1n544dxaayIuSmpbC0mBhUFBTh/KnjbF1eHoYM7IVO7naMPrRUm0O9Dok8oY56ExNNLTWBvqztGB2tUg0xjRITPV2a8eyC3j17MeoN3b69ijhYoQUTqHesGtcSt2+nKmmvyiPEn4kPKqERXz0RiLUNJJ16e4sPLAUuqjOigxFpoQe5ZrV163YcgI3Ee0UMxcEMjRir0Sig0LlPb2RXrkNN7RZWvXUbxvv7YcnyCOY3eSJCQhdg1pxZLCxiKdeQhS1bzKLjI5GYkYipAX6MJtHRAg/tVM2ZjrUv7HovRbdJRWzAzA0YNHujuKxiXf0KxO0qEULr2NSovZi+ch8mhu9hY5eIULx8LwLjm1hArLgUoTck/Tij0eOwnJNYuOYEC0k/xs8bNncz8/LLR7/p5eLfyWPe47PgMTwe1l1DmPvQOLgOTUD3CXls4MxSDApchwGBFWy2COPxJeeRQ72IheKtN5G14Qpi8k6wgPDtGB4oAvbkPObRY5rY8FAXCTkMS/Vf8oguLcKi3CWCKI8I/1UIVv45dybhx33oU/zx86SNr7SBlUcalH9Oo9LyDoBXqBPvl6qKBuPe5ara6DdkKbv0zWPc+u45bt17ykroYCC5Bq9/fcDev3kpAtdbEUQpCL/BSxFKqQ727atX7MXjJ9z14O2LN+zN05e80ppi0pfca1fcR96+eIX3L98qAvSLX57g9qnL2JVfyfLD4hExMRAJM0JZzuIk1JfXiCBNo8y/82jotROnMKN3L9bXxhRdjHUw1M2GHdqQgZq0pWiozGA3q9NxuTQW54sj2dm8pTiVFYpjqxeyu5vTRWiuwdMz29h3tavxcFcmHojQS37Yk4UfdmdJl8KPuzPwfW0S7myIZjfXReBWVRS+25HBLu4qR1zMKoRHJLD15Vuwd/chPH/6jP2TJsX9RZeJf+ff/fenx4mAfffKLebj1humGuo8Skx6iYDR18keBiJcEM124oC7QwdYaKozJz0t9LY2hK+zCRvjZo5ZPewQ3NOWTe1sAX9Pc4xxNmQ0gc5ZTwVW6u2ZkQjBNPKr1baVhK+35pFgQl0kaCU6zWaq4jMaMLA/tqUnMGsDY7QWwUZXfE+IlUoHOGuqwFJsU4mpCMmm4tLJmLpLGGJl/HKcPH8EZy8dZ7X7tqK0ugRrNxYxGh1OFSE3OUuSK8JwTkkGUnKSWEJmHHLLs5G1dg1Lzk1Gcl4K1hSmsvSsRLg4uyvmuCSkxIpQex4/PPyePXn6FE+FZ8+fs1/F9fv3v8Otm7fZ1avXcO3adVzjWuJruHLtigjIp3H8xHF2jgZiLl/gS3Li5HE0NTWhducOVlRSwN0aRo0dzUaOGYlpM6Zi7vxgRj9LW5OKkrJiVrttKw4fPoTGpka2YVMNamu3Yu/ePewgjUiLAL57dx2j1fDyCgpEiI1jtChHyPx5InxPZtRFgibOTRXXCU2gmzM3SBGAly6hEB3GC3CQ1OREDsFpacmS1BTMDZ4DHbEfJOaWZnDzcMagIX2Z78jBGDCoLyZNHsuGDB3I3T3kAT3KNCqqqopJx26OTnymTUtLg9E2luZCyCtzujk5cZedNjT4IHz9FQ0WfAVTI0NGfdstTM2gSQsQCV9+8RWMDQ0V22ZbO3up/3BzVwk76rLlIE2eIzQiLKGQ7MhhmEaKjUQYJrQtpjkZHwdiOQjL9cHK1z08PFAg3gNC22ya89XY2Mho1T4dHR2+JIbid6U6aldXV2ZlZcWhX55kR4Mubm6uisfT669atVK8N7HMwMCAnyeHR8o2FMgtLCyYHKrlOSn0WC1xwKAcfpWDMvk4LH/s393/H0MjUI525szWyoJDiq6WNvMbO4xPK1DrJdLNyxOONnYiCFMYlkaBHW3EdTsXZidCsZOFIxwtHZiFsTksjMykS8FAW0cKxP+gUWKaNPTnLhMUiB17DxThozdr055aRHWAvQjtZGCf/pjuNxGT6FSLEDxnIpxd3RAVlcjOi6Png3vq0bhzFwudNxcO9Lu6ULuTThg/bjJSYuMxZvgolhYdJ45ax3EoIe3VdaCqY4ywqGVs0+YUXDy2G6cP7GUn9+/DfnEEVluxnm2tqsDOms04JYIyKc/NQV8ROnt1d2c0QkyhokMHOvXcVoTgjjxKTMGYtKNRYzqdoSahAn7lSVNSYJHCilxSIU2UklBHiTatRWBq3YHRaDH9XP670nurrWcILX0D1q1/T55Ux6UqHIilgxFFyUobKRCbWdkyPWMzDsQdRQgiQ8b7YcuBRhw5c5LFxidgvjiCnxgwjQWFzENA0AwEBE5j8xbMwYrYCKzJTmfLY5chPikOYyaOZbS0r7q6EdroujPzLoHwGpuJPv5rWd9pZTwq7DU2n/Wdtp4nzk2P2ccmLd+NySIAT4vZz8aG7hABdy/8xXUyNaZJXB5AcNIRNl8E4ODkw5gmgjKhx45auAtDgjezXv7r0GNKMXr6F7Eek/LhOjAWnr4pzNxzNmx7hsKuTxjrMjoVg4Mq0XlUFus+vkgE9R1YlHqQzU87gkmLt8FnWgXrOalMBPtNGDN/I2stDmI+/5w2eF8zmkRHZRNyVwjq+CIFYmnEg67TQc7HI8LK16VALAVqOutDn0E5EEv3fQi88oZXDsLS86XXUA7H9L3kg1UeIf6wVDONEJuZeOLI+Qfs9g/Pcf/nl2g49RMbPC4DuVkbeCId+V/vBRGI//kHjfy+w68PvsflI2dxou4gu3zwDL6/eBM/fXOP/XrvRxGKf8PbZy/Y61+f4eXjp9xpgrx5Lu6nldfo8jn9/KkIxb/i+8u32PFt9ShPzEF5TCYrWpaM+1euQG5XRoHy3Zs3mD3El/WyNMYINzsRbDPZibRwJM2dCG9XW7YqYDgqwyaiMHg4ixzhjdiRXdGwchY7mjoPp9YswdWSWHZThOfbGxJwf3sGeyBC7v1tabhfmyLZnoxva1bhdmUku785Dj/uycSjphJ2Ze9aNDXWIykpk60t3YQn4m/w9s1bJh0gfFipTvL7n29zeck/JTSazCPtH+H7pZ9Tl4kLjSdZd/uusNTWhp0eLcqhB0+x07MXO0VN8Vkg7WlZY7GdUmsr0WlPK8eJYGFIpRSa6GGpi+6W2uhpJelqqoEeFlrobKzG7HU6wkqzPfTFtpFo06pwYget3qYV45KI1tJ1Io0Kt0JbOpso+HRyQ11uEro5OjA6y0LPd9JUZQ4aKrAQ21dzsa0lJmJ7a6baES7iwIfEJUfhyOkmNJ3cz2rqqlG+uRRl1WtZ4fpsZOSnioP4VYxGiHPWZmBNURpLEwG4YH0Ocspl2cgrz0NuWTYrEoE6fMUCES6MmJvYVzU1NeDuvdvs0ePHHIR/++03ifgsP3nyFD/99BO7f+873LxxU1EyQZPsrl65LMLyTXb//l3cE+58e4d9Ix576eIVHDlylNHCG6Vry7BgcQgbM2GsNPFt1kw2d/5cLA1fiojICJaanoaNGzbhwIH97IgIx+vXV6Ci2a66HTjQ2IAmsQ8g+xr2YeeOHeIx61h2diaH2JiYKBaxPAKRkZEIWxrGIiLEvyNCuDypetXKFeKAOQFr1qxWyMrMQE5OJksVrzVS7J+1RG4gZhYm8O7aiSfSkYFDfDDMdxCmTJvIBgzsK7Z34rOkq8+ozMvDxZnPbBPat9JAk44IacTYkEKiPi9ARoyNjfiMmFyi5uxgJ4IvLVimwqhcjCbX0fOIigjItHCHHIitrGy4VEJeqpkmzjmIICyjAEzkhTkoMFtY2oh/14xxS1M1CsS03/+w75eDsXIYllEgLi4uZjSKa2lp2TzSf4xb1J08eRJr165lgwcP5svo6GiWl5fHI8m0+h7Zvn07v190SQYOHIjq6mrU1NQwul1eXsajwIRCeGJiorivnM2bN48DOI1SkxUrVogDqlp07tyZUeD8qwAs3/44LMs/+/i+/6iWQNwSiFsCcUsgbgnELYG4JRC3BOKWQNwSiP9HB2Kqm5k4qj9r36EdT5Tp29WLtRc7YOpPOpqWgxT6de/Ki2242EucRVhytnES97kxe6ofthBvtJktMzc047IJCyMKxubQFR8uKRBLPqeyiS+orx5N7vpCBMT2sOs7HA6j/Jm+vSs/Xl4opJXY2KmKD2X/3n2Zl1tnBActgFsXH3a4YT8WhyzAND9/VpKVhbqaaiwR9xFal5xCRnfvnqyzhxdMTM3RhoKkoG/uhE7dhmJNegrbfzQBO2uTsGldEZvh54fUVauwubyU1VZUoHJtMQ421LOq4kIM9OmO0cN9WKtWFG7aKNqsaWmrQU29PS/ZTKiwnYr45RpRCh9/FYiVA4pECi5ycJLRl5JCjxyIKQRp6ehB19CIdfLuhL/T6ZHmQMzlKkqnZNqJjYa5OMAxsbBWYiP+Nh3YuBnTsefEcZy6eIHlFRbif7P3nlFRpdva9rtDJ7PknHMGERUxRxBQQEAxgICKWRFzzllUREwgCoooAiKKioqYwJxtc862ObR2937vb865WEC7+7zj+3P2+XF0jGtU1WJVsGrVs65n1nzm7NojApEkw8y4qRNIdHtg6szpApfdmTJjEoYMGygsWbEIk2ggDA8PEzQ16Yto4Q09O1/B3L0nzD0j4RUwS2jadTGahyejOYkm4zcgGyHxXGatSAhL2IEeE4pEhJlIEuSoKbsRN7NEGLWkDOOSjmP8ipPC6OUnkbC0HEMXHhEGzC1Fn6l7ETa6UAiOz6fHzyW2CZ36b0CTsMVoHLxQaNkjGS4dJqFVz5WCd9BcOHgPgmWDGMG1zViEDM3FosxLwpKsSxgx+xDdL11g4Q4dmQ89IzeBBVgWN1aksLAM8099fIyq8OeqpjDxbUVs/z09ovpt9fgQMeZttRQ4n06kmPep2L/6YygD8J+PNd5fWdjHDWPUZhyKEOtp6WGwf388e/lJuP3oHTbu+BkBwbMFJ/feOFZynMTsk/B/f2NIjv9Q+PzxHc4eKMeh3D3C2f3HcefMNfxy+4nw8eU7/PrxY2WKhLKgripFQBpP/PZbpSC/f/YMb588x/PbDxTuPMSLO49wYmepcOngEUnRqGxoQXLI9x8R3lNoZWOOLh6OODJvpJA3KhrdW7jDRF9bCGreEN28ndHJwViY2csPe6bHYW3fzsLULk0xI7g5dozrLRyeNxgXV07EpTUK51awLE/ClfSJwoW1Y3EmJR7nViYI1zIm437+Ajwr5nrFKcidPwqLFy7GvDkLhd17D+DWzTvSzlr48gd++8w52FV84csvCkrrZr6s4l/8Hv5JoKvgdJQvHz/hdHG54GXnBSdjI3iYmwtupmawoDFctx63SabjkY5FluL6tVVqiRgba9QVzGnyb83l0nTrC9xu2V5PA7a8jbCoXwvG9aryg1mAtejxNCuoR8efBo2JGnRsMnVq0FjIcsDnDF6M/f13qFeTcyOVRUT8N+O6teHEz0U0NNBCI2MduBtpCy4GOnCgz7FZYw9hwbJZOHaqFIUHCoSsgixkkBCvSFsmJK5aiCVEYorC2vVJSCUBTlmXJCxdvRiJqxORkrFSWJ+TjrTNa5CVv0HYWrgJ6zenIjImUtDUNEB0TAwuXjwlPH36WNIm3pIUM+/fvyc+kCS/E569eCEpFNdvXBNu3LpB0nsVd+/cFh48uIsH9++KGDP36frt2zdJoq8JZ8+cxZFjh7B9e4EwaeZURPTqIWO2jNt9+mDI0MEYNWakMI0EdcGiuSRNqULRrkIcOngA23K3CekkPdsLtosUM6Xc0OOAklvMbCf5ydmajY0bM4R169bI46xZs1ZYsSIFy+mcnETSy6xelUxSlYI1q1cKaWtXYV3aGqyl68y8ufPQpEkzGBkbCk4uDmjbsRXa+ir4kRDHDYhBTGxvoWtoZ9jZ2lS2ouemG3xes7I0Ezh/2NHOFp4ebgKngXJDDT0dHYF7L9ha8uI7I4H/zhKsCrK7o6M4ka2llSCL9ziNjeSVadLYW3KIOXeYcXdvACcW4AocHZ3h4EBu5OwuODi4SNk1G1t7gcd/ziFWU1h5DFdzhaujHu9qysQ1+qyZ7OxspKeno23btgKP3yUlJZIHzPD+Xl5eGDhwoMBCnJWVhfj4eCEuLk6kUD0fcBrJoEGDEBsbK3h4eGD9+vVo2LChkJaWJhKrvhZO10hISJDXwYwbN44+56RKQebHZsH9rxpx/JUQ/8exNLNAu9Y+Ap9sPVwcEeTXUeCTo2/rFnCwsRbsbazgSSLMzTYYrjjhQrMidztXwd7CjiTYCo5WjoKdhT1hB3tza8FAR1tE7J/fKahixt1SGF4VqmtsCeeOwYKtd2s5KCojWj8qUdIaNbl7G/FTbfxYgwZTkm+md69IDIsbiKnjxwsLZkzDyEGD0TUwWGju0xJODu4wNDAROE/IkITRw6OxENAlDCFde8HTq50Q3Lk7Rg0ZDHNTC6F+fS2YGptjV26OwtYcnD9ejvJDpcKmtWsxefQI9OzWWZC8YY36NFPTEwxpQNbV1STxry1w0ex6csmR36po39eSUz3HU4nyKfy7ENeVL/h3nDxPyP/P2AyGJqZCwyZeEiFWF23xPlz/WRVoFmJeVKfKsKmljQix+vi96Mux53gZys+eFZJJiIPDQjF8TIIQFNoF8WNH0qDfSxieMFzyyCZNHSOMnkSD7vyZ8PPn3K8A1Nc2h6ZVW9QzaSKYefSAqWs32DUdLDi2GoPGQYvQoleaEDgopyJ/uEjoQYSNLEB4gkJYfAEixuwiUS4Uek7Yi/4zDyIhsVyITzyGYYuOYMhChajJ+xA5uRi9Ju0Ruo3dKZUr1EV27WPT0LJnMtpGpggd+6bBhwS5SdB8IYCEuVW3JDi2jBc8O01DQNxmJCwuE2alnsFoep7WURlCx37ZcG0ZU/n+c1T4e6lxqUSIVelVc+BUOa6MENdVI8RqxFeJ+lZFhNVjRYn8SpThR2WxHFO3Ts0/Dawiv3xcyaUaLVbziqsmX2oEhIWYJ5Wa9JqYNnYOGNdnHM7fei1MmlWIpq2Gwdk9VGjmE43XdFL/15ePFShizHnEwh9f8PHtG7z95bXw8v5TvH70Ah9evhW4Mx1HQdUI5l9FN1mQeXGcsjiPF9i9x7tnr4Tndx/h4bVbuHCwXHj5+IkixOrj0f1ZsvflFghNzUzR3NoM0c0bCLGtPRHRwg3tPOyEjp40NjZ0wPG06cLd3MXYMT4S88PaCoNauSGmmQv6VDAtuAUyhoRha3w3Ye+UKOyb0Qclc/oK+2bFoGhKL+ydGS3sm9kPRdOiUDy9jzCnRwc4WjrR5HyxcP7UKZSVHsKvnz4qkLx++fSFJhafhV+lo99nktoK6G8syF9+/U3gznQsxRxVVvizHPPt33/9FZfLrghN7JtKRNjByFCwNzCQ3GGdOnWFejyBp0lW3QrkOk28FFGuDS0a0xR5ri3os/zWU2oHM7ocLCAJ1qhdQ6hfU4FFmOHHrMURMp64iwjQcfudIsLM99/xOhTOwefACo13dKxzJQpHnfqCB8mvhyFHonUUSI6N6STfoUMLYXVmCspOH8KO4lxhU+56bMrLQNrG1cKK9CSR4nkkzszMxdNFglevXy6kZ60mMSbBS18hZOZmYvvubSjYnSNs35ODHXR7deoyoWGjJjDQNyMJZBFMxr37N/Hy1Qu8//i+gg94R1L89p3Cy1evSJqf0X73hTt37uD8+Us4deqcwHnFt0iAeTtz9y5zF7du3RKukTxfuHAB5SeOCrt3F2J5chIGDxkixPSNwdDhgysXxU2eOh7z5s/G0mWLhdTUNdixIx/FxbzAbjc2bdqE1LR05G7dKuzetQsH9u/DAZJjpoSuczUKjhozebl52EJilEX3YzLWb6hgvcIGImMDNmZmChkk3OvT07B21Uph9NjxsLC2hZWNpaA042iNDn5thO49Q9G3X1Rlow/OIeZfRdXxztbaEnq6umjg5iIoDTd+onOwtsB1/h0d7WWxHMP78hocrn7E6OrqyZopNcfYgG5zwyS16gRLt76+XsXiYl009W5CAt9EOtYxzs6uEhnmy+o4OSmwENvSGGrNFbgIrmrBUqkGAPm1fi3EX+cUsxCnpKQIHLXlXGBVUNkl9uzZA309HaEufR937twJPz8/ITQ0lN7/DPTt21fgBXMspQ4ODgLnB7MQq39nIeYIszO9J8zmzZvledQIe7t27WR/NefY3d1dosrt27cXVOmsLsRfS/H/OPY2nMytvPGmpsZwd3WEuYmZoE2zlVED+9FsSV8wMzZGIzcPNKaZD8PtmZ3t7Uh6bQQnG0c4yEI6BWcbJ9iZ28HaxFLQ19ahD6wqQixS/B1/yBWrPOlkq29qDXf/MMG6UXOZ1dWikzGjRL1qy8/MDN+/trYetEi8mZ9oX1MSvzat2wnhwSGI6dELg/r2E3y8faR0nKWlreDm7oi2bVrTrNJRsKKDctiQkTQ7XSeMGTMB7h6N6MtiKGhp6iM0pBuWzl0kLJ+/ECsWLcWe7YXCwtmzMJtX9ob4C6ZG3FTDCBbmxoKpib5EitVGHJwioaGhpFMwXwuxKjjqTyZfR4uVn4H4p3UWJwV5fyqEmAcHPZrpmphbCo5u7vSe/VMkTEFp48yRYqYuCY+tY1WVCVMLa0mdqFOnvtB78GAUlR3FyfMXhNETJmAISW9I91BhxOgE9IyJQihdZ/oPjsOgYXGYMHmcMGLUYIwcN4JORn6ChpEnDJzCoO/QWbBvOgjmDaLg0CJe8PSfgybdVqBdzCah8+BcdBmaj5ARBULQUG6OkVdZhi142HYED89HaPwOodvoXegzZT8GzzkscMR4zLJyjEhUGDj7EHpP2osQ2pdpG5spLZsbhSwQGgcvgE9oIpqHL1EIS6TXkQrPgJlCM9rHy38GifB0wb3jFLQgQQ4elieMXlqGSctPovfYPUL7PqtQo5YGfQZ87PLAphR8VxetKoslq2T4ryY81WGB5vupEeF/F+Ia0NPWQuKYXkLesv5YMaYberZ0ETo2tIGVgaZE1iTy9mOFGPPj1FAWdfz0Q1WZHz4JcKvnRlZmQpRXQ6yYswXhUUmCW4NQmFs2g7VdO6FD2xgSMRbhDxVUiPFvnxT++A1nSw4ic36y8PuvX/CJRODX958ELr3GVSR+fftB+PjuoxIhrhRapcuaEgn9DZ8/fFT2e/1WePPkOV7ceYir5eeEgrUZUmqtMkJcIcQv7j8WOrt6INDFCY1MjYRm9H9saGoAO10tIaK5O44vH4PDCxOEjEHhiPdtgoQKJoc0R1wbT/T0dhV6+5Agt/TAgLZewujOTbGgZ1usG9xZyIoPxo5JvVBMIsyULR2B8qR4HFkyTEga2BkWdMJ1sHEW2rftjIKt+Xj74qXw5hldcmT89RuBy9b9+q5qUeKXD4ooixgz9P7+xmJcAb+/ahtnaeX86TPePH2Bg9uKBTdzF2nIYUsnacZSWxsG9etDm8ZihoW4LkdyK+AocT2CpViBbpPwcuRY4H1qVu3PwluvprJNoGO4Hot1jZ8EDpLIZL0ipY1LXrEwqxHkWrwYmyd2tA9Thx7DqG4t2GnVExy068NFT4tkmKVYG2aa9aT056SpI4Wd+/Nx+EQJ8oqyhZXrk5GWtUZEl1mUslCqSyxcPldYtnqRNOhI27RKSN+8Fhlb0rBh6wZhc/5m5O1kCc4VDhzehYOH96Jwb4EwNCEeJsaWJMbNhOJ9RXj0+D5evXopcMrEWxLid+8+VPBeUiiePHsqPHz0CFevXsWRI2VCCX13jh8vI+k9L1y/fk3E+PbtW8KtWzdk24WLF4STJ47Tc+7FihWrhXHjx5DoxGLo0MHCxInjMGPmNMydM0tYumQR0kiKc3O3CcV7i7B6TSpmzZknrFyZguzszRJJZopJhouL91QuwisiYd5ZuBM7CvKFgvx8iSLn5+YKOVu2EjnYsjlbyCQ5S1+XhqVLlwh+gSHSna5BA057dEW79i3RvmMrhIQFCpF9ItAzqht6RfcQAgL9SCg5HcJAYOHllEulwVB9ONjaoj6JrZ2djcAL7Xjhsq4Ot2A2gIWpBYwNjWFnYytoaGjTmMcpiUoVCV5YbKCvQ/uZCpxCZkwTRfX4ZJlt0ECJDjMswy4ubhIZZliG1euCE32/SIhVFFnXlY6xzNcpE6ocV0+h4EhtYmKiwEJc/e/sEpyyoK+nK9Sh72BycjK9t0sFTrNYtWoV+FdsZu3atSLWnCbB8EK51q1b0yRnrxASEiL3V6tITJ06VQRZ3Z/lV1NTszKFg9t+c6qFi4uLoMrv3/7P3wS5/hdC/HWViv8o34T4mxB/E+JvQvxNiL8J8Tch/ibE34T4mxD/rxbiBm7OlQLm4kJiSYMepwYwnu7OsshODeE7WHHKhAtc7R2FBiRLDVyrUigcrR0lV9jdwV3gtAkrUysahCwEfXrsf4gIK0KgpE1UJYpznmKj4N4kJsMF28YtSCrNKwVB+RmXc2SVtrZcqkrLygma5vbCT3TwWtLrqK9vJPB9XEjsWvk0F1zpgDShA5m/FIyjuz1ixzaELh0sjBF9GebPnI1hgwYKMZH9MGncFAwdMkJo27YjrK3s4dXQWxgYHYfFcxYgd1O2MHbUSNjaWMPY2EjQ1tKQg9DSwkTQ19eSxXOqAGsQWlp8u67An4GaS/y1GDPql0JFzTVWc5CZn+ikoqaiiBDT+2BiZiE40WclOcQVEwqWYH5czuNmNLg1posHrOhzZSys7WBPX1pu2ML0Gz0Gu44eRfGhUmE+fQk7dPJFl9AuQszA/vDr0gnxo0cKET3DMJxTSCIjhInTJmJ4whC06dBF0LXrDMumg2Hq0VtwaZ0A+5bxaNZ1keDffwMCB5Nwjd4phIzYLi2SoyfvEbolFJL45iE8IV8IGZaL7qMKETZyh9BzbBH6TC5Gv1klwpB5hzF8wRG5ZAbMKkUUCXPQsHyhRc91aNo9Cc26JwttolajVeRq2p4stOuzFv4DNqBZRJLQtncyOpLk+oQsFJQFeAvQIWqNEDFiG+LnlSJy3F6heegcKXv3w4/cNpt/ClbSGurU5uOEJzfKBOdrAa5qLVolwSr8fVB+ClRlmB+7hsL3P2FgeHscTZsknN44D4dTxmDfjEihZG4Uskd0RlJcgBDRyh0OxjoVaRRc+F3NbVYGWC6zY00nhJjGbsLAFq3R1X88nJ26CI7OIWjaZgQ6dp4lTJiwEn+w+KpC/BsLccXiOs4lJp7evY2Xj58q3H+Gxz/fxeMrCs+uP8Czm/clD5h5euMRXj58LpLMqAvCKnNkPyuXn0n8mE8kxb/QY945e1WYFj0Sj2/e/JMQq6XcmOVjZyDIyQMdHOwEL5Jhe20NdPN2E5bHBWNUgA+Gtm8o9CPZ7eHtjEB3a6Gzhw3aOZnB381K6OxugwDa3qWhnRDh44wRAU2wILKdkDLAH5nxodgzPUY4vHAISuYNRNH0aGFxfz8Y62iiXQsfwcHeGduzc/GMJJ95cPUOntym9+jeY+H5/ad48eAZXj/9RXj7/BXevXyDd/Q+MJyW8uHVG+Kd8OntR3x5/1HK1zEf39D79eARDuXvFlwtnGFDYmGmpSVwiTVDmjRr0TjDaNDYpoiwIrx8W4NOrOptkd5qwqxKMG9j6qhSrP6dUyRqVEzCCCkdScedbh1eYFcTtrr14GmshfZ2BkKwmwUCXEzR0ExH4Pub1KsN83p1BCsaXy016sOMxlbGwsgIsxKnIL94m1B+9igOl+/D1h1ZQipJbsaWtVi7cZWQlLZMcoiT1yYKfJ1TJtZkpAiZOenYsCWdLjcK2fnZyN+Vh/0H9wjHjpfiWPlhHC0rFbYWbkFgULC0OGe6hXcnST2IJ0+eCq9ev8Lbd+8qc4p5oR0vunvx8hfh6TNOn7iH02fPCHv3lWBHYRH2FZcI5eVluHzpQmWjD0WKb5IUXxcuXbqMEydOYt/+fcLqNWsweeo0JNB5ixk7YQzG86K3qZOFOXNmYHnSEqxLWyvk5eVgP4luxoZ0YfacRVi4MBGrV68Stm3djMIdBdhFcqywk9iFXTt3CPw3FrT8PIW8bdtIiLcga1OmsD49XXKJR48bK1jZOkLf0BDuDZyFJt4NRYp7RXYTYvtHok8/zh+OFDr5+8GUPIMbUjH8M769jR30dHQr0JEyYOZmZkIrb2865xtJKTVGV1tPAnBczpRhGWbx1SMHYkyNjUVa69WtLfCYqFm/nqRaMBzgcnNTJJipSpH4cx6xCqdLsAjb0Gtk+FzAr7kqoFElw9X5c9rbT5UpC2qqRPX9eLu6Roslk72CF74xvC/7g9qKmXsUsJCr/sH7s7Cy5DK8L+dSq/LIf+f91Rxr3sapENVzitkv1P0rUyT+9n8qqFpg91di/D8Ci6+djaXQqlUTkUgbc0uhQysfOdGa0EHDtGnaDA2cXeDupNC0gRcJJ4kxSRTDOcM2pjZwIjFmJHLMEWJTa4ET1CV/+HulMYfSre7PQqypbwwTZ0/B0bs13GiWVZvloI6y6l5LUweW5tZCgG8XmLo0Rj2adTO162qjSXhfuAVFCj503a5Jy0oB4Q+U835q06DNGBrpo4VPE5iRLDJNGjfG8LiBmD9rpnCQvvy8aG5wv1ghsnckFsxdiEk0M2KCQsLh3bw1bOiLy8yZN0vJy/1BWSylSbJbi04MurpaFWhAW4dlvK7A+cN16vAqfuULxl+o+rxYhQ4uhl+v5ExXCLH6BVHFR5Vm9QDm2TAvlqoU4rpKlQlza2vB0taa3nOOHldEXr5X8kjV29q6BiTE7rClSQVjaWUHOxJjtarFgLETsevIYZy7ckUYO3EiwiLCED9qmNAltDMGDh+EruFc8zIMMQNi0bNXNwwbNVwYOnIIRo5PQKPWoYKufRBsfOLh2HGS0Kz3Kri2mwKPgIVCy8j1CB5RgKhJxUI3kmLOG+45TiGS5LjXeF5ct13oSsIcPrKQpHinwHnGkXS/uDklwrCFRzB88VGMXlYujEwsw9D5h0SymSAS6k4DNsJ/YKbQsW86/OMy0Xmggm//9fDtmwG/mPUCS69fbDoCBqwXOkanolWP5WhZgW/MWvSIz0XfqfuF4KE5MLFtijo16wkss8p7yx2VGEV8a9WsK6gCXD0qXF2GeQAVEa6I6KrHR2UnQpo0NrE3x/w+fkJK/yBsGNwVBeO7VRCGnISuKFs7WjiRPh5HkkZgy8QoYUK3tmhHQlfzpx8FjuK1tjBAL09HIbZtV7Ruk4Dm/vOELjGb0Wf8brTqOFaYMX4Bieb7PwuxSDFL8if8RhzftRtPbz0UXt57iqfXHuDJtfsKV+/h+U2W4SfCvQs3cPvMNTy8ckd4+fgFPr3jSLNaRUGpVcy5ssynt+/w6OptXCw5IkyKHIFXjx+RCP9eAS/Mq+p89+XTr3hDYj6VxgCmuaUZPAx10M7BUhju3wy+LtZoYmEocDOKZkQLWwVvK9puaYgQL0chulVDhDai96qFq9CvvSeGB3hjSvdWwtSI1lgc44fVg4KE+ZHtMYu2TQlrIQwLaAwbY1306xkqtG/ZCudPnMH5YxUcPYNL5edxoeyccOXkBVyky/PHTgnXz17Bwxv3RJoZnhwwLx9U8PAZXj16QRL8THgnwvwa5w+VCY0dvGCsoU0irCHo0/iiR+jQuMJokxTX53USHD2rxSKsyrASLeYFcaoYizhzRLmaEKuyrOYg16YJV01eXF1TwYoE2NlIA15m2kInJ0NEeVlijn8DYWOfFigeF4yjM3sK6wb7I8rHCW0tjQQvI1046NSHaX2FhJH9UXKMZPXIbqH8zGHsOVyEjNz1wqr1ycRyrN2QLKyk64krF0n9YWbNhuVIzUzB2szVQlZOJoqKSQD3KhSX7MbBIyUoPXpAOEISfObcKVy8fF44ffYUVqamwM2zkaCna4T+cf1w7txJ4fmL5yTCNIF5zxUnFFiM39A25heS4idPHuPO7dvCqVOnsHvPXmzeWiBs2pJHknwAp8+cErgqxbXrV/EzjdXMlcuXceXKZZw+fVIo2lWE9RvWY96c2cKoMQkYM24MXY4SxowbjRkzpmPBgrkCy+rWLZuxZ3ehsGljJu03CYOGDBdmzpyG1atWYnN2prB9ex52FOzAju0FQkH+9ooIcZ6wZUs2Mun501NThZQVKzAiYSycXBsIWtpadN6yQGNvT6F5S2/JHVarTPSM6o5BQ/sjpm+kEBDoTxNzN5Fahptm8NoKO1srwc3VBQEkzS2bNRXsrG3QgPxCjcjq6xnIr+I21lYC/wLLVSbU8ZTPsVxtR404G5MT1aIxsTbdl+EqDx4eDSqrSvCiOl5EpwowX6+OLTmDowOJsa29wOM5LwSsyb+EE7y+52sB/lqOecyvLsJ8+fX+ap3hv//9n/R+/CSewajVItRGHNXzehl+LFWK1dtM9X3+9rc/5wSzVKp/+3rhHD+W1CrmbSrV9v+rqPB/XJQ5AhzYrrXA0qWrqw9v+iAZUyMTadEa0cVf8HLlkmqOcKMPk3GytoeTnT3JsavgYksfrhnNdkxtBTtzviQRM7EQuEyJyNcP3ymIiPGHqsyI+CDjE72Ovong0sgHXk1aVKZMGBiYIz5hAuYtTBF2cve23v1Rl7YzNehLYNnCDw6dugtOgT3hHNAd9Wjmx/BBzTM8bkbB8MIkbW1NmNCskuFVorMnT0bv8Ahh+KAhmDZqNDLXpAh7dm3Hwnmz0TO8hxDdMxrJyasxdHC8sHxlCuztbOHi7CRI1JdX99dSWiWyBHMDDj1dTcHERB8aLMcVEeK6LMb1ONKr/IShLrSrnibBt6sLcXU4QsxCrEb2pOyagTGsbKwV7FiIOWVCiQjz+/+jRIiVznVaOvpwcvOsTJmwsnGEhSUJkXQ0q4OR02Zi99Gj+PnmLSE8oieGxA9Fp0AugeOHgQlDEBweTINVoBAZG4VwEuLBIwYJPfv0QN/B/eHYvJdg3rA/nDvMROOwZUKr6LXwCV2EdtHrhIhxhegxjhtw7BN6kPxy442oycVCH9o2eP5B6VbH9Bi/UzrY+cVlC/6Dc0Si+80sETgqzGkTo5eWC0MXHMHAuYfQb8YBoevI7dKgQ+2U5z8gC8HDtyJsVJ4QMiKHLreha3yOEDR8M/ylOUem4Nc/E+2j04lUoduofMRO3Y1+0/cJEeP3IHTMDvhGLhZq19JErRoVEiwoFSXU91uNBlc11qi+bx38SAOormY9tPayE7wcLWQRnTohku53/DNzRcSusakBejZywOTOjYQFXZtgdWxr7FvYXziUPAKHlsfjwDKFg4kJKJreH8tiAwUfcwM0MtRCkJO1glc7NGs7HiGD8wTuwtdzeAYddxbC0sVp+OMzd6R7L/xBUvzHFxbkitSJ3z8hc+lyFKzfKnx4/U4imq+fvRQ4JeDN05eVi+RePXyBp7cf41kFvzx4QQL3XlIBGIn0VqRPMNzO+cqhkyheny8c3JqvyO+/qjq8yfUKIf79188Seb5z/pIQRuOBM01kPWnizNjpaMGevreuJnqCm4kuQn2aYsnYScLUwUMRFdAJ0b4dBF83OuHpa6GBmb7Q2skCXRo6oEsje6FzQxv0aOGCkCb2QicPG/jRBKSts4XgQfexMzGAu4OD0DuEJi/7DqE4f7dwqKgEB3fuq7xdsCkX2as2InXRKmFjcgZKi/bj8smLwt2fb+HRjQf0Hj4UXtzlSPMjPLx+V/j46p20wn58+54Q2DoQplo6MCAJZvTrKeXWdGpzebQ60OOFRRxkqIgO1+WSaBz55bSHapFfVXirR4oVaDtL8E8/CJy2U792DTgaagguxpo06dBDF1cTYXhLBywIaoys6DbC7lH+ODC5K04t7CP8nDoct7LG4/C8/sKU4GYIdLWBq4WRkJq+CIdP7MeRkyXC+SsncPD4PqzeuFJgGWZWrksSMrekSurEmvRkIWf7RuQXZiM7P0vI35mHg4f24uTJY0LZ8cM4Un6YpPigcPT4UZy/cBZXr10Rrl+/grITZRgxfoJgZMS/3Flh/oL5wpUrF/Dy5UupNCF8eC9C/OrVK+GXX37Bixcv8OTxE+Hunbv4+drPOHHquHCotBT795dg/wGF8vJynDlzGhcvXRR+vnoVly9fIhk+JUh3s5xcLEtaLkyaPAkDhwzG0OHDBK48MHDIEAwdGS9MmDwVi5ctxqbMdGFnYT5SU9PQIzJW8OvUGT169cb4iWOE5cuXkHCvIzneJORs3YLcrTnIzsoSUlakYNaMWUo5NiKczqk2di6Vwqmtqw1LXsjvpbRq5nSJgM6+6BoWJPSPi0bfuChEx/YWfOk7xwEGXgzHcCdU7kQXERYi2NnbonGjxvAgWWVcnZzQook3eYmW4OzoIKkRkmbBwaUaXGGnrlSfYPT1OFKsVGtQYW/5/rvvBQ93N0lhYBFmOErMUWEux6YigkznVkaRYntY0jmWYSHmxXvq+VwNgqnPVV101ehwdWFWhfjPr+9H8ogaAkuvKsEM/00617GoEjXpu/j3v1cJK8vz9xUd65jq4qqKMm9Xb3Pb5+oC+90/lcf+WjrVx/l6O3fO+3r717f/2/kmxN+E+JsQfxPib0L8TYi/CfE3If4mxN+E+H+1EDfxdINfu5YCf7hNGjWAjbWFwAdlp45tYG5qKjjb2MPZzgGOtnaCk40DXFmOHRUcLB2k9JqDpb1ga2YLK2Mr2LAYE5yELmkSLGMsZT8qIqbmypqYmqFPVDRio/sJwaHd0aB5e9g3biWYOnvB3M0b1o3bCrEjJ6JNYDjqGVoItepowrpNIIzcGgu16mnCtl1naOqbCiyLP/7E6RM/CvzckjZQg+sRkoxq6MCMxLhFs+ZCdHQMViUuQuLsGcKE0SOxcPZ0bNqQJqStSsaCBUuQl7ddiB8+Qr4IPj4+Av8sUbtOVQk1Fl5eVKerpymYmOpDm4RGi5tzaCq5xIoQs9wq8P2ryrL9WYg5pYK/NGouMT9fjVqcMqHIrvysY2xGg4y9YGlnKSkT3L9c+prTZ/BTDWVxHaNL8uzs4VWZMmFl6wBr+pxr1mKxr4txc+eh8PAhXKSBlRk1YSLa+raBr38HIYQGqba+7dEzupcQGOSHPn37oEdUhMAL7KJi+8LAvotg2iAWjcJXi4gyfabtRVsSSv9BW4TwMTvRiyRSFdr4JUcxJqkM45JPCEMXHkbsjH2ImrJHCE0okAYbXYblCh1JaruNKqwU6qELDmF88klMXKEwZeVJTE45VZlCMWjeIcRM59SMQiEsIY8kewc9bq7QaSDnNG+qqFWcS68vHz0nFNLr3ifETDtAwlyIDrGbhO70+ofOK0XcHIXek4pJqgvRpleiUOPH2jQIsegqKSm1GU6LqKFu/3chVkru8edO+9AAumBAKA6vHCvsnj0Uy/sEomdTZ8HKQFsGyn/SYM3wAlaeFNatwSJSAxZ0zHV0sMSw9p7CshhfZCWEY+e0GGHfvOHYRUK8pq+/sKpfILyMtBHqZi+0dPahSZ4FTbrcBGt7f3h6x8DSurVw8fw1Esw3+O3TW4Vf35EgV0+h+ICHt29gUNco4RUJLIvtp/cfhY9vP+BDxWI6htMjfv3wqTJnWNIkfv8Dn+lvDC8o+8JSK4vHvkgTj+c37uLkzlLh1ZOn4GYcfy679hvev3ojKOkWn0m+fxHunz2PgUFdKoU4wMsVDYwN0MBUIdizIR6evYCnFy4L+7PykbtiDUqztginszKRMXUKOro3FJo7OpJIG8BBn+vhMlqw09eGja6CFU3ObbSVbYyriSFsjQxgqKMrLJgyBVtSNyIjZZ2QtWoD0peuQPqylcKaRcuQMmcR5o2bJsweNRUr5yYjb32OcHR3CS4eO4db9Lkwty9ex93LN3Gngg8vXklO8ceXb4VFU5bARNsY+iQFjG6depIywakSAstwLV4sV0FFeoQqwIy6vTqVosxjFy+M4zz171mIOU2iPpwNFRqa68Lf2QR9mnDLZ1uM6+CKeTSRS+3VQtg+tAOKx3RB6aQw4dSCGFxZHY+raWOFK6tH4PDsGCQOChQKc1dg54HtOFS+XzhzqRz7j+xFdu4GYeU6pZxa9rZ1Qu6OTdial4kNm1OFnLwsFOzMwe7iQuFAyV4cPlKC4yeOKZwqw+lzJ3Hh8lnh7NnTOHnqBEnoBeHWreuy0G3Xvl1CeK/u0NMzRFPv5sKWnAwS559Fepk375RcYm7vzLAUszCzGDOcd8w5xWod2vPnz+JY2XF6XaVCaemRSilmLl26hIsXL+LSxQvCuXNncfBgiZTiYri5xsLF8zFtxhRh8tTJmDR1EqZMnyzMnjcbM+fMxZIliUL6ulTkbsvGksREoRMJsY9PC7Rs2Urw7+wvLaLnzpsncG3hjRnrsGTREsHPPwRNGrckUXUWtElilZJmdQRjOv5dPJzg3cxL6OjL6RK+iOG8YWLA4H50GYU+sZFCxw4dJO3Swd5O4PxZPge6u7kKLZo1Q3MioJOf4NmgAWytbCqfj9dNsPCqrZ6tLcwrzq3K+VcNNKkBLB5bnek7zeXSGFMTE0mZqJ5DrKRKVED/RysrXtDnWMGfc4h5bOfXqwoxn+NV0a2eF1z9enX5VcW4+jZOUVBTJmrVYimuul2vvpI2oaY8sF/w7a/FVxVoVU7V+/M2vq3uz7e/TntQ/1ZdbNXHVVs9V23/a1H+j8I9umvTm88YGuqiY5tWNBPSF0xNjBEbGSp5xYy1uSXsrW3gRLMaxrmiogQXs2bsSYI5Z1itMmFlbA1rk6oIMc+2JIe1QohFigk1+skrRJ0cXeHbsbMwcfx0JNHMddaM6UJwRCSsPZtB18ZD0DK0hIapHerTczC16+vAqpU/XDr3FBr6hcAztDc09UwEpRkB510qB5Q0B/mOZlCa2kKN2vVRU6LRXNmirgxWjb0aYWBstDB90gSk0Ax53ZqVwoRFPRDdLxo523IFnybN6T0zk5X9jKYGiw4LDFeH4IhuDRFeFe5Wp10hw4y2Nlef4Bylqohxnbo8S2WZ5gV3VTNHhq+rC/EYFmKpQ1zx3vIKWkMjE5JaG4HzsaRDXcWXhff5UYRY+RxYiF0aeMHR1UOwogmPBX2uakRy4sKF2H30MK7fuy1EREWhbcfWiOjdXejoTzIc1YNE2F8I7xGOiMge6Nq9q9B/UH90CAyDoXM3wbrZWIRO2IsRJLpMX5Le9v02k1TuEKKmKCI7YPZBYfD8wxieeKyy0QZXjOg784BUimAChmxDOxLR9n2zBN+4LSSxW2VhHhNDj8UiPWnVaWHq6tMk2CzWx4SYaftFaENJzpmgoTkksNtI1vOFkBFKlDho2Fahx7hCRE3eg7i5JcJgEu7hiUfpdRcL4STVfafvR++JewWW4eDhOxAxTsGvx0x4No+AQwM/wcK2CQyNHWnSZCloaJmibj0DOha1hBo1ucam2sWopgjx8I4+mNqprbC8VzA2xHXF7gmRQk58V4wPoZOtvbnAx98/eTCrmDBJTfDvuaFBDcFMWwOhnjaYFdFKSB3SFUtj/DGopbswP6wNJgQ0x/AObYVOXRfCs91kOHoPFcxs/Oj1N0ZY+FTh04e3+PLhNUnx20p+//xWosQSKf7toyy627klR1gzL7ligdtvwpePX/D5EwnuZ66hy9uU6K7UI+amGrTt06t39ByfBI4Ov3/6HA9PXxLun7yIxxeu4cnVu8Kja7f/dH9eWPf83kMczdkrSJT4ty/0WB+F13cfYd/GXCRPmSec3bsfO1PTMbp3jFCQno1LpeX4eO+BULY1H6smkTCMnSYcSE1D6bJViG3VUfi5aC9O5eZjb1q6sHbaNCTHJ2BebIwQ6dMEoQ09MDrAX9gwfDj6+3ZE80ZeQuLkaYiPHoj4mEHC2LgRGNt/BIZGxQp9w7ujb1gERkT1F2YnTMWyqYuRkZQm5K7fgj3ZO3Boe7FwdNdBlO89gtMlx4XdWwvx+M4Det9/Fa6d+xleDq0rI8S6dfmSJvQsxwTLsDZH1FQhrqnkCVfKb62qPOLqqLLMVSJ+kLFHWSBtQCdoJ2NNmmxoC02t9OHraEyTLzNhSHM7TPX1xJzOXsKm6DYoGNIJ2+I6CHsSuuBiyjDcy10sPN2ZggfbE/Ewf4lwd3sSLuxIxeGSPOHEmVIcPFpM4pslZGxeg01bSYS3Zwq7dm9DYdE27NipsHtPAfYd2I2jZQeFI0cPSmT4LEkwc+7CWeI0rl3n3N0ruH7zmkRlOZeXuXHzKu7cvYWfb1wRcnZsQ0BwCHS0TYSIiJ7Yf7AQN25dFbhbHVeZePNG4fVrJUqs8uzZMzx+9Aj37t4Tbt64QcJ7CSdOnhTKy4/j0KEjOHasTDh9+rRUo7hYAdcoPkPbjh49IuzcuUvqAq9IWSHMXzgXU6ZNJTFmOZ6CWXNmYebsmVhA5wEmecVybNiQhu15W4QF8+ajVav2JIMshQ3g2dAL7Tu0Rt++fYTJk8Zj+dJFiIqMFrS1DUnKeE0PB454sq92dlXOf+YWxvBs4gHfwHZCUAidUyJCMGBIjNB3QDT6D4hFTN9owdW1gQQVatbghkScE6x4jNqIw69DexgbGYs0M/xrOIuss72twL/iGhsaVAbMfuCxsYaymJ0xMzWS49XczFjgX+N4rY+2pobAvz67uLhKhzpGFWJVfK2tbYWvRViNEPM5tl49XlDNXUmVesp/JcPVxVeV5uoirN5mOCo8lT47xtPTQ/6uCi7/f6vfZkll0VWfj+WUL7kjHcOvjaWxKvr8058Elq9/LbmKKP+jInpctU0V7r8S4K8F+j8Kl+NQf6JwcbanD7kWzZL0BTea/VjQrEftxGJrbgVXRyc6eBwUbBylJbOLvZPAVSYkMlzRmc7O3B6OFvawMDIV6tBs69+F+IfKGRGXIuMIWb16mgKXOrOydkGr5h2EhFETkUgzy4WLFfoNGQETayfU1DIQ6huYoZ6BKbRpG2PZoiOc/cNhQK+D4aLbPNP77geusKBUuajBC0JMrYSadTXQsnssGgR2F9xbdoCxlZU02GC4gkSQry8mjhktDOjTD31jh2PjpmzhJ5KK+vXq0szSRNCszwd2VWcxPgCV9sxK9LeuCK6yneFtGnQfU3NtwchEk7bVlJkcw93tuDqF+n7xKk6+rJLsuvKlVN9bXoSoS1JvSa+bMTQxkhSVyvefD+qaVVUmjE3MZVGdnZObIEXRra1osOJBSwMzk5Kwt/wYTlw4JzRt0RK9onrRoNdWCI8IRUh4EJrRLJzpRkLs18kXYd1Dhc4hAfBoFgBDpwjBIygRgxcdw/zMC8LstDMIHE4iGr9DCB1dhJ7j96APiSoTO/0ARpBw8sI4ZuC8UtrGbZv3CSyzHCHu0C9L8B+0DR37b4Rf/81COEnugLkHMWrpcWHSytMi1glLyoWhi45IxDl81E4hYkyhRHl7jSsSojhdY8oeek38uooQFr9dyrv1HL9LYDnn1tAJJOoMd8LrPrYIXYYVCL79c+AXtw2D5pQKvMhvwspTmJdxSViddwMrt13FtNWnhNCEfMxac5wmXvuEMTPz0W/kKvh2myh0Do9Hi9YhCGzUWOjXzBPjOzRCSo92QnKvdtgyOgKHVowUNk6MQpx/U7iYGwg/8ALXf6pyzIMcnwR+QEMzXaGzqzlC3K3h52wh9PRyxtq+IZjaM1Jo0301ggZsQ8z4vUIcvT+9adLQn64zR09wV7X3VTIsUeK3lRFiTqHgtAkuzcZMHzweNy5dg9J+uKLTGomxumhOadLxfysXzXFlBGkmUZEiwVUluL0zpz4w3NqZy6+9fvxc2J+V/afGHP8iIb5/+SbWj18ivKJ9pMEHSzjx9v4juk8u8lKzhaLMfLy+eRs3y08Lx3Zyy+mDeHDyrMKhcqRPX4i4rr2E1VNmYOeiJAzzDxMen7iAu0dO4GbJMeHSzmKc3laAo+kZQu7kqYhr3RrhDTyE4e3bYrR/AIZ26y6MiolDXHgUegV0Fbr7dkZUl1D06NhJ8PdpicDmrWUbM6R3P4zqOxQTB40S5o2ZiawVmdi7dZdQvucwSrbvQ/76bULhxh2YNWp65d8fX7uJGSOnkKjqCHq8SLd+PUmdYDhtgsuvaVWgwSv7K6LGIsI1KzrNSVqFsuCOI8O1a/4k/MTjDh1vmrVrCA56GmhmowdfZyMh1MOCJmiWaGGlJ/jaG6GHpzmGt3IUksN8kNa9OdZ0U8iM7oDisd1xLX2S8GTXCvyyPx2vSjcJb49swfO9aXhQmCxc3JWGgyXbsTU/U9jMUWES4bwdm4WdJMMHSnaheP9OYRcJ8bGyQzh9qlw4dYqjrydwniSY4YjrpSsXRHxFfu/cxO07N3DzZgW3bkjVh0eP7gvnLp3FWhLKhp5NBUNDM4weM4ok9oBwk/Z9/vx5ZYT49es3EiFWI8j8tyckzY8ePhLu3L6Da1evkRRfEE6fYtktq6Ss7LhEis/T2M1cvHheOEvbGG73u3fvbmRvyRJWr0nB0mVLkJi4UFi0eL4sHJ89d7awLGkJ1q5djY0bNgjbtmzG7Jmz0MS7ueDu0QBeXg3Qrm0LoU+fnpg5dSJCuoYIdemcoiwMrlogxlFKtSypnYMVWvs2R1BXX6Fbj2D0jeuDAUP7CTH9o2RRXY/ePQRzM3O4OzmRZ9QReGGcKpkMd+20NDOr/EWVu9qxdLKXMPzrGZdPMzExFniBvK2NVaVcsvzWqllbGoQxxgZ0/qX7O9E+DO/j5FRVRULSI6oJsa2NIsHqbQsLKxFkjhoz8ithbT63K78IqoGv6lJcXYj/SoS/jhRzuTMu1cds27ZNPK93794Cd6nj5hqNGzcWuNkGN+pQy6Zx17nu3btXthLnVszcbCMzM1NgSR4xYkSlULNQ8qW6SE+V2uoCXP32fyW+/6+//bfDOSsuDjZCUMdW+J7ecHsrS8HOwhJcJ9WGPjjGzc4edlbWkjbBOFjZkQi7wImuM868atLaoTJFwsXOWfKIzemLzvBB+A86yFiK5af7H5QPTxVG7h7zp05Z/NNFLaVLFlOHJFmfHsfFrZEQHTsE61M3YPGixYJ3E28ZYNVOYLVq0iCtYwR9AwuBH+97OpAd7dyEGZPn4WTZMXi06iTUqkcS2qglzLzbC8aN28LIq7mILiM5RSLsSs1f/kJ37toPqesyBR0dmilqaEJPS0PgGpwsumpZE/4/8gGvr6clcB4xi2xVHjDPjutAR7euYGDE+URVVSQkYlwRJVYmEJoi2KoQ83We2aqCo6mtRYOsCezs7QUDIyPl/eFUlR8rugRyHlFFzqkZT3hcPeHg6CpY8YzWzrayysecFSuw99hRHD93RujRJxLtOrZDyzYthK5hIfBo4F454LEkB4UEIW5wnBBBg5a1K7237v2EFn02kmAewPjlx4WJKaekmkTfGQcErgIRN6sUPSbsFroMy5co8oB5BwWpGLHiBIYsPCQMnHdI7sfd55jQhEJEjN2JwEFbha7D8tBz3B4MnHtYGLXsOD3GMQxacERh/iHJU+48ZJvAcs2pHL3G7xY4f5n3GbrosNCX5Ln3hD2SZsFwWofIOck7I1HihJ10v31C4MB8+A3IlfrEDEs+R6kXrD8vzNtwEZm7biB7/10hetperC+8ifSCG0JO8S1s3XcHm4puCVlFt+n2fYydvk1w09dDU3NjBDhaCf0aO2FltC+K5vUT9iUOQemK4TiUNFRYOygIPb1dYKpVX+C0Ck6lqU+DMNPYTB/BHjQukBQzLSyMMCWgJSZHJwhm7n1h4hKDpgGLhIH0ni9MO4sZKSeFZTTJuX79cTUBVvOIq/ORpPeDcP/GTYzuPQyf3n8SpHsad1GrEGKuGSzthUl2GSXaq+QD/+m6mhP8hWsTf8KbR8+EF/cfiARXQnL8y/3HWD9ukVCSnidC/C+6H/P51Rs8OX0BeWuyhKKsHThZWIJPDx8LpblFOJS/H0VrM4SrBbuxZ8lyjOzZR+gf1BV5i5OQOmGG8PnxM7y78xBPTpwVru8/jHP5u3A8K0c4lr4e2+fMxTCadDOd7J3Qq6EXxgYGC4OCQ9EnMASh7fyEzi3aoZN3K4S2aSNMGtIHkwb3wfDekUKf4B4YHBGDhJghwtKpC5G7biu2Z+QJW9ZsRuLkxUianiisX5qK3VuLUL7/mPD45h1cPXEOrpYNBP269SRCbEjnDIZvS7UJGtcZTZr8c+tmTb4uYlyzUoQlMsyTfv61jPOFf+I0re9Rt8aPsNOrLzS30UdIA1MMbu0gzAryQkp0a/RqbCNYadSmY1wTTU20hRBnY4xoaYdxbV2EZSHNkNXPF9s4akzsm9AdF1aNwt2tc4XHJMivjmTjZUmWcC93GW7nLEVp9gphU9Ya7Nmbh+Ji7s5G7CvA8eOHSBQPCqUHi0ksD+LM2RPC6TPHceJkGUnlGeHU6ZO48vNlEtlrCrdvSCe5GzcUlDJot0iWrwt37txC+akyzFmyQLAgYbK3d0ZK8hLhePkREWmuLMFwtFjNJWZYiJ8Rjx4/Fu7de0Dftxu4yKkRxMmTp0iCTxDlAqdPnD51isT9nMApFuf5+tkzwsmTJ3H4yKHKVsxbc7Zi08aNyNiwTlifvhZrVqdg5Ypkga/ztk2bMoSc7E0oyMvB3DnzhUaNm8Le0Z7E2FVo064l4vpHY/iwQYKmpq6c59U+BHydRVCHzouMZ0MXdApoj6BQfyE6lo7nYf3Rf0CMMGzEAIwaMwJdQ4MFA30j/PiDUi+dqUmPZ2JkCAMdHcFQT4/O33UqUw75nMeRaPX5bW3Yd34kD+GOsjpy7lVEmCs/cfraT+Q7tpWdPc2MjeRXuh+/57SfHyWqyykTark1VYorhZhbNJMQq1UlWIJZis3NLQW+Pz+nKvDq61T5qwiwuu2/ggVVjfBypzkLCwscPHhQcHNzQ/PmzWUixHB7Zq4z7ESTCqZbt27ibCUlJQJfj46OlpbPjKOjI7p27VrpI6pUfi201W+rUeFK2a1WpeLf5PR/gm9C/E2IvwnxNyH+JsTfhPibEH8T4m9C/E2I/1cLsZmRAcmwtcAfggGdVLu0byuYGRpLj+/Qju0Fa3ozOYeY0yQYR2tl8RyLMGNvyTWHLaQZhzTkMLEiqbaDmYGxwDX71GYcDOcvVk+ZMOBFQFJ7T2k0wAvgtLV16eA0EGqS0HJjjAYeXkKdejQoG1lI3isTGBRKAhYmif2MDcm5rYMrXBu3FizcfKBlZAZdfVPBoaU/lqemomvsYKG2hi4sfHyhbesm1NHSh0EDH/zEC9lqKjVfeZGT2hjkhx9qImbEVKxIzRByi3bB199PeoYzXFuYfwJSc4j5oFbSJngBXG35MvIiO+5Wx8giOhFgHhj4uZScqqqUi6qVpwwfoPXrc86RkoLBUqwIsSK4mtraMDQ2hbO7i2BkaqQsJKxMWflO3mP1/TYnIXYkEbZ3cBH4S2thaYW6NBFhFqxai/00qN6+d0cICApCi9atERIeLrRs0wqBXTojoLNCu44dSIIj4NO8qdAjsje0TZrDxmei0H/mAaTk/Iy1268Ly7IvYyFJ1Nik48KYpeUYl3QCwxYdEQbOOSiXI5ccE4YuPIoRkjqhyHDviXskrYJTKRhedDd8IYnu7FJh+AK6TfdXF+VNX3MGs9PPYeLK08LopHJ5nJ4kuUy3MYXoM2VvZUrGAHr+WJZdSdPYj7CEAqmCoQpz1KS9Ugu59/i9Qvexu0jAd9NrKhF6jS/G6MRjWLf9qrBy6xXMXH0KfelvwtR9mLn2DNIKbwhh8XnYuPMGckmOmayim1i26SKmrDkrsCRPWXESg6bsF/r3mw5HbT0Yk6QwvEgrzMsRs7q1EZKiO2DDsC7IGtlVWD80CGv7B2BhZHthVGdvNLE0gh4duwx3+2plbYg2diZCIxM9hHjYI3NBsrAi6yLGLjqAwKhkwaXFRHTuk4GZNLFhdh6+h22FF/H510/CH58/SArFn/mA3zitgq//9ivWLlyGwk3bBZHaz9xRTYFlmFMl/iy83L1OuS2NOgRU8H9Fqn/7+FF49/QFCS/dn2sPS/3h3/H+l9fInbdKWDd6Ae6cvVYp2B9fv8Hzs1dwqvCAsGNDLvZs3oU3JIrMz6UnkbN8PVJnJAq5cxbg4OIlWDpkmNDHvwsi2/rjMld6IH5/R//H9x/w6dlz4fmVa7hz7AQu7y4WTmTn4fC69dg5e5EwNYTGMyc3BLso9G3RGhFt2yOiUxeFDgHo3r4TEnr3EuaMGYhVc8YjLz1NKMrKRcbSNJJdlt7FWDknCSlTFyNl5jIheVoiyvaU4s7PN4XHJOt3rt3GlTMXhetnLtEk4j42rd4kmOuYwbBefRhpKBjQ+MtVJ3Tr8II7hibzNA5x2oRQq2LRXUVdYpZiFmJutsFwVQlrnfpoaWcgxPrYY3wHFyR19xEK4gNwchFN5KZHCp2czKBH46ApPQfDjTdcdeujoYGm0NxcDwN87JDQUmG2vys29m+LY3NjhStrxuJK6gTczp4l3NuWiDtZ83GXpJi5uSMNZ3Zloay0SDhypBgnTxzFqVPHFE6UkVCWkUieFi6QBF+6dB5Xf74knD13BmeIy5cvCjduXMPdu7dJfBXuP7hHl3eIu8I9GkNv3r6GnKJcIapvLAwNzNG8WUshe9NGer4TlTnIDx7eFwF+8YKrTSgVJ36hy6ePnwiPHj2mfR7iLj0Hc/Xnn+l1nsfRY2VCaelh+j8dxYkTxwVOkxAZ5kvilOQdl+PI4UPC3j17kZebh4yMdCGd5HctSfCK5UkKK5KwMiUZq1amCKtXpSBz/ToS4yxh2rQpaNLUB07OjoK7hxtatvRBTN+eQpvWLeV8qiwU5oVrHNThykh6gmdDkuiOLdA52Ffo2TuMziHdENsvSogb1JduR6CjbztBSSGsDQd7a4ErRuhq88JitS77D5IawY7D8DnYyMhIzqMMSzEvrlM7z9lamMtCOztra0E551at4eHH09GqenxZvOfuUdmEg2WYK0uoucOqBKu3OW+Y+x+oOcS85ofP+WoAkJ/vr1IlqguvusBNhbep+6tCnJaWJrAQe3p64vDhw8K4ceMwduxYSXtgbG1tpRtdUlKSwN3nuLayKtC8TsnAwADBwcECyzOnTqgpt9Vll1FFt/q2f/6jatHe1zL6/3fbfyuBbZrC08VB4P+wtzfJoJaWoKejBy9PF5Jle8HBxhZOdrZwYBEm7CxtYWNmTSJsKzjbOMOGZdjEQuAFdXamNpU5xFxs+h8kxH+nD4rhaDEfVIr41YCOtoaIsrrIQloL84FQgSJuykxSjSBLiSpOpK/F+bokyDRLdHfzErp06YbZs+dj5fIVwqix49AuMAgOTdsImhb20KQByNC5kVBXUx/WrbqQFHcUvIMiYNq4lXxJGa7IwMn63/3Aebp0XdsaY+etw9z5iYJXE2+YkICqjTZ4VmloqIf6GvUEPsAVsVWElwVWKktU7F+byxbVUatJVJVZU3OMFbGuKsHGX2LOG64UYnoMjvCrrZi1dLRhYmEJZw9nwdjUuDJ3WKDrvNBQmqUQPFt1cXWXlpIMz2bNaRKkSccBs3pzNorLynHl+nWhgZcXgrt2gU8zb6EDTZoCgwLRxNtb6ODfEa3btKwsy+bdsg10rTrC3S9RSCCZZSHetOeOkL3vDnYdfYj1JIPMzLVnidNSDYKZkHISs9LOYM76swIL7DCR4mPCyGVlmMz7JR8XxnL1iCVlGDirVBgwk8Vzv+QRM1xpYm76BUwnCWW4AsXIRcekux3DOclcbUIV4pipxSTFJYibrTBgTin6zz6IfrMU+D7RUw9IZQyma3yBLOQbm3RS4Nc/OrEM8zdcEFLzriJ7722soPeAmbCc5H/+YQym18oEDM6hfX6ufD827ryJNTlXsCbvmrBlzy2EDd2B8fR/ZBI3XsaMOdvQ3q2RYKulAR06RkxosGICXG0R364BJgU0FmaQAA9q4YYJgd7C6n4dsCSyLSYHNxMCXC3hQqLhpKcheBnror2NNRbRJJDx7zwNDf1mImF2sbAy8zQ820xCyy7LhNVbL2HXvqt4/eqVwJUmvnDViQq+fHyNL5/okrcTnz+9w6vnTzAicqBw5+otfPnwK/74wuXUfpd84j9IfNUqEr9/YblVqkUwX/8TIebc44pFep/ecFmxDxIZFuixeDHevrVbhQ3jFmHz7NV4++yVAsnyka1FeH3tplCUsQ3FvACvYI/w/tZd5CxdhZmDRwgTovshffRY5E6eJiwkKe7dMgBPzlwQfqPn/+PTZ/yLo9vE5xcv8erGLdwkUWFObs4hId6AY6kbheLEZCT3i0Ovxk0EP1sbhHl6oVebtsKoiEhM6zsIo3v0FqID/DA+JhYFGzKErSmZWDMzSRYrMksnz8Ps4ZMxJW68kDpnJUnvzyjNLxZO7CvD/Rt3iXvCucOncPP8JTwncWNiuvWDfn2WYQ2BF9pxXrGKNOyoUx3uaMc5xDUEyR/myfwPSic6LzN9jG7njmXdWwpbBnTGuqh22BLnJxyZ2RsXkofhQd5s4c6WGZgS1hwWWnWFOj/QOYPGL3UCp0fPZVK3Fhx06gnhrsZY1MUL2wZ1EvZNCMPe8SHYOshX2DMmHOeXjsSNdVOFp7vS8XzXRtwuzBRO79mOI6V7ceZMmXD54llcPH8Kly+dFS5dOodrVy/j+nWFy1e4cgNXlLgscLc4FuCHDx8oPHpEPMSDBwqPHz8WLpK4Mmkb1sOvcyC0dQyFdu06oWjn9srWzFxJ4vHjRyTCLMXP8ezZU+Xy6TOBH/8+Pc/du3eFmzdvkkhfFSlmTp0+jdJDh0iMFcrKynDi+IlKQT518oTc5u1M6aFSkuI9KCjIFbZsyUJaaiqSly8TFiyYj9lz52LR4sVC0jLenoz0tFQhe1MGho+aAI+GDQVHJye4urigURMvYdiQWOnWVofb1NflvGENESsra3OhYSM3tGrjgy4hnYTQ8C4I6OKH6L6RQtzAWETF9JLzDqOjoyNRVi4nJuXGanHzoh9hY2klaNLxamnGi+uVRhwa9FycC2xgoCOw/Do42FZWjdAlB1LEV5FPfm3sK9bWlgJHia0saZJI8s7w+bh6Nzq7ilJr1SPEqggzLMccGVYbg2lqalcGuhRBV/Kq/19C/LUU/5UQq62aR48eLYLLecMMR3t5m1r2bsCAAZgzZ460YGZ2794NY2NjOla4YkmpbBs0aBBmzZol+Pr6SnUS3ofh51MrRVSX4uq3WTq/vq7K6N//xvxZgP/jQmxrZg7uyMIYGxoiundw5YzN09UZQf5tJU2AsbeylnJrzvQhM45W9rC34PJq1gJ3qrM1s6FLW8GhogSbkZ6BwB/u37+v6lTHQsYfsCp83PWIxUwtA6auhFfhg5FnYlWzJhLDWrUqWzWKIPPtmkonL67rqkWSa27pIjRtG4iEkWOwMnm5MHfufPSM7g9TZ0+hvok9tMzs6dJWMHSnwde7LYxMzYQffmRh1YCNnZPQPqQfpi1Nx+QpswU+ILm0nFq1gxfiaXL6hIG2wLWPlWgvi7FSdYIvWYQVlLSJqqiwKsUKavpE9YixhgZXAFEizrwATy0nJ2XU9PVhaGYGT+/Ggr6B/lcR4u/l/fvHP78XrDgFxsUNDvxTT8WX2tLSEnqGJkJmXh5KTp7CBRrsmU5duqCdXwf4NPcWugR1hlcjT7Ro3Uxo3qIZvH280a17uNDQuxmMXHuhRY/1Qmr+NRG97OJ7wg6S4X0nnmBP+UNh3Y4bJIpXSfQuCos3XsCijItYlnVZmL3uLGaT0M5Zf1EYu/w4Zqw7g7nrzwtTV53CRJLcYfOPCOOSjiOehHRk4jFh1JJyjKdtc0lOhYzzmERCrZZ54+gud8NTy6YNnFsqne3URXhj6L4JS8sQR/syLL/dRxehy6BtQvDQXAyYfkBeBzM3/ZxI8QwSfWYMPUZG4TVs23db2ESCm07vRzJJLxM0cBPWbLuM1SS/zILMC/T/OYE59P9mRtH/oVv8Tqzbfk1IK7iGpM1XMGvNCaFP7Az4ejaorIOrTZ+1pbYWApwshR6edujuaY8pJMPMjK7NMCmwsVwyiT3bY1Ard/g7WwgtLQ2RENgN92/dE85cfo7yy69w+NwzgVMk5q85DofG/YXGXRZjU+EVvHjyRPj13Ut8fvcCn9+/FJQKFFWC/BsJ8e+f36H8wD5h4sCxJMlflJbMBKdEcDm2D28+CEqliH8X4er/FClW5JerUnA5sd8/fxaksx2J9vEtRcKWGclYNzERu1ZuEh6TFO7KKMDjcxeFSweOSMpBblqW8OT0OZzNL0BCVLTQrZ0fRkb0QuaoMcLGCROxaMBwPD55Vvj48AlJ8C/47dUb4dPz5/hEQvTm5i3hfvlxXCwswqnsXIWNW3AicxOKFiwWBrdqgw40IfG3dxAiSZLjO/pjZvcewvw+0UibMgN7NmYL5cUl2LM5HzkrNwjLJi/A/ISZmNh/jFCStxe5qzejcF2ucLjgAA7Stn1bdgpbktOxK3MbLp04KRzatRtONMYbaWoKUpu4Lpdkq1OJgcjx/8feWcBXsWtr/Mp758q79yju7pTi7q7F3d3d7eDnwMFdCxR3d2vRosWlSKFYS4u7rpdvzc5udrqlgpTDLPj/dmcmyWSSTOabTOR7Jg66UPxgWdIZX8xEnYVW4cQ/fc80yZeWZrcoRTsHNGaOjOlIh39vSz6DGjMnxrWjC7N6kv+8Pgbz+9L1RQNp/4jmTCchplP/8gPFEsIEJBHnSyCI91+DNL/8RHkSx6E62ZIzw8q50dTaeWikRzZmUFl32ti5IvmN68xcWTiO/BdNoUvzDe5sXUU39mykk4d8mItnT9DZ0350WIhHcFr8fenieQq46s9AAF8U21fwt+BawDXrADoQFHyXl1++I+4FgG4Qt4WIlQLZ7/RJGjVlAuXInY+JJ0Rxq2at6MC+3cy5s+d4+eXrN24wd+4EGd0mRJgAcxNDeN+8GchAjF++fJnOn7/AnDp1ko4eNWaeAPv2H6T9+4X49fVlcE1HjkAU+zIHDx4gH29v2rVjB7Npw3pentlr3lyGRTFmnBhlMGH8eJo6ZQrNmTOTwQwUy5YuovZdujBZsubgVtOsWd0Zj0plqFWLBuK5lJjhlWqFKJaC2D1HJipdvhg1alqHadqsHrVu04y6duvIdOjQmpq3bEL58+Vm/iWez3HixOa5fEH6tKn5q7Rc2hhfmLEWwi/iGEibMgWvTJdE6B6A7proIiob3Li7aKoUPBgPpEuLbg1hXRZjxfqJG+gyZUzHYO7irFmyWeccRoOSMc1a2KwS2E6aNLkNssvEzz/HYg0hZ42SX4PttRIDKYB1dDdYXhlgIB0EsUwfdImoLJ7hUk/gXMWLF6fGjRszqVOnZpGIgXkArcfSDWjSpIm4nlRWMWkIYNtWYuyX06zp4laKZXWfvv3ZMQWxKYhNQWwKYlMQm4LYFMSmIDYFsSmIv2lBDAEZN04sJkPaVCyo0O8GFMybk9KmSWFNsBTJklKWjEIIp03LpEmeglKjr3AygxSJjG4SqZOkYVIlSkVpkqahhHETMEhMnvsXU68pg+qkoAN/U/oYq8JNfurnTLcIPp4myiKMjT7H6EYhChEG5v0bXQxQcMMGwf0kChwGjv0UOwGTNF1mqlm3Po0cNYoZMeI3KlqkGCVMkJCB+E4khH3uQkWZuImT0W+jJtGCZWuY9dt20qR5y6hrjwFM8RLFKX78eFbBC4Eq5x8GsqtDmMDF9j+t7g0MIQzwuce4KYxPQFIEy5XsvhcPmdgYvGcZVAeMxRcMYsWNRwmTJqXs+XIwceLF4XT8Hwv4G+kku0zgM062bDnIPWt2hgcBpBU3cIrUzIqtW2j34cN03O8kU6psOcqeMzuVr1SByZojK+XNn5eq1KjMZM+Vneo0qMuiGGTNkY+S5mlDVXpuZKYuP0czVl+k1XtuMOv2BtKmg7do66HbDATi5OVnadLy88w4IYjHLhTieLHBhMVnabQQymMWG4xdeoYmrzhPc9f7GwhBPXHpWfpj/mlGClKrIB57kPpPO04jhHgGw+YIge0phPT0Y0znPw5wH+ROf+xjekz05b7NA0QYAF0yBs04Tr2FKAbNBu2mim1XU8U2y5laXTZQw95bqMXg3czgWcfpDyHgh4lf0H74Xho//yTNFS8GYOWu67RyZwANF2IXeLRbQfV6rqOOEOKC/pOPUn9xzq5jDzD1e2ymzsP3cL9iMHrBSeo/9Qj1nXiI6Tr6AHUavJUqYWo2ARaVSPKjeLkV9wmIL8RKASFym+TNxLQo6C5ESmbqUTYPM6yaEMZVClLP0rmYNuL4nlHDaO/iVcz6Jevp9IV7tNEnkJkh8qr72EM0bPphJkfZEdTrt5304skD5tUzCOJQG0H8+pkiiJ8/EAiR/OIpM6xnLzrs40uPQx4xzx8/peDrt+jFo5cM+hRzdwkIX10JK2adt/itsRrdy+fPGd4vhPKpTd7M2rGzaP6gcTS5yzBm3cwltHP1dtq3chPz5EoArZq5gNbMX8Fs8VxI13ftotn9BzKNylehhuU9aHDT5sysdh3oj6Zt6Naho8zd435076x4QTh3gQk6c5buX7pMT4W4AY+vBVDI6bMUcOAQc2H7DiG419EBrwXMykGD6Neq1aiWuEdBufRYICUrNclfkOlaphwNqFyVRtSozyzqP4wOL11DXqMmM3/0GkpD2vWj2b9NYTYtWEsrpi4S4ncrs2PZZtq1fDOtm7WYWT19AY3uPpAm9jFYMWU6dajTkBL9/AuTQJSleD9CBFv46QdKKPbFtxBP1FFxRJ3+8/cG34v67d9CQGBBEtAwVxrqU8qdptUpwmzqVov2D2pKB39rwZwY25aOjWlDJyz4jWlLl2b0EHRnLszuSsfHtqQxdQszxVImoPRCpEhBXCh7OiqZLwulifMLk/qXH6lg8rjUKk8aplnOlDS8XBZa1Kw0s6ZDAzq/cCpdWT6fCTl6kIL2baHrezYxF/yOkv+Fs0IUn2GuXr5IAdcuU8D1K0xgYIAQotetg+YgRiGKAwNvMhC/d+6im8Rd5i5eFEOCrQQF36ETQmSPnDCGSZ8hC8WJm5g6denIHDy4jxfUOHPa4Kp4ibohyk1wUBBz5/YdunVTCOLAG8yN6wE8zdvly4iLvxDvF7grh98JP+bYsePke+gwHTxwkGGRvG8/HRJCGEAQH9h/gPb57GW894gXrG3baIMQxmDtmtW0QgjkxYsWMgu85pOn52xrlwmv+XO57/GyJYuYdh06k3u2nOK6MjHuWdypUYMaVLxoIQbdHdDtIV2G1EyJMkWEEK5FdepXZ5o2b0DdLEIYtBBiuGnTJkK7xGeSJsFCGt/Tz+JZDyBW0VdYCth0aVLxmCgpCNGYhEa2f0EEC+IKMY3p2jKmT838KAQ6plqT067CbXzxDJV9hiGC8XyWXSiwqm/e3HmtgtgYRJfWOt8wRDG6JcouEhDBEMSJEydlMF4KAlZ20dS7TNgTxUAXwnIbbjH9GUQqgJjHoOl/8jgtuP1fFqVy25gq7W/Czf9Y+F+ryAVwowpW/I0uGaoAZvd/M1a+k27hBuii+IuLX3v8R4iqnO6ZGPeMaVlQuqVLw0AUYxaCdJhMGqRKSW4ZMlIqIYQBtlMlBamZTKky8sp0aDWWpBaCOJEQwwADuP6uzIMrM/DHH9D/1egHC0GMvsVAFcL2BbIxgEzOKmGI439ynME//iUHnxmd1H/+OTbfdNyKLECfYBbN//2JiR03GeXNW5QG9R3M9OrZnd9sK9dvwiTKlIO+T5CakqRyZ0pWa0wTPJdTl16DmS2793JfKZxT9gXCb1i/X0Pwqv2A5X5j0J0heuV+6Ve+kMj98gZH+D//jEF5BphlgtPjH3hp+I7ixE9A8RIloex5cjKx4sa2ST9eFOX/wgQxbths2XNSZjd3xhhgl55SpDJYtX0rbdsrhNnAwYx7zhxUqkxpchNv+yB/kfxUoXIFcs/uzpSpWIby5M5FZcqXZfLlL0FuJftR6+G7mb1+98j7+B06eDqE8Tlxl/Ycv0s7jtxhVuy8Rgs2X7YOuoN4Hi8EMFpKAWZo6Df1KA3FzAZg7kkaIPYNnnmCGblAuBOieZyFkeL40NknrH2Sh8/2EyLZj0YtOMX8JgTzr0IIDxNhgYHi746jhBgec4DpOuYg9zvGgiAAs1Sgxbm3EKoA4rn5oO3UsM8WpnG/LdRaiOQ+QniDsYtEPIRob/+bN1Op7XJqMWALDZjsy6BVeIgQ5X0m7GdKN55HidNVpiSZazNuRXtRnnJDqWS9OUyGQr2ohhDNzXtvZToO2U0DRTx6YvYNQXcRn44YDPirQbVKbalo2tRUNF0yBssKx8V9IV6KQOYEcaiE2N9AiGMwqHIBGlunBC3qWI2Z3aoKeTatQb6L5zKnvXfSOyFwb/jfZeatv0S9hCBu++tuZrhI6zZ9NtHzJw+Zl09D6eXjEHop/ABDGD+wCmTmmRTKD2n7ulVUp1wtOrb9MLNr2XYKOHOVnj14wrx54bwPsTTrYDvLynZyHmO5/8aJc8zW6V60YPB4mt13JHP50DHasUoIRM9lzI3jJ+nk5t20cNxMZt7IibR/wQLaP30m012IxcqFi1LX2nWZ8W3aU7dK1ens6g2M78IltHniFFo2bITB76Npz9wFdGbTduaWCP/hDZaiBAAAgABJREFUtSv09M5t5lmwEEnnz5OfEB9gw8hRNLl5K+pb0YNpmCcPlRcP3vJCXIDq2bJR8wKFqFOxskzXEhXpt5qNaO/MucwNb286umwVHVy6mpnYezhN7Pc7bfJayywYM5M61GxCjcvVYBqVrUbdajejFuWrMTVzFabmxctRop9+ZhL/gn7EhghmMEexqIPkNgRx7B/Dlnb+HvWXEBKpYv/MlM+chBrkTEUt86ZhehVzozFV89DKduWYTd2r0Y7etWlj16rM7v516PjI1kIcG5yeJASyZy+66jWE2TeiJU2oU4hq50jDdKhXjry3LqJVK+cxTapVoDzp0lEKIYSAe7zY5JE+ETXLnpqZUKMsnZj8Ox0c0o+5tXE1vbx1hYJ2r2fO+WyjyxfPCRHsz0AQY+U5KTgxgwRaaO/cQf/gWxQcfJtbgdHvFwTevCW4Sbfu3DEQAjb4XjCF3g+xcuvWddq7z4fpPqC7EEypSK5s9quIk7fPTiFkjzInT5+iE34n6IqIBzDEd6AiiDGI73qYIL50kS6I8nTu7BkGLcbHjh+z9iFG6/Chg750+JCB76FDQigfsA6y8/HeQ7vFC+CuHduZ7Vs30YZ1q2nV8mXMPCGAZ0ybxnMTg7me4gVT7Fu4wGD+PE+qXK0mpc/kxuB5g/lvGzesw2D8D1oyswgtAipVLUMe1cvzghygdVtRFls0orZtWjB9+/agrFlzkvwijGc5WlYhOgEmCcBKcuqzFs9UudBUgvjxKVmSxJQgXjzm559+YSEtBS8Wzfqn0CcZhJAGmLXC3S09C21gfOFF45TRohs3TlzKKkR+urQZmdSpMJAOrcKpmJQpEa+wPsNAbSGOFSsOC0cZntEQ5lgQQ/SqrcTy7zCxjH1hK9NhcQyI0u8xVum/0BP/5G35hfrf/zYErwR+dbGLMKR4ZPH7d2PRDbkf+2R8/v638K2/NiL4r7b7dYGsb38WsCRzpnSpmHhCMKFJvW65cgwKFNbvLpE/D2Os6JKB0qdObZAKXSXSUKokGEgnSJySW4RTJkrJQBynFPsTxo3PQIAZXSUgdo1WYmS6XIkNovh//gddKiSGEJYtmrJV00Yoy19G73COQoGVXIwCDsGMldzCBuWhJfnfvFobwCcTFHDZwoxRnxkyulHdOnWYXn2HUI8+GExUm0mcNiuNmuFFdRs0YGLFjsMrzf3ff/7FoAtE4mQJ6Ycf/8Oonyak2JV/q+JXP64LZFUQqwt9AKSbHISYMHEi7jKRu0Ae5gchmnm6NSmIv8PCHGGCGG+0WdyzUabMWZj0ePkR+ZzJPTuzaZ837TnmS0tWrWTKlqtA2XNnp8LFCzNVa1UlN3c3KliiEJOnQG7Kli0rlSxdkkmQPBsVbzBWiM2TzMb9N2nz/tu0/fAtZv/JINp7IsjaQrzpwE2eZmzptmvMyl3i7+3XrC3AU1ec58Fwv844zkDE9p12lLsxgH7TjnOrsGxB/gPdLtCqLIQywAC9UeJ33JIzzNilZ2nA1GNWwdt70hHqKgReFyGGQXchfvtMPkwDZhxjuo4XYnjKEe46AdqO2MvdLDDbBOgwwoe6/bGPhsw8xvwG0S7iO3SWQZX2q6hc80VC3HoyFVstoro9NlLJ2pMY9yI9KVaSgpQgXXkmccaqlCJrA3Iv1pcpUn0cdR7qTW0GbGNaCQHeYfBOai7EOGjUcwM16LKemvbawNRos4wmTNlAbSuWZZoWyEbtimSjOrkyMDVzpqe6+TJQuzI5mTZFslLLQu7UvFAWplHujPS7EA0b5yxgju3YTW9vnaN3D28x/n6XaNzMo1SvwzqDTkJ0zT1Gj0LvMc8fBtGLh8H8y38/CqYXQiBLpEiWgvihEBStazWnlrVaMMunLaeTB07Rw7sPmNfPX1lXr5PC2J5ZBTEQ7t68fsNg6jXsexZyn9k9fzEtHDqelo+cxrwMCSWfNVtoz7odBivW0pPLV2jeH1OYUb0G0fAO3WjdbyOZpb8OpuYeVahmiZJMz7oNqXulGjSv50BmaP2m1LV8dWpdrBzTqHAJ6l61Lnn9OoI5vnMXBV8Tgj80lHn95Cm9xHK9168zh5evoCX9+tP09u2ZvlWqUsO8ealcuvRMWSEwPDKL+ipHLqZJvkIif0tSBwvDatQjn8nT6PSSFcy+6bNo25hJ5CXiBsa36kRjWnakie26MtM79aSxTVrTmCatmEltO9PgBk0oZ8qUDAbSJcIgOwuJhciUwhig20TsHzAF23+Y/8MXL1EPJ/zpeyZt3J+oSOp4VCVTUqZetpRUL3ty6lg4AzOkXHaaVqswzapbjJldvxgta11GCOXKzL5BdejAkIZ0eEQr5uT47nRqSj86M30As7FPUxpQqSQ1LZafGT+wF23bsJgWzx7LtK5dhVL9EouSiXiCsmlT0ODiBcnTozSzo10jOtS/Ax0Y1J3Zv8iT/M+fohsBV5nr167xtGiBQnyCALF9/cZ1IYIhhG/TvXtBPGgOLcEAg+Bu37rDIhVcvXqdu0rI4yGhWH3urjiGmSgCaPuurdSmbUshFJMwxYqVoJlzp9Ge3bsZ38OHeInmQ4cOMt579tHJ4yfo+vUA5oYoM4jTFVFmwcWLl7jLxekzpxgsznHixAmeig1AFGNFO7QSg/0H9glBjO4VPsyeXTto187ttG3rFgatxKtXr6QFXl6M52xPy5Rc05gp6JoofjE9G0/RNne2EMxTxbOgEpM5UxbuoudRqSxTQqR9woQJKWeurEzZiiWocvUK1LBRbaZNu2bUsnVT6ta9E9O4WWOeDjRjhgwMun1ipolYsWMxPBBePOfjxY3HoBtj2jRpKKl4LoKE8eNS/Lhx+DnKg9hE2Uwu9suFOjKmTcVLOMeJFYvB1KvQEbIFGl0k0qdFw2EcJl2a1OSWCVPnpWcggjFzA7odAnRBSCaex1IAo1VYbyH++9//x/q13PhC7LjLhK3WccT/WvUD/oaA/Q++TvMXaCzMhJkgjBZgtRXX4C/0v0oLMAQjRLYqgA1/xra9FmBd1Krhq/sk4QTq58YUxKYgNgWxKYhNQWwKYlMQm4LYFMSmIP6mBbFHqSLWPsOYai13bndrgcBcgPlzZ6PCeXIxmJcvoyhQUhBjbr40yUUmJ0rOpE6amlIKUSy7S2BgHeYjTiQKI0Amql0fkGHol/Lf7//N4BPE3777J0/NxuDv7/D3dwbfQVDbLv1siGs7QpmB6A4bpGdFFCzwj3/+i0Hf4zDQ3QL7/sWCGb9hhfCfIk1ExSQeLqB12040ZcZcyp+vAAO/NWvWFtfyHwvGFGvWTxIivO95ejWDMBEsse0ageO4CWQfYtmlQmL0J0Z3EIhjYx5i9CGWn3TiJ0xEiZKnoJz5czM//PSD8VJhTZ/v+PrkvMoYRIe+w5lERQUyu2XhfsU5CxRkdh09QDt999ORMyeYHLny8PQ5RYsXYTDXJLpKlCpbgoE4rlqjKpUuW4b5MXYayld5CI30Os2s33uD1voE0rp9NxlMubZ+XyBt2H/LQPy91vsGC2GweOtVWrjlKs1ee5GZuvI897UdLEQmGD73JA2adZz6TDnKoHvDb2LfmIWnDRadpQlLz/NUbzz/8Xp0x7hMs9ZeYjzX+dO0VedpyooLzKRl54Q/IaRFXMEYIahHI+5YRAOLaYgwJy67QGMhpgVYrrmtEMFthu9hMKAPInj0wlPMdHHO6SLOo71OMR2FWPZovYzcivdkClb+jSo0mUVNuq1hkmWqRj8lyk0J01dgkmSqSqlyNqS0uVowFZvOo16j91HXEd5Mb/F3rz98qO3ArUz9TiupVtsVVLPdMqZOB/F361lUo1gFpkTmDFTJLR01EEIXtCuWg7qUzkm9K+ZjGuTJSKXSJaUy6Q3aFMxGTcQL0MLRfzBDWzWlUJ8V9PbGMYPb52j7ku1Uo8V8Jk/pIdSy8wx6EhrMPAu9Q8/u36XnD+4YQBw/umdFdqV4/ewB8+rFI9qxdjWVKVCa6dW6B+1Zv59uXb7FPH/wjAfKoRsEQJcIW1H8wfj3AXMUG/MUYxq2Vy9eMlIQv3v1mrlywI9W/jGT1s9YwjwLuke3z/mTz8bdzIb5y+nWkRN0cO0GZnDHXtSlcRuaM/x3Zu8sT1o0Zhx1qN+YqVW8LLUvV5n61a7PdKtSi36t14wmdOzBzB04gtbOnE0Ht25jzvoe5WnOAi9dZkICb9GjO8F0LyCQ8du8lXbOmElbJk9ntk6ZRRsmTCGvQUOZoY2bUbNCRamKuG9BVbesVDtrDmqcryDTPH9halWgOA2tWZdZ3KMPreg5gOa168Ys7ILtgbR96B8GI8bQvPbdaUKTNsz8Lr1px/jxtGr4MMY9aQqKK+qcRL/8zKAPcVwhLOOJXxD3B8xHjCWc/4/B52cszpExYWwmd/J4QsAnpZruyZiqWZJRgWRxKUfiWEyptAmpRpYU1CJfOqZXcTcaXzkvzalbmJldpyh5NShNq9tWZdZ2qEEnxnWjC/OHMgFrJtClRcPp8JSezPjGZalq9nRUt0wJZnivduQ5dhBVLJiTSSYETsZYv1DddCmYfvmz0aCi+WhAySLMjiXz6OpldJm4zARev8aiUwpiEHQHXSRkl4m7LIrloLfg4HsslOV0a3fuYlBcMAVZwEC729y9wvB/5col2rJlPdVqUItJmDA51apVm5YvW8Ls2L6VduwUInXXTmb7tq00f8ES8vU9yFy5isVAINqvMJi27TzPTXyaOX7cj44cPiZEL7pGHOL+wphu7cCBAwym2tq9a7cQwTsZnGvH9u20ft06ZuWK5bRCsGTJYmb+vLk0Z/ZsmjZ1CjNl0mTBFJo0cRIzVezzEqJ4/NhxTMEiJXiashw5czAN61enTFkyU55CuZgSZYtSxSrixb15faZVmybUsVNr6t6jE5MhU2bxnPs/Xk4Z4JmHrpGJEydk8ubNzoPnEiaMz6CP708//kiZ0qdhcrhlpITx4lLKpImZuBgAHyc2d40A3PgkwsXaACBNCvESGCcuZXPLxCRPmoiSJE4gfhMz/8WgzgQJLP2GAeYcxhRrhiAGSZIkEXEzSJQIS0QnE34SMYYgFoLVMsmA3lUCQDPpgliddo01lvK3rXA2/pbzA8MNRLEUxN99J84tBPhfIVot4hSDCaV7bGNatTBsBTDCwLRpYYLa6GOsCk7sk+HpYtkeEXHzUakobvTv//sD45YpLdWrXd7aolqmWAHKKjI+nhDLAKvXuYs3sUxp0zAZxNtPWvGmg7mIQcaU6Xi2CWNgnUD8nTSRyHhR6IA+wwFaKyH6fvwR8+n+lwUkRK9EzkZhBW8nLlDDV2ezMPiHxQ3iYQGF7B8GPEMDCp6lxThefKPf8y8//8KkSJaG4sQxWrp5QKB4Y8RNlkjcBCBJkgRC8KJ/EvoXYVCdsR65LOBhM0XIbftIQQwMQSxbjMNajiXqrBM4nzqoLlHSpJRE5FmBogUZ3LDGdVvS4zvjb/mikD5DZnLL4m6dhxiiOE2aDFSkTHlm34lDtPPgPtrhs5uBeC5TqiTlzJmdcc/mTpWrelCuPDmYAoUKUL78eYTQxprumej72KkoXYFO1GvcIWbWhsu0YLM/i2Kw/fAd/l29O4DZdOA2/y7fcY2Zv8mfvISfGasvMFOFaB235CyNFMIU/CHE6+/zTtGIBQaYl3fK8gvktfkag0F2M4Xwnb32MjNt9UWaucafZq2zII5NXXWRxoswAcTwOCGipSCGqB275ByNxQA+DGLDMSGSB3ueZHpPRauxL/WceJgZNP2o8HfSGt7k5edopjgnRDEYPPM4dR3lQyXrT2eylOhOhSoNoexFOzI//JySvo+VhmLFz8HETV6YkmWuRimz12cKVR5LzXtspHod1jBNum+ipj03Uu2Oy5lKTedQ6bpTxe9cpnorL6rRfBy1b9iSKS7ypGi6NFQ1Wwamfh53qpEjI1XLlpYpIcRwJbdUVC59cqZJbjfqWqow+azfxOxeOJvW9WlOj/evYF6f20P3/XZR7Rr9mJwF2pBH5fb05EEQ85QF8W168fCuhSCLGIYwNlqLw/oWCzBP8atntGzuXKZswTI0ffRc8j95mXl8D3MZoz/wG4ZFsWXmCZX3Ft69e0svHtynBzfvMWqrMXgSdJ8uH/KjC0fOMDfOX6YXQhQf3O7N7Fy3nQ5s3E4hp88wa+cuonGDx9KqRcuZc4d8KeDocdq3fRfTtXF7mtRvOHkNG8esHD+LtgtR7btlN3Ny70E6c/AY+fudt3BOcIYunzzL3LjgT7f9r9Hdq9eZW/5X6PbFy0IcX2ce3LpDj4TIki3KTzDjwNUAOrVzN7N68jQa3b4zdalUhWlWsDA1zVuImuYuwDTMlZf6V6xCv1Wvz7QrVIJa5S9O3bHYh2BgxWrUJE9Rqp09D1M/Vz5qXrgI9a9anRlevz6lFfUer0gn4NklsEDHDwZG6/B/ue8wwGpeycVzpFbuTEyfMtmpb5ms1K+0we8euWlQxRxUMEU8JilakWP9QFkT/sIUThGfqmVORu3yZmB6FcpMQ0rkIM86pZmlLSvQqnYetLV7Xebg8A50cdEwCtw03mDzRDq5cCCNalSaKZQyMbdkexTPxwxs15DaVitHWRMnYnLGj0cVM2Ugz99+ZQIui5eVG1etszign+4twe3bt5i7QswGWWaPMPoO36EgDHgLNkAfYcwygcF1BnATJNwaYNENiOagIPi7Q7du3abz50/RstVLGXyRSyaeQd27d2U2bsJqeltp2fJlzF7vnTR6/GTq0W8gs2btJuH/LM9+AS77YxaMi9Z5kv38/LjfsFyp7MD+fUZfYcu8s7t37xECeIcQ5VuZzZs308aNG3kwHVi1agUtF+ddsmQhs8BrHs2aNZMXbABTJ0+h2TNm0Aws3iGYOX0aec6aQYu8PJlfBw2h3Lnzi+eIO1OxYmmqVKk0Zc3tzhQtWYhq1qlCjZvWMWhSl7p0bUe1atdkeBap2MbsESBd6lRClwjNkSQRkzp5cmMuYYhbQbrUWJE3A7lndmNyZ81CP//0M8X65Rfmn//AbBL/sfYpTiTy3y1jOkosxDRInkQIXxFuwgTxmUzpUlMcUZ6zZErPYJEstFCnTg0hnIZnlFDFMEieHDNLoGXYaBVOJPSRFMRx4sRjASkHzdtrFZaiWApjVSCH70Ns8Le/ofX276w/8BVZCtLvhPtffv7RKohZIIvwdcEqt21bj9HH+H9tWnWlyFbdAEetv/bErhTeX4z8+fNTieLFGY/y5alUyWJUuHBhZsJvg8ijYnkqXqwYU7l8OapWqRJVrViRqVyxAlX3qELVK1djPMpVZKqU92AqlalAFcqWo5LFizH58uVj8ubLy+DvAgXyUyEhnAD+lscMjAUeokvYeSXqOeydRz9uIX94d/ny5qUC+QswpUqVoIIFCwgKMoULFySkr6RAAeOYus8eMr7q3+o+RyBs1U3pMuV4Jgh8WgIFCxnHremR18gDSZXK1alWzTpUo0Ztpqp46FWs6EEdOndnTl+5RMfOnCLfY4eZtu3bU/nyFahBwwbMwF8HUuXKlah5i6ZM01atRBhVqGatOkzRElWocuOhPLUZGLFAiAqfAPI9E8IcPB1MPn5B5H0imDlwMpj2YqDd0TvM1kM3aY13gOAG47XpMnkK5qw3mLxCiM6VEJ0XmDnrLrGbBRY81/vTws1XBVcMtlyhBYLFWy1su8pdMrBYBpgtBDKE96y1F5lpmA5NiNp5G/wZTxH+/E1YJOMiM1Ecm7biHC+mAbw2XSGvjcLteoPFWy7TOu9AWrf7BrNs2xVaKc4zWYhr0HnwaqrZfCRVqdeHKVi4AhUuUYsKFavOFCxSmcpV60yV6w1kBozeTsOmHKDB4/cxI6YcpKGT9tKAsd5M79+2U8/hm6jvqK1MjxHraeLMzeKersW0qyPyqVo1alypPNOqWiXqVrcmdatXjelQrQK18ihL3Wt7ML81rUtj2remnSuWM+2qV6FxLRvSybkjmRCfpfTs9B4a/etwpkbd3jR86DR6+ewRY4jfEHoheWi0DFu7TWBatqfGzBPMC8w48YRevXjGLJ0zh8YMGkuHdh9l7t/FzBUvecU6oAtidKPAQh7Pbwcwj04fpIfHfOj68bOMLpzfPn9JT4Lv06VTFxj/Mxfpxb1QunPpKnNgx34hdPdS0MVLzG0hLg4fOk5bN+9mrgkx+uBGID0S4gbs2bSVrp29QI/uBTE3Ll2kiydO0cXjZ5jzx/zo3LET5H/6AnNNCPDrF69SoL/BrSsBdFtwN+AGEyRE8J2AaxR0PZAJFue6F3iTQgJvM6G379IDIeAfiTiDJ0IkP33wkJ6E3GNCA29R4PmLdHrvAWb15Ok0o09/Gtu2IzOza1/qXacRtfeozrSsIES0qMcbCSHGVKhEzYSw7ijqCDCoWUua1bsvNfaozBQtVIgKoz4XdSEoiDoJdV4B/Bp/N6tcmeb2aMlsH9mZ9o3vSRuGtGbW/tqKdo3sRIcm9mB+b1GLyhUpRGVEvQbKCaqIF/taJQszTcqXoNYVS9Kgeh7MhJY1aVmP5rS2X2tmeY8WtHpAC/Kd2oe5uGos+W+eQf5bZjM7pvSivg09qELRwkxRUT92bdmITnivZ3x3raLDPuvpRsAFJijoJt0Luk03b1xnAm/cYAH86NFDK2jxDQ3BCnIGIaEh9OD+AwaL0zx6/IiePn3CPHr0iB4+fED3799nHj68T6HCfVDQXebuHcwaEUinz/oxXku9qGoNiMF6zNLlC2nf3t20ftN6Zv8BH9q+cwd16dmP6dd/CO3du5euXUNLMWbBCORZKQJEGQL+QiCfO3eeTvph+eaTRreJo4fp8GFf5sgRY/o166wTB/ZbulB4M7t27aCdO7YJtjLbtm6krZs20uaN68PYtIE2bVzHbNiwjjauX6uwjv4YNYqaNm3MNGvehHr26Ey169VkOnRuQ737dhMiuAMzfMSvNHLUMPGMqcqUKlWaChcqIp7B+Zi8efJQdfG8qczapCKVLFaCatWqzroCFCxQiKp4eFj1TbkyJcUzMJ/QNkWZMiVLGJQoxhQrUpjKlipl1S8lhJta1aoIrVSMaSDqygL5jbBB9uzZqUyZMlS6tEGZMmV58YrSpUszJUuWFHEuRSVKlGCKFClqQ8GChXg55Zw5czBZs2ZlsA/IbX2/jn7czQ1dU7Jw98U8eXJTlixZHILp1fRtCcJU99lz44rMmTNbsbfvS2MKYrvn0Y+bgtgUxKYgNgWxKYhNQWwKYlMQm4JYdaeLXmeo4tPevi/NX16/fk1v3rxhXr95Tca2ROx7DSz7MRjF4tYgzK91m91JLOFa/Nsj7FwGNsexHVnC+VfOb/e4E/+O0N1q22qauNrW00ff1lGP6+HofsP2v2X0sHT0sHT/cvCS5M1b23O+fftWYLtte14jrLfv3lth0WLlA/+GncMQNRJ28w77DN5hWd538GNBbvOvI5TjHJ5jED+rO3b7Lpwb3b3Vj9zG3LfqMeV6w9wiXCNsI73l/aDlrSWtZX68fYew3xnnkMhzWtG2hXtn+Y3lkSW8D/lo2eYlkDmPLVji+O6twft3b3kBDHn8tYgj5v4NE53osxs2TVrY33K/ekw9HiZwEa5MLyysYeve6D+s73sv/IAP78OWbAa6O4hpo5y9Y9DfGF0prOXPkkdyG/EL2w8/lv0WDDfq9RnnkKhlO8xt2H7djeEvLHw1bjYgXtbzyXOHhW+TNrhWpCng/DKWyLYpA1ZsyyWXCc5r3Ovh6xHjfg/zh/Jr+LGUF8t5jXKDPFLLkZFnRjiWcO1hjZOxbZRRC/z363Dl07pQyzujvpJh4RyvlPiz+3D58s7aBcdIY+24nTR2hazP9P1hx8Pylu8rJZ3VOgnHUW5l/cD3LtJXlnu9nGjIuij8flk/yXJuQd+vweks3arulX38jFDSXy1f6jOF8wnlh6//FfPqlcivV684z8DrV9hvlDNZV/JxhbBnUdgxfVt3r26j/PJ5+Jh9967Q3avbL1++DLftCP24Hhd7bpzzws4+2/D1fVHhxYsXjL7/YxGd8P+ijEAJdyOCqFh0/ZsWM81V2ZD7dHcRxZ7pbhy5+1imn0s9X2TP7SgcR8fDMB60rt05R/cfnbDsE15kqWZvX1RMP4ej80nT3XxM1PAtZxMgr8KnhSuk6fv147q7j2n6OaMTviv/+nmcuYU5cqP717edmX5+54TPU3thfWrT4+CIr9X061Cvx9m2vWvWj+nudT/qtu7OHs5MdyvdR8Tvx7CInk+Poyv335LZFcTRNTOR/1ym3zjO8lbdL/925j4iFl3/0TF71xNZ+1TxtxeuvfzRt/X9jnDkTjV9+1NaRM+lxzcM3aVh+rXp1+lqO6IWVX9fi0Xk+mzzw7nbT2H6+Z1h2pcxNf0jmx+6++jmaVT86n4i6z+q9rnP92c0UxCb5tLU/HSVt+r+j3WDRtd/dMze9UTWPlX87YVrL3/0bX2/Ixy5U03f/pQW0XPp8Q1Dd2mYfm36dbrajqhF1d/XYhG5Ptv8cO72U5h+fmeY9mVMTf/I5ofuPrp5GhW/up/I+o+qfe7z/RnNRhCbZlp0zbwRTfvSpj8Q8KckKqaHZ5pppplm2p/PTEFsmmmmmWaaaaaZZto3baYgNs0000wzzTTTTPsTmdp1w9FXrvDH8KuCAcPyb1sz/IXN1vNnMFMQm2aaaaaZZppppv2JTBfD9kRr+GOmIDbNNNNMM80000wz7Ss3q8h9b8xV/tbC83d2ePueXr4z4Hm14cc6v7Yxj7Q8DrfMuw/MM7HvxVvMJ23Mqy+nKfyazRTEpplmmmmmmWaaaX8CgyY1eE83X7ylxqceMan2hFCyXaGUdFdIGGKf275QxvPmcyGcwxZmeSEEb7+LTynDvvtMUp/7lAx4GyQVpNsbSn2FG/CcF2EKmz//azRTEJtmmmmmmWaaaab9CUwK4jdC1FY6/oAy7w9lvG6/oDXBL2ltkMEaEPyK+vo/Y/6z7R4dePjGKoh/v/qc/rI9mP6yM8TCvfAIUf23bQbjA56bgtg000wzzTTTTDPNtC9vpiCOupmC2DTTTDPNNNNMM+1PYFIQP337npJ4h9C0wBeMIVbVQXZGv1/ZnzjlnlAaE2B0mwCVjz9WxHAI/XXXPfqrEMH8u0uKYrF/xz2mmt9DJeyvsy+xKYhNM80000wzzTTT/gQmhe6Tt+8osRC5s2++YHSRKoWrHDSXxieURkEQC7/A48QjIXwhhCVSDBvb1lbiHQZV/R6ZgvjPYF9rBn6NcYZ97TeNaaaZZppppsVIw3NV8FQI4iR7QmiWEMOAW4jVZ6/4/178vnpnkNo7mEZyC/EHpvIJo4X4rxIIYaWFWIpjdJsAVSyCmAO2M03b12CmICZTEH9uMwWxaaaZZppppn0CMwVxlM0UxGQriCMj1iLqxhGOjjvyr5uj/THdnF2vaaaZZpppppkWNZPP1Sdv31NiIYjDukxgnuEPLIIBHr34ffn+PZPGO5QFMQbjgcrHHzkVxH/hfsRhXSdMQfwnMF2cRRZXprvXiYgb3X1kwo5JpsfPUTxdHY9J9rXE0559rfE2zTR7ZpZn00wLuw/QLzjL/lBqdf4p8/jNOx489+LdBytYaOPMkzdMrJ2hNP/WC+uguhZnn9JfdqiD6tASbBHCjOWYpQ9xy7NPSC7O8bXeix9VELtKBDWhVOQ0H/p+PTxnYUfF9PO8F4Xlfuh9OnP6NLNzxw7atHEjbduyldm3dy+dPXOWnj59yujxcxTuu3fvmNCQEDp16hTtEOGCjZaw9+/bx5w7a4St+n358iVdunjRwiXyvxSeixcuMqEhoeHOHZOM01jk840bNxi+HjvXdMnC1atXOU9iskU2rSPrPiqmlwFnOLvvgL1w1W3TYo7peRdRIuM/Jpsex88Vd0fn0ffrx00z7VOYLGdYeW7h7ZcUSwhXkHLffUq3/wGl3X/fSjohmGPvNihy+CGFvA5bmMPv8WtK6h1qnUXir0Ic/3UHtvEruUepfEKZ44/ekCmIFXOVCHrFYM04UxCbgtgUxB/N9DLgDGf3HbAXrrptWswxPe8iSmT8x2TT4/i54u7oPPp+/bhppn0Kk+XMFMSRt08iiFVevXpFN67fYLZt2UITxo2nnt26My2bt6BmjZtQuzZtmAH9+5Pn7Dl08MBBJkQIyLdv34YLM7qmhgWh6uvry7Rs1pyyZ3GnFEmSMkkTJrIhWaLElChefFq8aDFjLz5q2Ii776FD1KRRY8Y9sxulSJrMGl6SBAn5N3niJEwisb1i+QqbF4Tz585TUnFekFL4tUfi+AmYKZMmf/S0+pgm06Rm9RqMfh06BfLmoxfPX+jBxBiTafzgwQPm2NGjdPzYcYVjNhwVx+HuU+eNXgZU8ILlf8mfWSnK2tDBQ6hd6zYMymjzpk2pe9euzKTxE2j3rl10L/geg3tFD+9TXodpETM1L1BvvH79mgkUL52bNmyg0aP+YDp37ERNRX3bVOQzaN+2LQ0dNNhan505fYaePXvmtIEiJppato8fD7vvjh09RhcvXrRez6cwPX3u3bvH9YAB4nCU7ty+w8TkNDTtz2PWukCI03fv31m7RCwW4tjrFnjBoHsEfjeHvGIwTRv8yPsFBL58S8vvvmTmsZ+XNqwW+28LNwBi+P1722fE12YfVRDDkIi3b91mxo4eQ6WLlwgTfEJM4lcKTntI0QnSp05D9erUpdUrVzLPn2MllOgntvQPsdW3dx+roMT5dVGm70sYNx4tXLCQsRcPbD95+pTpIUQ/RK+8NjVMfR9IJOKwdPESm2uEIEaaAD1ukjBBPMnm+mKiQVTVqFaN0a9DhwXxi5gviDes38DE/vkXih8nrkN+/vEn2rxpsx7MRze1/ICHDx8yk8ULU4mixbhMSvSyqG7LezZNylQMxJTvIV9utQcxuZx9C6bnM74uLfRaQB4VKjKoM2S95iyP5Qs68jpvrtw0aOCvTEBAQLhzxESTcfP39+dGhfix41ipJNLhzZs3zKcwPX0WLlhAscR9DnDPxxF1wvix45iYnIam/XksrDy+NwSuhVdCm716p/Ae8w+/sw6ik2L4gwVs4/e1BfRJNvwas1LAL8JQz6G/SH9tFm1BrF58cHAw9evbl1KnSMk4EnH2xKDcr+8DUvChsl4iBOPrV68YvTKKiMGdbEHp2L4DiwL9fPrDQz2mC2LdEG7rFi0ZPGT0sJ2Ba1y2ZKk1LIQfGUE82SKIY5qpeWQI4uoM4h7uYa3wtbQQo1sNgKDQ80YlgSg727Zui1R5jYrJ8FEWFy1cSG6ZMjP6VwakOcq/fAFFGZK/AGJJv4Ykoky3bd2GQWtYVO7Br95wmR+MdLbZ/ZnSQL+fNm/ezOTNnYcS6/VZkrAvXTJ/VfQXdimSQarkKWjUyJHcEKE2RqjxiEl25coVSpkseVgdIq6lepWq/FUKfCpT82PJ4sXWtEV6It0nTZjIsBvds2mmfWRTy+ONF2+p/qnHTKo9oZRckGxPiIF3KCUV21n2PWA8eUBdWOswBuD1vviMMviEMnCfXPiTJBN+04n9fS4+ZZ5ZWpjV839tZgpi/QGixU+PkymII29qHpmC2BTEX72Zgtgaj5hkpiA2zTRTEEfHoiWIccFIOG9vbyZH9hxOhVt0QQWHCqZ+3XrM3bt3I5X40t3GDRsZPNz1c8jzREYQq3FYvWq1SwHrCDywli6JeJcJGU9VEKt+I5Imn8PU+OABXl2IYaBfD1+T8nf+PHljtCCWtmnTJiZCgnjbNt17tE3P80ePHjEd2rXn+0UtzyhHUjBUKl+BRgwbxv3WwdbNW7jrx8zpMxj0M82UPoO1e0UqITZkGKB40WIUGBgY7vx/VpPX5zVvPjNk8GDugz10yFBG7R/+sdLBXnhyGy88w4cPt44xUOss+bJTKH8B6talK7PAawG/uKHbDli2dCkN7D+AypQqxXDZ0Oo71JHotgbu378fI/NaxuWy/2VOB1kfJhb3Y5VKHp+0y4RudgXxxImM5T3KNNM+reG+FLx5/4GqnHhEbgfuM/NuvaSVQeAVsyL4Ja0Qv739nzHfb79HBx68tgrikVef8WC78TeeMXBr+JXhvBT7n1OcXSHMhOvipflb6kOsV4ZItFUrV1krYPXB64yIutNRH+qgQL78dD3gussMUI8hznVr12a4P7Od86igQpPnS5MiJT9k8GABenqgFaJq5SrWFhY9LB0ZdurkKRiEvVQ8pNQwz507RwlF5Q701h1J3FixmQnjJ4SLU0wwPY1qVK/O6NchSWghT85cdlumYpp9aUEsDWmEfqSNGjZkZIuwvN9Q3po3aUonT55k7A1YVcG9clMI3gH9+zOq6AIo42VKlaYnjx8zMT2fomvy+uQXDogupClEI9BfDj6G6XkC5BeuQb8OCtcinEzEAyIYoNUYg+R0/zoyvAP791PFcuWtLcpqPQUaNWho06f/Y15ndEzGAy8keJGbMW06M33aNFq7Zo11lp/PYaYgNu1L2wfLP7lS3bTAl0xYn2K5MAfq+A/cEgxSeofQmOtYqe49U+XEQ2p45olVIMs+xWF1h7G/1qnHTI2TWJjjG2ohlhcpE2jH9u2UNALCTyIfzAnixGXiQcj9Eot/gStBoYMHcuECBbmrBtArejXOktDQUMqWxZ3Rw9PBQ65Ht248UhmE3LvHgwXlrAJ62GhBQYuaHo6ObHHr1bMXDwQJuRfC3Lp1iwc/qWFCEB729bVwmI4ctgX75CwZt2/fDhcnZ6a7deReP+bKvW6qe5SbCxcuMNZrkliuR3LS72S4mQ1cmR5P1eyFEZmwHdmXFsRq2vbp3ccq0HBO3G8QTWCupye3lKnXbO/69f3yfl+xbHm4LkYQhb+P+I2BG1fpqIetn9eV2fPnyOBCP5crdFP3sBvxW7tGTUbWZ8lFOoCbN2+GC89emJEx+JfpL8NbLEQXQB6rL/TYbtG0mXUQpaN46PtVnokXqk4dOjL28nrWzJnh/Ng7h73zRNZ0f/bC0/dFBFemh29vv7qtEl1BrIdn73zqtrpfPWbat2uyLGDWCKxUpy7drJct8FqIYZDWJ5RGBRjdJgBWqmt29rGNgDbAOYARXr3Tj5kqfrZ1ztdopiB2gimIDdOPuXKvm+reFMSmINZRj7kye/4cGVzo53KFbuoedkOmINb92DuHvfNE1nR/9sLT90UEV6aHb2+/uq1iCmLTvrTJsmAK4shblATx9YAAxi1jpnAPfXtYHxxCwDZt3JgrDeB3wo/OnztHBw8cYCZNmEClipewdhHQw7EHKhyeW1OAOY/1DLHZFv8DRLzRF1L2h3RG5YqVXH5WVkH3DVddMJAG6FYB3kUibIm9/HCEPdPd2CM67lU/+rYrXLmPiOl+7KG61f1ExWKKIPbes4e7mqjnhIiZP3ceExHBqpqebmDc2LHWFzp5Djkt262bt1ympR6ePSLqPiKm+3FFRPyqgpjvaQs3A20FsR5OVAz+VEF8/fp1ypwhIyPTX3bpatywEXdp0OPr7Pz6cfzKQXTVqhjdv9TylNUtS7gGAXthOSOipvvT0d2oLw2OiIjpfiLDkkUfXxDrOHNrmmmyLDx5+54S2Qhi++Xn1XuDNFZB/IHxgCA+g+WYnZSvDxDET5iqJ4wuE1+zRVoQo8VOLqShj1q3ByrqksWLM1ilTW/x08Hk6phJAqRLnSZcePaQLWIYEKSHh/Oh5ZYJvc+tjlKg6+FIZJ+5YYOHsJ/7oaEGlnDkA8oaNru5T6fF9ekPEB2EK1vU0FoNf/gFD+4/sKnU8Tda9DCaH2ClOxUsXKLiap5mPW10Hj96zH2Wt2zewmDg0Izp02nOrNkMFnLYv3+/ED43GfQ71M+nh6nvwzXJFiw9/vp1ybRWw9JNPx9AGQJYDc/H24eWL13G4Bpmz5xFixctYnZu38Er4z158oRxdA5X9qUEsbxeDDwEZUuVtjkf7r1WLVpa+1Dq6RQR0/08fvyYZ/8A8h6Sg5iQvs7C1cMCyKfLly8z6PM6z3MuzZoxk8GMKwf2H7B+QZH3nYqr8yF8OchQImcdkHGQ9/ee3btp3ty5NHPGDGbF8uXWsgH4fhVlspp4mQXy+uUgRXz1uH/fuJclaot8VMwmvcT1DujXP1wf3xxZszK3b4V/IdG3XZnqHnWlPpgXXxpWr1rF2AsX23p6YQVNINMiooa8U9MSeYR9jq4PZVyKeQncuyorehrJv5+Ka8BiJWvXrGXmzJ7NC0etX7eeuSjyG40wavgfWxDjfvPz82PWrF5t1GGzZjFrV6+hUydPshug+1WvybRvx2S+o4U40Z5Qmi3EMNALn+EubF5itBCPDHhmbSH2OPaImp+1LVfh/X+g+kI0Awzg0918bRYpQQzDrAdyEJj+wLdH0UKF6c6dO4y9G1VPQGzLCgZTVEWkJVcK3Aply4VrJcZMFLlz5mQypEnLi33o/nVkeGlTpmI/VtKmozy5ctOzp88YXFOOrNkoPcK14ExoSxAuhy3CA9IvBsLoSzdjSea0qVMzeEFA/FWwD9MjgWnTptlNYzVtVSBoDx08RJ07dWKyu2flClwOaoPIQUugFDyo5DHLhjwfBNj0qVMpKCiI0cO3d04IkcaNGjP6tegUK1KUhZ69a7EXNlrPsCIXFp8ASGvEVz6g1OuQ14IHfu4cORmsnoivFm/FgxXo57UXB9iXFsRy6W9cm17O8NDW00m/Llcm3cuH/rChQxlcb/LEia0CDbNSqMJb9y+RD3DPOZ78RUgOQpVlzppPlrzKmC4907plK17tTwp89WXJ0fkwG0zmjJkY7iolyjhezAHqCgy8ypIpM2MtI5YuJujOdVYIoq6dOzO413C/6l+YpCDGPazWF+mFWyzHrscvMqZeC14Wsdqlmse4P6WA19M5qib9o37AILvk+Lpn+cKHfO7RtRujn0dud+3cheH6SqSDnIYTXwMjY3ghSZMqtTU9UZ6XiBdZ9bzq9eIlvVjhIlQoX36moHhpw/SAcpYJe350gkU9NvK33xlM84n0VetDtf5Ag1CZkqVotRCqgBtznApi459u6vnxaRqDMwFmMcmZLbu1PKp1mIwH9ufKnoMZMmgQd9tRBbqKad+IoZX2g7GQhtv++9T2/FMGLcbPeAAdBtJ9oGfYFpx9+oaJtTOE5lqmXgMtzjylvL4PKPjVO8Zw/4HDYMT2HbE/n3ADWpxB9wrnDVgx3UxBbAdTEJuC2BTEYSbdm4LYFMSmIDYFsWkx3ExBHGWLlCDGRQ4fOizcJztHoDLxFYIrMjel6hYPvYH9+1v7yOnh66DSPnHihM25goQgRl/niPZ3dkWmDBl5KiMAQawOoouIeNdR/eQWlZo+TRJeQOQ8o7pf6V/26cTSvM7SWu6/cvkKU79OXa5QI5qfOhD/eFCgXyFAl4p3SkWsG/bxtGuWaatcpZe9hTnU6wMQNZMmTmLSiocnHhKuusQ4gtNBpHPH9u2ZiC488bkFsRofPPh6dO/OyDyU90uj+g1sHowfwxAOlm8GLZu3oDZCpErQxQgL5uju1biePn1avOgUYfBCouaTzDdr/ml5iGvCIN6B/fozehch/RqxjfmV1T7PyN99e/cy/fv1Y9Gt55MEfs6dPUft27RlIAhdlVmQygKuAYLaXtwiY9I/uoThflXPhRdH2cUouueRpuaXp6cntWjWPIymzeiPkSMZ/VzSX5tWrRnZfSxe7DjMWfFyEBnDnOxqvYT8X+jlFe465fYN8UKMvuzSPdK/etVqNl1kVPfqdQIfb29+aeIXMQflwqZ8WvZJAYz7Ye7sOZESxGo88LzDwFXZR1x/wcU58YzTzy9BeYU/1MNcFysvp3qamfbnNWSzwXuaf+sl/bg9hMmw9z65C4Hsvs+C5e/YO+8xBQ89oJDXxuIa4NSTNxRvZyil2HOfybrvgYHwx4i/k+wOoaS7Qpmjj15/W4IYb9klixW3uUH1mxLIFp9qVapG6YGs3sB4U5Ytkvp5dFAhYNCP6v/unbuURYhhoLuPCqhw1BZitFzpbiKLrOAgiPUWYleCGMgWgymWhTkcpSXyAjODyEFQyCNHeRhR4F+2mOEhMmH8eOsDxp6hkq5erRoj/ethSlwJYggiPHjl9ev+1YeXs/PoSEFZqEBBfsiq57RnX1IQo69mwfz5GXkemR5YeMFV3KNiapg6uqnHDh08yC1+en5IAYGFPlq3akVdOndmsPgO7jd9EJ9sMWtQr364F0j93JtFvkj38AuBMnTQYEa+ZMsXQsx8g/NIQRT751+4D2n7tu0YZ/egxLpKGhN9QaxeW59evW3GKOBvDKSTLebS/cc09fz2sOe2rbgngUxfOYsQWssjY7ogxt8L5ocXxNJwr6IV2ZoXoozhGaQuzKHHH2zZvJmxl7944cdXToD++Gj5btygISPFsxq/rJndbMp3RASxrC8ni5d6tZwDpKEsT1hkpEP7DtZZQLDNAzotz1vpR94vUydPpveaKDbtGzDkM8qVEKdooDrz9C0z5/YLmnnzpQC/L2iG+HvGrRe0/t4r5ulbaDX1y8I7uv3yPXkJf0D6M8IQfsXfS+6+oKCXbxk5R/HXbBESxDKBMDACS2PqlYaOvCExzZNe+UTG4B4VPUY7A1eiBpUCRn+r54MgjlYLcRLbbV0Q69OsuYqjPayCOId9QeyqhTxMEE8Ol34qPnu8uYVBPa8elor8RKpWuBxX/NoJA/uQ7zt27GDs5TnyU1+6WT+vhAWxnVHzUgAMHDAw3ANEB+FLwYOXFzeRfzI9Xb0Q4Hi50mWsXwT0a5H2JQUxuonILjf6+dAi5yjO0TE9P1TsHQ+8EcigS44aP+RBuTJlrdPu4RO9FAeMyONHDx/ShHHjGXx2V/0nSZCA+vXuE26QnBrPHdt3hHthkl2+kPdoYR0xbDhz6uQpo/vP3bsMBlzihUwdJPbg/n1eDhjoZQetycbAUGMQmTqQLKr5AH+yvFepXNnmnCjT48eOC5f2zkzPq8iYnq96GHLbkSCObguxPUHMf+OXIIhv2BXE6tLNevzRpUh2yZH+ZP1QpGAhHpQrFy6RjTsyP1BXz5k9x9qlQ9aNapmIiCDGCpEAbtX8RRw6C+EbeOMGI7sJSbCNlwD5wqY/I1B/bdwQfqC5aX9ys9wQyGsuK5YWX70c8HE7+3Qc+5f7pJA2BbFdTEFsJxwnmII4/LmBKYjtm5oWpiA2BbGe9s5Mz6vImJ6vehhy2xTEYZiC2LTPbpYbAnltCuLImUtBrCYA+v+pDxb9gSD3SQGChRdU/5E1zgyRoX3FQw/oN7wOzo1KTFZY8I++dbVr1mIwQKR0yVLh/OlIAZg3Zy6qIPzAn6SOCEdO6YM+phB28ljpkiXtpokex3y58zBquKBhvfrh+kVeOB99QXzn9h0GXTJcxQ/XLQcZtWvTliaIB26/Pn2Z/HnyWoWxM8oLkQOePws/DZwuiJ0hBbF+TadPnWawlLbuB/CDKYkxCAjxwNRd4F5wMJeHs2fOMniISLeO0gXpOp2XgZ3usAx/SUF85MgR66AneR75Aij7QH9uU+OH/O7Qrj0jxY0sz7iX7C1w44hNGzeGE8UQIL6HDjHSnRoPTKWmC2KJuyjjx44eswoM/Xy6yX36PMSy/GBQlx6Gs/AiYvAnpxFUp7oDuCakSWTC1+MUUX8w3Z8jv44EcXS7TCA8CGLVOB74FWCaRV0Qq32Ibfx8MMom+kWr9Sv8oFsgkAsdqaZfP9jr48NgwKVexsIJYs0vXvjyimcBkHkrnz+jfh9p86KnI+ODcRRg6OAhNumF8BCuPi2bad+O6eXF3rGomr3y+LWbS0Gs2t69eyl+7DjhbnpHXL1yJVqJBvd4UE2aMJFRb3ZHoF+XrCCkf1khAsx36kwAASnoIQbfvX1n41+toPSwr4jrTeZCMCLcGdOmMVK462GrD+joCmKE89vwEUxEWlMxc8Rl/8uMjIOMD1q/mjdpaq2wVTGpgjQAfsfDBjjKvI+KINbL0Ijhwxn0C1XjIeMlyZQuvVORglYfDIRxlr4It0ihwgzc27PPLYil4Rp27dplszIdyOGelZGrlX1uU9P4sr+/tc+6jB++qoBr1645FaL6fpSdIYMGW+9PhIV8ayXyEMiXYNU/FivRBbH0j7mo9XNExKQgli+HsvzpZe1jGMKRLdQYuKqWJ5Q3LGgUGUOrZs/uPRieDaJLJLDMHtGxQ0cGMxrYs69FEF+6dMnGvfRz5PARxlE+6mVG1o8QvfozypUgXrRwobUPvazD5DzX6pzLEYmLnItclkecH+V+0cJFjD3/pplmWphFShB7e3u7FMTyRgQBV685vZkjYvA3bcoURq9s7IFpiVRBrJ8fD2G9RU1HdvmYOG68UdMqcdHDU7c57AgJ4umMni72tqMriLEQAaYPAnCr5o8OWlyxuIB+nSpYjUzOKoGHCYudVKltkF0qsLCHej2wqAhi3VAOwfx58/gcOtgPNm4Iaz1TkYNssBDK2NFjrPntKG3k9WAlQnv2JQXxzh07rPHHOTC4EVMBgkcPv8xE6WpaT58y1UbA4v7o0a07IwWsim768atXr1I6UcaAnIVCtojLqf9Uv3t99oabNSBPzlyMvrxxRC2cILaApddhkQ3PmSEc2cKHrzZqGcU1YdrEiBrCQou8fEGRwimyxPklFoMvhvbsaxHEWNxCfVFCfuIrnd7w4czU8hMcHMz3nQwPOBPEb16/oTo1a9rEFy+26OYQ0a4O+nHMLqHWBwizXu06jJoGpn19ppcBvXzI487KizNzFJYr0/05I6abKYjtYApi2+tUMQVxeDMFsa2paW0K4ugZwjEFsXG9piAOb/pxUxD/eU0vA3r5kMedlRdn5igsV6b7c0ZMN5eCWL0YzPGLaWjUG94eUsCdOH48SomgJ+KvAwYyzkShvPkL5stv04dYP/81IVplxa77l1gF8fjxNn7tmRrPABF2hLpMTJ3G6HGzF9/oCmL0kVQfZrpfIMNv1SLss7MeDxkePg1CpAJ9mVSJHIQml3ZW7WMIYjXN5edK+ekd08w8EeIBQNxjsIoclNW1U2eqUrGSsUCDAHmFdHOWNgDTcQGUZ3v2uQWxev0H9u8PVz5kH3B1blo9Hz6G2QtXPR9o0rCRtQsL4oa5hxcKUQNC7t1j5NLkctsxIdyvE5+F1WWqpeDGS5JuuiBGOqHbD0CZiYq5EsQf2+T9hpda9V5GecM0ihE15AeWUpbTJMp6zhXqOXGdcYW4BV+7IMY0amp9jfRcbOlaoJdrR6aWddRtbVq1sqlPnAliDNLMLuoheX6ARgk5RiJi90QYcH/Szy9cFyU0EgHkvWlfn6llBs9ULE4kFyjCPtmlCvej6jYiproHqBP9hM4Dz51MaamaPI74YOAsBjIDNF446xIXEy1SgjjobpDTllVZCcmKVK1cIpMYqvv3795b33Bdtb7K/lfOznXtIwti1QIi2UIcEYuuIMZE7+qDTfcL5HHPOXMcphssonnpzN2nEMQBAQEMrh8PQPkAwPUiXWSfZv368XDXz2kPfBUBx44d06PC9rkFsTRc/8WLF60rgcnz4KEK0H/XUT5Ex/T8dQRECOZvVe83/MoHNhZSkas2RhjhR10pTuYxQJ9g3VRBLOumnj16MHp8I2qfWxDLF/zyZcvZlGFcy8zp4b80OTK4wZezVStWMli0BMiFHCSrVhisXL6cj+fJkZOR55WC+MxXLog9KlS0SU+89GKmkYimJ0wvQ1MnT7GWR4TpTBBfOH/B7kIv4cp8JNHDk/VfgHg+mfb1GsoMvvBU8ajMyAH4mN0GYICoWr4cmV5mVfDltEH9BgzGROnh6e6BfGHv1bMXD75ftGAhg0H5WDDLWQNlTLMICWJpWIUKLbD6DSeRlYtsEcLk5fobQmQM7vHWmzFtOkY/nw4eEMOHDHV6vmufWBBHpoU4IhYdQQyTnwVlS6juV/W/efNmp2kXWbMXxscUxOgOMujXXylt6jQM0la9RkfXK/PfVTmQhLUQn9Cjwva5BbGaR2j1wXRm6pRmssUUi1J8zPyUdlE8yEHTxk2oaaNGvGQz6NWjp80sKahcES89neU2Xq5xv8guTHq+6OjpKcOS5XfWzJnhrheCWBUouK/79O7DqG4jkz6fWxDLLyAd23ewSQecv1OHDjZfSJxdR0SvV3WD+y9fnryMPO+fRRCXKFbcJj1xf165fDnC6QTT3S5csMA6SA5hsiC2DApHTFW3+OKEgcF6OZfPT31/VJGDbvEsMe3rM7XMQBBXrVyFwVdYPE9xX4EWzVtwOV+9chXTWwjUiRMm8EBasGbNGqEHZlOPHj2Y45Yv+OgGCQb0H0CjRo7kqQoBBPGGDRuss3yNHj2anzcyLrLOkQvbdO3S1aYewrOglqgnMXgVeM7xpJG//06DBw9m9FmQ1L+/lJmC2A6mILafdpE1e2GYgnib7j3SpuaRKYhNQWwKYlMQO8MUxF+3qWXGFMSf1lwKYt16dO3mUqBJ8JCL7Gdb1S0SF5+apEDVw9dB5YOJ1J2d61sTxBhcpgoCe8jja1avdppX6jF7xx2Z6j46gliGI/soQ5So5cJenuKTpMxvXGOiuPGtS2HnzJbdOreys64uUhCjX5U9+9yCWBrSAqKzds2ajLwGKYi7aRVUVE3Pd1nh6vckFtlQp8lD3HLnyGlzv+G3WOEiTOkSJaNFKQtY8hmsXbM2XPm0J4hlBR9V+5yCWL0eiC1VIIJcogxjvm91zu/omnrO2+Ka9C45sgsRlrW2Z7oglu5jgiBWr61MqVI2dQbuTzy4bcKOQHqqLyTzPOfaTKNmK4htz3/S76TN9cE9BouWKl6C0ct7VJH3yfWAAD3qpn1lBkFcIH9+plGjRox8njZv2ozu3r1L/fr1Y7AoWZ8+ffg+As2bN6eFCxfyWDBQpUoVHqxbp3Ztxsfbm3wPHqKsWdwZ9AcuWqQILz8P1q5dy41mcpAvBiVD9I4aNYpZuWIll2v1fhg+dCiLaoCXajQq4R4BAwYMsLkfYoJFWhD7+vq6FBASuKlcycP6hhKRi1YTCJ3E7a3A5Qi0Xusrven2LQliXP92IcCkQNL9qXECw4YMcSqg1HS1d9yRqe4/hiBGPz2gCzJ7oAWmVvUaDGagOHXyJAUHBTMQbOh3qs/jq4OBYCCmCGI9H+bOnsNI0SfLNwbWod9/dE0/X4e27RiUSQhBWX7QIqG6Q15jwRn1fkMaHT96lFHLRVTNJm7vbeMJ0wUxfr8mQQyT14NVCfU+okjPjRs3Mh8jPWFqGuIBqjdIyBbfr10Q161V21YQi5fe3bt327iJSHpKd6g75eBvee34dSSIIVDTpU5jE1+8QD588JCJyLmdmX4d0Q3PtC9ryD8IYmgqgFl1sH30yBGmhRC8eF6OGDGCad2iJdUQ5V8K0Dbinjx75ox1EF7VqlXpZmAgVShfgUH5xTOxfr36zNUrV2nnzp3UpFFjpn79+nT48GHq3r07U69ePZozZw55zZ/PjBs7zmblO4SHxa+gGUElcQ4IaCzYBtq1bRvjymakBTESrKYQMyAiohgVWgORuOCOZeUfHWn4Gw9RubJY9qzZnApXCUQPkEtFq+Hpdu0bE8R4iKLSVSteR2CVP7lEsSMwKGfQoEEMOs23a93G+GXaUFuxjRsPzJ49O5zAjoogVs+PB1uFsuUY3b0ORO7M6TOs06zp1wLGjR3r8oUhJrcQg9u3bjP6Slm4JixkoV+zmh+uTPeD88iFNeR9hJlnAFaF091jAQi1/KKcIk8AjqN8uDI9TId8KUFsSQd8dtTPH11Tw8O906JpM5v0xHlLFi/BYGYVPU0ia6pfPLwQrl6OHQli6c+RID4jHsbO4qbHfYmdpZu9PqIgHvLroHDhDx86LMJdUKRJd6irypcta5NWCHPi+AmMfn1ovClSoKCNe5QpiBYg4+DI9Pjp4dvDtK/XkH8siD08GH1QHVqA0YiIll8QcC2AGjdsRHPEcxi0atmSZy+RghhLwd8PvU8NGzRg8AzDF3a3zJkZzFDVrFkzni0CQPR27tzZen+gPsKvnCUI4W3buk2c9xozd+5catK4sfV8+IKIOPse8mXaaoI4JpRPUxDbwRTE4fNIYgri8GYKYlMQm4I4zK8piG3vQVMQm/YxDPlnCuJPa5EWxIj0cZFQQJ3r0BmyAs+a2Y1G/vY7HTlyhLlz5w7dC77HCx4AzF0HISU/QToTrRL0U0YlBJ48fuIyca99Y4L4LV5gqtdgXL3A4JrHjxtvfYDAv/pgwN/btm619sGV8dKRfeimWeZaVvMjuoIYD5Fc2XMwrvIxVYqUfKPKG1i9FoCw0bfOVTjygX48hk27Jk1eGwaU6t1IcB/t9fFh9DRwZGoaqcAvukXoLxByaWvMW6mnMfqO6Z/cK5avwOhL0zoy1c2+ffusL9gYtFu/bj1av24dYy+MfXvDC+J+QgyDqJoUxHqZkUs3f0yT6S7TFWUwdfIUjDyvzA90eZL3bUTSFaa7BbhHwbQpU63ppuJIEMvw0HcdyDpLvlBimWln8dLjMVnUZ7pgnT9vfng/+KWICWKrnw9GdzK9qxTqFfSNVBdtcWZqfH0PHQpXJhBnvHQD6U4VFN26Gukk0wruR/4+konMuSVTRZ41rN+AadywIX/mxjMPuArPtJhtyD88/yZMmMCgcQrlCF21AAQo5ilesGABM1i88K1bs5a7OQAcvxl4k+tdgDDwDES/YzB06FAaLzTP8uXLGcxjv2vXLh5sB0b/MZo1m17mJAhjrCjnmH4NQIQ/EveRbJAaM3o0xxmD9YCXl1e4ML60RUkQyxuaK0ztAewKPBhlixIGamAQgbWlSQgGZ8LPHhnTpefO3yAiiYqKwZUA+jMJYiAnytYrf3sg/hA9AH3+UKDxoAGzZszk2T5cpZ+cZ9bfzoDK6ApibBfIl49xFgeAtN61c6eNIAaoNMDvI0awsNf96UhBfPTIUZv0lfalBbFMG/Q7zJ0zlzV/JLJFF2/lumANZ1JdfAgLV6bbmlWrw5Uh3MdrVq9h1HAlKD/5cuVmZH7J+wtz4erxsYmbBRkl5H2NatWsAhAveJhfWH5Rsnc9n1MQ37h+I/w1fARTw8P9M2TwYEZ/+UEdgb6q8gGkp60enm7Yh3nf165Zw6S0M0cuCBPEtrNMyHA9Z89hZJrL/MID2lGcVP8y/pUrVrJ5icf1IdxwfvBLkRfEaLXKlzuPTX2G5xkabQDSWk831b8aDvfJ9KgcrkzgujFyH+j+wLGjR23GMMA/nmkArXK6e9X0Y/h6gy+B1sYJkXZZMrtZ46f7N+3rMDWP9ftH3/7c6PHTiWz8vrRFWhCrhkpr6OAhVoGrV5yfCtmCjBkE9u/dF6kEvfYNCmL5gMG0TfpDFOjpIa8f4AEjB1E6Enyqf1yffEPUHyiwqAhiafJ60C0DOEsTGS/EX34iX7JoMb/E4UELZFro168jBTFagOxZTBHEAC2IvOCF5UVTvb5UyVPYTMOjV0b2QEsC/AC9bONlQk71o7ZM2sRNICdql1NMSf94eONFTT+nNRzLryy/aAFF+ZLXA8qULMVlRL446fYxBbGMF5b3BfJaZPhrHbwUfExDeDL/atesxXmgflFDmZYr8QUGBoaLhx43FpOWv9Eqii42sr5BmPIXyHxzJYix4ATA4jBqecH2wQMHncYJD1DP2bMZva5CXKYrX52sfvFLkRfEYP7ceTblg8+T2FjIAlNW2mtxV3kqhKbsIsZlU4mvjDNeBIAab2kIv6W4hwDqWPiX9S2+umDQk35OHXz2BpgqS32BQHz0LlOmfXumlxdn2HP/qe1znsuVmYLYDqYgNgWxiimITUEMk/EyBbEpiCWmIDYtppteXpxhz/2nts95LlcWLUGMC4DAmTF9OoNPbM6ExccAFUy+PHkYvxN+4ZrkXdm1b1AQSzB3YO1atVxOM6aiig/9mA4qY8x7KecptJcn0RHEMISHCcWB2o/SGTL9kEbIV/169G0d2Qdy965dNnGRFpMEMe6H/fv3M24ZM4W7Lly/e6bMzIB+/Wnzps10XpQxgHvj8uXLdEiIFjDmj9Hc1UHeD5xOScM+gWNKH3yKlV0q7OU3tmUXlQ7aCxkLOBFOqxYtmS2bt5D/pUvWQRwYhAUhXa50GUYXSBCDBw+GCSx79jEEsX4fjRg+nNHvyQxp0tK0qVP5MzhAn1n0eXYWv8iaGg/cY+hLLfOH0zRpmKBKniQJz026aOFCBvPeYiqla1evMegStW7tWuojXl4BBmWqaZxY5A2EXqsWLRh5va4EseyD3LljR5sXGPjFPSu7JJw/d04IuVAeRwKOHD5MHdq1t5YvVdwBnH/cmLC+uNZz4peiJojRp7FFs2aMjKv1+kVZwfRWK3gJ6+Us8lEuT506xWDZbCxpbX2BSGLMI6zHGQNLgb1ygO2QeyEMuoGp18zhiZfGYUOGMniZuHrlihWMw8FUV3JhHulXpnf+vHmtix/YO7dp34bJ+hmNCmpZsFce1GN6t6tvwaItiIFMcLROYY1t+YatV2hRRVY4Rmtfb+uoRleZa88iK4hdhaqePyCSgjgi8Y6MIMYgFJieLiqYRUK2mKZMZlSeenhq+si/7bmTx+UDDHP9Ym5ER3mCbTwoqwsxDPSwdOz1ITbCwICU9zwXcXTKGAZkZk6fgVuu9NYsFTkP8crlK2yuR17Tpo0bmQgJ4q3b7KbNxzAZrrwfsSgO8kQOgtTzlF8SRDmX92vK5Mk5TWT51wUC/kZ6d+ncmUH/YD1v9OtS96NVs3OnTtbyktISthRwOCfOz31XBYiz/gKjxmfRwkUuX4htBHES416J7iwTclS3PqgYcZMvm4yIe/169RzGLaqmXi/ujz9GjWJk/1G1xVimK5B1CL6sAWzL/VZ/Fj8AIu7Z8+fUtXMXRhfEGNGumxo3DLLBAhMyPJlOVsErzuWWIaO1j7scqIt+4aBt69Y2L704xrNAiLCBfj704Y6IIJYm/WHkPsBcq1wu9TyV6YdrQLolTMzIsimvL5sQpRvWrbfebxxnsV++8Mmyai8OAGK7TKnSNv7V9FJfVuR+/f5AmuYSIh1gznU1fNO+TZODRDELhS6KdcM+eb90FC+0t7WZwaQbZ9tfs0VLEOuGBEEFvWP7dqZR/QY8OEDe4Kg05M3rDFlBg5zZc1C/vn0ZiEP5GT4yia9mGCodGR/GUtlYEfukABov3r5dnUcPGwIjXJgK6FqCz/bA1XXgGFpR5LRyMn563OPHicvw5O9OCqfcLws8BllhWha0agCEpeeF/nBQ8wf5WbRwEVrg5cWoy/aq51f34bzVxEMKQDTo6aMKiry5/p+984CTokj7v5gvvHevF/93nt69njljzjmQxSwiICogwrJkUMGAJEkGJAooIAgiCpJByTkLkpPksAGWsHl9/vV7up+empqe2ZnZWdhd6+fnKzsz3dXV1dVVv6quqr41JMygsHLzaIwyqcgjwIy/GW+Ju3xfp1YtfnMOjgOwv573BEnfT3r31lIzcF4TJ0xgsI3f9RHwutupU6b4plEipYePIQ8TvpvAPF7tMTb+Eh/zdcl+6YXzEIP1WJWqPElRhjD4VfCFCft9NforBi/SkXwkZYOe3wT5HVSuWIlNLsDxIwlxwzJC0sOPPPXPv/+d2rZpw8QraXB8ofI87hvJJ5J2erzruK+vLyyuRZGEj/KxdYuW3hMAvsZGmaunq35PAFzjauoaS/ktwwXavfEmA5OK7f72pz8zWMIpkrAvKlQsFQdwLD0+5nWGecRQn149ejJ4aoHjSX7lxkybtmENMV50IQ0pALOIiW6SX8NJv1cwJOOm8jcwnPd90k4+41wQPzwpARs2bKD9+/Z523F5puIgL1KQ9IwkGHNM9gXXXXV12DJNj4ekDxoPDes34KU2QWHHsvp1SBp81as794J+z6DcwOR3gBUl0KEl/gAr+OD14rNmzmJSU1J5H3lT7IL58/mFILJqRVnIb9YQG6bFGuLga+FXAMu1sYbYiYc1xNHLGuLEyxpiB2uIrSG2CpU1xNEr4YbYTGyszSnrhHZ8twPVqfkCPXz/AwxeU4mC587bbmeqqsoOk6U++uBDBgmecSTDK/Al3FilxwmPDgYOGMj069eP+jP9PfBd3759meXLl0d1PD1sCUPQwwYId9WqVUw055OamhoUNzOuoE+fPgzG1ZrXQJf5G8hXGX/H9u0MKnisiykFOK4Jrg+uE8Djz5fqvEg9u3dn8N5zvyEN5rGDjpef773bXE8nOTf9Mx6J6zewX3ggLS2N+XLkSH5ByEMPPMgg7jffcCM9eN/9DBpoWAtxtUp7IDf+hO++Y/BaWDH3DD4rsPYpQPrqkuPLmFeMHw0+n+BzwjXartLZL40SKTN9BKTlxg0b6bMhnzEtmzVnkwxjCpBWt998C09UA3jM+8nHvenH1T8yZmEazzno+2EIxdQpU6nd628wmOh4x623cjzAvXfdTTWefoY6d+zIoDyIdu1iCL/vVuUP1sNm+jn3Nsb1gnglx0aZhAYrXvAA8Jpq3CdIQ1DxkUd5zGtxG2I9PXAcGZOKYTyY9FzzuRoM7gGss3vrTQ4og+uqBnGvnj0ZvHgGY73N6yvrhs5WleLsWbO5UQQwhjmSZH8ZU4wxwpjk9WT1x5m7VPmC9MIrXUEndY03bdzk7XfkyBG+pzEZFoxU5cEiVeaY117ffuDAgUHXe9y347zjh5N5vlh/FWCIVLPkpnwdwW3qmgJ5MVDbVq1VeszicciyJizyp4w5xmvhEW9pMPtNMjaF3yW/4LXrXwwfzq+/Bbgn+fq5PKzKOEyexD0KzA6jwo5l9etQJEO8YMECqqXqRTB69Gie24O1hgEm7WKy56fqngLPPvMM7d2zh4e9gY8+/Ije79qVOnfqzIhHK81KqCGGzMLFD7nhTcztwoUZq/T9ogkrmm10xbK9uW2k7QvbzvzdJJzM7UzM6xLpGpn4ydzGxJT5u7md+b2JGefC4h5JkX43w/Ej0nbFJfMY5nFNok2ncMQic18TjkO+SxRxiST53dwn2v0LkxmWF/cwaVlcMuMRDvM6m/GLh0gytzH3xfFNA2fit58u87dIhJO5nYmZZnraoafa3N7EPE6hwjb68YUwcYiElVUkQ4yOpNFfjmI6d+zEb6tdqRrG4Pkaz3NDWLbFE3NMzpUXf+DtdpjUuWnTJqYs5LmEG+JIMm/W0p54ViVPZv4y85j5m/m7lVVZkpnXTUqSzLhFG7949imKTuaxrKyKKt0QZ2VmekOI8HQUT0JlSOq+vft46T55gv3ss8/yykryJLVVy5Y0aeIkGjlyJINJs3jSK6+SxlOS0n5PWENsVaZk5i8zj5m/mb9bWZUlmXndpCTJjFu08Ytnn6LoZB7LyqqosoY4ep1UQ2xlZWVlZWVlZVW8kkabLLtWqVIlqvtiXXqxzotMt27deGm+Wi+8wLRt3YbnjcicEV4/u1UrXq4NvPPOOzzJfdjQYcyr9RvwnJ0B/fozMoSnNMsaYisrKyurMiHbe2tl5UjuAxlvjknMeJGSICs4yYuTZGLoLwW/MPp+wByzjgmk5qT60i5riK2srKysrKysrH7VsobYysrKysrKysrqVy1riK2srKysrKysrH7VSrgh1seRFHVciT42pSyNU7FKjMx8YSLbmNubMvexKjkyr2ks1yrW7cPJDMektMmMf2k9j3hV1s/bPL+yep5WVolWQg2xeQMW9SY0wzKx+nXKzAeJxKrkybxG0V4vc9to9vGT7GdOKjE/lxaZ6WFS1mSen0lZkXleJlZWVpFlDbFVqZOZDxKJVcmTeY2ivV7mttHs4yfZzzTA5ufSIjM9TMqazPMzKSsyz8vEysoqshJqiKFDhw7RiuXLmaIu1Ix98WpPWSgaS3/YG9xKzwMHDhygDRs2MDAoyHPy6klhxYoVzMoVKx2M3/RXT1qVLOnXBEv84JphuSBZMiiS8DvKjNWrVzPma4KjlWwvSxD9+OOPTLzhnWrpcT508CBtVnkflFXp5wu2b9vG7N27t1Rdt2iE85H7Y5W6V8raslhWVsWpIhti/WZDBfFinTp03h/+yIz/dlzEm9Hve317gAroissuY1Yq8xIpPJEZhrmP+Z35uy7z90j4ydwm0vbm9+E+RwpDV6J/j+XY8Sqa8PVt+vftR48+/DADw4JK7v777mNuu+VW5vbbbmcu+Of5dNXlV3jfO9xCSUlJDPJvYfKLX6TP+vbRoodTWBiRfg+ncNuZn8N9b+7vF5a+rf63iZ/MbYQtm7fQDeVvoJ9++omR7+XNSzt27OB/9X2WLl1K115zDYO1N81jm5/9pG+zbOkyuv7a65jjx48H7adv5xdeuN/9vjO/j0RhMrfXGTJoMD1RvTpj/uYLBce7KDLD9vtel7m93zaRJNvXr1ePef/99yPuH89xzH3M/fw+m9uZ+4fDlHy/ft06pnz58rRly5aQfcxwwmGqsP2trEq7EmqIN6zfQOWvuZbavfEmU6VS5Yi9KOYN5QcqnWuuvIpZvWp12LCiDS8a4g3TT+Y20RDLvpFkbmtub342Ze5rEk7hfje/9wvP/M783dSgTz+lxypXYWQhcVloXEAvCais8uOQwYNDfhdDFe4YIvxuPiYvDvTjFQUzjGjDNWX+HiuFhWMq3O8oSzIyMrxXicrvO3/eyVx37bX8r77v8uXL6YbryzNiYMNRmLANGuU33XgjI73U4dD3iwVzP8nX5nbm9uZ+0TB86FB69ulnGPO3wkCciiIzPD/M7SKlg75POOH3115tyPTq2TPi9ma44cI3fzcxZf5eFPzClfsDDUCz/o0VM76cF/Gvz7bm9lZWpU3WEPsQb5h+MreJhlj2jSRzW3N787Mpc1+TcAr3u/m9X3jmd+bvpqwhDo8ZRrThmjJ/j5XCwjEV7ndriEO31bc394sGa4jDb2+GGy5883cTU+bvRcEvXGuIraziU5EMsXkzvPv2O1Tv5Ze9MVoX//diWrtmbcgNE25/vAowPT2dKy6Am48N8RVXMrEaYvM7+YxCQipXvONbjJFfuGaYME7ybnC/1xn6SSo0bH84/TCfJzDD1uMIvH3c4+lxjHQ8UWFxM8Myt5E4yKsezTiEU7jfze/9jo1/MQ4YmMfzC9M0xGaYQAwvDPHnn30eVKCbBXsk8fbqGBIe4oc8lJ+Xz5jHNYEpR/4O9ypMPySfArknzG0k/yI+uE6mgTKl7ytxAjB4fibHPJ6Ej2MhXubxTMKFY/5e2Hbh2LlzJ3O1ajTv2hlqiMtffz2DNNfTk6+dZhgKE7ZZtWJlkCH2C8+UGV/JP0eOHGH0BllhoNyQ8sAcshHueHp5d+Rw8PEcQ/w047ev3Id6Xpff/PJKLJJ7KNL9oEu+0++/aPK7LvzeSJlhEM4QSzhyb0iD2i98M74h6eVjSM19Jf64nkfUfmaDT0BYUg4DpIEuc3szfL/vEZ6eD81twsUTSF0Wbnsrq9KmhBjitLQ05vprr6V5c+d6N3S9V16hVi1aegWyeZPgMwoAFEygwsOP0J2330EP3n8/88brr3OPT6CHeBXl5uR6PdBTJk0OuYH1G7dzp0404bvvgn5bOH8BPf9cDebOO+6k22+/naoqowTGfj02pCAaNWoUj1MFE76bQE8+/jjvB+6+8y5q3bIV7d+/nzHjAXbs2EHJSUnMPXfdTXfcdjs9+tDDTJ/evUMmPYAtmzcz2Ode7KPSBFRVpu+zwUMoS+0DzP1MTZwwgV6t38ArQLXhfyzsg8lkL9R8gUlNTeXvCn5BL0ABbVi/nho2eJXuufseBuf8WNVq9OWIkYyZVihQmzdrTiuWr2AkTvo2P61dS02TmzJy7pMnTWJ69exFX40eTQ89+CBz7dXX0LfffhvxHAdrhljfzowXG+LKMMSfBf+O/4ywzf29cNT5jh83np56/AnmzjvuoLtUmtR6viazaOHCkIoHFU6Pbt2Zhx98iMcyIx+A5KQmysDtCtoeFXBS48YMJqbWUtflphtuZF588cWgChYm+KtRo6l6tccY5BGEW/+VegwakGZ8ACoy0P39bvTQAw9yngQP3f8AtXvzTTp48CDjnbebfi1btqSFCxZS86bNmNtuvZXuu/c+L3+Zx8GxO3bsSAMHDGTMuPy4+keq8dxz3qQ3c//hw4ZRjx49vM/Inw1ffZUnggGkxZuvv0FPPvEEc8n/XURPPfEk1a5dm0GZtHzZcrrx+vLMsmXLqK5Kw/vuuYe5U937L7/0Mm3dspWR45jS44RJmTffdDOzeNEieunFunSvujcAyq7XVPy2bd3KmOeTl59HE8Z/R48/Vp3h/KP2eeapp5k5s2eH7INy8TtVhoHBgwZxOYXjgHvvuZe6dursGUpzX6T3ksWL6aU6LzIoS5Bfn1R5F0yaOJGGfT6UnlFmGMh+0iAdNPBTqlKxEt2Nss4t716o8TyHCeR6FiY9TsizY74aw3h51i1fUFatWxsYGy6MVmUCQB6aoMq0J1QZDHAud915J7Vq3oI5dPBQ0H5+wvcBQ9zL+07A/ddFpSl4xL1fcY+ADu+8y5PGzfhJeg0ZNJgqV6joXR/E7+W6dbnMA+Z+ffv0pW+/+YZ6dO/OIH3R0Fr30zoG9yDu4x/VvQGSGjWm+++7n26/9TYGZdAP338fYnjl/n21QQO+B+T73bt3c7kiY/DRS87h3XYb8/STT9Lc2XNC4inh79q1i1qr+vyB++5jcI4VH62grssAZs/uPdRE1VlHM44yVlalTQkxxF8MG848/NBDXi8TmD9vPl168cW0b89eBtvqQuGDAkQMBQqN46pg3/nzz8zb7d9SFde9dOWllzHSQ9z3kz5MNWWC/Fq1e/bsYWCoNm3c6MVn7Y9r6LL/XkxDP/+cQeGGlvGsmTOZ8tddrwzZV0Fh9VOF1lWXXc7UePY5LkikAoJpracq1AeVkQDHjwU/kl2jjneFircUsDD3OB5MBbjt5lvYQOo9NqjAsQ94v3MX+lmlg7TgFy1cRBWUkcYxQVam0zrXC0RdSMP//vs/XOgC83d8RhqLoZB4L1ywgEGaf/LRx3Rg/wHmaEYGX9N7VMEN2rZuHWSKUdmhEpg+bTojx9PTBPtLASyTnEaNHMlcdenlKh5PKqOxmMHMdzHpZtxFbIirVGXCbRNkiNV1L0x6fIGkb8d3O9AtN97EDTGQnpbODaHeKo3ApSpv4fxkP6RNE1UBVatShVmzZg3nG5hggEbdXSodpQce+6ACu1mZX3CLAg0PaSBt27aN4yENTDQ271IVNipFAFO6b98+6te3L3OlyrPTp00LOpeUlBSqqBqeAOYGT3Dk+EjvZsro4hzBHlWBYh80QkF1lcY3lb+BjTTAyh4b1f2l51+Tvn360P3qHgbmEINePXrS3//yV3q/S1dGvheDgcr2syGBBsy+vfvoOnVPo2IGfE+rMkMaVMivkydO4ol0AGHgfsI9AB5Ulf/8+fMp40gGgwr83fZv8zAvsM9ddUDwyw8rVUPv/y78N4MGzgJ1n+C+ALtVnNq2bkO3qvsa4FroRuW78ePp6iuuZCMKDqvyD/n766++YjDhc8mSJUHHQ8PjenXOoNFrr9H2bdu964UGBcpPKQ/kaYrkV5jOKy+7jIYNHcocPHCQy5HZs2Yz96q897hq4EoHgRyz98cfM7erBg8aZdL7ffDAARrQrx9dpNISYOJWNJJwuQHT9nVuBAA0ABCulC8o0y9X13DunDmM7Dew/wDmapU+TyvjLobu2NFj3JB5RZ07eFiZVoQXSQhPDPEHhiFOTUml+1Sj4WXVyAFyb2zauInBPij39qq6Bch+yMfgDmVSF6pGseSHA6psQKfH9SpvAeQP/dri/r/uqqup8WuNmDU//sj3k/TApqp79bJLLnWMv+IrlUdQZ0oH1PChw+iyiy+hH2Z8z8i1x1MScI0KW++owf18pUpDMdTfjP2G8yDKBPDZkCF0sWpULlD3CJD9ZJIeOqU6dXiPzwMgjug0qanKEfCsatTB1Et+sbIqbbKG2Bpia4gN6fEF1hBbQyxYQ2wNsTXE1hBblU0V2RCj0pFHhiNGjAiqAPAbHrX169uPMYVHUHgkd1QVbEAvLAAMBR6J/v3Pf2HksSoqGoDCYuOGjSH7DVCFJ8BNyhV1wS8MKis8qhdDYU4OwPCIyhUrBlXwgz8dROWvvY7xGxYBE3LrLbcw49xl5mQdSEwq7PRexyDDquM8fr2Jl8YBKGDwyBsFNSjwGX+Gx4K3YykxBR4pm7/rwmcUtNVVpQdwPXShEMSjZDEU2B6GDY9WQd+Pe3txZ35Bges8egOXqsJ4xvQZ3rHZEN8ZuyEeO+Zr5gp1PTEW1Dwnv3MTnQxDjKW2ACqL9aoCMK+nfMZwgwb163uf0Si7+qqrvArFDBd5BA2pKVOmMPgO+Uny2ycq/X/xyTdTJk9mMK5+29ZtIb/L8Ud9OYqXB5MGFb57QxmSx6pWZczxfyAvN48aN3yNgcni4U+5Dk+rxgoes4Yb4+gHjASGMgA89kUekvsPQ4CeefIpNjJAwtyxYwcD84h/JSwYVt0Qy/feGGK1vZl/YIj/8be/M3jMb8YPx3yy+uNMz+6B4RnATxgK9E8VFoBZ1MsP/I17QNL3ow8/4u/lfNHo7PPJJyH5R0CjOalRo6Df26gy696772bkeunlFtIEjXwgHQbyyPySi/7LS1/q4enxxTJ2SLPaL7zASFxxTQBMnhlHpFdDlQfAB70+CDoPP+n7otMBeRbHBWbYCOvTgQPpZtUYAzJGGkYN4Bz1BrIgBhL7oAyOJGxvGmK5Pi2aN+fzDjfHA9cWc2QwjAxgH5SX0gAyG58A6VW3Vm3mY9XI0H/DnBsYSBmjbM5nwHhvNDyGqTILmHkGnzGkRvKb/C6GGPeKXmfh70tVnpAOLL/w0DCt8cyzDOKOOkOG2KB8wznr+wCJP+7n22662Q6ZsCq1itkQmzfDvLnzeHY3SE1N8wprxzwV8Lgv3PRADJBMAkIv2Ddjx4aEqYMK/x9//RsjhlgKMIwnfO/dDso4Fjio46EnS8Z8TZo4iTBuVsLCGrUoUKWC4AkQqoUsL2bAGL1bb745qMcO4+ikgvArDBCOrGuJMWn47qef1jHoMUQPr7mPCPuiJS2GDb1aKAAPqMoM4DsxHwBjWPEdKiKA8bxmoaYLn9HjBCMHZFyvMPbrr+lWVYBJi563V6bh2quuZtAjZIatf27ZvAUlKcMtDY5cMcTTpzN6PIQQQ6x+/1qZYfDwQw+HTKIzj29Kn1QXbptYDbEupC/GsoPX3ErQi48RP+QnyTfyGQ0dOX6+un4wwciHANcDY0JljC32gSGWMa8wXGYa4PgNXnmFad2qFae5hG+CvI6e3mlTpzIYr39z+Rvou/HfMbKdl7/wWf0rLzJBD/N+1fCU36tXqxbUCIPCpTmE3xCmN2YeBv8X5z4EMOvo2b5E3Sdg61Zn3C3GRYNKj1YIMt5oBOuGWI4hPe7hDPE1V1/NSB436d6tG9OgXv2g7/2EVSZkHWL9Wut07dyFadKoMX+W8mbH9u0ch/yCfCY7O4sbpehlA507duKxxbI99sUchTatWjPmcSBsJx0S49zx9l9/NYbBuHCzV14H+7Zo1iykhxjlGEBao8cdjXCAexNzC6TBL3MApEcf54I856E+63MkmiY1YfLz8ZQjtEGAMgRhXH7ppcxitwEzZPAQ5vFqj4WUd0CEXmI8uTC/14XvzTHEaSqu4Jorr+T8qN8X5j2FnlNM3gR4wohtpEMD54r7Uww1XhqEp0L1X36Faa7SWo/3u++8Q8nJySHnIn+jEYv7YvPmzQzqVF3YBj3SN6p7Gsi1lvvDzxCjl3fzps2MHo6A+lzmLKCRsVWdl9yf8vKicGD+B+p5OX+rU6/gaxRoFDuNrwKnDsN20aKHV4BwCrz6X74vzYrJEJs3AAoITCq5sXx5pt4r9egVdeMLL6vWNIYZXPCPfzLTpkzl/fQejPXr1oeEqx8PLXBUdMBcZWLRgoXcMpdJPSgs8QYpKSDwWFTfHoXX3LlzqakqhEDlipX4sefj1R9najz7LBsIPIoDEAyXtJjFDOnC58aNGjHSwzR1yhQGj5dRiUSSHr+RI0bQhef/i6op48FUNUFPQDW65+67GTQoMExDr0DNsJ0eq2pMs+SmvJ0U7k8rk/9+18CjavDlyJHepC9UcvpvergAw07Qwy8NnHCGWFckQ1yxQgWOVywqbkOMa/6cyhegpzbBy0wTP+F35PMB/fszz9eoQQ+qhhpWuwDP13ieGySfDhjIYHtUgpJ/MRzAPB7S+P6772VgeMLlE4dqfI+hpxlgyMV///N/9IgypyCwbfD+lStVYv6t8iIMYMAQP0ZffvmleZphJXHGfQHQi4/rgKEDAEOs8Aj40YcfYYYOHcr5Ew0P8LHbwyrAEMujZyDyDDGvMhH4HvvAEN9w/fUMKnhdEu6HH3zIYAKTbrj8hPSQHsxwZvODnj0Z9LJD8j0M0+TJk+lV1ZAHjz7yqOIReurJJxk8xcFEKbmfIRjiN1VjDPjFC9vJkC0ZFoVOAlDrhVp83UzpcR362echy65Jjx+e6qE8lEf+yDNoGMqb+iSt5AnHpZdcwo/kr7z8cuYyZWqHqQaUnE+VChW508HvPCReKEekATV82HD+Tgwx0kaPuyn02nZzX7bh9zuE701DLG+6vEDl9wqPPhrmXnLukwqqkSZDZmQFJXkCM3LESKpb50V6SNUpANs+q+qNB+69j8FwJD1eHZQhbqUateHOiQ3xxZfwfQvM3/F5+bJlXv0r+Vs3xBi2IRJDvH3rNsZMIYSHiaJS/iC8OXPm0FWqoQBwr4aLK4QGPoZGWUNcsiTXSybLS4M8rwB/ax2YMeLsizJAJzRflCZZQ2wNcVAcrCEOljXE1hDrsobYGmJriEPjCllDXDIl18sa4sJVJEOMCQAXqwpWxrz254rfGb8rYDkWjD0Ezz/3HBeMMing8ksupdUrV4WEqx8PjxgvV4UCEEMs/feoXPGIZurUqQzMC8ZIdlCVAZACW4ZYYMwWTAQmEwBMOjtxPFCpLVm8hMcCiyHGdzBcz6lCDYQ3xI0ZMUyzZ81iMFFHD988P9lfGDt2LD+mlgoHhkiW7PFQhfDaNWsYvAgFj+EjGWKApecAxuDBoG3EZCjFFepY5mOwb7/51ls2iMfR6XE04oul6DD2UgwnKjO/SXW65s+b52OIxzAVKzjjt2MRhrREbYixDnEchrhOrVoMxnjq528ez/xt+/btnJ9kmbKVK1d6j1kBxoijQSmGGftg3KBuiM1wsZ8MCerY4T2ulAXJI9hPwEQdDH0BmNR58X//y9cYOPkoOH8F77uGK0WJ72NRGmIzHbB2L8CkN4w9x1hNgEfGyLcyxACP7XG/Y3ISwONmPY3FEOtDJqDgIRO7EAEG+8IQl7++PGMaYgjbeIa4Xr2gePsJ4/4LezGHLCMphliGFLz80kvc6MNYU4Ax5vpYVQwfw+RL/X6OxxDLMl5PP/VUyP1kxnVAv/5e+SbfyfFBFob9bHbG/GLJQSz9deH55zMyZ0I6JDBGXM+PyHsYAiHhPqXKik96O8Nm+DyMJMZ3SCdMbAOYRIbvZAwxltTT467vB16NwxDjM4YFgAv/dQF3ZISUuQLOC/eGe364/jCJskxkndp1eEgFTCjg4V/KNGCuDEi0IYZiNcTXKkPshef94gjhm4YYDUDMFQEYAmLGVf88e+YsnntiDXHJkFwXMcIn8gro8z1Z1HBNBlNr9RGqvUr9K6w+GgXa9opX1xylYXszmUwMW+VjShEceo+XdMVkiCFOYLewfOett3jMm1SY5g0rFwQ3Lbj4Pxfx5CIZ84tK3ewFMsEN+pfz/sSYPcTgU2WI6tSuzcBs4EaWAk62kR7p/6gC7yefdS6lxTNn1uygHmL8ZvYQ+52fzBKWHuKdO35mYED9xoEK6P1+4403eKIWwDi0C/55vtdjYW4viIGUiXA6fvGTMdFYNxYm1uxB0vfHqhxoqACY5qDw3TClgfHcM8+oPPC29zsqX/S4Y2wyMOMGYARuUyYRmJPq0KNiVuCFKRZDjEmO6NWOVhLnDz/4gEEvu9lrroOVQ5Cucrz3lGGtqUyefn/oYBvMzNZ7iHkMsVvB+fUQ475Dow/AQGLMvPxmxhuNzs6dO/PseYBKCqu2yLraXrjGGDAYGYBZ/6jUgwzxyMINsS6Eh0YhuOeuuzjf3nbLrQye1uD3VaqhAC6+6L+88oAYPHONbjbEVwcMsXwvhhgTtngMMcykaygLM8SQXN8G9Zwe4nBCePqb6sKFpxti7LNs6VIGvacwwfo56aC3Fqs+RDLEprDdA/fdz6CRg22kQY5VK/zWzRVwTV/ACj81HPAdGiTt2rVj0OFh7oN8gnsOSG+g/GbK3Lfje+/xUym5P8zfAcrAf6tyGsjxsfY6KNQQvxqdIW6szDBAJw4+y6Q85Em8uCcoTtp9AdColUniSD/nidpdjN9a0ADXEIghFmCSMQ/AjJ8IhhhGtDBDjCeRAOeAbSJNqkMPsR6eHib+xkpGuiHGvAOZ0/CNanCxudLyJ5DPmLRuxxCXBHFN7VwflX8PZucxdy1Op7OnHqTr5qcz9y45TLcvOkx/n53C4PM9CvwbCWzjoMJZkEbnTDnIVF52mDLzkBeQJ5xjk0+eLcmKyxDLwvi44UzjY24L5AbBBKL2b7bzvkfliEpCltExbzRMzKhUoSL96x//ZPBiDv1YAEsxSQX7qTKvj1cPnpQCsDwWgEHVl5MRjqvKGqByuOG664MmmWHWM4wfCGuIjSETYiDQK4il4cyF8yV+QwYNomuvuYYrLYBK4uW6L3mPMP0m7aBn4ipV8YMffvgh6DyBGT85FkAhfvcdd/A5ghluL64O4i3LDmGVDr2HmxsOKpxJEyYy/7nw30GVJn6DCcTLS4BZQcBM1q1dh4cJ8GQ+VeDje88Qu0Mm/M4lnPRVJnB8UwhHN8R4MYf+m99x9DgDmQSGVU2+GD7caxBI2ksPWYVHHqX27dp76Y1ex2oqXpknMhk9ncC8efPo/y640FtWSsKSCs7PEAPp4cfwBww90PM7Kiw5307KgGCIhm5Ahg0d5uUfmcQmDUL8jXyPew68qypshCv5GcMzYjXEpMUbS/xhmJJUsMjzCF8MyZ233c5PkswnPALu9fJXha4yofcQ/7wjMIkV5+QYYudNdeEMrBjiwoZM4DvTEOvxE5mGeK0q2wAamWhw6vsAuf+xLNwT1R/38hd+i80QOz3EUt7iZRcwKdJD7aWLm1/wIiI8+sfLXwB+y1ENLHlxCK6XxIP3c/fFyjvgkYcfDmkg6jLPEyYMT/qkQW9eX6TnS3XrekOU5NhDBjtDJpA3wh0Lkh7iSMJ+3ioTvRxDLOmB4RwYdrN9+3aGf9OOhzoEQ3u6qEYmwHd4WZO8qCXlUKA3XMAqKzJJuWmT4Al0eGIZjSHGW1+B3zn7G2LnfvAzxEE9xO73IvxtGmKki6Q/ygy8MEQvb3CNxo0bx2ASOfKw5D+/+FqdDAUMMYZGvLX5OPPbGSk08VA29+SCHMXG47lUc9VRJpu/y6ccZWRBrg856rp7uOEM2p3JnD3tIA3fi9VSsIKXPE0vXXnAGuJfrCHWsYY4tCK3htgaYgjfWUNsDbE1xNYQl2xZQxyvYjLEcgPJI6wbVKWGCly+N0/d+95l9KjR/KIOMah4HIuCRSqs97u+T1MmT6FBqrAFeGwqj2EAFtU3wwRNGicxF5x/Po8NNn+XIRo9lGHFYuXd1HEAzDzGtGGyFcBC6Xj9NMZKyXgpGBV5taoU0Ob5NVIVH9Af1wE8ssYrUZ3JM4/yQupYxuj1tq8zmISCySh6AYOKUSZ0wJRgvUikCcAEuOuvc9IJ+D2G18XnrlU6KBDxGBUvcwDhlqHav28/U7VKFaqi0mXUl18ykydO5OWfZJIFXidrVmoYM4jX+QKsXQmjO14VlgANDrxOVJatwosCsA9ehgIeeeQR3yEApvTjDezfn19OACQupuTFEpUqVqTBgwebP4eVmS4zZsxQ6X+dNykTr8YePWoUG2FQRTV+9DGTWLwfw1SeVnkHjBj+BY3+chQvvwSqVq3KFf/bb73FIP5YBlDSR8bQhgN5Hcsdtm7ZksEyg8jTtWvVZtBIxNhH2R7hw8BgmAu4oXx5+kiZdpkEikoPQ14w9hTIpFQx1MgPmPgZk7T4orLFizjwumYg+VfyP1408rc//4VfgQ3M80WjBI98Zd1h+V4mgSH9sRTg7NmzGXyH1zVfp64ZQAPNTx/2+oB55aWXgvKzSI8DhkAh3YBpiGUfGcPbUOV1fCfphxdrID/gZQ0A16qruqeR7wHMEV4VrBtYnM/rbdoyZrwgxPd+da8B3Gv4XdITZgyTY59RjXkw5quvuCErY9oxvh3xlPwr5458B2668SZ6rWFDHisMJk2axA2+a5TRAnNmh77mV5d8p5dvyKPXXXMt0wp5VoU5SjWyABqPuEex1B+Q/WFUwRPKpPst7ySfG9RvwGPRw0m2a6i2A3iduh531Eevt21LtyhzC5x7Y6p3/PvuvZeHmckkOuxz7OhRb9IdJkiiXpRl75BWlSpV8uqH2jWdYSnC2+3bU8sWLYK+04W69b//d1HQq8BNYSiOlBfSASH3B8p6PR0x5AgdUNu2bWXM8PAZy7jhBVVAwpP8i5e1IN+j0QJat27N5ZdM8kYdoRtiq1MrTHLLU77n0eVHmNsWpytTW8CdJsLWE3n0/KojjHOPAi62HS9roOdVAON7ONfh4nlpVG9dhna/o4MqNM+WZMVliKdNm8aYBWJhggHDTHJ5kxz2gcnEuCzQqVMnevHFF+n1119nsJA7bkSYSIAK0e940oLGGqlmr6QOKuBZM2epiqc1U1cdCy/OWLVqFYMKDhM59B7idevWeefrZ7jwGWMhAc7B/B0VG2aWg5aqAsAkKnnT15ZNm0O2x2ep4PE2qxaqwESagC5duvDkJL0HKZLwu17BwxSi0kFBDwrbH5NGMJEGLzMBWDXk448+oh3bdzB62DqYaAJQiWC1EZwDmDVrFjcSRo8ezeBaIQxZx3OiOl+zF95P+rHwZAGVLAh3fSS9kIf8XpARrbAtJoXJm+Dq1atHjRo14vU3gV+PPhpW/fv1Y1555RVq3LgxffHFFwzSAnkG9xFA/JFf8IYxYL6EQI+HgHWu0agDuD6Iz/Dhwxkx56YwmQ+sWLace4Elf7Vt04Zf+KH38ABJP5gXff3SaKTHFXl6xBcjvHWOzbTCuH8Y7iy1HZC4y+94iyUaIPo64To7duzgsa/169dnYCgwd2DMmDGM/vRBRyaxIn/q3/udA8L7WhlZEC48KU8wQ1//HueP+ym5SRMG16tXr17eOrO4XrgvZNUW7IM34S1atIgx4wUhz6BhCrBmuxmXw+mHvQZtUlIS50EZA4sedxgmNOyAeT9jIibmUKDnFWDSIV4usUOlMzDjUpgkXDFsn3zyCacB1uIF47751reRIXMs5OU1ghku0lvPV6a87dz7bZXPhG7k86WLlzCY9FmnTh1vHXKsnGMaPewjBhmrYmBt/AaqIQQGDBjAJnTH9u3MBCONsUY8DKgZBwFlwQhVTuirKJnHRvkiHQqSH+X+wIum9PTE33hZj27ozfCQH9BwApIH5QkR3oy6d89ezsMAE5TRSSDHwxrG995zjzXEJUS4vPmKh5YdZu5depjytBUhuO5VhrjGqgwmsGKEs6+v5EfOU04YJ/LymWsWpNMLaxCO82SlNComQwyZN61OYTK3LypmuGaBbv4ejkCLJvQ3P3SZv0Xze7hto9neJJLwu35eGN6AHgd501w0++vEkkZFoTCZ25vEu21hMvc92Zgyfy+MePbT5fddNDLDjIVEhRMPiTpurOVLYZiS7+U45vfFSawy9y8KhYUZTuZ2sZLIsPyIlF9Mmb8Vtr9JuLB0YHoBniiIkfYDDWr00pv50OrUCJfXMcTpzG1L0mnj8TzaeCLXJY9+SM+m6iuOMJvc3zap72NhzbFc5vL5afTCWmuIPQqTuX1RMcM1CwHz93DEUoAAXeZv0fwebttotjeJJPxuDXHo7+G2LUzmvicbU+bvhRHPfrr8votGZpixkKhw4iFRx421fCkMU/K9aUTM/YqDWGXuXxQKCzOczO1iJZFh+REpv5gyfytsf5NwYelYQ1w6hctrDXFsiskQI9NHutEKk7l9vJgyfze3Nb8rCqbwnV4Amb9FQ7jt/b4D4Y5nCr+np6XxY3WAZaXwSC+W/YtCvGFEkrmtH7FsH4vMff2IZjs9/SPdTyaxxMOPaPcvbLtYZO4bK4kMK1YKO67ftYu0faIwZf5eXPgdK1Zhn8IMm7m9ialofzc/R4u5ny5z2+LGlPl7rJgyfwcyJAITCvFyIaw3DTCEceuWrfRehw5M+Wuvoy2bnWGAfmFbnVzhEuSp/z20PJ3555w0arjWWTsYNFiTQS+szqBL5qUy+K2B+5vDsUJwtqvv8qeZqb++IRNWpUcolEaOHOm9aANvTdqnjcO2srKysrKKJKkvMMYdK2PgbX7grjvv4pVGZJKmOYbd6tSLDbHbQ3zvssMhb6bDpLqayhSDfDRUebIdMbiEJvq+DgV0PM/hmoVp1hBblVyhUMJkCEyOA36TgKysrKysrAoT6gv07MukTyzJiYl/4Xr8rU69TEPsTJxzrg9M6+bjuVRlxWFm+ZEcWnYkl5Zn5EVkmcvyjFxaqvZZeNjhknnWEFuVYFlDbGVlZWWVCFlDXPpkDXFssoa4jMssoMzPVlZWVlZWhck0vB74Tfvd6hTLvSC4FDDEDyozDO5R5PM1gil2wIs57ltymBmzL5tG78uir/ZnM2N8kN8Yd/sv9zpcODc1aFJdacwL1hBbWVlZWVlZWZUFeYb4F8or0HuI03kMccAQ/0JbTuTS86uOMvr30ZhZZzuMH85nrlmIdYiPWENsZWVlZWVlZWVVMgRDitctBxvifPoFw1uYX2jT8Rx6aOlhZnJKNk1MyaFJMTBR7TPukMP/zcWya8GGuLSZYmuIraysrKysrKzKkKwhjl3WEFtZWVlZWVlZlQFhVDf/p8woxgw/teoIc/m8VDqRL0urOaYYL+N4eOkRZlJKFk1wTXEksI0AQzzqQBbz11mp9Or6o3bIhJWVlZWVlZWV1amWM4gYhhTG94u9WcyZ0w5R+80naFdWPnMgu4CWZuTS0yuPMAez8Z3zPZMTBvf3/dl5ylDn0qs/HWXOVeFPOZTt9QxbQ2xlZWVlZWVlZXVK5SyxVkDZ+Q6tNxyjc6am0FlTDjG/n3aQOXNaCvM/ytD+fiq+j8zv1D4A254x5SD9cUYK02XbsVI7VEJkDbGVlZWVlZWVVRmSNcSxyxpiKysrKysrK6syIHfVtaChCyCvoIB+OpZHX2GtYcWIfdkOe7OYkftMsn1Q32Nb3ieTxh/Mpp+z8hnzeKXRFFtDbGVlZWVlZWVVBmWa1KIYVs9sAw4j+A2FpV3WEFtZWVlZWVlZlUGZJjgI/O4SlX5BeC78um5riK2srKysrKysrEq4QkywNcRhZQ2xlZWVlZWVlVUplGdqTbML+FXN/gTtq4fns23Qft4OPr+VcllDbGVlZWVlZWVVimWa08IIJ3M7k7Isa4itrKysrKysrEqhdLOan59P48eNYz7o2Yt69ehJY78ey2RmZkZlbPVhTCrJAACAAElEQVRt9u3bR5MnT2YKeIhE+P3KgqwhtrKysrKysrIqhbKGOHGyhtjKysrKysrKqhRKN7B5eXlUs8bzzLhvv6WFCxbQ623aMjDH2AbGFmRnZbGBln2zs7M90wtyc3IpNSWFli5Zysj3OTk5DI4l+8m+IEuFCyQs+V32L8myhtjKysrKysrKqhRLDPELNV9gtm/fzqZ08aJFTMMGr7KR7fb++0yDevUpKSmJDhw4wHTp0oWWLVvGJhm8924HmjZ1KrVv355B2F9//TW98sorHqtWraIPP/yQ+eGHHygjI4MqVqjAzJ8/n9LT0yk5OZkRA12SZQ2xlZWVlZWVlVUplmeIazzPvPLSy1Rfmd5KFSsySxYvofHjxlNyk2Rm+7btNOzzodSoUSPmh++/pzZt2tChg4eYGs8+R6tXr6bXXnuN2bRpEz1WrRpt3rSZmTd3LlWtUsUbUtGsaTOaM3s21XjmWebdd96hWTNnUsf3OjK2h9jKysrKysrKyqpYZQ1x0VUyDbG7zh0v+ox19AReBLqAClSiAk7gAoyJyWfy8gsoNy+fclSmYHLxt/reJT9fxse4C0pzmNjXGftSgLC9xaYDi06XeeEcOU21dAhKIzfd+bfA9cDnvPx8TnMn3R1y8Z0L0txMXwnfuY7Bx8O/JUVyAxdXXvDysEsBp2ngc6KkH4OPo19f7ft4ZKZPnMEkVKHn6Z5j9MvPx6Dg89ePZ2VlZXWyhDKHDfHzNZl1P/1Ea9eupeqPPcZgOEPfPn3o5ZdeYj744APq1asXff7558zRo0fpOWWCR34xgundu3eQIV64cCFVfLSCN0QC+3+o2L1rN/PkE0/Q+1278jALULtWLTbFixcuYkpDuVgiDLFZKbt+2P2uwDNXqUeP09ode2n8wtVMr7HfU6O+X9HTHQcxD7b5mG5Nep/Kv9aZub5BR7rxtS50Z9PuTKV2fahm98+p5eBxTP+Jc2jGig20Ze9B5ugJDDLXKlDXnJR1BdJfM68FTuPi0JGjtHLbbubrOSvo/TEzqEHv0cwT7w2kB1p/SDcndWWuf7WToiPd1KgLc1fzHlS5fV+q1X0Y8/rnE2nw5Pk0e81mZtv+VDqRnU356ligOExnUeTkASdugjTGEgGHFxR20Q2qn/QwQb5qPDrguPjsYMYvGoLTpmRcPzlPJ46Im3O+3ODwOYei4p2/S6Kvn5WVlVU46WV7Xm4e1Xz+eWbbtm1cHnXq2Inp17cvbdmyhXt+wbhvlQ9q2ZImTZzIYP+uXbrSnbfdzmD/1StX0auvvsocPnyY6tSuQyOUWQY9u/egnj16Um5uLtM0uSk9/PDDdDg9ncGY5YcfepiOZhxlSkOZeFINsVkxh+NEdg6zSpmwbsqAVX2zD/OfOm/ROVWb0mmVmjhUTqbTqqnPjzWLQHMN9zvsA7B/5ST6Q/UWzBX1O9ILnQbTwCnzmW37U7in2YxfEMXS61Q8Com7G3/5+1hmFi3csJ3eHT6JeaT1R/Svmu3prCrJzGmVklR6qXSvhjRUVHfTs3rzYILSXFHNha9dEpWr7PC/T7agaxt2ono9hjEjZi6l3Snp3OsMQuKqx9n9rziFY6UcPkYvd/iUeeHd/vRChwGJ490BVFPxSqdBzIH0DMKTDjnPRMlMv75ff8/UfLu/Ov5AqtnBISR+PtQMYiDHf6BqmAJp1JQUIS4HDmfQKx0/ZZzzDD4H8/yiAefMSDju57rqGqapRrsYZSsrK6uTJZTtMMCzZ89m0OOL79LS0php06Zxx8DOnTuZUaNG0ZIlS7xJdNh3397AMmv4DvthchzA75gk98033zDTp0/n1SSkXsGQCj6GG966deto5syZIfVPSZY1xNYQe39bQxwsHMsa4mCsIbaG2MrKquQJZbs1xEXTyTXE/MhSHo27jxj5kabDpj0H6a3PxtO1r3RgzmTjm6SZrRaJ57EWAcPGBk6ZtoqNmd8q03xfs17Uf8Jc5uCRY068Me5YgcfpxW3KEil+nMumBaYLw1DyuNHRsv8Y5tLab1E5pHeVJg7cgHDTSDDTryggvXFdxWCrNP+jMtkV2nzEfDlzGR0+kemlt/NI+hdtTDkwzzJxQvi7Ug7Tnx5vziQ+D7qNiqrJTJOPR/FYd75GBYkzlmaBVFc1PgAf12zMFHqOxrYqj9TvNZzha2Me/BQK59pP3bflqiQxTpzV/S3pXui5hiM4DcqpMMFp6hhDpi7kPFmc+dLKyspKZJbviTae4cI1P5cFnVxDzGbSMTUgNy+Pfli1gaq378OcU1FVXOhF1Ht4pRfS64k0K6ciEmT4nApeP145HN/tkYYpSv7kS2/MsYwXLC1C2mfm5NA381cxD7ToRWfB/Ac1CLTzLy5DrKc3GxOYFOe6l/PiodK+QiO64Nk29Pbn3zE7lTl10jww3rg40x9hsyFW+QAE4ptAtLT+jTKoGNMu55comQVakCHWe/L5/vKJYwgBM4gGZL2ewxj0ihbn9YhVeMp0c6PO6jybM+U4nbW4h5xXrEgaNHNQjbp71T2VmZPLWFlZWRWXzHLdJFEywy2OY5QUFash/kV7HM/w5J18Wrh+G1Op7Ud0rgx74KEPWuUsaAYpxFgVB+bxDcpVSaY/K2MM2gwYS/vSM4xMEjwx6mRmGvO4ACZYVt2Ytnwd3d2kG51ZuQnDvbI+5xgwafgbaaJhpldR4GuqH8OMhwviqvjH062oy8jJlH7sOBOyikCC0xth7TyUHughlvgmCi+tnb/LqXvgload+LE7SNR5meHU7TGUcQyxXGvN4BVGUIOpKdXvOZw59YY4+DxnrNxA5/idY6znG4mgvNqUzlX31KINOxgz3a2srKyKKilPMCxh48aNvJKEsGXzlpAyxyyHwsLbRt4+JSWFUlNTGfO3RHCqZQ2xiXl8A2uIEwhfU/0YZjxcrCEu0nmZ4VhDHOP5RiIor1pDbGVlVbyS8sQa4sSreA0xD48AzjrBKUeOUou+X9HvVSUF2ATj0WNQpaIZI9NAnWrcSs+LnzLHl9VqR2PnrWQwEcwZEhIYH30yLzKOFXR8xY79qVS7yxDmXIwLZhOsGV7zHEsaQUa5BZWr1IRuatCRmfXjJmcygIzpLob0Dh5D7BO/hNKMylVuSu8OncA4Y74xpvgXJlEKHkOsG0MzPuHAPnLfNlNm+AuGDbF5sJMqp1CVZeRe6DLYZ1iIeS4JQL+f1PGS+oxmZCm2klLYW1lZlX5JeXLs2DG68/Y7qHXr1g6tWlGvnj29ut80mybxbINJcrNnzWbMbQtDwtL9ibnNqdZJMcTzftrKXPtyB3eSXGDMaFBlxb3BPhVOicHpEfMqQNdcnqXOCST3/pKOZmYFGWIqxotsZiDOVAWBSYrjFqymC2u8bkySM9I85BxLGHpcYYg5nzhpj0ZVpxGTKTs3l2FD7E22S0y6n1RD7F6b855owazasss1xQ6JUlk1xFzYqjyA1WHAeU+2pKAGbHHl96A82pQuVI1ksC/9CBvzROZHKysrK+j4seP8pricnBxGyhlZZWLGjBm8PrC8eOPAgQN0/Phx+vTTT5nu3bvT7t27vXWEv1fbfz1mDJtecOLECRoyZAh17dqV+fnnn3m1iUWLFjEc1sBPqXOnTsyGDRu4npJVLLp360aDBw2iE8dPMDDwAwcM8LbHqhSmIT7V5WRCDTGqQ/3E0GPaZ/zsQI+wmEn9caNeoZgVjFnxeL+7mN+fDDheAkyB+x2onEwPtuhFe1MPM8U9fMIJM/gY2bk53iS0syo0DqRVuCEJ5vmVNDie+FfQPzflVTGe6zCQyTiR5fbKuyTAnp1cQ+xeE3cIESY9ekYfjasEqawb4vdUIwl4jUCzvEk0Rt4sV7kJM2jK/KAhPVZWVlaJEgwxXqDRrFkzj5EjR/LSaKByxUrUq0dPeveddxmY3saNG9OIL75g5syZQ088/jgvtQZuuvFGGth/AL+QAzRs2JBf7Sw9wng1c//+/enzIZ8xvT/uTR3fe4/W/Pgj81rD1+igMt1PPP4EM2/uPBo+bDg1btSIwZvt8OIPvP0O4HXR2dnZxeqRYpU1xLHC8RKsIS52XJNhmg5riOOXNcQJxhpiKyurkyxriBOvxBpiFP4FztJe4PVB39CZeBFDNUwYcirPhBjZU2mII9KcTcbNDTszO/anBI3pdYyNmWrxiw0AjzF10v3IiUx6qfswOl1VxqDYDEBJwR0CUk41RECFth/TwSNHvfRwDFrREvykGmLBNcblKjbi9a8l/yRKZdUQ4/h4FfhFL77FeEOEJL4h51FMuMe9u0VPt0Fz6gt6KyursiGnVvuFhyxUevRRWr9+PYMhCPv27fPKm69Gf0VXX3kVHdi/n8nMzKRbb76FmiU3dWjalJ6o/rj34o1KlSrxsAaZNFetWjWeoyPh5eXlsSEe+vnnzK5du+i1116jF198kRk6dCjNnTOX7r3rbqaFe5wnlTkGmAD4mjLZdevWZb5QphxhliQlxBDr7j4zO4da9hvDnIEF8YN6JIuhUmLTF65C13/Tf/f7LgHIOWItZcWtjbrQ3rQjqqLOY5w0MlMvfrEhViY7QxlhUKPTIF4Fw+mJl954n3iWFaRXTl7sodK8Wvu+lH7sBKP3zsVrSE6JIZa8qc7tH8+2pS37UphEqawaYjQ4xy5cTeUqNWaCzfBJvBdcQ/ybak1pobbahJWVlVVRpRti9AIf2H+AgYmVt9KBp556ij764ENq92Y7Br2xNZ6rQYsXLWK2b99O3d5/n1KxcoSicuXKHCbePgeeffZZWrVypTcmuEOHDkGGePDgwcoAz+GVLUCFChVo0cJF9MzTzzA7VPjLly2jgQMGMp999hktUMYbxh08/NBDtGf3HvP0TqmKZIiloPdetJGfR28PnUhnKlMGHFOGCsKp3OPu1dUfmfNnLTzvGPr3ToUUgt/LJ2IyAoUgx5fPVZrSI6/39nrMZcJX/AqYOyE7J5deVuYGnI40d41UkdLbxExf90Ue3osOzHT3XvRhXgNJH8HnWLGih6eOUa5qE2rwwQgGvXPOpLRfAmkfY/KfEkOsp6cy+c93HsyYrxGPV2XHELtVg5seSJ+Kb/ahQIMwlnNKIJL/1bVr3PtL5ylR0NAJwcrKyio+ZWVmUv369YN4++23uacWYGIcjO3bb73FrF+3nodCtGrZiklOakKTJk3yJuW1a9eOe5GlnNqxY4ezXZNkBkMssP20qdOYn9Xv7ZXRbtu6DTPo00Hc44vJfKBpcjK1bNGSNm7YyMCAt3vzTW/7IYOHBPVAF6VOS5SsIY7JCBSCZ/jcz9YQG0j6CD7HihU9vMesIY5G1hAXM9YQW1lZFbOsIU68EmCIA2NkP5u6wFgIP8EVkmnMxJzpy7hhQhLiAKokqX+x9q4zSckbRuBVmMVcaSLsyk3ozSHjGbn48Uqv/AHC6/jFJJ7Mx7DB94lHkXENk2d63b9hivT0RlrDlONfL919DLG3v3mceHDjpsVPGmT9JswOWraMJ6bFmPyn1BC7efpsdS5g9JwVfA5FnWRXdgyxUwaJ4Vy1dTf9htMskfkrDtzjl1Ply/97ri0dyjjGiCm2ftjKyipe6R7Aj3Br/Pp9VxIoSSq6IVaJvGLzTua8J1EZ6IYzUZWSbnicSphRJuEPT7Wim5K7MbXe/4xaf/oNdRoznek69gd664vJ9NpHI5lH3viE/lW7HZ1RpQnjvR0v3PFiMgkuQabPiedvVFqA6cs3EK5/vBlB9oPxABMXr6XfVJOe+HDnUhQQnm5kMYGtCf3pmdbM7S16Ed549sbgcUznMTOoy9jvqd3QiUz9D4bTfW0+ov9X8w2Gxzfrb8fDMfjfIqR30L66+W5G5z3RktZs31ukm++UGmLJQ+4Y6f/WeYv2pKbTr90Q69cTx5R1t5v0HeOck55+IXE/CWh5EOuuD56ygAmsgBJfXrSysrLSy7+yQElSkQ3xscwsuq1JN8YxmKgQpDKKs0IK6gnWDJQyBWepY9yljBgYNHUh7TyUFhiSYCQw/tQTPi+/gNKOnaCZP25iGnz8Jf2tRhsqV7UpE6jItN7kWM8hyMyAQG/0zUldebKXGBqvxyhKYVvss+tQOnN53bcD8ZR0MuMTDWbPuzfkAf/CzDdnKrbrQyNnr+CJgoCHJGg9lpzObjyF3Lx8r4ds0tKf6Pmun9H/qkYM4MmHQfEHRhqacY0I9gnsj2tatd0nPKwEOHE1UzWyTo0hNnHTomoTqv/hSCrA2/n4DX2OITTzfWEqW4Y4n3anpDMX1GqvxcvNCyFx98M9f/fex0RgZzKwHlYM6WNct7ub9WBOZGU7edD9z8rKyqqo0st/vWwMh7mfiS6/7c3P5vf67/JvJEqSrCG2hpjMCtwa4oCsIfbDGuKIWENsZWV1kqSX/3rZGA5zPxNdftubn83v9d/l30iUJMVsiM0E6fX191SuchITU6URCb0SQuWkjAC4sv579O2CVZSVncMETKVDNEKcZYxNfkE+bT+QSg0+GsmcqypAjPvTTWzRzkkqVYfTlQHpP3GuF18xkdGK465MfZM+oxger2ukVWgcosDbP2ByOL5VmtLtyT1o5ppNDCYtSdrp6+IWlrnFuOWr881Tab7m571MjS6D6awqhqE3MeNaGGyCsJ9zHmdXbsJGHIh5jEWnxBCbaNfnHNVAmb5iA8PXwTX5sZxWWTHEfDyVBn0nzGXKYc5APOej53+13xkqjQE+B00cNfcLR1AebkHnqoY8mL9+u3fPx5oPraysrKyKVzEZYt34APRS/qvGG05FIsRSEfmhGTL+Wxnt594bxKRgYoo7OUoqlnh6yAIVKoxdYAzi1/NW0V+eamlUaEU5H62iZZrSNcrU441qgM8hBguBOC/fvJP+94mWjJfeRY2r9Gjx34FJaTDdGZlZQS+6kF5tJ70d9Dzhp8D1cl8i4n7Oy8tnI4P1WoF3zT1DE8f5BPUwN+OnCnhhB8jKwUsSzNhFVkkzxOBalYfAkWPHyXkxC4xh9CdWVgwxOJ6dTbc06cbEfd9q+/xWfW7cbwyDtyB6jeKYwhOwXwun4aqo/+GIoIktVlZWVlYlRzEbYmeJNaeH8I3PxjuvR5UXI6DyiKlilQpEr8gCPYblVNivfvAF90w6S06hV9KpdBn3f7FWMLqh4//czzB7M1dtpD8+3oLxXipixjcWdIOmTMRZqmKcsHgNw8c1I6dJj5vEr2bnIbycGxP1I+EwcJzcSpuBGW5KnUdOYTDExOmF1xoeEWPsr8D1cvbFPw5OuMNnLGHQixZoPIjhijH99TThBkMz+p0KAyzfsjMoPaNRiTDEguQld1WR14d8612jaJ+QQKXWELt5xkOVQTNWbqBzqjZlPAMac76R+6Ap3ZLUjfakHmb+9kzr+PMh8PKiE/75Nd7gToRY8p+VlZWV1cmRNcTWELtxBNYQm7KG2A9riKPCGmIrKyurUqM4DHEB7Us/wvz7hTfdCkOI0xB7FTKA2XMeMT7Wri8dy3QmosQ6AS1qaZUsj3NV5/fhNz8wWEM4UMkWAa+CbMYmRAyJDPsIp0Dl7xie9bsO0B9gRIIaIFr48cBxdCp8LIvWqPconiwHgsxHMVTicm55+flM035fOdc+yHBJHGPBNTBIb0wORKNNAZMvaR7tuZQIQyznpU92VPxBNdoWb9ju3R/RqrQaYmlUSQMNZRFeV+7dD5w2ZlyjQPKLut8//HYmr+8NXuqm0qialAGxpI8ZvlM+YsnCfhPmxJT/rKysrKxOjuIwxPk0eOpC5nQ2jFIxapWRbk7MysEXt0J2K9j/1HyT2bYvhQ2MvAmvWCoRwxCj10nG+F7boGPgvOJG399Jq6vrvctkFjKmVQwj0hy89fkErlSDelBD0jIGghozzaj8q50pHeNStQaInxk2P8crL93dJw47D6XT+c+/rsUJcYw1/ZEmYthc3BezPPxG75jfjFOiDDHgz+69os7pgea9eJw3j/U2rlk4lVpD7N4Pcn4oH857QksPM6+ExDsMbj7581OtaMveQ96Y+akr1tOZlRJhiAPX687k7jyW3RnPHvk6WVlZWVmdPMVkiFXpzT15eB0x8BbB9wytVAAaZuXgi4TRjCey9PluDuNVGNw1ZEYmQZKwxRizOXMMaNdRU+m3VZrQ71VFFqBZ3PxO7Q/+pipxsDf1SMQKUcyiVKBXKhPtGBE8HnaHloSkZSw4huZMZbLBZKzEgPM3euSLu+KWHnAcu9GHI+h3Ki5MHOn9u5DvAtfuyjpvUepRLHtXuGkUlQhDbKIZwDOqJNOHY79neIKde+0i9RiXXkPs5EWZBNtxxGSn9183xCFxjYAY6GpoNDWjpzp8yuUbT/5UYJm0S158K9ADbe4fLZ4hbka/UWm+cN1Whu9vPlZ0edHKysrKqvhkDbE1xNYQR5A1xH5YQxwT1hBbWVlZlXjFZoiVfj6YSuc91ZqJuQKKgqte7kBpR48zp6KScEyoY4izsnNpb/pROnBY51iR2H84g/alO+TyRMHw5ygGfemWn5kzeRkoVM6oXOMwACb8qLgp3dOsBwOTgQpaOFkSQwBDfDQri/artGFUeu/3ScNY2J+OMAJgHeRTbohjbjCa++O6OdcO6+T+7elWzMbdBzkNCzu30mqIic8rMKTpirrvunFAmoBYzsHdXlGuYhIzdv5qDj/QICygN4Z8R+UqJzMh+0eLdr3wMpr6H4xgnOtU+PWysrKysip+xWyIR85ZzmOHvfHDZuEfK9xz4qIMX5dRU5xeSrdih05mhRGopFApBoxTouKAMALn56yaEU4Sj26jpzOhL+IoYvqr/c9Q1/HLWcsZMQHCyZKXvm7vdFCaR0ifaMTprcH/xXAtE2qI+XqJOXINZTyGNCgP4N5xxkhXf6uv8/IU19CFU2kzxIH8gLG9+fTN/FVMuUqNKGid4KgaGJLmgetwUe32jPMWSTQGA6Z41dZd9Hu1DwhcMzPMQtDvV8VfVeMFHDpyLCi/W1lZWZ1qBdW/Uu665VRZV2yGWCVIkz6jtWW/oq2EwsC9OoGKCS9n2LD7wCm/AIGMEMmuxi+vAizk/LANXn1c/d2BjLOyhFYhFyXtef9m9M8abb1VQzg62o1w8sQHZkItlfk5RmnnE885JcYQu4aTDbFjXp3XnOM7rBTiErXZkvDcz67hOqNSY/py5jJvUligYSPp66i0GWIRrh9WP6nS7hMGaei8WdI1nCHx9APbaYZYNTKb9v2K0XvXGfU5KzeH7mv5AXNaVSmrYjleC+c6aT3YmBgL+k+aF1WPvpWVlVU8CirPwuLUE9IhJp0Bx/Kct/kG6pNCDJHhH0pjuWYNsY8CFzPy9Y9XXkYp5PywjTXE5ucYpZ1PPOdkDbEf1hBHf7wWznWyhtjKyuokK6g8C4s1xKKYDDEqvLta9nKMGZsz4FMBRI1rCFxDfP2rnbjCC4zhK12JmWjh/DNOZNJldd9mYqqEo6FqU6r2dl9vCIdVqBJriJvT6crE3da8B3N6VRg6zaDFZEo1tEblRbXfUnFOZ/SGpX4vlWZDvGLLTvofFVfgGVMxnCHxDIdcj2Z0ljKmyzbtZPS0kooC5RDWDgblKrtj+GM1xCbupNg7m/agbLv8mpWVVTFJL88cXxVqhHVDDB/w07FcZtXRXGc+lWeSsY8Rvk6IIS59Hq5QQ6wn6PGsbPoXXsbh9XChYvQp8KPGrViqJTP1en3hmDO+eKUrIYtDSIIdB9PoD0+2Yoqe3gbKDHQZNdVrAVqFKjGG2EVdvzMqJtEPqzYxV9d/z+nhLLIhFmOIJzdNqOGHIxietOnTA1laDDGirJc/vxT8Qs0HfO29uCcuU+qllRP38g07U15+HiNpFKhAnH93HEhh/v5sG+ceFMywo8Xd/+wqSbR4447gc3SfkSQyHa2srH59kjLsYE4+M+ZAFvXfk0kDdzsMUH9/vjeL1ivzC+C9vjuYRWNcMnLzaWZaLk1LzQliehjw21TFDJe0XCxOoJVtbvlakhWTIcbKCOcETWIpQqWgVw7um8Q+4aXWCgJNjl+7VBos2bBDVZzJTELSW+OMSk3o2wWrgx+JWAUp4YZYpfmKLbuY6cvX8zChgMny2ScqXEPrmutzVZgArwd3lmILLowChljMeEk2xMibjhnek3qE/v083o6pmdqQuEVAhi24nK7uqY/HzXaOgXInTOzz8wuYWl2GBJaajPXYQfFwr7cKq8EHX/BjSX40KT3UFC4mVlZWVtEJ5cmSwzl0/qxU5oLZqXTt/HS6Zn6aSzpdNjeNfjsjham15igNUSZ5f3Y+c+2CNDpt+iGDg2G+E9TnaQeZa+al08Hs2FZ1OtWyhrgkyxriUy5riP2whjjmYwfFwxpiKyur4pU1xLErOkPsGqY1P+8zXh1cRIPmTqqTF0NMXLKmVCXeydDEZWsTu8ydxm+UCVqujJm5zJ1VQAk1xNVdQ7x5F4MhDUm9v9SGAJjbR0mQQXRMKrimQUde2su8n0qPIXbiLUOo+k2Yq0xsk0B8404vJ33+/GRL2r4/1TWi4fO/xGPikrV0hjeOuAj3olZ+YlLrrkPpjHedrCO2srKKUwEPVUB11h6lu5ekMzsz8+jr/VmUkVfAnMjPp51ZeXTjwnTm8nmpdDQvn35Iy2HKwdx+n6LAv4of/Cn3vYOzbWD7M2YcoskpOWb0SrQiGmJUb5KwYO7aLVSuYiPyKkTGp8CPFrdCPatSErNo/XbtYtoaASkwcvYyOk2ZKKYolbAPf3xKGYIDhRuCX7OK0xCj9/ZAegZdUqc9E7ymbhzHk33c/ctVTaZWn34TuKfc+7k0GWJM5sjKyWFuadxVW50jDkMs+6GXV/HUewMpn99MFzn/s0dVpB87TpfVfSf4+sQaBz0eKu3KKYPfVxl9oMcjXFysrKysIknKK5Sd1VYdofprjzGv/ZRBZ09PpcF7TjBrj+bSA4vTqcKKI8yFs1MoI7fAGyt82oyDQQZXjK+JaYyF05UhHn8o24xeiVZEQ4zaTTeo01duoNMexWL4gR6OkMI+JpyK4ZyqTZjV2/Y4h7UVgqfPZizmF5YwRU7vYP7ybBt+DG3TO7yKxRC7Qyb4jYAFBfTNvJUMVjxw7ivNcMWDZhh/p8JbtGE7I8vqlJ5Jdb/wk6mZqzcy5/BwhTjSR1/2THGmMqFgjEpzSRMHMwaO5P7AsIbWg74JntQXlyHWys9qzejW5G5MZna2XYbNysqqSDIN8UtrM5jxB7PoLGVS/zArhblQ0X3bcRq4+wRz4cwU7jnGxDhw2vcHHXMLs8ukGJ990A2x4rtDZaiH2BriUy9riE+trCH2wxpia4itrKxKoqwhjl8xGeJpK9a7hlgq3CIaNDccVHTgx+2OIbYKaPD0RZohjsEERMFfn2tLe9JgiB1DYBWq4jXEuK8KKC8/n6nVeYhjtGSd75D9o0S/P9W/tzV+n8GyiSgk6/YYypR4Q0x4zXk+Pd9pMMPLM4oJjcWIeunhnKes65169LhriF0DGiby8jvM6o+q0R6Y5BqnIfbSD7Sgc9S/YPbaLU58cEwzElZWVlYxCOWxbojzVfnVaH0GnTkthXlfmeFcVb5+ujuTgUHOyMvXDLE7dtiFDXFhaIYYYMiE7iFLuiIbYgo2xLN/3EynVUi0IW5GZ1dOYpZu/NmtmFx+5UJaDJ+5tNgM8f8+3Yp+PpjGN45d99lfxWmI9XsL4Fpc9PwbJC9uiM9stQg2gIpylZOZrqOns6mr2+NzxlkxIY4e12I0xAhBTxOsw/17dSwQiCvO0YxTJBwjzPtWbkItBoxlAr3D7vHMyLjiOHG8CihHVRh3JHdnAi8VijX9NHAe7pjml3oMsz3EVlZWRRKKDoDyLXljBl01L41ZdyyXNh7Po49+PsHsycqnHZl5VOPHDOam+Wl0Iq+AZqflMOVmwAinaoZY8DHCLs6YY4w9Pkinz0ihySlZKi6Yp+GsNlHSFZMhXrF1l7HKRJyVgF4ZPIZVJpKYqSvWuxWU7bGEkObjF63RVpnwScMi8DtlElbv2GsNcQQVpyE2hUXMP5u2kM5S5hUEzF8RDBdw9//L063ppx37qG73YQxPqovL0BWjIeayxrn/YQ47j5jKJpbhBng8jXAxxMpYKxO7RDW8gV62RSqsA9vgpUH59PG4WQyveBHzq6P9cM7rr8+2pb12CJOVlVVRhLLDLa+2Hs+lWxemMX+dfoj+qYztv5RpBfj778q0/ntmKjM9BUO28ik9x+HBpel0rtrnnOkp0TPtEJ07w+HeJel0KNt54VFpKdOsIS7Bsob41MsaYj+sIbaG2MrKqkQKZYdbXllDHJtiMsQ7D6XRmV4l6hJSuMeAW5GUq9KU+XTaAucxprsQf2lIwOIUzh9L3Z1VJZkpWqUbCiZxTVr6E6c5sArVSTXEymxlZufQ4+37MoGXQBTxXpMhGOrefUyFW6vrZ4xjiF0zF1PeOjmG+PDxE3TFy+9qY6rjNcQS36Z0V3J3OqHSGOhlW6SyRn6XhuO2A6nMn59q7V6bWNPPwB0CUq5KEvUZPyvqeFlZWVmZQimM/6ReP5Kbzyw+nEOz0nIV+BfDIrJpXnoO7c8uYHhYgzLE+n5LDufyNsL8w5HBNsuOOGA8cmkrywo1xLoyTmTRX55BJSBjHItQCXg088bQNe//NfcKyQUpDQlYnML5b9pzkH6j0ggUyRT5USmJen8326voy7riuSlPpiF2eiB/oY27DjB/faqVa7iKeO0909uUTlf85okWzGnVVGO0xBniwBOibxeudp+MxBNHAfu4VG5MvcfBcAbGDsciJ/8EJkE+2WEglauaCEMs17g53ZrUjbJycxlbBlpZWcUrrteVnzqQnceM2p9F/fecoIG7Mh12n6BBezNp7bE8xql/nKdgICMXL+nIpomHHCYcynL+TgkPtpmems2k5jirKMVb3p4KFWqIdXefqyqB8o26BBXgIYV7zDTzeoDuaNqdcrlVYYdMQMg/6cdO0IU132ASk94aVZtSra5DvOtb1hXPeZ5cQxzcmu6nGivOZEq3ARoSXpR4hlKMrNaglQlqMQ3HKUZDrP7LyctjKr3R2+nFVsadCYlHIXjn5pRXf3qyFT/lKmoBLW/uxGvPz6iqDSEzjx8t3vVRDZaKjWjBum2MfZ26lZVVzEKR8YvTubAUr27+IYW5UHHN3FS6Zk6KSxpdPjuNfjvtIDN8TyYb4YPKPIPr5qe6r2E+xJRTf5fjf8OB3xVTDzHXzkvjcIpa3p5MWUNcgmUNcWIVz3laQ+yHNcTWEFtZWZVIWUMctwo1xLpwQrW7Yf1SZzxiQgwawnArvPOqt6TdKeneI/ySkIC6QTnpUsfMzs2lB1p/yBRpbVo/VCV+cd236PDxTOZUy0nn4msImYYzGp1KQ5yZk0v3t+gVGEPrNUJdQxoSfiF4++Jf7XxKiCHGOSOMlVt3Mr9HmnuNbzl3My4R0CckKi566R16d8h4envIOIfB+Befo8Xdz6VN/7H0u6daBuJnHj9a9AZL1WZUr9cXTF5+HptiKysrq+jlOGIMf6i99ijdvfgwk5KTT5n5BZSZ56L+PpaXT43XH2VgYI+r779PzWZO42XXDmnrCss6w/jXH2eJNmf5tTN42bWy9GIOQ0jmPhPm0GlVkhyKUgl4lUGLQA+QMguDpixgUyQtilgNTFFlHnPltt00fvFa5rsla2lCkfhJhQGcsFapsCOdlxiEtoPGMc7bsXzSMF5UJXx2lSb8whVgnvvJkndMjB/Pz6cF67Yzkk6h6Rg9EgajruGWvSlBkzYLO8uTaYhFkh4o0Jar7c57siWD+80Z81tEAxaJqPJXYg1xIM85K0u0UEYTOPm9qIYYuPujUYEeXXfOQtzIm+rinpRoxlMLQ/HPGq8zuw6hc8AaYisrqxjk9hDnq7Kj6qoj9LIyxUDmJAQ6HB2fFXgxRypPhJumTCw4bYb7proQQo1wAG27GXhTXbYZuxKt2AyxSsTV2/fQb1VlCJxKuQgVgU+FcG/znjHPAk+kpGIGeGx7e1JXOq1ikgMeX1duQuWqxAC298D+jZ23/SneHT4x4nlx5lXGbery9Uw5xMGoPEPSMhawv6rUn+s0hHEG1J/c9Ia8a6zM0JHjmfTfF9oxSK9yKs1D0jQWEIbL6Y80pGEzFrnnKRM3zdgE61QYYinQED+8Xei94ZOYcvrj+eIyxFGRWEOs60B6Bl1Qqx1zWjV5CiWY8YgSzxgjDDfuxYLPsePBXWau73dzuOFmZWVlFbW0+qPqqsP0kjLDQIZgmYgh/jcMcS5e3ZzNoJc3yOzym+h80F/OYZhivKmuNMkaYkPOsawhjhSvRMu7xtYQO7KG2Bpia4itrKzikTXEcSs2Q0wFvE7q9Y06M8VhiM9SxmX8wjWMeeFOhtiEusuO4EUkZ3Ol3MwFcUR8Y8Q7Tye9TlcmD0xc8hOOaEbBkxOXAko7epz5x3NtnThIBVxkQ4wwkulcZYoBhnBgYW5pEJwseeZU3bDjF65WprExE8gXiGu8BAzV7x5T56iuqQyZgIErzBGfCkMcnO8LKONEJoNJp85kODc/hoR/stDyX4IN8aeT5nuNmcC1M4+fKAJ5Iz7M8BJDOXWNwR1NutOxrNJVoVhZWZ1aSbWG8vixlUeUGc5gTD8lDNyTyVw4E4Y4n6al5jBsiHWz68shDccQe696LvOGGAZNmZaOI6cwPJ5OM7NmwR41unlRBu3G1zozKUeOhVy8RIsbU1r4MGYyy71mlyHuOEHDEJvxjxY3HKzlDPalZ0Q0ZJLeBQV5zMs9h4fGxzxGLKDihbGplsxUevMTyszJ0XpPizntjfCPZ2XRfUGTyIqYr/gcm3tj1K965T06cjzLWyWATX8h53UqDLHITJ/567bS/2D94KD8mID7L2YSZ4idc3OuBSaQ3pz0vnb9zeP+SnCv57nqnvxh1cbgfGAmoJWVlZUmKStQhydvPEZXzU9n1h3Lpb3ZeRr5tONEHj2/JoO5eUE6ncjPpzlpOQzGALO5/UHD6B0O/T3w9+nq78kp2UHlV0lXjIaY2Eis27mP+dPTeHFAAirloB69ZnS6Mtqgab8xlJsXWLajOKRfLMd8FtD4RT8yZ8vM/kQ9EkX6KENbpf0njNMba8YoICdTB+I3e81mOidoolGc6e0h180J74wqTajn1997Lx5wFtVOfGbWw3TS3eHj8bPoDG5kJer8WjhhuJOgkvuMDjl2YTqVhlgkcc1X1+SNIePoNLzW2Xu1cxHvvbhIpCEO5LE5a7fy2xMTev1LI3L+6l54qcdwr1xy0ql4ykErK6uyIa9eVWXF1hOBVzf/5Yc0+n+z0+gfs1I9/obXNs9xmHooi/eRVzffvzSdzpqRQmd+73AW+MFAvsc2M5x/z3a5j1/dHPy2upIua4i1i2UNsTXEpqwh9sMa4mLFGmIrK6s45dWr1hDHrJgMsUpqHnsphqnW+587j/Bl2TR+eUAclZg+ZILDccD43Q/Gfs9GAJhmpqgJLJkGy5MA/L162266oOabTMKNhjrHM5QxGzlrGSNmN5wC5+k0CHJy8+ieZj2dyUbehCOf48SKZ6qa8dqvY+auZGDYnbG9znVPtDj9VUU/Y/kG5k+8tBjGT2J5MZgCn7hGg9a4Anj0DGC4Ys0/JckQIw8cPnaCrqvfiQkaVpKovBAViTXEefkOXJ4gXxfzGN0Sj7bu9N+faUM/H0xjuBwosIbYysoqvPT6AvXrEeUbwOIjuTQ7PYfmCIezacHhHDqYjZdxoK5390Pj291vqdpnvtoGLFB/+7HQZcFhB+wDMB45mjq2JCl2Q6yZieWbf+aJSl4FyW+TiqMiC+oh1ip4mOIqTajLyClMdq70FiOhQw1yOAVv55hLziwIA720Los3/EwX1W5PgTd5JcJ06ufTgq546W1KU6YGwGwW5iBgMfT4j1u0WqVJMuPFTdIu5NhREpT2zegPj7dghkxd4PZMSXo5vVQkIH4+6R/us94bCBDe5CVr6c9PtWJkwljAEMeZ9prBB3i5BcjilUsCcYhGJckQSy/hzNWbmHO9PBDnfRc3iTPE2GfHgVTmPLzkorpWnoQc91eC5F9lik9X1/ijb2YyTh4Ivd+srKysPKFo4Co6UM/6zQkKT7BH0p9QRVK445UmxWiIg4UloV77YASdVqWpQ7wGxqsIBN1ENveWLavevi9t2LXfS3BUpk7CO4STd6Fdc+ddMFW5HM3Mou6jpzN/5EpeKuMiGDIP4zyqJFHvcbOcTCaG3oxsBGH7rJxcqvJGb8brJdYJiUMMuAZSzv8MleYvdx9Ku1MPMzy0wcjo+o2kx9Pvs1ynlIxjzBuDxgVMXdA5SBziOJ+gsJrSmZUa03cLVzNOCzi2G7UkGGKRxFvyT9Ino93VGOS6mccrLhJpiAuo4xeTmdPkXBJm8BMVjkFQAx7oec5n+1iR6wmUKb6+fkcGkw71pZOsrKyswkmvm/3KjHC/md8XRrj9SqOsIbaGOIA1xCGyhtgP7f6whtjIcz7bx4o1xFZWVkWUXjf7lRnhfjO/L4xw+5VGFckQ46TxetHzn2vLOEMmfAr4wohYwWhUbUp/eqIFJX/yJbN0886gF3jo8dK/CzwCwPjnPNp5KI0ZOGEuXV/vPTpdGT/gVEJxnoMvjmFwHgM3pWtVpYal5LxHEFE8htCFbWEglm3aySAteNm0RBl4M705zZPp/GfaMO2HjKM1O/ZSlqqYgXkDhEOWsduy7xD1/Go6XVy7PcPrzar0KafyDQgYCpyH4BPPSOj5R5mJB1r0oszsbEbyQCwqiYZY2J+eQVe89I6bb0uPIdbPAetrX1WvA1Pk+8/b1807HD9nGI4DtkkEErZmXCXu+u9m/KIl6B5sRmdWTmJm/bhZm1wXTUpbWVlZWUWrIhtiFNDDv1/CODPEtYrCLOjDoVc2/J1eoWmwaWrm9CQpfqvM2k2vdqaGH41g+k2cy290W7h+G7No0w6atWYLjZ6zgmn/2Xiq1OZD+vvTrRi8Bc3pZdUqtHhMWNhzcSu0KsnMmDnLnTRzidWgcUVYgAlIzqRGjKs+HW+/S6QhNnu19THi6vr+jzqfOxt3ZZL7fEWDpi6g6SvXMws3bKdFG3fQzB83MV/8sJRaDxxLDzXvyZz3uDLweFOfUeF747W9tJfrEMf5aGH/TuWPBeu2BvfIx5DeUEkyxCI5D/TYfzNvFZ1bFS9XSXaOkQhDVihafnssNkPs5H/3KY3Ky1/PXUlnqDwMykl+iPXaG0b19CpNmbMrNg6mQlKCQZigkYvz+bSqzR2C8nks52Psh4nLihff/zxocrGVlZVVOOkdDzrmNqbM7fTPZljhtiutKpIhVmfPlRp6XUGDnsOU4dGXzQI+BX60BJlk+axXFm6lLEM2VKV3Giqkio0c8LYzfBYqGa++5TAQNiorwSceUYP9A+GXQ9jKqNTqNJjJyQvtVY1F2F4fInI8KzswdCLI2GuExDEW9HTWrqekf5Wk4PTltNe/w+uu/dLcxTsO4lnUuLrhKGN9usqDoM2ArwPmK8bGh6hEG2J1TliWsG7XzxhvyEFI+iYa93q5eSNWQyz5F5Nkq7brq+VfiXeM96JuiKs2o5pdPmMWrttCC34CW5mFxcSCtVuY+erv+aoBfnWDjoysFFGk66HdL399uiU/kbOysrIqTF494T6RTk9Lp3379lGeqjOA6UVMzHAEWfULYR08eDBo0p0fpUnWEFtDHAE9nbXrKelvDXGMWEPsxN0a4qjR7hdriK2srKKVV09YQxy1imSIcbKyVi04eiKTHm7x/9k7DzgrqrP/s2CJLWosiYnR9J68Sf5545tqTKIoTUAQRHoXWHaX3quAgAhI76B0RClKB2nSe2+79La99+X5n+c5c2bmzu6y9+4usHJ/Xz7fD3vvnXLmzOzOb849c2akOim118of8gL+yJdU+yTh/vkmmhNsvnn4Zz65u6bxrisgef4I3bVDjKCfNext30TGIYBKcIDwrObGQJa7AVxPSKbfNO0n5huXVrbdW8ZANPXWsYB6M6/d73vX7X2vsEBcQu3ycN2H0UsdRojJ6emkakq6FpjhqgKlLAdiOQbU8XBehST2+3W7+9ZxvvWXliUJxM4Fyj5VBw97j5nilNt1wVVeXZB9dTxKNL8nt/oPs/cEMGzhGjGEuzOVdH/YvzfKSqE0+rMNPusCAICC4L8P6eoc2L17d7FJkybU5p029FaduuL5c+fy/e0qypzsHOrYoaPYVC2vX9++lJKSInqnNX6dKFkgljFyeXQHLW/8RRUg/tr2PVH6vpX0ZFeQJgCZn93ve6cVeb2mDK7X+aYrhvkCoXNy/natzrTz5FkJrnrMY45nxT9AeE6pc/OzHHB5dOz8FfFnDfv4thRLcDHbWoJtdgdg9zJMfbr3h48FTe8y3/TF0SlDiNr2nzfuQ6cuXxflytUdiIrxy1kWA7HBhD1zhf7xuu1UnvvF2/u/o+8+ylee4lqyQGyMmLCI5CmC7vIGovu4ZNUF4a+bD7Bv4nTv+1v5h9l7Ajh58br4eE1+0EwJA7H7olJt35/bvUcp6Rlicb/1AADc/fDfhqlTp9LwYcNEc//BF198IQ7oP0DOG0ePHhXHjRlLW7dutVuQd+3aRZs3bqLJkyeL3CK8fv16euFP/yuOHjWKpkyaTImJiSKH5VUrV9KUyVPE/fv30+nTp2/L3+DSokSBWGPHM2uj8+wnK/GNVzoUuwOa9w/+11w50ZmAECGB9MmaHcUVOw5ZJy1XS1WRkcF/TH0bD0ReoF836S/BkPW9w96E4wK24Wsnb4eR61z7vbe6y+gb3q9wSkLZDsS+QYy7T7zee6x00xFdT30sfiAryOIHYp6Gv9Vgn6/XQx+jZnn51uOnZvuqtqf+s1fYT1oq6b4vLtk5ueLrfSfKNxYlq39dx9qO8uj2DQdOiOb3HwAAvPA5sEmjxnTi+AnRnCdMl4e0tDQ6cuQI1apVS9ykwm+b1u/QsqVLxUYNG9HwocNo/rx5YsP6DeiYCs4v/fNF8auvvqKqVarQ2aiz4tQpU6hTx460ds1a8aUX/0UfzZqV7zxVlkEgLqkIxHdABGLG+4cGgRiBGAAAGATiwCmFQOxg/kBLv+I83b+1cvcxVF6dqFj7JOpzMivk5zKrK4zJ17W+oZO7SXyx87CYy4+E5n/cf/UWPHLV1LfbU5eu0V9Dh4o+FyOiKbM5QRf3JH0bdZfXp9zWzyr4P1evp7jnNIdhq2uKBKKS9dlmynIgNth/bNQ2H7twlb5Tp4vou99Lo/xG/wOxXCq7/yCqMk5duVW0x/4udiC2tsnaPu6PfDDqkpRDD2voLc3twWzrgk17KIRv7C1p/bv2Y4i60Gn0/keivuhDIAYA5If/BrVp1Zr27d0nmr9L165dE7/4/AsaO2YMzZo5U+TPdu7YSe1D24stm7egEydOUHJyslijeg2KiYmhSq9VEjPSM6h+vbfpzOnTYr236tE5V7/k0SNH0UcffeT79/8O/U32l1INxF64dTQ9M4t6TvtMvK8anwCdE1j+sFPAyaCs6VNeHqc3wh7l4udN+tDuk+coV203yyd/uo0HgL4YyaPE1HSxqTpp8tPm8gUjt2U9FNvHCb/2lL1KGP2l/VA6fTlalNZ4DsTWxUFp8PUKxPoC6cMlG8QK9gWR2dfe8hTXAAKxesN9Qcgtp39pP0zUN4FyC3Ggx6E1vbV+M471vzqNlPG5zU17dwqzP+KSUuiHDXpbZWQ7+h6/+barAL2/r9U60LfrdBXPXY8tteMcAHD3sXLFCmklZpMSEyk7O5t69uwpjhs3TvoSd4joIOaqv83cJ3j48OFi8+bNJRCnqDDM1lSBODY2VoXh18SMDB2Iz0ZFiV06d6alS5dSpnqfbdywEc3+ePbXJgwztzQQcwVwQDNN9OsOnKTfthpkP1hDwqSPfp4k7pT2ickp8z1Vw+jtIdPF64nJdiiRcCr/376DwFmvbiHjcDB34276YcNeonMDk+lOYW2L3UJX1urfXVYr3KkQ9Q31Mxs+8RNKUMHfBKBb0Sr4tQrElmkZmeKr9pB8OkjlL09xtY4XvwKxUy7+W7Dl8GlVB6Gi/n0vTrnM+nUZzDB7Ez/f7HP8l/ax4C/O9uZS+PiF9t873987P7fbG4hVqC6vlsWO+GSdbC8AAHjhv0Gcu5YvXy62a9uW2r7ThiZPmiRyoOWAPHHCBPGdVq3p3XfftVuEBw0aJC2+3LWC7d6tm9w8x90i2KysLOrfr5/cbMdGX79OXTp1ptB27cSmjZvQnNlzfM4BZR0E4kBEIL7NusuKQFwY7j84LAIxAjEAILjhv0EIxIFxSwMxyYnJfYLKpfiUNBo4Z6X47be6W+MVm5Mbnyz4RGCdKItzwvTrRONdrue1+Yre/VW9lEeXM4TDvPI3LQfSoi37KFMdVKx3mKfbfRDo9Tn9iXUXgjy6HJsgdpj0CT1Wq7Nz05VPvSslaHjr6hZo16v52bWvfbrNmPJpOQT8OXQYrVcXViwHfrOdzs2LpVjfalHnY+JLPRBzX2e2tErqPd6MByIv0pO1u7rq15TDe/wHqL1P9O9EyxEfi0UFYu4u0Wj4LN233T0ko3f5hWn/TlrzWeX4Tp2u4rlrca7jIK9Ub2ANBPP3ji8Adp08R/epC1FWymtfSASw3T510MG6yAmnP7wziDLUSYm3U/7x5t6ZTQYAlAHc5z/v+SBPnS95ODXvTedG81lRr90P9uDAbcb5/2TRIho8aDBt2bxF5LGOT55wbub7OnBrA7EH7w6IuhZDXaZ8Ss/U6yaG2C2Y5oTHJwD3a/f77hOjeW3es372nkzcJxW37gBekFYLW3lVvh827ksjP10vxiankglhZXGne+ubW6yOnL9CzUfOFr9Vu5Oqc1cLone7i9Jbb956tjXTWj+7LzRkXuu1d19XUwFShWD+VoGduvIrSsnIvOk2lia8OJ9A7N3+gLUC8anzYikX18bUBd/UOXzhGirH/cilL7m3PMXVHYjDPYHYd6PkuLM8ezWWnuQLsnzLC0TP72/VUKrz7hRRXyDdokoNAOf3LU/GQ+axg1nnaXzu+gtU5wLxXvW7sW7/CdcFYen/DgAAyi7e818geucvCO88NzMrM5NWr1olI0uw3P+4qOWXNW5rIPZivt68HJcojl26kf7YZrD8oWf1SZwfgRwu6hOK9dW56H3dwTfY2QHY6HtCkXl9nu7mu1x+DPX9qhz/6PCBOHPNdopLSbWvsG53l4iS4m65YiOvxtDg+avol837ixX4jni5KPHWq3ntfq8A8wVhfs/1uewb9/I8+4P3r9rnD1QNF1/rOZY+2bKPkjMyxFJvAS4CXt+56Hh6vEZHMd/2FkPuKrBXhWH2Vm2K/Ucojx/vnUF/DRsuOg9t8WNf3kyfb0zCqYUKw2xBTwOU33HreBuijjXzO23mzbfsIvU9Fvmm0cVf7RdNa8adxvdEkUejP90g8rdKxdtm7/ZbP6vfkQZDZ9pd0szfJADA3Yn775vv3xl9Xve+57Y4eJdRlDeb5+sAAjECMQJxISAQFyIC8U3xPREgEAMASgf33zdv4EQgLjllIBA78uvc3Dw6dO6KOGjeSvpvl1H0eO3OYsirbagc34zj7YPoc8JwBTIThK0uASE+wdiS+zDzMvlGn9fa0VNvdqFXu30oDlu0hk5eiXYFYN0n2tnJZeME7C9OmV3m6a/W2Z0nz1OPGUvo7+Hvi9+s2ZHKv6pCcuVQrdS5+4RuLjzcuurd3Kjn7iLBFyAculm5uaotfbded7FG3wk0fvkmuhATL+Yv7+39xeJ1cjl+VLeb+FSdrvQU/19c1fxPq2B94MwF8VZtiaknc6zuVuGbfVaV4UnehjpclgLK56e8DC0vpwuFj5knev8gS1nUv6S0dPHvoe9Z63dZwPIL1Z6Pf9bv/aHFQIpLThXLTCC2+/Ryech+UNFP6vfMV/7ANXXPdqHn3+puNyjI+O934PcEAHB7cP99Zfft20dDhw4VP/jgAzp58qR9gcwPzjB9ff35e+Cdxsy3ePFikccudr+/fft22rt3L23btk3kRz27l+Etq/fvc0Hru9Pc0UDMeCvNa1ZOLl1PTBE3HDol46s2+2C2+J+uo+mXTfrRM+pEwT7+Rid6WAWuh1TYYh+0fESFNvZbtTrTs+oE8pvm/cWKPcZQ69FzaeKyzeLmI2coJimFstXBxHqDmPbre8Lx1m3+9/X2ZmbniJdiEmjV3mP0/sJ1YsNhM+nFjh/Qzxr1EflGpkdrdlB1Hi7qelf/V9VynT9RqxN9X4Vd9vct36VKvcdT+3ELxWmrvqLtJ85SYmqaaPqAer1T8Lpz83JUmMuwVMEuPTMgk12aZfB26m31rrF08NafuaBLTre2g/9X2uUKUO82pWVmiWZkB/d+4/fMH+hkWbdn/gB1z8vbk6r+ty+oC2ihLguY8qVIvfMxZPZB/u0rWt5vWq77RHU8mSfj3enfFwDArcf8nvPT5Jo2bSqhmN28eTNVq1aN9u/bL1auVJkSExIpMzNT9M5vRpnwnivS1d8o1oTpZs2aicePH5e/46mpqeL4seNoxvTpdObMGfHs2bMyPY8+wfIy+LUZpaJt27YySoU5H/HnPJ17/Xf679cdD8QFccNuYTG6Wgn5jkbrBMOPquUTQrQKsezF2ASKvBJDJy5cFY/z/xevUdTVGJFbUWKSUu0TihnEP/96ys4Ouh34bL/riXrmaW/uz/kmoUQ5EWfIkwgvqtB8+kq0eOIi1/k1OnlJe/Z6HF2OT5SbD1m+IY6/AfCtb8/+LUP1zUXxORbySla2fMfXLWsj9sW3vp31lwb5l+v7lb3vvmV9Pi4RUoPu/VOaCy9F1F8s7Q3fb5iKA8/Fs2rzb39xlwsA+HpgAmvNGjXoyuUrPr/73Eq7Y9t2kR+dHBbaXh6QwfJDMziIzp0zV2xQvwE1atBQWnpZDsiDBw+m+m/XF5s2aUqXL1+m5ioMs4cPH5ZW6AkTJojjx3EgnkEzZmgXzJ9P+/fvt6fnJ919OGaMPK2O/fUvf0WDBw2ieXPnis2bNlPraEJr1qwRy8LfLwRid0DxBIaysINuBz7bj0Bsw0XxORYQiPORf7kIxF4QiAEApQUC8a2jTAZig/cPvdY3PPkEjEK0v1Jl3f0c7fDnXp4jmf/vcm7kuwDxWNTnAVjQ1+run8sSOnxw2awA4p0gQPRy3Nte0iX6h+8+KFkg8+K7bHnnJp9zMCxNbljHpalb7+dlA986sA6kkpTVzO85nkpzvwIAyhbm95u7HbA1qteQEOv+3ecuDaaLwisvv0wx0dF0+dIlkbtTREZGUrWqVcVDhw7RV1u3UsWKFcVFixZRn9597HGG9+zZQwcOHKAWzZprmzeXEGw+Hz9uvHSZmDB+gjhzxkyaOmUqderYSTxx/AR99uln9oM+Xq9SlVJTUqlVy5bi9GnTZJqVK1eK3j7Gd4IyHYgN3j/43j/87tcFfe7Fuxx/5gEO/taZv9MBAAAA4ObwedT0Ca5Vq5b03TXnV270mzhxojwdjuUAzH194+PjxerVq9PuXbvpv//+jzhk8BAaqhw7Zoz4/vD3af68+fbyOGxz8G7ZooXt8GHD7T7ApoV4/Pjx4syZM+n69eu0dMkSkfsMN2rUiOLi4sRqlatIeTiUsxyIuSWaW6VZ02f5TvK1CMQAAAAAAMGKt4Fp69atVKNGDTsATxg3nt544w26dOmSWKlSJUpJSbEDadWqVSXgmi4RU6dMoWFDh1K/vn3FU6dOUa03atG8efPExo0b09q1a6lJkyYitxZ37dLVDtBjx4xVoXY6jR07VpymAu6oUaOoV8+e4vKly+j1aq/b5Xn5P/+VbhvNmzcXp06dKiGaQzPrvvHvToFADAAAAABQhkEgvvUgEHu40032AAAAAABevKH44sWL0k+XXblipXSNMH18N27cKMOqmS4WmzZtkj7GpgvF8mXL5WY20+eYl3f+/Hla/MlikYdy464RO3fuFDlM83TLly8Xjx49SlFRUTL2McvdN3g9m9V62M8+/ZSiIiPtsh45coTWqYAdGxMrrvhiBX3++ed2YC8LIBADAAAAAHwNcQfkwt53f17QzwXNb/BOU1LLMgjEAAAAAAB3EQUFUO/rQPGG25str6jPyyIIxAAAAAAAdxEFBVLv60DxhuGbLa+oz8siCMQAAAAAAMBvvm5h1x8QiAEAAAAAQFCDQAwAAAAAAIKa2xqIpYX9RuF3Rd4JpEh+9om5HZSVctwpvNt/J+vBe1wUJAAAAAC+/iAQs2Uo5JSVctwpvNt/J+vBe1wUJAAAAAC+/tyWQOwNETdu5Lm8c+EiX7ny8oed212ufGXyqaM87+Rfa5y65e3yPRZu5u3Cu157/Zb8DwAAAABff25zIM6j3Lw8ysnV8s+3O+h4ww2bk5sjZuXkUo6nTL7lu7Vl9K6PnxKTk5tL2Zb8+m7C2ee6bp39YY4R3uaC9sPtwbtePl75GMm2vNv2BwAAABCslCgQ66CQR3m2N0QOMuyFmHhauGkvdZy0WKzZbxL9O+x9+mfb98RXOn5Abw+ZToPnrhQ3HzpNiWkZ+ZZn9Jcb1j+znBscciXo5lFyegZtPnxGHDB7BdV5dyq9FDZM/Ns7g+lf7YdRrQGTxT6zltHGg6coMTVdlGW55DIFGtC8IYs15byWkExLth2g8AkLxWq9xtE/272nyjVEfFnVV6NhM2nMki/Fg1GXKTM721UeK8zb2+td+53B2U6rbFZ5s9VFSNTVWJq9bpfYbuwCtc1j6V+hw8QX2w2lip1HUYOhM8Uh81bLfrP3h7Usc3wE+o2DOX4d9b7IyuGLoxw6fO4KTVi2kRq//5FYsdNIOUb+oY5dtmrPsdR+/CJavGW/eCUuSQd4S10u5/fDnzL5g1OfuXT2ehwdPX9VPHbhivr/CqVnZYsAAAAA8A8EYgTiW46znVbZrPIiEBcPpz4RiAEAAIDSoMSBmEOJOeHn5uWqkHaRGg+dIT71RicqV6kdlavcXlstnMq93kHZ0TKCylUNU9OEivdUak+/adqPRn6yToxLTtVBxQ54/gUKJxTlSflMQPho7Q76Y4t36T61HrZcZVW2KmFWmYwRupxs5VC6V5Xrf5oPEKd8sYVSM1Rgz+Ovy/VX5v6WycAhRurM2qar8cnUe/oS8fm63an8a1xfYdpqqizVOzpKfXG5dH0+rOquYpeRtOnQKVG+xpdt1uWjAMt2q3ACnDpGcvPoUNQlscGg6fStGtYxwlYJ1fVenbc7wtoXEXofsWqb71H75FeN+4rDFqym2OQUJ9BKnQYWiH2P3zz66lgkVe0xRnyEy8LHJh+jLB8fsh9cx4oqV4iahn22TjfqNHERXYpJFO397ArcpYHZvuT0TPqTOi4f5mNB+UiVcHqiYlvad/qCCAAAAAD/KJVAbPpUDp+/mh6TMMlhTlmdAzAHG/7fHYZdAVRCspGDkHrvtVDxD+pkv+fkOTtQ+IsTwG7QpdgEqqbCDVvu1bayzhC1LtYuA5dTymqVgUMYK2V3AnzIa23p3x1G0MWYeLE4rX4mJLGbDp2kn9XvKcFbNCHLW18mIJr6dAVG3o5vqDDGdpn0iQT/0m6RLClmf2Tn5NDIxevkGNHHCde7e3ut+uZjgOX3qnkCqFt18fDbpv1p54mzYiAXTYw5frmVne03cxk9qPZDiCoXm299si/c5THHjdkXShWQf1C3q7hm73FrX/CFCl+geEtQPEx9bjl8hh7wKWc4PaCOg70qDLMAAAAA8I+AA7E5GRszs3Oo7ag5YogKKCHVPMHFhEuWA2lFj9xK6zqh20HD8rGq4bRmzzFRt346LW4mYTgBONf+jI28Gku/az5Qt6qy1rJDJBRb6+EWwIptLLlMbZwWS28g4vCjAsgvGvYSj1+4aq3XfGWfv2XStAzq6XT5l207JD5cpX3+dbiDH7cW2+WyysYtxz6B2cyjtkmVuc6AydKKLS3ZUh837K/w+d/twNle/l+3vLI9pizWLeCu7dUXJtbPHO74GHm1jaO6CLH3n4Rn9/Gh53u0mnbLodP2OuXbAfnfWzbf/ZGWlUXN3v9IlAsx17Fnr4NbrtlXeX+o8rxiWbGdHNcShH22Rc/7kJpn7vpd9gUKV7/7d8df3OWV7bIuqOoOnmod10598oXR3jMXRAAAAAD4BwIxAnGp42wv/49AjEAMAAAAlG1KFIi5z/CIRWupvApirB0iTBcEFXAeUa9r9J0oTvh8M60/eIq+OnZG/HznYRo4+wv6W+hQ8V7pNuANiBH07VqdxcPnLutQwKE4r6BArINCYmqa+GLYcJKuG/ay9Ffh5VUQZf/Y8l0aPHcFrT9wStx16jx9qco3fOFa8YW2g6k8f4VuB2gTyHiZYfR/bYdSdGKKKkuutoCgo99zAhp3AXm6ZiexoC4Q36gSRlV6jRWnrtxKW49F0i41D/v5jsMUMX4RPV+vu1iuip7fLp8KZ7xdEeMWiLl5Ofa6TRC8HXj3x+x1O8QKEjg9+1ftn8dqdBLfencKTfx8C63ae0xcvfc4zVy9nd4ZOUf8wdu8ze79qS8EyvFFmPInDXpLVxaf7S1wf5jjN4/6TF+q9nF70e6GopYlF3ZVw+h7dbpS+zHzxWU7DtJOtR++OhYlzly9jar3nkAPqm1gvUGd/VaNDnKzKOtedyD7wplH99P/aM128X5TF3aXmg70jcociC+KAAAAAPCPEgViDqjf4hvn3DdBcUCxWvT+1HqQCnJnZTQBVofZG468HHWCT83MFGev3UlP8vJMoJB+pBH28l7rPkZa9EyLmwkVpjz8HgeGXtOWiCHSAuvboviA+v/d2SvExDQeOUKPdWvGuzXLZlMyMuXGrYfVfKwTwqzgpAITB08zqkZBo0646yspNZ3+0X6Yq8XaWqbVgv5s3W60fMche5QDd7CTskk58+h8dLz49rtTVQB23xSol3mfCkXsil1HrO26Q4FYlfVSXCL9sH5PkY8Ru2Xeujj5v3ZD6WDUJTFHLiqsGwOt8kpr6A0+dnLoWkIStRs1h+5RFwKsBGF72zvITXfdp35mt0gXtD9MKyu78cBJepj7C/O+tOTllK8SKtbsM54ir8TYLbIyn+umPV4Wjw+9es9R8ccNeul9aZdJ71e+8GLjU9Jd+yL//nAfK7au95PU8frhkg30sKpHVo5Bu9Vci0AMAAAABE5AgdiEABM4Wnww29UVwQTFcPpd8wHixVhz45nWtOh6cQLGDfpcBcKH1bJYJ4Bq71XrWrv3uN1CbAKFEyBy6dTlaHpUzcc6Nzzp+UMqh9EHi9fa5fedN78MTzdh2SbxXg6frpuo2EdrdKTdJ8+LOiz53vzHr81NVROXb6YK3BLpmp9D/9O1O4lfHY30mbcoOLBzFwknYJt9oZf9pzZDZCQCb33dapz9mUcfLFpnjyLibT39cYPedDkuocB69y5Lq4dEazJ8puhcVDijlvy0ST8ZnUSPUMLz+CzOXgb7j4j35VsMUx4JxOoip1rPsSJ/y1BU2dxdNPacPk/frdPN2k7n9yJE7XN26MLVMp33gs7AoVsexKLKxvK+23PmPA1ftFb8Q5tBuiXb/E7YLcOW6r0HEIgBAACAgEEg9gQeb/hBIA4cZ38iECMQAwAAAGWfgAMxB6uLsQniM3W7OydnK4h9o1qYhFZWvuK/SaAw8Nta3a+zxQcfi05/UWv5Kqw0VyHcBFqzPLNsfi9s7HyZTo8bawUTaxi4qr3Hq6DBD7IovCxeeDoToOoNmWYt1xVo1esGQ2eI3uXq13mUlJ4h/rrFQGs+XS7+upsD8tilm0R/y2Tg6a8lptDz9XuKvuGwo4yNO3/zXimDNrDlFxdTDykZWfTn0GHOfrACcQV1YcLOXr/TDob+lE3CpNrHJy5dEx+r3dnqgmHsSA/xBYoKpqze5vzLWLH7iFheQrqzP7h7wzN1u9G56/EiX+DcDFNuu35V2Wat3aG2LVR0gqv2ubd7SjedwvZHdGIy/bfTKPpZ8/7i47W70D3c75pDMIdq1++Z6B6j2hoODoEYAAAACJzAA7E6kX++67BYwad1WPvPjiMoPTNL5BZbn8BQSL7g90V+oISabsPBU+L9pkXRjEurAsvv2gymNLVs1gQKE0yuxidJ6HAHdP6fQzq740SUHUS8YaQgzHSmhZcfJvFwDfc4xhHSj/XJWp1FvkhwQpI1rwpV3JeXvYf7NEu/aMf/kb6laaI/ZXKj15FLIz5dL4bI/nACMddX5d7jKCs7W5RKvg2YbT95+bq0oPtcQCh5H7HcJ7ioQOytT95/6VlZ4p9Dh3qW3UHVcRitP3hS9C6Xf+YW2DqDp4lOGLbmVxc3fJOnebAJr+tm5C/bDRnd43/bvSd6AzGPAjJ/025ZbkGB+HJcIj39lvsi07fevC3sOgjzdGafd9DjECMQAwAAoILPU27NKFnc/lMs8yyt05m9bH0HjE9ZyjoBBmLe6Dx6b9FasZzctOYKYJXDqMeMpc4JP883kBSF7Bw1z7nrceKTb3Z1hQPtd+r3lJY01tmh+ivoz7YdcEYLsL9GDqO/dxgh5lhPcjPz+QNPZqbnVuKqPce7QgmH4wgJOiy3DrqXb8rWbORs0bd7SQd5GMeQ+audm7bMEeUnplXS3GT31Jv8db27viLoidpd6PSVaNHfbS4pZttX7T5G9/L+MMPuSStsOL3cY6yob5hz6qooZLo8fpBGjvhP6fLgGxjvU8vfcvSMqJfrOz9fND1dp4vo1JM+fh9Sx8uZKzGu/XfzQOzF7O8xSzeK3E3CJ9iqsr01eLp9E6b+g+HAD5F5Wu1DvrApVHloSJile9v5eEcgBgAA4OA+n/HN6UnZueKEC+lUeW8S/WVnvPh/OxPU/y53+aGajudj/6aW0ehwEu1IzBJ1LvP//F4WQCAuAp7MTI9A7B9m2xGIEYgBAADcOdznMwTimxNQIObzN29kx8mLxfKvtqUKKhRXqBImlq/Ylqat/MrnJi6/KoInMcFTzXdBhTv2qQIC8bfr9aBrKtSwZvkmULYdu8AK6U5g5deD568RdWDhFVnr9APnYNJlm/D5JrtPp70OvjFL2Wj4TLtvs5Fvjvpx476iPb3lfeoCYs+ZC04g9qeuXJiDnIM+W6mPCutVPSFJlXPR5r2i3xtdQsy2z96wm0L44RrcF1wZwkOlqcDW/P2PRKeeeB7vUvJj9oHpYvLDplynuu+vCdzfqt2VTl+OFs2y3fOv23vM9eAVa19Y4xj/veNIGR6wsC4NRWEuUE5cui4+6A2s6vVz9XsV2kUmLSNT9tPcjbtv6vxNe8TXB0xx3ViIQAwAAMAX5zybRxm5efTmvgQxZG0MlVvHRhdoyPqi9Z1HLUst81sbtBvi+IZ+V34K8Hx6JwgoEPPmcCA+cfG6uO7AKVp3kD0trj1wkq7E636hAbXE2oGYA0Uu7Th5VnxQWnh130jT0vZ8k76UmJouyqxq+aZP8d95jF93i5wKCNxiuPnIadEcFIHg3pnswajLcqOT3Oxkr0f765YDKTPbuWmPjbwWS/dXCRXNSACmRfKHjftRUlqG3u5iBDC5+nIF8PdU6NdB3amvclXbU8SUT8XblIft8hw5e5lGL15PYz7bYLmeRn+6njbsOyGabb759Ylv/XOf6cVb94v3mDBofxsQTi+oYyBVBUvW+WW0Arey35wV+qLJHqOag6q+oOk5fYmUyX38BoJel/qjk5Ut/roV30Tp2+/3XrXeA5EXRe/SeX73qBWFYm1LF1VeudiwAj0CMQAAADfOuTOPVsdk0j1rokUJva5ALD9zyA1UE4jldYxaTqz48u4Eys71bSAs6wQUiG8VprJ0x+48GjR/pcjDpOlHQTstef/pMpqyc3hoKufJcNcSksVn6/ewwqY1PQ9pVqcrXYxJEEtjh/DDEZ56s4toWv3M+h6v2dlej3HF3qN2lwod2hwr9RgnD3Yo7gHjnk/WtfuoPKnOPaIDl++VHmNErrOvE/a22d845Kn6jaNfNu0nOt0lrP1dqT1NWL5Fut3IA0k8V6fc+lubW1XtFmWteXLhvE08IofvPIHgnbf2u/kfrczdZHjkDxn9w7uAAOk6Y4k16onVZYkDMUaZAAAAYOE+J40+ly4tw7p1mEOwu8U3RruumK53LVP5/c2xFJNV8BN8yyoIxAGCQHz7sLcNgbhAEIgBAADcDPc5CYH45pSpQMzyUFy/UGGH1SHC96a9AXN4WCynzy179PxV8ZGa7u4VbAT9vFl/ecABWxrw+ng8YXtMYVdgv+81HUbc2zNm2SbXV/S8PU6f17YfztXBzTV9ILjnYw9EXaIHZRguVyBW/rb5ALG06uB2YbbLjDt9+Oxl+nObIWS6OJhHLesbzcLpP51G5hvnV/5Zy+FuDH9pP9yuFxOK71ehkt1yxNyIF/i+YHgW9/zdpn5qjaXtHI/cpWXggtWizFACus5YagVi5wIQgRgAAIDBOSfl0YhzaVRu7XWtCcCl6TrudqH93hYE4oBwhweW77wPG7eQQlR4ZJ2WNX3Cf7RmJzp87rLsWDvwKL88dFr8Bgcl6wEFogo8f+PRJay7+ksDXt8r3T4UndZhq5yVQmn1vhOuPqh51GPGMunHK5qQat2UN3DeKslExT1gvPOcvR5HT9XlkSas8lgt0s/U7yVGJ+mnt5U1zPZzazn3DU9I03J/9G3HIili/ALxyVqdPC2u4fItwgsqJLM80oZ3lA/ivri6kiUs/1hdIHkvGB5+o7N44uI133kDRGZxzTd6+UbPTZ4REmBbj50v8sVQScgXiF9HIAYAAODgzkujVCB+aE2Mdp2vD6+LFe331hdmrKNM79L13k82xVK0KxAX55x6u7mzgVi+2s6jnLxccSI/Hlme8OUEHmmBtVpYW4z4WIKt96a9pTsOifkefKECa8UeY0t1Z/By3hw4VXR3lxAr8dfue+z18ba98+E8JxBL2Zxh2j5U20sl/uLcIToxhb7XsLdTf1Yg/ladruKFmHjvLGUCU1/r9xyj52t3oWfrdRefqtmRKrzWTu37cK18U+DU+bdqdabOkz6huJRU0VyEeOFdz17nbjVv93B1mdCh+NE63cRLsYmldpwwszbskqcFOscIB+JwemvIdNE8Pry42IHYevAHAjEAAAA3dh5R58bYrBw6nqo9mZqrzKFTaYWZW4D8frZHPf1JMdv6P4dOp2VRtuub/NI8t94qEIgDBIG49EEgLh4IxAAAAG4GArH/3NlAfEM/7OKDhevE+2RsWBOGnVD8IxWO2Mv8aGTuP2w9StlU8oLNe0UJH+5ArMLH633Gl+rO4OU0GjZLlK/vzeNzWRWIZ6zZ7hyAqqyNZbow11fb4RSiQh47+Yst0se1tOCxbZ9rYsY7Nnagx9/oJEZdjfHOUiYwj478YtchqsDD09mB3uxL08VB/VytI4VUjRDrvzeTNhw4QZnZWaIeA9obMnlf6EB8KSaBnuGbIU0gtobB+5Y6tli+oCit44SZv2kvla/k6TKh1lu9zwQxB4EYAADALcQdiNfFZFHosSSx/fEUZbJtmHpdYo/x/7ysZOp1MpmSXYMflOa59VZxawOxBBGnMtz9ftmYpGRqOeJjuqdye5FP6CGmJc0Kw0+o/zcePCG6b6Rza+7al5Ec7NY4DsQRVLPvhFLdGbycpsNniXJzl3t9HIhXbbO2U9/413DoTD2dTKsDkQnEU1Zu9SlXScvI/W9/IA+rMGXS9fhYzY5ipM9T2PLrL975fHVaZP3FzLti5xGqIN8QuOpUgrETXnXwswKyCoP3vhZKf35niLh237F8D0Zxl+liTCJ9x4wO4rpgeFKFYTYmuXQD8cLN+1Qg5u0xgV4f06/3Hi+ihRgAAMCtxDkP5tEHZ1PtcYh/szWWfv9VnEvf13/I93kc/c9W9+t4+v3WeJlOT8v/x9G3N8aK3+M+xJloIfZBP57XMo9HC8ilzYdPi39s9S6F+NyFzyMHWOFR+XTNTrR8+0HZkSZMe+H3Ptl6QNThwxWmVPis2stpIS5o/kDhZdR/b4aoQ47rJj4V6j9at9NeF7d6Nh3xUaGBeCK3ELvKVtLyxSWn0vcbc5cJpz75/8drdRbPXov1WRcPIReblKpM0yb7qczDpqiLmhT7wSh6uc4voL+Y6Xcfj6KaPcZQ9d7jxMrdx9AL7YbSd+t2Fe/nsOxzU52zn9mH1GejFq+TpwOyzkgTcm1GV+IS1XJcNx1ay3j8rW7itcRkb9FKxNxNe6xj0lVedRy80X+SiEAMAADgdsDnwg/OpdGT62LEYyk5lJabl89T3I1CuSo2i1Yr47LyxO2J/DqDtiVki0k5efRlXBatidXuT86m9Nxc6noyVZRAnFU6gxncLhCIA4SXgUCMQOwPCMQAAADKAnwuRCC+Obc0EEsYsW6cY6+rwNFl8qcSXFjTj5PHk7XHlFUn+J817CVuPnRKQo37Jjov/N6K3cfEe+1wbY1brJb/n66j7T6qpQGv7/W+E0QdclyBWIWfxV8dsAMel7n9hIU6xNlBjoNzO3HEp+vtZRa0bYFyJT6RviMPJzGBWK/vSRX22Mtx+qYxeWCFssnwWfTsWz3oe/Us3+6pNa+LVE2rguqIxWtF6b9brEBsdTExAda+AMqjzOwcFbpTxc2HI6ntqDn0TRX+WLtfsctvqGNggQqirCmHkcP7cw16uQKkrp9HancWedi60mTq6u0FDLsWTo2GzRRLbdg1BGIAAAA3QbpMqED8xLpY8UxajvXAK/d5MpdGn00T71kVTfeviaaotGzx37sS6F71+m87E8TY7Fz6qQq9966NFpsdTpZ19DiVKn5vUwxFZwZzILbCjPPgjDwZFWLel7vFnzbqo8fg9Wmhc+RW0zoDJtOl2ATRG2gKCln83rbjZ8UHTOC0A3EH+kO7ISpUZYtFLcsfeL6/hr8v2gHXsnyldrTR9XAHDngD5q5UoYVbNk1LIYdjfZNd9+lLS1weNycvXafHanMfWXcgjqAfNO4jxqfwQyuc9VUfOFlflNj7wDdcFm2EtPAPmLdKLG79eufz0fVgDePuU+fFnzbpry6gXC3GVj/jXzXvLyakuh/SkUcp6Rn061bvOtNb2/xAde3+SN+HqgSKns8Z93jIgtXWgznMusJltIyIqZ+KxVmHGwRiAAAA/qFbiJ9YHyPqQOwdtSuPxp9PF59aF03PfBlLZ9NzxMp74umJDbFUcXeCGKcC8Z+2JtDT6j22/dEk4kDd/XSqqFuIS/Yt6O2mVAOxVKgVhtkTF69TpZ5jqYIKwawduqqHa/lndUL/YYNe4pwNuyRAmwDjL5FXY8TH7TBonm6nwmD9XhSbnCp6g1Vx4PI937C36IRIHXgeqNJenpjnXseMdbtUCArVmlBkfcXfcPA0ys31vUILBO/2bDtxlu7jAGYt36zvf9sMFrlbg5vqA/kxxu4uCP7K81iqbS5pIA4EXq45vnafukDf8rkA0NtyrzrW2CVf7bfK4rQ2v9RppKv8envM9Cv3HitR+Z35+NjNo7aj5lrfDDgXEHxBOHrZJpGKsQ43CMQAAAD8ZeS5dBWG40QOxOdU0O18MkXsciKVDiZl0ca4DLGTet1FvR+XlSum5ORSQnae/M+mKQee4XmTxflXMiRYmxbiZxGIbyAQIxAXa1v8hZeLQKxBIAYAAOAvCMQ3p9QDMXdNmLpiq/h0na5W4DLyiTtCv6fkr6n5wRWXYuNF091C+rVYfVv8gcffZX/OY/BawcD4zZod6djFa6IORv4tszAuxCTQQ2pbWCd862D1nbpd5cY2d6jafjyKyr8WKjphUk//5/bDKSubb/4qZgi74RuKZ63Zkb9LigpMtQdPFb1Dkr2pAvEDKrBxVxP2QT91T88XAYNUGGaLtQ0Bwss3gTgnL4eajfjY7oLi3ma259TPdH9pq1y8/c1GzbGPP3eoZ8ct3VT8fUGyO4hnM19BvdhllLUOJ7DzTXar9hwVi7MONwjEAAAA/EUH4liRA/GOxCy6Z/V1sdzqaFpwNYNGnk0V+fU9a6MpMi1blPOu1bjEcpcJfjxzuTXRYlOrD3F3FYbZoAvEEk5cFZSQmkYtPphN96iTNOsOf0a+ae5Poe+JXx48RTkycLNZxo18fUb9gR/uwVbuOc4TQCKoggo6hd1k5Q/eebgVMUSFW9bZLh2s/h4xIl/A5Yc9PFKjg+jTUqh8olYXuqgCdh7348nT9RAIsg7XTYttx/ENfKberbpX2z94/mqRPNtyLjpeWrSPnr+mveCnZno17xHldbWNrFluemaWuPfUOdp90qV6fSTqkrSK+7SM87Z4N64QdOg025BHs9bvkpsZRVO/VTkUR1C996bnO57GLd+sLxrkwsHaF6bF/v1ZVph1HvwSCHp/5Ml4xux33+ruOkZ4HR3oIXVBGHktVgxw8flAIAYAAOAPfH764Cz3IXYCcaSyxZFksalytwrIa2IyxSbqdfOjyXJjHJuRm0tpufx/npiak0fdTqaqaVLEGZf0PTs9TqWI3Ic4JphGmZAQq4KcaaF9rfuHFCKP2LXCr/XoYBM4HqnRkQbNXUkpGRmifuqcDnVscTFhZ8CcFa6gYz3ko2o4tRo9R7TXZU3vDyZ4mdbrzlM+0zdK2TdLOS2MXdRn+mZCZ/ncKvnn0GGi7sbgBGMO1ct3HLIDbXECMY9UkJqRKf6u9WCf+uaf71HlXH/wuOjvNhcXs90nL18Xv8nHgFp/SJVQrdo3v23WTx4gwprpA9kf5JmH6y/k1XaiXbdWC3DtwdPyrWPv6fN0jwqNrJ7eaeH/UaO+lJyhv/YpbFSTmyH7QwXp9ftPiBUqtbUeNGNdoKgy/c87g+z9FeDi84FADAAA4GbcMP9ucCDOoCfWRYunVRg+nJxN/7s9Tvx/2+NpTWyGnUfMk19Ng12Tw0n0OzVdg8PJYmJ2LlXfm0h/2pEg9juT6tNlgkeZQCBGIPZZPgIxAjECMQAAgDvBDQRivylhIL5BaRlZVLn7WNEZa9cKAHzjnAqK/9tmiLjvzAUdNqwKN19Lm8BZXEzY2XHiLN1fNf+wbs/W7yXa/Xt5Hu9CCkNCjjZBhf6fNu4nDw/RDxCxQmel9uI6FYK8AYz/DZy9QtRj0rrGLVb1xQ/4MA+S4DoJBB3AbtCXh06L99l9Y03ojqAfN+lHMYkpYkkDWFGYbb4SnyR+Vx6TbB0LVheOJ2p3oahrsaLscy6U0U/M8cLrmrBiq7oICtXagVhfELT9cG6+/ZGclkG/aDFQ1MeHrie2vArsa/cdL1Eg5psuW4ycI+a7YVGF165TPnVdAAW2fC8IxAAAAG6GOxCPPpdKj6+LEU+lZtOOhGyqsPq6aPoQm/OfzmhOXntxR7z0Ff7LzgSRxyH+ycY49V6MyIGZp3c/mIMDsfv8W9YJOBDrEKsDCZ/8e89YRiGVufUvVN8w5w4AVcKoRr9J+fqY5jegPJQPs5yU9EwVvN8j7qspWoGnvAqi7Nilm+RKx7RI60DmXZqzPNY+OJQz1mxXockVvKzWv1816y+mppuntfnOvz/qoviwK3wZH6/ZkQ5HXRZ1P2KnTzD/7FMuT9lY3ge1B04S8wewcAobu0CeDshSSSrZD0yZTJ/uF6RV3FUm9TOHzklfbBH1L5vzC1MYzvZaV6yWmWod1ftZ2+1ej9ViP2bpRmu5WlO3PacvFX3HCNZW7TmOMrOyRXdrf0FllOVJmZx9ferydXryjc6iPgYd71UXTbtOnqPSelAMAjEAAICb4T4/rYrNpPtWx4jTL6XLk+TmXU23zKDz6XwPFJ+TnZxnzrfr4rJo/rUMWhebJWap8+Oy6AwJ0ex2Fa4TVEj+3x1x4l+2x1Om3CvkLK+sE1ggvqHvoDcbyDdJ6SeGuUIFtwpbLXSvdBlNSWlOE/ytqhB7h6t1TFy+mUJeDRXtG8ss+Sans1djJYTZwfgmwcQs99z1WFEeLGIHbW15Farem79K1Aed7/K4TBxa2Wq9x0uA4a/R9VfpOiTW7DtBTMvIJO4CUWggtsrj3t5l2w/KE/r0U/p8w90Dah/sj7xQ6PJKC2+5jD3s0Om0ELO/aNpXvBgdL11u3C2+BeG7XDNtHn2x+wg9IBdh7uV3oEfUe+x+FQrdgdvU2QkVWtmH7CBp6ixc6nHBl7tFvogw5TIWXC5dnvSsLKo/aCrxwzdEOwzr5b/U+QM5Dkwg9i4vUBCIAQAA3Az7PKWyBQ+V9squBPGxdTHU/EgyDTyTKg44k2b9zP+nqdfOz1p+nSLTadXryBQaeDpV7HkqRYXgOHp4bYy4wBqGzZwfdcNU2QaB+CahxCwXgfjmeMtlRCBGIAYAAHDnsM9TCMRFElAg5s3hAGMCXsOhM139hnUY4f+fqtVZPHHxmh3GWL8rRFZkyf/dMPKO9Q1I7hn4Jr3EtDT6ZbP+oilPiCWH9JfCh9Pl2HjRfN1tr4CX41o2ez0hmV7uPFr0eUywFaB+oULytfgk0V6eCz4QzFcOmw6dpod85o+QC4gKlcPEbpMWU0YWP2LaOYjcZTHq0HyDth+Lou/xWM9mWeamPQ5JysbDZqr9xH2TzbBuftZ/MdHlc7b3YORFetQKalpdfzz0HvtixAg6Fx3nCuxmf/DC9PLIs+0cUjcfPi0++3YPz/6IkOORb+5k9eO6fetQwqi1vndGz5FyuPcn///Mm13FjQdP6rqz5vPuB9PtxjwavP+s5XITo28Q7qjHelby2MO5rn3r769DYXQxgdheXwf6BgIxAAAAC5/znzpnXc3MESOOJ9MvN8fRc+tjxO+vj6Xvb4jxGKs+42ni9GszndE17Q++jKOX9yTQF9EZYo7VCGcaUPUDq8o2AQdiDhJnr8eJT9fxPhlO/VwtjBqoIMZeSUi0b7AKTJ7PmESXjXFJlM1PsrP7AOtE4RtU8ujzHYfE+7kvKbcg2nJYDKdfN+0nLt16QFr13H2KOVRnZOWIX+w6TL9rNkDN017r6SPNy1+4cbcdAO1A58GUje/aDB+7wDVurhVgLUPUe6/3HE/7VZBkc+yxep0QFZuUSiMWrRWfqMn17V6Gvtnve292Ey/ExFtB06mr24FZH4fxsLHz1ba217r6devgHk7fVcFz+PzVYuS1GOtJhc6+5P95H7F7VZ20Gz2XHlLzsdLS7u6nq/bPw2r5W4+cEQvaH+76vByXSD9p2FstI0K0Q7HVB/1xdby8N3clXU9MFWUfu+qT9+fBs5eodr9Jou5fzsdZuCgXYuoYaT78Y9H7YJSSgkAMAAAgEPjUw/L5jM9J6bk3xDRuQeb/jfzaH63pM60MZbdofQ0JKBBzLfIGL9y8T+QhtZwwbEZPCKf7LR9QJ2vTOlY8ef72tk/V7EiRV2KosAcn6KCRaz/4YcBHn8uDObwtgCYgV3itHf2wXk95vDRb/90pVFX9/9MGvcTyr7bV07uGMeOQw8GH7TXtM8rOybYDcUEtxHxguEMQj1RRsdNIUXcncAU6CXgqaFdqJ/6h1UB6o89EeluVi32p0weqDjpJcGad+aztU9v0mJp/9e5jonu9+ct16zDr4/qISUymv74zSAypZlpjrS4OXKeqzCEqLLP81LtfNu5D/1J1w1bsPpr+2n4Y/eCt7uK9r7XVFyb2/jTqeuDHL3/46Qb7JsKC9oe7PvhqmVuBn6jRUbTL5F622s/m8xc7fED1BkyiWv0miv+v1WB6gPeD9SAQb3l4/77Y/n2KSUoRva3VJQWBGAAAQCD4ngNL1mDmsyzJQMVbTlkBgRiBuNRx/4IgECMQAwAAKBv4ngMRiN0UKxD3mrVc1OPqdnC6JFiB0XntG/b81wQL3z67j9bqLF+re8On705xfs7MzqLeM5bQ/SoosfYyra+0dRnD5at7Wx6+y1X+EBnOy1K9d68Kqt0mfSLy44nd3RluSPj1VJknEHMf7KvxSSKHYn5YhW+QctdfhFUu3SfYKRvXOU9r1Y817NjTb3SmTzbvtQOhz3otbwe+vyB5dCE6Tvxr28HygA7nAkpvoz2us9lmM4yaaOrFOTbs6fl1Nd19gv1w8XoZ7s1nmz1f3bjLJao/CJ9vPyR+txYPlebqc+6Vy8PB1z3Mm+kaYU8Xbj8a+t8R79P563H62PCE4ZLsC71VN1yB2KzbBOILIgAAgODGe97xVy/ezwvW6Sec/7P8yyxrBBSI1SZJiKg/fJaoA3EBwaHEWgHUDkT69Tff6ESRV/MHYi+m8nmarNwcWrhxl/jjt3tYAdRavlmXGbfYHsvWFczVezwP+yM1/0drtks/ZragVuqi0OXW8tPaekz9lB7jll1uKTXhxh2IveVxq0LgPSqgvxj+vrjn5DmrZdSUrWx0YjfbG5ucSl0mfkKPq21j9TcMBQRKtz71YH3OLc3K+yq1p3+GDaPNB0+J7qtdf/eLHCfWTXYHoy7RvzuMUBc9oWK++s5XFo9q/31T7ZPOExaK/PRG2d92H3X/ylQUZvu6zlimgreuQ/P7wi3WCMQAAAAY9zkxJiaGJk+aJPbt25eWLFlCmZmZYq7KNFl8T5Vr+qJMTk6madOmiTy/93PvOZktywQWiK0NHDxnhVijzwR6o98k25p98/tGMazZd6K2HzvJtu7AKXQlLjGgQCzh0Ao8HMjGfLaB/tZuqPggB1DuFvFqG0v+uS2FVNTyTXN/aTOERn2yTryemGwFHEtZj3ftN8eUW8ud2nPp2IWrYpeJi+mXjfpS+dfailKeiqZsyor6vSfe6Chy945P5cbAbFG2k7fZ2t4yE4it+jJlO3P5ujjg48/pz20G00PcyssXHlb928r2tpH3WX7cMo/q0XLEbJGfDJiezb/A+i5WbyusP5j9wHLZMrKzaem2g2KNvhPoKXUR5lOeiu0cX21H5dUFyc8a9hY7jF9Ih89ddrpsyDa7yuNnmYrCLG/a6m3qd3C88/uifKPXeLt+AQAABDfmfJGTk0O1a9emBQsWiEePHqUuXbrQ0KFDxVMnT1H//v2dBhxPmHVyhfNedHQ0Va/2upidbWUQj+7p5TxYhkEgRiC+5SAQW+Xxs0xFYZaHQAwAAOBmmPMFAnHRBBaITX/YUv4KuEh4PWanyDo56BUe9kzAyadVZh5qhL2elCxj+S7YvE+ctW4Xzd+0l7YcjRR5DGI9VJZ7Ge7XgdeBz8FhDVPivJdH2Tm5dD46Xly7/yTN+XK3lIv9bNsBOhB1WR52wpp53RcIPmX19J+9U1i7zykf16H1i8L1G5uSKvJQc8t3HpFtZmdv2EWfqmC648RZkYfgk2H3XPWVf/sD3WbX/vDZF/pYS07PpEPnrohLth+gWet3SrnY1fuO0blr8fajqp35THlMIDb7o3TwLa/v8VPc4xIAAMDdhzkfcCCuW7cujRw5Ujx37hzFx8fT3r17xW5dutKf/vj/aNGiRWJEeDidPnWKUlJSxKaNm8j/EydMEBs0aEBh7dtTtcpVxAvnz1PdOnUpMyNDTEpMpAb1G0i3CvbrcF4KKBADAAAAAICvB+5GHg7AkyZOEhs1aCgtu6tWrhQPHjhA77RuLS29bLOmzej48eN2oK1ZvYZMU+fNN8X09HTavn07vfpKRTErM5Nat2xFW7dsEdesWUO9e/XyWX9ZB4EYAAAAAOAuxITRuLg4uZHOBF5uMT508CD9429/F/fs3kNt3nlHbo5jmxcQiDdv2kxt32kjcneICxcuULUqVUVe3vZt2ykstL3YqWNH2rNnj08gLuuhGIEYAAAAAOAuBIHYfxCIAQAAAADuQkwQzcnOkS4RvXr2FJcvW0aDBw+2Ayz3F65cqbKEWHbMh2PUdL1o5vQZ4kv/+hddv3adateqLX406yPq1rUbvfLfl8XsLBWyVdCuX+9tsR73J87KRCAGAAAAAAB3FncY5VbcA/v3iys+/4IOHTwk77Hc4rt/3z46dOiQmJuTSzt37JR+w2xUVJRMZ26yW7tmLUVFRtqacYgHvfuuOG/O3DIfgL0gEAMAAAAA3IV4W2hLU++wal+okN2kSRMxKSlJ3vs6gUAMAAAAAHAX4g2xpSkCMQAAAAAAKLN4w+vtMCMjQ4ZjY8173jK5f/Z+fqdBIAYAAAAAuAswQZP7+x45ckT6BbMHDhygxIRE+8FqZ8+epbS0tHyh1htUve+7P/cGWu/nN8Pf6W4nCMQAAAAAAHcBJmhyl4UXXniB+vTpI/bu1ZterViRLl++LDZv1kyeUOd9xLIXb8j1/uymsGkLeu2dtyyAQAwAAAAAcBdgwiYCceAgEAMAAAAA3EXwwzRqVK9u9+nl0Dt8+HBasGCB2KplS9q/bz8dPXJU7N+/P414fwRFR0eLsbGx9MmiT2jAgAHi7I9nU1ZWljySmZ2jXvfv149OnTwlcsA9ceKELIcdNWqUPCr66tWr4rJly2jYsGF0+vRpEYEYAAAAAADcUpKTkum///4PTZ82XZwyeTJVfKUiRUVGia1atKRdO3dSRFi4ePjwYZo6ZSp179ZNPHbsGP3zH/+gI4ePiKGhoRJqzYM3Ppo5izZs2EC1atUSr129RtWrvU67d+8WF8yfT61btZZWaPaPv/8Dbdq4iRITE0UEYgAAAAAAcGvgnKlMUoH4lf/+lxYtXCRymD139pzdXaFVy1a0d89eWrZ0qfiOCq+NGjSUlmP2uArEHGhNl4oZKlRPnTKFGqpp2KioKAm2r1etJn6pwvHf//JXCm0XatmO3q5Xj77aulV8x3ostLuLRlkDgRgAAAAA4G4AgbjYIBADAAAAANxF8E111V9/XYZWK2h4tVatWklQ/fe//y1yP18OvS2btxC5ywSHZhNgZ06fQdOmTnUCcaQKxAkJdiA+c+o01XrjDbvPMA/1Nn7cONq/f79oArG7DGUNBGIAAAAAgLuItNRUGjhgAGVmZoreQPzhhx/KzW1LlywV277TRvoQz5s7Vzx//jyNGf2hHYhXr15Na1avoZEffCBeuXyFUlJSaODAgSLfuPfVV19R69atxc6dOtO5c+fozJkz4jgVjt2BuCyCQAwAAAAAcBfgDr3e4dS8n8nn1oM6vK233vnN9Dyde1p3FwjWfG7eM5+X1W4SbhCIAQAAAADuAgoLtAV9hkDsCwIxAAAAAECQIQHVugnPBFqfz1x4w3JxLOsgEAMAAAAAgKAGgRgAAAAAAAQ1CMQAAAAAACCoQSAGAAAAAABBDQIxAAAAAAAIahCIAQAAAABAUINADAAAAAAAghoEYgAAAAAAENQgEAMAAAAAgKAGgRgAAAAAAAQ1CMQAAAAAACCoQSAGAAAAAABBDQIxAAAAAAAIahCIAQAAAABAUINADAAAAAAAghoEYgAAAAAAENQgEAMAAAAAgKCmiEB8g27cuLmB4J3Xa2nhu9y8/OvhVZXe6oIOb3366P7n/cwzDQAAAABAWQCBGASMtz59RCAGAAAAwNeMmwZiCS95eZR3Q8uv5Wd+L0+/DgQTiPJcugNraeGsxypnHm+Hsy3E6yrF9QUbep8ZTd06dZ6bZ5mrdR8vZrrS3N8AAAAAACWh6ECsAk56VrbYe/pSaj1qrvp/iZiWmeWd5abwsnJUQBo6b5XYetQcGjDrc8rMzhZLKySZwMVl7qXK2UqVmZ20fJMOxKBEmAZ2c4GRnpUlLtl2kFqoffq3ju+Lf2wzhF7sMopCJywSNx+JVPs/F4EYAAAAAGWKmwZijj3S4me19LUfN5/KVW1P36gWLm45csYOzSwVEXJ42sirMfRg9Q5iucph1G3qp8VucS6MG9a/lIxM+kWz/lSuSphYZ/B0BOJSwN0Cf/T8Ffp7xAixQlVVz1XD1X5t71hFWS1CvFftg3qDp9L1hGTRLMf8AwAAAAC4EyAQg4BBIAYAAADA3cRNAzHnU91/WPf33XXqHFWoFKpCDwefMGozdr7TN9QKxjeDlzFs4Ro7LD1SsxMdiLxkrcMJxGZ5JSWVA3ELFYirhYl1hkwrsoygaMz+uRKfRL9pMdCu3woqDP+r00gatWSjOHvDLhq6YC39qc0QMURdTIWo46Zar3Ei7x/Z7wjEAAAAALiD3DQQS1urFVTZ7JxceqH9MBV+wsXnGvah6MRku4WXA68XJyzfoOT0TPpju8F2i2HF7qMpMzvHZ5pALGgdblIzsugXzTkQ6/I6gdj0gvWd1zt/fvKXwTuP9zPfG9DcFw8F615GQcu7Gd5pCnvt7/IKw1wg9Zy+RAJu+SrtxfAJCyk9M4u825ycniHW7D9JB2c1LTv/y93WhZBTNwAAAAAAt5siAjHjG6DGLv2SQqqEieUrh9LcL3cV2uXBzGNagDcdOkUVuHW4Ujtx7sY9PsHJHnVCRoZwQpIZtYBvksvwCdC+IdO0MhudQKwDeN0h032m1z87N3np9Xu2wbUdZh5nhAxvOfR2Oi3evOw8uZBgUzOz5aZCez6f7TTz36A0tZ1sZg5vq/tzMw//b63Xvmix1ukaxSEvj28szJE6Y31H3NDTkGv5heHefoZvpmR/1qSfXGj8tHFfMS45jdz16ZW7VzxSvaN9gVJrwBRr3b7LBwAAAAC4nSAQIxDb8xeGe/sZBGIAAAAA3E34EYgdOHxdjImnp+p0E8u9HkGv9RonQ2nJcFp5vqGKp+f3zOfNR86Rm/KefbunGJuUKiGIgxtrQp2ZfteJcxQ6Zi79sdW74vNvdqUfv9WD/tlhhDhk7kopjxPIfcOVDsQDPIHY+fz05Wiq1m0MvdblQ/GLrw7IMny2gae1AuTGg6fo1S6j6bWu2uMXrkp5OQiyncYvpHaj5tG6fSfEA2cuUKP3ptPPG/YUn6vVmX7XrD+1HT1XPHXpuswfn5Iqvr9gDb3QdrDazi7ij+v1oFfUej5avU3MsIamM0HafSHC8kXDgaiL1GnCIvFP7wymH9TpSj+q2038a/uh1HvGEtlu1nRz8TeMmukuxyeKT6pQ+2CV9lR/0FTR2Qf59wUbnZRC31PlMPvj/9oN1fXN6/Zj/QAAAAAAt4LAAjGHrtw8envoTJFHFHhIhWI7YHlCjeQcFZIuxSaIHIL5ZrwOExeJHOAkkNmtlnlyo1WXSZ+Ij1ijQ4S8Fio+WLk93c839VXiVmYewSCMnlOBb9GmvSKH6LwbuXbAKioQ74+8qJap1vFqO3HSsk3yvu826NZgdsHmvWq6thRSuZ248+Q5CXRX4pLEp2p3kZbvmiocst9RAbi8mv4hFRrZ+7jsvE3WTYnP1upCX+w6TC+FDxd5G+99rZ0KmWFieZ5ehU6+kZFtNHiatMzafbal/vKkHzY7eM4Keuz1cD2yg1LXWSg9UElbjlV1+O0ancXJn29WdaZbjtmi0PWWR1k5OeKR81eVV+iSuihhfVvNtXarv/L4hWv0CI8uYrUQV+k9Xt7nfSUCAAAAANwBAgrE3H+AA9iq3cfEeznYqGA3dP5q0d1a6QSiPJqxervIowzcpwLZ3tMXRBOwjLl5uRQ+biGVV9OwvOz/13owzVm/U9wfeYF2HD+r1rVK/LYKnNxK/c1q2mVfHZRAbJYno0wUEIhlQ5QHOBDzMGEqOLKTl2+SVm3PJtvbsmDzPgm8IVVCxZ0nz8v73PLJPlOvu5QnRJWd/W3LgTTvy910KOqSuPHQKWo9cjbdx/VQVQ9HxsPX3aPCK/vWwMm04cAJaeVl+aaz37fkURx0gKygwvJHqh69gZhbytl7eL2qzv7YepD48dodtO/MBdqlysmOW7qRflK/lypjuPiAuhiYvk/NP0QAADoZSURBVGqr1JlcSBSC7z519pfuoqH/1+p6dbcQ8/u8X2Xfjl+oyhdu18/IxevyHTMAAAAAALcbBGIEYgRiAAAAAAQ1AQViHXByKSk1Q/ydFdb+0GaImJbBQ275BmL+av2Vrh+KPOTW3yPelxvLfG4us9xy5BTdzzfcWQHwpQ4jKS451XUTmBPGWA55j9fsICGU/UXjPtb03J85149AfEkHYqs7weTlm72b7MOCLftluvJVtLtOnZf341PSxO/X7ynl+M5b3cSTl67lK3O2qg9+ZDXL/am528mr3T8UM7Ky7JCpb7bLlX7GT7/ZVeRlV+4xxu4iwdt48sJ1ekS9z3L9vtx1lNSB1INn3bzM89Fxqp56i7y8Z+t2p4sxCWJReEOrd/85OuvjbjEfrd0u3s/dX9R++FG9HuLl2ES9va55AQAAAABuNwEFYsYEHfbduSulT6zp47r58GkryOlww61/0gpbo4PIY9VOXbUtX4AyLYgNh8yUIPzw69qdJ87qFkTzzyzXksvSd9ZyCuH+sjy2beUwmr/JGbnidgRiXl5iarr4XMPeEnBrDZws6nK4AqJV/o2HT4nSd7lye5q4cquow6FVx9b03C+6xoDJYrlqHehXLQba4/py3fSY/pndZ/ih6hG0W10kOC22vmGTLyp4nk+27BP5yXEhlUOl5ZgtKc7+0evmMvactpTuVetgOYA/rsq4evdR0WyjtTsAAAAAAO4IxQvElnyT1KM1O+rH9SpbjZqjb2yzvs7nsNNz+lLnJrJ6PelafKKrBVT/zy3L7C+a9qNy1cPoj22GiBL6XIHOLoMdkPPkxrYHqoWJvI6wcQvt8vkdiO0uE/4FYtNlwgTipLQM8fmGfeQCoaFaD0t2ubW6zDdo1+nzYshrHIhDafaXu0V7G61ZzHbXHzZT5IsFfvKeCcQ8lNvLXUbZLeSPv9mVOk35lHrOWFagPcSlFDp+oXhfdd2qXO+9GaK/SIaVorrCNiv7PZc2HjwpvhA6TC5UzP7/wds9ac2eoz7HB/8DAAAAALiTIBAjECMQAwAAACCoKUYgdgIQ94et1neCHTifr9+LLscm2IEnRYW2nzbpKzd6se+MnqODkB2IeTm5dp/Xb9fVN6VV6TNB5G4UEhKdBGYKYYfNqGux9FjNTiKXoVa/iXb5Cg/EmgORl30C8ZSSBuJGfST4NRwyQ8yPTrq7T18QdSBuT3O+3CN6MdtRf9gskQPxz9X28COwWR6X+Ldt37MDMffPle4TfEMiK10p9NB1IndbsN/X/Ze5H/NLnUeK/uI+BvjCw+zvS7GJ1Hr0XHpQlYXl8t6nrDNomnj+epxPNw4AAAAAgLJAwIHYDYeaRVv2UQiHRFYFro/W7pCQxK7afYTKq6D5gApF7NajkXaI0uo+rUlp6eL33u4hox+83PVDMUueSldAgOKfeV712anL0fRIjQ4iB7y3B0+zpy80EFvulxbiMBk5guVRJuQzF+7wJ6NMqBDLT+hjd1o31SWpcMo+36hvEYGYx/rNKyAQ7xYLxtVCrLbv582cQMw31v1fxAg7EHMgn71uJ83bsEvkUSrmq6BtnLdht/ZLrf58F63be0z0F28YXrvvuMhPq5Pxj3kkCeWvWw6kJdsPUlZujmj2u6l/AAAAAICyQIkCMYeaRBVkn6/fU+QWwVe7j7Ef7Vtn0FR5728R74v86GUvHKw4+LJ/az+cQnjkg3o9xEtxCXaIkiDlmscEskVb9tI9Kpyy5aqE0uB5q+zPCwvERu4y8QAHYg6mr/GDOTb6rMdZl17//C087BqHYT0snDcQ/6BRPxVaI24SiDkEBh6IGwyfKUogbs431elAzCM48JPwzKgcT9XpSmejdSusbol1LibsAKvM5MdCKxNS05Sp9pMB/cW9zMVb99I3a3QUOZTfr+q5x/SlIh8b8hRCuzwIwQAAAAAoeyAQIxAjEAMAAAAgqClRIJaAlZdLHSd/KoZUCZOb7FbuOSY+wQ/OUAFywudbRBOifJfhBM73P1mrAmI7Ks+PLVYOW7jG/sw33OnX6VlZ9FKnUXbg/Wb1jtYDP/TnRQXis1dj6THuamH1qY2Y+Ilzs5dL00d2wNwVTj9c5bbjUfL5nQrEvO7Pth2gkErttarOBs9bKfuE9QZiCaZqO1qMnCM+pPbPDxv2pivxSaI/uJd39PwVevrNLtLNhX1E7fvPth20h9Ez6/PtM164AAAAAAB3ghIGYh0W950+Lz5YLZxClD9pOVDkVstn3upGF2PixcKCjwmw1xNT6GeN+9gB9tE3OtH0VdtUsM0QuUWUH+hxJS5R5FBnxiBmW4z4SFo6zXpS7ECsW1DrDJlmt1ay3GL9YsT7VI5HW1B+u04XeVKcaTHlZeSq9W07Hik+az14g0M7+yWPu6w2JzEtU/yB9CFWgXjwDFEHYPf26u3creqK9QbiguqGV9Bg2EzRDsRpGSIvi1viX+wwQuQRIx59oyNNXblV5AuC3Dwe51k/IINvcpy8Ygs9UD1c5IuAFh98bAfYwvAGV2n1VTYf8bHa3/qGSbbnrGVS515TM7IcM52fvQ9nAQAAAAC4E5QwEHOwzJXhv9gXO7xv3eClWwz5BrOWH8xWoTJXLCz02EFLLW/rkTP0XN0eIs9fQfn71u+KdQdMptd7jqXn6vcSeYQEHu2hYrcPxejEZN2aaz2KWAfi/tZoCioQD55uf3UvqlC3bv9JelgFQ5bL/k0Vwmv0GS9GTF5MtQZMosfVe+wzap0VODxbD/JYsfeYLMeMMqEDcbgdiGV7fbZZB3EnELeVQJxv2DULPXse1R86UzSjTJj1Sf2r7T1+8Zr462b99QNKVBnY37ceRHX6T6Y3+00Uf9fqXbrHGgKN/X3Ld/XID1YLeFGYejPr/349vgkygkLUvmafa9qHfq6W+XN1MaR9l37mft1K+6um/cWNB47LfkIgBgAAAMCdBIEYgRiBGAAAAABBTQkDMQcZHabYKV9spfL/bknlXn5HvPellrTl6Bn788JCjzsQc1/TE5eui28NmqqHRavYVvuqkkPkK23EZ+p0pcFzVtoBzQm7umtCSnom/ZyD839bi2/2m2BNY+Rpc2n59oMid9cI4WWb9altqPBKO6rcY6y4es9ReqxyOD2gysEu3rpPlpeQmi7+oHZXKqe2v36/SaKsw6fLhO5isuvkWbHciy2o3Est6OO1O0R+CIkbUydvD5wilvvvO/Szt3vaw9SZfrmmz/DFmARqNXI2PapCKiv1xPX1ahutev1QtTBqPHSWqLuxOPVRFGY/8djP7D1cr9a+dmzj+EoBr5X3qOOC/WLbAbkoIZ38vasDAAAAALgtlDwQS39SHcjSMjJpX+RF5WVx/9lLvk+uK6wV0gpE7nBmgvaluET6fNcRcfLnm2nm6u20+WikyC3A+ulolnbI1XK/2MMXrtDeyEti5LU4n89NIDbzp2Vm09ZjUTRDrYOdvvIr2ht10e5TzA8iuRyfZJuWmSnrzMnJFQ+duyLbfUaFRVZvh3szOeDmSt9edu+Zi7Qn8gLFJqeK/LkbE4gjr8WI+1RZjly4avf5NdvAQVo/0U/X2/XEZHHVvuPqImUzTV2xRVy974TcPOdcoJj6CiwQZ2Rli3t5X0ddtt0fdcmSfy7IS6p+Lqlt5u2+KKNcmAsl77YDAAAAANwuSh6IA7QoeBon4AWul5t9rt9zguWtMND15Z+e9a8V15k2/3ILMxDylyew+Rnv+r0CAAAAANxuEIiLCKglNdD15Z+eRSAGAAAAALhVlCgQF4Q34HgtCu/0/sxb1Oc3w991GG42fUHvefHO79WL+72CPvfizzTFpaiy+ot3fu9rAAAAAIDbSakHYgACpTRCNgAAAABAcUEgBgAAAAAAQQ0CMQAAAAAACGoQiAEAAAAAQFCDQAwAAAAAAIIaBGIAAAAAABDUIBADAAAAAICgBoEYAAAAAAAENQjEAAAAAAAgqEEgBgAAAAAAQQ0CMQAAAAAACGoQiAEAAAAAQFCDQAwAAAAAAIIaBGIAAAAAABDUIBADAAAAAICgBoEYAAAAAAAENQjEAAAAAAAgqEEgBgAAAAAAQQ0CMQAAAAAACGoQiAEAAAAAQFCDQAwAAAAAAIIaBGIAAAAAABDUIBADAAAAAICgBoEYAAAAAAAENQjEAAAAAAAgqEEgBgAAAAAAQQ0CMQAAAAAACGoQiAEAAAAAQFCDQAwAAAAAAIIaBGIAAAAAABDUIBADAAAAAICgBoEYAAAAAAAENQjEAAAAAAAgqEEgBgAAAAAAQQ0CMQAAAAAACGoQiAEAAAAAQFCDQAwAAAAAAIIaBGIAAAAAABDUIBADAAAAAICgBoEYAAAAAAAENQjEAAAAAAAgqEEgBgAAAAAAQQ0CMQAAAAAACGoQiAEAAAAAQFCDQAwAAAAAAIIaBGIAAAAAABDUIBADAAAAAICgBoEYAAAAAAAENQjEAAAAAAAgqEEgBgAAAAAAQQ0CMQAAAAAACGoQiAEAAAAAQFCDQAwAAAAAAIIaBGIAAAAAABDUIBADAAAAAICgBoEYAAAAAAAENQjEAAAAAAAgqEEgBgAAAAAAQQ0CMQAAAAAACGoQiAEAAAAAQFCDQAwAAAAAAIIaBGIAAAAAABDUIBADAAAAAICgBoEYAAAAAAAENQjEAAAAAAAgqEEgBgAAAAAAQQ0CMQAAAAAACGoQiAEAAAAAQFCDQAwAAAAAAIIaBGIAAAAAAPD/2zsPBimKtQv/hu+aQBQxkBEkCSoSJUkSSYqoJIWrgig5GchRkCACCggoQZKSg0oGlZwMhAUkCZJEUFSsr8678zY1tTOzu8BlF/s89x7Z6Ypd3dNzurqqOtTQEBNCCCGEkFBDQ0wIIYQQQkINDTEhhBBCCAk1NMSEEEIIISTU0BATQgghhJBQQ0NMCCGEEEJCDQ0xIYQQQggJNTTEhBBCCCEk1NAQE0IIIYSQUENDTAghhBBCQg0NMSGEEEIICTU0xIQQQgghJNTQEBNCCCGEkFBDQ0wIIYQQQkINDTEhhBBCCAk1NMSEEEIIISTU0BATQgghhJBQQ0NMCCGEEEJCDQ0xIYQQQggJNTTEhBBCCCEk1NAQE0IIIYSQUENDTAghhBBCQg0NMSGEEEIICTU0xIQQQgghJNTQEBNCCCGEkFBDQ0wIIYQQQkINDTEhhBBCCAk1NMSEEEIIISTU0BATQgghhJBQQ0NMCCGEEEJCDQ0xIYQQQggJNTTEhBBCCCEk1NAQE0IIIYSQUENDTAghhBBCQg0NMSGEEEIICTU0xIQQQgghJNTQEBNCCCGEkFBDQ0wIIYQQQkINDTEhhBBCCAk1NMSEEEIIISTU0BATQgghhJBQQ0NMCCGEEEJCDQ0xIYQQQggJNTTEhBBCCCEk1NAQE0IIIYSQUENDTAghhBBCQg0NMSGEEEIICTU0xIQQQgghJNTQEBNCCCGEkFBDQ0wIIYQQQkINDTEhhBBCCAk1NMSEEEIIISTU0BATQgghhJB0888//4j+DdAQE0IIIYSQdENDTAghhJAbGjUz/yZTk1bCuM//C/5N7UhDTAghhNyA+IbWNSb+dg3zt/lKK366eGn9OH7cWNtcEoUnCgN+uF8HP9zHjxMv3o3IleyXG89PHysPf1tq8TMaGmJCCCEkk+ObieuhWPhxrqUMilTFKM8nRfoEYWmRjx/u60oI0nrp/fz0s1+eX4d4Sg0/fqBLEXn5pIgXR6nFv3TpksiNm1mgISaEEEIyOb6xuB6KhR/nWoqGOOVnvzy/DvGUGn78QDTEhBBCCMnMuIbi4sWLoj///FPkG4+///7bXLTbNR4++4ZE06rcfN28Y8nPT9PoZ7ccjefmren/+usvkebrlo3t/n75ipXOlW7XvPz6oh5aF8hvb5VbR8iPmxp+vbUuv/32m+jIkSPm2LFj5vfffxdp/n4abS/dV7dNE7VXrHr45f/8889R5ftC/FjtGq9ctKsf3z8vMhM0xIQQQsgNgJoSqFOHjqZcmbKmVq1aolOnTkWZkQkTJpiypUsH+vjjj6PCz545a2pUr27K2DAI4TBCj1d9XFTe5l2+rK9yNq8younTp0s+GzdsFJWz4WXLlDFjx44V+cbn0KFDNt+qEgfatGmTbB8zZowIeVaQMssFqlKxknmxWXPRp9M/NefOnQvyk/yt4WrZooVI6htD5Wy+UO9evSXN4cOHRY9XqWrKPFraLF68WBTLoLntPXTIEMmvSePGIrRVetC8tJyjR4+aLp06m4dLPiTKkzOXyZ87T1DfwYMGmTOnT0cdM6hXr16isrbubluhbtgnbY8F8+dHGVu3HtDBAwdMp/YdzMMPlhDluS+nlI9jAL07ZKi0t5vuwoULpl6duiJpW6v27dqJ3H1TvTt0aHC+IH71atVlvyG/XpkBGmJCCCHkBsA1G2Pef9/kuONOc1dE337zjWz/+6+/RE/Xb2Duzn6XufeuHKJnn2kU9GxC33z9jbkj6+1O+m/NhfMXTN5cuUX35bhb8kccV7fdfIvo/VGjJJ/Vq1aJst+ezdxny8l5z72inTt2RtV3f9J+k8tuz3rrbaI1q1fL9p5vvS1CWffY9G5Zt9t42bPdIcp2WxZT4/FqUYYKJuzxKlVE2Me778xu7rTpoDuyZE3Ow6aDXmr5X4l/YP8B0X133yN1njVzpiieOdP6d2zfXspQow1zmB40n3379omKFSkq5d8Z0QMFC5lCBe6Pqn81e2Pyyy+/iDS9Gl7s6z32+Mp+RvYV7XqXbSsI+/xco2fNmTNnRJp+586doiIPFI4qH5/vz5c/KB+qbW+03PTnz583RW08COcHpOfLwYMHo443zHSZUo+ae20ckW273Nb0/2TjQfHaOyOhISaEEEJuAFzDQUNMQ0xDfG2hISaEEEJuAFzDsW3rVjEZaoBGjXxPtmMcKlQwf4HADEOFreE6ceJEMAQAj8RhQh96sIQIpgeGOJ81NxDy7Nenb2AgD+zfL9qflCQ6GzFJaohhoFAOTBpUo1p1MY1aXxjinNaEwuRCgSF+u4cI5ZUsVtz88P33ov22rPXr1pvWr7QSwQCivs9bkwfpfqghRlizxk2C+iK9KClZJ46fkPIOHDggQl1cQxwPrX/H9h2u2hBjCANMPYT9KVG0mFm3dp0I42sRPmf2HBFMJtrkvy1ainRIQssXW4iwv5UqPGaS9iWJcExWLF9hmjdpKkI49g/1hpAeda5QrrwI5Ze0x33jhg2ii39clOM/Y/qnotz33ifpO7RrL8J4YBjiYtYMQ3KsrRAHmjBufNT5+bU9dihDjTPiY1iIGuLMCA0xIYQQkslRo6FGEBOhMNY0B4yiVaOGDWX78q+Wi2CI0OMHYwPh89o1a4NJUA3q1ZdtrVu1EiFvGCY1xDA5740cGWVyYsk1xDCZ2mOI9MOHDQ/qmxZD/FCJkubXX38Vaf5a3+5dukp9c9wBY5zd7N69W/KtVrmKCGGvvPRSUJ62lV/fKzfE7cXoX40hxj7rDQy0YP6CFPVTDX93mMSBqYQw6Q3btYcYYdWqVI2a5Af9efFP0QvNmku6AnnziY4cPmKWLl0a9Cjj6cEXy5alKFfbb0C//lKGpj/806EoQ4z2fqpuvcgxudPUql4jSAu99eZbUk6jhs+I0NYYp0xDTAghhJArxjcuECZF6ZCHwgULiknr26eP6I7bspp2bdvJ5CsIhnXwwIHm5MmTIjyeh2GZPWu2CPmJIc6ZWwQzhZ7MNq1ai16N9NS+9mob0ZHDhyXNGmuGIeQP4zRi+HARDBCM8fZt20UpDfEaSR/PEPv7jDyQXg3d3M/nRhli1LfUw4+YV1u3Tpat66vW6L9sTTK0efNmyQeTyaDrbYjBeyNGBsMRCt9f0Jx0hkL4wv6iV1X3d1nEvLZs0VKkhjjeKg8rl68IzCq0ft06M6B/ssmFHixazJz2JmK6whMIlKs9wCtXrIgaMoF9GGFveHDTBaFt9u3dK0MlIEzkRP0nTZwkwjHPTUNMCCGEkKvBNywQDTENMQ3xtYOGmBBCCLkB8E3LwvkLAsMCwcToGFV8xljUtm1eE8EE1Xuyjlm/fr0IE9UwphOToXRClDuGGGYGcXTSFfJzH/d//913ksY1xEi3Z88eUZPnnpd4Tz5RW7Rr1650G2J3n7FsG/JXQznpo4+iDPE9kaEFbntAt910s2je3LmSz5UaYtx8wPTpsmTpNcTIo8dbbwfth3HbGPbiH1MVxgTr0BVo6tSpst01xNUTGOId23fI8VNDvGTRYtO1c5fg86P25iFR+Tgn7rbx1JB/Zs+lKENs6zR50mQ5zpAY5BEjgvMLx6LyYxXlOENiiDmGmBBCCCHXGpjEQvkLiGBI3hk0yOTPk1eU15oPTC6bPm2aCKaqSMFCgQFF/Cdq1gpemAATJKtM2HQQTFPb1143ixYuFC1cAC0wi+y/kI7zdccQw8DppDYYKvQYq6Hr2aOH5HulhhhrHWNylho01CGqh9jWF4Z/0aJFouT6LjTz5s0THT2SvDJFPEOMsFho+YEhLltOdCWGeMz7o4P645jpRL9Y2rJ5s5hKjb9y5UrZnlZDvHTxkmTzHXmCgFVE3hk0ODgeMLWnTp5MkU61aeNGWdlD469fuy6lIZ482cyZNUuEOmId5De7vyHC53eHvmvWrV0rwqoXnFRHCCGEkGsOjKy+KAHmCSZLV3l43JpEhOsqCzCAMJRYfQKSIRTWILkmyDXEMEEjR6RvUp1riBE2dcqUwFDpagP+pLoe1gxDviHW/P/4/Q9RixdeFJOuy3jB1PqT6l7+70sp6ufLNcQwdYkMsZsOKzUk6iH2y4kFVnNQg5o9WzYz9ZMpUZMA8crkS3/jhSOX5CYB+4Tl4SCsEII48QyxgnpBtWs9IRPnsLqIrjCC46QGG3nPtkbWr/fff/0twktDEAc3URDeYgdDjOXZILTdx5Mmm5+P/SxCGWhTHUKBOn+3a1dcQ+yXmxmgISaEEEJuQGiIaYhpiK8dNMSEEELIDQZMBIzUyOEjRDAoMGw6RrTHm29JuC7DVbF8BTHNaphhYPFY3jUlF6zh0WXTYLg6d+wUjAENtGq1aM/u3ZJmtf0bwoshkg1x8nrFCPvjjz9kbWBIzOxdOS4b4lUpl10rWriI+fKLL0UwzDNnzJBhEBDSw1i3af2qSPcfxh9CeMMGT5m1a9aIUCfUd21EW7dulfhq2MUQ2zIHDBggQpo1nrZs3hIYRDXED1vTDq34anl0/NUoc1UwaTGWyUN7PPPU0yLUFzcmn06bLjp86JAYdZ2UqIb9jW7dRXqMdF1ipC9fukxwPLC/n3z8ibzMA8KxzmaPCZZPg7DvKL9WzZoimHLcQM2ZNVuEZd2SkpLMkMHviHDTgWPav18/EdK7hhjHAoZYDTluRtzz60lryHFDpuss45iLIT5wUOQb4ljtdb2hISaEEEJuQGAiYPQgGByZVJYt+c1uS5csiTIbXbt0ERODXkMIpgY9iW4cGB6sBACJabbx9c1yamT1TXXt27aTNKusCYSyZckqPcv6QgzNc9/efaIH7i8oeWa55VYRDBzCMdFMJ5thPWUtR+SMYYU5a/x84yjDCZNWtVJlEfYdeWh9/XrDJGK9XjXsMHx6YwBFlYu0to6VK1Yyv9s2gjq2ay9l6A2Hm7fqlv/cJGv76vq+/rGCYHyhx+wNivtWPphFrBet9UEv7rONGpmzZ8+KNH2LF18USXvZerjlY8yvToKEXn/tdfPbuXOi4HhE3pRXvmzZoBwIN0F4w2BQvhXWMsbEO5185xpihE+eNCnI98tlX8g5oPszdswY2b527VoRjrmsMhExxBetOf9owgRz/Phxkd9eGQENMSGEEHKDoUZEDQveXoaeVLyiGdJJZKrVq1eburWfDDRw4MDLj+oj+uP334MXKdS3edWvUzf538jfGJpRx6aFxkQMjxryupGy3Vcru/p8zmemzhO1A23btk22Y6UCCHXS3mBVo6cbSk83tGrlyqgXUECof4f27UV+WhlKYv9FvaBuXbtJT6bW7xmbdxAvEhfS/cXfnTp0lF5VaMzo0SnKCNom8hntsmnjJhHqlwiYXAxJqWLNPIQJiBh2gJ5VaNqUqfLmOr8dhwwZIkJZQd0j9X/+2edMn969RRs2bJC3y0UNyXB06tQpM2zou7ISBKTla36zZs4KJluqUJ8XmjcX1bbHcIlz04VhLk0aNzZP1W8gQm83tm/fvl2ElUaes+cHhl5AOGerVK5stmzZIkqtva4HNMSEEELIDYYaERpiGmIa4msDDTEhhBByg+EbnNR0vdJcy/S+YOxS238XfPLDfaWGHz9e2kRhsfDj/xPDtF5PxTPOCet8FYLZfqN7d3P69GmRbs9IaIgJIYSQGwzfYMRSeuP7ioUfJ57SGz+WXBJtSy1NIiXCj+vLJ7VwFz+un8bf7iut8a40vq+rTe/ng95+1wj74RkBDTEhhBByg+KbifQaCz++n59PvHD/cyz8tPivysfPz/+suHn6cWJtj7UtEX7cROljbUuNRPVPS3giriRdetP49UukROkyAzTEhBBCyA2KbyrSazD8+H5+PvHC/c+x8NPivyofPz//s+Lm6ceJtT3WtkT4cROlj7UtNRLVPy3hibiSdOlN49cvkRKlywzQEBNCCCGEkFBDQ0wIIYQQQkINDTEhhBByDfAfA8dS2HHbge1CMhM0xIQQQsg1wDe/sRR2aIhJZoWGmBBCCLkGwNjFW8/VN35XYgLj5ZUWriZtIlLL0y/Xjet/vhbEKudquFb5pMaV1NtP46bzP/8v8MuN9dmPm5mhISaEEJIp8X/s06TI/64qj39S/sD72/z8/fhJSUlm5oyZ5pOPPxEt/+qrFG/+cvNJzkD+H/VCiahgP62f3AtPj64EPw8/H3d7vJsEHz/cl48f7is10hovFmkpxw2PFd+vb1xdbXonTTxi5ZsIP/9EinX8Mxs0xIQQQjIF/g8mpK96HT3qfdOyRQvTvFlz0Vvd3zDffvONufT3JZGfTrVr1y5Rn1695ZWzLV54UTRk8DvB62VdHT9+XDRt2jR51a9uX7JosRn13ntm1MiREeFvRzYM6Xbt2CkaN26cWbpkiZk3d57o6/Vfmw8/+EDydPN12bxps5kyZYoIr9316+a20dzP55p9e/dGhcF06KuGlyxebNq1a2eaNmkier3Na2bu3Lny+t1YrwRODT8+9P3335t169aJ/DBN8+0334o6dOhgmjVtZnq8/bYoaV9SivjY54ULF4pebdXaNG3a1PTt21d05PCRmPV087hw4YL5YOxY0bFjx2LGVxC2csWK+MfTCq9W/umnn0SIv3z5cjPuww9F58+fT1F/P38cTzlnrH755RfZ9sMPP4gulxNd/sjhw0WbN26Sl1dM+eQTUXTc5PgTxo0333/3vcg3nHhd8rJly4InFnM//zxq3963dRr7/mgzyu6jyG4bPmy42bFjhwhlT5w4UV7JDMXbxy2bt4hW2LZxy0eZP9jzo1evXqLm+O692MKMGD5CdNx+p/28MhoaYkIIIZkC9wdVRUN8WW4b0RAn4+ZBQ3y5PjTE6YeGmBBCSKYDP5CzZ84yDxYvLho8aJDZtnWr/fH/TvTp9OmmbJky5uWXXhLBDMkPcUT4QX+je3dT5tHSoimfTDHf2XTbtm0TDRv6rilUsKD5wJpUSA3FVlsGVLZsWTGW+gMPU9nq5Zcvmwo1EhHBPMG4D3t3mAiG6d2hQ82E8RNEa1avMR9NmGAOHTok0nxdkMct/7lJNPGjj6IMhq/6deuZBfPnR22DcatRrbro+eeeN8u/Wm52794tWr1qtWnZsqWpUK68aM/uPSnyTIQfF+a1fdu2prc1O5AfDn08ebI9RmVFCxcsFIM07oMPRQ8UKmQ2fLshKn7XLl1N7SeeEK1du1bqPXb0GFFxew78+OOPKerq1qdv797mVtt20KaNG6Pi+fGh9u3am8a2naD3UxjOkda4DTcHDx4U4fx4zd5UZLstiwg3JP7+urr4x0XzRM1aJvvt2US7du6U7bNmzBTh3IUpfc8ec0jPqxH23IFQ//MXzpsSxYqL+vfpG8RNjj/S9LM3Co889LAINxk457X88dYsv/zfl6RdIBjikSNGBPvW4623TGF7DNxzeIRjiHH+4vuR6HzF51HvjRJ1aN8hav9nzphhHrb1+vTTT0U/fP+D2bx5s+nft58Ix3/b1m0p2i0jueaGOKN3iBBCyI2H/8OIXsUiDxQ2mzZtEvnh0IkTJ8xj5cuLhg4ZGvSGQTAXlStWMr+c+EXkp0Uc5Js/Xz7RmjVrZLsa5nJly0WN+W3SuLH8sPv5+HmOHTNWdOTIETPGGrmJEz4SoVdw5PAR0lOovYWQCwxLndpPigrmyy+9fG7eblkN6tU3C+cvCPYX5r16tWpmQL/+ItccqbDt/VGjRLhJOP/bb1HhqYH02uOOXs8cd2aXnnfIL+vXs7+aUo+UEiOoZlD3Q9rJtg1Mu36Gmcfx9g2Yhg8cMMB06tgxRTmqtWvWmqqVq5hS1oRBG9NgiDu0b2/GvD9aJHG9+G7cZEPcxjRs8JToqfoNYo4JV6HXtGKFx0zJB0uIdu3cJdtnzpwpwg1WrKcAri5YU1q8SFFR0r59KcJx43fUnmdQqUceMZud7wluwl556eUUaVQwo+XL2XPcnjeQHw5D/EDBQubw4cMi3e63jZ5PHTskG2LcmELl7E3Q+hhPDvR4fvjhh6Z2rSfknHLP1Yzkmhpi7IzejbgHOh4a5jaWH+6H+XF8UgsH6ckvo/H3PxZpiUMIIZkZvYbpD2ajhs+Yd63J9a9t7vUOWrVypej1114XU/iLNckQzNWGDZd7IGOlx+8UTCiEXmJs227NMOQb4qaNm6RqiCE1vO8Mfkd6aHds3yGaMH68Wbx4cbB/bp0U1KNrly4imLTytg6nTp0S+fFhiBcsWBCUi+EZj1oDGu8Rt8b73ZoVqEqlymb61GnB9tRAnJMnT5qO1pRCr7z8iqlg6xfPEMMM1atbV9oQ+uP3P8zZs2eDz/gbRlnbA733nTt1DsL9/BYtXGTq2/z87Sd/OSmqbPdnrb2pKVO6jCheD7GCMBji0badIYnrxcc2rR/U5tVXZegO9GipUmbrlq1RdUEc9T/tbd54UlC61KMiNcSzrBmGmqTFENvjVKxwEVGSNcRap1hq1qyZmTp1avD5I88Qu/sEiSGOnONQEB6RGOJCDwSG2EfzUUPcKWKIf7M3WRDaZ+OG5GMguhRdXwxp6d61W9TxzmhoiNMQPyPx9z8WaYlDCCGZGb2G0RDTENMQJ4uG+PqSbkPs7pDugP6Ng9uta1f7RXlZdP635EHnblo/D//z/0I+7nY/PFE6kJ7wRPFAvHj+9vTIRT+7YfHiEkJIRoPrEowShPGLGHPqX6/8a56vdWvXikqWKJGwY8ZPp3INcdQY4saNzYxPZ0R1+vhy88HEtfXr11ujulSEcah+WT4jYIg7dxb99edf5pmnnrZGo6PoT/vZRYZMLLg8ZKKjNWB9evVKaLjdsjGc44VmzRPGd/HrDsEI947ID/t48semc8dOZvKkyaI6Tz5p6terZ2rWrCmCeYs1rMOX1q9L5y6mW7duUWHJnqObCOOYEa9M6dIiDJlIBNLLkInRo0X+sfSPqRricZEx0Bi/28nun19XDJWBStjzLykpyZR6+BGRGuLZM2aKmjZpKvv/919/XZZXLgxxUWuGoaQYQyYgNaC4wcGNoW5P1RDbc7wChkxcQ0MM9HiNtm2Ksc3z580XnTlzRvbLPd9iKSNJ1RD7FfUr7wo7279ffzlxIZ3kkFmk9Xfx40TJX+TRj4/PicIzQFIH/Z+zLV7dCCEks4Brkv4A58+bz5y1P6Lx8K9lKhgtqEH9+gaXuFjXaeCn023xDPGL1jxiLGilipUiqpj872MVRV26dEmRZyy55fuMHDnSdOnUWYTwo0eOmqJFiohmzZqVHAnp/omMIbaGWA0U9hc9j7HKkmSS9LLBXLZ0mTVRlVIYonjE2o9kQxx7Uh0mfj1wf0HTrm1b0enTp2X7/qT9ogrlK5hJEyelSOeWh3piMiT0YLHi5oC3KsgXy74wNarXEJ379ZxsizLEKZs4AHE72huNIoULi/R4Yty5qlWrVsGqHL4h3rtnj5wPJ46fEGm76iRNrKiAdsXYXui7XdGGOHfOnNKrreePSseQnz51WjxU8aLFRPPnzTNff/21+dreZIns35hUifMAwhOM3y9cXj3EH0Psk15D7Oejn31DrNtxTq5YvsI81aCBCOdw3SfrmFE2LnT40OU8XWUkaTLErqPfY08CzM6FsIzKh2M/CCYtoAGGDRsWfEFwMHHi47EX1Pb11+VLgi85hPyw/Mza1WtEvXr2lB7mz+bMEenSMJg4AX1gy8IJrLMs9Y4bS+9A48eNM1u3bDF9+vQR9ejRQ2Yla0N/++23ZsKECRIH6tmjp/niiy/sndnfIjzeQpru3bqL8AjKXR4HM1wx07nt621FH4wZK1+EIPyHH8zAAQNNW/vlh8aOGSP19g+4Cm2KxxaDbBoIEwYmTZxozp07J0IcPPqaOmWqCHej7wwaLHeaENLjkZN+QXERx2O6zp06iTZt3GR22vA333xT1Ne2iS5doyKEkMyAXpN0mbX78xeIO/nMje9rzuzZoto1awU/7ilTx08fGOKIWdDtMBx4tL53795A+D3cu2ev6Ij3Ax+vjESIIe7cWQQQH8tZQYUKFopaZUGHTKghfv6552RVBw3H74OLXw+YqRrVq0dNakovfXonD5eINWRi7OjRYoj199sPRy9+xcceiztEAr2srVu3NlUqVxZhlQK3ZxHnRtnSZYLfc92uhniT+7jekYK/sTLCgH79RO5xVcFjaPsGhtj6EAjbmjdrJp4CQn4wkZjYB61atSrZEEd6iL/TIRORVSZgEuX8iTqX9ph9e/eJ4D3goR4p+ZDouUbPmhdeeMG8GFFlezODpyjTp00T+cvAXakhVpBf4QSGWLAfg1UmIkMmVHqstP0w3OZL67fQhtD9BQqY8ePHR/WIp8j/OkNDTENMCCEZjl6TaIhpiCEaYhri602aDLEKS9Tkui9ncIDxGCTnPffK8hoQdrj649VMsSJFRRg0/VCJkvKlgGDIij5QWMa6QBj3gq72bFmyivDIBwum33bzLaJ2bdtJHlpevjx5ZcwP8oAK5Mtvdv+4W9ZuhG676WaZSIE4ULEiRUzOe++TxbEhDHDPeuttsg8QHpNgofShQ4aI7sh6u0zkeLH5CyJ8xhceC0hD2CeU269vPxEe6TWo38AcPnRIVKjA/bJeoF4g7s+XTyYVuAuxu19oTBK4O/tdpkrFSqI2r7Yxd96ezdSrV0+E9sQkgrvvzC5Ce+MCcJ9tc+jLL76UtTix3xAG3j/7zDN2n+8V5bb7iEHz+kjlDpu3v8wJIYRkBvS6qMs24RE5Xmbh/1C6v0lQ0r4kUYsWLeQ3RQ1tIfubo/NYXPn5YH1WaNCgQfI5niHGsmsz0jCp7mqIZYjVMKCzBesLw6hA+L2EIdYOK/y+vmZ/Q9wOrFj7q+E93npbflP085WQyBDPnjVLDHeKZb0wuepS8nJhxe0xPnXylEj3dcniJaJHHnlEfmfdSYJu/TtaMwthaIQK69zCc0DTp02X5eHiGS787Y4hdsPcOG65bdq0CQwxtuFFHTCmEM4VvOjj8apVRThGsQzx5WXXmkbVK5ZkUl3ETyUlJSXXI6Kffz5u/UBpWa8Z8tNeK0PsvpgkVj4Y9w5hnDvCfzr4kwhto8fKPR/1eOAmBssd4iYv1vrSGUFCQ+zvQEtrVu+xBg4THSAcFIxjGffhOBHMa037BShRtJjo2NFjclHDnT40wJ7c8+fOMzt2bBfhrT7FHigSLBSOAwDj+Plnn4kwgUGMbsQgYxvqg9mr0B3WRHft1Fl6YqGst9xqpjmzLNesXm2yZ7vDdOnUSfTee+/Jgtp97ZcXQnm4y8yXO4+ovDX1ixYtMkuXLhXVtBefPLlymp07dogKWzNc2N6lY7F1CHfY6IHFfkMF7MEtZuMMfWeICGtEItz/QqpBrlGtmqw1qYPwcdLgDgrjqqDP53wm9R3Uf4AIaXHnmDdXblG9OnXloqMLkU/+aKLkgTcwQWizz2weaoCxdmKenLnMCdvuUEaffIQQouj1UYWJUnjhhtuh4MfD9Q5GEUIPKa5zahjR+4ieM/8HGbmI/kk2HE/UqiXC282wLd4qE8mGeEZU+X59dNuVAkPc2ZphyM8XZh8T0/r16yeqjx7i+ZdXmcBvTb68+awZOSjy06v0+o8OIYxF9cNVaSHRpDrUp0L55N91v/cSwotBsE5x8ETUHiO8HVBfxILf71iG6pL9LYV6vt3DPIX1gCNq0KCBafj00yaf/W2EalavIb2Wfg+0gr+xEkQiQwyCcmGI7Q0HnlRD2Ib9Km+9C/Tt19+Yli1amvEfjhMhHOejjiFOuQ5xU9kPv11cXTjvrjKRbIhd4U10j1WoIHKfpkBpMcQxV5mIxEfdYfSXf/WVyM8Hf6NNWr/SSoSVN7ANxw3CGsdYWcSvswpvl6xVo6Y8pYf8/DOChIYYaMNA9Z6sI4bqpG14CGE4IbRLHX/DRJYoVkx0zt7V7du3L3h1HwaMZ7GmtVqVqqLvdn1nct1zn8ykheTEt3nqMjMw1G92f0N6daGNkSV09AsPc970+cbmA2uGodttnJXLVwQNi97je3PcLTNpIRji263B/MKeRBDiYJA+emUhnHRP2gvOk0/UFmHh7WeebmgO7N8vwusRUZ+yj5YWwYCj51W/0Hh70hvduksvLnSbDYdp9V+Vqe1ZquRDpmTxB6PugPGvGmTMEsV+T5syVYRwDLTXHvKK9ks4e/Zsc8v//UeEXg7EGRd5tSTqt/zLr4ILCtogz305zXF7Zwll9MlHCCEueo2EMGwCPWv6SNYdvgbhmvbVl1+a3LlyidyXWEDr1603efPkkRc2QEFYpIfyz4t/ygss8MYw6OyZsxKOYWy6JJU7qQ6GeOaM6ElrsXQ1oAPIN8QK/kZPHd7wBaEHHJPqNB7a4w37+1SrZk0RnmpG1c3mgd+PZxo2FL3yyitRRhO/Ye7+prYvCPcNsW6HYLIw1AGTwSDdrh1EmHiP1ah0OyZZ4amrDoHU7b4h9uXWB9I3E+qya77c+BgyoR1qEubtsptODTGeKkO6XT83sl4By94dPXpUhDDpIfYm1eEcgpo1TWMPccQQw0v54RBeiAFhmKSbH5b5e9lpX3+f4i67FgnH/iKPWvZmEQp66SPfH/yNmwCd9JmUlCTb1A/hZshd1k/ydP7GUoSFH0i9B/p6QkNMQ0wIIZkCvUZCNMTR+eFvGuKUcusD0RAnb6chTj8JDbHbMBDefw1Dq5PkMMgdA72zZskiwqsp8ZjiwaLFRDCkWJYEJhL66adDpnmTpmJKoe3btstjfIxDhpYsWSID4dXw4ZHVcnvBU0PcplVr8+MPP8qjEujWm26WhdKxniKEPF9o2iwYpP72m2/JkANMtoMCQ7x0mQj7BmNa1X5pIbweEQt779yxU4SB3zjR9FWeD1sDi3dw65jhenXqmHvvulvGykDFihaVcWgHDxwU4QYiW9bbgy8IHpNgsqFOGsHSOjDiuk4jHqk8XqVKcIHHotYYB4z3oUP6HniMbYbQBliK52ZrhiF9t7oa4iw33xJtiG3bID8MVYEy+uQjhJB44PqEH0q83heqYq+N6FgZMGCACPM3MNRODa9vmvAZk7WTl9OqaBpaE4h0PXv2FKGD5tlGjVL8IGMiNlSubNkog9jcXj+xtnGVylWiVeWyttp0V4OMxbTGBlLzoGg9li1dKspifxPdIRP6ezZi+HBRaWsKYeDeGTxYhEnteEEExhpDum/aQYMOoIkTJwZ5xcMtD2OIe0ekadzwHfYmRecYwfwOtvXQOTJ169YNfoegqVOmmByYUxO0LX6XL7czlijT1wO78uulhth9KUu8+MivKOYGWbllqjBkQMfoiiFu0ybKQEP6IhjM64HJd4dIiiEuVUqEISTYNmPGDBHmMT1epWpQlp5DlWyZ0HhrRtHJqENI4hliXbcbdZ3n3HiMs54HNz3+fuuYIZzjMK2+IQ6i/ZM8vLNXj54imGcsNjDEHkOoZYsWMgYZixFAfr2+t34FY95xXkH9+/c3AwcONM2sB4Swj/q6dFcZSZoMsQpfoN49ewXv1sbdHN4ZPs2eyJD0ItuTXGd54iDhfeUlij8owoQ3GOXhw4aJ0Ni4EOFCAxXKX0DG4eq6gpgIhxMLC3xDKAvhGJcMDR82XMrUMUAYU1zb3sng/dsQxi13aNcuWLgaC0Xfk+NumYwG6X7puoiNn33OFCyA8c75RThJsbC6XjBwE4AFsrEf0MMlSspJpyfU0MHvyJ0cBqJDCIcRV0OKL1OeXLnlRgHCGpsYw4S7JCh/3rymXOkysroFhDToycb70KECtr2L2HyxEgeEO7bPPvvM3JU9uwhjmrE/H02YIMpx111mxYoVQfkv/fclqZcaYkIIyazo9VmvvzAEmEQ2Z/Yc0ZYtW+S67v9O+cLEOgidGphToT2WGMOKfP34+J2DDh06JJ8V9Lju37/fJCUlifC3+xnCk8CrAS8v0DfdSX2cLkutn17PsQJCrEmDGo48Vq9ebWZa8wWtXLFSngxquB8fTyXdyWupgTh4kovJ35Cm8etz5vRpEV4agQ4crH4EuU9NIZS932lLbV+3nbXn1ZVfJxw3yM8/Vly0UVR58AJuuXa7OwYaq0qpAfXzRpnudi1Db7h0HLP2oEqZcfYTQtviuGj6WOeqKxwDffILoS7uDcflHU8WJjoeStAzq9vU4B/66ZDMrdI37WH+WKx2cIU3IuoTF3xn8RRbx+jHOnczmoSGOBY4QHpC4AvkD5ZHz6f2iMqXzurXs7+KMKzC/cKpdNIETs6fjx0LDKYfDw2IfN1lySDtIUYv8sIFC4MLCoZ1uI8QUDZOWp3F7OePOmB5GO3B9R8f6b5j6TIIdXAvLBAuaDrkwQ/HCYvy8agO0jyxYDmEfYv1JdYhFxhCcub0magLGtpfvzB6LLR9cAK7+aFNcAz0BCeEkBsFXMP0X/fv1HCvpbG2/9uJt//k2vNvbOtE3zf/s48f7raPH5YZoCH26kFDTAghmQ9cw/Rf9+/UcK+lsbb/24m3/+Ta829s60TfN/+zjx/uto8flhlItyH2d+hqlNb8UitbXx146003pRhTda0Vqx6p1S+zihBCbmSu9jr2b74e6j5lln3MDHUg6SeRb/A/p0Z6419v0m2IXWI1lL/NbYC0NkastP52V9rDije9YEyZG/9qiVUX/7O7PdFnxc/Tz8//7OOn94kX7m73wwghhBBCYhEG33BVhpgQQgghhJAbHRpiQgghhBASamiICSGEEEJIqKEhJoQQQgghoYaGmBBCCCGEhBoaYkIIIYQQEmpoiAkhhBBCSKihISaEEEIIIaGGhpgQQgghhIQaGmJCCCGEEBJqaIgJIYQQQkiooSEmhBBCCCGhhoaYEEIIIYSEGhpiQgghhBASamiICSGEEEJIqKEhJoQQQgghoYaGmBBCCCGEhBoaYkIIIYQQEmpoiAkhhBBCSKihISaEEEIIIaGGhpgQQgghhIQaGmJCCCGEEBJqaIgJIYQQQkiooSEmhBBCCCGhhoaYEEIIIYSEGhpiQgghhBASamiICSGEEEJIqKEhJoQQQgghoYaGmBBCCCGEhBoaYkIIIYQQEmpoiAkhhBBCSKihISaEEEIIIaGGhpgQQgghhIQaGmJCCCGEEBJqaIgJIYQQQkio+X9nQABdJ9QafgAAAABJRU5ErkJggg==>

[image2]: <data:image/png;base64,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>