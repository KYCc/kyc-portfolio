import {ConstructionPage} from "./pages/ConstructionPage.tsx";
import {Sidebar} from "./components/navigation/Sidebar.tsx";
import {HashRouter, Route, Routes} from "react-router-dom";
import {AboutPage} from "./pages/AboutPage.tsx";
import {ProjectsPage} from "./pages/ProjectsPage.tsx";
import {ContactPage} from "./pages/ContactPage.tsx";

const underConstruction = import.meta.env.VITE_CONSTRUCTION === 'true'

function App() {

    return underConstruction ?
        <ConstructionPage /> :
        <HashRouter>
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
        </HashRouter>
}

export default App
