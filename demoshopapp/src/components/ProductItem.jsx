import React, { useState } from 'react'
import ProductDate from './ProductDate'
import Card from './Card'
import './ProductItem.css'
export default function ProductItem(props) {

  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    console.log("button clicked");
    setTitle("Popcorn");
  }

  return (
    <>
     <Card className='product-item'>
        <ProductDate date = {props.date} />
        <div className='product-item_description'>
            <h2>{title}</h2>
        </div>
        <button onClick={clickHandler} className='card-btn'>Add to Card</button>
        </Card> 
    </>
  )
}
