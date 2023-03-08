import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function CreateAccount(){
    return(
        <Button color="inherit" endIcon={<AccountCircleIcon/>}>
            Criar conta
        </Button>
    )
}