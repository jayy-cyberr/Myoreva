import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProductById, getProductsByCategory } from '../data/products';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/products/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [activeImage, setActiveImage] = useState(0);
  const [openSection, setOpenSection] = useState<string | null>('description');

  const product = getProductById(Number(productId));

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="btn btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const productImages = [
    product.image,
    "https://images.pexels.com/photos/4464821/pexels-photo-4464821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  return (
    <div className="bg-background py-8 md:py-12">
      <div className="container-custom">
        <div className="mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
            <div>
              <div className="mb-4 overflow-hidden rounded-lg">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={productImages[activeImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="flex gap-2">
                {productImages.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                      activeImage === idx ? 'border-secondary' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>

              <div className="mb-6">
                {product.originalPrice ? (
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-800">₦{product.price.toLocaleString()}</span>
                    <span className="ml-2 text-gray-500 line-through">₦{product.originalPrice.toLocaleString()}</span>
                    <span className="ml-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-gray-800">₦{product.price.toLocaleString()}</span>
                )}
                <p className="text-sm text-green-600 mt-1">In Stock</p>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex">
                  <button
                    onClick={decrementQuantity}
                    className="bg-gray-100 hover:bg-gray-200 p-2 rounded-l-md"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={18} />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-16 text-center border-y border-gray-200"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="bg-gray-100 hover:bg-gray-200 p-2 rounded-r-md"
                    aria-label="Increase quantity"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary flex-1 flex items-center justify-center"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
                <Link
                  to="/checkout"
                  className="btn bg-primary text-white hover:bg-primary/90 flex-1 flex items-center justify-center"
                  onClick={handleAddToCart}
                >
                  Buy Now
                </Link>
              </div>

              <div className="text-sm text-gray-600">
                <p>Category: <span className="capitalize">{product.category}</span></p>
                <p>SKU: MYOREVA-{product.id.toString().padStart(4, '0')}</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block border-t border-gray-200">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-6 py-3 font-medium text-sm ${
                  activeTab === 'description'
                    ? 'border-b-2 border-secondary text-secondary'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Description
              </button>
              {product.ingredients && (
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`px-6 py-3 font-medium text-sm ${
                    activeTab === 'ingredients'
                      ? 'border-b-2 border-secondary text-secondary'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Ingredients
                </button>
              )}
              {product.howToUse && (
                <button
                  onClick={() => setActiveTab('how-to-use')}
                  className={`px-6 py-3 font-medium text-sm ${
                    activeTab === 'how-to-use'
                      ? 'border-b-2 border-secondary text-secondary'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  How to Use
                </button>
              )}
            </div>

            <div className="p-6">
              {activeTab === 'description' && (
                <div>
                  <p className="text-gray-700">{product.details}</p>
                </div>
              )}
              {activeTab === 'ingredients' && product.ingredients && (
                <div>
                  <p className="text-gray-700">{product.ingredients}</p>
                </div>
              )}
              {activeTab === 'how-to-use' && product.howToUse && (
                <div>
                  <p className="text-gray-700">{product.howToUse}</p>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden border-t border-gray-200 px-6 pb-6">
            <div className="divide-y divide-gray-200">
              <div className="py-4">
                <button
                  onClick={() => toggleSection('description')}
                  className="flex justify-between items-center w-full"
                >
                  <span className="font-medium">Description</span>
                  {openSection === 'description' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <AnimatePresence>
                  {openSection === 'description' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-700 mt-2">{product.details}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {product.ingredients && (
                <div className="py-4">
                  <button
                    onClick={() => toggleSection('ingredients')}
                    className="flex justify-between items-center w-full"
                  >
                    <span className="font-medium">Ingredients</span>
                    {openSection === 'ingredients' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  <AnimatePresence>
                    {openSection === 'ingredients' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-700 mt-2">{product.ingredients}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
              {product.howToUse && (
                <div className="py-4">
                  <button
                    onClick={() => toggleSection('how-to-use')}
                    className="flex justify-between items-center w-full"
                  >
                    <span className="font-medium">How to Use</span>
                    {openSection === 'how-to-use' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  <AnimatePresence>
                    {openSection === 'how-to-use' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-700 mt-2">{product.howToUse}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
