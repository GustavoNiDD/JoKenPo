p1 = 0;
p2 = 0;
total = 0;
empates = 0;
play1 = [];
play2 = [];

// deixar separado para futuras melhorias e implementação de elementos
addEventListener("keypress", function (event) {
    event.preventDefault();
    player1 = event.key;
    if (player1 == "a" || player1 == "s" || player1 == "d" || player1 == "A" || player1 == "S" || player1 == "D") {
        if (play1.length < 1) {
            if (player1 == "a" || player1 == "A") {
                play1.push("pedra");
            } else if (player1 == "s" || player1 == "S") {
                play1.push("papel");
            } else if (player1 == "d" || player1 == "D") {
                play1.push("tesoura");
            }
        }
    }
    verificar()
});

// deixar separado para futuras melhorias e implementação de elementos
addEventListener("keypress", function (event) {
    event.preventDefault();
    player2 = event.key;
    if (player2 == "j" || player2 == "k" || player2 == "l" || player2 == "J" || player2 == "K" || player2 == "L") {
        if (play2.length < 1) {
            if (player2 == "j" || player2 == "J") {
                play2.push("pedra");
            } else if (player2 == "k" || player2 == "K") {
                play2.push("papel");
            } else if (player2 == "l" || player2 == "L") {
                play2.push("tesoura");
            }
        }
    }
    verificar()
});
// deixar separado param melhor vizualização RESETAR COM SPACE
addEventListener("keypress", function (event) {
    event.preventDefault();
    if (event.code == "Space") {
        reiniciar();
    }
});


function inserirImagens() {
    document.getElementById("imagemP1").style.transition = "all 0.5s";
    document.getElementById("imagemP2").style.transition = "all 0.5s";
    document.getElementById("imagemP1").style.transform = `rotate(720deg)`;
    document.getElementById("imagemP2").style.transform = `rotate(720deg)`;
    document.getElementById("imagemP1").style.backgroundImage = `url(/img/${play1[0]}.png)`;
    document.getElementById("imagemP2").style.backgroundImage = `url(/img/${play2[0]}.png)`;
}

flagVerificar = 0;
function verificar() {

    if (play1.length == 1 && play2.length == 1 && flagVerificar == 0) {
        if (play1[0] == play2[0]) {
            document.getElementById("vencedor").innerHTML = "EMPATE";
            empates += 1;
        } else if (play1[0] == "pedra" && play2[0] == "tesoura") {
            document.getElementById("vencedor").innerHTML = "PLAYER 1";
            p1++;
        } else if (play1[0] == "papel" && play2[0] == "pedra") {
            document.getElementById("vencedor").innerHTML = "PLAYER 1";
            p1++;
        } else if (play1[0] == "tesoura" && play2[0] == "papel") {
            document.getElementById("vencedor").innerHTML = "PLAYER 1";
            p1++;
        } else {
            document.getElementById("vencedor").innerHTML = "PLAYER 2";
            p2++;
        }

        total += 1;
        flagVerificar = 1;
        placar();
        inserirImagens();

    }

}

function placar() {
    document.getElementById("nPartidas").innerHTML = "Partidas: " + total;
    document.getElementById("nEmpates").innerHTML = "Empates: " + empates;
    document.getElementById("vitoriaPlay1").innerHTML = "Player 1 - Vitórias: " + p1;
    document.getElementById("vitoriaPlay2").innerHTML = "Player 2 - Vitórias: " + p2;
}

function reiniciar() {
    placar();
    document.getElementById("imagemP1").style.backgroundImage = `none`;
    document.getElementById("imagemP2").style.backgroundImage = `none`;
    document.getElementById("imagemP1").style.transform = `none`;
    document.getElementById("imagemP2").style.transform = `none`;
    document.getElementById("vencedor").innerHTML = "";

    play1.pop();
    play2.pop();
    flagVerificar = 0;
}