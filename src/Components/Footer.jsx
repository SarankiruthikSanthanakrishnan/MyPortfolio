import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800 py-4 text-center text-sm">
      <div>All Rights Reserved</div>
      <div>Copyright © SARAN KIRUTHIK S S | {currentYear}</div>
      <div className="mt-2 flex items-center justify-center gap-4">
        <Phone className="w-4 h-4 inline" />
        <a className="text-gray-800 underline" href="tel:+918072682003">
          +91 8072682003
        </a>
        <span className="text-gray-400">•</span>
        <Mail className="w-4 h-4 inline" />
        <a
          className="text-gray-800 underline"
          href="mailto:skiruthik2510@gmail.com"
        >
          skiruthik2510@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
