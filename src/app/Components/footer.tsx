'use client'
import React, { useState } from 'react';
import { Linkedin, Facebook, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      // Handle subscription logic here
      console.log('Subscribing email:', email);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Social Media */}
          <div className="space-y-6">
            
            <div className="text-2xl font-bold tracking-wider">
              TaxaGO™
              <div className="text-xs text-gray-400 mt-1">
                Consultancy Services
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-4">FOLLOW US</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Get In Touch */}
          <Link href="/contact">
          <div>
            <h3 className="text-sm font-medium mb-4 text-orange-400 border-b-2 border-orange-400 pb-1 inline-block">
              Get In Touch
            </h3>
          </div>
          </Link>

          {/* Careers */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-orange-400 border-b-2 border-orange-400 pb-1 inline-block">
              Careers
            </h3>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-orange-400 border-b-2 border-orange-400 pb-1 inline-block">
              Subscribe
            </h3>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="flex-1 px-4 py-2 bg-white text-gray-900 rounded-l-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                onClick={handleSubscribe}
                className="bg-orange-400 text-white px-6 py-2 rounded-r-sm hover:bg-orange-500 transition-colors font-medium"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Legal Statement
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              User Agreement
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              CCPA Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookies Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Copy Right Policy
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            © 2025 Copyright By TaxaGO. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}