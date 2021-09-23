const express = require('express');
const app = express();

alert("Uepa! 😄 Bem-vindo ao meu portfólio, saiba mais sobre mim aqui.")

function EnglishCategory() {
  
  app.get('/', (req, res) => {
    res.render('englishPage')
  })
  
}
