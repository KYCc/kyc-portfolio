// src/pages/AboutPage.tsx
import {type ReactNode, useEffect, useState} from "react";
import {
    SiAmazonapigateway, SiDocker,
    SiDotnet, SiGit,
    SiJavascript,
    SiPostgresql,
    SiReact,
    SiSpring,
    SiTailwindcss,
    SiTypescript,
    SiClaude
} from "react-icons/si"
import { BiLogoJava } from "react-icons/bi";
import {PlaywrightIcon} from "../assets/icons/Icons.tsx";

type skill = {
    id: number
    name: string
    icon: ReactNode
}

export function AboutPage() {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    useEffect(() => {
        document.title = "kyc.dev - about";
    }, []);

    const skills: skill[] = [
        {id: 1, name: "React", icon: <SiReact color="white"/>},
        {id: 2, name: "JavaScript", icon: <SiJavascript color="white"/>},
        {id: 3, name: "TypeScript", icon: <SiTypescript color="white"/>},
        {id: 4, name: "Tailwind CSS", icon: <SiTailwindcss color="white"/>},
        {id: 5, name: ".NET", icon: <SiDotnet color="white"/>},
        {id: 6, name: "Java", icon: <BiLogoJava color="white"/>},
        {id: 7, name: "Spring Boot", icon: <SiSpring color="white"/>},
        {id: 8, name: "SQL", icon: <SiPostgresql color="white"/>},
        {id: 9, name: "REST", icon: <SiAmazonapigateway color="white"/> },
        {id: 10, name: "Git", icon: <SiGit color="white"/>},
        {id: 11, name: "Docker", icon: <SiDocker color="white"/> },
        {id: 12, name: "Claude Code", icon: <SiClaude color="white"/> },
        {id: 13, name: "Playwright", icon: <PlaywrightIcon /> },
    ]

    return (
        <main className="relative min-h-screen w-full bg-[#151e1d] text-gray-100 overflow-hidden content-center pt-50 sm:pt-12 sm:pl-24 md:pl-28 lg:pl-32 px-6 md:px-8 lg:px-12 py-12">
            {/* subtle radial glow top-left */}
            <div
                className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none opacity-8"
                style={{ background: "radial-gradient(circle at 20% 20%, rgba(249,204,15,0.045), transparent 30%)" }}
            />

            <section className="relative mx-auto max-w-4xl space-y-8">
                {/* Header / Hero - No card */}
                <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
                    <div className="w-full lg:w-2/3">
                        <h1 className="font-ds text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-wider text-[#efe4c6] drop-shadow-md">
                            Kamiel Ceuppens
                        </h1>
                        <p className="mt-2 text-sm uppercase tracking-widest text-[#c9b38a]/85">
                            Full Stack Developer
                        </p>

                        <div className="mt-6 max-w-2xl text-sm text-[#cfc7b3] leading-relaxed">
                            <p>I love learning stuff, making stuff and sharing stuff.</p>
                            <p>Also an avid gamer and gym goer.</p>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href={"#/projects"}
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-[#d8d2b5] ring-1 ring-transparent hover:ring-[#f9cc0f]/30 transition-all"
                            >
                                View projects
                            </a>
                            <a
                                href={"#/contact"}
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-[#d8d2b5] ring-1 ring-transparent hover:ring-[#f9cc0f]/30 transition-all"
                            >
                                Get in touch
                            </a>
                            <a
                                href="https://github.com/KYCc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-[#d8d2b5] ring-1 ring-transparent hover:ring-[#f9cc0f]/30 transition-all"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#f9cc0f]/8 to-transparent" />

                {/* Skills Section - In Card */}
                <div className="rounded-2xl border border-[#f9cc0f]/18 bg-[#0f1412]/70 backdrop-blur-sm p-8 lg:p-12 shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-6 text-[#efe4c6]">Skills & Expertise</h2>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((s, key) => (
                            <span
                                key={key}
                                onMouseEnter={() => setHoveredIndex(s.id)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`inline-block rounded-full bg-[#121717] px-4 py-2 text-sm font-medium  border ${hoveredIndex === s.id ? "border-[#f9cc0f]/25 text-white" : "border-[#f9cc0f]/12 text-[#efe6d1]"} transition-colors`}
                            >
                                {s.name}
                            </span>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#f9cc0f]/8">
                        <div className="flex justify-between items-center">
                            {skills.map((s, key) => (
                            <div
                                key={key}
                                onMouseEnter={() => setHoveredIndex(s.id)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`flex items-center justify-center transition-all duration-300 ${
                                    hoveredIndex === s.id
                                        ? "scale-110"
                                        : "opacity-60 hover:opacity-80"
                                }`}
                            >
                                <div className="text-2xl sm:text-3xl">
                                    {s.icon}
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}