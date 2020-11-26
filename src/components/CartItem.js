import React, { useState } from 'react'

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../redux/shopping/shopping-actions";


function CartItem({ item, adjustQty, removeFromCart }) {

    const [input, setInput] = useState(item.qty);
    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(item.id, e.target.value);
    };

    return (
        <tr>
            <td className="tbl_p_name">
                <b>{item.title}</b>
            </td>
            <td className="tbl_qty">
                <input min="1"
                type="number"
                id="qty"
                name="qty"
                value={input}
                onChange={onChangeHandler} />
            </td>
            <td>
                &#8358;{Math.trunc(item.price * input)}.00 <br></br>
                <div className="float-right text-center delete_btn">
                    <i onClick={() => removeFromCart(item.id)} className="fa fa-times" aria-hidden="true"></i>
                </div>
            </td>

        </tr>
    )
}


const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);