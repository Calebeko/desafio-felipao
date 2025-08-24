// estrutura de repetição com for e estrutura condicional com if, else if e else
// estou colocando o laço de repetição para rodar 3 vezes, não pensei numa forma que seria útil a utilização do for..
for (let i = 0; i < 3; i++) {
    let nomeHeroi = "Flash";
    let experienciaHeroi = 9000;

    if (experienciaHeroi <= 1000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Ferro"); 
    } else if (experienciaHeroi >= 1001 && experienciaHeroi <= 2000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Bronze");
    } else if (experienciaHeroi >= 2001 && experienciaHeroi <= 5000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Prata");
    } else if (experienciaHeroi >= 5001 && experienciaHeroi <= 7000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Ouro");
    } else if (experienciaHeroi >= 7001 && experienciaHeroi <= 8000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Platina");
    } else if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Ascendente");
    } else if (experienciaHeroi >= 9001 && experienciaHeroi <= 10000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Imortal");
    } else {
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Radiante");
    }
}