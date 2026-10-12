// Array of 50 Lectures for Computer Networks
const lecturesData = [
    { id: 1, title: "Introduction to Computer Networks & Topologies", desc: "Basics of data communication, network types (LAN, WAN, MAN), and physical topologies.", available: true, link: "lec-1.html" },
    { id: 2, title: "OSI & TCP/IP Reference Models", desc: "Detailed breakdown of 7 layers of OSI and 4 layers of TCP/IP protocol suite.", available: false },
    { id: 3, title: "Physical Layer: Transmission Media & Encoding", desc: "Guided/unguided media, copper cables, fiber optics, and digital/analog modulation.", available: false },
    { id: 4, title: "Data Link Layer: Framing & Error Control", desc: "Error detection, parity checks, CRC, checksum, and Hamming codes.", available: false },
    { id: 5, title: "Flow Control Protocols", desc: "Stop-and-Wait, Sliding Window, Go-Back-N, and Selective Repeat protocols.", available: false },
    { id: 6, title: "Medium Access Control (MAC) Sublayer", desc: "ALOHA, CSMA/CD, CSMA/CA, and Ethernet standards (IEEE 802.3).", available: false },
    { id: 7, title: "Network Layer: Logical Addressing & IPv4", desc: "IPv4 header structure, classful addressing, and subnetting basics.", available: false },
    { id: 8, title: "CIDR and Advanced Subnetting", desc: "Variable Length Subnet Masking (VLSM), supernetting, and CIDR notation.", available: false },
    { id: 9, title: "Internet Protocol Version 6 (IPv6)", desc: "IPv6 header format, address representation, autoconfiguration, and transition mechanisms.", available: false },
    { id: 10, title: "Network Address Translation (NAT)", desc: "Static NAT, Dynamic NAT, Port Address Translation (PAT), and private IP addressing.", available: false },
    { id: 11, title: "Routing Algorithms: Distance Vector", desc: "Bellman-Ford algorithm, Routing Information Protocol (RIPv1/v2), and count-to-infinity problem.", available: false },
    { id: 12, title: "Routing Algorithms: Link State", desc: "Dijkstra's algorithm, Open Shortest Path First (OSPF) protocol mechanics.", available: false },
    { id: 13, title: "Path Vector Routing and BGP", desc: "Border Gateway Protocol (BGP), autonomous systems, and inter-domain routing.", available: false },
    { id: 14, title: "Internet Control Message Protocol (ICMP)", desc: "Ping, traceroute, error reporting, and query messages in network diagnostics.", available: false },
    { id: 15, title: "Address Resolution Protocol (ARP) & DHCP", desc: "Resolving IP addresses to MAC addresses, DHCP lease process, and DNS basics.", available: false },
    { id: 16, title: "Transport Layer: UDP Protocol", desc: "User Datagram Protocol, connectionless service, header format, and use cases.", available: false },
    { id: 17, title: "Transport Layer: TCP Protocol Mechanics", desc: "Transmission Control Protocol, reliable delivery, segments, and port numbers.", available: false },
    { id: 18, title: "TCP Connection Management", desc: "Three-way handshake for setup and four-way handshake for connection termination.", available: false },
    { id: 19, title: "TCP Flow Control and Congestion Control", desc: "Sliding window flow control, slow start, congestion avoidance, and fast recovery.", available: false },
    { id: 20, title: "Quality of Service (QoS)", desc: "Traffic shaping, policing, RSVP, and handling congestion in packet networks.", available: false },
    { id: 21, title: "Application Layer: Domain Name System (DNS)", desc: "DNS hierarchy, root servers, authoritative name servers, and recursive lookups.", available: false },
    { id: 22, title: "HTTP and HTTPS Protocols", desc: "Stateless request-response cycles, methods, headers, and SSL/TLS encryption.", available: false },
    { id: 23, title: "Email Protocols: SMTP, POP3, and IMAP", desc: "Mail transfer agents, retrieval mechanisms, and MIME email formatting.", available: false },
    { id: 24, title: "File Transfer Protocol (FTP) & TFTP", desc: "Control and data connections, active vs passive mode, and trivial file transfer.", available: false },
    { id: 25, title: "Network Security: Principles & CIA Triad", desc: "Confidentiality, Integrity, Availability, threat landscape, and vulnerability concepts.", available: false },
    { id: 26, title: "Cryptography: Symmetric & Asymmetric", desc: "AES, DES, RSA encryption algorithms, digital signatures, and public key infrastructure (PKI).", available: false },
    { id: 27, title: "Firewalls and Intrusion Detection Systems (IDS)", desc: "Packet filtering, stateful inspection, proxy firewalls, and network/host IDS.", available: false },
    { id: 28, title: "Virtual Private Networks (VPNs) & IPsec", desc: "Tunneling protocols, secure remote access, IPsec architecture, and SSL VPNs.", available: false },
    { id: 29, title: "Wireless Networks: IEEE 802.11 (Wi-Fi)", desc: "Wireless LAN architecture, CSMA/CA in wireless, security (WEP, WPA2, WPA3).", available: false },
    { id: 30, title: "Bluetooth and Personal Area Networks (PAN)", desc: "Frequency hopping spread spectrum, Bluetooth pairing, and ZigBee standards.", available: false },
    { id: 31, title: "Cellular Networks: 4G LTE and 5G Architecture", desc: "Mobile communication generations, cell towers, core network functions, and mmWave.", available: false },
    { id: 32, title: "Software-Defined Networking (SDN)", desc: "Decoupling control plane and data plane, OpenFlow protocol, and SDN controllers.", available: false },
    { id: 33, title: "Network Function Virtualization (NFV)", desc: "Virtualizing network nodes (firewalls, routers) as software appliances.", available: false },
    { id: 34, title: "Cloud Computing Networking Basics", desc: "VPCs, subnets, internet gateways, security groups, and route tables in cloud.", available: false },
    { id: 35, title: "Data Center Networking", desc: "Leaf-spine architectures, top-of-rack switches, and east-west traffic handling.", available: false },
    { id: 36, title: "Internet of Things (IoT) Protocols", desc: "MQTT, CoAP, lightweight protocols for resource-constrained IoT devices.", available: false },
    { id: 37, title: "Network Monitoring and Management (SNMP)", desc: "Simple Network Management Protocol, MIBs, traps, and polling mechanisms.", available: false },
    { id: 38, title: "Network Troubleshooting Tools", desc: "Wireshark packet analysis, netstat, nmap, and tcpdump commands.", available: false },
    { id: 39, title: "Content Delivery Networks (CDNs)", desc: "Caching edge servers, reducing latency, and geographic content distribution.", available: false },
    { id: 40, title: "WebSockets and Real-time Communication", desc: "Full-duplex communication channels over a single TCP connection.", available: false },
    { id: 41, title: "Secure Shell (SSH) and Remote Administration", desc: "Encrypted remote terminal access, key-based authentication, and port forwarding.", available: false },
    { id: 42, title: "Network Time Protocol (NTP)", desc: "Clock synchronization across distributed network systems and stratum levels.", available: false },
    { id: 43, title: "Network Address Translation Security & CGNAT", desc: "Carrier-Grade NAT, port mapping challenges, and address exhaustion solutions.", available: false },
    { id: 44, title: "Multiprotocol Label Switching (MPLS)", desc: "Label stacking, traffic engineering, and high-performance WAN routing.", available: false },
    { id: 45, title: "IPv4 to IPv6 Transition Technologies", desc: "Dual-stack implementation, tunneling, and NAT64 translation methods.", available: false },
    { id: 46, title: "Zero Trust Network Architecture (ZTNA)", desc: "Never trust, always verify security model and micro-segmentation principles.", available: false },
    { id: 47, title: "Network Automation with Python & Netmiko", desc: "Automating router/switch configurations using scripts and SSH libraries.", available: false },
    { id: 48, title: "Edge Computing and Network Edge", desc: "Processing data closer to the source to minimize latency and bandwidth bottlenecks.", available: false },
    { id: 49, title: "Enterprise Network Design Case Study", desc: "Designing resilient campus networks with redundant core and distribution layers.", available: false },
    { id: 50, title: "Future Trends in Networking: Quantum & 6G", desc: "Quantum key distribution, optical switching, and horizon technologies in networking.", available: false }
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("lectureGrid");
    const searchInput = document.getElementById("searchInput");
    const resultCount = document.getElementById("resultCount");
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const modal = document.getElementById("comingSoonModal");
    const closeModal = document.querySelector(".close-modal");
    const modalCloseBtn = document.getElementById("modalCloseBtn");

    // Render Lectures
    function renderLectures(lectures) {
        grid.innerHTML = "";
        if (lectures.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">No lectures found matching your search.</div>`;
            resultCount.textContent = `Showing 0 lectures`;
            return;
        }

        resultCount.textContent = `Showing ${lectures.length} of 50 lectures`;

        lectures.forEach(lec => {
            const card = document.createElement("div");
            card.className = `lecture-card ${lec.available ? 'active' : ''}`;
            
            card.innerHTML = `
                <div>
                    <div class="card-header">
                        <span class="lecture-num">Lecture ${String(lec.id).padStart(2, '0')}</span>
                        <span class="status-badge ${lec.available ? 'available' : 'upcoming'}">
                            ${lec.available ? 'Available' : 'Upcoming'}
                        </span>
                    </div>
                    <h3>${lec.title}</h3>
                    <p>${lec.desc}</p>
                </div>
                <div class="card-footer">
                    ${lec.available 
                        ? `<a href="${lec.link}" class="btn btn-primary"><i class="fa-solid fa-book-open-reader"></i> Read Note</a>`
                        : `<button class="btn btn-secondary upcoming-trigger"><i class="fa-solid fa-lock"></i> View Note</button>`
                    }
                </div>
            `;

            // Attach event listener for upcoming buttons
            if (!lec.available) {
                const btn = card.querySelector(".upcoming-trigger");
                btn.addEventListener("click", () => {
                    modal.style.display = "flex";
                });
            }

            grid.appendChild(card);
        });
    }

    // Initial Render
    renderLectures(lecturesData);

    // Real-time Search Logic
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = lecturesData.filter(lec => 
            lec.title.toLowerCase().includes(query) || 
            lec.desc.toLowerCase().includes(query) ||
            String(lec.id).includes(query)
        );
        renderLectures(filtered);
    });

    // Modal Close Logic
    const hideModal = () => { modal.style.display = "none"; };
    closeModal.addEventListener("click", hideModal);
    modalCloseBtn.addEventListener("click", hideModal);
    window.addEventListener("click", (e) => {
        if (e.target === modal) hideModal();
    });

    // Theme Toggle Logic
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener("click", () => {
        let theme = document.documentElement.getAttribute("data-theme");
        let newTheme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === "dark") {
            themeIcon.className = "fa-solid fa-sun";
        } else {
            themeIcon.className = "fa-solid fa-moon";
        }
    }
});
