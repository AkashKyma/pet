export type FeaturedPost = {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  imageLabel: string;
  accent: string;
};

export type CategoryItem = {
  label: string;
  icon: string;
  description: string;
};

export type Article = {
  title: string;
  description: string;
  category: string;
  date: string;
  imageLabel: string;
  accent: string;
};

export const featuredPosts: FeaturedPost[] = [
  {
    category: "Pet Care",
    title: "10 Essential Tips for Keeping Your Dog Healthy",
    excerpt:
      "From balanced meals to regular enrichment, discover practical habits that keep your pup energetic, strong, and tail-wagging happy.",
    author: "Dr. Mia Harper",
    date: "June 12, 2026",
    readTime: "6 min read",
    imageLabel: "Happy golden retriever playing outdoors",
    accent: "golden"
  },
  {
    category: "Stories",
    title: "How to Create the Perfect Cozy Space for Your Cat",
    excerpt:
      "Learn how layered textures, elevated perches, and calming routines can turn any room into a dream hideaway for curious cats.",
    author: "Noah Lane",
    date: "June 9, 2026",
    readTime: "5 min read",
    imageLabel: "Relaxed cat resting on soft pillows",
    accent: "rose"
  },
  {
    category: "Reviews",
    title: "Best Toys to Keep Your Pets Happy and Active",
    excerpt:
      "We reviewed the most-loved puzzle feeders, tug toys, and boredom busters for energetic pets that crave daily fun.",
    author: "Ella Brooks",
    date: "June 6, 2026",
    readTime: "4 min read",
    imageLabel: "Playful puppy surrounded by toys",
    accent: "mint"
  }
];

export const categories: CategoryItem[] = [
  {
    label: "Dog Care",
    icon: "🐶",
    description: "Wellness, grooming, and daily routines for dogs."
  },
  {
    label: "Cat Care",
    icon: "🐱",
    description: "Calm spaces, behavior tips, and feline comfort."
  },
  {
    label: "Pet Nutrition",
    icon: "🥣",
    description: "Smart feeding guidance for every life stage."
  },
  {
    label: "Training Tips",
    icon: "🎾",
    description: "Positive reinforcement ideas and training wins."
  },
  {
    label: "Product Reviews",
    icon: "🛍️",
    description: "Tried-and-tested essentials worth adding to cart."
  },
  {
    label: "Pet Stories",
    icon: "💚",
    description: "Heartwarming tales from loving pet families."
  }
];

export const latestArticles: Article[] = [
  {
    title: "Simple Morning Habits That Help Pets Feel Secure",
    description:
      "A gentle start to the day can improve behavior, appetite, and energy for both cats and dogs.",
    category: "Pet Care",
    date: "June 14, 2026",
    imageLabel: "Dog and owner sharing a calm morning routine",
    accent: "golden"
  },
  {
    title: "5 Trainer-Approved Games for Rainy Day Energy",
    description:
      "Keep pups mentally engaged indoors with easy enrichment ideas that require minimal setup.",
    category: "Training",
    date: "June 11, 2026",
    imageLabel: "Dog enjoying an indoor puzzle game",
    accent: "forest"
  },
  {
    title: "What to Look for in High-Quality Cat Food",
    description:
      "Ingredient quality, hydration support, and texture variety all matter more than flashy packaging.",
    category: "Nutrition",
    date: "June 8, 2026",
    imageLabel: "Cat beside a thoughtfully prepared meal bowl",
    accent: "mint"
  },
  {
    title: "A Rescue Story That Turned Into a Forever Friendship",
    description:
      "Meet Luna, the tiny terrier who brought confidence and laughter back into her family home.",
    category: "Stories",
    date: "June 4, 2026",
    imageLabel: "Small rescue dog cuddled in a soft blanket",
    accent: "rose"
  },
  {
    title: "Our Favorite Travel Accessories for Weekend Getaways",
    description:
      "Portable water bottles, calming mats, and carrier upgrades for pets who love the road.",
    category: "Reviews",
    date: "June 2, 2026",
    imageLabel: "Pet travel accessories arranged on a clean surface",
    accent: "golden"
  },
  {
    title: "How Often Should You Rotate Pet Toys?",
    description:
      "A small rotation strategy keeps playtime exciting while reducing clutter and toy fatigue.",
    category: "Pet Care",
    date: "May 30, 2026",
    imageLabel: "Collection of toys for dogs and cats in pastel colors",
    accent: "forest"
  }
];

export const recentPosts = latestArticles.slice(0, 4);

export const popularCategories = [
  "Puppy Wellness",
  "Cat Comfort",
  "Treat Guides",
  "Home Training",
  "Gift Picks"
];
