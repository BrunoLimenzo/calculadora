$(document).ready(function(){
   const items =  $('li');
   for(let li of items){
    if(li.id === ""){
    li.addEventListener("click",function(){addValue(li.innerHTML)});
    }

    $("#botao-igual").click(writeResult);
    $("#botao-limpar").click(clearResult);
   }
})

function addValue(value){
    const actualValue = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = actualValue + value;
}

function clearResult(){
    document.getElementById("resultado").innerHTML = "";
}

function writeResult(){
    let val = document.getElementById("resultado").innerHTML;
    val = val.replace(/[x]/i,"*");

    if(val && canEval(val)){
        document.getElementById("resultado").innerHTML = eval(val);
    }else{
        document.getElementById("resultado").innerHTML = "ERROR";
    }
}

function canEval(val){
    try {
        eval(val);
    } catch (error) {
        return false
    }

    return true;
}