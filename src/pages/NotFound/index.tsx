import { Center, Container, Text, Heading } from "@chakra-ui/react";

export default function () {
  return (
    <Center bg="#ececec" minH="100vh">
      <Container
        bg="transparent"
        w="768px"
        p={9}
        color="#696687"
        borderRadius={4}
      >
        <Heading textAlign="center" size="3xl" mb={8} color="black">
          Page not found
        </Heading>
        <Text textAlign="center" mb="6">
          The page you are looking for could not be found. It might have been
          removed, renamed or did not exist in the first place.
        </Text>
      </Container>
    </Center>
  );
}
