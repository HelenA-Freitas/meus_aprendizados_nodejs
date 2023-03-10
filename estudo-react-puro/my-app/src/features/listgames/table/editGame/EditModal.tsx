import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CreateAccount from "../../../login/headerlogin/CreateAccount";
import EditTitle from "./EditTitle";


export default function EditModal(){
    return(
        <Container sx={{  position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        borderRadius: 2,
        bgcolor: 'white',
        boxShadow: 24,
        p: 4,}}>
            <Box sx={{mb: 5}}>
                <AppBar sx={{borderRadius: 2}}>
                    <Toolbar sx={{color:'white'}}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 5, textAlign: 'center'}}>
                            Editar jogo
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                <EditTitle/>
            </Box>
        </Container>
    )
}