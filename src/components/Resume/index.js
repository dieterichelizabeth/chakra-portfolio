import React from "react";
import {
  Box,
  Flex,
  Stack,
  Link,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

function Resume() {
  return (
    <div>
      <Stack
        className={"project-animation"}
        width={"90%"}
        margin={"auto"}
        textAlign={"center"}
        marginBottom={20}
      >
        <Link
          href={require("../../assets/resume.pdf")}
          download="Dieterich-Elizabeth-Resume"
          color={"blue"}
          margin={"auto"}
          marginTop={"20px"}
          marginBottom={20}
        >
          Download a PDF Copy
        </Link>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack>
            <Stack bg={"gray.50"} borderRadius={"15"} p={5} boxShadow={"2xl"}>
              <Heading as={"h2"} fontSize={"15px"} pt={5}>
                Elizabeth Dieterich
              </Heading>
              <Text>
                Dallas, Tx | (469)594-2668 |{" "}
                <Link
                  href="mailto:dieterichelizabeth@gmail.com"
                  color={"blue"}
                  textDecor={"underline"}
                >
                  dieterichelizabeth@gmail.com
                </Link>
              </Text>
              <Text>
                LinkedIn:{" "}
                <span>
                  <Link
                    href="https://www.linkedin.com/in/elizabeth-dieterich-067b55a8/"
                    rel="noopener noreferrer"
                    target="_blank"
                    color={"blue"}
                    textDecor={"underline"}
                  >
                    https://www.linkedin.com/in/elizabeth-dieterich-067b55a8/
                  </Link>
                </span>
              </Text>
              <Text>
                GitHub:{" "}
                <Link
                  href="https://github.com/dieterichelizabeth"
                  rel="noopener noreferrer"
                  target="_blank"
                  color={"blue"}
                  textDecor={"underline"}
                >
                  https://github.com/dieterichelizabeth
                </Link>
              </Text>
            </Stack>

            <Stack bg={"gray.50"} borderRadius={"15"} p={5} boxShadow={"2xl"}>
              <Heading as={"h2"} fontSize={"15px"}>
                Summary
              </Heading>
              <Text>
                Full Stack Web Developer with a background in Anthropology and
                life-long dedication to learning how people communicate with the
                world around them. Known as an intense problem solver, with a
                focus on creating effortless user experiences. Leveraging an
                end-user perspective and strong teamwork skills in order to
                create robust applications in a timely manner.
              </Text>
            </Stack>

            <Stack bg={"gray.50"} borderRadius={"15"} p={5} boxShadow={"2xl"}>
              <Heading as={"h2"} fontSize={"15px"}>
                Technical Skills
              </Heading>
              <Box p={4}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <Stack>
                    <Text fontWeight={500}>Languages</Text>
                    <Text color={"gray.600"} fontSize={"15px"}>
                      HyperText Markup Language (HTML5), Cascading Style Sheets
                      (CSS3), JavaScript, Git, Bootstrap, JQuery, MongoDB,
                      Express.js, ReactJS, Node.js, MySQL, Sequelize, Rest API’s
                    </Text>
                  </Stack>

                  <Stack>
                    <Text fontWeight={500}>Applications</Text>
                    <Text color={"gray.600"} fontSize={"15px"}>
                      Github, Slack, Heroku
                    </Text>
                  </Stack>
                </SimpleGrid>
              </Box>
            </Stack>
          </Stack>

          <Stack>
            <Stack bg={"gray.50"} borderRadius={"15"} p={5} boxShadow={"2xl"}>
              <Heading as={"h2"} fontSize={"15px"} pt={5}>
                Experience
              </Heading>
              <Flex justifyContent={"space-between"}>
                <Text fontWeight={"600"}>Claims Associate </Text>
                <Text>Jun 2021 – Jan 2022</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text fontWeight={"500"}> State Farm </Text>
                <Text>Richardson, TX</Text>
              </Flex>
              <Text textAlign={"left"} fontSize={"15px"}>
                Multi-tasked across technical platforms within a fast-paced
                environment. Proactively investigated claims, applied coverage,
                and accurately documented files.
              </Text>
              <Text textAlign={"left"} fontSize={"15px"}>
                Key Accomplishments:
              </Text>
              <Text textAlign={"left"} paddingLeft={"15px"} fontSize={"15px"}>
                <ul>
                  <li>
                    Maintained Excellent Average Handle Time at 80-90% Received
                    two “5-star medalia”, representing perfect reviews from
                    customers.
                  </li>
                  <li>
                    Received “Agent Compliment”, as a result of saving customer
                    household policy.
                  </li>
                </ul>
              </Text>

              <Flex justifyContent={"space-between"} pt={5}>
                <Text fontWeight={"600"}>Barista/Team Lead</Text>
                <Text>Aug 2017 – Jun 2021</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text fontWeight={"500"}>Kung Fu Tea</Text>
                <Text>Richardson, TX</Text>
              </Flex>
              <Text textAlign={"left"} fontSize={"15px"}>
                Crafted beverages with care and consistency.Worked with an
                evolving team of 5-12 baristas.
              </Text>
              <Text textAlign={"left"} fontSize={"15px"}>
                Key Accomplishments:
              </Text>
              <Text textAlign={"left"} paddingLeft={"15px"} fontSize={"15px"}>
                <ul>
                  <li> Managed 2 employees per shift. </li>
                  <li>Trained 1-2 employees per month.</li>
                </ul>
              </Text>
            </Stack>

            <Stack bg={"gray.50"} borderRadius={"15"} p={5} boxShadow={"2xl"}>
              <Heading as={"h2"} fontSize={"15px"} pt={5}>
                Education
              </Heading>
              <Text>
                <span style={{ fontWeight: "600" }}>
                  Boot Camp Certificate:
                </span>{" "}
                University of Texas at Austin, Austin, TX <br></br>
                <span style={{ fontSize: "13px" }}>
                  A 24-week intensive program focused on gaining technical
                  programming skills in HTML5, CSS3, Javascript, JQuery,
                  Bootstrap, Node.js, MySQL, MongoDB, Express, Handelbars.js,
                  and ReactJS.
                </span>
              </Text>
              <Text>
                <span style={{ fontWeight: "600" }}>
                  Bachelor of Liberal Arts, Anthropology:{" "}
                </span>
                University of North Texas, Denton, TX
              </Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Stack>
    </div>
  );
}

export default Resume;
