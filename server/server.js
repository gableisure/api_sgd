const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const swaggerJsDoc = require('swagger-jsdoc');
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

const motivoBloqueioRoute = require('./route/motivoBloqueioRoute');
const perfilUsuarioRoute = require('./route/perfilUsuarioRoute');
const prioridadeAtividadeRoute = require('./route/prioridadeAtividadeRoute');
const situacaoAtividadeRoute = require('./route/situacaoAtividadeRoute');
const etapaEapRoute = require('./route/etapaEapRoute');
const tedRoute = require('./route/tedRoute');
const usuarioRoute = require('./route/usuarioRoute');
const situacaoTarefaRoute = require('./route/situacaoTarefaRoute');
const tarefaRoute = require('./route/tarefaRoute');
const sprintRoute = require('./route/sprintRoute');
const atividadeEtapaEapRoute = require('./route/atividadeEtapaEapRoute');
const atividadeBacklogRoute = require('./route/atividadeBacklogRoute');
const tarefaObservadorRoute = require('./route/tarefaObservadorRoute');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', motivoBloqueioRoute);
app.use('/', perfilUsuarioRoute);
app.use('/', prioridadeAtividadeRoute);
app.use('/', situacaoAtividadeRoute);
app.use('/', etapaEapRoute);
app.use('/', tedRoute);
app.use('/', usuarioRoute);
app.use('/', situacaoTarefaRoute);
app.use('/', tarefaRoute);
app.use('/', sprintRoute);
app.use('/', atividadeEtapaEapRoute);
app.use('/', atividadeBacklogRoute);
app.use('/', tarefaObservadorRoute);

app.get('/', (req, res) => {
    res.send('API SGD');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});