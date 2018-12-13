var telaresult;


function CalculaTri(){
    this.telaresult = document.getElementById('telaresult');
    var numeroA = parseInt(document.getElementById('numeroA').value);
    var numeroB = parseInt(document.getElementById('numeroB').value);



    this.telaresult.value = (numeroA*numeroB)/2;
}

    