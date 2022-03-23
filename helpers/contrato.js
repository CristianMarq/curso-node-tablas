const fs = require("fs");

const crearContrato = async (
  nombreT,
  nombreC,
  direccion,
  metros,
  precio,
  desc
) => {
  try {
    const salida = `Por medio de el presente yo ${nombreT} hago constar que realizare un trabajo con direccion en ${direccion} a la persona con nombre ${nombreC}. El trabajo consta de ${metros} ${desc} a un precio de $${precio} MXM dando un total de $${
      metros * precio
    }`;

    fs.appendFileSync("Contarto-precio-alsado.pdf", salida);
    return "Contratp-precio-alsado.pdf creado";
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearContrato,
};




// const nombreT = "Christian Alessandro Marquez Ramirez";
// const nombreC = "Jose Manuel Marquez Escobedo";
// const direccion = "Calle 4 #119 Col.El Rodeo 63068";
// const metros = 350;
// const precio = 100;
// const desc = "Yeso aplicado sobre muros";

// crearContrato(nombreT, nombreC, direccion, metros, precio, desc)
//   .then((nombreArchivo) => console.log(nombreArchivo))
//   .catch((err) => console.log(err));