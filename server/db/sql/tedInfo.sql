-- Tabela: tb_tarefa
SELECT
    tt.id_tarefa "ID",
    tu.id_ted "id_ted",
    tu.ds_ted "TED",
    te.ds_atividade_etapa "Descrição atividade PAI",
    ta.ds_atividade_etapa "Descrição atividade FILHO",
    tt.ds_tarefa "Descrição tarefa",
    tt.id_tarefa_pai "ID tarefa PAI",
    tu1.nm_usuario "Solicitante",
    tu2.nm_usuario "Responsável",
    ts.ds_situacao_tarefa "Situação tarefa",
    tt.nr_regra_negocio "Regra de negócio",
    tt.nr_historia_usuario "História do usuário",
    tt.tx_observacao "Observação",
    tt.dt_inicio_tarefa "Data início tarefa",
    tt.dt_fim_tarefa "Data fim tarefa",
    tt.dt_inclusao "Data inclusão"
FROM "SGD".tb_tarefa tt
INNER JOIN "SGD".tb_atividade_backlog ta
    ON (ta.id_atividade = tt.id_atividade)
INNER JOIN "SGD".tb_sprint tr
    ON (tr.id_sprint = ta.id_sprint)
INNER JOIN "SGD".tb_ted_unb tu
    ON (tu.id_ted = tr.id_ted)
INNER JOIN "SGD".tb_atividade_etapa_eap te
    ON (te.id_atividade_etapa = ta.id_atividade_etapa)
INNER JOIN "SGD".tb_situacao_tarefa ts
    ON (ts.id_situacao_tarefa = tt.id_situacao_tarefa)
INNER JOIN "SGD".tb_usuario tu1
    ON (tu1.id_usuario = tt.id_solicitante)
INNER JOIN "SGD".tb_usuario tu2
    ON (tu2.id_usuario = tt.id_usuario_responsavel)