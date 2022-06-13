import React from "react";
import Projects from "../Projects";
import FeaturedProjects from "../FeaturedProjects";
import { Heading, VStack } from "@chakra-ui/react";

function Portfolio() {
  return (
    <section className="project-animation">
      <VStack
        marginTop={"20px"}
        marginBottom={"0px"}
        spacing={1}
        textAlign="center"
      >
        <Heading mt={16} fontSize="1xl">
          Projects
        </Heading>
      </VStack>

      <FeaturedProjects />

      <Projects />
    </section>
  );
}

export default Portfolio;
