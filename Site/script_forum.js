// Variáveis para armazenar os elementos do DOM
const topicTitleInput = document.getElementById('topic-title');
const topicContentInput = document.getElementById('topic-content');
const createTopicButton = document.getElementById('create-topic-btn');
const topicsList = document.getElementById('topics');

// Array para armazenar os tópicos
let topics = [];

// Função para criar um novo tópico
function createTopic(title, content) {
    const topic = {
        id: Date.now(), // ID único para cada tópico (neste exemplo, usando a data atual)
        title: title,
        content: content,
        likes: 0, // Contador de likes inicial
        comments: [] // Array para armazenar os comentários
    };
    topics.push(topic);
    renderTopics();
}

// Função para exibir os tópicos na página
function renderTopics() {
    topicsList.innerHTML = '';
    topics.forEach(topic => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${topic.title}</h3>
            <p>${topic.content}</p>
            <button onclick="likeTopic(${topic.id})">Like (${topic.likes})</button>
        `;
        topicsList.appendChild(li);
    });
}

// Função para adicionar um like a um tópico
function likeTopic(topicId) {
    const topic = topics.find(topic => topic.id === topicId);
    if (topic) {
        topic.likes++;
        renderTopics();
    }
}

// Evento de clique no botão para criar um novo tópico
createTopicButton.addEventListener('click', () => {
    const title = topicTitleInput.value.trim();
    const content = topicContentInput.value.trim();
    if (title && content) {
        createTopic(title, content);
        topicTitleInput.value = '';
        topicContentInput.value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Exemplo de tópicos iniciais (pode ser substituído por dados do banco de dados)
createTopic('Tópico 1', 'Conteúdo do Tópico 1');
createTopic('Tópico 2', 'Conteúdo do Tópico 2');
createTopic('Tópico 3', 'Conteúdo do Tópico 3');
