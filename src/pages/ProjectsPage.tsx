import {useEffect} from "react";

export function ProjectsPage() {

    useEffect(() => {
        document.title = "kyc.dev - projects";
    }, []);

    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <h1 className="text-center">
                PROJECTS PAGE - COMING SOON
            </h1>
        </div>
    )
}