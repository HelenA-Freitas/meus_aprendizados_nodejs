import { Container, Box, Typography, FormControlLabel, Checkbox, Button, TextField } from "@mui/material";
import { SetStateAction, useState } from "react";
import { PasswordInput } from "../formlogin/PasswordInput";
import { UserInput } from "../formlogin/UserInput";
import { createAccount } from "./CreateAccout";


export default function FormCreateAccount(){
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
    const handleCreateLog = () => {
        createAccount({email,password});
      }

    return(
        <Container component="main" maxWidth="xs">
          <Box sx={{marginTop: 25, display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: '#639FAB', borderRadius: 10, padding: 5}}>
            <Typography component="h1" variant="h5">
              Criar conta
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
                {/* <UserInput onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}/>
                <PasswordInput onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)}/> */}
                <Button type="button" fullWidth
                variant="contained"
                color='secondary'
                onClick={() => handleCreateLog()}
                sx={{
                  mt: 3, mb: 2, backgroundColor: '#FF7F11'}}>
                  Criar
                </Button>
                {/* <AcessButton action={() => console.log('click')}/> */}
            </Box>
          </Box>
        </Container>
    )
}