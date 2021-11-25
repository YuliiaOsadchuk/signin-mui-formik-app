import styled from "styled-components";
import { Box, Button, FormControl } from "@mui/material";

export const FlexRow = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: "20px",
});

export const FlexColumn = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
});

export const FlexBoxShort = styled(Box)({
  width: "48%",
});

export const FlexCenter = styled(FlexColumn)({
  alignItems: "center",
});

export const SignInButton = styled(Button)({
  marginTop: "20px",
  marginBottom: "10px",
});

export const SignInFormControl = styled(FormControl)({
  marginLeft: "10px",
});
