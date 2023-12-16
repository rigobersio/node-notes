# NODE
## Los conceptos básicos de Node incluyen:

> Módulos: Los módulos son la forma de estructurar el código en Node. Cada módulo 
 es un archivo JavaScript que contiene una función o un conjunto de funciones relacionadas.
> NPM: es un sistema de gestión de paquetes de software. Permite a los desarrolladores
 instalar, actualizar y desinstalar `paquetes` de software, así como gestionar `dependencias` entre `paquetes`.
 NPM también se puede considerar como el repositorio más grande del mundo.

#### Bibliotecas, repositorios, dependencias.
> Biblioteca: es una amalgama de script funcionalidades, herramientas, etc., que normalmente son recicladas
 de proyectos anteriores y que ayudan al lograr ciertos objetivos más bien específicos.
> Paquete: este es un conjunto de archivos, script, funcionalidades, módulos, `bibliotecas`, metadatos con info
 de autoría versión, es decir, al es una amalgama similar a la `Biblioteca` con un propósito más general y que
 está empaquetada y listo para ser instalado por un programa como `NPM`.
> dependencia: tanto la `biblioteca o librería` como el `paquete` pueden necesitar otros recursos como otras
 librerías o paquetes, a esto se conoce como `dependencias`.
###### nota:
 `Un paquete npm del repositorio del proyecto es una archivo o directorio descrito en package.json`
---
> API: En el contexto de la informática, una API (interfaz de programación de aplicaciones) es un conjunto
 de definiciones y protocolos que permiten que dos componentes de software se comuniquen entre sí.
> Eventos: Los eventos son una forma de comunicar información entre diferentes partes de una aplicación Node.
> Streams: Los streams son una forma de leer y escribir datos de forma secuencial.
> Sockets: Los sockets son una forma de comunicarse entre dos procesos en una red.

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

