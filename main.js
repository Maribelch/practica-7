function calcular(){
    var a = document.getElementById("a");
    var b =document.getElementById("b");
    var b1=b.value;
    var a1=a.value;
    
    var salida =document.getElementById("salida");
    
    if(a1>0 && b1>0){
        salida.innerHTML="0";
    }
    else{
        salida.innerHTML="1";
    }
}