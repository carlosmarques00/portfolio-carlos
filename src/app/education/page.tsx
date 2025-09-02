"use client";
import React from "react";
import { motion } from "framer-motion";

export default function EducationPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white px-6 py-12 flex flex-col items-center">
            <motion.h1
                className="text-4xl md:text-5xl font-bold text-orange-400 mb-8 text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Formação Acadêmica & Certificações <br />
                <span className="text-slate-400 text-2xl">
                    Education & Certifications
                </span>
            </motion.h1>

            <motion.div
                className="bg-slate-800 rounded-lg shadow-md p-6 mb-6 max-w-3xl w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                {/* Formação Acadêmica */}
                <h2 className="text-2xl font-semibold text-slate-200 mb-4">
                    📖 Formação Acadêmica | Academic Background
                </h2>
                <ul className="text-left space-y-3 text-slate-300 mb-4">
                    <li>
                        <strong>UNOPAR – Universidade Norte do Paraná</strong> <br />
                        Pós-graduação Lato Sensu em Administração de Banco de Dados <br />
                        <span className="text-slate-400 italic">
                            Jan 2021 – Dez 2021 | Postgraduate in Database Administration
                        </span>
                    </li>
                    <li>
                        <strong>UNOPAR – Universidade Norte do Paraná</strong> <br />
                        Bacharelado em Análise e Desenvolvimento de Sistemas <br />
                        <span className="text-slate-400 italic">
                            Jul 2017 – Jul 2020 | Bachelor in Systems Analysis and Development
                        </span>
                    </li>
                </ul>

                {/* Certificações */}
                <h2 className="text-2xl font-semibold text-slate-200 mb-4">
                    🏅 Certificações | Certifications
                </h2>
                <ul className="text-left space-y-3 text-slate-300">
                    <li>
                        <strong>Testes Unitários e TDD com PHP e PHPUnit</strong> – Udemy <br />
                        <span className="text-slate-400 italic">
                            Mai 2023 – Expira Mai 2026 | May 2023 – Expires May 2026
                        </span>{" "}
                        <br />
                        <a
                            href="https://www.udemy.com/certificate/UC-22a65e37-198c-468f-819e-05c13ec417d1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-400 hover:underline"
                        >
                            🔗 Ver credencial | View credential
                        </a>
                    </li>
                    <li>
                        <strong>SPA com Vue.js e API com Laravel</strong> – Udemy <br />
                        <span className="text-slate-400 italic">
                            Nov 2021 – Expira Nov 2024 | Nov 2021 – Expires Nov 2024
                        </span>{" "}
                        <br />
                        <a
                            href="https://www.udemy.com/certificate/UC-073bab74-c757-41fb-ac04-3eb3d6f0620f/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-400 hover:underline"
                        >
                            🔗 Ver credencial | View credential
                        </a>
                    </li>
                    <li>
                        <strong>Desenvolvimento Web Avançado com PHP, Laravel e Vue.JS</strong> – Udemy <br />
                        <span className="text-slate-400 italic">
                            Mar 2021 – Expira Mar 2024 | Mar 2021 – Expires Mar 2024
                        </span>{" "}
                        <br />
                        <a
                            href="https://www.udemy.com/certificate/UC-073bab74-c757-41fb-ac04-3eb3d6f0620f/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-400 hover:underline"
                        >
                            🔗 Ver credencial | View credential
                        </a>
                    </li>
                </ul>
            </motion.div>
        </main>
    );
}
