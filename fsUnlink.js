
 const fs = require('fs');
 const path = './eliminar.js'
 const CB = (error) => {
  if(error) throw error;
  console.info('el archivo fue eliminado');
 }
 fs.unlink(path, CB);
 