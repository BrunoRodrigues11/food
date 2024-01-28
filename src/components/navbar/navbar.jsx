import "./navbar.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";
import Cart from "../cart/cart";

function Navbar(props) {
  // Dispara um evento para abrir a sidebar
  function openSidebar() {
    const event = new CustomEvent("openSidebar");
    window.dispatchEvent(event);
  }

  return (
    <div className="navbar">
      <img src={logo} alt="Logotipo" className="logotipo" />

      {
        // Se a propriedade showMenu for verdadeira, então renderiza o menu
        props.showMenu ? (
          <div className="menu">
            <a href="#">Histórico</a>
            <button className="btn btn-red" type="button" onClick={openSidebar}>
              <img src={bag} className="icon" />
              Sacola
            </button>
          </div>
        ) : null
      }

      <Cart />
    </div>
  );
}

export default Navbar;
