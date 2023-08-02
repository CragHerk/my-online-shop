import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import styles from "../css/components/ProductCard.module.css";

const ProductCard = ({ name, price, photo, id, description }) => {
  return (
    <Box className={styles.card}>
      <Image src={photo} alt={name} className={styles.image} />
      <Box>
        <Heading className={styles.heading}>{name}</Heading>

        <Text className={styles.price}>${price}</Text>

        <Button className={styles.addtocart}>Add to Cart</Button>
        <Link to={`/product/${id}`}>
          <Button className={styles.details}>Details</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ProductCard;
