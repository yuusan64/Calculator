function input(n)
{
    arr=document.getElementById("input").value+=n;
}

function split(){

 var userInput=document.getElementById("input").value;
 var result=[];
 result=userInput.split("");
 operate(result);
 if(result.length=1){
     return result;
 }
}

function operate(result){

 let value;
 for(let i=1;i<result.length;i++){ 
    if(Number.isInteger(parseInt(result[i]))==true){
        let a=result[i-1];
        let b=result[i];
        result.shift();
        result.shift();
        result.unshift(a+b);
        i--;
    }
    if(result[i]=='+'){
        value=sum(result[i-1],result[i+1]);
        reduce(result,value);
    }
    else if(result[i]=='-'){
        value=subtract(result[i-1],result[i+1]);
        reduce(result,value);
    }
    else if(result[i]=='÷'){
        value=divide(result[i-1],result[i+1]);
        reduce(result,value);
    }
    else if(result[i]=='×'){
        value=multiply(result[i-1],result[i+1]);

        reduce(result,value);
    }
  } 
}

function reduce(res,val){

 let i=0;
    while(i<3){
        res.shift();
        i++;
    }
    res.unshift(val);
    operate(res);
}


function sum(a,b){
    return parseInt(a)+parseInt(b);
}

function subtract(a,b){
   return parseInt(a)-parseInt(b);
}

function divide(a,b){
    return parseInt(a)/parseInt(b);
}

function multiply(a,b){
    return parseInt(a)*parseInt(b);
}

function equalTo(){
    var ans=split();
    document.getElementById('input').value=ans;
}

function clearButton(){
   document.getElementById('input').value="";

}
