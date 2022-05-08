import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import SobreNosotros from "./components/sobreNosotros/SobreNosotros";
import Footer from "./components/footer/Footer";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import DescuentosContainer from "./components/Decuentos.jsx/DescuentosContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<SobreNosotros />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:itemid" element={<ItemDetail />} />
          <Route path="/descuentos" element={<DescuentosContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
