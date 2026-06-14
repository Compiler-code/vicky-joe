import React from 'react';

export function Contact() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 max-w-3xl mx-auto py-16">
      <h1 className="font-serif text-3xl mb-6 text-brand-primary">Contact Us</h1>
      <p className="text-gray-500 text-center leading-relaxed">
        We would love to hear from you. For inquiries regarding our collections, your orders, or general advice, please reach out directly:
      </p>
      
      <div className="mt-12 space-y-6 text-center">
        <div>
          <h2 className="text-xs tracking-widest uppercase font-semibold text-black mb-2">Email</h2>
          <p className="text-gray-500 font-light">support@vickyjoe.com</p>
        </div>
        <div>
          <h2 className="text-xs tracking-widest uppercase font-semibold text-black mb-2">WhatsApp / Phone</h2>
          <p className="text-gray-500 font-light">+234 708 438 2462</p>
        </div>
        <div>
          <h2 className="text-xs tracking-widest uppercase font-semibold text-black mb-2">Hours</h2>
          <p className="text-gray-500 font-light">Monday &mdash; Saturday, 9am &mdash; 6pm WAT</p>
        </div>
      </div>
    </div>
  );
}
