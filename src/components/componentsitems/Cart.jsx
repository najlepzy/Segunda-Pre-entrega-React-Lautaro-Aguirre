import React from "react";
import { useCartContext } from "../../Context/CartContext";
import Item from "./Item";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="container" style={{ minHeight: "100vh" }}>
          <p>No hay items en el carrito</p>
          <Link to="/">Seguir comprando</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container" style={{ minHeight: "100vh" }}>
        {cart.map((datos) => (
          <Item key={datos.id} datos={datos} />
        ))}
        <h2 style={{ margin: "1em", color: "blue" }}>
          <b>
            {" "}
            Total:{" "}
            <span style={{ color: "blue", fontSize: "20px" }}>u$s</span>
            {totalPrice()}{" "}
          </b>
        </h2>
          Finalizar compra
      </div>
    </>
  );
};
