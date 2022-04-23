import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/itemListContainer";
import CartWidget from "./components/CartWidget";

function App() {
  return (
    <div className="container-md">
      <NavBar>
        <CartWidget />
      </NavBar>
      <ItemListContainer name="Coder" />
    </div>
  );
}

export default App;
