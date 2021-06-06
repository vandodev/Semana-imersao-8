const express = require('express');
const app = express();

app.use(express.json());
 
app.get('/usuarios', function (req, res) {
  res.json({
    err:false,
    message:"Listar usuários"
  })
});

// Enviar no insomina
// http://localhost:3000/login
// {
//   "usuario":"Evandro",
//   "senha":"123"
// }

app.post('/login', function (req, res) {
  //console.log(req.body);
  console.log(req.body.usuario);
  res.json({
    err:false,
    message:"Página de login"
  })
});
 
app.listen(3000, function(){
    console.log("Servidor iniciado na porta 3000");
})