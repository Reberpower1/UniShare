function handleFileSelect(event) {
    const file = event.target.files[0]; // Obter o arquivo selecionado
  
    // Verificar se um arquivo foi selecionado
    if (file) {
      const reader = new FileReader(); // Objeto para ler o arquivo
  
      // Função de retorno de chamada quando a leitura do arquivo for concluída
      reader.onload = function(e) {
        const image = document.getElementById('profile-image'); // Elemento da imagem
        image.src = e.target.result; // Atribuir o caminho da imagem ao elemento da imagem
      };
  
      // Ler o arquivo como URL de dados
      reader.readAsDataURL(file);
    }
  }
  