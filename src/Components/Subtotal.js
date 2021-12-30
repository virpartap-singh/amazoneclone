import React from 'react';
import "../Css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import { useNavigate } from 'react-router-dom';


function Subtotal() {
  const [{basket}] = useStateValue();
  const navigate = useNavigate();
    return (
        <>
        <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              {/* Subtotal (0 items): <strong>0</strong> */}
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // value={0}  Part of the homework
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={ (e)=> navigate('/payment')}>Proceed to Checkout</button>
    </div>
        </>
    )
}

export default Subtotal
