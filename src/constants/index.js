import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  college,
  TicTacToe,
  html,
  css,
  reactjs,
  passGenerator,
  tailwind,
  todoList,
  nodejs,
  git,
  school,
  threejs,
  TaptapGame,
  codecraft,
  AlarmApp,
  Videobridge,
  FrameMagic,
  nextjs,
  firebase,
  mongodb,
  sql,
  cloudinary,
  electronjs,
  stenomaster,
  dropshare
} from "../assets";

const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#skills",
    title: "Skills",
  },
  {
    id: "#project",
    title: "project",
  },
  {
    id: "#education",
    title: "Education",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id: "/resume.pdf",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Computer science student",
    icon: mobile,
  },
  {
    title: "Programmer",
    icon: backend,
  },
];

const technology = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Cloudinary",
    icon: cloudinary,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Electron JS",
    icon: electronjs,
  },
  {
    name: "Git",
    icon: git,
  },
];

const education = [
  {
    title: " B.Tech Computer Science Engineering",
    college: "Guru Govind Singh Indraprastha University",
    icon: college,
    iconBg: "#383E56",
    date: "Dec 2021 - August 2025",
    points: [
      "I have completed Bachelor’s of Technology in Computer Science and Engineering in New Delhi from Guru Govind Singh Indraprastha University, maintaining a CGPA of 9.3. I have completed core courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks. Alongside my academic pursuits, I have developed strong expertise in full-stack web development, with hands-on experience in technologies including HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, Node.js, Firebase, and MongoDB. I have built and deployed several real-world applications, including secure P2P systems and AI-powered platforms. I also actively contribute to innovation initiatives as a member of the Institute Innovation Council, collaborating on tech-driven solutions and student-led development projects.",
    ],
  },
  {
    title: "12th Board",
    college: "Kamal Model Sr. Sec. School",
    icon: school,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "I completed my class 12th education at Kamal model sr. sec. school, New Delhi, where i studied science non-medical and passed 12th CBSE board with 75.6%",
    ],
  },
  {
    title: "10th Board",
    college: "Kamal Model Sr. Sec. School",
    icon: school,
    iconBg: "#383E56",
    date: "March 2018 - April 2019",
    points: [
      "I completed my class 10th education at Kamal model sr. sec. school, New Delhi, and passed 10th CBSE board with 80.1%.",
    ],
  },
];

const projects = [
  {
    name: "StenoMaster - Web Platform for Stenography Training",
    description:
      "A class-based typing and shorthand learning platform tailored for stenography students and teachers. Teachers can create secure accounts, manage classes, and assign shorthand-based tasks with reference text and optional handwritten shorthand image uploads. Students log in with credentials, view assignments, and type based on visual shorthand cues. The system performs automated evaluation using lookahead and character-level comparison logic, highlighting errors and tracking typing speed, accuracy, and time taken. Data is securely stored and visualized for both students and teachers through Firebase. The decentralized architecture allows independent class management without any centralized admin panel, offering scalability for multiple educators.",
    tags: [
      { name: "NextJS", color: "green-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
      { name: "Cloudinary", color: "orange-text-gradient" },
    ],
    image: stenomaster,
    link: "https://stenomaster.vercel.app",
  },
  {
    name: "DropShare - Secure P2P File Sharing App",
    description:
      "DropShare is a cross-platform, secure file and message sharing system using a hybrid TCP/UDP networking architecture. Files are transferred in base64-encoded encrypted chunks using AES-256-CBC with RSA-2048 key exchange for maximum security. It includes a 3-way TCP handshake for metadata exchange, followed by UDP-based file transfer with unique sockets per file ID. A built-in failure handling mechanism ensures retry logic with a limit of 3 attempts per chunk. Transfers can resume from the last successfully received chunk, thanks to SQLite-based session tracking. Additionally, dynamic chunk sizing adapts to network conditions, optimizing speed while reducing CPU load. DropShare also supports simultaneous multi-device connections using LAN or hotspot mode.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "NodeJS", color: "green-text-gradient" },
      { name: "CryptoJS", color: "orange-text-gradient" },
      { name: "SQLite", color: "pink-text-gradient" },
    ],
    image: dropshare,
    link: "",
  },
  {
    name: "Frame Magic",
    description:
      "A responsive image manipulation platform built with Next.js and Tailwind CSS. Integrated advanced AI tools such as object removal, recoloring, background removal, resizing, and restoration, powered by Cloudinary. Included secure user login with Clerk and MongoDB for storing user-edited images.",
    tags: [
      { name: "NextJS", color: "green-text-gradient" },
      { name: "Tailwind", color: "blue-text-gradient" },
      { name: "MongoDB", color: "orange-text-gradient" },
      { name: "Cloudinary", color: "pink-text-gradient" },
    ],
    image: FrameMagic,
    link: "https://framemagic-connect.vercel.app/",
  },
  {
    name: "CodeCraft - Real-Time Web Code Editor",
    description:
      "A web-based code editor supporting HTML, CSS, and JavaScript, built with React.js. Features real-time output rendering, persistent storage using localStorage, and a smooth, responsive interface.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "LocalStorage", color: "pink-text-gradient" },
      { name: "Vite", color: "green-text-gradient" },
    ],
    image: codecraft,
    link: "https://connect-codecraft.vercel.app/",
  },
  {
    name: "Video Bridge",
    description:
      "A video meeting platform developed using Next.js and Tailwind CSS, integrated with Clerk for authentication and GetStream.io for real-time video and chat APIs.",
    tags: [
      { name: "NextJS", color: "pink-text-gradient" },
      { name: "Tailwind", color: "green-text-gradient" },
      { name: "APIs", color: "blue-text-gradient" },
    ],
    image: Videobridge,
    link: "https://videobridge.vercel.app/",
  },
  {
    name: "To-Do List",
    description:
      "A browser-based task manager built using HTML, CSS, and JavaScript. Features task creation, editing, completion marking, and local storage for data persistence, with a clean, user-friendly UI.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: todoList,
    link: "https://shubham-mishra-2003.github.io/To-Do-List-shubham-mishra/",
  },
  {
    name: "Tic-Tac-Toe Game",
    description:
      "A web-based game built with React.js and Vite featuring interactive gameplay, move history, game status messages, and responsive design. Includes game reset and winner detection logic.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "Vite", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: TicTacToe,
    link: "http://tictactoe.shubhammishra.surge.sh/",
  },
  {
    name: "Random Password Generator",
    description:
      "A simple password generation tool built using HTML, CSS, and JavaScript. Allows users to generate random secure passwords with options for symbols, numbers, and case sensitivity.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: passGenerator,
    link: "https://shubham-mishra-2003.github.io/PasswordGenerator/",
  },
  {
    name: "Alarm App",
    description:
      "A React-based alarm clock application built with Vite and Tailwind CSS. Includes alarm scheduling, snooze functionality, and custom tones within a clean modern UI.",
    tags: [
      { name: "ReactJS", color: "pink-text-gradient" },
      { name: "Vite", color: "green-text-gradient" },
      { name: "Tailwind", color: "blue-text-gradient" },
    ],
    image: AlarmApp,
    link: "https://alarmapp-shubhammishra.vercel.app/",
  },
  {
    name: "Tap Tap Game App",
    description:
      "An interactive tapping game built with React and Vite. Players tap targets to increase their score. Features local storage-based score saving and leaderboard system.",
    tags: [
      { name: "ReactJS", color: "pink-text-gradient" },
      { name: "Vite", color: "green-text-gradient" },
      { name: "Tailwind", color: "blue-text-gradient" },
    ],
    image: TaptapGame,
    link: "https://taptapgame-shubhammishra.vercel.app/",
  },
];

const links = {
  resume: "/resume.pdf",
  github: "https://github.com/shubham-mishra-2003",
  linkedIn: "https://www.linkedin.com/in/shubhammishra2511/",
  GMail: "mailto:shubhammishra3070.@gmail.com",
};

export { navLinks, services, technology, education, projects, links };
