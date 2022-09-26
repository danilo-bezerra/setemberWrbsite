import { Container, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

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

      <Button text="Sign Out" onClick={handleSignOut} />
    </Container>
  );
}
