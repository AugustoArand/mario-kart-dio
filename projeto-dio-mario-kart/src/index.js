const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // FLOOR ARREDONDA INTEIRO
}

async function getRandomBlock (){
    let random = Math.random()
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
    }
    return result
}

async function logRollResult(characterName, block, diceResult, att) {

    console.log(`${characterName} rolou um dado de ${block} ${diceResult} + ${att} = ${diceResult + att}`)
    

}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++){
        console.log(`Rodada ${round}`)
        // SORTEAR BLOCO
        let block = await getRandomBlock()
        console.log(`Bloco ${block}`)

        //ROLAR OS DADOS
        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        //TESTE DE HABILIDADE
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        //TIPO DO AVANÇO
        if (block === "RETA"){
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

            await logRollResult(
                character1.NOME,
                "velocidade",
                diceResult1,
                character1.VELOCIDADE
            );

            await logRollResult(
                character2.NOME,
                "velocidade",
                diceResult2,
                character2.VELOCIDADE
            );

        }

        if (block === "CURVA"){
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            await logRollResult(
                character1.NOME,
                "manobrabilidade",
                diceResult1,
                character1.MANOBRABILIDADE
            );

            await logRollResult(
                character2.NOME,
                "manobrabilidade",
                diceResult2,
                character2.MANOBRABILIDADE
            );

        }

        if (block === "CONFRONTO"){
            totalTestSkill1 = diceResult1 + character1.PODER;
            totalTestSkill2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME}`)

            await logRollResult(
                character1.NOME,
                "poder",
                diceResult1,
                character1.PODER
            );

            await logRollResult(
                character2.NOME,
                "poder",
                diceResult2,
                character2.PODER
            );

            if(totalTestSkill1 > totalTestSkill2){
                if(character2.PONTOS > 0) {
                    character2.PONTOS--;
                }

            if(totalTestSkill2 > totalTestSkill1){
                if(character1.PONTOS > 0) {
                    character1.PONTOS--;    
                }
            }

            if(totalTestSkill1 === totalTestSkill2){
                console.log("Confronto empatado, sem perda de ponto")
            }

        }
        //PLAYER VENCEDOR
        if(totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.NOME} marcou 1 ponto`);
            character1.PONTOS++;
        }

        else if (totalTestSkill2 > totalTestSkill1){
            console.log(`${character2.NOME} marcou 1 poonto`);
            character2.PONTOS++;
        }
         console.log("___________________________________")
}

}
}

async function declareWinner(character1, character2){
    console.log("Resultado final:")
    console.log(`${character1.NOME} : ${character1.PONTOS} ponto(s)`)
    console.log(`${character2.NOME} : ${character2.PONTOS} ponto(s)`)

    if (character1.PONTOS > character2.PONTOS) {
        console.log(`\n${character1.NOME} venceu a corrida! Parabens!`)
    } else if(character2.PONTOS > character1.PONTOS) {
        console.log(`\n${character2.NOME} venceu a corrida! Parabens!`)
    } else {
        console.log("A corrida deu empate!")

    }
}

(async function main(){
    console.log(`Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`)

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
}) ()