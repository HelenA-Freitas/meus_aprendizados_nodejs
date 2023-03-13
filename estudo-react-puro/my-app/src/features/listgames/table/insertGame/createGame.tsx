import axios from "axios";
import Swal from "sweetalert2";

const axiosConfig = {
    headers:{
        Authorization:"Bearer " + localStorage.getItem("token")
    }
}

interface Props{
    title:string;
    year:any;
    price:any;
}

export const createGame = ({title, year, price}: Props) => {
    const game = {
        title: title,
        year: year, 
        price: price
    }

    axios.post("http://localhost:45678/game", game, axiosConfig).then(response => {
            feedbackSucess("Game cadastrado!", 1000);
            setTimeout(() => {
                window.location.assign('/jogos');
            },1050);

    }).catch((error: any) => {
        //fazer if com error.response.status == 400
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