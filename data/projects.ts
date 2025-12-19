import { ListedProjectProps } from "@/components/listed-project";


export const projects: ListedProjectProps[] = [
    {
    title: "friction.",
    description: "My extension introduces a brief pause to think about your life choices before you start doomscrolling. It forces a customizable delay on distracting domains, giving you a second chance to be productive.",
    link: "https://github.com/MrNtex/Friction",
    otherLinks: [{ label: "Chrome Web Store", url: "https://chromewebstore.google.com/detail/friction/eldgcoknahclehggomifndhangdmedij" }],
    technologies: ["JavaScript", "Chrome Extensions API"],
  },
  {
    title: "Nebula Exchange",
    description: "Developed a cryptocurrency exchange platform with AI-driven price forecasting powered by PyTorch, managed via REST API. Built a scalable architecture to process and cache real-time data using Redis, ensuring efficient and accurate price updates.",
    link: "https://github.com/MrNtex/NebulaExchange",
    technologies: ["React.js","Python", "NumPy", "pyTorch"]
  },
  {
    title: "eSenior",
    description: "Led a team to develop an award-winning app aimed at reducing digital exclusion among the elderly. This project won 1st place out of 16 teams at the BiteHack 2024 competition.",
    link: "https://github.com/DROP-TABLE-Druzyny/BiteHack",
    demoLink: "projects/esenior-demo",
    otherLinks: [{ label: "PDF presentation (PL)", url: "https://github.com/DROP-TABLE-Druzyny/BiteHack/blob/main/Project-presentation.pdf" }],
    technologies: ["React.js", "Django"],
    favorite: true
  },
  {
    title: "Portal Chess",
    description: '"Portal Chess" is a fresh take on the timeless strategy of chess, inspired by an idea from friends. This game transforms the traditional chessboard into a 4x8 grid, introducing the power of teleporting from one end of the board to another.',
    link: "https://github.com/MrNtex/PortalChess",
    otherLinks: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.anindustries.PortalChess" }],
    technologies: ["react-native", "JavaScript"]
  },
  {
    title: "GameEngine with Visual Scripting",
    description: "Developed a Unity-like game engine featuring a node-based visual programming language. Enabled users to create custom behaviors, physics, and objects within the engine. Produced a DevLog for the project, garnering 50k+ views on YouTube, showcasing technical implementation and progress",
    link: "https://github.com/MrNtex/ANIEngine",
    technologies: ["C#", "Unity"],
    favorite: true
  },
  {
    title: "GravAssist",
    description: "Created a 2D space game where players navigate a spaceship using gravitational slingshots around planets to reach targets. Developed realistic physics and engaging gameplay mechanics.",
    link: "https://github.com/MrNtex/GravAssist",
    otherLinks: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.ArturNiemiec.GravAssist" }],
    demoLink: "projects/grav-assist-demo",
    technologies: ["C#", "Unity"],
    favorite: true
  },
];

export default projects;