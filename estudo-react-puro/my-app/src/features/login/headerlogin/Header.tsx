import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import CreateAccount from "./CreateAccount";
import { theme } from "../stylelogin";

export default function HeaderLogin(){
    return(
        <ThemeProvider theme={theme}>
            <Box
            sx={{ flexGrow: 2}}>
                <AppBar position="static">
                    <Toolbar sx={{color:'white'}}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 5}}>
                            Loja de Jogos
                        </Typography>
                        <CreateAccount/>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>

    )
}