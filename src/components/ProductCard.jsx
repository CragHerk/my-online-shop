import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import styles from "../css/components/ProductCard.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../state/Slices/cartSlice";

const ProductCard = ({ name, price, photo, id, description }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = {
      id,
      name,
      price,
      photo,
      description,
    };
    dispatch(addToCart(product));
  };

  return (
    <Box className={styles.card}>
      <Image src={photo} alt={name} className={styles.image} />
      <Box>
        <Heading className={styles.heading}>{name}</Heading>

        <Text className={styles.price}>${price}</Text>

        <Button className={styles.addtocart} onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <Link to={`/product/${id}`}>
          <Button className={styles.details}>Details</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ProductCard;
