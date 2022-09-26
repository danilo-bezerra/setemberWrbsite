import { Input, InputProps } from "@chakra-ui/react";

type Props = InputProps & {};

export default function ({ ...props }: Props) {
  return (
    <Input
      borderColor="#696687"
      focusBorderColor="#4d61fc"
      variant="flushed"
      {...props}
    />
  );
}
