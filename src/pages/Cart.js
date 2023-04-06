import React, { Fragment } from "react";
import classes from "./Cart.module.css";
import CartComponent from "./CartComponent";
import { useStateValue } from "../store/StateProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <Fragment>
      <h1 className={classes["checkout-heading"]}>Cart Items</h1>
      {cart.map((item, index) => (
        <CartComponent
          key={index}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          color={item.color}
        />
      ))}
      <div>
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
                {/* <p>{item.price}</p> */}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h2>"Oops ! Your Cart is Empty "</h2>
            <div>
              <Link to="/">
                <button className={classes["back-btn"]}>Naviagate back</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Cart;
