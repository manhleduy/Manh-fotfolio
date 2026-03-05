import { icons } from "./const"

export type Skill = {
  name: string
  level: string
  percentage: number
  icon: string
  gradient: string
  projects?: number
  codeSnippet?: string
  size?: number
}

export type GitCommand = {
  name: string
  command: string
  description: string
  icon: string
}

export type DockerService = {
  name: string
  icon: string
  color: string
}

export type ToolAdvantage = {
  title: string
  description: string
  icon: string
}

export type Tool = {
  name: string
  icon: string
  gradient: string
  gitCommands?: GitCommand[]
  dockerServices?: DockerService[]
  advantages?: ToolAdvantage[]
}

export type TechnicalSkillCategory = {
  frontend: Skill[]
  backend: Skill[]
  database: Skill[]
}
export type LanguageSkillsProps={
  label: string;
  level: string;
  flag: string;
  percentage: number;
  color: string;
  desc: string;

}
export interface SoftSkillProps {
  icon: string;
  title: string;
  desc: string;
  gradient: string;
  delay: number;
  
}
export const technicalSkills: TechnicalSkillCategory = {
  frontend: [
    {
      name: 'React.js',
      level: 'chuyên gia',
      percentage: 75,
      icon: icons.react,
      gradient: 'from-cyan-400 via-blue-500 to-cyan-600'
    },
    {
      name: 'TypeScript',
      level: 'nâng cao',
      percentage: 70,
      icon: icons.typescript,
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Tailwind CSS',
      level: 'chuyên gia',
      percentage: 60,
      icon: icons.tailwind,
      gradient: 'from-cyan-400 to-blue-600'
    },
    {
      name: 'Redux',
      level: 'nâng caod',
      percentage:60,
      icon: icons.redux,
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Next.js',
      level: 'nâng caod',
      percentage: 40,
      icon: icons.nextjs,
      gradient: 'from-gray-400 to-gray-600'
    }
  ],
  backend: [
    {
      name: 'Redis',
      level: 'Nâng cao',
      percentage: 40,
      icon: icons.redis,
      gradient: 'from-green-400 to-emerald-600'
    },
    {
      name: 'Express.js',
      level: 'Nâng cao',
      percentage: 70,
      icon: icons.express,
      gradient: 'from-amber-300 to-orange-500'
    },
    {
      name: 'Javascript',
      level: 'Trung bình',
      percentage: 70,
      icon: icons.javascript,
      gradient: 'from-blue-400 to-blue-700'
    },
    {
      name: 'Socket.io',
      level: 'Trung bình',
      percentage: 50,
      icon: icons.socket,
      gradient: 'from-pink-400 to-rose-600'
    },
    {
      name: 'Nodejs',
      level: 'Trung bình',
      percentage: 80,
      icon: icons.nodejs,
      gradient: 'from-indigo-400 to-indigo-600'
    }
  ],
  database: [
    {
      name: 'PostgreSQL',
      level: 'Nâng cao',
      percentage: 70,
      size:2000,
      icon: 'postgresql.svg',
      gradient: 'from-blue-400 to-cyan-600',
      projects: 3,
      codeSnippet: `CREATE TABLE employees (
        employee_id SERIAL PRIMARY KEY,
        department_id INT,
        FOREIGN KEY (department_id) REFERENCES departments(department_id)
      );`
    },
    {
      name: 'MySQL',
      level: 'nâng caod',
      percentage: 60,
      icon: 'mysql.svg',
      size:1200,
      gradient: 'from-orange-400 to-orange-600',
      projects: 4,
      codeSnippet: `SELECT COUNT(*) as total,
       status,
       AVG(amount) as avg_amount
FROM orders
GROUP BY status;`
    },
    {
      name: 'MongoDB',
      level: 'nâng caod',
      percentage: 50,
      size: 800,
      icon: 'mongodb.svg',
      gradient: 'from-green-400 to-emerald-600',
      projects: 2,
      codeSnippet: `const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});`
    },
    {
      name: 'Cloudinary',
      level: 'nâng caod',
      percentage: 30,
      size: 500,
      icon: 'cloudinary',
      gradient: 'from-sky-400 to-blue-600',
      projects: 3,
      codeSnippet: `cloudinary.uploader.upload('image.jpg', {
  folder: 'portfolio',
  resource_type: 'auto'
}, (err, result) => {
  console.log(result.secure_url);
});`
    }
  ]
}
export const softSkills: SoftSkillProps[] = [
  {icon:"💬", title: "Giao tiếp", desc: "Dể dàng giao tiếp hòa đồng với mọi người", gradient:"from-pink-500/20 to-rose-500/10", delay: 0.1 },
  {icon:"🤝", title:"Teamwork", desc:"Collaborative mindset and cross-functional synergy", gradient:"from-blue-500/20 to-cyan-500/10", delay:0.2},
  {icon:"🧩", title:"Problem Solving", desc:"Analytical thinking and creative solutions", gradient:"from-amber-500/20 to-orange-500/10", delay:0.3},
  {icon:"⏰", title:"Time Management" ,desc:"Prioritization and deadline-driven execution", gradient:"from-emerald-500/20 to-green-500/10", delay:0.4},
  {icon:"🔄", title:"Adaptability" ,desc:"Flexible approach to change and new challenges", gradient:"from-violet-500/20 to-purple-500/10", delay:0.5}
]

export const tools: Tool[] = [
  {
    name: 'Git',
    icon: 'git.svg',
    gradient: 'from-orange-400 to-red-600',
    gitCommands: [
      {
        name: 'Commit',
        command: 'git commit -m "message"',
        description: 'lưu trữ các thay đổi',
        icon: '💾'
      },
      {
        name: 'Push',
        command: 'git push origin main',
        description: 'Upload commits',
        icon: '📤'
      },
      {
        name: 'Pull',
        command: 'git pull origin main',
        description: 'tải về các thay đổi gần đây',
        icon: '📥'
      },
      {
        name: 'Merge',
        command: 'git merge feature-branch',
        description: 'kết hợp các nhánh',
        icon: '🔀'
      }
    ]
  },
  {
    name: 'Docker',
    icon: 'docker.svg',
    gradient: 'from-blue-400 to-cyan-600',
    dockerServices: [
      {
        name: 'Frontend',
        icon: 'react.svg',
        color: 'from-cyan-400 to-blue-500'
      },
      {
        name: 'Backend',
        icon: 'nodejs.svg',
        color: 'from-green-400 to-emerald-500'
      },
      {
        name: 'Database',
        icon: 'mongodb.svg',
        color: 'from-green-400 to-teal-500'
      },
      {
        name: 'Cache',
        icon: 'redis.svg',
        color: 'from-red-400 to-orange-500'
      }
    ]
  },
  {
    name: 'Sentry',
    icon: 'sentry.svg',
    gradient: 'from-purple-400 to-pink-600',
    advantages: [
      {
        title: 'Error Tracking',
        description: 'theo dõi các lỗi xảy ra',
        icon: '🐛'
      },
      {
        title: 'Performance',
        description: 'theo dõi các API request nhằm phát hiện bottlenecks',
        icon: '⚡'
      },
      {
        title: 'Analytics',
        description: 'cung cấp chi tiết hành vi người dùng',
        icon: '📊'
      },
      {
        title: 'Integration',
        description: 'dễ dàng integrate vào các dự án',
        icon: '🔗'
      }
    ]
  },
  {
    name: 'Visual Studio Code',
    icon: 'vscode',
    gradient: 'from-blue-400 to-purple-600',
    advantages: [
      {
        title: 'Extensions',
        description: 'Có nhiều thư viện khác nhau',
        icon: '🧩'
      },
      {
        title: 'IntelliSense',
        description: 'Khả năng gợi ý code thông minh',
        icon: '🧠'
      },
      {
        title: 'Debugging',
        description: 'Dễ dàng debug',
        icon: '🔍'
      },
      {
        title: 'Lightweight',
        description: 'Phổ biến và dỗ dàng sử dụng',
        icon: '⚙️'
      }
    ]
  }
]
export const languageSkills: LanguageSkillsProps[] =[
  { label: 'Vietnamese', level: 'Bản xứ', flag: '🇻🇳', percentage: 100, color: 'from-cyan-500 to-blue-500', desc: 'Ngôn ngữ bản xứ' },
  { label: 'English', level: 'C1', flag: '🇬🇧', percentage: 80, color: 'from-emerald-500 to-green-500', desc: 'Khả năng đọc hiểu tốt và giao tiếp chuyên nghiệp' },
]

export const backendFooter=[
          { val: "5", label: 'Tech Stack', color: 'text-green-400' },
          { val: '10', label: 'Projects', color: 'text-emerald-400' },
          { val: '1', label: 'Years Exp', color: 'text-teal-400' }
        ]
export default technicalSkills

