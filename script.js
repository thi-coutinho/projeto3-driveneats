let prato;
let bebida;
let sobremesa;
let precoPrato;
let precoBebida;
let precoSobremesa;
let mensagem;

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
    let precoItemStr = botao.querySelector(".preco").innerHTML
    let preco = Number(precoItemStr.slice(3).replace(",","."))
    // alterar a opção selecionado na variável prato, bebida ou sobremesa
    if (categoria == "pratos") {
        prato = nomeItem.trim();
        precoPrato = preco; 
    } else if (categoria == "bebidas") {
        bebida = nomeItem.trim();
        precoBebida = preco
    } else {
        sobremesa = nomeItem.trim();
        precoSobremesa = preco
    }

    // atualizar variáveis
    atualizar();

}

function atualizar() {
    //atualizar mensagem 
    mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${(precoSobremesa+precoBebida+precoPrato).toFixed(2)}`

    // verificar se os tres itens foram selecionados
    if (prato && bebida && sobremesa) {
        // pegar o botão de finalizar pedido
        const botaoFinalizar = document.querySelector(".base button");
        // adicionar classe que formata o botão de finalizar
        botaoFinalizar.classList.replace("selecionando","finalizado")
        // mudar o texto do botão
        botaoFinalizar.innerHTML = "Fechar pedido"
        // mudar o link do botão
        botaoFinalizar.parentNode.href = `https://wa.me/5511968208712?text=${encodeURIComponent(mensagem)}`
    }
    

}

// function finalizar(){
//     if(prato && bebida && sobremesa){


//     }
// }

/* Olá, gostaria de fazer o pedido:
- Prato: Frango Yin Yang
- Bebida: Coquinha Gelada
- Sobremesa: Pudim
Total: R$ 27.70

*/
