import {type ReactNode, useEffect, useRef, useState} from "react";

type SidebarItem = {
    icon: ReactNode
    fullName: string
    link: string
}

export function Sidebar() {

    const BASE_URL: string = import.meta.env.VITE_BASE_URL;
    const [isHovered, setIsHovered] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const textTimerRef = useRef<number | null>(null);

    const sidebarItems: SidebarItem[] = [
        {
            icon: <img src = {BASE_URL + "/icon-about.png"} alt = "about" className="h-[48px] mr-[1px]" />,
            fullName: "About",
            link: "/"
        },
        {
            icon: <img src = {BASE_URL + "/icon-projects.png"} alt = "projects" className="h-[48px] mr-[-4px]" />,
            fullName: "Projects",
            link: BASE_URL + "/projects"
        },
        {
            icon: <img src = {BASE_URL + "/icon-contact.png"} alt = "contact" className="h-[48px]" />,
            fullName: "Contact",
            link: BASE_URL + "/contact"
        },
        {
            icon: <img src = {BASE_URL + "/icon-github.png"} alt = "github" className="h-[48px]" />,
            fullName: "Github",
            link: "https://github.com/KYCc"
        },
    ]

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640); // 640px is Tailwind's 'sm' breakpoint
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) {
            setIsTextVisible(true);
            return;
        }
        if (isHovered) {
            textTimerRef.current = window.setTimeout(() => {
                setIsTextVisible(true);
            }, 200);
        } else {
            if (textTimerRef.current) {
                window.clearTimeout(textTimerRef.current);
                textTimerRef.current = null;
            }
            setIsTextVisible(false);
        }
    }, [isHovered, isMobile]);

    return (
        <nav
            className={`fixed left-0 top-0 z-10 sm:h-screen bg-[#2f3229] transition-all duration-300 ease-in-out`}
            style={{
                width: isMobile ? '100%' : (isHovered ? '180px' : '75px'),
                height: isMobile ? "auto" : "100vh"
            }}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
            <div className={`flex p-2 mt-3 ${isMobile ? "flex-row flex-wrap gap-2 justify-center" : "flex-col"}`}>
                {sidebarItems.map((item, key) => (
                    <a
                        href={item.link}
                        className="flex flex-row items-center px-2 py-2 rounded-md hover:bg-[#838e88] transition-colors duration-300"
                        key={key}
                    >
                        {item.icon}
                        {isTextVisible && (
                            <span className={`text-white font-medium text-lg ${isMobile ? "ml-2" : "ml-4"}`}>
                                {item.fullName}
                            </span>
                        )}
                    </a>
                ))}
            </div>
        </nav>
    )
}