function factorial(){
    // var n=document.getElementById("tb1").value;
    // var fact=1;
    // for(i=1;i<=n;i++)
    //     fact=fact*i;
    // document.getElementById('result').innerHTML= fact;
    var n=document.getElementById("tb1").value;

    var fact=document.getElementById("tb1").value;

    for(var i=1;i<n;i++)
        fact*=i;
    document.getElementById('result').innerHTML= fact;    
}