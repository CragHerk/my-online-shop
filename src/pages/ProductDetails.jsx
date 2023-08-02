import React from "react";
import { Flex, Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import exampleProducts from "../db/exampleproducts"; // Importuj tablicę exampleProducts
import styles from "../css/components/ProductDetails.module.css";

const ProductDetails = () => {
  const { id } = useParams();

  const product = exampleProducts.find(
    (product) => product.id === parseInt(id)
  );

  return (
    <>
      <Header />
      <Flex className={styles.card}>
        <Box className={styles.box}>
          <Image
            src={product.photo}
            alt={product.name}
            className={styles.image}
          />
          <Box className={styles.infobox}>
            <Heading className={styles.heading}>{product.name}</Heading>
            <Text className={styles.price}>${product.price}</Text>
            <Text className={styles.description}>{product.description}</Text>
            <Button className={styles.addtocart}>Add to Cart</Button>
            <Button className={styles.buynow}>Buy now</Button>
          </Box>
        </Box>
        <Link to={"/"}>
          <Button className={styles.back}>Back to home</Button>
        </Link>
      </Flex>

      <Footer />
    </>
  );
};

export default ProductDetails;
