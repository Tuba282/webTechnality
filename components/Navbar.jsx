"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Menu } from "lucide-react";
import {
  FaPalette,
  FaCode,
  FaBullhorn,
  FaMobileAlt,
  FaPenNib,
  FaRobot,
  FaPaintBrush,
  FaGlobe,
  FaStar,
  FaImage,
  FaReact,
  FaServer,
  FaLayerGroup,
  FaDesktop,
  FaShoppingCart,
  FaTools,
  FaFacebook,
  FaGoogle,
  FaSearchDollar,
  FaAppStoreIos,
  FaApple,
  FaAndroid,
  FaMobile,
  FaExchangeAlt,
} from "react-icons/fa";

// Services data for mega menu
const servicesData = {
  Design: {
    services: [
      {
        name: "UI UX Design",
        href: "/services/ui-ux-design",
        icon: FaPaintBrush,
        description: "Creating Intuitive User Experiences That Drive Engagement."
      },
      {
        name: "User Research",
        href: "/services/ui-ux-design",
        icon: FaGlobe,
        description: "Modern And Responsive Website Designs That Convert."
      },
      {
        name: "Wireframing",
        href: "/services/ui-ux-design",
        icon: FaStar,
        description: "Building Strong Brand Identities That Stand Out."
      },
      {
        name: "Prototyping",
        href: "/services/ui-ux-design",
        icon: FaImage,
        description: "Creative Visual Solutions For All Your Needs."
      },
      {
        name: "Visual Design",
        href: "/services/ui-ux-design",
        icon: FaRobot,
        description: "Visual Solutions For All Your Design Needs."
      },
    ],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
    icon: FaPalette
  },
  Development: {
    services: [
      {
        name: "Frontend Development",
        href: "/services/web-development",
        icon: FaReact,
        description: "Building Fast And Interactive User Interfaces."
      },
      {
        name: "Backend Development",
        href: "/services/web-development",
        icon: FaServer,
        description: "Robust Server-Side Solutions And APIs."
      },
      {
        name: "Full Stack Development",
        href: "/services/web-development",
        icon: FaLayerGroup,
        description: "End-To-End Web Application Development."
      },
      {
        name: "Web App Development",
        href: "/services/web-development",
        icon: FaDesktop,
        description: "Progressive Web Apps That Work Everywhere."
      },
      {
        name: "Ecommerce Development",
        href: "/services/web-development",
        icon: FaShoppingCart,
        description: "Powerful Online Shopping Platforms."
      },
      {
        name: "Custom Website Development",
        href: "/services/web-development",
        icon: FaTools,
        description: "Tailored Solutions For Your Unique Needs."
      },
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    icon: FaCode
  },
  "Digital Marketing": {
    services: [
      {
        name: "Social Media",
        href: "/services/digital-marketing",
        icon: FaFacebook,
        description: "Strategic Social Media Campaigns That Boost Engagement."
      },
      {
        name: "PPC Advertising",
        href: "/services/digital-marketing",
        icon: FaGoogle,
        description: "Effective PPC Management Services That Ensure High ROI."
      },
      {
        name: "SEO",
        href: "/services/digital-marketing",
        icon: FaSearchDollar,
        description: "Enhancing Internet Sites For Higher Search Engine Placement."
      },
      {
        name: "App Store Optimization",
        href: "/services/digital-marketing",
        icon: FaAppStoreIos,
        description: "Improving App Visibility And Downloads In Application Stores."
      },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    icon: FaBullhorn
  },
  "Mobile Development": {
    services: [
      {
        name: "iOS",
        href: "/services/mobile-development",
        icon: FaApple,
        description: "Native iOS Apps With Superior Performance."
      },
      {
        name: "Android Development",
        href: "/services/mobile-development",
        icon: FaAndroid,
        description: "Powerful Android Applications For All Devices."
      },
      {
        name: "Flutter App",
        href: "/services/mobile-development",
        icon: FaMobile,
        description: "Cross-Platform Apps With Native Performance."
      },
      {
        name: "Hybrid App",
        href: "/services/mobile-development",
        icon: FaExchangeAlt,
        description: "Cost-Effective Multi-Platform Solutions."
      },
      {
        name: "React Native App",
        href: "/services/mobile-development",
        icon: FaReact,
        description: "Building Native Apps Using React Technology."
      },
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    icon: FaMobileAlt
  },
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Design");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faq" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`z-[100] transition-all duration-300 `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex-shrink-0 z-[110]"
            >
              <a href="/">
                <img
                  src="/logoBlackAsset2.png"
                  alt="Logo"
                  className="w-[200px] lg:w-[300px]"
                />
              </a>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setShowServicesDropdown(true)}
                  onMouseLeave={() => link.hasDropdown && setShowServicesDropdown(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <a
                      href={link.href}
                      className={`group relative px-4 py-2 text-sm xl:text-base font-medium transition-colors duration-300 flex items-center gap-1 ${
                        isScrolled
                          ? "text-gray-800 hover:text-gray-900"
                          : "text-gray-800 hover:text-gray-900"
                      }`}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            showServicesDropdown ? "rotate-180" : ""
                          }`}
                        />
                      )}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </motion.div>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {link.hasDropdown && showServicesDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 w-screen max-w-4xl z-[200]"
                        onMouseEnter={() => setShowServicesDropdown(true)}
                        onMouseLeave={() => setShowServicesDropdown(false)}
                      >
                        <div className="backdrop-blur-xl rounded-3xl shadow-2xl bg-black border border-black/20 overflow-hidden">
                          <div className="grid grid-cols-12 gap-0">
                            {/* Left Side - Categories */}
                            <div className="col-span-5 p-8 relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                              <div className="relative z-10">
                                <h3 className="text-white text-2xl font-bold mb-2">
                                  EXPLORE WIDE RANGE OF
                                </h3>
                                <h4 className="text-white/70 text-lg mb-6">
                                  SERVICES OFFERED BY WEB INVENTIX.
                                </h4>

                                <div className="relative rounded-2xl overflow-hidden mb-6 h-48 border border-white/10">
                                  <AnimatePresence mode="wait">
                                    <motion.img
                                      key={activeCategory}
                                      initial={{ opacity: 0, scale: 1.1 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.95 }}
                                      transition={{ duration: 0.4 }}
                                      src={servicesData[activeCategory].image}
                                      alt={activeCategory}
                                      className="w-full h-full object-cover"
                                    />
                                  </AnimatePresence>
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/60"></div>
                                </div>

                                <div className="space-y-2">
                                  {Object.keys(servicesData).map((category) => {
                                    const CategoryIcon = servicesData[category].icon;
                                    return (
                                      <button
                                        key={category}
                                        onMouseEnter={() => setActiveCategory(category)}
                                        className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${
                                          activeCategory === category
                                            ? "bg-white/95 text-gray-900 shadow-lg backdrop-blur-sm"
                                            : "text-white/70 hover:text-white hover:bg-white/10"
                                        }`}
                                      >
                                        <CategoryIcon className="text-xl flex-shrink-0" />
                                        <span>{category}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>

                            {/* Right Side - Services */}
                            <div className="col-span-7 p-8 bg-gradient-to-br from-gray-50/90 to-white/90 backdrop-blur-xl">
                              <AnimatePresence mode="wait">
                                <motion.div
                                  key={activeCategory}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -20 }}
                                  transition={{ duration: 0.3 }}
                                  className="space-y-3"
                                >
                                  {servicesData[activeCategory].services.map((service, idx) => {
                                    const ServiceIcon = service.icon;
                                    return (
                                      <motion.div
                                        key={service.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                      >
                                        <a
                                          href={service.href}
                                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 hover:shadow-lg hover:backdrop-blur-xl transition-all duration-300 group border border-transparent hover:border-gray-200/50"
                                        >
                                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                                            <ServiceIcon className="text-xl" />
                                          </div>
                                          <div className="flex-1">
                                            <h5 className="font-bold text-gray-900 mb-1 group-hover:text-gray-900 transition-colors">
                                              {service.name}
                                            </h5>
                                            <p className="text-sm text-gray-600">
                                              {service.description}
                                            </p>
                                          </div>
                                        </a>
                                      </motion.div>
                                    );
                                  })}
                                </motion.div>
                              </AnimatePresence>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {/* <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="hidden lg:flex items-center z-[110]"
            >
              <a
                href="/contact"
                className="relative px-6 py-2.5 bg-gradient-to-r from-gray-800 to-black text-white font-medium rounded-full overflow-hidden group"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-[110]"
            >
              <Menu className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-90 bg-white z-[160] lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <img
                    src="/logoBlackAsset2.png"
                    alt="Logo"
                    className="h-[30px] w-[200px]"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-800" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                    >
                      {link.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setShowMobileServices(!showMobileServices)}
                            className="w-full flex items-center justify-between px-2 py-2 text-lg font-semibold text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            {link.name}
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${
                                showMobileServices ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {showMobileServices && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-2 pr-2 py-2 space-y-2">
                                  {Object.keys(servicesData).map((category) => {
                                    const CategoryIcon = servicesData[category].icon;
                                    return (
                                      <div key={category}>
                                        <div className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2 px-3 py-2 bg-gray-100 rounded-lg">
                                          <CategoryIcon className="text-lg" />
                                          <span>{category}</span>
                                        </div>
                                        <ul className="space-y-1 mb-3">
                                          {servicesData[category].services.map((service) => {
                                            const ServiceIcon = service.icon;
                                            return (
                                              <li key={service.name}>
                                                <a
                                                  href={service.href}
                                                  onClick={() => setIsMobileMenuOpen(false)}
                                                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                                                >
                                                  <ServiceIcon className="text-base flex-shrink-0" />
                                                  <span>{service.name}</span>
                                                </a>
                                              </li>
                                            );
                                          })}
                                        </ul>
                                      </div>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <a
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          {link.name}
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="mt-8"
                >
                  <a
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white text-center font-semibold rounded-full hover:shadow-lg transition-shadow"
                  >
                    Get In Touch
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;