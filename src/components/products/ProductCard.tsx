import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { Product } from '../../data/products';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  // Calculate average rating
  const avgRating = product.reviews.reduce((total, review) => total + review.rating, 0) / product.reviews.length;
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="card group"
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.originalPrice && (
            <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Sale
            </div>
          )}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 right-4 bg-white text-primary p-3 rounded-full shadow-md opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-secondary hover:text-white"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-gray-800 mb-1 group-hover:text-secondary transition-colors">{product.name}</h3>
          
          <div className="flex items-center mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < Math.round(avgRating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="ml-1 text-xs text-gray-500">({product.reviews.length})</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              {product.originalPrice ? (
                <div className="flex items-center">
                  <span className="font-semibold text-gray-800">₦{product.price.toLocaleString()}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">₦{product.originalPrice.toLocaleString()}</span>
                </div>
              ) : (
                <span className="font-semibold text-gray-800">₦{product.price.toLocaleString()}</span>
              )}
            </div>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 capitalize">{product.category}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;