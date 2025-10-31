import { ListedProjectProps } from "@/components/listed-project";


export const projects: ListedProjectProps[] = [
  {
    title: "Nebula Exchange",
    description: "Developed a cryptocurrency exchange platform with AI-driven price forecasting powered by PyTorch, managed via REST API. Built a scalable architecture to process and cache real-time data using Redis, ensuring efficient and accurate price updates.",
    link: "https://github.com/MrNtex/NebulaExchange",
    technologies: ["React.js","Python", "NumPy", "pyTorch"]
  },
  {
    title: "eSenior",
    description: "Led a team to develop an award-winning app aimed at reducing digital exclusion among the elderly. This project won the BiteHack 2024 competition.",
    link: "https://github.com/DROP-TABLE-Druzyny/BiteHack",
    technologies: ["React.js", "Django"]
  },
  {
    title: "Portal Chess",
    description: '"Portal Chess" is a fresh take on the timeless strategy of chess, inspired by an idea from friends. This game transforms the traditional chessboard into a 4x8 grid, introducing the power of teleporting from one end of the board to another.',
    link: "https://github.com/MrNtex/PortalChess",
    technologies: ["react-native", "JavaScript"]
  },
  {
    title: "GameEngine with Visual Scripting",
    description: "Developed a Unity-like game engine featuring a node-based visual programming language. Enabled users to create custom behaviors, physics, and objects within the engine. Produced a DevLog for the project, garnering 50k+ views on YouTube, showcasing technical implementation and progress",
    link: "https://github.com/MrNtex/ANIEngine",
    technologies: ["C#", "Unity"]
  },
  {
    title: "GravAssist",
    description: "Created a 2D space game where players navigate a spaceship using gravitational slingshots around planets to reach targets. Developed realistic physics and engaging gameplay mechanics.",
    link: "https://github.com/MrNtex/GravAssist",
    technologies: ["C#", "Unity"]
  }
];

export default projects;