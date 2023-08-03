import React from "react";
import { useSelector } from "react-redux";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Center,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../css/components/Checkout.module.css";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <>
      <Header />
      <Flex
        direction="column"
        align="center"
        p="4"
        className={styles.checkout__container}
      >
        <Heading mb="4">Checkout</Heading>
        {cart.map((product) => (
          <Box key={product.id} className={styles.product__summary}>
            <Text>{product.name}</Text>
            <Text>${product.price.toFixed(2)}</Text>
          </Box>
        ))}
        <Box className={styles.total__container}>
          <Text fontWeight="bold">Total:</Text>
          <Text>${calculateTotal().toFixed(2)}</Text>
        </Box>
        <VStack
          spacing="4"
          align="flex-start"
          className={styles.payment__methods}
        >
          <Text fontWeight="bold">Select Payment Method:</Text>
          {/* Tutaj dodaj wybór metody płatności */}
          <Button colorScheme="blue" mt="4">
            Proceed to Payment
          </Button>
        </VStack>
      </Flex>
      <Footer />
    </>
  );
};

export default Checkout;
