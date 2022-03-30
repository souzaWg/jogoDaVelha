const casas = document.getElementsByTagName('input');
const b_reiniciar = document.getElementById('reiniciar');
const label_jogador = document.getElementById('jogador');

var jogador = '_';
var vencedor = '_';

var sortearJogador = function(){
	if(Math.floor(Math.random() * 2)==0 ){
		jogador = 'O';
		label_jogador.innerText="O";
		label_jogador.style.color='#F00';
	}else{
		jogador = 'X';
		label_jogador.innerText="X";
		label_jogador.style.color='#00F';
	}
}

sortearJogador();

for(var i=0; i<9; i++){
	casas[i].addEventListener('click', (event) => {
		if((event.target.value=='_') && (vencedor=='_')) {
			event.target.value=jogador;
			event.target.style.color= 'black';

			trocarJogador();

			vencedor = vitoria();

			if(vencedor!='_') {
				label_jogador.innerText=`${vencedor} venceu!`;
			}
		}
	});
}

b_reiniciar.addEventListener('click', (event) => {
	for(var i=0; i<9; i++){
		casas[i].value='_';
		casas[i].style.color='white';
		casas[i].style.backgroundColor=	'white';
	}

	vencedor = '_';

	sortearJogador();
});

var trocarJogador = function(){
	if(jogador=='X'){
		jogador='O';
		label_jogador.innerText='O';
		label_jogador.style.color='#F00';
	}else{
		jogador='X';
		label_jogador.innerText='X';
		label_jogador.style.color='#00F';
	}
}

  var vitoria = function() {
        if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='_' ) {
            casas[0].style.backgroundColor='#0F0';
            casas[1].style.backgroundColor='#0F0';
            casas[2].style.backgroundColor='#0F0';

            return casas[0].value;

        }else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='_' ) {
            casas[3].style.backgroundColor='#0F0';
            casas[4].style.backgroundColor='#0F0';
            casas[5].style.backgroundColor='#0F0';

            return casas[3].value;

        }else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_' ) {
            casas[6].style.backgroundColor='#0F0';
            casas[7].style.backgroundColor='#0F0';
            casas[8].style.backgroundColor='#0F0';

            return casas[6].value;

        }else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_' ) {
            casas[0].style.backgroundColor='#0F0';
            casas[3].style.backgroundColor='#0F0';
            casas[6].style.backgroundColor='#0F0';

            return casas[0].value;

        }else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_' ) {
            casas[1].style.backgroundColor='#0F0';
            casas[4].style.backgroundColor='#0F0';
            casas[7].style.backgroundColor='#0F0';

            return casas[1].value;

        }else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_' ) {
            casas[2].style.backgroundColor='#0F0';
            casas[5].style.backgroundColor='#0F0';
            casas[8].style.backgroundColor='#0F0';

            return casas[2].value;
        }else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_' ) {
            casas[0].style.backgroundColor='#0F0';
            casas[4].style.backgroundColor='#0F0';
            casas[8].style.backgroundColor='#0F0';

            return casas[0].value;

        }else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_' ) {
            casas[2].style.backgroundColor='#0F0';
            casas[4].style.backgroundColor='#0F0';
            casas[6].style.backgroundColor='#0F0';

            return casas[2].value;
        }

        return '_';
    }