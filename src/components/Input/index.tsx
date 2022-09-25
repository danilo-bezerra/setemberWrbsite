import React from "react";
import "./styles.scss";

type Props = {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  value: string | number;
  onChange: () => string;
};

export default function ({ ...props }: Props) {
  return <input className="input" {...props} />;
}
