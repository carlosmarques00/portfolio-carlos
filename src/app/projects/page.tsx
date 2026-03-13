"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: "afilio",
    title: "Afilio V3",
    role: "Senior Fullstack Engineer",
    description:
      "Atuação em arquitetura e desenvolvimento de microsserviços focados em performance, observabilidade e escalabilidade.",
    impact: [
      "Arquitetura de microsserviços em múltiplas linguagens",
      "Otimização de performance em serviços críticos",
      "Integração com múltiplos sistemas de afiliados",
    ],
    stack: [
      "PHP",
      "Laravel",
      "Vue.js",
      "Golang",
      "MongoDB",
      "Docker",
      "AWS",
      "Microsserviços",
    ],
  },
  {
    id: "lyncas",
    title: "Lyncas",
    role: "Backend Engineer",
    description:
      "Trabalho com orquestração de serviços e manutenção de APIs em ambientes distribuídos.",
    impact: [
      "Padronização de endpoints entre múltiplos serviços",
      "Integração de sistemas legados",
      "Melhoria na observabilidade da plataforma",
    ],
    stack: ["Java", "Spring", "Spring Boot", "RabbitMQ", "AKS", "Azure"],
  },
  {
    id: "dynaton",
    title: "Dynaton",
    role: "Fullstack Engineer",
    description:
      "Desenvolvimento de plataforma de disparo de e-mails com alta capacidade de entrega.",
    impact: [
      "Dashboard Smartmail",
      "Configuração de SMTP e servidores de envio",
      "Arquitetura de APIs e microsserviços",
    ],
    stack: [
      "PHP",
      "Laravel",
      "Node.js",
      "Kafka",
      "Docker",
      "AWS",
      "MySQL",
    ],
  },
  {
    id: "ebusiness",
    title: "E-business4us INC",
    role: "Fullstack Engineer",
    description:
      "Desenvolvimento de plataforma de e-commerce escalável com sistema de cashback.",
    impact: [
      "Plataforma criada do zero",
      "Sistema com 14 gateways de pagamento",
      "Chat em tempo real com tradução automática",
    ],
    stack: [
      "Vue.js",
      "Node.js",
      "PHP",
      "Laravel",
      "MongoDB",
      "Kafka",
    ],
  },
  {
    id: "personal",
    title: "Projetos pessoais",
    role: "Software Architect",
    description:
      "Exploração de arquiteturas modernas e construção de ferramentas open-source.",
    impact: [
      "Sistema de notificações com WebSockets",
      "Arquitetura baseada em microsserviços",
      "Sistema SaaS de agendamentos em desenvolvimento",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Golang",
      "Node.js",
      "React",
      "Next.js",
      "Docker",
      "Kafka",
      "PostgreSQL",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white px-6 py-12 relative">

      <Link
        href="/"
        className="absolute top-6 left-6 text-2xl text-orange-400 hover:text-orange-300"
      >
        ←
      </Link>

      <h1 className="text-4xl font-bold text-center text-orange-400 mb-12">
        Experiência Profissional
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-orange-400 transition"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <h2 className="text-2xl font-semibold text-orange-400 mb-1">
              {project.title}
            </h2>

            <p className="text-sm text-slate-400 mb-4">
              {project.role}
            </p>

            <p className="text-slate-300 mb-4">
              {project.description}
            </p>

            <ul className="text-sm text-slate-300 mb-4 list-disc list-inside space-y-1">
              {project.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-orange-500/10 text-orange-300 text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
