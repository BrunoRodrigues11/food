import { createContext, useEffect, useState } from "react";

// Criando o contexto
const CartContext = createContext();

// Criando o provider
function CartProvider(props) {
  // O estado "cartItens" armazena os itens do carrinho
  const [cartItens, setCartItens] = useState([]);

  // O estado "totalCart" armazena o valor total do carrinho
  const [totalCart, setTotalCart] = useState(undefined);

  // Função para adicionar um item ao carrinho
  function AddItemCart(item) {
    let cartItensNovo = [];
    let findItem = false;

    // Verifica se o item já existe no carrinho
    for (var prod of cartItens) {
      // Encotra o item no carrinho
      if (prod.id === item.id) {
        item.qtd = prod.qtd + 1;
        findItem = true;
        cartItensNovo.push(item);
      } else {
        cartItensNovo.push(prod);
      }
    }

    // Se nao encontrou o item no carrinho ou é o primeiro item
    if (findItem === false || cartItens.length === 0) {
      cartItensNovo.push(item);
    }

    // Insere o item no carrinho
    setCartItens(cartItensNovo);
    CalcTotal(cartItensNovo);
  }

  // Função para remover um item ao carrinho
  function RemoveItemCart(id) {
    let cartItensNovo = [];

    // Localiza o item no carrinho e remove
    for (var prod of cartItens) {
      // Encotra o item no carrinho
      if (prod.id === id) {
        prod.qtd = prod.qtd - 1;
      }

      cartItensNovo.push(prod);
    }

    // Remove os itens com quantidade zero
    cartItensNovo = cartItensNovo.filter((item) => item.qtd > 0);

    // Atuakiza o carrinho
    if (cartItensNovo.length === 0) {
      const jsoncartItens = JSON.stringify(cartItensNovo);
      localStorage.setItem("cartItens", jsoncartItens);
      localStorage.setItem("totalCart", 0);
      setTotalCart(0);
    }
    setCartItens(cartItensNovo);
    CalcTotal(cartItensNovo);
  }

  // Função para calcular o valor total do carrinho
  function CalcTotal(items) {
    let tot = 0;
    for (var item of items) {
      tot = tot + item.preco * item.qtd;
      setTotalCart(tot);
    }
  }

  useEffect(() => {
    if (cartItens.length > 0) {
      const jsoncartItens = JSON.stringify(cartItens);
      localStorage.setItem("cartItens", jsoncartItens);
    }
  }, [cartItens]);

  useEffect(() => {
    if (totalCart !== undefined) {
      localStorage.setItem("totalCart", totalCart);
    }
  }, [totalCart]);

  useEffect(() => {
    const jsoncartItens = localStorage.getItem("cartItens");
    const jsonTotalCart = localStorage.getItem("totalCart");

    if (jsoncartItens && jsonTotalCart && cartItens.length === 0 && !totalCart) {
      setCartItens(JSON.parse(jsoncartItens));
      setTotalCart(JSON.parse(jsonTotalCart));
    }
  }, [cartItens, totalCart]);

  return (
    <CartContext.Provider
      value={{
        cartItens,
        setCartItens,
        AddItemCart,
        RemoveItemCart,
        totalCart,
        setTotalCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
