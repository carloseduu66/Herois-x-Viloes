let heroi = ["", "", ""];
let viloes = ["", "", ""];
let forcaHeroi = [0, 0, 0]; // Array para a força de cada herói
let forcaViloes = [0, 0, 0]; // Array para a força de cada vilão
const viloesPossiveis = ["Thanos", "Darth Vader", "Coringa", "Loki", "Ultron", "Darkseid", "Bane", "Brainiac", "Magneto", "Flash Reverso"];

alert("Os heróis e vilões vão se enfrentar!");

for (let i = 0; i < 3; i++) {
    let escolhaHeroi = prompt("Digite o nome do herói: " + (i + 1) + ": ");
    heroi[i] = escolhaHeroi;
    forcaHeroi[i] = Math.floor(Math.random() * 10) + 1; // A força de cada herói será individual
    console.log("Força do herói " + heroi[i] + ": " + forcaHeroi[i]);
}

for (let i = 0; i < 3; i++) {
    let vilaoEscolhido;
    let repetido = true;

    // Garantir que o vilão não se repita
    while (repetido) {
        vilaoEscolhido = viloesPossiveis[Math.floor(Math.random() * viloesPossiveis.length)];
        repetido = viloes.includes(vilaoEscolhido);
    }

    viloes[i] = vilaoEscolhido;
    forcaViloes[i] = Math.floor(Math.random() * 10) + 1; // A força de cada vilão será individual
    console.log("Força do vilão " + viloes[i] + ": " + forcaViloes[i]);
}

// Calcular a força total dos heróis e vilões
let totalForcaHeroi = forcaHeroi.reduce((acc, curr) => acc + curr, 0);
let totalForcaViloes = forcaViloes.reduce((acc, curr) => acc + curr, 0);

if (totalForcaHeroi > totalForcaViloes) {
    alert("Os heróis venceram!");
} else if (totalForcaHeroi < totalForcaViloes) {
    alert("Os vilões venceram!");
} else {
    alert("Empate!");
}