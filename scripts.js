const botao1 = document.getElementById('btn1');
const botao2 = document.getElementById('btn2');
const botaoZera = document.getElementById('zerar');
// const botaoZera = document.getElementsByClassName('zerar');
const PG1 = document.getElementById('pgp1');
const PG2 = document.getElementById('pgp2');

const pontoP1 = document.getElementById('pp1');
const pontoP2 = document.getElementById('pp2');


//Marca os pontos parciais
function MarcaPonto(ponto) {
       var valor = parseInt(ponto.textContent) + 1; 
       ponto.innerHTML = valor;
    
    //Teste para zera o placar parcial.
    if ((parseInt(pontoP1.textContent) > 0) && (parseInt(pontoP2.textContent) > 0)) {
        zeraPlacarParcial();
    }
    
    //Teste para setar o placar geral
    if (parseInt(pontoP1.textContent) == 3) {
        var valorGeral = parseInt(PG1.textContent) + 1;
        PG1.innerHTML = valorGeral;
        
        zeraPlacarParcial();
        
    } else 
    if (parseInt(pontoP2.textContent) == 3) {
        var valorGeral = parseInt(PG2.textContent) + 1;
        PG2.innerHTML = valorGeral;
        
        zeraPlacarParcial();
    }     
//   console.log(valor);
}


botao1.addEventListener("click", function(){MarcaPonto(pontoP1)});
botao2.addEventListener("click", function(){MarcaPonto(pontoP2)});


// Zera todo o placar
// Alterna entre esconder e mostrar o menu
function menu() {
    document.getElementById('lista').classList.toggle('show');
}

// Fecha o menu se o usuário clicar fora dele.
window.onclick = function(event) {
    if (!event.target.matches('.zerar')) {
        var itens = document.getElementsByClassName('lista');
        
        for (i = 0; i < itens.length; i++) {
            var item = itens[i];
            if (item.classList.contains('show')) {
                item.classList.remove('show');
            }
        }
    }
}


function zeraPlacarGeral() {
    PG1.textContent = 0;
    PG2.textContent = 0;
}

function zeraPlacarParcial() {
    pontoP1.textContent = 0;
    pontoP2.textContent = 0;
}

botaoZera.addEventListener("click", menu);
