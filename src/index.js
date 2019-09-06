//Desde este archivo debes exportar una función (mdLinks)

//Esta función debe tener un parámetro (path)
module.exports = async (path,options) => {

  //Función asíncrona para obtener el archivo md como string, teniendo como argumento el path que el usuario va a ingresar //
  
    try {
        
        const file = await getFile(path);
        const arr = file.split('\n');
        return arr.length - 1;    
    } catch (err) {
        console.log(err);
    }
};

  const getFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'UTF-8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};
  // ...
};

