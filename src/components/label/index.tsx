import { Text, TextProps } from "@chakra-ui/react";

type Props = TextProps & {
  label: string;
};

export default function ({ label, ...props }: Props) {
  return (
    <Text fontSize="md" fontWeight="semibold">
      {label}
    </Text>
  );
}
