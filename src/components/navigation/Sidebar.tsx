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
            icon: <img src = {BASE_URL + "/icon-github.png"} alt = "github" className="h-[48px]" />,
            fullName: "Github",
            link: "https://github.com/KYCc"
        },
    ]

    useEffect(() => {
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
    }, [isHovered]);

    return (
        <nav
            className={`fixed left-0 top-0 z-10 h-screen bg-[#DD8036] transition-all duration-300 ease-in-out`}
            style={{
                width: isHovered ? '180px' : '75px'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-col h-[75px] p-2 mt-4">
                {sidebarItems.map((item, key) => (
                    <a
                        href={item.link}
                        className="flex flex-row items-center px-2 py-2 hover:bg-[#e69a5c] transition-colors duration-300"
                        key={key}
                    >
                        {item.icon}
                        {isTextVisible && (
                            <span className="ml-4 text-white font-medium text-lg">
                                {item.fullName}
                            </span>
                        )}
                    </a>
                ))}
            </div>
        </nav>
    )
}