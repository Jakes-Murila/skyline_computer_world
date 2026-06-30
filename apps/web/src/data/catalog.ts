import type { Product } from "@skyline/shared";

export const categories = [
  "Laptops",
  "Desktop Computers",
  "Gaming PCs",
  "Workstations",
  "Monitors",
  "Networking Equipment",
  "Servers",
  "Storage Devices",
  "Components",
  "Accessories",
  "Software",
  "Office Equipment",
  "Mobile Devices",
  "Smart Devices"
];

export const products: Product[] = [
  {
    id: "p-001",
    slug: "skyline-probook-x16",
    name: "Skyline ProBook X16",
    brand: "Skyline",
    category: "Laptops",
    price: 1499,
    oldPrice: 1699,
    rating: 4.8,
    reviewCount: 214,
    availability: "In Stock",
    warranty: "3-year business warranty",
    deliveryEstimate: "2-4 business days",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Premium 16-inch productivity laptop for founders, engineers, and creative teams.",
    description: "A high-performance business notebook with a color-accurate display, enterprise-grade security, and all-day battery life.",
    specs: {
      Processor: "Intel Core Ultra 7",
      RAM: "32GB LPDDR5",
      Storage: "1TB NVMe SSD",
      Graphics: "Intel Arc",
      OS: "Windows 11 Pro"
    },
    features: ["AI-ready processor", "Fingerprint login", "Thunderbolt 4", "Wi-Fi 7"],
    tags: ["programming", "business", "16GB RAM", "Windows"],
    isBestSeller: true,
    isLatest: true
  },
  {
    id: "p-002",
    slug: "vectorforge-gaming-tower",
    name: "VectorForge RTX Gaming Tower",
    brand: "VectorForge",
    category: "Gaming PCs",
    price: 2199,
    oldPrice: 2499,
    rating: 4.9,
    reviewCount: 178,
    availability: "Limited Stock",
    warranty: "2-year parts and labor",
    deliveryEstimate: "3-5 business days",
    images: [
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "A high-refresh gaming and creator desktop with RTX graphics and liquid cooling.",
    description: "Built for esports, streaming, rendering, and immersive AAA gaming with a clean thermal layout.",
    specs: {
      Processor: "AMD Ryzen 9",
      RAM: "32GB DDR5",
      Storage: "2TB NVMe SSD",
      Graphics: "NVIDIA RTX 4080 Super",
      OS: "Windows 11 Home"
    },
    features: ["Liquid cooling", "Tempered glass case", "ARGB controls", "850W Gold PSU"],
    tags: ["gaming PC under $2500", "RTX", "creator"],
    isBestSeller: true,
    isLatest: false
  },
  {
    id: "p-003",
    slug: "clarityview-32-4k-monitor",
    name: "ClarityView 32 4K Pro Monitor",
    brand: "ClarityView",
    category: "Monitors",
    price: 699,
    oldPrice: 829,
    rating: 4.7,
    reviewCount: 92,
    availability: "In Stock",
    warranty: "3-year panel warranty",
    deliveryEstimate: "1-3 business days",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Color-accurate 4K monitor for designers, analysts, and hybrid workspaces.",
    description: "Factory calibrated with USB-C power delivery and ergonomic controls for professional studios.",
    specs: {
      Size: "32-inch",
      Resolution: "3840 x 2160",
      Refresh: "144Hz",
      Ports: "USB-C, HDMI 2.1, DisplayPort",
      Color: "98% DCI-P3"
    },
    features: ["USB-C 90W charging", "KVM switch", "Hardware calibration", "Low blue light"],
    tags: ["graphic design", "monitor", "4K"],
    isBestSeller: false,
    isLatest: true
  },
  {
    id: "p-004",
    slug: "netgrid-enterprise-switch-48",
    name: "NetGrid Enterprise Switch 48",
    brand: "NetGrid",
    category: "Networking Equipment",
    price: 1249,
    rating: 4.6,
    reviewCount: 61,
    availability: "Preorder",
    warranty: "Limited lifetime warranty",
    deliveryEstimate: "Ships from July 12",
    images: [
      "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Managed 48-port switch for branch offices, campuses, and data rooms.",
    description: "Secure Layer 3 switching, PoE+, redundant uplinks, and centralized cloud management.",
    specs: {
      Ports: "48 x Gigabit PoE+",
      Uplinks: "4 x 10G SFP+",
      Switching: "176Gbps",
      Management: "Cloud and CLI",
      Security: "802.1X, ACLs, VLANs"
    },
    features: ["PoE budget 740W", "Zero-touch provisioning", "Stacking support", "Dynamic routing"],
    tags: ["network", "switch", "business"],
    isBestSeller: false,
    isLatest: true
  }
];

export const services = [
  "Computer Repair",
  "Laptop Repair",
  "Hardware Upgrade",
  "Operating System Installation",
  "Virus Removal",
  "Data Recovery",
  "Network Installation",
  "Business IT Support",
  "Cloud Migration",
  "Cybersecurity Consultation",
  "System Maintenance"
];
