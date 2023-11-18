const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const PDFDocument = require('pdfkit')
const fs = require('fs')

//Educomp 2023
var educomp_2023_main = require('./routes/main')
var educomp_2023_equipe = require('./routes/equipe')
var educomp_2023_trabalhos = require('./routes/trabalhos')
var educomp_2023_programacao = require('./routes/programacao')

//Engine View
app.engine('handlebars', handlebars({defaultLayout: 'main'}) )

//Sets
app.set('view engine', 'handlebars')

//Uses
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))

//EduComp 2023 - pt-BR
app.get('/', educomp_2023_main.index)
app.get('/sobre', educomp_2023_main.sobre)
app.get('/sobre-sbc', educomp_2023_main.sobre_sbc)
app.get('/datas', educomp_2023_main.datas)
app.get('/inscricoes', educomp_2023_main.inscricoes)
app.get('/trabalhos/topicos-de-interesse', educomp_2023_trabalhos.topicos)
app.get('/trabalhos/chamada', educomp_2023_trabalhos.chamado)
app.get('/trabalhos/minicursos', educomp_2023_trabalhos.minicursos)
app.get('/trabalhos/aceitos', educomp_2023_trabalhos.aceitos)
app.get('/equipe/comissao-organizadora', educomp_2023_equipe.comissao_organizadora)
app.get('/equipe/comite-programa', educomp_2023_equipe.comite_programa)
app.get('/programacao/programacao-minicursos', educomp_2023_programacao.programacao_minicursos)
app.get('/programacao/programacao-oficinas', educomp_2023_programacao.programacao_oficinas)
app.get('/programacao/programacao-palestras', educomp_2023_programacao.programacao_palestras)
app.get('/programacao/programacao-sessoes-tecnicas', educomp_2023_programacao.programacao_sessoes_tecnicas)

//Worker do servidor
var porta = process.env.PORT || 3000
app.listen(porta, () => {
    console.log('App rodando na porta: ' + porta) 
})
