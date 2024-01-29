import "./navbar.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";
import Cart from "../cart/cart";
import { Link } from "react-router-dom";

function Navbar(props) {
  // Dispara um evento para abrir a sidebar
  function openSidebar() {
    const event = new CustomEvent("openSidebar");
    window.dispatchEvent(event);
  }

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="Logotipo" className="logotipo" />
      </Link>
      {
        // Se a propriedade showMenu for verdadeira, então renderiza o menu
        props.showMenu && (
          <div className="menu">
            <Link to="/historico">Histórico</Link>
            <button className="btn btn-red" type="button" onClick={openSidebar}>
              <img src={bag} className="icon" alt="icone da sacola" />
              Sacola
            </button>
          </div>
        )
      }

      <Cart />
    </div>
  );
}

export default Navbar;
