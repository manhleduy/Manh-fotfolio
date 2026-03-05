import React from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { contactFormLabels, contactFormPlaceholders } from '../../data/contact';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  isLoading: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const handleFormSubmit = async (data: ContactFormData) => {
    await onSubmit(data);
    reset();
  };

  return (
    <motion.section 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="lg:col-span-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-10 shadow-2xl"
    >
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80 ml-1">{contactFormLabels.name}</label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder={contactFormPlaceholders.name}
              className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 outline-none focus:border-white/40 focus:bg-white/10 transition-all`}
            />
            {errors.name && <span className="text-red-400 text-xs ml-1">Bạn chưa nhập tên</span>}
          </div>
          
          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80 ml-1">{contactFormLabels.email}</label>
            <input
              {...register("email", { 
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
              })}
              placeholder={contactFormPlaceholders.email}
              className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 outline-none focus:border-white/40 focus:bg-white/10 transition-all`}
            />
            {errors.email && <span className="text-red-400 text-xs ml-1">{errors.email.message==="Invalid email address"?"Email không hợp lệ":"Thiếu email "}</span>}
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80 ml-1">{contactFormLabels.subject}</label>
          <input
            {...register("subject", { required: "Subject is required" })}
            placeholder={contactFormPlaceholders.subject}
            className={`w-full bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 outline-none focus:border-white/40 focus:bg-white/10 transition-all`}
          />
          {errors.subject && <span className="text-red-400 text-xs ml-1">tin nhắn cần có chủ đề</span>}
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80 ml-1">{contactFormLabels.message}</label>
          <textarea
            {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message too short" } })}
            rows={5}
            placeholder={contactFormPlaceholders.message}
            className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 outline-none focus:border-white/40 focus:bg-white/10 transition-all resize-none`}
          />
          {errors.message && <span className="text-red-400 text-xs ml-1">tin nhắn chưa có nội dung</span>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff6b9d] to-[#c44569] text-white font-bold text-lg flex items-center justify-center gap-3 hover:shadow-[0_10px_30px_rgba(255,107,157,0.4)] hover:-translate-y-1 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <span>Gửi</span>
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
};

export default ContactForm;
