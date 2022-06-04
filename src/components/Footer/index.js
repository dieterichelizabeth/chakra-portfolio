import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  Link,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={6}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Heading fontSize="1xl" color={"blue.500"}>
          Get In Touch
        </Heading>

        <Text textAlign={"center"}>
          Thank you for viewing my portfolio! <br />
          If you have any questions please reach out, my inbox is always open.
        </Text>
        <Button
          px={4}
          fontSize={"sm"}
          rounded={"full"}
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          _focus={{
            bg: "blue.500",
          }}
        >
          <Link href="mailto:dieterichelizabeth@gmail.com">Send an Email!</Link>
        </Button>
        <Stack direction={"row"} spacing={6}>
          <Link
            href={"https://github.com/dieterichelizabeth"}
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </Link>
          <Link
            href={"https://www.linkedin.com/in/elizabeth-dieterich-067b55a8/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </Link>
        </Stack>
        <Text>
          Made with Love and
          <Link
            href={"https://chakra-ui.com/"}
            rel="noopener noreferrer"
            target="_blank"
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.200", "gray.700"),
            }}
          >
            {" "}
            Chakra UI
          </Link>
        </Text>
      </Container>
    </Box>
  );
}
