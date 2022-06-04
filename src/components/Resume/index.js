import React from "react";
import { Stack, Link, Image } from "@chakra-ui/react";

function Resume() {
  return (
    <div>
      <Stack className={"project-animation"} width={"60%"} margin={"auto"}>
        <Link color={"blue"} margin={"auto"} marginTop={"20px"}>
          <a
            href={require("../../assets/resume.pdf")}
            download="Dieterich-Elizabeth-Resume"
            className="col-12 text-center"
          >
            Download a PDF Copy
          </a>
        </Link>
        <Image
          src={require(`../../assets/page1.png`)}
          alt="Page 1 of Resume"
        ></Image>
        <Image
          src={require(`../../assets/page2.png`)}
          alt="Page 2 of Resume"
        ></Image>
      </Stack>
    </div>
  );
}

export default Resume;
