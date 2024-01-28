import Navbar from "../../components/navbar/navbar.jsx";
import "./historico.css";

function Historico() {
  const pedidos = [
    { id_pedido: 541561, dt: "14/01/2024", total: 150.3 },
    { id_pedido: 841562, dt: "15/01/2024", total: 99 },
    { id_pedido: 887453, dt: "18/01/2024", total: 119.9 },
    { id_pedido: 985417, dt: "19/01/2024", total: 37.2 },
    { id_pedido: 995411, dt: "20/01/2024", total: 49.9 },
    { id_pedido: 985852, dt: "21/01/2024", total: 70.0 },
    { id_pedido: 998524, dt: "22/01/2024", total: 50.0 },
  ];
  return (
    <>
      <Navbar showMenu={true} />
      <div className="container">
        <div className="titulo text-center">
          <h1>Histórico de Pedidos</h1>
        </div>
        <div className="box-pedido">
          <table className="table">
            <tr>
              <td>
                <strong>Pedido 02215</strong>
              </td>
              <td className="text-light">28/01/2024</td>
              <td className="text-red">R$ 500,00</td>
            </tr>
            <tr>
              <td>
                <strong>Pedido 02215</strong>
              </td>
              <td className="text-light">28/01/2024</td>
              <td className="text-red">R$ 500,00</td>
            </tr>
            <tr>
              <td>
                <strong>Pedido 02215</strong>
              </td>
              <td className="text-light">28/01/2024</td>
              <td className="text-red">R$ 500,00</td>
            </tr>
            <tr>
              <td>
                <strong>Pedido 02215</strong>
              </td>
              <td className="text-light">28/01/2024</td>
              <td className="text-red">R$ 500,00</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Historico;
