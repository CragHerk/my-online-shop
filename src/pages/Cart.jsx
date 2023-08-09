import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { removeFromCart, decreaseQuantity } from "../state/Slices/cartSlice";
import styles from "../css/components/Cart.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ParticlesComponent from "../components/Particles";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveFromCart = (productId) => {
    const productIndex = cart.findIndex((product) => product.id === productId);

    if (productIndex !== -1) {
      if (cart[productIndex].quantity > 1) {
        dispatch(decreaseQuantity(productId));
      } else {
        dispatch(removeFromCart(productId));
      }
    }
  };

  return (
    <div>
      <ParticlesComponent />
      <div>
        <Header />
        <Heading className={styles.heading}>Your Cart</Heading>
        <div className={styles.container}>
          {cart.length > 0 ? (
            cart.map((product) => (
              <Box key={product.id} className={styles.cartItem}>
                <img
                  src={product.photo}
                  alt={product.name}
                  className={styles.image}
                />
                <div className={styles.info}>
                  <Heading className={styles.name}>
                    {product.name}{" "}
                    {product.quantity > 1 && `(${product.quantity})`}
                  </Heading>
                  <Text>${product.price}</Text>
                  <Button
                    className={styles.delete}
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    Delete
                  </Button>
                  <Link to={"/checkout"}>
                    <Button className={styles.checkout}>Buy and Pay</Button>
                  </Link>
                </div>
              </Box>
            ))
          ) : (
            <Text className={styles.empty}>Is empty.</Text>
          )}
        </div>
        <div>
          <Box className={styles.buttons}>
            <Link to={"/"}>
              <Button className={styles.back}>Back to home</Button>
            </Link>
            <Link to={"/checkout"}>
              <Button className={styles.back}>Proceed to Checkout</Button>
            </Link>
          </Box>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Cart;
