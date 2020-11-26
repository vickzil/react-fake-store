import React, { useState, useEffect } from 'react'
import shoppingCartLogo from '../../images/cart.jpg'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";


const Navbar = ({cart}) => {

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
        count += item.qty;
        });

        setCartCount(count);
    }, [cart, cartCount]);

    return (
        //  Top Nav
        <div className="container-fluid nav-bar">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="navigation_bar">
                    <div className="logo">
                        <Link to='/'>
                            Fake<span className="text-danger">Store</span>
                        </Link>
                    </div>
                
                    <div className="menu_secondary">
                        <div className="cart_item">
                            <Link to='/cart'>
                                <span className="cart_logo">
                                    <img src={shoppingCartLogo} alt="shopping-cart" />
                                    <span><b>{cartCount}</b></span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        )
}

const mapStateToProps = (state) => {
  return { cart: state.shop.cart};
};

export default connect(mapStateToProps)(Navbar);