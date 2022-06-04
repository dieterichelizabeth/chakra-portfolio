import React, { useState } from "react";
import "./App.css";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  // Mobile Nav definitions through Chakra UI Hook
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Set "About" as the value of the currentPage variable
  const [currentPage, SetCurrentPage] = useState("About");

  // Nav Links
  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
  ];

  const navHandler = (name) => SetCurrentPage(name);

  return (
    <div>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* Mobile Nav Toggle Button */}
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            {/* Logo */}
            <Box>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                fontWeight={"bold"}
                href={"/"}
              >
                Liz Dieterich
              </Link>
            </Box>
          </HStack>

          {/* Light/Dark Mode Button */}
          <Flex alignItems={"center"}>
            {/* Nav Links */}
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  px={2}
                  py={1}
                  onClick={() => {
                    navHandler(link.name);
                  }}
                  color={currentPage === link.name ? "blue.300" : "gray.700"}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: ("gray.200", "gray.300"),
                  }}
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </HStack>
          </Flex>
        </Flex>

        {/* Mobile Hidden Nav */}
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  px={2}
                  py={1}
                  rounded={"md"}
                  onClick={() => {
                    navHandler(link.name);
                  }}
                  className={
                    currentPage === link.name ? "link-active" : "link-inactive"
                  }
                  _hover={{
                    textDecoration: "none",
                    bg: ("gray.200", "gray.300"),
                  }}
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Main currentPage={currentPage} />

      <Footer />
    </div>
  );
}

export default App;
