import React, { Fragment } from "react";
import classes from "./Cart.module.css";
import CartComponent from "./CartComponent";
import { useStateValue } from "../store/StateProvider";

const Cart = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <Fragment>
      <h1 className={classes["checkout-heading"]}>Your Cart</h1>
      {cart.map((item) => (
        <CartComponent
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          color={item.color}
        />
      ))}
    </Fragment>
  );
};

export default Cart;
