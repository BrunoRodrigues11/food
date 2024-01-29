import "./produto-vitrine.css";
import bagBlack from "../../assets/bag-black.png";
import { CartContext } from "../../contexts/cart-context.jsx";
import { useContext } from "react";

function ProdutoVitrine(props) {
  // Acessa o contexto do carrinho
  const { AddItemCart } = useContext(CartContext);

  // Função para adicionar um item ao carrinho
  function AddItem() {
    const item = {
      id: props.id,
      nome: props.nome,
      preco: props.preco,
      foto: props.foto,
      qtd: 1,
    };

    AddItemCart(item);
  }
  return (
    <div className="produto-box text-center">
      <img src={props.foto} alt="Foto do produto" />
      <div>
        <h2>{props.nome}</h2>
        <p className="prod-vitrine-descricao">{props.descricao}</p>
        <p className="prod-vitrine-preco">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.preco)}
        </p>
      </div>
      <div>
        <button type="button" className="btn btn-cart" onClick={AddItem}>
          <img src={bagBlack} alt="" className="icon" />
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default ProdutoVitrine;
