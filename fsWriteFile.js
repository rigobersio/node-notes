const fs = require('fs');

const path = './fsUnlink.js';

const contenido = `
 const fs = require('fs');
 const path = './eliminar.js'
 const CB = (error) => {
  if(error) throw error;
  console.info('el archivo fue eliminado');
 }
 fs.unlink(path, CB);
 `
const CB = (error, contenido) => {
  if (error) throw error;
  const CBLectura = (error, data) => {
    if(error) throw error;
    console.info(data);
  }

  const lectura = fs.readFileSync(path, 'utf-8', CBLectura);
  console.info(`El archivo fue creado o modificado. Su contenido es: ${lectura}` );
}


fs.writeFile(path, contenido, CB);

