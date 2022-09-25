import {
  Center,
  Container,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  Heading,
  Checkbox,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Link from "../../components/Link";
import { useNavigate, useNavigation } from "react-router-dom";

export default function () {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();

  const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (id: string, value: string) => {
    setForm((form) => {
      return { ...form, [id]: value };
    });
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!form.email || !form.password) {
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
      <Container
        bg="#ffffff"
        w="400px"
        h="465px"
        p={9}
        color="#696687"
        borderRadius={4}
      >
        <Heading textAlign="center" size="lg" mb={2} color="black">
          Welcome
        </Heading>
        <Text textAlign="center" mb="6">
          Login to manage your account
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
          <Checkbox
            isChecked={remember}
            onChange={() => setRemember((v) => !v)}
          >
            Remember me
          </Checkbox>
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
            Login
          </Button>
        </form>

        <Text textAlign="center" mb="2">
          <Link to="/forgot-password" text="Forgot Password?" />
        </Text>

        <Text textAlign="center">
          Don't have a account? <Link to="/register" text="Sign Up" />
        </Text>
      </Container>
    </Center>
  );
}
