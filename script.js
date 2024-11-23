// Variável para controlar se o jogador acertou todas as respostas
let acertouTodas = true;

function nextScreen(screenId) {
    // Esconde todas as telas
    let screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.style.display = 'none');
    
    // Exibe a tela correspondente
    document.getElementById(screenId).style.display = 'block';
}

function checkAnswer(resposta, nextScreenId) {
    if (resposta === 'errado1') {
        // Resposta errada na pergunta 1
        document.getElementById('mensagem-fim').innerHTML = "Você se perdeu na floresta e nunca mais foi visto. Fim de jogo!";
        nextScreen('screen-fim');
    } else if (resposta === 'errado2') {
        // Resposta errada na pergunta 2
        document.getElementById('mensagem-fim').innerHTML = "Você tentou nadar no rio turbulento e foi levado pela correnteza. Fim de jogo!";
        nextScreen('screen-fim');
    } else if (resposta === 'errado3') {
        // Resposta errada na pergunta 3
        document.getElementById('mensagem-fim').innerHTML = "Você entrou na caverna sem cautela e caiu em uma armadilha mortal. Fim de jogo!";
        nextScreen('screen-fim');
    } else if (resposta === 'errado4') {
        // Resposta errada na pergunta 4
        document.getElementById('mensagem-fim').innerHTML = "Você desafiou o guardião para uma luta e foi derrotado. Fim de jogo!";
        nextScreen('screen-fim');
    } else if (resposta === 'errado5') {
        // Resposta errada na pergunta 5
        document.getElementById('mensagem-fim').innerHTML = "Você ignorou o tesouro e foi atacado por criaturas das sombras. Fim de jogo!";
        nextScreen('screen-fim');
    } else if (resposta === 'certo') {
        // Se a resposta for certa, avança para a próxima pergunta ou vitória
        let currentScreen = document.querySelector('.screen:not([style*="display: none"])');
        if (currentScreen.id === 'pergunta-1') {
            nextScreen('pergunta-2');
        } else if (currentScreen.id === 'pergunta-2') {
            nextScreen('pergunta-3');
        } else if (currentScreen.id === 'pergunta-3') {
            nextScreen('pergunta-4');
        } else if (currentScreen.id === 'pergunta-4') {
            nextScreen('pergunta-5');
        } else if (currentScreen.id === 'pergunta-5') {
            // Se todas as perguntas foram respondidas corretamente
            nextScreen('screen-sucesso');
        }
    }
}

function resetGame() {
    acertouTodas = true;
    nextScreen('screen-1');
}
