"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const experiences = [
    {
        company: "Uplexis",
        period: "Jan/2026 – Mar/2026",
        pt: "Atuação como Desenvolvedor Backend Sênior / Fullstack em Compliance, processamento de dados e Homologação com PHP/Laravel, Node e AWS Lambda.",
        en: "Senior Backend / Fullstack Developer in Compliance, data processing and Homologation using PHP/Laravel, Node and AWS Lambda.",
    },
    {
        company: "wehandle",
        period: "Set/2025 – Dez/2025",
        pt: "Desenvolvedor Java Sênior / Fullstack trabalhando com internacionalização e homologação de dados na plataforma wehandle.",
        en: "Senior Java / Fullstack Developer working on internationalization and data homologation on the wehandle platform.",
    },
    {
        company: "Lyncas",
        period: "",
        pt: "Orquestração de endpoints novos e legados entre diversos projetos.",
        en: "Orchestration of new and legacy endpoints across multiple projects.",
    },
    {
        company: "Afilio V3",
        period: "",
        pt: "Projetos de larga escala com foco em performance, escalabilidade e observabilidade. Microsserviços em Golang/MongoDB e Fullstack em PHP/Laravel e Vue.js.",
        en: "Large-scale projects focused on performance, scalability, and observability. Microservices in Golang/MongoDB and Fullstack in PHP/Laravel and Vue.js.",
    },
    {
        company: "Dynaton",
        period: "",
        pt: "Desenvolvimento da Dashboard Smartmail de disparos de e-mail, configuração de domínios e Sending Servers via SMTP.",
        en: "Development of the Smartmail email campaign dashboard, domain configuration and Sending Servers via SMTP.",
    },
    {
        company: "E-business4us INC",
        period: "",
        pt: "Criação do zero de plataforma e-commerce com cashback, chatbox com tradução em tempo real e sustentação do Supercheckout com 14 gateways de pagamento.",
        en: "Built from scratch a cashback e-commerce platform, real-time translation chatbox, and maintained Supercheckout with 14 payment gateways.",
    },
    {
        company: "Freelancer",
        period: "",
        pt: "Soluções sob medida para clientes diversos com foco em qualidade e boas práticas.",
        en: "Tailor-made solutions for various clients focused on quality and best practices.",
    },
    {
        company: "RURALTINS",
        period: "",
        pt: "Sistemas internos para gestão administrativa e rural.",
        en: "Internal systems for administrative and rural management.",
    },
    {
        company: "Hospital Regional de Araguaçu",
        period: "",
        pt: "Sistemas de gestão hospitalar com foco em confiabilidade e escalabilidade.",
        en: "Hospital management systems focused on reliability and scalability.",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white px-6 py-16 flex flex-col items-center relative overflow-hidden">
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

            <div className="relative z-10 max-w-3xl w-full">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                        Sobre <span className="text-orange-400">mim</span>
                    </h1>
                    <p className="text-slate-500 uppercase tracking-widest text-sm">About me</p>
                </motion.div>

                {/* Bio */}
                <motion.div
                    className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-slate-300 leading-relaxed mb-3">
                        Sou <span className="text-orange-300 font-semibold">Carlos Marques</span>, desenvolvedor Full Stack com mais de uma década de experiência. Minha carreira evoluiu de sistemas web para arquiteturas complexas que exigem visão estratégica, boas práticas e liderança técnica.
                    </p>
                    <p className="text-slate-500 italic text-sm leading-relaxed">
                        I am Carlos Marques, a Full Stack developer with over a decade of experience. My career evolved from web systems to complex architectures requiring strategic vision, best practices, and technical leadership.
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            className="flex gap-4 group"
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * i }}
                        >
                            {/* Line */}
                            <div className="flex flex-col items-center pt-1">
                                <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0 mt-1" />
                                {i < experiences.length - 1 && (
                                    <div className="w-px flex-1 bg-slate-700 mt-1" />
                                )}
                            </div>
                            {/* Content */}
                            <div className="pb-6">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="text-orange-400 font-semibold">{exp.company}</span>
                                    {exp.period && (
                                        <span className="text-xs text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full">{exp.period}</span>
                                    )}
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed">{exp.pt}</p>
                                <p className="text-slate-600 text-xs italic mt-1">{exp.en}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Closing */}
                <motion.div
                    className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-6 mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p className="text-slate-300 leading-relaxed mb-3">
                        Sou movido por desafios e pela oportunidade de transformar ideias em produtos digitais de impacto. Acredito na combinação entre código de qualidade, boas práticas e colaboração.
                    </p>
                    <p className="text-slate-500 italic text-sm">
                        I am driven by challenges and by the opportunity to transform ideas into impactful digital products. I believe in combining clean code, best practices, and teamwork.
                    </p>
                </motion.div>
            </div>
        </main>
    );
}