import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function CreateAccount(){
    const enter = () => {
        window.location.assign('/criar-conta');
    }
    return(
        <Button color="inherit" endIcon={<AccountCircleIcon/>} onClick={() => enter()}>
            Criar conta
        </Button>
    )
}