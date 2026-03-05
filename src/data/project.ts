import { icons } from "./const"

export type Tech = {
  name: string
  reason: string
  // a small key used to choose an icon in the UI component
  icon?: string
  snippet: string
}

export type Project = {
  id: string
  title: string
  description: string
  // optional screenshot or illustration for the project; can be a URL or local path
  image?: string
  frontend: Tech[]
  backend: Tech[]
  database: Tech[]
  tool?: Tech[]
  links?: {
    frontend?: string
    backend?: string
    github?: string
    livedemo?: string
  },
  
  // language usage array for chart (name + percentage)
  languages: { name: string; value: number }[]
  size: string,
  production: boolean
}

export const projects: Project[] = [
  {
    id: 'manh-chat',
    title: 'Manh-Chat',
    description: "Xây dựng một ứng dụng chat thời gian thực với nhắn tin, chia sẻ hình ảnh/tệp, bài viết, bạn bè và nhóm. Các tính năng thời gian thực sử dụng socket; đăng ký qua OTP.",
    // placeholder; replace with actual screenshot file later
    image: icons.chatAppImage,
    frontend: [
      { name: 'React', reason: 'Thư viện giao diện người dùng phổ biến cho các ứng dụng dựa trên thành phần', icon: icons.react, snippet: "react-hook-form, react-router-dom, react-hot-toast" },
      { name: 'TypeScript', reason: 'phù hợp cho các dự án lớn', icon: icons.typescript, snippet:"HOC , useDeBouce, useListenSocket" },
      { name: 'Tailwind CSS', reason: 'giúp phát triển dự án một cách nhanh chóng', icon: icons.tailwind, snippet:"tailwind.config.ts daisyui" },
      { name: 'Redux', reason: 'quản lí trạng thái trong cả dự án', icon: icons.redux,snippet:"redux-toolkit redux-persist" }
    ],
    backend: [
      { name: 'Node.js', reason: 'Môi trường chạy javascript cho các dịch vụ backend', icon: icons.nodejs, snippet: "expressjs, socket.io" },
      { name: 'Express', reason: 'web framework', icon: icons.express, snippet:"bcrypts, jwt, nodemailer, nodemon" },
      { name: 'Socket.io', reason: 'Realtime event-based communication', icon: icons.socket, snippet:"socket.io, socket.io-client" }
    ],
    database: [
        { name: 'PostgreSQL', reason: 'cấu trúc dữ liệu quan hệ', icon: icons.postgresql, snippet:"DEPENDENCIES, FOREIGN KEY, JOIN, REFERENCE" },
        { name: "Redis", reason: "caching data", icon: icons.redis, snippet:"redis redis-stream redis-cli"}
    ],
    tool:[
        {name: "Docker" , reason: "dockerize cả dự án cùng frontend, backend, database và redis", icon: icons.docker, snippet:"docker-dompose, volume"}
    ],

    links: {
      frontend: 'https://github.com/manhleduy/ManhChat-frontend',
      backend: 'https://github.com/manhleduy/ManhChat-backend',
    },
    languages: [
      { name: 'TypeScript', value: 65 },
      { name: 'JavaScript', value: 20 },
      { name: 'CSS', value: 10 },
      { name: 'Khác', value: 5 }
    ],
    size: 'large',
    production: false
  },

  {
    id: 'manh-foodie',
    title: 'Manh Foodie',
    image: icons.foodieImage,
    description:
      'Một ứng dụng web PERN-stack để đặt thức ăn, với giỏ hàng và các chỉ số chi tiêu đơn giản. Sử dụng useContext cho trạng thái và Prisma để ánh xạ cơ sở dữ liệu.',
    frontend: [
      { name: 'React', reason: 'Giao diện người dùng dựa trên thành phần', icon: icons.react, snippet:" react-router-dom, react-hot-toast, react-chart" },
      { name: 'TypeScript', reason: 'phù hợp cho các dự án lớn', icon: icons.typescript, snippet:"ts.config.json" },
      { name: 'Tailwind CSS', reason: 'nhanh chóng phát triển dự án', icon: icons.tailwind , snippet:"tailwind.config.ts"},
      { name: 'Shadcn UI', reason: 'dễ dàng xây dựng giao diện người dùng', icon: icons.shadcn , snippet:"drodown-menu " }
    ],
    backend: [
      { name: 'Node.js', reason: 'môi trường chạy javascript cho các dịch vụ backend', icon: icons.nodejs, snippet:"express" },
      { name: 'Express', reason: 'HTTP framework', icon: icons.express, snippet:"jwt call API" },
    ],
    database: [{ name: 'PostgreSQL', reason: 'cấu trúc dữ liệu quan hệ', icon: icons.postgresql, snippet:"FOREIGN KEY, JOIN" }],
    links: {
      frontend: 'https://github.com/manhleduy/ManhFoodie-frontend',
      backend: 'https://github.com/manhleduy/ManhFoodie-backend',
      livedemo: 'https://manh-foodie-frontend.vercel.app/'
    },
    languages: [
      { name: 'TypeScript', value: 55 },
      { name: 'JavaScript', value: 25 },
      { name: 'SQL', value: 15 },
      { name: 'Khác', value: 5 }
    ],
    size:"large",
    production : true
  },

  {
    id: 'react-docker',
    title: 'React-Docker',
    description: 'Thử nghiệm với Docker Compose để quản lý các dịch vụ frontend, backend và cơ sở dữ liệu.',
    frontend: [
      { name: 'React', reason: 'UI library', icon: icons.react, snippet: "" },
      { name: 'TypeScript', reason: 'Types', icon: icons.typescript, snippet: "react-hook-form  docker" }],
    backend: [
      { name: 'Node.js', reason: 'Backend runtime', icon: icons.nodejs, snippet:"express" },
      { name: 'Express', reason: 'Framework', icon: icons.express, snippet:"docker-compose" }],
    database: [
      { name: 'mySQL', reason: 'cơ sở dữ liệu quan hệ', icon: icons.mysql, snippet:"SELECT" }
    ],
    links: { 
      github: 'https://github.com/manhleduy/react-docker-test'
     },
    languages: [
      { name: 'TypeScript', value: 60 },
      { name: 'Dockerfile', value: 20 },
      { name: '', value: 10 },
      { name: 'Khác', value: 10 }
    ],
    size:"large",
    production: false
  }
]

export default projects
