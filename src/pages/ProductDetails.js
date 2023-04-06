import React, { Fragment, useState } from "react";
import classes from "./ProductDetails.module.css";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";
import { useStateValue } from "../store/StateProvider";
import ColorSelector from "./ColorSelector";
import { Link } from "react-router-dom";

const ProductDetails = ({ id, image, title, rating, desc, price, review }) => {
  const [state, dispatch] = useStateValue();
  const [selectedColor, setSelectedColor] = useState(null);

  const addToCartHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        color: selectedColor,
      },
    });
  };

  return (
    <Fragment>
      <Row>
        <Col md={6}>
          <Product />
        </Col>
        <Col md={6}>
          <div className={classes["product-title"]}>{title}</div>
          <div className={classes["product-rating"]}>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span>⭐</span>
              ))}
          </div>
          <div className={classes["product-desc"]}>{desc}</div>
          <ColorSelector
            colors={["#FF0000", "#00FF00", "#0000FF"]}
            onColorSelect={(color) => setSelectedColor(color)}
          />

          <div className={classes["product-price"]}>
            <span
              style={{ color: "#333", marginRight: "10px", fontSize: "0.7em" }}
            >
              MRP
            </span>
            <span>₹{price}</span>
          </div>
          <div className={classes["product-buttons"]}>
            <button
              className={classes["add-to-cart"]}
              onClick={addToCartHandler}
            >
              Add To Cart
            </button>
            <Link to="cart">
              <button className={classes["buy-now"]} onClick={addToCartHandler}>
                Buy Now
              </button>
            </Link>
          </div>
          <div className={classes["product-review"]}>
            <p>({review} reviews)</p>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ProductDetails;
