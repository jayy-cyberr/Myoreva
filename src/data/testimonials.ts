export interface Testimonial {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Adebayo Johnson",
    location: "Lagos",
    comment: "I've been using MYOREVA's products for over a year now, and the quality is consistently excellent. Their herbal tea has become a daily ritual for me, and their customer service is top-notch.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Chiamaka Okafor",
    location: "Abuja",
    comment: "The natural skincare products from MYOREVA have transformed my skin. I love that they use locally sourced ingredients and the packaging is eco-friendly too!",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Emmanuel Nwachukwu",
    location: "Port Harcourt",
    comment: "As someone who values natural products, I appreciate MYOREVA's commitment to quality and authenticity. Their immune boosting supplements have helped me stay healthy through two flu seasons.",
    rating: 4,
    image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Fatima Ibrahim",
    location: "Kano",
    comment: "Fast delivery and amazing products! I ordered the shea butter moisturizer and it arrived within 2 days. The quality is beyond what I expected. Will definitely order again.",
    rating: 5,
    image: "https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    name: "Oluwaseun Adeyemi",
    location: "Ibadan",
    comment: "Being from Ibadan, I love that I can support a local business that produces such high-quality wellness products. The mosquito repellent spray works wonders during rainy season!",
    rating: 5,
    image: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];