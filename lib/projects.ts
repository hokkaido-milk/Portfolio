import { createProject, type Project } from "./types";

// =============================================================================
// FEATURED PROJECTS (Section 2 - Large Cards)
// Add projects here in the order you want them displayed
// =============================================================================
export const featuredProjects: Project[] = [
  
  createProject(
    "ami",
    "AMI",
    "A multi-platform Unity application that combines cognitive assessment games with AI-powered companionship and health monitoring for elderly users. The application features bilingual cognitive games that evaluate visual recognition, semantic knowledge, and language fluency, alongside an AI chatbot using Azure Speech Services and OpenAI integration for conversation and mental health monitoring.",
    "Work",
    "Team",
    "Completed",
    ["Product Design", "Frontend", "Unity Engine", "C#"],
    [
      "/images/ami/1.png",
      "/images/ami/2.png",
      "/images/ami/3.png",
      "/images/ami/4.png",
      "/images/ami/5.png",
      "/images/ami/6.png",
      "/images/ami/7.png",
      "/images/ami/8.png",
      "/images/ami/9.png",
      "/images/ami/10.png"
    ]
  ),
  
  createProject(
    "proc-anim-system",
    "Procedural Animation System",
    "A modular animation system in Unity that uses the Animation Rigging library to animate using constraints, targets and curves.",
    "Personal",
    "Solo",
    "Ongoing",
    ["Game Development", "Unity Engine", "C#"],
    [
      "/images/proc-anim/1.png",
      "/images/proc-anim/2.png",
      "/images/proc-anim/3.png",
      "/images/proc-anim/4.png"
    ]
  ),
];

// =============================================================================
// OTHER PROJECTS (Section 3 - Small Grid Cards)
// Add projects here in the order you want them displayed
// =============================================================================
export const otherProjects: Project[] = [
  
  createProject(
    "astralane",
    "Astralane",
    "A simple 2D game where you navigate space ships to their destination ports while avoiding the gravitational fields of planets.",
    "Game Jam",
    "Team",
    "Completed",
    ["Game Design", "Game Development", "Unity Engine", "C#"],
    [
      "/images/astralane/1.png",
      "/images/astralane/2.png",
      "/images/astralane/3.png"
    ]
  ),

  createProject(
    "raidist",
    "Raidist",
    "A PvPvE extraction style game in a fantasy setting.",
    "Personal",
    "Team",
    "Discontinued",
    ["Game Design", "Project Management"],
    [
      "/images/raidist/1.png",
      "/images/raidist/2.png",
      "/images/raidist/3.png"
    ]
  ),
];
