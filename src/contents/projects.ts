import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Site Institucional",
    description:
      "Website para uma empresa do ramo automotivo, desenvolvido com Angular e Bootstrap, incluindo rotas, formulários e melhorias de UX.",
    technologies: ["Angular", "TypeScript", "Bootstrap"],
    githubLink: "",
    demoLink: "https://www.garagemdomotta.com.br/",
    image: "/projects/auto-detailing-website.jpg",
  },
  {
    title: "FinanceApp",
    description:
      "A blogging platform with user authentication and markdown support.",
    technologies: [
      "C#",
      "ASP.NET MVC",
      "Entity Framework Core",
      "Identity",
      "PostgreSQL",
      "Bootstrap",
    ],
    githubLink:
      "https://github.com/Ghitado/mvc-aspnetcore-incomes-and-expenses",
    demoLink: "https://mvcaspnetcoreincomesandexpenses-latest.onrender.com/",
    image: "/projects/mvc-aspnetcore-finance-app.jpg",
  },
  {
    title: "Sistemas Lineares",
    description:
      "Aplicação web feita em Angular 17 para resolver sistemas lineares 2x2 e 3x3 usando determinantes.",
    technologies: ["Angular", "TypeScript", "PrimeNG"],
    githubLink: "https://github.com/Ghitado/sistemas-lineares",
    demoLink: "https://sistemas-lineares.netlify.app/",
    image: "/projects/linear-systems.png",
  },
  {
    title: "Automação de Procurações",
    description:
      "Macro para gerar procurações automaticamente, com template genérico para adaptação.",
    technologies: ["VBA", "Excel", "Word"],
    githubLink: "https://github.com/Ghitado/vba-excel-procuracao-automatizada",
    demoLink: "",
    image: "/projects/vba-automation.jpg",
  },
];
