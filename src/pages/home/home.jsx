import Navbar from "../../components/navbar/navbar.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="titulo text-center">
          <h1>Nosso Cardápio</h1>
          <p className="subtitulo">
            Clique em adicionar para colocar os produtos na sacola de compras.
            Se preferir, você pode pedir pelo WhatsApp (15) 99708-6888
          </p>
        </div>
      </div>
      Lista de Produtos <br />
    </>
  );
}

export default Home;
