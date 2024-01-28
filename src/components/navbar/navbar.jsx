import "./navbar.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";
import Cart from "../cart/cart";

function Navbar() {
  // Dispara um evento para abrir a sidebar
  function openSidebar() {
    const event = new CustomEvent("openSidebar");
    window.dispatchEvent(event);
  }

  return (
    <div className="navbar">
      <img src={logo} alt="Logotipo" className="logotipo" />
      <div className="menu">
        <a href="#">Histórico</a>
        <button className="btn btn-red" type="button" onClick={openSidebar}>
          <img src={bag} className="icon" />
          Sacola
        </button>
      </div>
      <Cart />
    </div>
  );
}

export default Navbar;
