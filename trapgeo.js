var telaresult;


function CalculaTrap(){
    this.telaresult = document.getElementById('telaresult');
    var numeroA = parseInt(document.getElementById('numeroA').value);
    var numeroB = parseInt(document.getElementById('numeroB').value);
    var numeroC = parseInt(document.getElementById('numeroC').value);



    this.telaresult.value = ((numeroA+numeroB)*numeroC)/2;
}

    