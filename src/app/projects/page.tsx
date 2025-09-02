export default function ProjectsPage() {
    const projects = [
        {
            title: "Sistema de Gestão",
            description: "Aplicação FullStack com Node.js e React para controle de clientes e relatórios.",
            tech: ["Node.js", "React", "MongoDB"],
            link: "https://github.com/seu-usuario/projeto1",
        },
        {
            title: "Landing Page Responsiva",
            description: "Site moderno feito com Next.js e Tailwind, 100% otimizado para mobile.",
            tech: ["Next.js", "TailwindCSS"],
            link: "https://github.com/seu-usuario/projeto2",
        },
        {
            title: "API REST de Produtos",
            description: "API em Express.js com autenticação JWT e banco PostgreSQL.",
            tech: ["Express", "PostgreSQL", "JWT"],
            link: "https://github.com/seu-usuario/projeto3",
        },
    ];

    return (
        <main className="min-h-screen bg-slate-900 text-white px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-10">Projetos</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
                    >
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
                            {project.title}
                        </h2>
                        <p className="text-slate-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="bg-emerald-500/20 text-emerald-300 text-xs px-2 py-1 rounded"
                                >
                  {t}
                </span>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            className="text-emerald-400 hover:underline text-sm"
                        >
                            Ver no GitHub →
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
}
