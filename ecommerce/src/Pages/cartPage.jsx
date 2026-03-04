import React, { useReducer } from 'react'
import { cartReducer, initialCartState } from '../cartReducer/cartReducer'
import { useEffect } from 'react';

const cartPage = () => {
    const[cart,dispatch]=useReducer(cartReducer,initialCartState);

    useEffect(()=>{
        localStorage.setItem("cartB69",JSON.stringify(cart));
    },[cart]);

     const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  return (
     <div className="container my-5">
      <h2 className="mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <h5 className="text-muted">Your cart is empty</h5>
      ) : (
        <>
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>₹ {item.price}</td>

                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() =>
                          dispatch({ type: "DECREASE_QTY", payload: item.id })
                        }
                      >
                        −
                      </button>

                      <strong>{item.quantity}</strong>

                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() =>
                          dispatch({ type: "INCREASE_QTY", payload: item.id })
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td>₹ {(item.price * item.quantity).toFixed(2)}</td>

                  <td>
                    <button
                      className="btn btn-sm btn-dark"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item.id
                        })
                      }
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <h4>Total: ₹ {totalAmount.toFixed(2)}</h4>

            <div>
              <button
                className="btn btn-outline-danger me-2"
                onClick={() => dispatch({ type: "CLEAR_CART" })}
              >
                Clear Cart
              </button>

              <button className="btn btn-success">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default cartPage;
