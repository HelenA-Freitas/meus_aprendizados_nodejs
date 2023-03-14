import { Container, Box, Typography, FormControlLabel, Checkbox, Button, TextField } from "@mui/material";
import { SetStateAction } from "react";
import { PasswordInput } from "../formlogin/PasswordInput";
import { UserInput } from "../formlogin/UserInput";


export default function FormCreateAccount(){
    return(
        <Container component="main" maxWidth="xs">
          <Box sx={{marginTop: 25, display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: '#639FAB', borderRadius: 10, padding: 5}}>
            <Typography component="h1" variant="h5">
              Criar conta
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
                <TextField margin="normal" required fullWidth id="email" label="E-mail" name="email" autoComplete="email" autoFocus sx={{ backgroundColor: '#fff' }}/>
                <TextField margin="normal" required fullWidth name="password" label="Senha" type="password" id="password" autoComplete="current-password" sx={{ backgroundColor: '#fff' }} />
                <Button type="button" fullWidth
                variant="contained"
                color='secondary'
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