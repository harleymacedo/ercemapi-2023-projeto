exports.comissao_organizadora = function (req, res) { 
    res.render('simposio/2023/pt-BR/equipe/comissao-organizadora', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            equipe: true,
            titulo: 'Comissão Organizadora',
            header: {
                endereco: 'comissao-organizadora',
                descricao: 'Faixa de título da comissão organizadora.'
            }
        }
    ) 
};

exports.comite_programa = function (req, res) { 
    res.render('simposio/2023/pt-BR/equipe/comite-programa', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            equipe: true,
            titulo: 'Comitê de Programa',
            header: {
                endereco: 'comite-programa',
                descricao: 'Faixa de título do comitê de programa.'
            }
        }
    ) 
};

exports.comite_cientifico = function (req, res) { 
    res.render('simposio/2023/pt-BR/equipe/comite-cientifico', 
        {
            layout: 'simposio/2023/pt-BR/layout', 
            equipe: true,
            titulo: 'Comitê Científico',
            header: {
                endereco: 'comite-cientifico',
                descricao: 'Faixa de título do comitê científico.'
            }
        }
    ) 
};