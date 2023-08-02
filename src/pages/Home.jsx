import React from "react";
import { Flex, Box, Heading, Text, Center } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import exampleProducts from "../db/exampleproducts";
import styles from "../css/components/Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <Flex className={styles.home__flex}>
        <Heading className={styles.heading}>Welcome to My Online Store</Heading>

        <div className={styles.products__container}>
          {exampleProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              photo={product.photo}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </Flex>
      <Footer />
    </>
  );
};

export default Home;
