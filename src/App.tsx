import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import TerminosCondiciones from "./pages/TerminosCondiciones";

const browserBaseName = import.meta.env.BASE_URL === "/" ? "/" : import.meta.env.BASE_URL.replace(/\/$/, "");

const App = () => (
  <BrowserRouter basename={browserBaseName}>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
      <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
