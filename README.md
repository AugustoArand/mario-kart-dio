# mario-kart-dio
Projeto desenvolvido em Node.js, trabalhando conceitos de assincronia de funções e lógica back end.

🕹️ Regras & mecânicas:
Jogadores:

O Computador deve receber dois personagens para disputar a corrida em um objeto cada
Pistas:

Os personagens irão correr em uma pista aleatória de 5 rodadas
A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto
Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto
Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto
Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto
Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)
Condição de vitória:

Ao final, vence quem acumulou mais pontos
