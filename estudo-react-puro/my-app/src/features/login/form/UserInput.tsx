import TextField from "@mui/material/TextField";

export default function UserInput(){
    return(
        <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="E-mail"
        name="email"
        autoComplete="email"
        autoFocus
        sx={{ backgroundColor: '#fff' }} />
    )
}