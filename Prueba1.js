var arrayNombres = new Array();
var arrayApellido = new Array();
var arrayCiudad = new Array();

arrayNombres[0] = "nombre1";
arrayNombres[1] = "nombre2";
arrayNombres[2] = "nombre3";

arrayApellido[0] = "ape1 ";
arrayApellido[1] = "ape2";
arrayApellido[2] = "ape3";

arrayCiudad[0] = "ciudad1";
arrayCiudad[1] = "ciudad2";
arrayCiudad[2] = "ciudad3";

// esta deberia ser la forma en la cual declaras tu objeto datos para que la pueda parsear a Json
var list = {
  'datos' :[]
};

//guardas los datos
for (var i = 0; i < arrayNombres.length; i++) {
    list.datos.push({
    "nombre": arrayNombres[i],
    "apellido": arrayApellido[i],
    "ciudad": arrayCiudad[i]
  });
};

json = JSON.stringify(list); // aqui tienes la lista de objetos en Json
var obj = JSON.parse(json); //Parsea el Json al objeto anterior.

$("#res").text('' + json);