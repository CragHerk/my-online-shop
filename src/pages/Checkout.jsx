import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  CloseButton,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../css/components/Checkout.module.css";
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../state/Slices/cartSlice";
import ParticlesComponent from "../components/Particles";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const handleRemoveOneFromCart = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleAddOneToCart = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  return (
    <div>
      <ParticlesComponent />
      <div>
        <Header />
        <Flex className={styles.checkout__container}>
          <Heading>Checkout</Heading>
          {cart.map((product) => (
            <Box key={product.id} className={styles.product__summary}>
              <CloseButton
                className={styles.remove__button}
                onClick={() => dispatch(removeFromCart(product.id))}
              />
              <Text className={styles.name}>{product.name}</Text>
              <Text>${product.price.toFixed(2)}</Text>
              <Box className={styles.quantity}>
                <Text className={styles.x}> X {product.quantity}</Text>
                <Button
                  className={styles.quantity__button}
                  onClick={() => handleRemoveOneFromCart(product.id)}
                >
                  -
                </Button>

                <Button
                  className={styles.quantity__button}
                  onClick={() => handleAddOneToCart(product.id)}
                >
                  +
                </Button>
              </Box>
            </Box>
          ))}
          <Box className={styles.total__container}>
            <Text>Total:</Text>
            <Text>${calculateTotal().toFixed(2)}</Text>
          </Box>
          <VStack className={styles.payment__methods}>
            <Text>Select Payment Method:</Text>
            {/* Tutaj dodaj wybór metody płatności */}
            <Button className={styles.proceed}>Proceed to Payment</Button>
          </VStack>
        </Flex>
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
