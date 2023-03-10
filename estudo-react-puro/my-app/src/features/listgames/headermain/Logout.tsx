import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "@mui/material";

export default function Logout(){

    const exit = () => {
        window.location.assign('/');
    }

    return(
        <Button color="inherit" endIcon={<LogoutIcon/>} onClick={() => exit()}>
            Sair 
        </Button>
    )
}