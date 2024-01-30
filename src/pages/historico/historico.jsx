import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar.jsx";
import "./historico.css";
import api from "../../services/api.js";

function Historico() {
  const [pedidos, setPedidos] = useState([]);

  // Consome a API e atualiza o estado da aplicação com os pedidos
  useEffect(() => {
    api
      .get("/pedidos")
      .then((resp) => {
        setPedidos(resp.data);
      })
      .catch((err) => {
        alert("Erro ao carregar os pedidos");
      });
  }, []);

  return (
    <>
      <Navbar showMenu={true} />
      <div className="container">
        <div className="titulo text-center">
          <h1>Histórico de Pedidos</h1>
        </div>
        <div className="box-pedido">
          <table className="table">
            <tbody>
              {pedidos.map((pedidos) => {
                return (
                  <tr key={pedidos.id_pedido}>
                    <td>
                      <strong>Pedido {pedidos.id_pedido}</strong>
                    </td>
                    <td className="text-light">{pedidos.dt_pedido}</td>
                    <td className="text-red">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(pedidos.total)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Historico;
