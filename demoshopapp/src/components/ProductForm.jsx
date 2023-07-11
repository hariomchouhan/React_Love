import React, { useState } from "react";
import "./ProductForm.css";

export default function ProductForm(props) {

    // const [fullProductInput, setFullProductInput] = useState({
    //     title: '',
    //     date: ''
    // });

    // const setfullProductInput = () => {
    //     // return object with updated parameters
            
    // }
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        // console.log(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        // console.log(event.target.value);
    }

    const submitHandler = (event) => {
      event.preventDefault();

      const productData = {
        title: title,
        date: date,
      }

      // console.log(productData);
      props.onSaveProduct(productData);

      setTitle('');
      setDate('');
    }
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-product__controls">
          <div className="new-product__control">
            <label htmlFor="">Title</label>
            <input type="text" value={title} placeholder="Title" onChange={titleChangeHandler} />
          </div>

          <div className="new-product__control">
            <label htmlFor="">Date</label>
            <input type="date" value={date} min="2023-01-01" max="2023-12-12" onChange={dateChangeHandler} />
          </div>

          <div className="new-product_button">
            <button type="submit">Add Product</button>
          </div>
        </div>
      </form>
    </>
  );
}
