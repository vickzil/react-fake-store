
import React, { useState, useEffect } from 'react'
import paystackImage from '../../images/paystack.png'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from "react-redux";

import CartItem from '../CartItem'
import {
  clearCart
} from "../../redux/shopping/shopping-actions";

import { noficationMessage } from '../notifications/nofication'


 const Cart = ({cart, clearCart}) => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
        items += item.qty;
        price += item.qty * item.price;
        });

        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);


    let stripeKey = "pk_test_51Hr5IcCPE6EmS4RsZ4wT8t7RPOerldv1hvqc8QkJWT6ufpuGSPYYgQfU1Gc6EhpN4WRwCOjk259F1DIhOakSyzfD00w5hecPdM";
    // PROCESS PAYMENT/ HANDLE TOKEN
    const handleToken = (token) => {
        if(token){ 
            clearCart();
            noficationMessage("Success!! Product purchased");
            
        } else {
            noficationMessage("Something went wrong");
        }
    }

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-8">
                    <div className="section_cart page_section">
                        <div className="container-fluid">
                            <h3 className="page-title">Cart</h3>
                           
                            {cart.length ? (
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Product Name
                                                </th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map((item) => (<CartItem key={item.id} item={item} />))}
                                            <tr>
                                                <td className="text-right" colSpan="2">
                                                    <strong>Total</strong>
                                                </td>
                                                <td className="cart_overal_total" colSpan="4">&#8358;{Math.trunc(totalPrice)}.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="text-center">
                                        <button className="checkout_btn btn btn-danger" onClick={() => {clearCart(); noficationMessage("Cart Cleared!!");}}>
                                            <i className="fa fa-trash mr-2" aria-hidden="true"></i> Clear Cart
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <p className="mt-4 text-center">
                                    <b className="mb-3 lead">No Product In cart</b><br></br>
                                    <span className="lead">Please add product to cart</span>
                                </p>
                            )
                        } 
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card order_summary">
                        <div className="card-body">
                            <h4 className="pt-3 mb-5">Your Order</h4>
                            {cart.length ? (
                            <>
                                <div className="mt-5 mb-4">
                                    <div className="mb-2">Debit/Credit Cards</div>
                                    <div className="card card-body">
                                        <div className="payment_images text-center">
                                            <img src={paystackImage} alt="paystack" />
                                        </div>
                                    </div>
                                    <p className="mt-4">Your personal data will be used to process your order, support your
                                        experience throughout this website, and for other
                                        purposes described in our privacy policy.</p>
                                </div>
                                <div className="form-group mt-5 text-center">
                                    <StripeCheckout 
                                    stripeKey={stripeKey}
                                    token={handleToken}
                                    amount={Math.trunc(totalPrice) * 100} />
                                </div>
                            </>
                            ): (
                                <div className="mt-5 mb-4">
                                    <div className="mb-2 lead">Cart is empty</div>
                                </div>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
  return { cart: state.shop.cart };
};

const mapDispatchToProps = (dispatch) => {
  return { clearCart: () => dispatch(clearCart())}
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);