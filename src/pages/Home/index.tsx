import { Button, Container, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();

  function handleSignOut() {
    localStorage.removeItem("user");

    navigate("/login");
  }

  useEffect(() => {
    const user: string | null = localStorage.getItem("user");

    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <Container p={6}>
      <Heading textAlign="center">Home</Heading>

      <Button onClick={handleSignOut}>Sign Out</Button>
    </Container>
  );
}
