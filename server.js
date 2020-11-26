const express = require('express');

const app = express();

app.use(express.static('./dist/frontend-test'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/frontend-test/'}),
);

app.listen(process.env.PORT || 8080);