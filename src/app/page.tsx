"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-white px-6">
            {/* Foto */}
            <motion.img
                src="/perfil.jpg"
                alt="Foto de Carlos Marques"
                className="w-48 h-48 rounded-full border-4 border-orange-500 shadow-lg mb-6 object-cover hover:scale-110 transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            />

            {/* Título */}
            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-4 text-center flex items-center justify-center gap-2 flex-wrap"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                👋 <span>Olá, eu sou | Hello, I am</span>{" "}
                <motion.span
                    className="text-orange-500 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600"
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    Carlos Marques
                </motion.span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.h2
                className="text-xl md:text-2xl font-semibold mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                Desenvolvedor Full Stack | Full Stack Developer
            </motion.h2>

            {/* Descrição */}
            <motion.p
                className="text-lg md:text-xl text-slate-300 mb-6 max-w-2xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                Especialista em desenvolvimento de software com experiência em
                arquiteturas modernas, escaláveis e de alto desempenho. Trabalho com{" "}
                <strong>Java, Spring, PHP, Laravel, Vue.js, React, Node.js</strong> e
                bancos de dados relacionais e não-relacionais.
                <br />
                <span className="text-slate-400 italic">
          Software development specialist with experience in modern, scalable
          and high-performance architectures. I work with{" "}
                    <strong>Java, Spring, PHP, Laravel, Vue.js, React, Node.js</strong>{" "}
                    and relational & non-relational databases.
        </span>
            </motion.p>

            {/* Botões */}
            <motion.div
                className="flex gap-4 justify-center flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
            >
                <Link
                    href="/about"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-medium transition"
                >
                    Sobre mim | About me
                </Link>
                <Link
                    href="/projects"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-medium transition"
                >
                    Projetos | Projects
                </Link>
                <Link
                    href="/education"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-medium transition"
                >
                    Formação & Certificações | Education & Certifications
                </Link>
                <Link
                    href="/recommendations"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-medium transition"
                >
                    Recomendações | Recommendations
                </Link>
                <Link
                    href="/contact"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-medium transition"
                >
                    Contato | Contact
                </Link>
            </motion.div>

            {/* Rodapé */}
            <footer className="mt-16 text-sm text-slate-500 text-center">
                © {new Date().getFullYear()} Carlos Marques. Todos os direitos
                reservados. | All rights reserved.
            </footer>
        </main>
    );
}
