import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfoSection from '../components/Contact/ContactInfo';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    // Simulate API call
    console.log('Form Data:', data);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);

    // Hide success toast after 4 seconds
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div className="mt-20 min-h-screen text-white font-['Playfair_Display',serif] relative overflow-hidden page-enter bg-hero">
      
      {/* Success Toast */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            initial={{ y: -100, x: '-50%', opacity: 0 }}
            animate={{ y: 20, x: '-50%', opacity: 1 }}
            exit={{ y: -100, x: '-50%', opacity: 0 }}
            className="fixed top-0 left-1/2 z-50 pointer-events-none"
          >
            <div className="bg-emerald-500 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 border border-emerald-400/50">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">Message sent successfully!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
        
        {/* Header */}
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Liên lạc với tôi
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
          >
            Luôn sẵn sang trả lời bất cứ lúc nào
          </motion.p>
        </header>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          
          {/* Contact Form Section */}
          <ContactForm onSubmit={onSubmit} isLoading={isLoading} />

          {/* Contact Info Sidebar */}
          <aside className="lg:col-span-2 space-y-8">
            <ContactInfoSection />
          </aside>

        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/10 blur-[100px] rounded-full -z-10" />
    </div>
  );
};

export default Contact;