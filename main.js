function calcular(){
    var a = document.getElementById("a");
    var b =document.getElementById("b");
    var negative=parseInt(document.getElementById("nega").value);
    
    var a=a.value;
    var b=b.value;
    
    var salida =document.getElementById("salida");

    if(( (a<0)&&(b>0) || (a>0)&&(b<0) )&& negative==0)
        {
            salida.innerHTML="1";
          }
    else
        {
        if ((negative==1)&&(a<0 && b<0))
             salida.innerHTML="1";
        else 
             salida.innerHTML="0";
    }
}
