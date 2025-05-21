// const os = require('node:os');

// //OS es un módulo nativo de Node.js que proporciona información sobre el sistema operativo en el que se está ejecutando la aplicación.
// // Información del sistema operativo
// console.log('Sistema operativo:', os.platform());
// console.log('Versión del sistema operativo:', os.release());
// console.log('Arquitectura del sistema operativo:', os.arch());
// console.log('Nombre del host:', os.hostname());
// console.log('Directorio de inicio del usuario:', os.homedir());
// console.log('Directorio temporal del sistema:', os.tmpdir());
// console.log('Número de CPU:', os.cpus().length);
// console.log('Memoria total:', os.totalmem());

// //FS es un módulo nativo de Node.js que proporciona una API para interactuar con el sistema de archivos.
// const fs = require('node:fs');

// fs.writeFile('test.txt', 'Hola, mundo!', (err) => {
//     if (err) {
//         console.error('Error al escribir el archivo:', err);
//     } else {
//         console.log('Archivo escrito correctamente');
//     }
// });
// fs.readFile('test.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error al leer el archivo:', err);
//     } else {
//         console.log('Contenido del archivo:', data);
//     }
// });

// const http = require('node:http');

// const handleServer = function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('<h1>Hola, mundo! desde node.js</h1>');
//     res.write('<p>Hola, mundo! desde node.js</p>');
//     res.end();
// }
// const server = http.createServer(handleServer);
// server.listen(3000, () => {
//     console.log('Servidor escuchando en http://localhost:3000');
// })

const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('<h1>Hola, mundo! desde node.js</h1>')
})
server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});