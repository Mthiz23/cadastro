// Função para cadastrar uma música
function cadastrarMusica(titulo, artista, genero, duracao, link) {
    const musica = {
        titulo,
        artista,
        genero,
        duracao,
        link
    };

    // Verifica se já existe uma lista de músicas no localStorage
    const musicasExistentes = JSON.parse(localStorage.getItem('musicas')) || [];
    musicasExistentes.push(musica);
    
    // Armazena a nova lista de músicas no localStorage
    localStorage.setItem('musicas', JSON.stringify(musicasExistentes));
    
    // Atualiza a exibição das músicas
    exibirMusicas();
}

// Função para exibir as músicas cadastradas
function exibirMusicas() {
    const musicas = JSON.parse(localStorage.getItem('musicas')) || [];
    const musicList = document.getElementById('musicList');
    musicList.innerHTML = ''; // Limpa a lista antes de exibir

    musicas.forEach(musica => {
        const li = document.createElement('li');
        li.textContent = `${musica.titulo} - ${musica.artista} (${musica.genero}, ${musica.duracao} min)`;
        musicList.appendChild(li);
    });
}

// Evento para cadastrar música ao submeter o formulário
document.getElementById('musicForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const titulo = document.getElementById('title').value;
    const artista = document.getElementById('artist').value;
    const genero = document.getElementById('genre').value;
    const duracao = document.getElementById('duration').value;
    const link = document.getElementById('link').value;

    cadastrarMusica(titulo, artista, genero, duracao, link);

    // Limpa o formulário após o cadastro
    this.reset();
});

// Chama a função para exibir músicas ao carregar a página
window.onload = exibirMusicas;
