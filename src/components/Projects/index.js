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

function Projects() {
  // Project Information
  const projectList = [
    {
      name: "Budget Tracker",
      languages: "Node.js, MongoDB, Mongoose",
      description:
        "Budget Tracker gives users the ability to track their budget (Expenses and Deposits) on vacation; with or without an internet connection.",
      image: "budgetTracker",
      githubLink: "https://github.com/dieterichelizabeth/Budget-Tracker",
      deployed: "https://budget-tracker-applet.herokuapp.com/",
    },
    {
      name: `Weathering With API's`,
      languages: "HTML, CSS, JavaScript",
      description:
        "This project uses JavaScript to source weather data from the Open Weather Api, then dynamically display to the user. User's are able to search by city name in the search bar.",
      image: "weatherDashboard",
      githubLink: "https://github.com/dieterichelizabeth/weathering-with-apis",
      deployed: "https://weathering-with-apis.herokuapp.com/",
    },
    {
      name: "Workday Scheduler",
      languages: "Bootstrap, JQuery, HTML",
      description:
        "Workday timetable is simple calendar app that allows the user to save events for each hour of the day. The app keeps track of time by changing the colors of the taskbox as each hour passes.",
      image: "workdaySchedule",
      githubLink: "https://dieterichelizabeth.github.io/workday-timetable/",
      deployed: "https://dieterichelizabeth.github.io/workday-timetable/",
    },
    {
      name: "Prompt Password Maker",
      languages: "HTML, CSS, JavaScript",
      description:
        "A Password Generator which creates unique passwords based on user input to window alerts ",
      image: "password",
      githubLink: "https://github.com/dieterichelizabeth/prompt-password-maker",
      deployed: "https://dieterichelizabeth.github.io/prompt-password-maker/",
    },
    {
      name: "Quiz Wars",
      languages: "HTML, CSS, Bootstrap, JavaScript",
      description:
        "This app is a short, timed quiz, which lets the user know if they were right or wrong immediately after answering each question.",
      image: "quiz",
      githubLink: "https://github.com/dieterichelizabeth/quiz-wars",
      deployed: "https://dieterichelizabeth.github.io/quiz-wars/",
    },
    {
      name: "Notes Delivery Service",
      languages: "Node.js, Express.js",
      description:
        "A simple Note-taking Application where users can add, save, and delete notes.",
      image: "notes",
      githubLink:
        "https://github.com/dieterichelizabeth/notes-delivery-service",
      deployed: "nameless-spire-63081.herokuapp.com/",
    },
  ];

  return (
    <div>
      <Flex
        textAlign={"center"}
        justifyContent={"center"}
        direction={"column"}
        width={"80%"}
        mx={"auto"}
        marginBottom={"70px"}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={"20"}
          mt={16}
          mx={"auto"}
          padding={"10px"}
        >
          {projectList.map((project) => (
            <Box
              maxW={"400px"}
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
                  <Text color={"gray.600"}>{project.languages}</Text>
                  {project.deployed ? (
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
                  ) : (
                    <></>
                  )}
                </Stack>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </div>
  );
}

export default Projects;
