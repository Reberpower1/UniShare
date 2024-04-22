const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const multer  = require('multer');

const upload = multer({ dest: 'uploads/' });
const app = express();
const files_path = "../Uni_Share/Site"
const port = 3000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(files_path));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', function (req, res) {
  res.sendFile(files_path + '/index.html');
});

// Array com os Users
let users = [];

app.post('/registo', upload.single('profilepic'), function (req, res) {
  if (!req.file) {
    return res.status(400).send('Nenhum arquivo foi enviado');
  }
  
  // Funcionalidade para verificar se o user já existe
  const existingUser = users.find(user => user.user === req.body.user);
  if (existingUser) {
    return res.status(400).send('Username not available!');
  }

  console.log(req.file);
  // Criar um novo user
  const user = {
    user: req.body.user,
    password: req.body.password,
    profilePic: req.file.path
  };

  //Adicionar ao Array
  users.push(user);
  //Mostrar users e redirecionar
  console.log(users);
  res.sendFile(files_path + 'index.html');
});

//Sessão do código para a parte de Entrar

app.use(session({
  secret: 'superseguro',//String usada para assinar o id da sessão
  resave: false,
  saveUninitialized: true
}));

app.post('/entrar', function (req, res) {
  // Encontrar o usuário que corresponde ao nome de usuário fornecido
  const user = users.find(user => user.user === req.body.user);

  // Se não encontramos o usuário ou a senha está errada, enviar uma mensagem de erro
  if (!user || user.password !== req.body.password) {
    return res.status(401).send('User ou senha incorretos');
  }
  
  req.session.user = user;
  console.log(user.profilePic); // Imprimir o caminho para a profilePic
  //Se as credenciais são válidas, é enviado sucesso!
  res.redirect('/indexB.html');
});

// Rota para obter os dados do usuário
app.get('/user', function (req, res) {
  // Verifique se há um usuário na sessão
  const user = req.session.user;

  if (user) {
    // Se houver um usuário na sessão, envie os dados do usuário de volta
    res.json(user);
  } else {
    // Se não houver um usuário na sessão, envie uma resposta indicando que não há usuário autenticado
    res.status(401).send('Usuário não autenticado');
  }
});
//Port 3000 para o localhost

app.listen(port, () => {
  console.log('Server started on port 3000');
});