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
    {
      name: "TechBlog Bebop",
      category: "MySQL Express",
      languages: "Node.js, Express.js, Express-Session, Sequelize",
      description:
        "TechBlog Bebop is a CMS-style blog where developers can publish their blog posts and comment on other developers' posts as well. Users can create an account to share article links, blog posts, their thoughts and opinions.",
      image: "techBlog",
      githubLink: "https://github.com/dieterichelizabeth/TechBlog-Bebop",
      deployed: "https://agile-lake-02431.herokuapp.com/",
    },
    {
      name: "Budget Tracker",
      category: "MondoDB",
      languages: "Node.js, MongoDB, Mongoose",
      description:
        "Budget Tracker gives users the ability to track their budget (Expenses and Deposits) on vacation; with or without an internet connection.",
      image: "budgetTracker",
      githubLink: "https://github.com/dieterichelizabeth/Budget-Tracker",
      deployed: "https://budget-tracker-applet.herokuapp.com/",
    },
    {
      name: `Weathering With API's`,
      category: "JavaScript",
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
      category: "Javascript",
      description:
        "Workday timetable is simple calendar app that allows the user to save events for each hour of the day. The app keeps track of time by changing the colors of the taskbox as each hour passes.",
      image: "workdaySchedule",
      githubLink: "https://dieterichelizabeth.github.io/workday-timetable/",
      deployed: "https://dieterichelizabeth.github.io/workday-timetable/",
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

export default Projects;
