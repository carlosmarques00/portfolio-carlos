"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
    {
        id: "kodes",
        title: "KODES Tech",
        role: "Senior Full Stack Developer",
        period: "Mar/2026 – Abr/2026",
        description: "Desenvolvimento fullstack em aplicação de viagens e turismo. Integrações via APIs e webhooks com serviços de terceiros. Uso ativo de IA para acelerar entregas e automatizar tarefas.",
        impact: [
            "Desenvolvimento fullstack com PHP, React e Angular",
            "Integrações via APIs e webhooks com serviços de terceiros",
            "Uso ativo de IA para acelerar entregas e automatizar tarefas",
        ],
        tech: ["PHP", "Laravel", "React", "Angular", "APIs", "Webhooks", "IA"],
    },
    {
        id: "uplexis",
        title: "Uplexis",
        role: "Senior Backend / Fullstack Engineer",
        period: "Jan/2026 – Mar/2026",
        description: "Atuação como Desenvolvedor Backend Sênior / Fullstack, Compliance, processamento de dados e Homologação, atuando com PHP/Laravel, Node, AWS Lambda etc..",
        impact: [
            "Desenvolvimento de crawlers e automações com AWS Lambda",
            "Processamento e homologação de dados em larga escala",
            "Integração com serviços AWS e pipelines GitLab/GitHub",
        ],
        tech: ["PHP", "Laravel", "Node.js", "AWS", "GitHub", "GitLab", "Docker", "Lambda", "Crawlers"],
    },
    {
        id: "wehandle",
        title: "wehandle",
        role: "Senior Java / Fullstack Engineer",
        period: "Set/2025 – Dez/2025",
        description: "Atuação como Desenvolvedor Java Sênior / Fullstack, trabalhando com a internacionalização e homologação de dados na plataforma wehandle.",
        impact: [
            "Desenvolvimento de features de homologação de fornecedores",
            "Internacionalização da plataforma",
            "Arquitetura com EKS, Kafka e microsserviços",
        ],
        tech: ["Java", "Spring Boot", "Kafka", "React.js", "Nest.js", "Next.js", "Node.js", "Typescript", "AWS", "Git Actions", "Docker", "EKS"],
    },
    {
        title: "Lyncas",
        description: "Orquestração de endpoints novos e legados entre diversos projetos.\n\nOrchestration of new and legacy endpoints across multiple projects.",
        tech: ["Java", "Spring", "Spring Boot", "AKS", "Azure", "RabbitMQ"],
    },
    {
        title: "Afilio V3",
        description: "Projetos de larga escala com foco em performance, escalabilidade e observabilidade. Microsserviços em Golang/MongoDB e Fullstack em PHP/Laravel e Vue.js/JavaScript.\n\nLarge-scale projects focused on performance, scalability, and observability. Microservices in Golang/MongoDB and Fullstack in PHP/Laravel and Vue.js/JavaScript.",
        tech: ["PHP", "Laravel", "Vue.js", "JavaScript", "Node.js", "Golang", "Docker", "Microsserviços", "Quasar", "MySql", "AWS"],
    },
    {
        title: "Dynaton",
        description: "Dashboard Smartmail de disparos de e-mail, configuração de domínios e Sending Servers via SMTP. APIs e microsserviços.\n\nSmartmail email campaign dashboard, domain configuration and Sending Servers via SMTP. APIs and microservices.",
        tech: ["PHP", "Node.js", "Laravel", "Docker", "MySql", "DevOps", "AWS", "Kafka"],
    },
    {
        title: "E-business4us INC",
        description: "Plataforma e-commerce escalável com cashback do zero. Chatbox com tradução em tempo real. Supercheckout com 14 gateways de pagamento.\n\nScalable e-commerce platform with cashback from scratch. Real-time translation chatbox. Supercheckout with 14 payment gateways.",
        tech: ["Vue.js", "JavaScript", "Node.js", "PHP", "Laravel", "MariaDb", "MongoDB", "Kafka"],
    },
    {
        title: "Freelancer",
        description: "Soluções sob medida para clientes diversos com foco em qualidade e boas práticas.\n\nTailor-made solutions for various clients focused on quality and best practices.",
        tech: ["React", "Node.js", "PHP", "Laravel", "Angular", "Java", "Spring Boot", "MySQL", "PostgreSQL", "Vue.js"],
    },
    {
        title: "RURALTINS",
        description: "Sistemas internos para gestão administrativa e rural.\n\nInternal systems for administrative and rural management.",
        tech: ["Java", "Spring", "PHP", "Laravel", "PostgreSQL"],
    },
    {
        title: "Hospital Regional de Araguaçu",
        description: "Sistemas de gestão hospitalar com foco em confiabilidade e escalabilidade.\n\nHospital management systems focused on reliability and scalability.",
        tech: ["Java", "Spring", "PHP", "Laravel", "MySQL"],
    },
    {
        title: "Projetos pessoais",
        description: "Aplicações open-source, sistema de notificações com Websockets e sistema de agendamentos em desenvolvimento.\n\nOpen-source apps, Websocket notification system, and scheduling system currently in development.",
        tech: ["Java", "Spring Boot", "Golang", "PHP", "Laravel", "Python", "Vue.js", "React", "Next.js", "Node.js", "TypeScript", "TailwindCSS", "Docker", "Kafka", "AWS", "Azure", "PostgreSQL", "MySQL"],
    },
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white px-6 py-16 relative overflow-hidden">
            {/* Background grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Back button */}
            <Link
                href="/"
                className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:border-orange-500 hover:text-orange-400 transition-all duration-200 z-10"
            >
                ←
            </Link>

            <div className="relative z-10 max-w-6xl mx-auto">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                        Experiências <span className="text-orange-400">&amp; Projetos</span>
                    </h1>
                    <p className="text-slate-500 uppercase tracking-widest text-sm">Experience &amp; Projects</p>
                </motion.div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-5 hover:border-orange-500/30 hover:bg-slate-800/80 transition-all duration-300 flex flex-col"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.07 }}
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-3 gap-2">
                                <h2 className="text-lg font-semibold text-orange-400">{project.title}</h2>
                                {project.period && (
                                    <span className="text-xs text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">{project.period}</span>
                                )}
                            </div>

                            {/* Role */}
                            {project.role && (
                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">{project.role}</p>
                            )}

                            {/* Description */}
                            <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 whitespace-pre-line">{project.description}</p>

                            {/* Impact */}
                            {project.impact && (
                                <ul className="mb-4 space-y-1">
                                    {project.impact.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                            <span className="text-orange-500 mt-0.5">▸</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Tech */}
                            <div className="flex flex-wrap gap-1.5 mt-auto">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs bg-slate-700/60 text-slate-400 border border-slate-700 px-2 py-0.5 rounded-md">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
