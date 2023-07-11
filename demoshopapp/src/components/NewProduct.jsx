import React from "react";
import "./NewProduct.css";
import ProductForm from "./ProductForm";

export default function NewProduct(props) {

  function saveProduct(product) {
    console.log("I am inside new product");
    console.log(product);

    // calling parent function
    props.hariom(product)
  }
  return (
    <div className="new-product">
      <ProductForm onSaveProduct = {saveProduct}/>
    </div>
  );
}
