import Navbar from "../../components/navbar/navbar.jsx";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine.jsx";
import { produtos } from "../../dados.js";

function Home() {
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
              key={produtos.id}
              id={produtos.id}
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
