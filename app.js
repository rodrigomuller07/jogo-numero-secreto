let numeroSecreto = 25;//numeroAleatorio();
let tentativas = 1;
let listaNumeroSorteado = [];

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    exibirTextoNaTela('h1','Jogo do numero secreto!');
    exibirTextoNaTela('p','Digite um numero entre 1 e 100');
}

exibirTextoNaTela('h1','Jogo do numero secreto!');
exibirTextoNaTela('p','Digite um numero entre 1 e 100');

//verfica o chute que a pessoa digitou (numero no caso)
function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 
        'tentativa';
        let mensagemTentativas = `Você acertou o numero com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
          if (chute > numeroSecreto) {
            exibirTextoNaTela('p','O numero secreto é menor ');
            }   else{
                  exibirTextoNaTela('p','numero secreto é maior');
            }

            tentativas++;
            limparCampoReiniciarJogo();
            
           
    }
    
}

function numeroAleatorio(){
    let numeroEscolhido =  parseInt(Math.random() * 4 + 1);
    if (listaNumeroSorteado.includes(numeroEscolhido)){
        return numeroAleatorio();
    }else {
        listaNumeroSorteado.push(numeroEscolhido);
        console.log(listaNumeroSorteado);
        return numeroEscolhido;
    }
    
}

function limparCampoReiniciarJogo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reinicarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampoReiniciarJogo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

