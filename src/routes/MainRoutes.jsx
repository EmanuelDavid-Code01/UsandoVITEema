import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ofertas from "../paginas/Ofertas";
import Home from "../paginas/Home";

export const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ofertas" element={<Ofertas />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
