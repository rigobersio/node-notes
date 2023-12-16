const fs = require('fs');

const path = './henry/PI-rigobersio/front/index.html'

const contenido = fs.readFile(path, 'utf-8', (error, data) => {
	if(error) {
		return console.log(error);
	} else {
		return console.log(data)
};
})


console.log(contenido);

module.exports = { contenido: contenido };