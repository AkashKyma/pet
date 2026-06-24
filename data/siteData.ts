export type NavItem = {
  label: string;
  href: string;
};

export type Product = {
  name: string;
  category: string;
  price: string;
  badge: string;
  description: string;
  emoji: string;
};

export type DeliveryStep = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Brand = {
  name: string;
  specialty: string;
  description: string;
  monogram: string;
};

export type BlogPost = {
  title: string;
  category: string;
  description: string;
  date: string;
  readTime: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Delivery and Payment", href: "/delivery-payment" },
  { label: "Brands", href: "/brands" },
  { label: "Blog", href: "/blog" }
];

export const featuredProducts: Product[] = [
  {
    name: "CloudSoft Calming Bed",
    category: "Beds",
    price: "$84",
    badge: "Best Seller",
    description: "Orthopedic support, plush edges, and a washable cover for deep post-walk naps.",
    emoji: "🛏️"
  },
  {
    name: "Mint Meadow Harness",
    category: "Walks",
    price: "$32",
    badge: "New",
    description: "Lightweight step-in fit with soft lining and reflective stitching for evening strolls.",
    emoji: "🦮"
  },
  {
    name: "Slow Feast Bowl",
    category: "Feeding",
    price: "$26",
    badge: "Vet Pick",
    description: "Premium ceramic feeder that helps calm speedy eaters and keeps mealtime tidy.",
    emoji: "🥣"
  },
  {
    name: "PawJoy Play Set",
    category: "Toys",
    price: "$29",
    badge: "Bundle",
    description: "Three enrichment toys designed for tugging, sniffing, and rainy-day energy bursts.",
    emoji: "🎾"
  },
  {
    name: "Daily Shine Grooming Kit",
    category: "Grooming",
    price: "$48",
    badge: "Popular",
    description: "A soft-bristle brush, gentle shampoo, and coat mist for premium home grooming.",
    emoji: "🧴"
  },
  {
    name: "Travel Sip Bottle",
    category: "Travel",
    price: "$21",
    badge: "Easy Carry",
    description: "Leak-resistant hydration bottle made for park days, road trips, and quick refills.",
    emoji: "🚗"
  }
];

export const shopCategories = ["All", "Beds", "Walks", "Feeding", "Toys", "Grooming", "Travel"];

export const deliveryHighlights = [
  "Free delivery on orders over $60",
  "Same-day dispatch for weekday orders placed before 2 PM",
  "Tracked delivery updates from checkout to doorstep"
];

export const paymentMethods = ["Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay", "Cash on Delivery"];

export const deliveryTimeline: DeliveryStep[] = [
  {
    title: "Order confirmed",
    description: "You receive an instant confirmation email with a clear summary of your pet picks."
  },
  {
    title: "Packed with care",
    description: "Our team prepares each order in secure, recyclable packaging within 24 business hours."
  },
  {
    title: "On the way",
    description: "Tracked shipping takes 2–4 business days locally and 4–7 business days for regional delivery."
  },
  {
    title: "Delivered cozy and safe",
    description: "You get a delivery notification when the parcel arrives, plus support if anything looks off."
  }
];

export const faqs: FaqItem[] = [
  {
    question: "Can I pay on delivery?",
    answer: "Yes. Cash on delivery is available in supported local zones and is shown at checkout when eligible."
  },
  {
    question: "Do you offer international shipping?",
    answer: "We currently ship across selected regions with clear rates shown at checkout before payment."
  },
  {
    question: "What if my pet product arrives damaged?",
    answer: "Contact CozyPaws support within 48 hours and we will arrange a replacement or refund promptly."
  },
  {
    question: "Can I change my order after paying?",
    answer: "If your order has not shipped yet, our support team can usually update quantities, sizes, or address details."
  }
];

export const featuredBrands: Brand[] = [
  {
    name: "Pawfect Pantry",
    specialty: "Natural nutrition",
    description: "Clean ingredient treats and mealtime upgrades formulated for everyday wellness.",
    monogram: "PP"
  },
  {
    name: "Whisker Nest",
    specialty: "Cat comfort",
    description: "Cozy hideaways, calming scratchers, and elevated essentials for curious cats.",
    monogram: "WN"
  },
  {
    name: "TailTrail",
    specialty: "Adventure gear",
    description: "Durable leashes, carriers, and travel accessories built for active pet families.",
    monogram: "TT"
  },
  {
    name: "Kind Coat",
    specialty: "Gentle grooming",
    description: "Premium coat care with soothing formulas for sensitive skin and soft finishes.",
    monogram: "KC"
  },
  {
    name: "Nuzzle Home",
    specialty: "Sleep & rest",
    description: "Supportive beds and calming blankets that blend cleanly into modern interiors.",
    monogram: "NH"
  },
  {
    name: "Bright Bark",
    specialty: "Play & training",
    description: "Thoughtful toys and enrichment tools that keep pets mentally engaged every day.",
    monogram: "BB"
  }
];

export const featuredPosts: BlogPost[] = [
  {
    title: "How to build a calmer bedtime routine for anxious pups",
    category: "Wellness",
    description: "A gentle evening routine with scent cues, low light, and soft textures can turn bedtime into a reset.",
    date: "June 22, 2026",
    readTime: "5 min read"
  },
  {
    title: "What premium cat parents actually buy twice",
    category: "Shopping",
    description: "The products that earn repeat orders usually combine durability, comfort, and low-fuss cleanup.",
    date: "June 19, 2026",
    readTime: "4 min read"
  },
  {
    title: "Trainer-approved enrichment ideas for tiny apartments",
    category: "Training",
    description: "These compact games keep pets mentally active even when your square footage is small.",
    date: "June 15, 2026",
    readTime: "6 min read"
  }
];

export const latestArticles: BlogPost[] = [
  {
    title: "5 travel essentials for stress-free vet visits",
    category: "Travel",
    description: "Small prep details can make a short trip feel safer for pets and easier for humans.",
    date: "June 24, 2026",
    readTime: "3 min read"
  },
  {
    title: "The feeding station upgrade that cuts cleanup time",
    category: "Feeding",
    description: "Raised mats, splash guards, and bowl placement matter more than you think.",
    date: "June 21, 2026",
    readTime: "4 min read"
  },
  {
    title: "How to rotate toys so playtime keeps working",
    category: "Play",
    description: "A simple rotation system keeps familiar toys exciting without constant new purchases.",
    date: "June 17, 2026",
    readTime: "4 min read"
  },
  {
    title: "What makes a pet bed feel truly orthopedic",
    category: "Sleep",
    description: "Support depth, edge structure, and washable fabrics all affect comfort and longevity.",
    date: "June 13, 2026",
    readTime: "5 min read"
  }
];