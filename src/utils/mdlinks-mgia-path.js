const path = require('path');
const fs = require ('fs')

//El path funcionará para detectar la ruta del directorio en el que detectará y leerá el readme//
const readPath = (pathUser) => {
    let readPathUser = (pathUser)
    let objPath= path.parse(readPathUser); // Returns: { root: '', dir: '../gif', base: 'image.gif', ext: '.gif', name: 'image' }
    console.log(objPath);
    if(typeof pathUser !== 'string'){   //Primera condicional para que la ruta sea un string
        throw new error('La ruta debe ser tipo string')
    }
    if(path.isAbsolute(pathUser)){ //Segunda condicional para saber si la ruta es absoluta//
        let pathFile = objPath.base;
        console.log(pathFile);
    }
    else{
        let relToAbsPath = path.resolve(pathUser); //Tercera condicional para saber si la ruta es relativa,convertirla a absoluta
        console.log(relToAbsPath);
        let pathFile = objPath.base;
        console.log(pathFile);
    }
}
const printPath = (readPath('../../READMES/readme-uno.md'));//Ingreso la ruta//
console.log(printPath);

// const markdownFile = filePath => filePath.endsWith('.md')

// const findMarkFiles = pathUser =>{
//     try {
//         return isAbsolute(pathUser) ? pathUser: resolve(pathUser)
//     }
// }


// 


// // module export path = path;

// fs.readdir('./READMES',(error,files)=>{
//     if (error){
//         throw error;
//     }
//     console.log(files);

//     fs.readFile('./READMES/readme-uno.md','UTF-8',(error,archivo)=>{
//         if (error){
//             throw error;
//         }
//         console.log(archivo);
//     });
//     console.log('Contendio del archivo ...')
// });



