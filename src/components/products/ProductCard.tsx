import React from 'react';
import { ShoppingCart } from 'lucide-react';
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

  return (
    <motion.a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className="card group block"
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.originalPrice && (
          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Now selling
          </div>
        )}
        



        {/* <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 bg-white text-primary p-3 rounded-full shadow-md opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-secondary hover:text-white"
          aria-label="Add to cart"
        >
          <ShoppingCart size={18} />
        </button> */}
      </div>

      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-1 group-hover:text-secondary transition-colors">{product.name}</h3>

        {/* Removed rating and reviews */}

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
    </motion.a>
  );
};

export default ProductCard;
