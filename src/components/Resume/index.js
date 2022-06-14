import React from "react";
import { Stack, Link, Heading, Text } from "@chakra-ui/react";

function Resume() {
  return (
    <div>
      <Stack
        className={"project-animation"}
        width={"60%"}
        margin={"auto"}
        textAlign={"center"}
      >
        <Heading>Resume</Heading>
        <Link
          href={require("../../assets/resume.pdf")}
          download="Dieterich-Elizabeth-Resume"
          className="col-12 text-center"
          color={"blue"}
          margin={"auto"}
          marginTop={"20px"}
        >
          Download a PDF Copy
        </Link>
        <Heading as={"h2"} fontSize={"15px"}>
          Summary
        </Heading>
        <Text>
          Full Stack Web Developer with a background in Anthropology and
          life-long dedication to learning how people communicate with the world
          around them. Known as an intense problem solver, with a focus on
          creating effortless user experiences. Leveraging an end-user
          perspective and strong teamwork skills in order to create robust
          applications in a timely manner.
        </Text>
        <Heading as={"h2"} fontSize={"15px"}>
          Technical Skills
        </Heading>
        <Text>
          Languages: HyperText Markup Language (HTML5), Cascading Style Sheets
          (CSS3), JavaScript, Git, Bootstrap, JQuery, MongoDB, Express.js,
          ReactJS, Node.js, MySQL, Sequelize, Rest API’s Applications: Github,
          Slack, Heroku
        </Text>
        <Heading as={"h2"} fontSize={"15px"}>
          Experience
        </Heading>
        <Text>
          Claims Associate Jun 2021 – Jan 2022 State Farm Richardson, TX
          Multi-tasked across technical platforms within a fast-paced
          environment. Proactively investigated claims, applied coverage, and
          accurately documented files. Key Accomplishments: Maintained Excellent
          Average Handle Time at 80-90% Received two “5-star medalia”,
          representing perfect reviews from customers. Received “Agent
          Compliment”, as a result of saving customer household policy.
          <br></br>
          <br></br>
          Barista/Team Lead Aug 2017 – Jun 2021 Kung Fu Tea Richardson, TX
          Crafted beverages with care and consistency. Worked with an evolving
          team of 5-12 baristas. Key Accomplishments: Managed 2 employees per
          shift. Trained 1-2 employees per month.
        </Text>
        <Heading as={"h2"} fontSize={"15px"}>
          Education
        </Heading>
        <Text>
          Boot Camp Certificate: University of Texas at Austin, Austin, TX A
          24-week intensive program focused on gaining technical programming
          skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node.js, MySQL,
          MongoDB, Express, Handelbars.js, and ReactJS.
          <br></br>
          <br></br>
          Bachelor of Liberal Arts, Anthropology: University of North Texas,
          Denton, TX
        </Text>
      </Stack>
    </div>
  );
}

export default Resume;
