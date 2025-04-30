import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Exquisite Craftsmanship",
      description: "Handcrafted furniture made with passion and precision."
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Modern Elegance",
      description: "Contemporary designs for the modern home."
    },
    {
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Timeless Classics",
      description: "Furniture that stands the test of time."
    }
  ];

  const categories = [
    {
      name: "Living Room",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Bedroom",
      image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Dining",
      image: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Office",
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Leather Armchair",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      price: 599,
      rating: 4.8
    },
    {
      id: 2,
      name: "Wooden Coffee Table",
      image: "https://fleck.co.in/cdn/shop/products/Skog_Solid_wood_coffee_table_by_Fleck.jpg?v=1745549643",
      price: 349,
      rating: 4.5
    },
    {
      id: 3,
      name: "Modern Sofa",
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 1299,
      rating: 4.9
    },
    {
      id: 4,
      name: "Minimalist Bookshelf",
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      price: 249,
      rating: 4.7
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      review: "The quality of the furniture exceeded my expectations. The attention to detail is remarkable!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      review: "Elegant designs and sturdy construction. My living room has never looked better!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      review: "Fast delivery and amazing customer service. Will definitely shop here again!",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  ];

  const designers = [
    {
      name: "Emma Wilson",
      role: "Head Designer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "David Kim",
      role: "Senior Craftsman",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Sophia Martinez",
      role: "Interior Stylist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
                <div className="max-w-3xl">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-4"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-white mb-8"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <Link
                      to="/products"
                      className="inline-flex items-center bg-blue-500 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-sm hover:shadow-md"
                    >
                      Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-indigo-600' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our curated collections of premium furniture for every room.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-all"
              >
                <div className="aspect-w-1 aspect-h-1 w-full h-80">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900">Featured Products</h2>
            <Link
              to="/products"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
            >
              View All <ArrowRight className="ml-1 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <div className="flex items-center space-x-1 mt-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                </div>
                <p className="text-lg font-semibold text-indigo-600">${product.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Craftsmanship</h2>
              <p className="text-lg text-gray-700 mb-6">
                At ElegantWood, we believe that furniture is not just functional—it's a work of art. 
                Our master craftsmen combine traditional techniques with modern innovation to create 
                pieces that are both beautiful and enduring.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Each piece is meticulously handcrafted using sustainably sourced materials, 
                ensuring that our furniture is not only stunning but also environmentally responsible.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
              >
                Learn More About Us <ArrowRight className="ml-1 w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Craftsmanship"
                className="rounded-xl shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1617098900591-3f90928e8c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Furniture Details"
                className="absolute -bottom-8 -left-8 w-2/3 rounded-xl shadow-sm border-4 border-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it—hear from our satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{review.review}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Designers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Meet Our Designers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The creative minds behind our beautiful furniture collections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designers.map((designer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden shadow-sm">
                  <img
                    src={designer.image}
                    alt={designer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{designer.name}</h3>
                <p className="text-indigo-600">{designer.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-50 text-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
              <p className="text-lg mb-6">
                Subscribe to our newsletter for exclusive offers, design tips, and new collection announcements.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-lg flex-grow text-dark-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors shadow-sm hover:shadow-md"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;