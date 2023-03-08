import { Button, SvgIcon } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function CreateAccount(){
    return(
        <Button color="inherit">Criar conta
        <SvgIcon component={AccountCircleIcon} sx={{padding: 2}}/>
        </Button>
    )
}