import TextField from "@mui/material/TextField/TextField";

export const PasswordInput = (props: any) => {
    return(
        <TextField {...props}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ backgroundColor: '#fff' }} />
    )
}