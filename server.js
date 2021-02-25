const express = require('express');

const app = express();

app.use(express.static('./dist/angular-app-test'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/angular-app-test/' }),
);

app.listen(process.env.PORT || 4200);