import "./navbar.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logotipo" className="logotipo" />
      <div className="menu">
        <a href="#">Histórico</a>
        <button className="btn btn-red" type="button">
          <img src={bag} className="icon" />
          Sacola
        </button>
      </div>
    </div>
  );
}

export default Navbar;
