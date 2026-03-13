"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const navLinks = [
    { href: "/about", label: "Sobre mim" },
    { href: "/projects", label: "Experiências" },
    { href: "/education", label: "Formação" },
    { href: "/recommendations", label: "Recomendações" },
];

const socialLinks = [
    { href: "mailto:carlosmarques.dev00@email.com", icon: <FaEnvelope size={20} />, label: "Email" },
    { href: "https://linkedin.com/in/carlosmarquesdev", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
    { href: "https://github.com/carlosmarques00", icon: <FaGithub size={20} />, label: "GitHub" },
    { href: "https://wa.me/5563984040951", icon: <FaWhatsapp size={20} />, label: "WhatsApp" },
];

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-white px-6 relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center max-w-3xl w-full">
                <motion.div
                    className="relative mb-8"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="w-36 h-36 rounded-full border-2 border-orange-500/60 p-1">
                        <img src="/perfil.jpg" alt="Carlos Marques" className="w-full h-full rounded-full object-cover" />
                    </div>
                    <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-slate-900 rounded-full" />
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-6xl font-bold tracking-tight text-center mb-2"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    Carlos <span className="text-orange-400">Marques</span>
                </motion.h1>

                <motion.p
                    className="text-slate-400 text-lg md:text-xl font-medium tracking-widest uppercase mb-6 text-center"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                >
                    Senior Full Stack Developer · 11+ anos
                </motion.p>

                <motion.div
                    className="flex gap-4 mb-10"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                >
                    {socialLinks.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:border-orange-500 hover:text-orange-400 transition-all duration-200 hover:scale-110"
                        >
                            {s.icon}
                        </a>
                    ))}
                </motion.div>

                <motion.p
                    className="text-slate-300 text-center text-base leading-relaxed max-w-2xl mb-10 space-y-2"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                >
                    Desenvolvedor Full Stack com mais de 11 anos de experiência, especializado em{" "}
                    <span className="text-orange-300 font-medium">PHP · Laravel · Vue.js</span>
                    {" "}com domínio em SPAs, APIs RESTful e arquiteturas de microsserviços.{" "}
                    <br className="hidden md:block" />
                    Atuei em projetos de larga escala em empresas como{" "}
                    <span className="text-slate-200 font-medium">Uplexis, wehandle, Afilio e Dynaton</span>
                    {" "}entregando soluções robustas com{" "}
                    <span className="text-orange-300 font-medium">Java · Spring Boot · React · Node.js · Golang · Kafka · AWS · Docker</span>
                    {" "}em ambientes de alta demanda.
                    <br /><br />
                    <span className="text-slate-400 italic">
                        Full Stack Developer with over 11 years of experience, specialized in{" "}
                        <span className="text-orange-300/80 not-italic font-medium">PHP · Laravel · Vue.js</span>
                        {" "}with expertise in SPAs, RESTful APIs and microservice architectures.{" "}
                        <br className="hidden md:block" />
                        Worked on large-scale projects at companies like{" "}
                        <span className="text-slate-300 not-italic font-medium">Uplexis, wehandle, Afilio and Dynaton</span>
                        {" "}delivering robust solutions with{" "}
                        <span className="text-orange-300/80 not-italic font-medium">Java · Spring Boot · React · Node.js · Golang · Kafka · AWS · Docker</span>
                        {" "}in high-demand environments.
                    </span>
                </motion.p>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="bg-slate-800/80 border border-slate-700 hover:border-orange-500/50 hover:bg-slate-700/80 text-slate-300 hover:text-orange-300 text-center py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                </motion.div>
            </div>

            <motion.footer
                className="absolute bottom-6 text-xs text-slate-600 text-center flex flex-col items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <div className="w-8 h-px bg-slate-700 mb-1" />
                <span>
                    © {new Date().getFullYear()}{" "}
                    <span className="text-slate-500">Carlos Marques</span>
                    {" "}· Todos os direitos reservados
                </span>
            </motion.footer>
        </main>
    );
}