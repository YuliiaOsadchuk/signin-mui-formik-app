import React from "react";
import Link from "@mui/material/Link";
import { SignInTypography } from "./Copyright.styles";

const Copyright = (props: any) => (
  <SignInTypography
    variant="body2"
    color="text.secondary"
    align="center"
    {...props}
  >
    {"Copyright © "}
    <Link color="inherit" href="https://lionwood.software/">
      Lionwood.software
    </Link>
    {new Date().getFullYear()}
    {"."}
  </SignInTypography>
);

export default Copyright;
