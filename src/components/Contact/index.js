import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Stack marginBottom={170}>
      <VStack
        marginTop={"20px"}
        marginBottom={"0px"}
        spacing={1}
        textAlign="center"
      >
        <Heading mt={16} fontSize="1xl">
          Contact Card
        </Heading>
        <Text>
          Thank you for viewing my portfolio! <br />
          If you have any questions, suggestions, or feedback, please reach out!{" "}
        </Text>
      </VStack>
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: "100%", md: "700px" }}
          height={{ sm: "476px", md: "20rem" }}
          direction={{ base: "column", md: "row" }}
          boxShadow={"2xl"}
          padding={4}
        >
          <Flex flex={0.5}>
            <Image
              objectFit="cover"
              src={
                "https://media-exp1.licdn.com/dms/image/C5603AQERzaNfaWrQCw/profile-displayphoto-shrink_400_400/0/1650872050133?e=1660780800&v=beta&t=YYx04VWwcQbBbr4ZYdg8oiFmJnAxcaVYl3yvcukxN9I"
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            pt={2}
          >
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              Liz Dieterich
            </Heading>

            <Text color={"gray.600"} fontSize={"14px"}>
              <i className="bi bi-geo-alt mr-2"></i> Dallas, TX <br />
              <i className="bi bi-envelope mr-2"></i>{" "}
              dieterichelizabeth@gmail.com <br />
              <i className="bi bi-github mr-2"></i>{" "}
              https://github.com/dieterichelizabeth <br />
              <i className="bi bi-linkedin mr-2"></i>{" "}
              https://www.linkedin.com/in/elizabeth-dieterich-067b55a8/
            </Text>

            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                margin={"auto"}
                width={"120px"}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                <a href="mailto:dieterichelizabeth@gmail.com">Email</a>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </Stack>
  );
}
