import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import CreateAccount from "./CreateAccount";

export default function HeaderLogin(){
    return(
        
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
        

    )
}