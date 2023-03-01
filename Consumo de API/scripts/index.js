const axiosConfig = {
    headers:{
        Authorization:"Bearer " + localStorage.getItem("token")
    }
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
            const item = document.createElement("tr");
            const col1 = document.createElement('td');
            const col2 = document.createElement('td');
            const col3 = document.createElement('td');
            const colAction = document.createElement('td');

            col1.setAttribute("class", "col-titles");
            colAction.setAttribute("class", "col-actions");

            item.setAttribute("data-id", game.id);
            item.setAttribute("data-title", game.title);
            item.setAttribute("data-year", game.year);
            item.setAttribute("data-price", game.price);

            col1.innerHTML = game.title;
            col2.innerHTML = game.year;
            col3.innerHTML = 'R$ '+ (game.price).toFixed(2);

            const deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
            deleteBtn.addEventListener("click", function () {
                msgConfirm(item);
            });

            const editBtn = document.createElement("button");
            editBtn.innerHTML = '<i class="fa-sharp fa-solid fa-pen-to-square"></i>';
            editBtn.addEventListener("click", function () {
                loadForm(item);
            });

            deleteBtn.setAttribute('id', 'button-delete');

            editBtn.setAttribute('type', 'button');
            editBtn.setAttribute('data-toggle', 'modal');
            editBtn.setAttribute('data-target', '#editGameModal');

            colAction.append(deleteBtn);
            colAction.append(editBtn);

            item.append(col1);
            item.append(col2);
            item.append(col3);
            item.append(colAction);

            tbody.append(item);
        });

    }).catch(error => {
        console.log(error);
    });
}
window.onload = listarGames();

function feedbackSucess(msg, duration) {
    //const el = document.createElement("div");
    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: msg,
    showConfirmButton: false,
    timer: duration
    })
}

function msgConfirm(item){
    Swal.fire({
        title: 'Tem certeza que deseja deletar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, delete!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          deleteGame(item);
        }
      })
}