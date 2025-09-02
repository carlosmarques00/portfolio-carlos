"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
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
                Sobre mim | About me
            </motion.h1>

            <motion.div
                className="max-w-4xl text-lg text-slate-300 leading-relaxed space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                {/* Introdução */}
                <p>
                    Sou <strong>Carlos Marques</strong>, desenvolvedor Full Stack com mais
                    de uma década de experiência em tecnologia. Minha carreira começou com
                    foco em desenvolvimento de sistemas web, evoluindo para projetos cada
                    vez mais complexos que exigiam não apenas habilidades técnicas, mas
                    também visão estratégica e boas práticas de arquitetura.
                </p>
                <p className="italic text-slate-400">
                    I am <strong>Carlos Marques</strong>, a Full Stack developer with over
                    a decade of experience in technology. My career started with a focus
                    on web systems development, evolving into increasingly complex
                    projects that required not only technical skills but also strategic
                    vision and solid architectural practices.
                </p>

                {/* Lyncas */}
                <p>
                    Atuei na <strong>Lyncas</strong>, onde desenvolvi aplicações fullstack
                    com React, Node.js e Java, criando microsserviços, APIs REST e
                    integrações com bancos de dados relacionais e não-relacionais.
                </p>
                <p className="italic text-slate-400">
                    I worked at <strong>Lyncas</strong>, where I developed fullstack
                    applications with React, Node.js, and Java, building microservices,
                    REST APIs, and integrations with relational and non-relational
                    databases.
                </p>

                {/* Afilio V3 */}
                <p>
                    No projeto <strong>Afilio V3</strong>, trabalhei em soluções de larga
                    escala com Node.js, Express e Golang, focadas em performance e
                    escalabilidade, além da integração de sistemas de autenticação JWT.
                </p>
                <p className="italic text-slate-400">
                    In the <strong>Afilio V3</strong> project, I worked on large-scale
                    solutions with Node.js, Express, and Golang, focused on performance
                    and scalability, as well as JWT authentication system integrations.
                </p>

                {/* Dynaton */}
                <p>
                    Também tive participação importante na{" "}
                    <strong>Dynaton</strong>, com foco em arquitetura distribuída,
                    implementando microsserviços, APIs modernas e aplicações responsivas
                    com Next.js.
                </p>
                <p className="italic text-slate-400">
                    I also played a key role at <strong>Dynaton</strong>, focusing on
                    distributed architecture, implementing microservices, modern APIs, and
                    responsive applications with Next.js.
                </p>

                {/* eBusiness For Us */}
                <p>
                    Além disso, colaborei na <strong>eBusiness For Us</strong> desde a
                    criação do zero de um e-commerce robusto, aplicando PHP, Laravel e
                    bancos de dados para entregar uma plataforma escalável e segura.
                </p>
                <p className="italic text-slate-400">
                    Furthermore, I contributed at <strong>eBusiness For Us</strong> since
                    the creation of a robust e-commerce from scratch, applying PHP,
                    Laravel, and databases to deliver a scalable and secure platform.
                </p>

                {/* Skills */}
                <p>
                    Ao longo da minha trajetória, explorei stacks como{" "}
                    <strong>
                        Java, Spring, PHP, Laravel, Vue.js, React, Node.js, TypeScript
                    </strong>{" "}
                    e bancos relacionais e não-relacionais como PostgreSQL e MongoDB.
                </p>
                <p className="italic text-slate-400">
                    Throughout my journey, I explored stacks such as{" "}
                    <strong>
                        Java, Spring, PHP, Laravel, Vue.js, React, Node.js, TypeScript
                    </strong>{" "}
                    and both relational and non-relational databases like PostgreSQL and
                    MongoDB.
                </p>

                {/* Fechamento */}
                <p>
                    Sou movido por desafios e pela oportunidade de transformar ideias em
                    produtos digitais de impacto. Acredito na combinação entre código de
                    qualidade, boas práticas e colaboração em equipe para entregar
                    resultados que fazem a diferença.
                </p>
                <p className="italic text-slate-400">
                    I am driven by challenges and the opportunity to transform ideas into
                    impactful digital products. I believe in combining clean code, best
                    practices, and teamwork to deliver results that truly make a
                    difference.
                </p>
            </motion.div>
        </main>
    );
}
