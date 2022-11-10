//Pantalla de resultados
var resultScreen = document.getElementsByClassName("results-text")[0];
var resultsEmpty = true;
var comaPresent = false;

//Botones
var numberButtons = document.getElementsByClassName("number");
var operationButtons = document.getElementsByClassName("operation");
var equalButton = document.getElementsByClassName("equals")[0];
var eraseButton = document.getElementsByClassName("erase")[0];
var closeButton = document.getElementsByClassName("close")[0];

//Datos guardados
var valueSaved;
var lastValue;
var operation;
var zeroDivision = false;

//Operaciones
var operations = new Operations();


//Evento para numeros
for(var i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", function(){
        if((resultsEmpty || zeroDivision || resultScreen.innerHTML == "0")) {
            resultScreen.innerText = "";
            zeroDivision = false;
        }
        if(operation && operation.length > 1){
            resultScreen.innerText = "";
            zeroDivision = false;
            operation = "";
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

//Evento para operaciones
for(var i = 0; i < operationButtons.length; i++){
    operationButtons[i].addEventListener("click", function(){
        makeOperation();
        var textInScreen = parseFloat(resultScreen.innerText);
        if(!isNaN(textInScreen)) valueSaved = textInScreen;

        resultScreen.innerText = this.innerText;
        resultsEmpty = true;
        comaPresent = false;
        operation = this.innerText;
    })
}

//Evento para boton igual
equalButton.addEventListener("click", function(){
    var textInScreen = parseFloat(resultScreen.innerText);
    if(isNaN(textInScreen)) {
        resultScreen.innerHTML = valueSaved;
        return;
    }

    makeOperation();
})

//Evento para boton borrar
eraseButton.addEventListener("click", function(){
    reset();
})

//Evento para boton cerrar
closeButton.addEventListener("click", function(){
    window.close();
})

function makeOperation(){
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
}

function reset(){
    valueSaved = 0;
    lastValue = 0;
    operation = "";
    zeroDivision = false;
    resultScreen.innerText = "0";
    resultsEmpty = true;
    comaPresent = false;
}

