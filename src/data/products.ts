export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  featured: boolean;
  link:string;
  bestSeller: boolean;
  description: string;
  details: string;
  ingredients?: string;
  howToUse?: string;
  reviews: {
    rating: number;
    user: string;
    comment: string;
    date: string;
  }[];
}
import Hbesty from '../assets/products/Hbesty.jpg';
import Hbest from '../assets/products/Hbesty2.png';
import campGas from'../assets/products/campgas.jpg';
import campGa from'../assets/products/campgas2.jpg';

// Sample product data
export const products: Product[] = [
  {
    id: 1,
    name: "Wart-Remover",
    price: 13500,
    // originalPrice: 15000,
    image: Hbesty,
    category: "health",
    featured: true,
    link: "https://sabimarket.com.ng/wart-remover/",
    bestSeller: true,
    description: "A soothing herbal tea blend with natural ingredients to promote wellness and relaxation.",
    details: "Our premium herbal tea blend combines carefully selected herbs and botanicals to create a soothing and healthful beverage. Enjoy the rich flavors and wellness benefits in every cup.",
    ingredients: "Chamomile, Peppermint, Lavender, Lemongrass, Hibiscus.",
    howToUse: "Add one teaspoon to hot water. Steep for 3-5 minutes. Enjoy up to 3 cups daily.",
    reviews: [
      {
        rating: 9,
        user: "Oluwaseun A.",
        comment: "This tea is amazing! I drink it every evening and it helps me relax after a long day.",
        date: "2025-01-15"
      },
      {
        rating: 7,
        user: "Chidi E.",
        comment: "Great taste and quality. Will buy again.",
        date: "2025-01-02"
      }
    ]
  },
  {
    id: 2,
    name: "Camping Gas Stove",
    price: 38500,
    // originalPrice: 45000,
    image: campGas,
    category: "household",
    featured: true,
    link: "https://sabimarket.com.ng/camp-gas/",
    bestSeller: false,
    description: "Rich, organic shea butter moisturizer for soft, supple skin.",
    details: "Our organic shea butter moisturizer is handcrafted with premium ingredients to nourish and hydrate your skin. The rich, creamy formula absorbs quickly without leaving a greasy residue.",
    ingredients: "Organic Shea Butter, Coconut Oil, Jojoba Oil, Vitamin E, Essential Oils.",
    howToUse: "Apply a small amount to clean skin. Massage gently until absorbed. Use daily for best results.",
    reviews: [
      {
        rating: 10,
        user: "Amina J.",
        comment: "My skin has never felt better! This moisturizer is perfect for the dry season.",
        date: "2025-02-10"
      }
    ]
  },
  {
    id: 3,
    name: "Wart-Remover",
     price: 13500,
    // originalPrice: 15000,
    image: Hbest,
    category: "beauty",
    featured: false,
    link: "https://sabimarket.com.ng/wart-remover/",
    bestSeller: true,
    description: "Chemical-free mosquito repellent spray made with essential oils.",
    details: "Our natural mosquito repellent spray offers effective protection without harmful chemicals. The special blend of essential oils creates a barrier that mosquitoes find unpleasant, while being gentle on your skin and the environment.",
    ingredients: "Purified Water, Citronella Oil, Lemongrass Oil, Eucalyptus Oil, Neem Extract.",
    howToUse: "Shake well before use. Spray on exposed skin and clothing. Reapply every 3-4 hours or as needed.",
    reviews: [
      {
        rating: 4,
        user: "Tunde O.",
        comment: "Works well and smells pleasant. Much better than chemical alternatives.",
        date: "2025-02-22"
      },
      {
        rating: 5,
        user: "Blessing I.",
        comment: "My entire family uses this spray. It's effective and doesn't irritate our skin.",
        date: "2025-03-01"
      }
    ]
  },
  {
    id: 4,
    name: "Camping Gas Stove",
    price: 38500,
    // originalPrice: 45000,
    image: campGa,
    category: "household",
    featured: true,
    link: "https://sabimarket.com.ng/camp-gas/",
    bestSeller: true,
    description: "Natural supplement to boost your immune system and support overall health.",
    details: "Our immune support supplement contains a powerful blend of vitamins, minerals, and herbs that work together to strengthen your body's natural defenses. Regular use helps maintain optimal immune function.",
    ingredients: "Vitamin C, Zinc, Echinacea, Elderberry Extract, Ginger Root.",
    howToUse: "Take 2 capsules daily with food. For best results, use consistently as part of a healthy lifestyle.",
    reviews: [
      {
        rating: 5,
        user: "Dr. Emmanuel N.",
        comment: "I recommend this supplement to my patients. The quality and effectiveness are excellent.",
        date: "2025-01-30"
      }
    ]
  },
  // {
  //   id: 5,
  //   name: "African Black Soap",
  //   price: 1200,
  //   image: "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   category: "beauty",
  //   featured: false,
  //   bestSeller: false,
  //   description: "Traditional African black soap for cleansing and treating skin conditions.",
  //   details: "Our authentic African black soap is handcrafted using traditional methods and ingredients. It gently cleanses while helping to soothe and heal various skin conditions, including acne, eczema, and dry skin.",
  //   ingredients: "Plantain Skin Ash, Cocoa Pod Ash, Palm Oil, Shea Butter, Coconut Oil.",
  //   howToUse: "Lather with water and apply to face or body. Rinse thoroughly. Use daily for best results.",
  //   reviews: [
  //     {
  //       rating: 5,
  //       user: "Joy K.",
  //       comment: "This soap cleared my acne in just two weeks! Amazing product.",
  //       date: "2025-02-15"
  //     },
  //     {
  //       rating: 4,
  //       user: "Michael A.",
  //       comment: "Good quality and works well for my sensitive skin.",
  //       date: "2025-02-28"
  //     }
  //   ]
  // },
  // {
  //   id: 6,
  //   name: "Natural Air Freshener",
  //   price: 1500,
  //   image: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   category: "household",
  //   featured: false,
  //   bestSeller: false,
  //   description: "Chemical-free air freshener with essential oils for a natural, pleasant fragrance.",
  //   details: "Our natural air freshener uses pure essential oils to create a refreshing atmosphere in your home without harsh chemicals or artificial fragrances. The spray bottle design makes it easy to use in any room.",
  //   ingredients: "Purified Water, Witch Hazel, Essential Oil Blend (Lavender, Lemon, Eucalyptus).",
  //   howToUse: "Shake well before use. Spray into the air as needed. Avoid spraying directly on fabrics or surfaces.",
  //   reviews: [
  //     {
  //       rating: 4,
  //       user: "Nneka P.",
  //       comment: "Love the fresh scent! It's not overwhelming like commercial air fresheners.",
  //       date: "2025-03-05"
  //     }
  //   ]
  // },
  // {
  //   id: 7,
  //   name: "Moringa Powder Supplement",
  //   price: 3000,
  //   image: "https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   category: "health",
  //   featured: false,
  //   bestSeller: true,
  //   description: "Pure moringa leaf powder packed with nutrients and antioxidants.",
  //   details: "Our premium moringa powder is made from organically grown moringa leaves, carefully processed to preserve maximum nutritional value. This superfood is rich in vitamins, minerals, and plant compounds that support overall health and wellness.",
  //   ingredients: "100% Pure Organic Moringa Leaf Powder.",
  //   howToUse: "Add 1-2 teaspoons to smoothies, juices, or food. Can be consumed 1-2 times daily.",
  //   reviews: [
  //     {
  //       rating: 5,
  //       user: "Fatima L.",
  //       comment: "I add this to my morning smoothie every day. It gives me energy and I've noticed improved digestion.",
  //       date: "2025-02-18"
  //     },
  //     {
  //       rating: 5,
  //       user: "Samuel T.",
  //       comment: "High quality product, you can really taste the difference.",
  //       date: "2025-03-01"
  //     }
  //   ]
  // },
  // {
  //   id: 8,
  //   name: "Organic Coconut Oil",
  //   price: 2000,
  //   originalPrice: 2500,
  //   image: "https://images.pexels.com/photos/4110401/pexels-photo-4110401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   category: "beauty",
  //   featured: true,
  //   bestSeller: true,
  //   description: "Pure, cold-pressed coconut oil for skin, hair, and cooking.",
  //   details: "Our organic coconut oil is cold-pressed from fresh coconuts to preserve its natural nutrients and fresh aroma. This versatile oil can be used for cooking, as a skin moisturizer, hair conditioner, or makeup remover.",
  //   ingredients: "100% Pure Organic Cold-Pressed Coconut Oil.",
  //   howToUse: "For skin: Apply directly to clean skin. For hair: Apply to damp hair, leave for 30 minutes, then wash. For cooking: Use as directed in recipes.",
  //   reviews: [
  //     {
  //       rating: 5,
  //       user: "Grace O.",
  //       comment: "I use this for everything! My skin loves it, and it's great for cooking too.",
  //       date: "2025-01-25"
  //     },
  //     {
  //       rating: 4,
  //       user: "David E.",
  //       comment: "Good quality coconut oil. No strange odors or additives.",
  //       date: "2025-02-10"
  //     }
  //   ]
  // }
];

// Utility function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Utility function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

// Utility function to get bestselling products
export const getBestSellingProducts = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

// Utility function to get a product by ID
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

// Utility function to search products
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery)
  );
};