import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Team members data
  const teamMembers = [
    {
      name: "Emma Wilson",
      role: "Founder & Lead Designer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Emma founded ElegantWood in 2005 with a vision to create beautiful, sustainable furniture that lasts a lifetime."
    },
    {
      name: "David Kim",
      role: "Master Craftsman",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "With over 20 years of experience, David leads our workshop and ensures the highest quality standards."
    },
    {
      name: "Sophia Martinez",
      role: "Interior Design Consultant",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Sophia helps our clients find the perfect pieces to complement their spaces and create harmonious interiors."
    },
    {
      name: "Michael Johnson",
      role: "Sustainability Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Michael ensures that all our materials and processes meet the highest environmental standards."
    }
  ];

  // Timeline data
  const timeline = [
    {
      year: "2005",
      title: "The Beginning",
      description: "ElegantWood was founded in a small workshop with just three employees."
    },
    {
      year: "2010",
      title: "Expansion",
      description: "We opened our first flagship showroom and expanded our team to 15 artisans."
    },
    {
      year: "2015",
      title: "Sustainability Commitment",
      description: "We implemented a comprehensive sustainability program and achieved carbon neutrality."
    },
    {
      year: "2020",
      title: "Global Recognition",
      description: "Our designs won multiple international awards and we expanded to international markets."
    },
    {
      year: "2025",
      title: "The Future",
      description: "We continue to innovate while staying true to our core values of quality, beauty, and sustainability."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0 z-10" />
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white"
            >
              Crafting beautiful furniture with passion and precision since 2005
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At ElegantWood, we believe that furniture is more than just functional—it's an expression of who you are 
                and how you live. Our mission is to create beautiful, timeless pieces that enhance your space and stand 
                the test of time.
              </p>
              <p className="text-lg text-gray-700">
                We are committed to sustainable practices, from sourcing ethically harvested wood to minimizing waste 
                in our production process. Every piece we create is designed to last generations, reducing the need for 
                replacement and lessening environmental impact.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeIn}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Craftsmanship"
                className="rounded-lg shadow-lg"
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-blue-400 text-white p-6 rounded-lg shadow-lg max-w-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className="font-semibold">
                  "We don't just make furniture; we create heirlooms that tell stories."
                </p>
                <p className="mt-2 text-sm">— Emma Wilson, Founder</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from design to delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variants={fadeIn}
              className="bg-blue-50 p-8 rounded-lg text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to exceptional craftsmanship in every piece we create, with meticulous attention to detail.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeIn}
              className="bg-blue-50 p-8 rounded-lg text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We prioritize environmentally responsible practices and materials in all aspects of our business.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              variants={fadeIn}
              className="bg-blue-50 p-8 rounded-lg text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We blend traditional craftsmanship with contemporary design to create unique, forward-thinking furniture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talented individuals who bring our vision to life with their expertise and passion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeIn}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={fadeIn}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  From humble beginnings to where we are today, here's how our story unfolded.
                </p>
              </motion.div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />
                
                {/* Timeline events */}
                {timeline.map((event, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    variants={fadeIn}
                    className={`relative mb-16 flex ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    } md:justify-between items-center`}
                  >
                    <div className={`w-full md:w-5/12 ${index % 2 !== 0 && 'md:order-1'}`}>
                      <div className="bg-blue-50 p-6 rounded-lg shadow">
                        <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded mb-3">
                          {event.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                    
                    {/* Center dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 w-6 h-6 rounded-full border-4 border-white shadow" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image Gallery */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeIn}
              className="hidden lg:block"
            >
              <div className="sticky top-32 space-y-6">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Early Workshop"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/70 to-transparent p-4">
                    <p className="text-white font-medium">Our first workshop in 2005</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="First Showroom"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/70 to-transparent p-4">
                    <p className="text-white font-medium">Flagship showroom opening in 2010</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
                    alt="Award Ceremony"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/70 to-transparent p-4">
                    <p className="text-white font-medium">Receiving the Design Excellence Award in 2020</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Process */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Craftsmanship Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every piece of furniture we create goes through a meticulous process from concept to completion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variants={fadeIn}
              className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative mb-6 h-48 mx-auto">
                <img
                  src="https://goldenwoodfurniture.com.au/wp-content/uploads/elementor/thumbs/AdobeStock_560468823-qxk4t5tnnfm8hny2x4utukjjvhc8t8erlglzdwplyo.jpeg"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className=" text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Design & Concept</h3>
              <p className="text-gray-600">
                Our designers work closely with clients to develop concepts that match their vision and functional needs.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeIn}
              className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative mb-6 h-48 mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Material Selection"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Material Selection</h3>
              <p className="text-gray-600">
                We carefully source premium, sustainable materials that will ensure beauty and durability.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              variants={fadeIn}
              className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative mb-6 h-48 mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Crafting"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className=" text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Crafting & Assembly</h3>
              <p className="text-gray-600">
                Our master craftsmen build each piece with precision, applying traditional techniques.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={fadeIn}
              className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative mb-6 h-48 mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80"
                  alt="Finishing"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className=" text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Finishing & Quality Check</h3>
              <p className="text-gray-600">
                Each piece undergoes meticulous finishing and rigorous quality inspection before delivery.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              variants={fadeIn}
              className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative mb-6 h-48 mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Delivery"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className=" text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  5
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">White-Glove Delivery</h3>
              <p className="text-gray-600">
                Our team delivers and installs each piece with care, ensuring perfect placement in your home.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              variants={fadeIn}
              className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative mb-6 h-48 mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
                  alt="Aftercare"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className=" text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  6
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Lifetime Care</h3>
              <p className="text-gray-600">
                We offer lifetime maintenance and care advice to keep your furniture looking beautiful.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              variants={fadeIn}
              className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative mb-6 h-48 mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Customization"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className=" text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  7
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Custom Solutions</h3>
              <p className="text-gray-600">
                Our design team creates bespoke solutions for unique spaces and special requirements.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              variants={fadeIn}
              className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative mb-6 h-48 mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Sustainability"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className=" text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  8
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainable Practices</h3>
              <p className="text-gray-600">
                We continuously improve our processes to minimize environmental impact at every stage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Why Our Clients Love Us</h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <p className="italic mb-4">
                    "The quality of craftsmanship is exceptional. Our dining table has become the centerpiece of our home, 
                    and we receive compliments on it every time we have guests."
                  </p>
                  <p className="font-semibold">— Robert & Lisa Thompson</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <p className="italic mb-4">
                    "Working with the design team was a delightful experience. They listened to my needs and created 
                    custom pieces that perfectly fit my space and style."
                  </p>
                  <p className="font-semibold">— Jennifer Martinez</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="bg-white p-8 md:p-12 rounded-lg text-center shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Space?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Browse our collection or contact us to discuss custom furniture tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                Shop Collection
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;