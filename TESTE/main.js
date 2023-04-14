function verificar(){
var a = 0
var b = 1
var c = a + b
var input = document.getElementById('valor').value
var result = [a,b]
for (i = 0;i <= input;i++){
a = a + b
b = b + a 
result.push(a,b)
}

var teste = result.indexOf(parseInt(input))

if (teste != -1){
    alert(`${input} pertence a sequancia`)
}
else{alert(`${input} não pertence a sequência`)}
 
}

function inverter(){
   var string = (document.getElementById('text').value).split("")
   var invertida = []


   for(i = string.length - 1; i>=0; i-- ) {
    invertida.push(string[i])    
   }


 document.getElementById('invertida').innerText = invertida.join("")
   
}









function percentual() {
    var total =parseFloat(180.759,98)
    var faturamento =parseFloat(document.getElementById('estados').value)
    var result = ((faturamento * 100)/total).toFixed(0)
    if (result != NaN ){
        document.getElementById('percentual').innerText = `Esse estado faturou ${result}% referente ao faturamento total`
    }
    else{
    alert(result)}

}




