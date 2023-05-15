//Passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//Passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

//Passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
 
 body.classList.toggle("modo-escuro");
 
  if (modoEscuroEstaAtivo) {
    //Passo 7 - remover a classe do modo-escuro do body
    // body.classList.remove("modo-escuro");

    //Passo 8 - trocar a imagem do botão de alterar tema para Sol
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    //Passo 4 - adicionar a classe modo-escuro no body
    //body.classList.add("modo-escuro");
    //Passo 5 - trocar a imagem do botão de alterar tema para Lua
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }

  //Objetivo 2 - Agora quando clicar no botão de troca de tema,
  //caso o body já tenha a classe modo-escuro, remover a classe para mudar pro modo claro e mudar a imagem pro Sol

  //Passo 6 - Verificar se o body possui a classe modo-escuro
});
