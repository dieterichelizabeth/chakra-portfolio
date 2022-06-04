import React from "react";
import coverImage from "../../images/aboutImage.png";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

function About() {
  return (
    <section className="project-animation">
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "3xl", lg: "3xl" }}
            >
              <Text as={"span"} position={"relative"}>
                About
              </Text>
            </Heading>
            <Text color={"gray.700"}>
              I am a Full stack web developer leveraging anthropology background
              to create practical, robust applications. Currently styding Full
              Stack Web Development from the University of Texas Austin Coding
              Bootcamp, with newly developed skills in HTML, CSS, Javascript,
              MERN Stack Development and responsive configurations.
            </Text>
            <Text color={"gray.600"}>
              With each project, my aim is to balance design and functionality
              for an effortless user experience. I am excited to leverage my
              skills as part of a collaborative, versatile team to build
              intuitive and useful applications for users.
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"600px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"80%"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={coverImage}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </section>
  );
}

export default About;
