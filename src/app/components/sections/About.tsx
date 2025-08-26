"use client";

import {
  cardHover,
  cardHoverSmall,
  fadeIn,
  fadeInDown,
  fadeInUp,
  staggerContainer,
} from "@/utils/animations";
import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto pt-25" id="about">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        Sobre Mim
      </motion.h2>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          Desenvolvedor de Software focado em resolver problemas através da
          programação, com experiência no desenvolvimento de aplicações web no
          frontend e backend.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          {...fadeInUp}
        >
          Habilidades
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>Angular</li>
              <li>React / Next.js</li>
              <li>JavaScript / TypeScript</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>C# / ASP.NET Core</li>
              <li>Node.js / Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ferramentas & Outros</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>Azure</li>
              <li>CI/CD</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          {...fadeInUp}
        >
          Experiência
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Desenvolvedor Web Freelancer
            </h3>
            <p className="text-primary mb-2">
              5.5 Imports • Agosto/2025 - Atualmente
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Desenvolvimento de loja online com WordPress, WooCommerce, HTML,
                CSS e JavaScript
              </li>
              <li>Configuração de produtos e métodos de pagamento</li>
              <li>Otimização de usabilidade e experiência do usuário (UX)</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Desenvolvedor Web Freelancer
            </h3>
            <p className="text-primary mb-2">
              Garagem 5.5 • Agosto/2024 - Outubro/2024
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Desenvolvimento e manutenção do site institucional com HTML,
                CSS, Bootstrap, Angular e TypeScript
              </li>
              <li>
                Implementação de rotas, formulários e melhorias de experiência
                do usuário (UX)
              </li>
              <li>Criação de banners e identidade visual utilizando Canva</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="space-y-8"
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          {...fadeInUp}
        >
          Educação
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Tecnólogo em Desenvolvimento de Software Multiplataforma
            </h3>
            <p className="text-primary mb-2">Fatec Mauá • 2023 - Atualmente</p>
            <p className="text-secondary">
              Formação prática em análise, projeto e implementação de software.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Técnico em Desenvolvimento de Sistemas
            </h3>
            <p className="text-primary mb-2">
              Etec Rio Grande da Serra • 2020 - 2022
            </p>
            <p className="text-secondary">
              Formação inicial em análise de sistemas, programação e banco de
              dados.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
