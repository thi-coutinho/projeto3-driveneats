let prato;
let bebida;
let sobremesa;

function selecionar(botao) {
    // pegar a categoria do pai
    const pai = botao.parentNode;
    const categoria = pai.classList[1];
    // pegar o botão selecionado da mesma categoria
    const selecionado = document.querySelector("." + categoria + " .selecionado");
    // se houver selecionado remover a classe selecionado, 
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }

    //adicionar a classe selecionado no botão

    botao.classList.add("selecionado");
    // pegar o nome do item
    let nomeItem = botao.querySelector(".nome-item").innerHTML
    // alterar a opção selecionado na variável prato, bebida ou sobremesa
    if (categoria == "pratos") {
        prato = nomeItem;
    } else if (categoria == "bebidas") {
        bebida = nomeItem;
    } else {
        sobremesa = nomeItem;
    }

    atualizar();

}

function atualizar() {
    // verificar se os tres itens foram selecionados
    if (prato && bebida && sobremesa) {
        // pegar o botão de finalizar pedido
        const botaoFinalizar = document.querySelector(".base button");
        // adicionar classe que formata o botão de finalizar
        botaoFinalizar.classList.replace("selecionando","finalizado")
        botaoFinalizar.innerHTML = "Fechar pedido"
    }
}