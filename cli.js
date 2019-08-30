#!/usr/bin/env node

console.log('baia baia tacubaya')
//1. Crear un archivo en la misma jerarquía que el index.js"//
//2. Agregar dentro del cli.js #!/usr/bin/env node para que sepa que será ejecutado para node.js//
//3. Agregar en el package .json, debajo de license el "bin":{"nombre de librería": "./cli.js" }
//4. Se manda llamar desde consola -npm link- por que es el conecte entre el package y Node js//
//