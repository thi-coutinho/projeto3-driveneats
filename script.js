let prato;
let bebida;
let sobremesa;
let precoPrato;
let precoBebida;
let precoSobremesa;
let mensagem;
let nome;
let endereco;

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
    
    // verificar se os tres itens foram selecionados
    if (prato && bebida && sobremesa) {
        // pegar o botão de finalizar pedido
        const botaoFinalizar = document.querySelector(".base button");
        // adicionar classe que formata o botão de finalizar
        botaoFinalizar.classList.replace("selecionando","finalizado")
        // mudar o texto do botão
        botaoFinalizar.innerHTML = "Fechar pedido"
        
        // adicionar onclick para pedir nome e endereço
        botaoFinalizar.onclick = pedeEndereco;
    }
    

}
function precoStr(preco) {
    // função pra facilitar formatar o preço
    return preco.toFixed(2).toString().replace(".",",")

}
function pedeEndereco() {
    nome = prompt("Qual o seu nome? ");
    endereco = prompt("Qual o seu endereço? ");
    trocarTela();
    //atualizar mensagem e texto da revisão
    let total = precoStr(precoSobremesa+precoBebida+precoPrato);
    mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${total}\n\nNome: ${nome}\nEndereço: ${endereco}`;
    let pedido = document.querySelector(".itens-revisao h4")
    pedido.innerHTML = `${prato}<br>${bebida}<br>${sobremesa}`
    let precos = document.querySelector(".preco-revisao h4")
    precos.innerHTML = `${precoStr(precoPrato)}<br>${precoStr(precoBebida)}<br>${precoStr(precoSobremesa)}`
    let totalRevisar = document.querySelector(".preco-revisao h3")
    totalRevisar.innerHTML = `R$ ${total}`
}
function whatsApp(){
    let link = `https://wa.me/5511968208712?text=${encodeURIComponent(mensagem)}`;
    window.open(link);
}

function trocarTela(){
    // função pra trocar entre a tela inicial e a de revisar
    const botao = document.querySelector(".revisarPedido")
    botao.classList.toggle("escondido")
}

