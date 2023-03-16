import axios from "axios";
import Swal from "sweetalert2";

const axiosConfig = {
    headers:{
        Authorization:"Bearer " + localStorage.getItem("token")
    }
}

interface Props{
    id:number;
    title:string;
    year:number | string;
    price:number | string;
}

export const update = ({id, title, year, price}: Props) => {
    const game = {
        title: title,
        year: year,
        price: price
    }

    axios.put("http://localhost:45678/game/" + id, game, axiosConfig).then(response => {
        if (response.status === 200) {
            //alert("");
            feedbackSucess("Game atualizado!", 1000);
            setTimeout(() => {
                window.location.assign('/jogos');
            },1050);
            
        }
    }).catch((error: any) => {
            console.log(error);
    })

}

function feedbackSucess(msg: string, duration:number) {
    //const el = document.createElement("div");
    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: msg,
    showConfirmButton: false,
    timer: duration
    })
}