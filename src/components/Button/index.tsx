import { Button, ButtonProps } from "@chakra-ui/react";

type Props = ButtonProps & {
  text: string;
};

export default function ({ text, ...props }: Props) {
  return (
    <Button
      bg="#4d61fc"
      color="#fff"
      size="lg"
      fontSize="md"
      _hover={{
        bg: "#253eff",
      }}
      {...props}
    >
      {text}
    </Button>
  );
}
