import { useEffect, useState, useContext } from "react";
import { Dock } from "react-dock";
import ProcutoCart from "../produto-cart/produto-cart.jsx";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context.jsx";
import foto from "../../assets/close.png";
import emptyCart from "../../assets/empty_cart.svg";

function Cart() {
  // O estado "show" controla se a sidebar está aberta ou fechada
  const [show, setShow] = useState(false);

  // O hook "useNavigate" é usado para navegar entre as páginas
  const navigate = useNavigate();

  // Acessa o contexto do carrinho
  const { cartItens, totalCart } = useContext(CartContext);

  // O hook "useEffect" é usado para executar um código quando o componente é montado
  useEffect(() => {
    // Fica ouvindo o evento "openSidebar" e abre a sidebar quando ele é disparado
    window.addEventListener("openSidebar", () => {
      setShow(true);
    });

    // setCartItens(carrinho);
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
      size={360}
      onVisibleChange={(visible) => {
        setShow(visible);
      }}
    >
      <div className="text-center">
        <img
          src={foto}
          alt="Fechar o slidebar"
          className="cart-btn-close"
          onClick={(e) => setShow(false)}
        />
        <h1>Meu Pedido</h1>
      </div>

      <div className="lista-produtos">
        {
          // Se o carrinho estiver vazio, mostra uma mensagem
          cartItens.length === 0 && (
            <div className="text-center">
              <img
                src={emptyCart}
                alt="Carrinho vazio"
                className="cart-empty"
              />
              <p>Sua sacola está vazia</p>
            </div>
          )
        }
        {cartItens.map((item) => {
          return (
            <ProcutoCart
              key={item.id}
              id={item.id}
              foto={item.foto}
              nome={item.nome}
              qtd={item.qtd}
              preco={item.preco}
            />
          );
        })}
      </div>

      <div className="footer-cart">
        <div className="footer-cart-valor">
          <span>Total</span>
          <span>
            <strong>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(totalCart)}
            </strong>
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
