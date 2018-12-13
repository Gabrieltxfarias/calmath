var telaresult;


function CalculaQuad(){
    this.telaresult = document.getElementById('telaresult');
    var numeroA = parseInt(document.getElementById('numeroA').value);


    this.telaresult.value = Math.pow(numeroA,2);
}

    