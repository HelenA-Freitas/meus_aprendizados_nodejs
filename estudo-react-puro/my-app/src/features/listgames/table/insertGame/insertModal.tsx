import { ModalClose } from "@mui/joy";
import { Container, Box, AppBar, Toolbar, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";
import { createGame } from "./createGame";


export default function InsertModal(){
    const [title, setTitle] = useState('');
    const [year, setYear] = useState(); 
    const [price, setPrice] = useState();

    const handleCreateGame = async () => {
        createGame({title, year, price});
    }

    return(
        <Container sx={{  position: 'absolute' as 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, borderRadius: 2, bgcolor: 'white',
        boxShadow: 24, p: 4,}}>
            <Box sx={{mb: 5}}>
                <AppBar sx={{borderRadius: 2}}>
                    <Toolbar sx={{color:'white'}}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 5, textAlign: 'center'}}>
                            Novo jogo
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                <TextField margin="normal" required fullWidth label='Título' name="title" id="title" autoComplete="title" onChange={(e) => setTitle(e.target.value)} sx={{ backgroundColor: '#fff' }} />
                <TextField margin="normal" required fullWidth label='Ano' name="year" id="year" autoComplete="year" onChange={(e:any) => setYear(e.target.value)} sx={{ backgroundColor: '#fff' }}/>
                <TextField margin="normal" required fullWidth label='Preço' name="price" id="price" autoComplete="price" onChange={(e:any) => setPrice(e.target.value)} sx={{ backgroundColor: '#fff' }} />
                <Button type="button" fullWidth variant="contained" color='secondary' sx={{mt: 3, mb: 2, backgroundColor: '#FF7F11', color: 'white'}} onClick={() => handleCreateGame()}>
                  Criar
                </Button>
            </Box>
        </Container> 
    )
}