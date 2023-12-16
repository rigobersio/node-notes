const fs = require('fs');

function cambiarNameFile(oldPath, newPath){
	const respuesta = fs.rename(oldPath, newPath, (error) => {
	if(error) throw error;
	console.log(`el nombre se ha comabiado correctamente de ${oldPath} ${newPath}.`);
	});
	return respuesta;
}

cambiarNameFile('./eliminar3.js', './eliminar4.js');