import { FunctionComponent } from "react";

const Error: FunctionComponent = ({ children }) => (
  <p style={{ color: "red" }}>{children}</p>
);

export default Error;
