import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #4d61fc;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

type Props = {
  text: string;
  to: string;
};

export default function ({ text, to }: Props) {
  return <StyledLink to={to}>{text}</StyledLink>;
}
