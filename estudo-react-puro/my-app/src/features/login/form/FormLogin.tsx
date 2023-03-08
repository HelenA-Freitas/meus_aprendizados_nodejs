import { ThemeProvider } from "@emotion/react";
import { Container, Box, Typography, TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
import { useState } from "react";
import AcessButton from "./AcessAccount";
import PasswordInput from "./PasswordInput";
import { theme } from "../stylelogin";
import UserInput from "./UserInput";


export default function FormLogin(){
    return(
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 25,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: '#639FAB',
              borderRadius: 10,
              padding: 5,
            }}
          >
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
                <UserInput/>
                <PasswordInput/>
                <FormControlLabel control={<Checkbox value="remember" />} label="Lembre de mim" />
                <AcessButton/>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    )
}