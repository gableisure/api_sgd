const database = require('../db/database');

exports.getTarefasObservador = () => {
    return database.query(`
        SELECT
            tt.id_tarefa "id_tarefa",
            tu.id_usuario "id_usuario_observador",
            tu.nm_usuario "nm_usuario"
        FROM "SGD".tb_tarefa_observador tt
        INNER JOIN "SGD".tb_usuario tu
            ON (tu.id_usuario = tt.id_usuario_observador)`
    );
}

exports.getTarefaObservadorById = (id) => {
    return database.query(`
        SELECT
            tt.id_tarefa "id_tarefa",
            tu.id_usuario "id_usuario_observador",
            tu.nm_usuario "nm_usuario"
        FROM "SGD".tb_tarefa_observador tt
        INNER JOIN "SGD".tb_usuario tu
            ON (tu.id_usuario = tt.id_usuario_observador)
        WHERE tt.id_tarefa = ${id}`
    );
}

