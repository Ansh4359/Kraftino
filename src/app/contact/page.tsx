"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface ContactFormData {
  fullName: string;
  emailAddress: string;
  company: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    emailAddress: "",
    company: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants: any = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const headerVariants: any = {
    hidden: { 
      opacity: 0, 
      y: -40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const formFieldVariants: any = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardHoverVariants: any = {
    rest: {
      scale: 1,
      y: 0
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const floatingElementVariants: any = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      scale: [1, 1.1, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const messageVariants: any = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Email address is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.emailAddress)) {
        newErrors.emailAddress = "Please enter a valid email address";
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (formData.phoneNumber.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      const cleanPhone = formData.phoneNumber.replace(/[\s\-\(\)]/g, "");
      if (!phoneRegex.test(cleanPhone) || cleanPhone.length < 10) {
        newErrors.phoneNumber = "Please enter a valid phone number";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({});
    setSubmitStatus(null);

    if (!validateForm()) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Frontend - Submitting form data:", formData);
      
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Frontend - Response status:", response.status);

      const responseText = await response.text();
      console.log("Frontend - Raw response body:", responseText);

      try {
        const responseData = JSON.parse(responseText);
        console.log("Frontend - Parsed response data:", responseData);

        if (response.ok) {
          console.log("Frontend - Success! Email should be sent.");
          setSubmitStatus("success");
          setFormData({
            fullName: "",
            emailAddress: "",
            company: "",
            phoneNumber: "",
            subject: "",
            message: "",
          });
        } else {
          console.error("Frontend - Error response:", responseData);
          setSubmitStatus("error");
        }
      } catch {
        console.error("Frontend - Could not parse response as JSON:", responseText);
        if (response.ok) {
          setSubmitStatus("success");
          setFormData({
            fullName: "",
            emailAddress: "",
            company: "",
            phoneNumber: "",
            subject: "",
            message: "",
          });
        } else {
          setSubmitStatus("error");
        }
      }
    } catch (error) {
      console.error("Frontend - Network error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"
          variants={floatingElementVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-40 right-32 w-24 h-24 bg-purple-500 rounded-full blur-2xl"
          variants={floatingElementVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-indigo-500 rounded-full blur-3xl"
          variants={floatingElementVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-28 h-28 bg-cyan-500 rounded-full blur-2xl"
          variants={floatingElementVariants}
          animate="animate"
          style={{ animationDelay: '3s' }}
        />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16"
            variants={headerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-300"
              animate={shouldReduceMotion ? {} : {
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Contact Us
            </motion.h1>

            <motion.div 
              className="max-w-3xl mx-auto mb-16"
              variants={itemVariants}
            >
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Ready to transform your business with cutting-edge technology
                  solutions? Get in touch with our expert team to discuss how
                  TaxaGO can help you with consultancy services to drive your success.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form and Info Grid */}
          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <motion.div 
                className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl"
                whileHover={{ 
                  backgroundColor: "rgb(255 255 255 / 0.1)",
                  scale: 1.01
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex items-center mb-8"
                  variants={formFieldVariants}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    Send us a Message
                  </h2>
                </motion.div>

                <motion.form onSubmit={handleSubmit}>
                  <motion.div 
                    className="space-y-6"
                    variants={containerVariants}
                  >
                    {/* Name and Email Row */}
                    <motion.div 
                      className="grid md:grid-cols-2 gap-6"
                      variants={formFieldVariants}
                    >
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Full Name *
                        </label>
                        <motion.input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                            errors.fullName
                              ? "border-red-500 focus:ring-red-500"
                              : "border-white/20 focus:ring-blue-500"
                          }`}
                          placeholder="John Doe"
                          whileFocus={{ 
                            borderColor: errors.fullName ? "rgb(239 68 68)" : "rgb(59 130 246)",
                            boxShadow: errors.fullName ? "0 0 0 2px rgba(239, 68, 68, 0.5)" : "0 0 0 2px rgba(59, 130, 246, 0.5)"
                          }}
                        />
                        <AnimatePresence>
                          {errors.fullName && (
                            <motion.p 
                              className="mt-1 text-sm text-red-400"
                              variants={messageVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                            >
                              {errors.fullName}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <label
                          htmlFor="emailAddress"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Email Address *
                        </label>
                        <motion.input
                          type="email"
                          id="emailAddress"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                            errors.emailAddress
                              ? "border-red-500 focus:ring-red-500"
                              : "border-white/20 focus:ring-blue-500"
                          }`}
                          placeholder="john@company.com"
                          whileFocus={{ 
                            borderColor: errors.emailAddress ? "rgb(239 68 68)" : "rgb(59 130 246)",
                            boxShadow: errors.emailAddress ? "0 0 0 2px rgba(239, 68, 68, 0.5)" : "0 0 0 2px rgba(59, 130, 246, 0.5)"
                          }}
                        />
                        <AnimatePresence>
                          {errors.emailAddress && (
                            <motion.p 
                              className="mt-1 text-sm text-red-400"
                              variants={messageVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                            >
                              {errors.emailAddress}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>

                    {/* Company and Phone Row */}
                    <motion.div 
                      className="grid md:grid-cols-2 gap-6"
                      variants={formFieldVariants}
                    >
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Company
                        </label>
                        <motion.input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your Company"
                          whileFocus={{ 
                            borderColor: "rgb(59 130 246)",
                            boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)"
                          }}
                        />
                      </motion.div>

                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <label
                          htmlFor="phoneNumber"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Phone Number
                        </label>
                        <motion.input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                            errors.phoneNumber
                              ? "border-red-500 focus:ring-red-500"
                              : "border-white/20 focus:ring-blue-500"
                          }`}
                          placeholder="+91 XXXXXXXXXX"
                          whileFocus={{ 
                            borderColor: errors.phoneNumber ? "rgb(239 68 68)" : "rgb(59 130 246)",
                            boxShadow: errors.phoneNumber ? "0 0 0 2px rgba(239, 68, 68, 0.5)" : "0 0 0 2px rgba(59, 130, 246, 0.5)"
                          }}
                        />
                        <AnimatePresence>
                          {errors.phoneNumber && (
                            <motion.p 
                              className="mt-1 text-sm text-red-400"
                              variants={messageVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                            >
                              {errors.phoneNumber}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>

                    {/* Subject Field */}
                    <motion.div variants={formFieldVariants}>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Subject *
                      </label>
                      <motion.input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                          errors.subject
                            ? "border-red-500 focus:ring-red-500"
                            : "border-white/20 focus:ring-blue-500"
                        }`}
                        placeholder="How can we help you?"
                        whileFocus={{ 
                          scale: 1.02,
                          borderColor: errors.subject ? "rgb(239 68 68)" : "rgb(59 130 246)",
                          boxShadow: errors.subject ? "0 0 0 2px rgba(239, 68, 68, 0.5)" : "0 0 0 2px rgba(59, 130, 246, 0.5)"
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                      <AnimatePresence>
                        {errors.subject && (
                          <motion.p 
                            className="mt-1 text-sm text-red-400"
                            variants={messageVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            {errors.subject}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Message Field */}
                    <motion.div variants={formFieldVariants}>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Message *
                      </label>
                      <motion.textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none ${
                          errors.message
                            ? "border-red-500 focus:ring-red-500"
                            : "border-white/20 focus:ring-blue-500"
                        }`}
                        placeholder="Tell us about your project or requirements..."
                        whileFocus={{ 
                          scale: 1.02,
                          borderColor: errors.message ? "rgb(239 68 68)" : "rgb(59 130 246)",
                          boxShadow: errors.message ? "0 0 0 2px rgba(239, 68, 68, 0.5)" : "0 0 0 2px rgba(59, 130, 246, 0.5)"
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p 
                            className="mt-1 text-sm text-red-400"
                            variants={messageVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Submit Status Messages */}
                    <AnimatePresence>
                      {submitStatus === "success" && (
                        <motion.div 
                          className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                          variants={messageVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <p className="text-green-300 text-sm">
                            Message sent successfully! We&apos;ll get back to you soon.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {submitStatus === "error" && (
                        <motion.div 
                          className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
                          variants={messageVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <p className="text-red-300 text-sm">
                            {Object.keys(errors).length > 0
                              ? "Please fix the errors above and try again."
                              : "Failed to send message. Please try again."}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                      whileHover={!isSubmitting ? { 
                        scale: 1.05,
                        boxShadow: "0 25px 50px -12px rgba(6 182 212 / 0.25)"
                      } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20 
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <motion.svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </motion.svg>
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </span>
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-md"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </motion.div>
                </motion.form>
              </motion.div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {/* Office Location */}
              <motion.div 
                className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl"
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Office Location</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  TaxaGO Consultancy Services<br/>
                  KH-827, NEAR BANK OF BARODA,<br/>
                  BAMANHERI, MUZAFFARNAGAR <br/>Uttar Pradesh - 251001
                </p>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl"
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                </div>
                <p className="text-gray-300 text-sm">taxagocs@gmail.com</p>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl"
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  +91 9999473062<br />+91 8475956557
                </p>
              </motion.div>

              {/* Business Hours */}
              <motion.div 
                className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl"
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM EST<br />
                  <span className="text-gray-400">Closed weekends</span>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating elements */}
      {[
        { size: 4, color: 'blue', top: '25%', left: '2.5%', delay: 0 },
        { size: 3, color: 'cyan', top: '33%', right: '5%', delay: 1 },
        { size: 2, color: 'purple', bottom: '33%', left: '25%', delay: 2 },
        { size: 5, color: 'indigo', bottom: '25%', right: '33%', delay: 0.5 }
      ].map((dot, index) => (
        <motion.div
          key={index}
          className={`absolute w-${dot.size} h-${dot.size} bg-${dot.color}-400 rounded-full opacity-60`}
          style={{
            top: dot.top,
            bottom: dot.bottom,
            left: dot.left,
            right: dot.right
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay
          }}
        />
      ))}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </div>
  );
};

export default ContactUs;
