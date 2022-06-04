import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Stack,
} from "@chakra-ui/react";

function GroupProjects() {
  // Project Information
  const projectList = [
    {
      name: "Zoolander",
      category: "MySQL Express",
      languages: "JavaScript, Handlebars, Swiper.js, MySQL, Sequelize",
      description:
        "Zoolander is a fun, relaxing Web Application where users can unwind by watching live animal cameras either during or after a long day. Users are able to create an account, leave a comment for the animals, and favorite videos so they appear in their dashboard.",
      image: "zoolander",
      githubLink: "https://github.com/JFlo1981/Virtual-Zoo",
      deployed: "https://virtual-zoo-1234.herokuapp.com/",
    },
    {
      name: "Food Truck Finder",
      category: "React",
      languages: "React, Chakra UI, GraphQl, Apollo-Express, MongoDb, Node.js",
      description:
        "Food Truck Finder is a full-stack MERN app that uses the Google Maps and Yelp APIs to let you search for a Food Truck and returns results of Food Trucks in the area searched.",
      image: "FoodTruckFinder",
      githubLink: "https://github.com/JFlo1981/FoodTruckFinder",
      deployed: "https://stark-garden-14782.herokuapp.com/",
    },
  ];

  return (
    <div>
      <Flex
        textAlign={"center"}
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
      >
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 2, xl: 2 }}
          spacing={"20"}
          mt={16}
          mx={"auto"}
        >
          {projectList.map((project) => (
            <Box
              maxW={"500px"}
              w={"full"}
              overflow={"hidden"}
              key={project.name}
            >
              <Image
                src={require(`../../assets/small/${project.image}.png`)}
                width={"full"}
                objectFit={"cover"}
              />

              <Stack textAlign={"left"}>
                <Heading
                  color={"gray.700"}
                  fontSize={"1xl"}
                  fontFamily={"body"}
                  marginTop={"20px"}
                >
                  {project.name}{" "}
                  <span>
                    <a
                      href={project.githubLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="bi bi-github text-dark"></i>
                    </a>
                  </span>
                </Heading>
                <Text color={"gray.500"}>{project.description}</Text>
              </Stack>
              <Stack mt={"20px"}>
                <Stack direction={"column"} fontSize={"sm"} textAlign={"left"}>
                  <Text fontWeight={600}>{project.languages}</Text>
                  <Text color={"#3182ce"}>
                    <a
                      href={project.deployed}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="col-12 text-center"
                    >
                      View Deployed Application
                    </a>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </div>
  );
}

export default GroupProjects;
