import React, {Component, Fragment} from "react";
import './Product.css'; 
import CardProduct from "../CardProduct/CardProduct";

class Coba extends Component {

    render(){
        return(
            <Fragment>
                <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)} />
            </Fragment>
        );
    }
}

export default Coba;