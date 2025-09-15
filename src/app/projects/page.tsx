"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
    {
        title: "Lyncas",
        description:
            "Atuei na Lyncas, onde trabalhei principalmente com Orquestração, atuando nos apontamentos e ajustes de endpoints novos e antigos entre os diversos projetos.\n\nWorked at Lyncas mainly with Orchestration, handling adjustments and creation of new and legacy endpoints across multiple projects.",
        tech: ["Java", "Spring", "Spring Boot", "AKS", "Azure"],
    },
    {
        title: "Afilio V3",
        description:
            "Atuação em projetos de larga escala com foco em performance, escalabilidade, observabilidade e resolução de problemas. Microsserviços em diversas linguagens diferentes trazendo robustez e otimização com Golang e MongoDb. Fullstack em PHP/Laravel e Vue.js/JavaScript.\n\nParticipation in large-scale projects focused on performance, scalability, observability, and problem-solving. Built robust microservices in multiple languages, optimized with Golang and MongoDB. Fullstack development with PHP/Laravel and Vue.js/JavaScript.",
        tech: ["PHP", "Laravel", "Vue.js", "JavaScript", "Node.js", "Golang", "Docker", "Microsserviços", "Quasar", "Landing Pages", "Wordpress", "MySql", "AWS",],
    },
    {
        title: "Dynaton",
        description:
            "Alocado na Dynaton, desenvolvi a Dashboard Smartmail de Disparos de Email, configuração de domínios, configuração de Postal e Sending Servers via SMTP. Implementação de APIs, microsserviços e Resolução de problemas.\n\nAt Dynaton, I developed the Smartmail Dashboard for Email Campaigns, domain configuration, Postal and Sending Servers via SMTP. Implemented APIs, microservices, and handled troubleshooting.",
        tech: [ "PHP", "Node.js", "Laravel", "Docker", "MySql", "Infraestrutura", "DevOps", "AWS",],
    },
    {
        title: "E-business4us INC",
        description:
            "Criação do zero de uma plataforma de e-commerce escalável com cashback com Vue.js, Node.js, PHP e Laravel. Desenvolvimento de chatbox com cliente e tradução em tempo real e manutenção e sustentação no projeto Supercheckout, com 14 gateways de pagamento.\n\nBuilt from scratch a scalable e-commerce platform with cashback using Vue.js, Node.js, PHP, and Laravel. Developed a chatbox with real-time translation and maintained the Supercheckout project with 14 payment gateways.",
        tech: ["Vue.js", "JavaScript", "Node.js", "PHP", "Laravel", "MariaDb", "MongoDB"],
    },
    {
        title: "Freelancer",
        description:
            "Desenvolvimento de soluções sob medida para clientes diversos, com foco em qualidade e boas práticas.\n\nDelivered tailor-made solutions for various clients as an independent developer, always focusing on quality and best practices.",
        tech: ["React", "Node.js", "PHP", "Laravel", "Angular", "Java", "Spring", "Spring Boot", "MySQL", "PostgreSQL", "Vue.js"],
    },
    {
        title: "RURALTINS",
        description:
            "Construção de sistemas internos para gestão administrativa e rural. Tecnologias: Java, Spring, PHP, Laravel.\n\nBuilt internal systems for administrative and rural management. Technologies: Java, Spring, PHP, Laravel.",
        tech: ["Java", "Spring", "PHP", "Laravel", "PostgreSQL"],
    },
    {
        title: "Hospital Regional de Araguaçu",
        description:
            "Desenvolvimento de sistemas para gestão hospitalar, garantindo confiabilidade e escalabilidade.\n\nDeveloped hospital management systems ensuring reliability and scalability.",
        tech: ["Java", "Spring", "PHP", "Laravel", "MySQL"],
    },
    {
        title: "Projetos pessoais",
        description:
            "Criação de aplicações open-source e portfólios, explorando novas tecnologias e boas práticas de desenvolvimento. Sistema de Notificações com Websockets. Em desenvolvimento um sistema de agendamentos para quaisquer área de atuação.\n\nBuilt open-source applications and portfolios, exploring new technologies and development best practices. Notification System with Websockets. Currently developing a scheduling system for multiple business areas.",
        tech: [
            "Java",
            "Spring",
            "Spring Boot",
            "Golang",
            "PHP",
            "Laravel",
            "Python",
            "Vue.js",
            "Angular",
            "React",
            "React.js",
            "Next.js",
            "Node.js",
            "Express",
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
            "TailwindCSS",
            "Docker",
            "Kafka",
            "GitHub",
            "MySQL",
            "PostgreSQL",
            "Microsserviços",
            "AKS (Azure Kubernetes Service)",
            "EKS (Amazon Elastic Kubernetes Service)",
            "AWS",
            "Azure",
            "APIs REST",
            "Arquitetura de microsserviços",
            "Integração contínua",
            "Scrum",
            "TDD",
            "PHPUnit",
            "WordPress",
            "PhpMyAdmin"
        ]
    },
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-slate-900 text-white px-6 py-12 relative">
            {/* Botão de voltar */}
            <Link
                href="/"
                className="absolute top-6 left-6 w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-md shadow-md transition transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg
                           before:content-[''] before:absolute before:top-0 before:right-0 before:w-4 before:h-4 before:bg-orange-700 before:rounded-tr-md before:clip-path-[polygon(0_0,100%_0,100%_100%)]"
            >
                ←
            </Link>

            <h1 className="text-4xl font-bold text-center text-orange-400 mb-12">
                Experiências | Experiences
            </h1>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg hover:shadow-orange-500/30"
                        initial={
                            index % 4 === 0
                                ? { opacity: 0, x: -100 }
                                : index % 4 === 1
                                    ? { opacity: 0, y: 100 }
                                    : index % 4 === 2
                                        ? { opacity: 0, x: 100 }
                                        : { opacity: 0, scale: 0.5 }
                        }
                        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                            {project.title}
                        </h2>
                        <p className="text-slate-300 mb-4 whitespace-pre-line">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="bg-orange-600/20 text-orange-300 text-sm px-3 py-1 rounded-md"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
