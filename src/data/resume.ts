export interface ResumeConfig {
  full_name: string;
  job_title: string;
  date_of_birth: string;
  gender: string;
  address: string;
  email: string;
  phone: string;
  career_objective: string;
  school_name: string;
  major: string;
  gpa: string;
  study_period: string;
  font_family: string;
  font_size: number;
}

export interface TimelineItem {
  id: string;
  type: 'work' | 'volunteer' | 'coming-soon';
  company_name?: string;
  position?: string;
  organization_name?: string;
  activity_role?: string;
  duration: string;
  description: string | string[];
  gradient: {
    card: string;
    badge: string;
    icon: string;
  };
  icon: string; // SVG path
}

export const defaultResumeConfig: ResumeConfig = {
  full_name: "Lê Duy Mạnh",
  job_title: "",
  date_of_birth: "19-07-2006",
  gender: "Nam",
  address: "Giải Phóng, Hà Nội",
  email: "mle529189@gmail.com",
  phone: "0906031146",
  career_objective: "Một kỹ sư phần mềm nhiệt huyết và chú trọng đến chi tiết với hơn 1 năm kinh nghiệm trong phát triển full-stack. Mong muốn tận dụng chuyên môn của tôi về các công nghệ web hiện đại và kỹ năng giải quyết vấn đề để đóng góp cho các dự án sáng tạo ra các sản phẩm chất lượng nhất, dễ bảo trì và liên tục học hỏi các công nghệ mới.",
  school_name: "Đại học Bách Khoa Hà Nội",
  major: "kĩ thuật máy tính",
  gpa: "3.4 / 4.0",
  study_period: "2024 – now",
  font_family: "Playfair Display",
  font_size: 16
};

export const timelineItems: TimelineItem[] = [
  
  {
    id: 'coming-soon',
    type: 'coming-soon',
    duration: "Coming Soon",
    description: "nhiều dự án sẽ được cập nhật trong tương lai...",
    gradient: {
      card: 'linear-gradient(135deg, rgba(100, 200, 255, 0.1), rgba(150, 100, 255, 0.1))',
      badge: 'rgba(100, 150, 255, 0.3)',
      icon: 'linear-gradient(135deg, #a8d8ff, #967aff)'
    },
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  }
];

export const contactInfo = {
  email: "hello@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  social: {
    linkedin: "#",
    github: "#",
    twitter: "#",
    instagram: "#"
  }
};

