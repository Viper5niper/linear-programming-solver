
//captura los datos en forma de arreglos string

function getSolve(){

	var input = {
    type: "maximize",
    objective : CapturarZ(),
    constraints : CapturarRest()
};

var output = YASMIJ.solve( input );
console.dir(output);


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

console.log(strFuncionZ);
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

	console.log(strRest);
	return(strRest);

}
