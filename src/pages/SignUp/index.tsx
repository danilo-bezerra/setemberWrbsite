import { useEffect, useState } from "react";
import {
  Center,
  Container,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { IoPerson } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

import Link from "../../components/Link";
import Button from "../../components/Button";
import Label from "../../components/label";
import Input from "../../components/Input";

export default function () {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    c_password: "",
  });

  const navigate = useNavigate();

  const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (id: string, value: string) => {
    setForm((form) => {
      return { ...form, [id]: value };
    });
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const haveSomeEmptyField = Object.values(form).filter((value) => {
      if (!value) {
        return true;
      }
    }).length;

    console.log(haveSomeEmptyField);

    if (haveSomeEmptyField) {
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({ email: form.email, pass: form.password })
    );

    navigate("/");
  };

  useEffect(() => {
    const user: string | null = localStorage.getItem("user");

    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <Center bg="#ececec" minH="100vh">
      <Container bg="#ffffff" w="400px" p={9} color="#696687" borderRadius={4}>
        <Heading textAlign="center" size="lg" mb={6} color="black">
          Create Account
        </Heading>

        <form>
          <Label label="Name" />
          <InputGroup mb={4}>
            <Input
              id="name"
              type="text"
              placeholder="ex: John Doe"
              onChange={({ target }) => handleChange(target.id, target.value)}
            />
            <InputRightElement pointerEvents="none" children={<IoPerson />} />
          </InputGroup>

          <Label label="Email" />
          <InputGroup mb={4}>
            <Input
              id="email"
              type="email"
              placeholder="ex: email@example.com"
              onChange={({ target }) => handleChange(target.id, target.value)}
            />
            <InputRightElement pointerEvents="none" children={<EmailIcon />} />
          </InputGroup>

          <Label label="Password" />
          <InputGroup size="md" mb={4}>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="**********"
              onChange={({ target }) => handleChange(target.id, target.value)}
            />
            <InputRightElement>
              <IconButton
                onClick={handleTogglePasswordVisibility}
                aria-label="See password"
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                bg="transparent"
                _hover={{
                  bg: "transparent",
                  color: "#4651fc",
                }}
                _focus={{
                  bg: "transparent",
                }}
              />
            </InputRightElement>
          </InputGroup>

          <Label label="Confirm password" />
          <InputGroup size="md" mb={4}>
            <Input
              id="c_password"
              type={showPassword ? "text" : "password"}
              placeholder="**********"
              onChange={({ target }) => handleChange(target.id, target.value)}
            />

            <InputRightElement>
              <IconButton
                onClick={handleTogglePasswordVisibility}
                aria-label="See password"
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                bg="transparent"
                _hover={{
                  bg: "transparent",
                  color: "#4651fc",
                }}
                _focus={{
                  bg: "transparent",
                }}
              />
            </InputRightElement>
          </InputGroup>

          <Button
            onClick={(e) => handleSubmit(e)}
            w="full"
            my="4"
            text="Create Account"
          />
        </form>

        <Text textAlign="center">
          Already have a account? <Link to="/login" text="Sign in" />
        </Text>
      </Container>
    </Center>
  );
}
