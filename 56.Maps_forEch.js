let mapa = new Map([["nombre","Claudia"],["edad",33]]);

mapa.forEach( function(valor, llave, mapaOrigen){
    console.log(`llave: ${llave}, valor: ${valor}` );
    console.log( mapaOrigen);
});

mapa.forEach((valor, llave) => console.log(`${llave} ${valor}`));
mapa.forEach((valor) => console.log(`${valor}`));