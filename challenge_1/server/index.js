const jsonServer = require('json-server');
const path = require('path');

const app = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, '../data/db.json'));
const middlewares = jsonServer.defaults(['static']);
const STATIC_DIR = path.resolve(__dirname, '../public');

app.use(middlewares);
app.use(router);
app.use(middlewares.static(STATIC_DIR));
app.use(jsonServer.bodyParser);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server listening on port:', port));
