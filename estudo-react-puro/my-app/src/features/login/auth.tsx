import axios from "axios";
import Swal from "sweetalert2";

const axiosConfig = {
    headers:{
        Authorization:"Bearer " + localStorage.getItem("token")
    }
}
        
// function login(email, password){
//     const emailField = document.getElementById("email");
//     const passwordField = document.getElementById("password");

//     const email = emailField.value;
//     const password = passwordField.value;

//     axios.post("http://localhost:45678/auth",{email,password}).then(res => {
//         console.log("Testando");
//         const token = res.data.token;
//         localStorage.setItem("token", token);
//         axiosConfig.headers.Authorization = "Bearer " + localStorage.getItem("token");

//         const pL = document.getElementById("loginError");
//         pL.innerHTML = '';

//         document.getElementById("login").reset();
//         feedbackSucess("Logado!", 800);
//         setTimeout(() => {
//             window.location.assign('../index.html')
//         }, 1000);

//     }).catch(error => {
//         const erro = error?.response?.status ?? null

//         if(erro && erro==400){
//         const pL = document.getElementById("loginError");

//         pL.innerHTML = 'Credenciais inválidas!';
//         }else{
//             console.log(error)
//         }

//     });
// }

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
