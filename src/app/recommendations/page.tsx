"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFilePdf } from "react-icons/fa";
import Link from "next/link";

export default function RecommendationsPage() {
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
                        Recomendações
                    </h1>
                    <p className="text-slate-500 uppercase tracking-widest text-sm">Recommendations</p>
                </motion.div>

                <motion.div
                    className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-6 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-slate-300 leading-relaxed mb-3">
                        Durante minha carreira, recebi recomendações que destacam minha dedicação, responsabilidade, qualidade técnica e comprometimento em entregar soluções de alto impacto.
                    </p>
                    <p className="text-slate-500 italic text-sm leading-relaxed">
                        Throughout my career, I have received recommendations highlighting my dedication, responsibility, technical quality, and commitment to delivering high-impact solutions.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <a
                        href="/carta-recomendacao.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-slate-800/80 border border-slate-700 hover:border-orange-500/50 hover:bg-slate-700/80 text-slate-300 hover:text-orange-300 py-3 px-5 rounded-lg text-sm font-medium transition-all duration-200 flex-1"
                    >
                        <FaFilePdf size={16} />
                        Ver Carta de Recomendação
                    </a>
                    <a
                        href="https://www.linkedin.com/in/carlosmarquesdev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-slate-800/80 border border-slate-700 hover:border-orange-500/50 hover:bg-slate-700/80 text-slate-300 hover:text-orange-300 py-3 px-5 rounded-lg text-sm font-medium transition-all duration-200 flex-1"
                    >
                        <FaLinkedin size={16} />
                        Recomendações no LinkedIn
                    </a>
                </motion.div>
            </div>
        </main>
    );
}