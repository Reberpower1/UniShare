// Função para controlar a visibilidade da barra de botões
function toggleNavHeader() {
  var navHeader = document.querySelector('.nav-header');
  if (window.scrollY > 0) {
    // Se o usuário rolar para baixo, ocultar a barra de botões
    navHeader.classList.add('hidden');
  } else {
    // Se o usuário estiver no topo da página, mostrar a barra de botões
    navHeader.classList.remove('hidden');
  }
}

// Adiciona um evento de rolagem para chamar a função toggleNavHeader()
window.addEventListener('scroll', toggleNavHeader);

// Definindo a função para lidar com o dropdown

function setupDropdown() {
  var dropdownBtn = document.querySelector('.dropdown .dropbtn');
  var dropdownContent = document.querySelector('.dropdown-content');

  dropdownBtn.addEventListener('click', function() {
    dropdownContent.classList.toggle('active'); // Alternar a classe 'active' para mostrar/ocultar o dropdown
  });
}

// Adicionando o evento DOMContentLoaded para chamar a função setupDropdown() após o carregamento do documento
document.addEventListener('DOMContentLoaded', function() {
  setupDropdown(); // Chama a função setupDropdown() definida acima
});

// Função para lidar com a seleção de arquivo de foto de perfil
function handleFileSelect(event) {
  const file = event.target.files[0]; // Obter o arquivo selecionado

  // Verificar se um arquivo foi selecionado
  if (file) {
    const reader = new FileReader(); // Objeto para ler o arquivo

    // Função de retorno de chamada quando a leitura do arquivo for concluída
    reader.onload = function(e) {
      const image = document.getElementById('profile-picture'); // Elemento da imagem
      image.src = e.target.result; // Atribuir o caminho da imagem ao elemento da imagem
    };

    // Ler o arquivo como URL de dados
    reader.readAsDataURL(file);
  }
}

// Adicionando o evento DOMContentLoaded para chamar a função setupDropdown() após o carregamento do documento
document.addEventListener('DOMContentLoaded', function() {
  setupDropdown(); // Chama a função setupDropdown() definida acima
});

document.addEventListener('DOMContentLoaded', function() {
  const expandBtn = document.querySelector('.expand-btn');
  const optionsContainer = document.querySelector('.options-container');

  expandBtn.addEventListener('click', function() {
    optionsContainer.style.display = optionsContainer.style.display === 'block' ? 'none' : 'block';
  });

  // Fechar o dropdown quando o usuário clicar fora dele
  document.addEventListener('click', function(event) {
    if (!expandBtn.contains(event.target) && !optionsContainer.contains(event.target)) {
      optionsContainer.style.display = 'none';
    }
  });
});

// Adiciona um evento de clique para cada opção da lista de universidades
document.querySelectorAll('.options-list li').forEach(option => {
  option.addEventListener('click', function() {
    const selectedUniversity = option.textContent; // Obtém o texto da universidade selecionada
    const universityInput = document.querySelector('.expand-btn'); // Obtém o botão "Insira a sua Universidade"

    // Atualiza o texto do botão com o nome da universidade selecionada
    universityInput.textContent = selectedUniversity;

    // Esconde a lista de opções
    document.querySelector('.options-container').style.display = 'none';
  });
});

// Função para exibir o pop-up
// Função para exibir o pop-up
function showPopup() {
  var popup = document.getElementById('popup');
  popup.classList.remove('hidden');
  
  // Definir um tempo para esconder o pop-up após 1 segundo
  setTimeout(function() {
    popup.classList.add('hidden');
  }, 2000);
}

// Função para salvar e redirecionar
function saveAndRedirect() {
  // Exibir o pop-up
  showPopup();

  // Redirecionar após 2.5 segundos
  setTimeout(function(){
      window.location.href = "indexB.html";
  }, 2500); // 2500 milissegundos = 2.5 segundos
}

// Função para chamar a função showPopup() e saveAndRedirect() quando o botão "Salvar" for clicado
document.querySelector('.save-btn').addEventListener('click', function() {
  // Exibir o pop-up e redirecionar
  showPopup();
  saveAndRedirect();
});