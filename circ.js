var telaresult;


function CalculaCirc(){
    this.telaresult = document.getElementById('telaresult');
    var numeroA = parseInt(document.getElementById('numeroA').value);


    this.telaresult.value = 3.14*Math.pow(numeroA,2);
}

    