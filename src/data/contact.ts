export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  
}

export const contactData: ContactInfo = {
  email: "mle529189@gmail.com",
  phone: "0906031146",
  location: "Giai Phong, Ha Noi"
};

export const socialLinks: SocialLinks = {
  linkedin: "www.linkedin.com/in/mạnh-lê-197741333",
  github: "https://github.com/manhleduy",
  
};

export const contactFormLabels = {
  name: "Your Name",
  email: "Email Address",
  subject: "Subject",
  message: "Your Message"
};

export const contactFormPlaceholders = {
  name: "",
  email: "hello@example.com",
  subject: "tôi có thể giúp gì cho bạn?",
  message: "viết lời nhắn vào đây"
};
