const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const swaggerJsDoc = require('swagger-jsdoc');
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

const motivoBloqueioRoute = require('./routes/motivoBloqueioRoute');
const perfilUsuarioRoute = require('./routes/perfilUsuarioRoute');
const prioridadeAtividadeRoute = require('./routes/prioridadeAtividadeRoute');
const situacaoAtividadeRoute = require('./routes/situacaoAtividadeRoute');
const etapaEapRoute = require('./routes/etapaEapRoute');
const tedRoute = require('./routes/tedRoute');
const usuarioRoute = require('./routes/usuarioRoute');
const situacaoTarefaRoute = require('./routes/situacaoTarefaRoute');
const tarefaRoute = require('./routes/tarefaRoute');
const sprintRoute = require('./routes/sprintRoute');
const atividadeEtapaEapRoute = require('./routes/atividadeEtapaEapRoute');
const atividadeBacklogRoute = require('./routes/atividadeBacklogRoute');
const tarefaObservadorRoute = require('./routes/tarefaObservadorRoute');

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