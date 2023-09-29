function input(n)
{
    document.getElementById("input").value+=n;
}

function split(){

 var userInput=document.getElementById("input").value;
 var result=[];
 result=userInput.split("");
 console.log(result);
 operate(result);
 if(result.length=1){
     return result;
 }
}

function concat(arr,i){
    console.log(i);
    while(Number.isInteger(parseFloat(arr[i+1]))==true||arr[i+1]=='.' && (i+1)<arr.length){ 
    let a=arr[i];
        console.log(a);
        let b=arr[i+1];
        console.log(b);
        console.log("−");
        arr.splice(i,2);
        arr.splice(i,0,a+b);
       console.log(arr);
    }
    return arr;    

}


function operate(result){

 let value;
 for(let i=0;i<result.length-1;i++){ 
    if(Number.isInteger(parseFloat(result[i]))==true){
        concat(result,i);
 
    }
    else if(result[i]=='+'){
        console.log(i);
        concat(result,i+1);
        console.log(result);
        value=sum(result[i-1],result[i+1]);
        console.log("I'm called");
        reduce(result,value);
    }
    else if(result[i]=='−'){
        console.log(i);
        concat(result,i+1);
        console.log(result);
        value=subtract(result[i-1],result[i+1]);
        reduce(result,value);
    }
    else if(result[i]=='÷'){
        console.log(i);
        concat(result,i+1);
        console.log(result);
        value=divide(result[i-1],result[i+1]);
        reduce(result,value);
    }
    else if(result[i]=='×'){
        console.log(i);
        concat(result,i+1);
        console.log(result);
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
    console.log("sum of" + a);
    console.log("and sum of" + b);
    return parseFloat(a)+parseFloat(b);
}

function subtract(a,b){
   return parseFloat(a)-parseFloat(b);
}

function divide(a,b){
    return parseFloat(a)/parseFloat(b);
}

function multiply(a,b){
    return parseFloat(a)*parseFloat(b);
}

function equalTo(){
    var ans=split();
    document.getElementById('input').value=ans;
}

function clearButton(){
   document.getElementById('input').value="";

}
