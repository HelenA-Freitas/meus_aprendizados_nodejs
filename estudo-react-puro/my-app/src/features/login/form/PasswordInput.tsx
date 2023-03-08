import TextField from "@mui/material/TextField/TextField";
import { useState } from "react";

export default function PasswordInput(){
    const [password, setPassword] = useState('');
    return(
        <TextField
                margin="normal"
                required
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ backgroundColor: '#fff' }} />
    )
}