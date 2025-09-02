"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
    {
        title: "Lyncas",
        description:
            "Desenvolvimento de aplicações fullstack com React, Node.js, Java e PHP/Laravel. Criação de microsserviços, APIs REST e integrações com bancos relacionais e não-relacionais.\n\nFullstack development with React, Node.js, Java and PHP/Laravel. Built microservices, REST APIs, and integrations with relational and non-relational databases.",
        tech: ["React", "Node.js", "Java", "Spring", "PHP", "Laravel", "PostgreSQL", "MongoDB"],
    },
    {
        title: "Afilio V3",
        description:
            "Atuação em projetos de larga escala com foco em performance e escalabilidade. Backend em Node.js, Express, Golang e JWT, além de integrações com PHP/Laravel.\n\nWorked on large-scale projects focused on performance and scalability. Backend with Node.js, Express, Golang, JWT and PHP/Laravel.",
        tech: ["Node.js", "Express", "Golang", "JWT", "PHP", "Laravel", "Docker"],
    },
    {
        title: "Dynaton",
        description:
            "Participação no desenvolvimento de soluções modernas com foco em arquitetura distribuída. Implementação de APIs, microsserviços e front responsivo com Next.js, React e Laravel.\n\nContributed to the development of modern solutions with a focus on distributed architecture. Implemented APIs, microservices, and responsive frontends with Next.js, React and Laravel.",
        tech: ["Next.js", "TypeScript", "React", "Node.js", "Laravel", "Docker", "PostgreSQL"],
    },
    {
        title: "E-business4us INC",
        description:
            "Criação do zero de uma plataforma de e-commerce escalável com React, Node.js, PHP e Laravel.\n\nBuilt a scalable e-commerce platform from scratch using React, Node.js, PHP and Laravel.",
        tech: ["React", "Node.js", "PHP", "Laravel", "PostgreSQL", "MongoDB"],
    },
    {
        title: "Freelancer",
        description:
            "Desenvolvimento de soluções sob medida para clientes diversos, com foco em qualidade e boas práticas.\n\nDelivered tailor-made solutions for various clients as an independent developer.",
        tech: ["React", "Node.js", "PHP", "Laravel", "Java", "Spring", "MySQL", "PostgreSQL"],
    },
    {
        title: "RURALTINS",
        description:
            "Construção de sistemas internos para gestão administrativa e rural. Tecnologias: Java, Spring, PHP, Laravel.\n\nBuilt internal systems for administrative and rural management (Java, Spring, PHP, Laravel).",
        tech: ["Java", "Spring", "PHP", "Laravel", "PostgreSQL"],
    },
    {
        title: "Hospital Regional de Araguaçu",
        description:
            "Desenvolvimento de sistemas para gestão hospitalar, garantindo confiabilidade e escalabilidade.\n\nDeveloped systems for hospital management, ensuring reliability and scalability.",
        tech: ["Java", "Spring", "PHP", "Laravel", "MySQL"],
    },
    {
        title: "Projetos pessoais",
        description:
            "Criação de aplicações open-source e portfólios, explorando novas tecnologias e boas práticas de desenvolvimento.\n\nBuilt open-source applications and portfolios, exploring new technologies and development best practices.",
        tech: ["React", "TailwindCSS", "Node.js", "TypeScript"],
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
