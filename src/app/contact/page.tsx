"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
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
                Contato | Contact
            </motion.h1>

            {/* Texto em PT */}
            <motion.p
                className="text-lg text-slate-300 mb-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Vamos conversar? Entre em contato comigo pelos canais abaixo:
            </motion.p>

            {/* Texto em EN */}
            <motion.p
                className="italic text-slate-400 mb-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                Let’s connect! Feel free to reach out through the channels below:
            </motion.p>

            <div className="flex flex-col gap-4 items-center">
                <a
                    href="mailto:carlosmarques.dev00@email.com"
                    className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md text-white font-medium transition transform hover:scale-105"
                >
                    <FaEnvelope /> Email
                </a>
                <a
                    href="https://linkedin.com/in/carlosmarquesdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md text-white font-medium transition transform hover:scale-105"
                >
                    <FaLinkedin /> LinkedIn
                </a>
                <a
                    href="https://github.com/carlosmarques00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md text-white font-medium transition transform hover:scale-105"
                >
                    <FaGithub /> GitHub
                </a>
            </div>
        </main>
    );
}
