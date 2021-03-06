import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>©2022 Liz Dieterich</Text>
        <Text>
          Made with Love, Bootstrap, and
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
            Chakra UI.
          </Link>
        </Text>

        <Stack direction={"row"} spacing={6}>
          <Link href="mailto:dieterichelizabeth@gmail.com" fontSize={"12px"}>
            Email
          </Link>
          <Link
            href={"https://github.com/dieterichelizabeth"}
            rel="noopener noreferrer"
            target="_blank"
            fontSize={"12px"}
          >
            Github
          </Link>
          <Link
            href={"https://www.linkedin.com/in/elizabeth-dieterich-067b55a8/"}
            rel="noopener noreferrer"
            target="_blank"
            fontSize={"12px"}
          >
            LinkedIn
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
