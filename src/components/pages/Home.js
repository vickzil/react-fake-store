import React, { useEffect } from 'react'
import ProductCard from '../ProductCard'

import { connect } from 'react-redux'
import { fetchAllProducts } from "../../redux/shopping/shopping-actions";

const Home = ({products, fetchAllProducts}) => {
    
    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])


        return (
            <div className="container-fluid mt-5 bg-white py-5">
                <div className="row">
                    <div className="col-md-12">
                        { products.length ? (
                            <>
                                <h3 className="page-title">Products</h3>
                                <div className="boxes">
                                    {products && products.map((product) => {
                                    return  <ProductCard product={product} key={product.id}  />
                                    })}
                                    
                                </div>
                            </>
                        ) : (
                            <div className="loading_ py-5 text-center">
                                <span
                                className="spinner-border spinner-border-sm mr-2" style={{width: "4rem", height: "4rem"}}
                                role="status"
                                aria-hidden="true"
                                ></span>
                                <span className="text-dark" style={{fontSize: "2rem"}}>Loading...</span>
                            </div>
                        ) }
					</div>
				</div>
            </div>
        )
}

const mapStateToProps = state => {
    return {
        products: state.shop.products,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
