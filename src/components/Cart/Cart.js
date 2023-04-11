import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import React, { useContext, useEffect, useState } from "react";

const Cart = (props) => {
    // const [cart, setCart] = useContext(CartContext);
    // const [total, setTotal] = useState(0);

    // useEffect(() => {
    //     let sum = 0;
    //     cart.forEach((item) => {
    //         sum += item.price * item.quantity;
    //     });
    //     setTotal(sum);
    // }, [cart, setTotal]);
    const cartItems = (
        <ul className={classes['cart-items']}>
          {[{ id: 'c1', name: 'Hyderabadi Biryani', amount: 2, price: 12.99 }].map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      );
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>25.99</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes["button--alt"]}
                    onClick={props.onClose}
                >
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
            {/* <div className={classes.total}>
                <h2>Cart</h2>
                <h3>Total: ${total}</h3>
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div> */}
        </Modal>
    );
};

export default Cart;
