import React from "react";
import ProductDetails from "./ProductDetails";
import { Container } from "react-bootstrap";

const ProductPage = () => {
  const productDesc =
    "Enjoy complete relaxation in this comfy two-seater sofa crafted fromhigh-quality Pinewood. It is strong, lightweight, and offers comfortableseating. The sofa is upholstered with durable and recyclable polyester fabric and designed with high elastic nylon webbing. Filled with high-resilient foam, this sofa comes with a supportive backrest packed with Non-Siliconised polyfill for greater back support and comfort. Itcomes with ABS legs for longer durability.";
  return (
    <Container>
      <ProductDetails
        id="fddfgh"
        title="Emily Fabric 2-Seater Sofa - Brown"
        rating={3}
        desc={productDesc}
        price={5000}
        review={1565}
      />
    </Container>
  );
};

export default ProductPage;
