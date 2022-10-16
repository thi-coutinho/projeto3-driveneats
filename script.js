let prato;
let bebida;
let sobremesa;

function selecionar(botao){
    // pegar a categoria do pai
    const pai = botao.parentNode;
    const categoria = pai.classList[1];
    // pegar o botão selecionado da mesma categoria
    const selecionado = document.querySelector("."+categoria+" .selecionado");
    // se houver selecionado remover a classe selecionado, 
    if(selecionado !== null){
        selecionado.classList.remove("selecionado");
    }
    
    //adicionar a classe selecionado no botão

    botao.classList.add("selecionado");

}