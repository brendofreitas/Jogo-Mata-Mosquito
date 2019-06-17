var largura= 0
var altura= 0 
// aqui estamos declarando que largura e altura são 0, para depois acrescentar
var vidas= 1
var tempo= 15
var nivel= window.location.search
nivel = nivel.replace('?','')
var criarMosquitoTempo = 1500

if (nivel === 'normal') {
	criarMosquitoTempo = 1500
} else if (nivel === 'dificil') {
	criarMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
	criarMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(altura, largura)
	// aqui estamos recuperando o valor da altura e largura atual do brownser 
}

ajustaTamanhoPalcoJogo()
	// esse codigo e para remover e ativar o mosquito na tela
	// ele esta dizendo se caso não tiver o mosquito remova.
var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	} else {
	document.getElementById('cronometro').innerHTML = tempo

	}
}, 1000)

function posicaoRandomica() {
	if (document.getElementById('mosquito')) {
	document.getElementById('mosquito').remove()
	// esse codigo e para remover e ativar o mosquito na tela
	// ele esta dizendo se caso não tiver o mosquito remova.
	if (vidas > 3 ) {
		window.location.href = 'fim_de_jogo.html'
	} else {
	document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
	vidas++ 
			}

}
var posicaoX = Math.floor(Math.random() * altura) - 100
var posicaoY = Math.floor(Math.random() * largura) - 600
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY
console.log(posicaoX, posicaoY)
//acessando as propiedades do body.
var mosquito = document.createElement('img')
// document acessamos toda da galeria do DOM e estamos criando
//um img que coloca imagens no corpo 
// aqui estamos dizendo que mosquito e o img do DOM!!! 
mosquito.src = 'imagens/mosca.png'
//selecionamos primeiro o src e dizemos que dentro da img a src vai ser essa imagem
//localizada dentro da pasta imagens, e dizendo que a imagem e mosca.png
mosquito.className = tamanhoAleatorio() + ' ' + LadoAleatorio()
//mosquito1 foi declarado la dentro do arquivo estilo.css e o nome da classe
//img e mosquito1, que contem suas prioridades de tamanhos. altura x largura
mosquito.style.left = posicaoX + 'px'
//estamos selecionando o estylo da imagem e dizendo que o lado esquerdo usara a variavel
//posicaoX que e um valor random e o topo/top usara tbm uma variavel 
//random para a posição da img, e estamos concatenando o px pra usar como pixel
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
	mosquito.onclick = function(){
	this.remove()
				}
// estamos declarando um id para a img, estamos declarando que e mosquito.
// estamos botando mosquito.id porque o documento criado se chama mosquito
document.body.appendChild(mosquito)
console.log(LadoAleatorio())
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
// estamos dizendo que os tamanhos vao ser modificados e declaramos isso 
//dentro do CSS ! 
	switch(classe) {
		case 0:
		return 'mosquito1'

		case 1:
		return 'mosquito2'

		case 2:
		return 'mosquito3'
	}
}

function LadoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
		return 'ladoA'

		case 1:
		return 'ladoB'
	}
}