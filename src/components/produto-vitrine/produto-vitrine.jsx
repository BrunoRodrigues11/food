import "./produto-vitrine.css";
import foto from "../../assets/hamburguer.png";
import bagBlack from "../../assets/bag-black.png";

function ProdutoVitrine() {
  return (
    <div className="produto-box text-center">
      <img src={foto} alt="Foto do produto" />
      <div>
        <h2>Spicy Burguer</h2>
        <p className="prod-vitrine-descricao">
          Hambúrguer de 250g, queijo, tomate, alface e cebola
        </p>
        <p className="prod-vitrine-preco">R$ 18,90</p>
      </div>
      <div>
        <button type="button" className="btn btn-cart">
          <img src={bagBlack} alt="" className="icon" />
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default ProdutoVitrine;
