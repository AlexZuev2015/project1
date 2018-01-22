fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3')
  			.then(function(response) {
    		return response.json();
   })
   .then(function(user) {
    console.log(user); // iliakan
  })