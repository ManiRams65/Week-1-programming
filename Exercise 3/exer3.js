
function multi(){
    
    var n=document.getElementById("tb3").value;

    var sum=0;

    for(var i=1;i<n;i++)
     if(((i%3)==0)||((i%5)==0))
         sum=sum+i;
     
        
    document.getElementById('result3').innerHTML= sum;    
}