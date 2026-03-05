import { icons } from "./const"

interface Icon{
    icon: any;
    size: number;
    right?: string;
    left?: string;
    top: string;
    alt: string;

}

const presentedIcons: Icon[]=[
    // Left side icons
    { icon: icons.docker, size: 16, left: '-200px', top: '15%', alt: 'Docker' },
    { icon: icons.git, size: 20, left: '-150px', top: '32%', alt: 'Git' },
    { icon: icons.mysql, size: 24, left: '-100px', top: '50%', alt: 'MySQL' },
    { icon: icons.nodejs, size: 20, left: '0px', top: '80%', alt: 'Node.js' },
    { icon: icons.postgresql, size: 21, left: '150px', top: '92%', alt: 'PostgreSQL' },
    { icon: icons.react, size: 25, left: '300px', top: '110%', alt: 'React' },
    // Right side icons
    { icon: icons.redis, size: 16, right: '-200px', top: '15%', alt: 'Redis' },
    { icon: icons.redux, size: 20, right: '-150px', top: '32%', alt: 'Redux' },
    { icon: icons.socket, size: 24, right: '-100px', top: '50%', alt: 'Socket.io' },
    { icon: icons.tailwind, size: 20, right: '0px', top: '80%', alt: 'Tailwind' },
    { icon: icons.typescript, size: 21, right: '150px', top: '92%', alt: 'TypeScript' },
    { icon: icons.vite, size: 25, right: '300px', top: '110%', alt: 'Vite' },
]

export const HomePageConfig = {
      main_name: "Lê Duy Mạnh",
      job_title: "Fullstack Developer Intern",
      bio_text: "Tôi là một lập trình viên full-stack đam mê với chuyên môn xây dựng các ứng dụng web có khả năng mở rộng, chuyên về các hệ sinh thái React và Node.js, mang đến trải nghiệm người dùng xuất sắc. Với con mắt tinh tường cho chi tiết và niềm yêu thích các giải pháp tinh tế, tôi biến những vấn đề phức tạp thành các thiết kế đơn giản, đẹp và trực quan.",
      projects_text: "Projects",
      resume_text: "Resume",
      primary_color: "#667eea",
      secondary_color: "#f5576c",
      text_color: "#ffffff",
      font_family: "Playfair Display",
      font_size: 16
};

export type { Icon };
export { presentedIcons };
