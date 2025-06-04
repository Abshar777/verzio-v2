import { motion } from 'framer-motion';
import { BookOpen, Users, Globe, Lightbulb } from 'lucide-react';

const Vision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative px-5">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      
      {/* Animated decorative elements */}
   

      <motion.div 
        className="relative  mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6"
            variants={itemVariants}
          >
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-primary">
              Our Vision
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            Revolutionizing{' '}
            <span className="text-transparent bg-clip-text bg-primary">
              Education
            </span>
          </motion.h2>
        </div>

        {/* Main Vision Card */}
        <motion.div 
          className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50 max-w-4xl mx-auto"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
          
          <div className="relative">
            {/* Floating Icons */}
            <div className="flex justify-center gap-8 mb-8">
              {[BookOpen, Users, Globe, Lightbulb].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-2xl flex items-center justify-center"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-4 h-4 md:w-8 md:h-8 text-white" />
                </motion.div>
              ))}
            </div>
            
            <motion.p 
              className="text-md md:text-lg leading-relaxed text-gray-700 text-center font-medium"
              variants={itemVariants}
            >
              To revolutionize education by empowering teachers with advanced communication skills,
              bridging the gap between regional languages and English, and fostering a more interactive
              and future-ready classroom environment.
            </motion.p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <motion.button 
              className="px-8 py-4 cursor-pointer bg-primary text-white font-semibold rounded-xl shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href = "#contact";
              }}
              transition={{ duration: 0.2 }}
            >
              Join Our Mission
            </motion.button>
            <motion.button 
              className="px-8 py-4 cursor-pointer bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl border border-gray-200 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.95)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href = "#contact";
              }}
              transition={{ duration: 0.2 }}
            >
              Learn More
            </motion.button>
          </div>
          
          <motion.p 
            className="text-sm text-gray-500 mt-6"
            variants={itemVariants}
          >
            Transforming education for the future
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Vision;