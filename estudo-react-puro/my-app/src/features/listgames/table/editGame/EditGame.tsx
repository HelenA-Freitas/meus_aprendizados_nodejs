import { Box, Button, Modal, Typography } from "@mui/material";
import EditSharpIcon from '@mui/icons-material/EditSharp';
import { useState } from "react";
import EditModal from "./EditModal";

interface Props{
    id:number;
    title:string;
    year:number;
    price:number;
}

export default function EditGame({id, title, year, price}:Props){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return(
        <>
            <Button type="button" sx={{ backgroundColor: '#FF7F11', color: 'white', m: 1 }} onClick={handleOpen}>
                <EditSharpIcon />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >    
                <EditModal id={id} titleGame={title} yearGame={year} priceGame={price}/>
            </Modal>
        </>
    )
}
