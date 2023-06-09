import React from "react";
import Sofa from "../images/products/sofa.webp";
import CofeeTable from "../images/products/coffee-table.webp";
import ArmChair from "../images/products/arm-chair.jpg";
import BookShelf from "../images/products/book-shelf.jpg";
import DiningTable from "../images/products/dining.jpg";
import BedFrame from "../images/products/bed-frame.webp";
import classes from "./RelatedProducts.module.css";
import { Col, Row } from "react-bootstrap";

const RelatedProducts = () => {
  const furniture_data = [
    {
      image_link: Sofa,
      title: "Modern Sofa",
      price: 599.99,
    },
    {
      image_link: CofeeTable,
      title: "Coffee Table",
      price: 299.99,
    },
    {
      image_link: ArmChair,
      title: "Armchair",
      price: 399.99,
    },
    {
      image_link: BookShelf,
      title: "Bookshelf",
      price: 499.99,
    },
    {
      image_link: DiningTable,
      title: "Dining Table",
      price: 699.99,
    },
    {
      image_link: BedFrame,
      title: "Bed Frame",
      price: 799.99,
    },
  ];

  return (
    <div className="mt-5">
      <h2>Related Products</h2>
      <div className="mt-4">
        <Row>
          {furniture_data.map((product) => (
            <Col lg={2} md={4} sm={6}>
              <div key={product.id} style={{ marginBottom: "20px" }}>
                <img
                  className={classes["rel-img"]}
                  src={product.image_link}
                  alt={product.name}
                />
                <h6>{product.title}</h6>
                <p>{product.price}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RelatedProducts;
