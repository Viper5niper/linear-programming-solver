// Crea los campos necesarios para el metodo simplex
//al llenar esos datos seguiremos en main.js

var sliderZ = document.getElementById("RangoZ");//slider para la funcion Z

var sliderRest = document.getElementById("RangoRest"); // slider para las restricciones

var outputZ = document.getElementById("demoZ");//mostrara el numero de variables de funcion z
var outputRest = document.getElementById("demoRest");// mostrara el numero de restricciones

var FuncionZ = document.getElementById("FuncionZ");//div donde ira la funcion Z generada
var Restricciones = document.getElementById("Restricciones"); //div donde iran las restricciones


//material desing use it later (already used it, its dope af)

var NumVariables;
var NumRest;

var GeneroZ = false;

  var zFunction = '<span><strong>Z = </strong></span>';

outputZ.innerHTML = "Variables de funcion Z : " + sliderZ.value; // Display the default slider value
outputRest.innerHTML = "Numero de restricciones : " + sliderRest.value;

FuncionZ.innerHTML = zFunction;

// Update the current slider value (each time you drag the slider handle)
sliderZ.oninput = function() {
  
	var i; // guardara el numero de variables en la funcion Z

  outputZ.innerHTML = "Variables de funcion Z : " + this.value;

  zFunction = '<span><strong>Z = </strong></span>';

  for(i = 0; i < this.value; i++){



  	zFunction += '<div class="mdl-textfield mdl-js-textfield smol">'
                +'<input class="mdl-textfield__input" maxlength="6" type="text" pattern="-?[0-9]*(\.[0-9]+)?" style="text-align: right;" id="Var'+i+'">'
                +'<label class="mdl-textfield__label" for="Var'+i+'"></label>'
                +'<span class="mdl-textfield__error"></span>'
              +'</div>';
    if(i==(this.value-1)){
    	zFunction += '<span>X<sub>'+(i+1)+'</sub></span>';
    }
    else{

    	zFunction += '<span>X<sub>'+(i+1)+'</sub> +    </span>';
    }
              

    
  }

  FuncionZ.innerHTML = zFunction;

  NumVariables = i;

  GeneroZ = true;

  GenerarRest(NumVariables);
  

}

function GenerarRest(NV){// funcion que genera restricciones

outputRest.innerHTML = "Numero de restricciones : " + sliderRest.value;

Restricciones.innerHTML = "";

var singleRest = "";

var strRest = "";

var i,j;

for(i = 0; i < sliderRest.value; i++){ //

singleRest = "";

for(j = 0; j < NumVariables; j++){ // hacemos un string con todas las variables en la funcion Z

singleRest += '<div class="mdl-textfield mdl-js-textfield smol">'
              +'<input class="mdl-textfield__input" maxlength="6" type="text" pattern="-?[0-9]*(\.[0-9]+)?" style="text-align: right;" id="'+i+','+j+'">'
              +'<label class="mdl-textfield__label" for="'+j+','+i+'"></label>'
              +'<span class="mdl-textfield__error"></span>'
              +'</div>';
    if(j==(NumVariables-1)){
    	singleRest += '<span>X<sub>'+(j+1)+'</sub>     </span>';
    }
    else{

    	singleRest += '<span>X<sub>'+(j+1)+'</sub> +    </span>';
    }


}

strRest += '<div class="row">'
           
          +singleRest
           
          +'<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label smol">'
                +'<select class="mdl-textfield__input" id="Signo'+i+'" name="signo">'
                  +'<option value="=">=</option>'
                  +'<option value="<="><=</option>'
                  +'<option value=">=">>=</option>'
                +'</select>'
                +'<label class="mdl-textfield__label" for="signo"></label>'
              +'</div>'
			

			+'<span>          </span>'	

           +'<div class="mdl-textfield mdl-js-textfield smol">'
                +'<input class="mdl-textfield__input" maxlength="6" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="Bi'+i+'">'
                +'<label class="mdl-textfield__label" for="Bi'+i+'"></label>'
                +'<span class="mdl-textfield__error"></span>'
                
              +'</div>'


          +'</div>';




}

Restricciones.innerHTML = '<strong>Sujeto a restricciones:</strong>' + strRest;

}

sliderRest.oninput = function(){

  if(GeneroZ){

	GenerarRest(NumVariables);

  }else{

    outputRest.innerHTML = '<p style="color:red;">Genere Primero la funcion Z!<p>';

  }
};
