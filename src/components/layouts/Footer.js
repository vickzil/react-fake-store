/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Footer() {
    const getDate = () => {
       let date = new Date();
      return date.getFullYear();
    }
    return (
        <footer>
            <div className="container">
                <div className="footer_copyright">
                    <div className="copyright">
                        <span>Reactfakestore</span> &copy; {getDate()}
                    </div>
                    <div className="footer_social_icon">
                        <a>
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a>
                            <i className="fa fa-twitter-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
