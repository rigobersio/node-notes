# NODE
## Los conceptos básicos de Node incluyen:

> `Módulos`: Los módulos son la forma de estructurar el código en Node. Cada módulo 
 es un archivo JavaScript que contiene una función o un conjunto de funciones relacionadas.
> `NPM`: es un sistema de gestión de paquetes de software. Permite a los desarrolladores
 instalar, actualizar y desinstalar `paquetes` de software, así como gestionar `dependencias` entre `paquetes`.
 NPM también se puede considerar como el repositorio más grande del mundo.

#### Bibliotecas, paquetes, dependencias.
> `Biblioteca`: es una amalgama de script funcionalidades, herramientas, etc., que normalmente son recicladas
 de proyectos anteriores y que ayudan al lograr ciertos objetivos más bien específicos.
> `Paquete`: este es un conjunto de archivos, script, funcionalidades, módulos, `bibliotecas`, metadatos con info
 de autoría versión, es decir, al es una amalgama similar a la `Biblioteca` con un propósito más general y que
 está empaquetada y listo para ser instalado por un programa como `NPM`.
> `dependencia`: tanto la `biblioteca o librería` como el `paquete` pueden necesitar otros recursos como otras
 librerías o paquetes, a esto se conoce como `dependencias`.
###### nota:
 `Un paquete npm del repositorio del proyecto es una archivo o directorio descrito en package.json`
---
> `API`: En el contexto de la informática, una API (interfaz de programación de aplicaciones) es un conjunto
 de definiciones y protocolos que permiten que dos componentes de software se comuniquen entre sí.
> `Eventos`: Los eventos son una forma de comunicar información entre diferentes partes de una aplicación Node.
> `Streams`: Los streams son una forma de leer y escribir datos de forma secuencial.
> `Sockets`: Los sockets son una forma de comunicarse entre dos procesos en una red.

## módulo built-in o core; estos son los módulos nativos

## module

> require(): Carga un módulo especificado.
> exports: Exporta un objeto o función desde un módulo.
> module.exports: Objeto o función exportada por un módulo.
> module.filename: Ruta del archivo del módulo actual.
> module.path: Ruta del directorio del módulo actual.

### ¿cómo exportar?
 module.exports() --> {} es un obj vacío
 cómo es un objeto la notación de pudo sirve para agregar propiedades
```JavaScript
//MODULO1: saludar.js

function saludar(saludo){return `${saludo}, a todos los presentes`};
module.exports.saludar = saludar
//MODULO2

const saludar = require('./saludar.js');
//ahora se puede ejecutar saludar(saludo)
console.log(saludar.saludo('hola'));
```

---
##### más de un saludo

```JavaScript
//MODULO1: saludar.js

function saludo(saludo){return `${saludo}, a todos los presentes`};
const felizAñoNuevo = () => 'Feliz año!!!';
module.exports.saludo = saludo;
module.exports.felizAñoNuevo = FelizAñoNUevo;
// o también puede ser
module.exports = {
  saludo: saludo,
  felizAñoNuevo: 'felizAñoNuevo',
}
//MODULO2
const saludar = require('./saludar.js');
//ahora se puede ejecutar saludar(saludo) y felizAñoNuevo()
// una alternativa para hacer esto es mediante desestructuración
const { saludo, felizAñoNuevo } =require(`./saludar.js`)
console.log(saludar.saludo('hola'));
console.log(saludar.felizAñoNuevo());
```

## console
### funciones de módulo console

> console.log(): Imprime el valor especificado en la consola.
> console.error(): Imprime un mensaje de error en la consola.
> console.info(): Imprime un mensaje informativo en la consola.
> console.warn(): Imprime un mensaje de advertencia en la consola.
> console.debug(): Imprime un mensaje de depuración en la consola.


> console.dir(): Imprime una representación de un objeto en la consola.
> console.time(): Inicia un temporizador que se puede utilizar para medir el tiempo de ejecución de una función.
> console.timeEnd(): Detiene un temporizador iniciado por console.time().
> console.trace(): Imprime una pila de llamadas en la consola.

## process
 Entrega info sobre el proceso que se está ejecutando.
 Puede tener cierto control sobre el proceso.

el retorno de un `console.log(process)` es un objeto don muchas propiedades informativas como versiones, rutas plataformas.. también tiene métodos, etc.

### propiedad env
 La propiedad `env` viene del ambiente de trabajo o environment, por lo tanto process.env entrega info mucho más concisa

### argv
 process también permite acceder a los argumentos que se pasan por terminal: en la terminal se puede ejecutar node App.js, luego es posible mediante process.argv
 pasar argumentos por medio de la terminal. process.argv seria equivalente a un arreglo de todos los elementos pasados en el comando, asì process.args[0] sería la dirección del programa node. un console.log(process.argv) mostraría en pantalla cada uno de esos elemento

```JavaScript
for(let i = 2; i < process.argv.length; i++){console.log(process.argv[i])}
```bash
node archivo.js 0 1 2 3 4 5 6
// retornaría: 0 1 2 3 4 5 6
```


## otros módulos built-in importantes en back-end son:

> http
> https
> fs (files system)
> os (operating system)
> path (ruta)

## Módulo timers
 contiene funcione que ejecutan código luego de cierto periodo de tiempo
 de esta forma se crean o simulan procesos asíncronos

funciones útiles:

> setTimeout(CB, miliseg, ...argDeCB); ejecuta el código luego de que transcurra una cierta cantidad de milisegundos
> setImmediate(CB, ...argCB); ejecuta código asíncrono en la proxima iteración de ciclos de eventos (lo hace lo antes posible en cuento termine el código síncrono)
> setInterval(CB, miliseg, ...argCB); el código se ejecutara en ese intervalo de tiempo


## módulo fs
 módulo que contiene funcionalidad muy útil para trabajar con sistemas de archivos.
 puede ser sícrono (Sync) o asíncrono

> fs.readFile
  
 La función tiene dos parámetros obligatorios:

 path: La ruta al archivo que se va a leer.
 encoding: El formato de codificación del archivo. `El valor predeterminado es 'utf-8'.`
 La función devuelve un Buffer que contiene el contenido del archivo. Si el archivo no existe, la función devuelve null.

```JAvaScript
const fs = require('fs'); //al parecer esto es opcional

const path = './mi-archivo.txt';

const contenido = fs.readFile(path, 'utf-8');

console.log(contenido); // Imprime el contenido del archivo

```

 también admite un tercer parámetro  CB. Esta cb se ejecuta después de que la función haya terminado de leer el archivo.
 La callback recibe dos parámetros:

> error: Un objeto Error que contiene información sobre cualquier error que se haya producido.
> data: El Buffer que contiene el contenido del archivo.

```JAvaScript
const fs = require('fs');

const path = './mi-archivo.txt';

fs.readFile(path, 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data); // Imprime el contenido del archivo
  }
});

```


> fs.rename() o fs.renameSync()
 etá función es muy similar a la anterior; recibe 2 parámetros obligatorios y retorna true o false. También puede recibir una CB como tercer parámetro, aí pues está fn se ejecutara posteriormente y recibirá 2 parámetros: un objeto error que iniciara vacío y solo se llenara si es que ocurrió un error, y el segundo parámetro es newPath. Entonces:

 ```JavaScript
 const fs = require('fs');
 const oldPath = './archivo.js'
 const newPath = './otraCarpeta/archivoDepurado.js'

 fs.rename(oldPath, newPath, (error, newPath){
  if(error) throw error;
  console.log(`el proceso ocurrió correctamente ahora el nuevo path del archivo es ${newPath}`);
 })
 ```

 > fs.writeFile() fn útil para crear y escribir un archivo

 ```JavaScript
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
  if(error) throw error;
  console.info('el contenido fue modificado');
 }


 fs.writeFile(path, contenido, CB);


 ```

> fs.unlink() fn para eliminar un archivo.

```JavaScript
const fs = require('fs');

const path = './archivoEliminar.kkj'
const CB = (error) => {
  if(error) throw error;
  console.info('el archivo fue eliminado');
}
```

## Evento
 Es una acción que se realiza en la aplicación.
 
 Características clave de los eventos:

> `Desencadenados por acciones o cambios`: Los eventos pueden ser activados por interacciones del usuario,
 cambios en el sistema o cualquier tipo de acción programática.
> `Escuchados y manejados`: Los programas pueden "escuchar" o "suscribirse" a eventos específicos y
 definir funciones (o "manejadores de eventos") que se ejecutan cuando ocurre dicho evento.
`Asincrónicos`: Los eventos suelen ser asincrónicos, lo que significa que pueden ocurrir en cualquier
 momento y el programa debe estar preparado para manejarlos en ese momento.
> `Patrón de publicación-suscripción`: En muchos sistemas, los eventos siguen el patrón de publicación-suscripción,
 donde una parte del código (el emisor) publica o emite un evento, y otras partes (los suscriptores o "listeners")
 están a la espera de ese evento y responden a él.
 Por ejemplo, en JavaScript, los eventos del DOM (Document Object Model) son un ejemplo común. Puedes tener un evento
 como un clic del mouse en un botón, y tu código JavaScript puede estar suscrito a ese evento para realizar una acción
 específica cuando ocurra ese clic.

 Los eventos proporcionan una forma poderosa de estructurar y gestionar el flujo de control en programas, permitiendo
 la interacción y la respuesta dinámica a las acciones del usuario y los cambios en el entorno del programa.

### Emitters (emisores)
1. Son Objetos que emiten eventos nombrados y llaman a funciones específicas cuando ocurren.
2. Son instancias de la clase EventEmitter.
3. Tienen un método .on() para asociar una función al evento. Esa función se ejecuta cuando
   ocurre el evento y se denomina `Event Handler` (maneja el evento)
   * Los `Event Hendler` con **CB** que también se conocen como `Event Listener` (Escuchadores de Eventos)
   o simplemente `Listener`

## Módulo events

> `Definir`: define como se actuara.

> `Emitir`: puede emitir el evento.

> `Escuchar`: puede estar atenta al evento.

Cuando realizas require('events'), obtienes acceso a la funcionalidad proporcionada por este módulo. es decir, la `clase EventEmitter`.

> Los objetos que heredan de EventEmitter pueden emitir eventos utilizando el método `.emit()`.
> Para registrar un manejador o `Hendler` para un evento en particular, se utiliza el método .on().
  * El método .on(): `.on(event, listener)` se utiliza para asociar un "escuchador" o "manejador de eventos" a un evento específico en un objeto que hereda de EventEmitter. Este método recibe dos argumentos:
  1. `event`: Es una cadena que representa el nombre del evento al que se suscribe el oyente.
  2. `listener`: Es una fun que se ejecutará cuando se emita el evento.

Ejemplo de uso del módulo events y el método .on():

```JS
const EventEmitter = require( 'events' ) ;// esta fun retorna la clase EventEmitter (por el nombre de la constante);
// definir un evento con el módulo `event`

const emisorDeVenta = new EventEmitter()
//se ocupara el método on() para escuchar y manejar eventos

let valorProducto = 500000;
const iva = valorProducto * 0.2;
emisorDeVenta.on('mensajeCompra', (valor, descuento) => {
    const respuesta = `Se ha realizado una venta por el monto de ${valor - descuento}`;
    return console.info(respuesta);
})


emisorDeVenta.emit('mensajeCompra', valorProducto, iva);

```

## Promesa
 Es un objeto que representa el eventual resultado (o error) de una operación asíncrona.
 
 La promesa puede estar en 3 posibles estados:
1. pending o pendiente
2. fulfilled o cumplida
3. rechazada o rejected
 Las promesas están muy relacionadas a una `CB`. es una `CB` la que se ejecuta cuando se
  concreta el proceso asíncrono y que procesa el resultado

**Promise** es una clase JS que recibe como argumento a una **CB**, y como se describió antes,
 esta se ejecutara cuando se concrete el proceso asíncrono.
La **CB** recibe como argumento a otras 2 **CBs**, **resolve** y **reject**

`resolve`: se usa cuando una operación asíncrona se ha completado exitosamente. Cuando se llama a resolve(),
 la promesa cambia a un estado **resuelto** y `cualquier valor pasado como argumento a resolve()
  se convierte en el valor resultante de la promesa`.

`reject`: Se utiliza cuando ocurre un error o una condición que impide la finalización exitosa de una operación asíncrona.
 Al llamar a reject(), la promesa cambia a un estado **rechazado** y
  `cualquier valor pasado como argumento a reject() se convierte en el motivo o razón del rechazo`.

### método .then()

 Las promesas tienen un método **.then()**, con el cual podemos decidir qué ocurre cuando se completa la
 promesa (éxito o error).

### Método catch()

 A pesar de que el método **.then()** se puede ocupar para gestionar rejected, el método **.catch()**
  es una opción idónea para esta tarea

### funcionamiento de las promesas

 1. La clase **Promise** nativa de JS permite heredar sus métodos o propiedades a sus instancias.
 en una promesa el resultado (o error) de una operación asíncrona está representado por un objeto,
 y como se dijo anteriormente, una promesa
 puede estar: `pending, fulfilled, rejected`.

 2. El **constructor** de una promesa recibe como argumento una **CB** compleja. Esta **CB** recibe a su ves 2 **CBs**
 como argumento, así pues, estás son **resolve** y **reject**. El cuerpo de la **CB** principal valida si el
 estado de la promesa pasa a **resolve** u **reject**. `Tanto la CB resolve como reject, reciben como argumento la resolución potencial de la promesa`
 tanto **resolve** como **reject** al ejecutarse retornar el estado de la promesa, es decir **fulfilled** o **rejected**
 pero además las promesas se resolverán a `lo que se les ingrese como parámetro`.

 3. Entonce el estado de la promesa está representado por una instancia de la clase **Promise** y el método **then()**
  retorna una nueva promesa que ..., pero en definitiva el proceso puede terminar acá: el método **.then()** para el objeto promesa
 (instancia Promise) tomara como argumento una **CB**, y el argumento de está **CB** corresponderá a la resolución de la CB **resolve**,
 de la `CB original del constructor de la clase`, es decir al argumento que se le pase a **resolve** (resolve('soy un str')).

 4. Si la promesa es **rejected**: entonces el punto **3** se tiene que adaptar al método **.catch()** y la CB del constructor **reject**

 5. para simular un método asíncrono se puede ocupar el `método setTimeout(CB, miliseg, ...argDeCB) del Módulo timers`

### ejemplo

```JavaScript
const posibleVenta = () => {
  if (Math.random() > 0.6) return true;
}
const promesaVenta = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (posibleVenta()) return resolve('Se ha realizado una venta.');
    reject('Ha ocurrido un error.');
  }, 1000)
});

promesaVenta
  .then((x) => console.info(x))
  .catch((x) => console.error(x));

promesaVenta
  .then((x) => console.info(x))
  .catch((x) => console.error(x));

promesaVenta
  .then((x) => console.info(x))
  .catch((x) => console.error(x));

promesaVenta
  .then((x) => console.info(x))
  .catch((x) => console.error(x));

promesaVenta
  .then((x) => console.info(x))
  .catch((x) => console.error(x));
```

### Método Chaining o de promesas encadenadas.
 En general un proceso asíncrono puede estar ligado a otros procesos asíncronos. una forma de hacer que cada uno de ellos+
 ocurra en el orden deseado es encadenarlos.

### ejemplo.

```JavaScript
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
      if (dinero > 10) return resolve(`Se ha efectuado un pago por: ${dinero}`);
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
```
 
## async await
 con `async await`se puede escribir código asíncrono como si fuera síncrono. 
 1. Hay que escribir la keyword **async** antes de **function**. esto indicara que es una
 f asíncrona **y además** retornará una **promesa**
 2. Al colocar **await** antes de los proceso asíncronos se le está indicando a JS que 
 espere hasta `que un proceso se cumpla o se rechace antes de seguir ejecutando el código`.


 
La declaración try en JavaScript se utiliza en conjunto con catch, finally o ambas, y se utiliza para controlar el flujo del programa en situaciones donde podrían ocurrir errores.

La estructura básica de un bloque try...catch es la siguiente:

```JavaScript
try {
  // Código que puede lanzar una excepción (error)
} catch (error) {
  // Código que se ejecuta si se lanza una excepción durante el bloque try
}
```

### Lo mismo pero con async y await

```JavaScript
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
```