import axios from "axios";
import { Navigate, redirect, useNavigate } from "react-router-dom";

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
        if(token){
            window.location.assign('/jogos');
        }

    }).catch(error => {
        console.log(error);
    });
}

// function feedbackSucess(msg, duration) {
//     //const el = document.createElement("div");
//     Swal.fire({
//     position: 'top-end',
//     icon: 'success',
//     title: msg,
//     showConfirmButton: false,
//     timer: duration
//     })
// }
