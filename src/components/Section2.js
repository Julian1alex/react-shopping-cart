import React from 'react'
import {useProducts} from "../redux/ducks/cart"

export default function Image (props) {
  
  const {Product, addItem} = useProducts()
  
  function handleAdd(item){
    addItem(item)
    console.log(item)
  }
  return (
    <div className="section2">
      <div className="sec2bar">
        <div className="productcount">16 Product(s) found.</div>
        <div className="sortby"> Order by</div>
      </div> 
      <div className="itemsbox">
      {Product.map((item, i) => (
        <div className="itembox" key={'item' + i}>
          <p className="shipping" >{ item.isFreeShipping === true ? 'Free Shipping' : 'Pay Shipping'}</p>
          <img className="sec2img" src={`./assets/${item.sku}_1.jpg`}/>
          <h2 className="itemtitle"> {item.title}</h2>
          <p className="dash">—</p>
          <p className="price"> $ {item.price.toFixed(2)}</p>
          <p className="quantity">  or {item.installments} x {(item.price/item.installments).toFixed(2)} </p>
          <div className="cartflex"><button className="addtocart" onClick={e=>handleAdd(item)} >Add to cart</button></div>
        </div>
      ))}
      </div>
    </div>
  )
}
