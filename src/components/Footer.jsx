import React from "react";
import { Flex, Box, Text, Link } from "@chakra-ui/react";
import styles from "../css/components/Footer.module.css";

const Footer = () => {
  return (
    <Flex className={styles.footer}>
      <Box>
        <Text color="white" fontFamily="monospace" fontSize="sm">
          &copy; {new Date().getFullYear()} My Online Store. All rights
          reserved.
        </Text>
      </Box>

      <Box ml="auto">
        {/* Dodaj linki do stron informacyjnych lub innych sekcji stopki */}
        <Link color="white" mx="2">
          Privacy Policy
        </Link>
        <Link color="white" mx="2">
          Terms of Service
        </Link>
        <Link color="white" mx="2">
          Contact Us
        </Link>
      </Box>
    </Flex>
  );
};

export default Footer;
