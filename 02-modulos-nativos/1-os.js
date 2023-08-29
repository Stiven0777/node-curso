const path = require("path");

const rutaAbsoluta = path.join(__dirname, "archivos", "archivo.txt");
console.log("Ruta absoluta:");
console.log(rutaAbsoluta);

const nombreArchivo = path.basename(rutaAbsoluta);
console.log("Nombre del archivo:");
console.log(nombreArchivo);

const extensionArchivo = path.extname(rutaAbsoluta);
console.log("Extensión del archivo:");
console.log(extensionArchivo);

const directorioArchivo = path.dirname(rutaAbsoluta);
console.log("Directorio del archivo:");
console.log(directorioArchivo);
