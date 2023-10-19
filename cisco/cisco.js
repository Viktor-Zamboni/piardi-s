const express = require('express');
const app = express();

const fileSystem = require('fs');
let letto = fileSystem.readFileSync('prod.json', 'utf-8');

let prodotti = JSON.parse(letto);
console.log(prodotti);

app.get('/prodotti', (req, res) => {
    res.send(prodotti);
});

app.get('/categorie', (req, res) => {
    let categorie = prodotti.map(c => c.categoria);
    let set = new Set(categorie);
    res.send(Array.from(set));
});

app.listen(3000, () => {
    console.log('Server avviato sulla porta 3000');
});