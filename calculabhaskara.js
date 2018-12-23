var telaresult;
var telaresult2;
var telaresult3;


function CalculaBhask(){
    this.telaresult = document.getElementById('telaresult');
    this.telaresult2 = document.getElementById('telaresult2');
    this.telaresult3 = document.getElementById('telaresult3');
    var numeroA = parseInt(document.getElementById('numeroA').value);
    var numeroB = parseInt(document.getElementById('numeroB').value);
    var numeroC = parseInt(document.getElementById('numeroC').value);


    this.telaresult.value = Math.pow(numeroB, 2) - 4*numeroA*numeroC;
    this.telaresult2.value = ((numeroB*(-1)) + Math.sqrt(Math.pow(numeroB, 2) - 4*numeroA*numeroC))/ numeroA*2;
    this.telaresult3.value = ((numeroB*-1)- Math.sqrt(Math.pow(numeroB, 2) - 4*numeroA*numeroC))/ 2*numeroA;
}

    