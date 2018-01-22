var fetch = require('node-fetch');
fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3')
    .then(function(res) {
        return res.text();
    }).then(function(task3) {
        console.log(task3);
    });