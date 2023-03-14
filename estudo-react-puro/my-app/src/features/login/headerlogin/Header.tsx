import { Box, AppBar, Toolbar, Typography } from "@mui/material";

export default function HeaderLogin(){
    return(
        
        <Box
        sx={{ flexGrow: 2}}>
            <AppBar position="static">
                <Toolbar sx={{color:'white'}}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 5}}>
                        Loja de Jogos
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        

    )
}