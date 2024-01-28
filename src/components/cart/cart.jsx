import { useEffect, useState } from "react";
import { Dock } from "react-dock";
import ProcutoCart from "../produto-cart/produto-cart.jsx";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  // O estado "show" controla se a sidebar está aberta ou fechada
  const [show, setShow] = useState(false);

  // O hook "useNavigate" é usado para navegar entre as páginas
  const navigate = useNavigate();

  // O hook "useEffect" é usado para executar um código quando o componente é montado
  useEffect(() => {
    // Fica ouvindo o evento "openSidebar" e abre a sidebar quando ele é disparado
    window.addEventListener("openSidebar", () => {
      setShow(true);
    });
  }, []);

  // Função para navegar para a página de checkout
  function checkout() {
    navigate("/checkout");
  }

  return (
    <Dock
      position="right"
      isVisible={show}
      fluid={false}
      size={420}
      onVisibleChange={(visible) => {
        setShow(visible);
      }}
    >
      <div className="text-center">
        <h1>Meu Pedido</h1>
      </div>

      <div className="lista-produtos">
        <ProcutoCart />
        <ProcutoCart />
      </div>

      <div className="footer-cart">
        <div className="footer-cart-valor">
          <span>Total</span>
          <span>
            <strong>R$ 250,00</strong>
          </span>
        </div>
        <div>
          <button type="button" className="btn btn-checkout" onClick={checkout}>
            Finalizar Pedido
          </button>
        </div>
      </div>
    </Dock>
  );
}

export default Cart;
