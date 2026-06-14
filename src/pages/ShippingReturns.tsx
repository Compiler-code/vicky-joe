import React from 'react';

export function ShippingReturns() {
  return (
    <div className="min-h-[60vh] max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="font-serif text-3xl md:text-4xl mb-12 border-b border-gray-100 pb-6 text-brand-primary">Shipping &amp; Returns</h1>
      
      <div className="space-y-12 text-gray-600 font-light leading-relaxed">
        <section>
          <h2 className="font-medium text-black mb-4 uppercase tracking-widest text-sm">Delivery Information</h2>
          <p className="mb-4">We proudly deliver nationwide across Nigeria. Delivery usually takes 2-5 business days depending on your location, ensuring your premium products arrive safely and promptly.</p>
          <p>Delivery fees are calculated securely at the time your order is processed via WhatsApp, taking into account the package weight and final destination.</p>
        </section>
        
        <section>
          <h2 className="font-medium text-black mb-4 uppercase tracking-widest text-sm">Return Policy</h2>
          <p className="mb-4">Your satisfaction is our priority. We offer a 30-day return policy for unopened and unused items returned in their original condition and pristine packaging.</p>
          <p>Due to hygiene considerations for cosmetics and the delicate nature of fine jewelry, any items showing signs of wear, alteration, or tampering will not be accepted for return or exchange.</p>
          <p className="mt-4 text-sm bg-brand-secondary p-4 rounded-sm border border-gray-100">
            To initiate a return, please contact our support team at <strong className="font-medium">support@vickyjoe.com</strong> or via WhatsApp, quoting your order reference.
          </p>
        </section>
      </div>
    </div>
  );
}
