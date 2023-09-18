const gameForm = document.querySelector('.form-1');
const gameList = document.getElementById('gameList');
let gameListArray = [];
let starSet = "";
let classSet = "";
let divId = 0;

gameForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('name').value;
    const descricao = document.getElementById('Ldescricao').value;
    const favorito = document.getElementById('favorito').value;
    if( nome && descricao ){
       
       const jogo = {
        nome,
        descricao,
        favorito,
       };
       addElement(jogo);
       gameListArray.push(jogo);
       gameForm.reset();
    }
});

function addElement(jogo){
    if(jogo.favorito == "Sim"){
        classSet = "jogo-container-fav";
        starSet =  `<img id="img-estrela" src="img/star-outline-svgrepo-com 1.png" alt="estrela"></img>`;  
    } else{
        classSet = "jogo-container";
        starSet =  `<img id="img-estrela" src="img/estrela transparente.png" alt="estrela"></img>`;
    }
    adicionarJogo(jogo);
    console.log(gameListArray);
}



function adicionarJogo(jogo) {
    let row = document.createElement("div");
    
    row.innerHTML = `
    <div data-index="${divId}" id="gameDiv" class="${classSet}" >

    <div id="joystick">
        <img id="img-joystick" src="img/joystick-svgrepo-com 1.png" alt="joystick">
    </div>
    <div class="titulo">
        <h4 id="title-game">${jogo.nome}</h4>
        <div id="conteudo">
            <p>${jogo.descricao}</p>
        </div>
    </div>
    <div id="action">
        <div id="excluir" onclick="apagarJogo(this)">
           <img id="img-lixo" src="img/trash 1.png" alt="lixo">
        </div>
        <div id="estrela" onclick="setStar(this)">
          ${starSet}
        </div>
    </div>

</div>
        `;

        divId++;
        gameList.appendChild(row);
}

function apagarJogo(element) {
    elementId = element.closest("#gameDiv");
    id = elementId.getAttribute("data-index");
    gameListArray.splice(id, 1);

    elementId.remove();
    console.log(gameListArray);
}

function setStar(element){
    parentE = element.closest("#gameDiv");
    imgDiv = element.querySelector("img");

    id = parentE.getAttribute("data-index");
    

    if(parentE.classList.contains("jogo-container")){
        parentE.classList.remove("jogo-container");
        parentE.classList.add("jogo-container-fav");
        imgDiv.src = "img/star-outline-svgrepo-com 1.png";
        gameListArray[id].favorito = "Sim";
    } else{
        parentE.classList.add("jogo-container");
        parentE.classList.remove("jogo-container-fav");
        imgDiv.src = "img/estrela transparente.png";
        gameListArray[id].favorito = "nao";
    }
    console.log(gameListArray);

}

// Persistência de dados

