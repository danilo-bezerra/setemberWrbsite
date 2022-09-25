import {
  Box,
  Center,
  Container,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { IoPerson } from "react-icons/io5";
import Link from "../../components/Link";
import { useNavigate } from "react-router-dom";
//IoPerson
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
          <Text fontSize="md">Name</Text>
          <InputGroup mb={4}>
            <Input
              id="name"
              type="text"
              variant="flushed"
              borderColor="#696687"
              borderBottomWidth={1.5}
              focusBorderColor="#4d61fc"
              placeholder="ex: John Doe"
              onChange={({ target }) => handleChange(target.id, target.value)}
            />
            <InputRightElement pointerEvents="none" children={<IoPerson />} />
          </InputGroup>

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
              onChange={({ target }) => handleChange(target.id, target.value)}
            />
            <InputRightElement pointerEvents="none" children={<EmailIcon />} />
          </InputGroup>

          <Text fontSize="md">Password</Text>
          <InputGroup size="md" mb={4}>
            <Input
              id="password"
              variant="flushed"
              type={showPassword ? "text" : "password"}
              borderColor="#696687"
              borderBottomWidth={1.5}
              focusBorderColor="#4d61fc"
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

          <Text fontSize="md">Confirm password</Text>
          <InputGroup size="md" mb={4}>
            <Input
              id="c_password"
              variant="flushed"
              type={showPassword ? "text" : "password"}
              borderColor="#696687"
              borderBottomWidth={1.5}
              focusBorderColor="#4d61fc"
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
            bg="#4d61fc"
            color="#fff"
            w="full"
            size="lg"
            fontSize="md"
            my="4"
            _hover={{
              bg: "#253eff",
            }}
            variant="solid"
          >
            Create Account
          </Button>
        </form>

        <Text textAlign="center">
          Already have a account? <Link to="/login" text="Sign in" />
        </Text>
      </Container>
    </Center>
  );
}
