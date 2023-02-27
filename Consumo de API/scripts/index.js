const axios = require('axios');
const Swal = require('sweetalert2');

const axiosConfig = {
    headers:{
        Authorization:"Bearer " + localStorage.getItem("token")
    }
}
        
function login(){
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");

    const email = emailField.value;
    const password = passwordField.value;

    axios.post("http://localhost:45678/auth",{email,password}).then(res => {

        const token = res.data.token;
        localStorage.setItem("token", token);
        axiosConfig.headers.Authorization = "Bearer " + localStorage.getItem("token");

        const pL = document.getElementById("loginError");

        pL.innerHTML = '';

        listarGames();
        window.location.assign('../index.html');
        feedbackSucess("Logado!", 1000);
        document.getElementById("login").reset();


    }).catch(error => {
        const erro = error?.response?.status ?? null

        if(erro && erro==400){
        const pL = document.getElementById("loginError");

        pL.innerHTML = 'Credenciais inválidas!';
        }else{
            console.log(error)
        }

    });
}

        function createGame() {
            const titleInput = document.getElementById("title");
            const yearInput = document.getElementById("year");
            const priceInput = document.getElementById("price");

            const game = {
                title: titleInput.value,
                year: yearInput.value,
                price: priceInput.value
            }

            axios.post("http://localhost:45678/game", game, axiosConfig).then(response => {
                if (response.status == 200) {
                    feedbackSucess("Game cadastrado!", 1000);
                    listarGames();

                    const pT = document.getElementById("errorT");
                    const pY = document.getElementById("errorY");
                    const pP = document.getElementById("errorP");

                    pT.innerHTML = '';
                    pY.innerHTML = '';
                    pP.innerHTML = '';

                    document.getElementById("create").reset();
                }
            }).catch(error => {
                //fazer if com error.response.status == 400
                if(error.response.status == 400){
                    const {titleError, yearError, priceError} = error.response.data;
                    const pT = document.getElementById("errorT");
                    const pY = document.getElementById("errorY");
                    const pP = document.getElementById("errorP");

                    pT.innerHTML = '';
                    pY.innerHTML = '';
                    pP.innerHTML = '';

                    if(titleError){
                        pT.innerHTML = titleError;
                    }
                    if(yearError){
                        pY.innerHTML = yearError;
                    }
                    if(priceError){
                        pP.innerHTML = priceError;
                    }
                }else{
                    console.log(error);
                }
            });

        }

        function deleteGame(listItem) {
            const id = listItem.getAttribute("data-id");
            axios.delete("http://localhost:45678/game/" + id, axiosConfig).then(response => {
                feedbackSucess("Game deletado!", 1000);
                listarGames();
            }).catch(error => {
                console.log(error);
            });
        }

        function loadForm(listItem) {
            const id = listItem.getAttribute("data-id");
            const title = listItem.getAttribute("data-title");
            const year = listItem.getAttribute("data-year");
            const price = listItem.getAttribute("data-price");

            document.getElementById("idEdit").value = id;
            document.getElementById("titleEdit").value = title;
            document.getElementById("yearEdit").value = year;
            document.getElementById("priceEdit").value = price;
        }

        function updateGame() {
           // const idInput = document.getElementById("idEdit");
            const titleInput = document.getElementById("titleEdit");
            const yearInput = document.getElementById("yearEdit");
            const priceInput = document.getElementById("priceEdit");

            const game = {
                title: titleInput.value,
                year: yearInput.value,
                price: priceInput.value
            }

            const id = document.getElementById("idEdit").value;

            axios.put("http://localhost:45678/game/" + id, game, axiosConfig).then(response => {
                if (response.status == 200) {
                    //alert("");
                    feedbackSucess("Game atualizado!", 1000);
                    listarGames();

                    const pEditT = document.getElementById("errorEditT");
                    const pEditY = document.getElementById("errorEditY");
                    const pEditP = document.getElementById("errorEditP");

                    pEditT.innerHTML = '';
                    pEditY.innerHTML = '';
                    pEditP.innerHTML = '';

                    document.getElementById("edit").reset();
                }
            }).catch(error => {
                if(error.response.status == 400){

                    const {titleError, yearError, priceError} = error.response.data;

                    const pEditT = document.getElementById("errorEditT");
                    const pEditY = document.getElementById("errorEditY");
                    const pEditP = document.getElementById("errorEditP");

                    pEditT.innerHTML = '';
                    pEditY.innerHTML = '';
                    pEditP.innerHTML = '';

                    if(titleError){
                        pEditT.innerHTML = titleError;
                    }
                    if(yearError){
                        pEditY.innerHTML = yearError;
                    }
                    if(priceError){
                        pEditP.innerHTML = priceError;
                    }
                }else{
                    console.log(error);
                }

            });

        }

        function listarGames() {
            axios.get("http://localhost:45678/games", axiosConfig).then(response => {
                const games = response.data;
                const tbody = document.getElementById("games");
                tbody.innerHTML = "";

                games.forEach(game => {
                    const item = document.createElement("li");

                    item.setAttribute("data-id", game.id);
                    item.setAttribute("data-title", game.title);
                    item.setAttribute("data-year", game.year);
                    item.setAttribute("data-price", game.price);

                    item.innerHTML = /* game.id */game.title + " - " + game.year + " - R$" + game.price;

                    const deleteBtn = document.createElement("button");
                    deleteBtn.innerHTML = "Deletar";

                    deleteBtn.addEventListener("click", function () {
                        deleteGame(item);
                    });

                    const editBtn = document.createElement("button");
                    editBtn.innerHTML = "Editar";

                    editBtn.addEventListener("click", function () {
                        loadForm(item);
                    });

                    item.appendChild(deleteBtn);
                    item.appendChild(editBtn);
                    tbody.appendChild(item);

                });

            }).catch(error => {
                console.log(error);
            });
        }
        function feedbackSucess(msg, duration) {
            //const el = document.createElement("div");
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: msg,
            showConfirmButton: false,
            timer: duration
            })
            // el.setAttribute("style", "position:absolute;top:40%;left:20%;  background-color: #f44336;color: white;");
            // el.innerHTML = msg;
            // document.body.appendChild(el);
            // setTimeout(function () {
            //     el.parentNode.removeChild(el);
            // }, duration);
            
        }
        //listarGames();