import "./produto-cart.css";
import foto from "../../assets/hamburguer.png";

function ProdutoCart() {
  return (
    <div className="produto-cart-box">
      <img src={foto} alt="Foto" />
      <div>
        <p className="produto-cart-nome">Spicy burguer</p>
        <p className="produto-cart-valor">R$ 15,00</p>
        <div className="footer-produto-cart">
          <div>
            <button type="button" className="footer-produto-btn">
              -
            </button>
            <span className="footer-produto-qtd">02</span>
            <button type="button" className="footer-produto-btn">
              +
            </button>
          </div>
          <p className="footer-produto-preco text-right">R$ 30,00</p>
        </div>
      </div>
    </div>
  );
}

export default ProdutoCart;
