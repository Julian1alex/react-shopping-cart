import React from 'react'
import ICON from "../lib/Icon"

export default function Filter (props) {

    return (
        <div className="section1">
            <div className="section1i">
            <h1 className="sec1title"> Sizes:</h1>
            <ul className="sec1filter">
                <li><button className="round"> XS</button></li>
                <li><button className="round"> S</button></li>
                <li><button className="round"> M</button></li>
                <li><button className="round"> ML</button></li>
                <li><button className="round"> L</button></li>
                <li><button className="round"> XL</button></li>
                <li><button className="round"> XXL</button></li>
            </ul>
            <p className="sec1text">Leave a star on Github if this repository was useful</p>
            <button className="sec1button" > <ICON icon="star"></ICON> Star</button>
            <button>939</button>
            </div>
        </div>

    )


}
