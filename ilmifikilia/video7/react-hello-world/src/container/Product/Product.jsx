import React, {Component} from "react";

class Product extends Component {
    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="" alt="" />
                </div>
                <p className="product-title"></p>
                <p className="product-price"></p>
                <div className="counter">
                    <button className="minus">-</button>
                    <input type="text" value={3}/>
                    <button className="plus">+</button>
                </div>
            </div>
        );
    }
}

export default Product;