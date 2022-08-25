import {BrowserRouter, Route, Routes} from "react-router-dom";
import Forside from "./pages/Forside";
import Tjenester from "./pages/Tjenester";
import OmOss from "./pages/OmOss";
import Kontakt from "./pages/Kontakt";

import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/GlobalStyle";
import Skanning from "./components/Skanning";
import Landskap from "./components/Landskap";
import Arkitektur from "./components/Arkitektur";
import Bim from "./components/Bim";


function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Forside/>}/>
                <Route path="Tjenester" element={<Tjenester/>}>
                    <Route path="Skanning" element={<Skanning/>}/>
                    <Route path="Landskap" element={<Landskap/>}/>
                    <Route path="Arkitektur" element={<Arkitektur/>}/>
                    <Route path="Bim" element={<Bim/>}/>
                </Route>
                <Route path="/OmOss" element={<OmOss/>}/>
                <Route path="/Kontakt" element={<Kontakt/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;