import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { User, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Form Submitted!", {
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="w-full h-full pb-10 relative overflow-hidden">
        <div className="dot-container"></div>
      <motion.div
        className="flex justify-center items-center"
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
    >

      <motion.div
        className="relative scale-90 md:w-1/2 w-[95%] mb-5 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50"
        whileHover={{
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl"></div>

        <div className="relative">
          <motion.h3
            className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            variants={inputVariants}
          >
            Get Started Today
          </motion.h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={inputVariants} className="relative">
              <Label
                htmlFor="name"
                className="text-gray-700 font-medium flex items-center gap-2"
              >
                <User className="w-4 h-4 text-blue-600" />
                Full Name
              </Label>
              <div className="relative mt-2">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-gradient-to-r from-blue-50 to-purple-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                  placeholder="Enter your full name"
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </motion.div>

            <motion.div variants={inputVariants} className="relative">
              <Label
                htmlFor="email"
                className="text-gray-700 font-medium flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                Email Address
              </Label>
              <div className="relative mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-gradient-to-r from-blue-50 to-purple-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                  placeholder="Enter your email address"
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </motion.div>

            <motion.div variants={inputVariants} className="relative">
              <Label
                htmlFor="phone"
                className="text-gray-700 font-medium flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                Phone Number
              </Label>
              <div className="relative mt-2">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-gradient-to-r from-blue-50 to-purple-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                  placeholder="Enter your phone number"
                />
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </motion.div>

            <motion.div className="pt-4" variants={inputVariants}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Join Our Mission
              </Button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </motion.div>
    </section>
  );
};

export default ContactForm;
