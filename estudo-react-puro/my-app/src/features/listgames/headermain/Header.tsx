import { ThemeProvider } from "@emotion/react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { theme } from "../../login/style";
import Logout from "./Logout";


export default function HeaderMain(){
    return(
        <ThemeProvider theme={theme}>
        <Box
        sx={{ flexGrow: 2}}>
            <AppBar position="static">
                <Toolbar sx={{color:'white'}}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 5}}>
                        Loja de Jogos
                    </Typography>
                    <Logout/>
                </Toolbar>
            </AppBar>
        </Box>
      </ThemeProvider>
    )
}