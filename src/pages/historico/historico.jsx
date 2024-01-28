import Navbar from "../../components/navbar/navbar.jsx";
import "./historico.css";
import { pedidos } from "../../dados.js";

function Historico() {
  return (
    <>
      <Navbar showMenu={true} />
      <div className="container">
        <div className="titulo text-center">
          <h1>Histórico de Pedidos</h1>
        </div>
        <div className="box-pedido">
          <table className="table">
            {pedidos.map((pedidos) => {
              return (
                <tr key={pedidos.id_pedido}>
                  <td>
                    <strong>Pedido {pedidos.id_pedido}</strong>
                  </td>
                  <td className="text-light">{pedidos.dt}</td>
                  <td className="text-red">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(pedidos.total)}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}

export default Historico;
