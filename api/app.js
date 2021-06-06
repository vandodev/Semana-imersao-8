const express = require('express');
const app = express();

app.use(express.json());
 
app.get('/usuarios', function (req, res) {
  res.json({
    erro:false,
    messagem:"Listar usuários"
  })
});


app.post('/login', function (req, res) {
  console.log(req.body);
  if(req.body.usuario === 'Evandro' && req.body.senha === '123'){
    res.json({
      erro:false,
      messagem:"Login válido",
      dados:req.body
    });
  }
  res.json({
    erro:true,
    messagem:"Login ou senha incorreto",
  });
});
 
app.listen(3000, function(){
    console.log("Servidor iniciado na porta 3000");
})