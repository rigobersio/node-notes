const constDinero = 200;

function ventaIniciada(producto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (producto === 'papas') return resolve(`La venta de el producto **${producto}**se inicio. El producto debe ser pagado`);
      reject(`No se puede procesar el pago del producto: "${producto}"`);
    }, 2000)
  })
};

function procesarPago(dineroPagado) {
  return new Promise((resolve, reject) => {
    return setTimeout(dinero => {
      if (dinero > constDinero) return resolve(`Se ha efectuado un pago por: ${dinero}`);
      return reject(`no se ha podido procesar el pago del producto`);
    }, 2400, dineroPagado)
  })
};

async function ventaPago(producto,monto) {
  try {
    const respuestaVenta = await ventaIniciada(producto);
  console.info('se ha iniciado el proceso de venta');
  console.log(respuestaVenta);
  const respuestaPago = await procesarPago(monto)
  console.info('se inicia el proceso de pago');
  console.log(respuestaPago);
  }
  catch(x) {return console.error(x)};
}

ventaPago('papas', 300);