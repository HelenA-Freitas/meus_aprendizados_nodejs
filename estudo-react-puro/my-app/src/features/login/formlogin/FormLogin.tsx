import { ThemeProvider } from "@emotion/react";
import { Container, Box, Typography, FormControlLabel, Checkbox, Button } from "@mui/material";
import { SetStateAction, useState } from "react";
import {PasswordInput} from "./PasswordInput";
import { theme } from "../stylelogin";
import {UserInput} from "./UserInput";
import { login } from "../auth";


export default function FormLogin(){

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    const token = await login({email, password});
    // if()
  }

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
                <UserInput onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}/>
                <PasswordInput onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)}/>
                <FormControlLabel control={<Checkbox value="remember" />} label="Lembre de mim" />
                <Button
                type="button"
                fullWidth
                variant="contained"
                color='secondary'
                onClick={() => handleLogin()}
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#FF7F11'
                }}
              >
                  Entrar
                </Button>
                {/* <AcessButton action={() => console.log('click')}/> */}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    )
}