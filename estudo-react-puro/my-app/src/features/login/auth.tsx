import axios from "axios";
import Swal from "sweetalert2";

const axiosConfig = {
    headers:{
        Authorization:"Bearer " + localStorage.getItem("token")
    }
}

interface Props {
    email: string;
    password: string;
}
        
export const login = ({email, password}: Props) => {
    axios.post("http://localhost:45678/auth",{email,password}).then(res => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        axiosConfig.headers.Authorization = "Bearer " + localStorage.getItem("token");
        feedbackSucess("Logado!", 800);
        setTimeout(() => {
            window.location.assign('/jogos');
        },850);
    }).catch(error => {
        console.log(error);
    });
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
