import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { contactData, socialLinks } from '../../data/contact';

interface InfoItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  delay: number;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon: Icon, label, value, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-start gap-4"
  >
    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 animate-bounce-slow">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <p className="text-white/60 text-sm mb-1">{label}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  </motion.div>
);

interface SocialLinkProps {
  icon: React.ElementType;
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon: Icon, href, label }) => (
  <motion.a
    href={href}
    aria-label={label}
    whileHover={{ y: -3, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
    className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
  >
    <Icon className="w-5 h-5 text-white" />
  </motion.a>
);

const ContactInfoSection: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-10 flex flex-col"
    >
      <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
      
      <div className="space-y-8 flex-1">
        <InfoItem icon={Mail} label="Email" value={contactData.email} delay={0.1} />
        <InfoItem icon={Phone} label="Phone" value={contactData.phone} delay={0.2} />
        <InfoItem icon={MapPin} label="Location" value={contactData.location} delay={0.3} />
      </div>

      {/* Social Links */}
      <div className="mt-12 pt-8 border-t border-white/10">
        <p className="text-white/60 text-sm mb-5">Connect with us</p>
        <div className="flex gap-3 flex-wrap">
          <SocialLink icon={Linkedin} href={socialLinks.linkedin} label="LinkedIn" />
          <SocialLink icon={Github} href={socialLinks.github} label="GitHub" />
          
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfoSection;
