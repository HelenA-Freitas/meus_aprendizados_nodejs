import { AppBar, Box, TextField, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState, SetStateAction } from "react";

interface Props{
    id:number;
    titleGame:string;
    yearGame:number;
    priceGame:number;
}


export default function EditModal({id, titleGame, yearGame, priceGame}:Props){
    const [title, setTitle] = useState(titleGame);
    const [year, setYear] = useState(yearGame);
    const [price, setPrice] = useState(priceGame);

    const handleEdit = async () => {
        //await login({email, password});
    }

    console.log(year)

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
                <TextField margin="normal" onChange={(e: { target: { value: SetStateAction<string>; }; }) => setTitle(e.target.value)} required fullWidth 
                name="title" value={title} id="title" autoComplete="title" sx={{ backgroundColor: '#fff' }} />
                <TextField margin="normal" onChange={(e : any) => setYear(e.target.value)} required fullWidth name="year" value={year} id="year" autoComplete="year" 
                sx={{ backgroundColor: '#fff' }} />
                <TextField margin="normal" onChange={(e : any) => setYear(e.target.value)} required fullWidth name="price" value={price} id="price" autoComplete="price" 
                sx={{ backgroundColor: '#fff' }} />
            </Box>
        </Container>
    )
}