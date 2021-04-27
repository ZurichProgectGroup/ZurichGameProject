const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static('./dist'));

app.get('*', (request, response) => {
    console.log('get', request);
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});
console.log('server started at port: ', PORT);
app.listen(PORT);
