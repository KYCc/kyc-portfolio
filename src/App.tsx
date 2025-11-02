import {ConstructionPage} from "./pages/ConstructionPage.tsx";
import {Navbar} from "./components/navigation/Navbar.tsx";

const underConstruction = import.meta.env.VITE_CONSTRUCTION === 'true'

function App() {
    return underConstruction ? <ConstructionPage /> : <Navbar/>
}

export default App
