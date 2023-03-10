import { TextField } from "@mui/material";


export default function EditTitle(){
    return(
        <TextField
        margin="normal"
        required
        fullWidth
        name="title"
        label= ''
        id="title"
        autoComplete="title"
        sx={{ backgroundColor: '#fff' }} />
    )
}