
//captura los datos en forma de arreglos string y los muestra

var solucion = document.getElementById("Solucion");

function getSolve(){

	var input = {
    type: CapturarTipo(),
    objective : CapturarZ(),
    constraints : CapturarRest()
};

var output = YASMIJ.solve( input );

//var answer = JSON.parse(output);
console.log(Object.getOwnPropertyNames(output.result));

//var arreglo = output.split(":");

var resultado = output.result;
var xSoluciones = [];
var Z;

Object.keys(resultado).forEach(function(key) { //hacemos un recorrido por cada atributo de resultado

	if(key.startsWith('x'))xSoluciones.push(resultado[key]);  //si el atributo empieza con x, es una x xd
	if(key.startsWith('z'))Z = resultado[key];

  console.log(key, resultado[key]);

});

//console.log(output.result.z); // asi podemos manejar los objetos

var strSolucion = '<span><strong>Valores para X: </strong></span>';

  for(var i = 0; i < NumVariables; i++){



  	strSolucion += '<span>X<sub>'+(i+1)+'</sub> = '+xSoluciones[i]+', </span>'
              

    
  }

solucion.innerHTML = '<div><strong><h5>Solucion Optima:</h5></strong></div>' + strSolucion 
					+ "<div><strong>Valor de Z: </strong>" + Z + "</div>";



}

function CapturarTipo(){

var tipo;

if(Switch.checked)
tipo = "maximize";
else
tipo = "minimize";

return tipo;

}

function CapturarZ(){

var strFuncionZ = "";

var strId = "";
var signo = "";
var numero;

for(var i = 0; i < NumVariables;i++){

strId = "Var"+i;

numero = parseFloat(document.getElementById(strId).value);

if(i>0){

	if(numero>=0){
	signo = "+ ";}
	if(numero<0){
	signo = "- ";
	numero = numero*(-1);}


}
else{signo = "";}

strFuncionZ += signo + numero + 'x' + (i+1) + " ";

}

//console.log(strFuncionZ);
return(strFuncionZ);

}

function CapturarRest(){


	var strRest = [];

	var signo;

	var numero;

	for(var i = 0; i < sliderRest.value; i++){

		strRest[i] = "";

		for(var j = 0; j < NumVariables; j++){

			numero = parseFloat(document.getElementById(i+","+j).value);

			if(j>0){

			if(numero>=0){
			signo = "+ ";}
			if(numero<0){
			signo = "- ";
			numero = numero*(-1);}
			
			}
			else{signo = "";}

			strRest[i] += signo + numero + "x"+ (j+1) + " ";


		}

		strRest[i] += " " + document.getElementById("Signo"+i).value +" "+ document.getElementById("Bi"+i).value


	}

	//console.log(strRest);
	return(strRest);

}
