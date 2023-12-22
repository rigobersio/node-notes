const posibleVenta = () => {
  if (Math.random() > 0.3) return true;
  return false;
}
const promesaVenta = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (posibleVenta()) return resolve('Se ha realizado una venta1');
    reject('No ha ocurrido la venta random.');
  }, 1000)
});

promesaVenta
  .then((x) => console.info(x))
  .catch((x) => console.error(x));


const constDinero = 200;


function ventaIniciada(producto){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(producto === 'papas') return resolve(`La venta de el producto **${producto}**se inicio. El producto debe ser pagado`);
      reject(`No se puede procesar el pago del producto: "${producto}"`);
    },2000)
  })
};

function procesarPago(dineroPagado){
  return  new Promise((resolve, reject) => {
    return setTimeout(dinero => {
      if (dinero > constDinero) return resolve(`Se ha efectuado un pago por: ${dinero}`);
      return reject(`no se ha podido procesar el pago del producto`);
    }, 2400, dineroPagado)
  })
};

ventaIniciada('papas')
  .then(x => {
  console.info('se ha vendido algo');
  console.log(x);
  return procesarPago(101);
})
  .then(x => {
    console.info('se inicia el proceso de pago');
    console.log(x);
  })
  .catch(error => console.error(error));