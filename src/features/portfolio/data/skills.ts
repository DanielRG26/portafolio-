import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaGithub,
  FaFigma,
  FaJira,
  FaLinux,
} from "react-icons/fa"
import {
  SiSpringboot,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiMongodb,
  SiPostgresql,
  SiIntellijidea,
  SiPostman,
  SiMysql,
  SiSwagger,
} from "react-icons/si"
import { VscCode } from "react-icons/vsc"

export const technologies = [
  { name: "Java", color: "#e84a00", icon: FaJava, repo: null },
  { name: "Spring Boot", color: "#6db33f", icon: SiSpringboot, repo: "https://github.com/Goloso0006/education-system" },
  { name: "React", color: "#61dafb", icon: FaReact, repo: null },
  { name: "Next.js", color: "#000000", icon: SiNextdotjs, useForeground: true, repo: "https://github.com/DanielRG26/dash-board" },
  { name: "JavaScript", color: "#f0db4f", icon: SiJavascript, repo: "https://github.com/DanielRG26/Calculadora-2.0" },
  { name: "HTML", color: "#e44d26", icon: SiHtml5, repo: "https://github.com/edben110/landing-page" },
  { name: "CSS", color: "#264de4", icon: SiCss, repo: null },
  { name: "Git", color: "#f05032", icon: FaGitAlt, repo: null },
  { name: "MongoDB", color: "#47a248", icon: SiMongodb, repo: null },
  { name: "PostgreSQL", color: "#336791", icon: SiPostgresql, repo: null },
  { name: "Python", color: "#3776ab", icon: FaPython, repo: null },
  { name: "Docker", color: "#0db7ed", icon: FaDocker, repo: null },
]

export const tools = [
  { name: "VS Code", color: "#007ACC", icon: VscCode },
  { name: "IntelliJ IDEA", color: "#FC801D", icon: SiIntellijidea },
  { name: "Postman", color: "#FF6C37", icon: SiPostman },
  { name: "MySQL Workbench", color: "#4479A1", icon: SiMysql },
  { name: "GitHub", color: "#6e40c9", icon: FaGithub },
  { name: "Swagger", color: "#85EA2D", icon: SiSwagger },
  { name: "Figma", color: "#F24E1E", icon: FaFigma },
  { name: "Linux", color: "#FCC624", icon: FaLinux },
  { name: "Jira", color: "#0052CC", icon: FaJira },
]
