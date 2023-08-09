import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Flex, Heading, Button } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import exampleProducts from "../db/exampleproducts";
import styles from "../css/components/Home.module.css";
import ParticlesComponent from "../components/Particles";
import Orbitals from "../components/Orbitals";
import { showLoader, hideLoader } from "../state/Slices/loaderSlice"; // Importujemy akcje z naszego slice

const Home = () => {
  const location = useLocation();
  const isLoading = useSelector((state) => state.loader); // Pobieramy stan loadera z Redux Store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLoader()); // Pokaż loader na starcie
    setTimeout(() => {
      dispatch(hideLoader()); // Ukryj loader po pewnym czasie (symulacja ładowania)
    }, 1000);
  }, [dispatch, location]);

  return (
    <div className={styles.home__background}>
      <ParticlesComponent />
      <div className={styles.main}>
        <Header />
        <Link to={"/login"}>
          <Button className={styles.login}>Login</Button>
        </Link>
        <Flex className={styles.home__flex}>
          <Heading className={styles.heading}>
            Welcome to My Online Store
          </Heading>

          <div className={styles.products__container}>
            {isLoading ? (
              <Orbitals />
            ) : (
              exampleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  photo={product.photo}
                  price={product.price}
                  description={product.description}
                />
              ))
            )}
          </div>
        </Flex>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
