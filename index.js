const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const PDFDocument = require('pdfkit')
//const creds = require('./educomp-novo-certificado.json')
const fs = require('fs')

//Routes
var educomp_2021_en_us_main = require('./routes/simposio/2021/en-US/main'); //Routes en-US

//Educomp 2023
var educomp_2023_main = require('./routes/simposio/2023/pt-BR/main');
var educomp_2023_equipe = require('./routes/simposio/2023/pt-BR/equipe');
var educomp_2023_trabalhos = require('./routes/simposio/2023/pt-BR/trabalhos');
var educomp_2023_criterios = require('./routes/simposio/2023/pt-BR/criterios');
var educomp_2023_programacao = require('./routes/simposio/2023/pt-BR/programacao');

//Engine View
app.engine('handlebars', handlebars({defaultLayout: 'main'}) )

//Sets
app.set('view engine', 'handlebars')

//Uses
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))

//EduComp 2023 - pt-BR
app.get('/', educomp_2023_main.index)
app.get('/simposio/2023/sobre', educomp_2023_main.sobre)
app.get('/simposio/2023/sobre-sbc', educomp_2023_main.sobre_sbc)
app.get('/simposio/2023/datas', educomp_2023_main.datas)
app.get('/simposio/2023/programacao/esquenta/1', educomp_2023_programacao.esquenta_1)

/*app.get('/simposio/2023/programacao', educomp_2023_programacao.programacao)
app.get('/simposio/2023/programacao/esquenta/1', educomp_2023_programacao.esquenta_1)
app.get('/simposio/2023/programacao/esquenta/2', educomp_2023_programacao.esquenta_2)*/

app.get('/simposio/2023/forlic', educomp_2023_main.forlic)
app.get('/simposio/2023/inscricoes', educomp_2023_main.inscricoes)

app.get('/simposio/2023/trabalhos/topicos-de-interesse', educomp_2023_trabalhos.topicos)
app.get('/simposio/2023/trabalhos/chamada', educomp_2023_trabalhos.chamado)
app.get('/simposio/2023/trabalhos/minicursos', educomp_2023_trabalhos.minicursos)
app.get('/simposio/2023/trabalhos/lab-ideias', educomp_2023_trabalhos.lab_ideias)
app.get('/simposio/2023/trabalhos/wtd', educomp_2023_trabalhos.wtd)
app.get('/simposio/2023/trabalhos/paineis', educomp_2023_trabalhos.paineis)
app.get('/simposio/2023/trabalhos/aceitos', educomp_2023_trabalhos.aceitos)

app.get('/simposio/2023/trabalhos/criterios/trilha-1', educomp_2023_criterios.artigos)
app.get('/simposio/2023/trabalhos/criterios/trilha-2', educomp_2023_criterios.trilha2)
app.get('/simposio/2023/trabalhos/criterios/trilha-3', educomp_2023_criterios.trilha3)
app.get('/simposio/2023/trabalhos/criterios/trilha-4', educomp_2023_criterios.trilha4)
app.get('/simposio/2023/trabalhos/criterios/trilha-5', educomp_2023_criterios.ensaios)
/*app.get('/simposio/2023/trabalhos/criterios/lab-ideias', educomp_2022_criterios.labideias)*/

app.get('/simposio/2023/equipe/comissao-organizadora', educomp_2023_equipe.comissao_organizadora)
app.get('/simposio/2023/equipe/comite-programa', educomp_2023_equipe.comite_programa)


//Worker do servidor
var porta = process.env.PORT || 3000
app.listen(porta, () => {
    console.log('App rodando na porta: ' + porta) 
})
