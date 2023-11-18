
exports.programacao_minicursos = function (req, res) { 
    res.render('simposio/2023/pt-BR/programacao/programacao-minicursos', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            programacao: true,
            titulo: 'Programação - Minicursos',
            header: {
                endereco: 'programacao-minicursos',
                descricao: 'Programação - Minicursos.'
            }
        }
    ) 
};

exports.programacao_oficinas = function (req, res) { 
    res.render('simposio/2023/pt-BR/programacao/programacao-oficinas', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            programacao: true,
            titulo: 'Programação - Oficinas',
            header: {
                endereco: 'programacao-minicursos',
                descricao: 'Programação - Oficinas.'
            }
        }
    ) 
};

exports.programacao_palestras = function (req, res) { 
    res.render('simposio/2023/pt-BR/programacao/programacao-palestras', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            programacao: true,
            titulo: 'Programação - Palestras',
            header: {
                endereco: 'programacao-minicursos',
                descricao: 'Programação - Palestras.'
            }
        }
    ) 
};

exports.programacao_sessoes_tecnicas = function (req, res) { 
    res.render('simposio/2023/pt-BR/programacao/programacao-sessoes-tecnicas', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            programacao: true,
            titulo: 'Programação - Sessões Técnicas',
            header: {
                endereco: 'programacao-minicursos',
                descricao: 'Programação - Sessões Técnicas.'
            }
        }
    ) 
};