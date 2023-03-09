import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "@mui/material";

export default function Logout(){
    return(
        <Button color="inherit" endIcon={<LogoutIcon/>}>
            Sair 
        </Button>
    )
}