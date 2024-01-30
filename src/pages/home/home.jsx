import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar.jsx";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine.jsx";
import api from "../../services/api.js";

function Home() {
  const [produtos, setProdutos] = useState([]);

  // Consome a API e atualiza o estado da aplicação com os produtos
  useEffect(() => {
    api
      .get("/produtos")
      .then((resp) => {
        setProdutos(resp.data);
      })
      .catch((err) => {
        alert("Erro ao carregar os produtos");
      });
  }, []);

  return (
    <>
      <Navbar showMenu={true} />
      <div className="container">
        <div className="titulo text-center">
          <h1>Nosso Cardápio</h1>
          <p className="subtitulo">
            Clique em adicionar para colocar os produtos na sacola de compras.
            Se preferir, você pode pedir pelo WhatsApp (15) 99708-6888
          </p>
        </div>
      </div>
      <div className="text-center">
        {produtos.map((produtos) => {
          return (
            <ProdutoVitrine
              key={produtos.id_produto}
              id={produtos.id_produto}
              nome={produtos.nome}
              descricao={produtos.descricao}
              preco={produtos.preco}
              foto={produtos.foto}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
