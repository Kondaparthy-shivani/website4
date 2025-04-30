import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [showMapImage, setShowMapImage] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      if (Math.random() > 0.1) {
        setFormSubmitted(true);
        setFormError(false);
      } else {
        setFormError(true);
      }
    }, 1000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our products, 
            need design advice, or want to discuss a custom project, our team is here to help.
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100 hover:border-blue-200 transition-all hover:shadow-md"
          >
            <div className="bg-blue-100/80 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-500 mb-2">Our friendly team is here to help</p>
            <a href="tel:+15551234567" className="text-blue-600 font-medium hover:underline hover:text-indigo-700">
              +1 (555) 123-4567
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100 hover:border-indigo-200 transition-all hover:shadow-md"
          >
            <div className="bg-blue-100/80 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-7 w-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-500 mb-2">Come say hello at our showroom</p>
            <address className="text-blue-600 font-medium not-italic">
              123 Furniture St.<br />
              Design City, DC 12345
            </address>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100 hover:border-indigo-200 transition-all hover:shadow-md"
          >
            <div className="bg-blue-100/80 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-500 mb-2">We'll get back to you ASAP</p>
            <a href="mailto:info@elegantwood.com" className="text-blue-600 font-medium hover:underline hover:text-indigo-700">
              info@elegantwood.com
            </a>
          </motion.div>
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 p-6 rounded-lg border border-green-200 text-center"
                >
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We've received your message and will get back to you soon.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: ''
                      });
                    }}
                    className="mt-4 bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formError && (
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                      <p className="text-red-700">
                        There was an error sending your message. Please try again.
                      </p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value="">Select an option</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Product Question">Product Question</option>
                        <option value="Custom Order">Custom Order</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-sm hover:shadow-md"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Map and Business Hours */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Map Section with Toggle */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">View:</span>
                  <button
                    onClick={() => setShowMapImage(false)}
                    className={`px-3 py-1 text-sm rounded-md ${!showMapImage ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    Interactive
                  </button>
                  <button
                    onClick={() => setShowMapImage(true)}
                    className={`px-3 py-1 text-sm rounded-md ${showMapImage ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    Image
                  </button>
                </div>
              </div>
              
              {showMapImage ? (
                // Map Image Option
                <div className="relative rounded-lg overflow-hidden h-72 bg-gray-100">
                  <img 
                    src="https://sharekhaneducation.com/blog/wp-content/uploads/2022/10/Digital-map-image.jpg" 
                    alt="Map location"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x400?text=Map+Image+Not+Available';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-medium">123 Furniture St, Design City, DC 12345</p>
                    <a 
                      href="https://www.google.com/maps" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              ) : (
                // Interactive Map Placeholder
                <div className="bg-gray-200 rounded-lg overflow-hidden h-72 shadow-sm relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-blue-600/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                      <p>Would show Google Maps here</p>
                      <a 
                        href="https://www.google.com/maps" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Business Hours and Live Chat */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-indigo-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-500">Monday - Friday</span>
                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Saturday</span>
                    <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Sunday</span>
                    <span className="font-medium text-indigo-600">Closed</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-600 text-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-6 w-6 mr-2" />
                  <h3 className="text-lg font-semibold">Live Chat</h3>
                </div>
                <p className="mb-4">
                  Need immediate assistance? Chat with our customer service team.
                </p>
                <button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-lg transition-colors shadow-sm hover:shadow-md">
                  Start Chat
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our products and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-indigo-200 transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer delivery services?</h3>
              <p className="text-gray-500">
                Yes, we offer delivery within a 50-mile radius of our showroom. For locations outside this area, 
                we work with trusted shipping partners to ensure your furniture arrives safely.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-indigo-200 transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What is your return policy?</h3>
              <p className="text-gray-500">
                We offer a 30-day return policy for standard products. Custom pieces are non-returnable, 
                but we work closely with you to ensure your satisfaction throughout the design process.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-indigo-200 transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you create custom furniture?</h3>
              <p className="text-gray-500">
                Absolutely! We specialize in creating custom pieces tailored to your specific needs and preferences. 
                Contact us to discuss your project and get a personalized quote.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-indigo-200 transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does custom furniture take?</h3>
              <p className="text-gray-500">
                The timeline for custom furniture varies depending on complexity and current workflow. 
                Typically, custom pieces take 8-12 weeks from design approval to completion.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;