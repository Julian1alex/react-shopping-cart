import React from 'react'
import {useProducts} from "../redux/ducks/cart" 
import ICON from "../lib/Icon"

export default function Cart () {

const {Product,Cart} = useProducts()


    return (
        <div className="section3">
            <div><button>Cart Icon</button></div>
            <div>
            {Cart.map((item, i) => (
        <div className="itembox3" key={'item' + i}>
          <div className="c1">
            <img className="sec3img" src={`./assets/${item.item.sku}_1.jpg`}/>
          </div>
          <div className="c2 ">
            <h2 className="itemtitle3"> {item.item.title}</h2>
            <h2 className="itemstyle3"> {item.item.style}</h2>
            <h2 className="itemquantity3">1</h2>
          </div>
          <div className="c3"> 
            <div className="exit">
              <ICON icon="times"></ICON>
            </div>
              <p className="price3"> $ {item.item.price.toFixed(2)}</p>
            <div>
              <button> - </button>
              <button> + </button>
            </div>
          </div>
        </div>
      ))}
        </div>        
        </div>
    )
}