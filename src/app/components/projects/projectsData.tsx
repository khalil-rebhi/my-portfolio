interface Task {
  id: number;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  tasks: Task[];
  technologies: string[];
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "pfeFstTitle",
    description: "pfeFstDescription",
    tasks: [
      { id: 1, description: "pfeFstTask1" },
      { id: 2, description: "pfeFstTask2" },
      { id: 3, description: "pfeFstTask3" },
      { id: 4, description: "pfeFstTask4" },
    ],
    technologies: ["Node.js", "Express.js", "MySQL"],
  },
  {
    id: 2,
    title: "pidev3Title",
    description: "pidev3Description",
    tasks: [
      { id: 1, description: "pidev3Task1" },
      { id: 2, description: "pidev3Task2" },
      { id: 3, description: "pidev3Task3" },
    ],
    technologies: ["Symfony", "Java", "JavaFX", "MySQL"],
  },
  {
    id: 3,
    title: "immersionTitle",
    description: "immersionDescription",
    tasks: [
      { id: 1, description: "immersionTask1" },
      { id: 2, description: "immersionTask2" },
      { id: 3, description: "immersionTask3" },
    ],
    technologies: ["Symfony", "Bootstrap", "MySQL"],
  },
  {
    id: 4,
    title: "pidev4Title",
    description: "pidev4Description",
    tasks: [
      { id: 1, description: "pidev4Task1" },
      { id: 2, description: "pidev4Task2" },
      { id: 3, description: "pidev4Task3" }
    ],
    technologies: ["Angular", "Spring Boot", "MySQL"]
  },
  {
    id: 5,
    title: "zitounaEngTitle",
    description: "zitounaEngDescription",
    tasks: [
      { id: 1, description: "zitounaEngTask1" },
      { id: 2, description: "zitounaEngTask2" }
    ],
    technologies: []
  },
  {
    id: 6,
    title: "pidev5Title",
    description: "pidev5Description",
    tasks: [
      { id: 1, description: "pidev5Task1" },
      { id: 2, description: "pidev5Task2" }
    ],
    technologies: ["Angular", "Spring Boot", "MySQL"]
  },
  {
    id: 7,
    title: "zitounaPfeTitle",
    description: "zitounaPfeDescription",
    tasks: [
      { id: 1, description: "zitounaPfeTask1" },
      { id: 2, description: "zitounaPfeTask2" },
      { id: 3, description: "zitounaPfeTask3" }
    ],
    technologies: ["Power Apps", "Power Automate", "SharePoint"]
  },
  {
    id: 8,
    title: "freelanceErpTitle",
    description: "freelanceErpDescription",
    tasks: [
      { id: 1, description: "freelanceErpTask1" },
      { id: 2, description: "freelanceErpTask2" },
      { id: 3, description: "freelanceErpTask3" }
    ],
    technologies: ["Angular", "Spring Boot", "MySQL", "Linux"]
  },
  {
    id: 9,
    title: "ecochimixSiteTitle",
    description: "ecochimixSiteDescription",
    tasks: [
      { id: 1, description: "ecochimixSiteTask1" },
      { id: 2, description: "ecochimixSiteTask2" }
    ],
    technologies: ["Next.js", "TailwindCSS"]
  },
  {
    id: 10,
    title: "portfolioTitle",
    description: "portfolioDescription",
    tasks: [
      { id: 1, description: "portfolioTask1" },
      { id: 2, description: "portfolioTask2" },
      { id: 3, description: "portfolioTask3" }
    ],
    technologies: ["Next.js", "TailwindCSS"]
  }
];
