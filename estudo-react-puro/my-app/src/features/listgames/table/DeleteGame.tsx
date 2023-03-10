import { Button } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

const axiosConfig = {
    headers:{
        Authorization:"Bearer " + localStorage.getItem("token")
    }
}

interface Props{
    id: number;
    title:string;
}

function ConfirmDelete(id: number, title: string){
    Swal.fire({
        title: `Tem certeza que deseja deletar ${title}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FF7F11',
        cancelButtonColor: 'gray',
        confirmButtonText: 'Sim, delete!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          handleDelete(id);
        }
      })
}

function handleDelete(id: number){
    axios.delete("http://localhost:45678/game/" + id, axiosConfig).then(() => {
        
    }).catch(error => {
        console.log(error);
    });
}

export default function DeleteGame({id, title}: Props){
    return(
        <Button type="button" onClick={() => ConfirmDelete(id, title)}>Delete</Button>
    )
}

