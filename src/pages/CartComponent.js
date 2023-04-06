import React from "react";
import { Container } from "react-bootstrap";
import SofaChair from "../images/products/a-1.jpg";
import classes from "./CartComponent.module.css";
import Card from "../components/Card";
import { useStateValue } from "../store/StateProvider";

const CartComponent = ({ id, title, color, rating, price }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCartHandler = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <Container className={classes["checkout-img-div"]}>
      <Card>
        <div className={classes["cart-items"]}>
          <div style={{ marginRight: "20px" }}>
            <img
              src={SofaChair}
              alt="Sofa"
              className={classes["checkout-img"]}
            />
          </div>

          <div>
            <div className={classes["product-title"]}>{title}</div>
            <div>
              {" "}
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <span>⭐</span>
                ))}
            </div>
            <div
              style={{
                backgroundColor: color,
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                margin: "10px 0 ",
              }}
            />

            <div className={classes["product-price"]}>₹{price}</div>
            <div className={classes["product-buttons"]}>
              <button className={classes["buy-now"]}>Buy Now</button>
              <button
                className={classes["remove-from-cart"]}
                onClick={removeFromCartHandler}
              >
                Remove from cart
              </button>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default CartComponent;
