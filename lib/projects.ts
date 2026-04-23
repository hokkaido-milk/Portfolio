import { createProject, type Project } from "./types";

// =============================================================================
// FEATURED PROJECTS (Section 2 - Large Cards)
// Add projects here in the order you want them displayed
// =============================================================================
export const featuredProjects: Project[] = [
  
  createProject(
    "ami",
    "AMI",
    "AMI features over 50 levels of cognitive games across 3 game modes that evaluate visual recognition, semantic knowledge, and language fluency, with everything available in both English and Mandarin. AMI also features an AI chatbot contextualised with elderly-tailored system prompts for conversations in local lingo and accented TTS, as well as active monitoring of the user’s mental health and mood. To support research needs, AMI also logs over 30 sources of user input/performance metrics as JSON data.",
    "Work",
    "Team",
    "Completed",
    ["Unity Engine", "C#", "OpenAI API", "Azure Speech Services"],
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
];

// =============================================================================
// OTHER PROJECTS (Section 3 - Small Grid Cards)
// Add projects here in the order you want them displayed
// =============================================================================
export const otherProjects: Project[] = [

  createProject(
    "proc-anim-system",
    "Procedural Animation System",
    "A modular animation system in Unity that uses the Animation Rigging library to animate using constraints, targets and curves.",
    "Personal",
    "Solo",
    "Ongoing",
    ["Unity Engine", "C#"],
    [
      "/images/proc-anim/1.png",
      "/images/proc-anim/2.png",
      "/images/proc-anim/3.png",
      "/images/proc-anim/4.png"
    ]
  ),
  
    createProject(
    "storyweaver",
    "StoryWeaver",
    "A murder mystery novel game with infinite replayability utilising unique generated stories using procedural WFC maps and GenAI + RAG writing.",
    "Coursework",
    "Team",
    "Completed",
    ["Android SDK", "Java", "OpenAI API"],
    [
      "/images/storyweaver/1.png",
      "/images/storyweaver/2.png",
      "/images/storyweaver/3.png",
      "/images/storyweaver/4.png",
      "/images/storyweaver/5.png",
      "/images/storyweaver/6.png",
    ]
  ),
  
  createProject(
    "astralane",
    "Astralane",
    "A simple 2D game where you navigate space ships to their destination ports while avoiding the gravitational fields of planets.",
    "Game Jam",
    "Team",
    "Completed",
    ["Unity Engine", "C#"],
    [
      "/images/astralane/1.png",
      "/images/astralane/2.png",
      "/images/astralane/3.png"
    ]
  ),
];
