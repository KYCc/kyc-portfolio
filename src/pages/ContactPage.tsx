import {useEffect} from "react";

export function ContactPage() {

    useEffect(() => {
        document.title = "kyc.dev - contact";
    }, []);

    return (
        <main className="relative min-h-screen w-full bg-[#151e1d] text-gray-100 overflow-hidden content-center pt-50 sm:pt-12 sm:pl-24 md:pl-28 lg:pl-32 px-6 md:px-8 lg:px-12 py-12">
            <div
                className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none opacity-8"
                style={{ background: "radial-gradient(circle at 20% 20%, rgba(249,204,15,0.045), transparent 30%)" }}
            />

            <section className="relative mx-auto max-w-2xl space-y-8">
                <div className="rounded-2xl border border-[#f9cc0f]/18 bg-[#0f1412]/70 backdrop-blur-sm p-8 lg:p-12 shadow-2xl">
                    <h1 className="font-ds text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-wider text-[#efe4c6] drop-shadow-md mb-6">
                        Get in Touch
                    </h1>

                    <p className="text-sm text-[#cfc7b3] leading-relaxed mb-6">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
                    </p>

                    <div className="pt-6 border-t border-[#f9cc0f]/8">
                        <p className="text-xs uppercase tracking-widest text-[#c9b38a]/85 mb-2">
                            Email
                        </p>
                        <a
                            href="mailto:kyceuppens@gmail.com"
                            className="text-lg text-[#cfc7b3] hover:text-white transition-colors underline decoration-[#f9cc0f]/30 hover:decoration-[#ffd700]/50"
                        >
                            kyceuppens@gmail.com
                        </a>
                        <p className="text-xs uppercase tracking-widest text-[#c9b38a]/85 mb-2 mt-6">
                            LinkedIn
                        </p>
                        <a
                            href="https://www.linkedin.com/in/kamiel-ceuppens/"
                            className="text-lg text-[#cfc7b3] hover:text-white transition-colors underline decoration-[#f9cc0f]/30 hover:decoration-[#ffd700]/50"
                        >
                            https://www.linkedin.com/in/kamiel-ceuppens/
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}