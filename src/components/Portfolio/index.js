import React from "react";
import Projects from "../Projects";
import GroupProjects from "../GroupProjects";
import { Heading, Text, VStack } from "@chakra-ui/react";

function Portfolio() {
  return (
    <section className="project-animation">
      <VStack
        marginTop={"20px"}
        marginBottom={"0px"}
        spacing={2}
        textAlign="center"
      >
        <Heading mt={16} fontSize="1xl">
          Group Projects
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          Projects completed through collaboration in team of 4 developers.
        </Text>
      </VStack>
      <GroupProjects />
      <VStack marginTop={"20px"} spacing={2} textAlign="center">
        <Heading mt={16} fontSize="1xl">
          Projects
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          Personal Projects completed for Bootcamp at the University of Texas at
          Austin.
        </Text>
      </VStack>
      <Projects />
    </section>
  );
}

export default Portfolio;
