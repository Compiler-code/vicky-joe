import React from 'react';

export function Faq() {
  return (
    <div className="min-h-[60vh] max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="font-serif text-3xl md:text-4xl mb-12 border-b border-gray-100 pb-6 text-brand-primary">Frequently Asked Questions</h1>
      
      <div className="space-y-8 text-gray-600 font-light leading-relaxed">
        <section className="bg-brand-secondary/30 p-6 rounded-sm border border-gray-50">
          <h2 className="font-medium text-black mb-2 text-sm uppercase tracking-widest">Are your products authentic?</h2>
          <p>Yes, 100% Guaranteed. We source our cosmetics and jewelry directly from the brands and authorized luxury distributors. Every item is verified for uncompromising quality and authenticity before it reaches you.</p>
        </section>
        
        <section className="bg-brand-secondary/30 p-6 rounded-sm border border-gray-50">
          <h2 className="font-medium text-black mb-2 text-sm uppercase tracking-widest">How do I track my order?</h2>
          <p>Once your order is seamlessly processed via WhatsApp, our dedicated team will provide you with dispatch updates and a direct tracking number applicable to our courier partners.</p>
        </section>
        
        <section className="bg-brand-secondary/30 p-6 rounded-sm border border-gray-50">
          <h2 className="font-medium text-black mb-2 text-sm uppercase tracking-widest">Do you offer wholesale?</h2>
          <p>Currently, our focus is delivering the finest direct-to-consumer experiences. However, wholesale or bulk luxury gifting options may be available depending on the season. Please reach out to our team directly for all corporate and bulk inquiries.</p>
        </section>
      </div>
    </div>
  );
}
