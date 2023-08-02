import React from "react";
import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cart = () => {
  return (
    <>
      <Header />
      <Flex direction="column" p="4">
        <Heading mb="4">Your Cart</Heading>
        {/* Tutaj możesz dodać zawartość koszyka, np. lista produktów, ilość, cena itp. */}
        <Text>Your cart is empty.</Text>
        <Button mt="4" colorScheme="blue">
          Proceed to Checkout
        </Button>
      </Flex>
      <Footer />
    </>
  );
};

export default Cart;
