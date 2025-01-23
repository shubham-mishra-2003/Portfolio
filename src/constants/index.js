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
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "project",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experience = [
  {
    title: " B.Tech Computer Science Engineering",
    company_name: "Guru Govind Singh Indraprastha University",
    icon: college,
    iconBg: "#383E56",
    date: "Dec 2021 - August 2025",
    points: [
      "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at HMR Institute of Technology and management, New Delhi. I have completed 4 semesters and have a CGPA of 8.1 . I have taken courses - Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, Programming in java, programming in C++, programming in C, among others. I am also a member of the Institute Innovation Council at HMRITM.",
    ],
  },
  {
    title: "12th Board",
    company_name: "Kamal Model Sr. Sec. School",
    icon: school,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "I completed my class 12th education at Kamal model sr. sec. school, New Delhi, where i studied science non-medical and passed 10th CBSE board with 75.6%",
    ],
  },
  {
    title: "10th Board",
    company_name: "Kamal Model Sr. Sec. School",
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
    name: "To-Do List",
    description:
      "I developed a feature-rich to-do list web application using HTML, CSS, and JavaScript, showcasing my proficiency in front-end web development. The project includes browser storage integration for storing tasks persistently, along with a user-friendly interface for adding, editing, and removing tasks. Users can mark tasks as done for better task management, and a Clear button allows for the removal of completed tasks, ensuring a clutter-free list. Importantly, the application is designed to function seamlessly without page refresh, providing users with an uninterrupted experience. This project demonstrates my practical skills in creating dynamic and interactive web applications, highlighting my expertise in HTML, CSS, and JavaScript, and emphasizing my understanding of user experience and data persistence, making it a valuable addition to my portfolio.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: todoList,
    link: "https://shubham-mishra-2003.github.io/To-Do-List-shubham-mishra/",
  },
  {
    name: "Tic-Tac-Toe Game",
    description:
      "The TicTacToe Game project is a web-based game developed using React.js and the Vite framework, highlighting the developer's expertise in front-end web development and state management. The project features interactive gameplay where players can place 'X' or 'O' on the game board, a game history that records moves, and dynamic styling for various screen sizes. It also includes a winning logic algorithm and a user-friendly interface with clear game status messages. Users can reset the game at any point. Technologies used in the project include React.js, Vite, CSS, PropTypes, JavaScript, and HTML, while the codebase is structured with dedicated folders for components and game logic. The game's responsive design ensures a seamless experience on different devices, and the project is hosted on GitHub for version control and collaboration. This project is a testament to the developer's skills in front-end web development, encompassing React.js, responsive design, state management, and clean, organized code. You can access the complete project on their GitHub repository for further exploration and collaboration.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: TicTacToe,
    link: "http://tictactoe.shubhammishra.surge.sh/",
  },
  {
    name: "Random Password Generator",
    description:
      "The Random Password Generator is a dynamic web application featuring HTML, CSS, and JavaScript, now a standout in my project portfolio. This versatile tool lets users craft secure, customized passwords with precision. It offers fine-tuned control over password length and composition, including uppercase letters, lowercase letters, numerals, and special symbols. This enhances online security by ensuring randomly generated and robust passwords. The user-friendly interface simplifies the process, while a one-click copy-to-clipboard function streamlines usability. This project underscores my web development expertise, with a focus on JavaScript for password generation, and highlights my skills in crafting responsive and visually appealing interfaces using HTML and CSS.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: passGenerator,
    link: "https://shubham-mishra-2003.github.io/PasswordGenerator/",
  },
  {
    name: "Code Craft | Code Editor",
    description:
      "Welcome to the  CodeCraft, A HTML, CSS and JS Code Editor! This web-based editor, built with ReactJS, features separate input fields for HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: codecraft,
    link: "https://connect-codecraft.vercel.app/",
  },
  {
    name: "Alarm App",
    description:
      "Created a custom alarm clock application using React and Vite, demonstrating proficiency in frontend development. Implemented essential features like setting alarms, customizable alarm tones, and snooze functionality. Employed modern UI design principles for an intuitive user experience.",
    tags: [
      {
        name: "ReactJs",
        color: "pink-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: AlarmApp,
    link: "https://alarmapp-shubhammishra.vercel.app/",
  },
  {
    name: "Tap Tap Game App",
    description:
      "Developed an engaging tap tap game using Vite React JS, where players tap circles to increase their score. Implemented local storage for score persistence across sessions, providing users with a seamless gaming experience. Additionally, integrated a leaderboard feature to showcase top scores and foster healthy competition among players. Enhanced user engagement through dynamic gameplay and customizable options",
    tags: [
      {
        name: "ReactJs",
        color: "pink-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: TaptapGame,
    link: "https://taptapgame-shubhammishra.vercel.app/",
  },
  {
    name: "Video Bridge",
    description:
      "Video meeting web app built with nextjs and tailwind css to handle the frontend and clerk and getstream.io Api for backend support",
    tags: [
      {
        name: "NextJS",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "APIs",
        color: "blue-text-gradient",
      },
    ],
    image: Videobridge,
    link: "https://videobridge.vercel.app/",
  },
  {
    name: "Frame Magic",
    description:
      "Developed a responsive image manipulation website using Next.js and Tailwind CSS, incorporating advanced AI tools such as Object Remover, Object Recolor, Image Restore, Image Resize, and Background Remove, powered by Cloudinary. Implemented a robust backend with MongoDB to store user-edited images, ensuring users can access their edits at any time. Integrated secure login functionality using Clerk to enhance user authentication and experience.",
    tags: [
      {
        name: "NextJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "pink-text-gradient",
      },
    ],
    image: FrameMagic,
    link: "https://framemagic-connect.vercel.app/",
  },
];

const links = {
  resume: '/resume.pdf',
  github: "https://github.com/shubham-mishra-2003",
  linkedIn: "https://www.linkedin.com/in/shubhammishra2511/",
  whatsApp: "https://wa.me/+919971481143/?text=Hi",
};

export { navLinks, services, technology, experience, projects, links };
