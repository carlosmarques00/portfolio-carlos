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
                    a decade of experience in technology. My career began with a focus on
                    web systems development, and over time I evolved into increasingly
                    complex projects that demanded not only technical skills but also
                    strategic vision and solid architectural practices.
                </p>

                {/* Lyncas */}
                <p>
                    Atuei na <strong>Lyncas</strong>, onde trabalhei principalmente com
                    Orquestração, atuando nos apontamentos e ajustes de endpoints novos e
                    antigos entre os diversos projetos.
                </p>
                <p className="italic text-slate-400">
                    I worked at <strong>Lyncas</strong>, where I focused mainly on
                    orchestration tasks, handling adjustments and creation of new and legacy
                    endpoints across multiple projects.
                </p>

                {/* Afilio V3 */}
                <p>
                    No projeto <strong>Afilio V3</strong>, atuei em projetos de larga escala
                    com foco em performance, escalabilidade, observabilidade e resolução de
                    problemas. Trabalhei em microsserviços em diversas linguagens diferentes,
                    trazendo robustez e otimização com Golang e MongoDb. Também desenvolvi
                    soluções Fullstack em PHP/Laravel e Vue.js/JavaScript.
                </p>
                <p className="italic text-slate-400">
                    In the <strong>Afilio V3</strong> project, I participated in large-scale
                    projects focused on performance, scalability, observability, and
                    problem-solving. I built robust microservices in multiple languages,
                    optimized with Golang and MongoDB. I also developed Fullstack solutions
                    using PHP/Laravel and Vue.js/JavaScript.
                </p>

                {/* Dynaton */}
                <p>
                    Alocado na <strong>Dynaton</strong>, desenvolvi a Dashboard
                    <strong> Smartmail</strong>, com disparos de e-mails, configuração de
                    domínios, Postal e Sending Servers via SMTP. Também trabalhei na
                    implementação de APIs, microsserviços e resolução de problemas.
                </p>
                <p className="italic text-slate-400">
                    At <strong>Dynaton</strong>, I developed the <strong>Smartmail</strong>{" "}
                    Dashboard, focused on email campaigns, domain configuration, Postal and
                    Sending Servers via SMTP. I also implemented APIs, microservices, and
                    handled troubleshooting.
                </p>

                {/* E-business4us INC */}
                <p>
                    Na <strong>E-business4us INC</strong>, participei da criação do zero de
                    uma plataforma de e-commerce escalável com cashback. Também desenvolvi
                    um chatbox com tradução em tempo real e atuei na sustentação do projeto
                    <strong> Supercheckout</strong>, que integrava 14 gateways de pagamento.
                </p>
                <p className="italic text-slate-400">
                    At <strong>E-business4us INC</strong>, I contributed to building from
                    scratch a scalable e-commerce platform with cashback. I also developed a
                    chatbox with real-time translation and worked on maintaining the{" "}
                    <strong>Supercheckout</strong> project, which integrated 14 payment
                    gateways.
                </p>

                {/* Freelancer */}
                <p>
                    Como <strong>Freelancer</strong>, desenvolvi soluções sob medida para
                    clientes diversos, com foco em qualidade e boas práticas.
                </p>
                <p className="italic text-slate-400">
                    As a <strong>Freelancer</strong>, I delivered tailor-made solutions for
                    various clients, always focusing on quality and best practices.
                </p>

                {/* RURALTINS */}
                <p>
                    No <strong>RURALTINS</strong>, construí sistemas internos para gestão
                    administrativa e rural.
                </p>
                <p className="italic text-slate-400">
                    At <strong>RURALTINS</strong>, I built internal systems for
                    administrative and rural management.
                </p>

                {/* Hospital Regional */}
                <p>
                    No <strong>Hospital Regional de Araguaçu</strong>, desenvolvi sistemas
                    para gestão hospitalar, garantindo confiabilidade e escalabilidade.
                </p>
                <p className="italic text-slate-400">
                    At the <strong>Hospital Regional de Araguaçu</strong>, I developed
                    hospital management systems ensuring reliability and scalability.
                </p>

                {/* Projetos pessoais */}
                <p>
                    Em <strong>Projetos pessoais</strong>, criei aplicações open-source e
                    portfólios, explorando novas tecnologias e boas práticas de
                    desenvolvimento. Também desenvolvi um sistema de notificações com
                    Websockets e atualmente trabalho em um sistema de agendamentos para
                    múltiplas áreas de atuação.
                </p>
                <p className="italic text-slate-400">
                    In <strong>Personal Projects</strong>, I created open-source
                    applications and portfolios, exploring new technologies and development
                    best practices. I also built a notification system with Websockets and
                    am currently working on a scheduling system for multiple business areas.
                </p>

                {/* Fechamento */}
                <p>
                    Sou movido por desafios e pela oportunidade de transformar ideias em
                    produtos digitais de impacto. Acredito na combinação entre código de
                    qualidade, boas práticas e colaboração em equipe para entregar
                    resultados que fazem a diferença.
                </p>
                <p className="italic text-slate-400">
                    I am driven by challenges and by the opportunity to transform ideas into
                    impactful digital products. I believe in combining clean code, best
                    practices, and teamwork to deliver results that truly make a difference.
                </p>
            </motion.div>
        </main>
    );
}
