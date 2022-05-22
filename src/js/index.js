/* OBJETIVO1 - quando passar o mouse por cima temos que:

- colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele
- retirar a classe selecionado do personagem que está selecionado

OBJETIVO 2 - quando passar o mouse por cima do personagem, trocar imagem e nome do personagem grande:

- alterar a imagem do jogador 1
- alterar o nome do jogador 1 
*/

const personagens = document.querySelectorAll('.personagem')
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;
        if(idSelecionado === 'Zoro') return;
        
        const personagemSlecionado = document.querySelector('.selecionado')
        personagemSlecionado.classList.remove('selecionado')
        
        personagem.classList.add('selecionado')

        const imagemJogador1 = document.getElementById('Personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado

    })
})

