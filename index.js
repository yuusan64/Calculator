//const arr=prompt("Enter the numbers");

function input(n)
{
    document.getElementById("input").value+=n;
}

function operate(){

var userInput=document.getElementById("input").value;
var result=[];

if(userInput.includes("+")){
    result=userInput.split('+');
    return sum(result);
}

else if(userInput.includes("-")){
    result=userInput.split('-');
    return subtract(result);

}
else if(userInput.includes('×')){
    result=userInput.split('×');
    return multiply(result);

}
else if(userInput.includes('÷')){
    result=userInput.split('÷');
    return divide(result);

}}

function sum(arr){
    return parseInt(arr[0]) + parseInt(arr[1]);
}

function subtract(arr){
   return parseInt(arr[0])-parseInt(arr[1]);
}

function divide(arr){
    return parseInt(arr[0])/parseInt(arr[1]);
}

function multiply(arr){
    return parseInt(arr[0])*parseInt(arr[1]);
}

function equalTo(){
    var ans=operate();
    document.getElementById('input').value=ans;
}

function clearButton(){
   document.getElementById('input').value=" ";

}

/*switch(userInput.includes(a)){

case "+":
    sum()



}*/