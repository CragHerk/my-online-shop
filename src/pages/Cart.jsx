import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import { removeFromCart } from "../state/Slices/cartSlice"; // Importuj akcję removeFromCart
import styles from "../css/components/Cart.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cart = () => {
  const dispatch = useDispatch(); // Inicjalizuj useDispatch
  const cart = useSelector((state) => state.cart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId)); // Wywołaj akcję removeFromCart z dispatch
  };

  return (
    <>
      <Header />
      <Flex className={styles.container}>
        <Heading className={styles.heading}>Your Cart</Heading>
        {cart.length > 0 ? (
          cart.map((product) => (
            <Box key={product.id} className={styles.cartItem}>
              <img
                src={product.photo}
                alt={product.name}
                className={styles.image}
              />
              <div className={styles.info}>
                <Heading className={styles.name}>{product.name}</Heading>
                <Text>${product.price}</Text>
                <Button onClick={() => handleRemoveFromCart(product.id)}>
                  Delete
                </Button>
                <Button className={styles.checkout}>Proceed to Checkout</Button>
              </div>
            </Box>
          ))
        ) : (
          <Text>Your cart is empty.</Text>
        )}
        <Link to={"/"}>
          <Button className={styles.back}>Back to home</Button>
        </Link>
      </Flex>

      <Footer />
    </>
  );
};

export default Cart;
