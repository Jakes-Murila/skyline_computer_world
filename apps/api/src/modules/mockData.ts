import type { Product } from "@skyline/shared";

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
    images: ["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80"],
    shortDescription: "Premium 16-inch productivity laptop.",
    description: "A high-performance business notebook with enterprise-grade security.",
    specs: { Processor: "Intel Core Ultra 7", RAM: "32GB", Storage: "1TB SSD", OS: "Windows 11 Pro" },
    features: ["AI-ready processor", "Fingerprint login", "Thunderbolt 4"],
    tags: ["programming", "business"],
    isBestSeller: true,
    isLatest: true
  }
];
