function addition(){
    
    var n=document.getElementById("tb2").value;

    var sum=0;

    for(var i=1;i<=n;i++)
        sum+=i;;
        
    document.getElementById('result').innerHTML= sum;    
}