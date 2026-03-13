"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const education = [
    {
        institution: "UNOPAR – Universidade Norte do Paraná",
        degree: "Pós-graduação em Administração de Banco de Dados",
        degreeEn: "Postgraduate in Database Administration",
        period: "Jan 2021 – Dez 2021",
    },
    {
        institution: "UNOPAR – Universidade Norte do Paraná",
        degree: "Bacharelado em Análise e Desenvolvimento de Sistemas",
        degreeEn: "Bachelor in Systems Analysis and Development",
        period: "Jul 2017 – Jul 2020",
    },
];

const certifications = [
    {
        title: "Testes Unitários e TDD com PHP e PHPUnit",
        issuer: "Udemy",
        period: "Mai 2023",
        url: "https://www.udemy.com/certificate/UC-22a65e37-198c-468f-819e-05c13ec417d1/",
    },
    {
        title: "SPA com Vue.js e API com Laravel",
        issuer: "Udemy",
        period: "Nov 2021",
        url: "https://www.udemy.com/certificate/UC-073bab74-c757-41fb-ac04-3eb3d6f0620f/",
    },
    {
        title: "Desenvolvimento Web Avançado com PHP, Laravel e Vue.JS",
        issuer: "Udemy",
        period: "Mar 2021",
        url: "https://www.udemy.com/certificate/UC-073bab74-c757-41fb-ac04-3eb3d6f0620f/",
    },
];

export default function EducationPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white px-6 py-16 flex flex-col items-center relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            <Link
                href="/"
                className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:border-orange-500 hover:text-orange-400 transition-all duration-200 z-10"
            >
                ←
            </Link>

            <div className="relative z-10 max-w-2xl w-full">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                        Formação <span className="text-orange-400">&amp; Certificações</span>
                    </h1>
                    <p className="text-slate-500 uppercase tracking-widest text-sm">Education &amp; Certifications</p>
                </motion.div>

                {/* Education */}
                <motion.section
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-xs uppercase tracking-widest text-slate-500 mb-4">Formação Acadêmica</h2>
                    <div className="space-y-4">
                        {education.map((edu, i) => (
                            <div key={i} className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-5 hover:border-orange-500/30 transition-all duration-300">
                                <div className="flex items-start justify-between gap-2 mb-1">
                                    <span className="text-orange-400 font-semibold text-sm">{edu.institution}</span>
                                    <span className="text-xs text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">{edu.period}</span>
                                </div>
                                <p className="text-slate-300 text-sm">{edu.degree}</p>
                                <p className="text-slate-600 text-xs italic mt-0.5">{edu.degreeEn}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Certifications */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2 className="text-xs uppercase tracking-widest text-slate-500 mb-4">Certificações</h2>
                    <div className="space-y-4">
                        {certifications.map((cert, i) => (
                            <div key={i} className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-5 hover:border-orange-500/30 transition-all duration-300">
                                <div className="flex items-start justify-between gap-2 mb-1">
                                    <span className="text-slate-300 font-medium text-sm">{cert.title}</span>
                                    <span className="text-xs text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">{cert.period}</span>
                                </div>
                                <p className="text-slate-500 text-xs mb-2">{cert.issuer}</p>
                                <a
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-orange-500 hover:text-orange-400 transition-colors"
                                >
                                    Ver credencial →
                                </a>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </main>
    );
}