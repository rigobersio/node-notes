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
        * este es como el archivo principal y los elementos de este archivo son los que se van a importar cuando se importe el paquete
    * luego va el comando de test (se pude dejar en blanco: todo se puede gestionar después).
    * git repository
    * keywords
    * Author
    * lincense (por defecto es ISC)
    * y luego se confirma antes de crear el package.json

