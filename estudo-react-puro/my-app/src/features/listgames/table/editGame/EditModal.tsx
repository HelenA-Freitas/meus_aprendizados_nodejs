import { AppBar, Box, Button, TextField, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState, SetStateAction } from "react";
import { update } from "./UpdateGame";

interface Props{
    id:number;
    title:string;
    year:number;
    price:number;
}


export default function EditModal({id, title, year, price}:Props){
    const [titleGame, setTitle] = useState(title);
    const [yearGame, setYear] = useState(year);
    const [priceGame, setPrice] = useState(price);

    const handleEdit = async () => {
        console.log('click')
        update({ id, titleGame, yearGame, priceGame });
    }

    return(
        <Container sx={{  position: 'absolute' as 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, borderRadius: 2, bgcolor: 'white',
        boxShadow: 24, p: 4,}}>
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
                <TextField margin="normal" onChange={(e: { target: { value: SetStateAction<string>; }; }) => setTitle(e.target.value)} required fullWidth 
                name="title" value={titleGame} id="title" autoComplete="title" sx={{ backgroundColor: '#fff' }} />
                <TextField margin="normal" onChange={(e : any) => setYear(e.target.value)} required fullWidth name="year" value={yearGame} id="year" autoComplete="year" 
                sx={{ backgroundColor: '#fff' }} />
                <TextField margin="normal" onChange={(e : any) => setPrice(e.target.value)} required fullWidth name="price" value={priceGame} id="price" autoComplete="price" 
                sx={{ backgroundColor: '#fff' }} />
                <Button type="button" fullWidth variant="contained" color='secondary' onClick={() => handleEdit()} sx={{mt: 3, mb: 2, backgroundColor: '#FF7F11', color: 'white'}}>
                  Editar
                </Button>
            </Box>
        </Container>
    )
}