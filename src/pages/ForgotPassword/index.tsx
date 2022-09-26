import {
  Center,
  Container,
  Text,
  InputGroup,
  InputRightElement,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { EmailIcon } from "@chakra-ui/icons";

import Link from "../../components/Link";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Label from "../../components/label";

import forgotImage from "../../assets/forgot-password.png";
import sentImage from "../../assets/delivered.png";
import errorImage from "../../assets/warning.png";

const steps = {
  email: {
    name: "Forgot Password?",
    description:
      "Please enter your registered email address. We'll send instructions to help reset your password.",
    image: forgotImage,
  },
  sent: {
    name: "Email instructions sent",
    description: "Please follow the instructions we sent to your inbox.",
    image: sentImage,
  },
  error: {
    name: "An error as ocurred",
    description: "Please try again and check the inserted email.",
    image: errorImage,
  },
};

type Steps = "email" | "sent" | "error";

export default function () {
  const [step, setStep] = useState<Steps>("email");
  const [email, setEmail] = useState("");

  function handleChangeEmail(email: string) {
    setEmail(email);
  }

  function handleResetPassword() {
    if (!email) {
      setStep("error");
      return;
    }

    if (step == "email") {
      setStep("sent");
    }
    console.log(email);
  }

  return (
    <Center bg="#ececec" minH="100vh">
      <Container bg="#ffffff" w="400px" p={9} color="#696687" borderRadius={4}>
        <Image
          src={steps[step].image}
          w="4rem"
          display="block"
          margin="auto"
          mb="4"
        />
        <Heading textAlign="center" size="lg" mb={5} color="black">
          {steps[step].name}
        </Heading>

        {step == "sent" && (
          <Text fontWeight="bold" textAlign="center" color="#333">
            {email}
          </Text>
        )}

        <Text textAlign="center" mb="6">
          {steps[step].description}
        </Text>

        {step == "email" ? (
          <form>
            <Label label="Email" />

            <InputGroup mb={4}>
              <Input
                id="email"
                type="email"
                placeholder="ex: email@example.com"
                onChange={({ target }) => handleChangeEmail(target.value)}
              />

              <InputRightElement
                pointerEvents="none"
                children={<EmailIcon />}
              />
            </InputGroup>

            <Button
              onClick={handleResetPassword}
              w="full"
              my="4"
              text="Send Reset Instructions"
            />
          </form>
        ) : (
          ""
        )}

        <Text textAlign="center">
          Have you remembered your password? <Link to="/login" text="Sign in" />
        </Text>
      </Container>
    </Center>
  );
}
