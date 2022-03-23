const { crearArchivoTabla } = require("./helpers/multiplicar");
const { demandOption, options } = require("yargs");
const argv = require("./config/yargs");

require("colors");

console.clear();

crearArchivoTabla(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow))
  .catch((err) => console.log(err));
