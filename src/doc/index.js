/*  module.exports = (path, options) => { 
};  */

const path= require("path");
const fs = require('fs');
 

//ver un ruta de forma absoluta 
let archi = (path.join(__dirname, "./intro.md"))
console.log("Buenas :", archi)

//Llamar un archivo 
  
fs.readFile(path.join("./intro.md"), 'utf-8', (err, data)=>{
  if ('error: ', err){
    console.log(err.message)
  } else {
    console.log(data);
  }
  
}); 




 