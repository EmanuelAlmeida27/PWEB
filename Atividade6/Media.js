alert("Aviso!");
let nome;
let notas = [];
nome = prompt("Digite o nome: ");
for (var i=1; i<5; i++) {
    notas[i-1] = parseFloat(prompt("Digite a nota[" + i + "]: "));
}

alert("Nome: " + nome + "\nNota 1: " + notas[0] + "\nNota 2: " + notas[1] + "\nNota 3: " + notas[2] + "\nNota 4: " + notas[3]);

let media = 0;
for (var i=0; i<4; i++) {
    media += notas[i];
}
media /= 4;
alert("Média: " + media.toFixed(2));