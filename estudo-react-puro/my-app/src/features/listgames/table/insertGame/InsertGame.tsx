import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import InsertModal from "./insertModal";
import AddIcon from '@mui/icons-material/Add';
import { ModalClose } from "@mui/joy";


export default function InsertGame(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return(
        <>
            <Box
                m={1}
                //margin
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <Button variant="contained" color="primary" sx={{ height: 40, color: 'white' }} onClick={handleOpen} startIcon={<AddIcon/>}>
                    Adicionar
                </Button>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"   
            >
                <InsertModal/>                    
            </Modal>
        </>
    )
}