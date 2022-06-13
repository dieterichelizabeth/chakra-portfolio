import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";

export default function FeaturedProjects() {
  const project1 = (
    <Container maxW={"6xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Featured
          </Text>
          <Heading>Zoolander</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Zoolander is a fun, relaxing Web Application where users can unwind
            by watching live animal cameras either during or after a long day.
            Users are able to create an account, leave a comment for the
            animals, and favorite videos so they appear in their dashboard.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Text color={"gray.500"} fontSize={"sm"}>
              JavaScript, Handlebars, Swiper.js, MySQL, Sequelize
            </Text>
            <SimpleGrid columns={{ base: 2, md: 2, lg: 2 }}>
              {" "}
              <Text
                color={"#212224"}
                _hover={{
                  textDecoration: "underline",
                }}
              >
                <a
                  href="https://github.com/JFlo1981/Virtual-Zoo"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="col-12 text-center"
                >
                  View Repository →
                </a>
              </Text>
              <Text
                color={"#212224"}
                _hover={{
                  textDecoration: "underline",
                }}
              >
                <a
                  href="https://virtual-zoo-1234.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="col-12 text-center"
                >
                  View Application →
                </a>
              </Text>
            </SimpleGrid>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={require(`../../assets/small/zoolander.png`)}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );

  const project2 = (
    <Container maxW={"6xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={require(`../../assets/small/FoodTruckFinder.png`)}
            objectFit={"cover"}
          />
        </Flex>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Featured
          </Text>
          <Heading>Food Truck Finder</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Food Truck Finder is a full-stack MERN app that uses the Google Maps
            and Yelp APIs to let you search for a Food Truck and returns results
            of Food Trucks in the area searched.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Text color={"gray.500"} fontSize={"sm"}>
              React, Chakra UI, GraphQl, Apollo-Express, MongoDb, Node.js
            </Text>
            <SimpleGrid columns={{ base: 2, md: 2, lg: 2 }}>
              {" "}
              <Text
                color={"#212224"}
                _hover={{
                  textDecoration: "underline",
                }}
              >
                <a
                  href="https://github.com/JFlo1981/FoodTruckFinder"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="col-12 text-center"
                >
                  View Repository →
                </a>
              </Text>
              <Text
                color={"#212224"}
                _hover={{
                  textDecoration: "underline",
                }}
              >
                <a
                  href="https://stark-garden-14782.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="col-12 text-center"
                >
                  View Application →
                </a>
              </Text>
            </SimpleGrid>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );

  const project3 = (
    <Container maxW={"6xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Featured
          </Text>
          <Heading>TechBlog Bebop</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            TechBlog Bebop is a CMS-style blog where developers can publish
            their blog posts and comment on other developers' posts as well.
            Users can create an account to share article links, blog posts,
            their thoughts and opinions.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Text color={"gray.500"} fontSize={"sm"}>
              Node.js, Express.js, Express-Session, Sequelize
            </Text>
            <SimpleGrid columns={{ base: 2, md: 2, lg: 2 }}>
              {" "}
              <Text
                color={"#212224"}
                _hover={{
                  textDecoration: "underline",
                }}
              >
                <a
                  href="https://github.com/dieterichelizabeth/TechBlog-Bebop"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="col-12 text-center"
                >
                  View Repository →
                </a>
              </Text>
              <Text
                color={"#212224"}
                _hover={{
                  textDecoration: "underline",
                }}
              >
                <a
                  href="https://agile-lake-02431.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="col-12 text-center"
                >
                  View Application →
                </a>
              </Text>
            </SimpleGrid>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={require(`../../assets/small/techBlog.png`)}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );

  return (
    <div>
      {project1} {project2} {project3}
    </div>
  );
}
