## iniciar un paquete.
1. nmp init
 ```bash
 This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (new-paquete-node)
 ```

2. Esto inicia una utilidad de ayuda para crear un archivo package.json
    * en este punto se puede cambiar el nombre del paquete o elegir el nombre por defecto
    * luego va la versión del paquete (por defecto 1.0.0)
    * luego una descripción
    * luego pregunta por el punto de entrada (por defecto es index.js)
        * este es como el archivo principal y los elementos de este archivo son los que
         se van a importar cuando se importe el paquete
    * luego va el comando de test (se pude dejar en blanco: todo se puede gestionar después).
    * git repository
    * keywords
    * Author
    * license (por defecto es ISC)
    * y luego se confirma antes de crear el package.json

## ¿Qué es una archivo .json?
 Son archivos basados en la sintaxis de JS y se ocupa mucho en desarrollo web para transmitir y almacenar información
 JSON JS Object Notation, es una notación inspirada en Objetos JS pero de texto plano
 En consecuencia permite almacenar `objetos JS` en formato de texto plano que se puede trasmitir entre e cliente y el servir
 JSON es independiente del lenguaje que se este ocupando

## ¿cómo iniciar instalar un paquete?
 Cuando se instala un paquete estrictamente lo que se hace es instalar una dependencia de nuestro
 paquete-NODE, y al mismo tiempo el gestor de paquetes (en este caso NPM) instalara las dependencia de ese paquete.

 Para instalar la última version disponible el comando es:
 ```bash
 npm install paquete
 ```
 Para instalar un version en especifico
 ```bash
 npm install paquete@0.0.0 //número de la version
 ```

## package-lock.json
 Se genera automáticamente cuando npm modifica el árbol de node_modules o package.json.
 Describe el árbol generado para que futuras instalaciones puedan generar exactamente el mismo árbol.
 Otros desarrolladores pueden instalar exactamente las mismas dependencias.

## algunos comandos
```bash
npm install --save {nombre del paquete}
npm install --g {nombre del paquete}
npm update
npm audit
npm start
npm test
npm run {nombreScript}
```