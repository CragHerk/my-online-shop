import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import styles from "../css/components/Header.module.css";
import { FaReact } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <Box className={styles.header}>
      <FaReact />
      <Link to={"/"}>
        <Heading size="md" color="white" fontFamily="monospace">
          My Online Store
        </Heading>
      </Link>
      <Box>
        <Link to={"/cart"}>
          <Button className={styles.cart} leftIcon={<IoCartOutline />}>
            Koszyk
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
