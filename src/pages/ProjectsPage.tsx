// src/pages/ProjectsPage.tsx
import { useEffect, useState } from "react";

type Project = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export function ProjectsPage() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    useEffect(() => {
        document.title = "kyc.dev - projects";
    }, []);

    const projects: Project[] = [
        {
            id: 1,
            title: "Spiredle",
            description: "A 'Slay the Spire' Wordle-inspired card guessing game. Guess the daily card in as few attempts as possible!",
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            link: "https://spiredle.com/"
        },
        {
            id: 2,
            title: "Claw Game",
            description: "A small game I made for fun with the Godot Engine and my first foray into game development. Control the claw to grab prizes!",
            technologies: ["Godot Engine", ".NET", "C#", "Blender"],
            link: "https://github.com/KYCc/ClawGame"
        }
    ];

    return (
        <main className="relative min-h-screen w-full bg-[#151e1d] text-gray-100 overflow-hidden pt-50 sm:pt-12 sm:pl-24 md:pl-28 lg:pl-32 px-6 md:px-8 lg:px-12 py-12">
            <div
                className="absolute top-1/4 -right-24 w-96 h-96 rounded-full pointer-events-none opacity-6"
                style={{ background: "radial-gradient(circle, rgba(249,204,15,0.06), transparent 50%)" }}
            />
            <div
                className="absolute bottom-1/4 -left-24 w-80 h-80 rounded-full pointer-events-none opacity-5"
                style={{ background: "radial-gradient(circle, rgba(249,204,15,0.05), transparent 50%)" }}
            />

            <section className="relative mx-auto max-w-5xl space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="font-ds text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-wider text-[#efe4c6] drop-shadow-md">
                        Projects
                    </h1>
                    <p className="text-sm text-[#cfc7b3] max-w-2xl mx-auto">
                        A collection of things I've built.
                    </p>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#f9cc0f]/12 to-transparent" />

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            className="group relative"
                        >
                            <div
                                className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f9cc0f]/0 via-[#f9cc0f]/0 to-[#f9cc0f]/0 blur-xl transition-all duration-500 ${
                                    hoveredProject === project.id
                                        ? "from-[#f9cc0f]/20 via-[#f9cc0f]/10 to-transparent"
                                        : ""
                                }`}
                            />

                            <div className={`relative rounded-2xl border bg-[#0f1412]/70 backdrop-blur-sm p-8 shadow-2xl transition-all duration-500 ${
                                hoveredProject === project.id
                                    ? "border-[#f9cc0f]/35 translate-y-[-4px]"
                                    : "border-[#f9cc0f]/18"
                            }`}>
                                <h2 className="font-ds text-2xl sm:text-3xl text-[#efe4c6] mb-3 tracking-wide">
                                    {project.title}
                                </h2>

                                <p className="text-sm text-[#cfc7b3] leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <p className="text-xs uppercase tracking-widest text-[#c9b38a]/85 mb-3">
                                        Built with
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className={`inline-block rounded-full bg-[#121717] px-3 py-1 text-xs font-medium border transition-all duration-300 ${
                                                    hoveredProject === project.id
                                                        ? "border-[#f9cc0f]/30 text-white"
                                                        : "border-[#f9cc0f]/12 text-[#efe6d1]"
                                                }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {project.link && (
                                    <a
                                        href={project.link}
                                        className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                                            hoveredProject === project.id
                                                ? "text-[#f9cc0f]"
                                                : "text-[#d8d2b5]"
                                        }`}
                                    >
                                        View Project
                                        <span className={`transition-transform duration-300 ${
                                            hoveredProject === project.id ? "translate-x-1" : ""
                                        }`}>
                                            →
                                        </span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#f9cc0f]/12 to-transparent" />

                <p className="text-[#efe4c6] text-sm">To be continued...</p>
            </section>
        </main>
    );
}