var resultScreen = document.getElementsByClassName("results-text")[0];
var resultsEmpty = true;
var comaPresent = false;


var numberButtons = document.getElementsByClassName("number");

for(var i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", function(){
        if(resultsEmpty) {
            resultScreen.innerText = "";
            resultsEmpty = false;
        }
        if(this.classList.contains("coma")){
            if(comaPresent) return;
            comaPresent = true;
        }
        resultScreen.innerText += this.getElementsByTagName("p")[0].innerText;
    })
}
