/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { connect } from "react-redux";
import { noficationMessage } from './notifications/nofication'
import { addToCart } from "../redux/shopping/shopping-actions";

function ProductCard({product, addToCart}) {
    return (
        <div className="media mt-5">
            <a>
                <img src={product.image} alt={product.title} className="img-fluid mr-3" />
            </a>
            <div className="media-body mt-2">
                <h5>
                    <a>{product.title}</a>
                </h5>
                <h6>&#8358;{product.price}</h6>
                <button onClick={() => {addToCart(product.id); noficationMessage("Added to cart");}} className="btn btn-outline-dark font-weight-bold mt-4">
                    Add To Cart
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);