"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function RecommendationsPage() {
    return (
        <main className="min-h-screen bg-slate-900 text-white px-6 py-12 flex flex-col items-center relative">
            {/* Botão de voltar */}
            <Link
                href="/"
                className="absolute top-6 left-6 w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-md shadow-md transition transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg
                           before:content-[''] before:absolute before:top-0 before:right-0 before:w-4 before:h-4 before:bg-orange-700 before:rounded-tr-md before:clip-path-[polygon(0_0,100%_0,100%_100%)]"
            >
                ←
            </Link>

            <motion.h1
                className="text-4xl font-bold text-orange-400 mb-8"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Recomendações | Recommendations
            </motion.h1>

            <motion.div
                className="bg-slate-800 rounded-lg shadow-lg p-6 max-w-3xl text-center space-y-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Texto em PT */}
                <p className="text-lg text-slate-300">
                    Durante minha carreira, recebi recomendações que destacam minha
                    dedicação, responsabilidade, qualidade técnica e comprometimento em
                    entregar soluções de alto impacto.
                </p>

                {/* Texto em EN */}
                <p className="italic text-slate-400">
                    Throughout my career, I have received recommendations highlighting my
                    dedication, responsibility, technical quality, and commitment to
                    delivering high-impact solutions.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    {/* Link para a carta em PDF */}
                    <a
                        href="/carta-recomendacao.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition transform hover:scale-105"
                    >
                        📄 Ver Carta de Recomendação | View Letter
                    </a>

                    {/* Link para LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/carlosmarquesdev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition transform hover:scale-105"
                    >
                        <FaLinkedin size={20} /> Recomendações no LinkedIn
                    </a>
                </div>
            </motion.div>
        </main>
    );
}

