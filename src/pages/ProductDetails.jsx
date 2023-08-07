import React from "react";
import { Flex, Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import exampleProducts from "../db/exampleproducts";
import styles from "../css/components/ProductDetails.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../state/Slices/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = exampleProducts.find(
    (product) => product.id === parseInt(id)
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

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
            <Button className={styles.addtocart} onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Link to={"/checkout"}>
              <Button className={styles.buynow} onClick={handleAddToCart}>
                Buy now
              </Button>
            </Link>
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
