"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FiMenu, 
  FiX, 
  FiUser, 
  FiBook, 
  FiBriefcase, 
  FiMail, 
  FiCode, 
  FiLayout,
  FiChevronRight,
  FiHome,
  FiArrowLeft
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const menuItems = [
    {
      title: "Dashboard",
      href: "/resume",
      icon: <FiHome className="text-xl" />,
      color: "text-blue-500"
    },
    {
      title: "Personal Info",
      href: "/resume/personal-info",
      icon: <FiUser className="text-xl" />,
      color: "text-purple-500"
    },
    {
      title: "Education",
      href: "/resume/education",
      icon: <FiBook className="text-xl" />,
      color: "text-green-500"
    },
    {
      title: "Experience",
      href: "/resume/experience",
      icon: <FiBriefcase className="text-xl" />,
      color: "text-yellow-500"
    },
    {
      title: "Contact",
      href: "/resume/contact",
      icon: <FiMail className="text-xl" />,
      color: "text-pink-500"
    },
    {
      title: "Skills & Languages",
      href: "/resume/skills",
      icon: <FiCode className="text-xl" />,
      color: "text-red-500"
    },
    {
      title: "Templates",
      href: "/resume/template",
      icon: <FiLayout className="text-xl" />,
      color: "text-indigo-500"
    }
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    closed: {
      x: isMobile ? -300 : 0,
      width: isMobile ? 0 : 80,
      opacity: isMobile ? 0 : 1,
    },
    open: {
      x: 0,
      width: isMobile ? 280 : 280,
      opacity: 1,
    }
  };

  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-50 md:hidden p-3 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
          isOpen ? "rotate-90" : ""
        }`}
      >
        {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
      </button>

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <motion.aside
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed md:relative top-0 left-0 h-screen z-40 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl overflow-hidden"
            style={{ width: isMobile ? 280 : 280 }}
          >
            {/* Sidebar Header */}
            <div className="p-6 border-b border-gray-700/50">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">R</span>
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-lg">Resume Builder</h2>
                    <p className="text-gray-400 text-sm">Professional CV Creator</p>
                  </div>
                </div>
                {!isMobile && (
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FiArrowLeft className="text-xl" />
                  </button>
                )}
              </div>
              
              {/* Progress Indicator */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Profile Completion</span>
                  <span className="text-orange-400 font-semibold">65%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                    initial={{ width: 0 }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="p-4 space-y-1">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => isMobile && setIsOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 group ${
                        isActive
                          ? "bg-gradient-to-r from-orange-500/20 to-red-500/20 border-l-4 border-orange-500"
                          : "hover:bg-gray-700/50"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`${item.color} ${isActive ? "scale-110" : ""} transition-transform`}>
                          {item.icon}
                        </div>
                        <span className={`font-medium ${
                          isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                        }`}>
                          {item.title}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="w-2 h-2 rounded-full bg-orange-500"
                          />
                        )}
                        <FiChevronRight className={`text-gray-400 transition-transform group-hover:translate-x-1 ${
                          isActive ? "text-orange-400" : ""
                        }`} />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Sidebar Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700/50">
              <div className="space-y-4">
                {/* Download Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Download CV</span>
                  <FiChevronRight className="text-xl" />
                </motion.button>
                
                {/* Preview Button */}
                <button className="w-full bg-gray-800 text-gray-300 font-semibold py-3 rounded-xl hover:bg-gray-700 transition-all duration-300 border border-gray-700">
                  Preview Resume
                </button>
                
                {/* User Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-700/50">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">John Doe</p>
                    <p className="text-gray-400 text-xs">Last saved: 2 min ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-red-500/10 rounded-full blur-3xl" />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Collapsed Sidebar for Desktop when closed */}
      {!isOpen && !isMobile && (
        <div className="relative h-screen w-20 bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl">
          <button
            onClick={toggleSidebar}
            className="absolute top-6 left-1/2 transform -translate-x-1/2 p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
          >
            <FiMenu className="text-xl" />
          </button>
          <div className="pt-20 space-y-6">
            {menuItems.slice(0, 3).map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex flex-col items-center p-3 text-gray-400 hover:text-white transition-colors group"
                title={item.title}
              >
                <div className="text-xl mb-1">{item.icon}</div>
                <span className="text-xs truncate">{item.title.split(" ")[0]}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
