import React from "react";
import SofaChair from "../images/products/a-1.jpg";
import classes from "./Product.module.css";

const Product = () => {
  return (
    <div>
      <img src={SofaChair} alt="Sofa" className={classes["carousal-img"]} />
    </div>
  );
};

export default Product;
