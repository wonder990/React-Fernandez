import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import SobreNosotros from "./components/sobreNosotros/SobreNosotros";
import Footer from "./components/footer/Footer";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import { ItemsProvider } from "./contexts/ItemsContext";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./components/cart";
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <>
      <ItemsProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<SobreNosotros />} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route path="/productos/:itemid" element={<ItemDetail />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </ItemsProvider>
    </>
  );
}

export default App;
