import {
  Center,
  Container,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { EmailIcon } from "@chakra-ui/icons";
import Link from "../../components/Link";

type Steps = 'get_email' | 'send_reset' | 'success_send_reset'

export default function () {
  const step = useState("1");
  const [email, setEmail] = useState("");

  function handleChangeEmail(email: string) {
    setEmail(email);
  }

  function handleResetPassword() {
    console.log(email);
  }

  return (
    <Center bg="#ececec" minH="100vh">
      <Container bg="#ffffff" w="400px" p={9} color="#696687" borderRadius={4}>
        <Heading textAlign="center" size="lg" mb={2} color="black">
          Forgot Password?
        </Heading>
        <Text textAlign="center" mb="6">
          Please enter your registered email address. We'll send instructions to
          help reset your password.
        </Text>
        <form>
          <Text fontSize="md">Email</Text>
          <InputGroup mb={4}>
            <Input
              id="email"
              type="email"
              variant="flushed"
              borderColor="#696687"
              borderBottomWidth={1.5}
              focusBorderColor="#4d61fc"
              placeholder="ex: email@example.com"
              onChange={({ target }) => handleChangeEmail(target.value)}
            />
            <InputRightElement pointerEvents="none" children={<EmailIcon />} />
          </InputGroup>
          <Button
            onClick={handleResetPassword}
            bg="#4d61fc"
            color="#fff"
            w="full"
            size="lg"
            my="4"
            _hover={{
              bg: "#253eff",
            }}
            fontSize="md"
            variant="solid"
          >
            Send Reset Instructions
          </Button>
        </form>

        <Text textAlign="center">
          Have you remembered your password? <Link to="/login" text="Sign in" />
        </Text>
      </Container>
    </Center>
  );
}
