let numeros = [100,20,50,200];
 
/*
for (let i in numero){
     console.log(numeros[i]);
 }*/

 for (let i of numeros){
     console.log(i);
 }

 /******************************************************/
let personas = [
    {
        nombre : "fernando",
        edad:32,
    },
    {
        nombre : "juan",
        edad:37,
    },
    {
        nombre : "andres",
        edad:38,
    },{
        nombre : "manuel",
        edad:30,
    }
];

for ( pers of personas){
    console.log(pers.nombre );
    console.log(pers.edad );
}
/******************************************************/
let cosas = new Set();
cosas.add({nombre:"Andres", edad:30});
cosas.add({nombre:"Andres", edad:32});

for ( pers of cosas){
    console.log(pers.nombre );
    console.log(pers.edad );
}

/******************************************************/

let mapas  = new Map([ ["nombre", "claudia"], ["nombre", "maria"]]);
for ( pers of mapas){
    console.log(pers); ///solo muestra el ultimo nombre

}


 mapas  = new Map([ ["nombre", "claudia"], ["apellido", "villarroel"]]);
for ( let pers of mapas){
    console.log(pers);

}

console.log(pers);
/******************************************************/