import {ConstructionPage} from "./pages/ConstructionPage.tsx";
import {Sidebar} from "./components/navigation/Sidebar.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AboutPage} from "./pages/AboutPage.tsx";
import {ProjectsPage} from "./pages/ProjectsPage.tsx";
import {ContactPage} from "./pages/ContactPage.tsx";

const underConstruction = import.meta.env.VITE_CONSTRUCTION === 'true'

function App() {
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    return underConstruction ?
        <ConstructionPage /> :
        <BrowserRouter basename={BASE_URL}>
            <Sidebar/>
            <Routes>
                <Route
                    path="/"
                    element={<AboutPage />}
                />
                <Route
                    path={"/projects"}
                    element={<ProjectsPage />}
                />
                <Route
                    path={"/contact"}
                    element={<ContactPage />}
                />
            </Routes>
        </BrowserRouter>
}

export default App
