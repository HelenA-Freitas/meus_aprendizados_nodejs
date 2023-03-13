import axios from "axios";
import Swal from "sweetalert2";

const axiosConfig = {
    headers:{
        Authorization:"Bearer " + localStorage.getItem("token")
    }
}

interface Props{
    id:number;
    titleGame:string;
    yearGame:number;
    priceGame:number;
}

export const update = ({id, titleGame, yearGame, priceGame}: Props) => {
    const game = {
        title: titleGame,
        year: yearGame,
        price: priceGame
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