//Pantalla de resultados
var resultScreen = document.getElementsByClassName("results-text")[0];
var resultsEmpty = true;
var comaPresent = false;

//Botones
var numberButtons = document.getElementsByClassName("number");
var operationButtons = document.getElementsByClassName("operation");
var equalButton = document.getElementsByClassName("equals")[0];

//Datos guardados
var valueSaved;
var lastValue;
var operation;
var zeroDivision = false;

//Operaciones
var operations = new Operations();

for(var i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", function(){
        if(resultsEmpty || zeroDivision) {
            resultScreen.innerText = "";
            zeroDivision = false;
        }
        if(this.classList.contains("coma")){
            if(comaPresent) return;
            comaPresent = true;
            if(resultsEmpty) resultScreen.innerText = "0";
        }
        resultsEmpty = false;
        resultScreen.innerText += this.getElementsByTagName("p")[0].innerText;
    })
}

for(var i = 0; i < operationButtons.length; i++){
    operationButtons[i].addEventListener("click", function(){
        if(!isNaN(parseFloat(resultScreen.innerText))) valueSaved = parseFloat(resultScreen.innerText);
        resultScreen.innerText = this.innerText;
        resultsEmpty = true;
        comaPresent = false;
        operation = this.innerText;
    })
}

equalButton.addEventListener("click", function(){
    if(!operation) return;

    if(operation.length == 1){
        lastValue = parseFloat(resultScreen.innerText);
    }

    switch(operation[0]){
        case "+":
            valueSaved = operations.sumar(valueSaved, lastValue);
            break;

        case "-":
            valueSaved = operations.restar(valueSaved, lastValue);
            break;

        case "X":
            valueSaved = operations.multiplicar(valueSaved, lastValue);
            break;

        case "%":
            valueSaved = operations.dividir(valueSaved, lastValue);
            if(typeof(valueSaved) == "string") zeroDivision = true;
            break;
    }
    resultScreen.innerHTML = valueSaved;
    operation += "=";
})
