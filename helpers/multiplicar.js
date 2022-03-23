const fs = require("fs");
const colors = require("colors");

const crearArchivoTabla = async (base = 5, l, hasta = 10) => {
  try {
    let respuesta = "";
    let consola = "";
    for (let i = 1; i <= hasta; i++) {
      respuesta += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
    }
    if (l) {
      console.log("================".green);
      console.log(`Tabla del: ${colors.blue(base)}`);
      console.log("================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/Tabla del ${base}.txt`, respuesta);
    return `Tabla-${base}.txt creada `;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivoTabla,
};

// Coodigo base para acceder a los parametros que se le pasan por la consola
// const [, , arg3 = "base=3"] = process.argv;
// const [, base] = arg3.split("=");
