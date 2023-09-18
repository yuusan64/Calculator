
//place 
function input(n)
{
    arr=document.getElementById("input").value+=n;
}


function split(){
    var userInput=document.getElementById("input").value;
    const operators=['+','-','÷','×'];
    
    var result=[];
    var splitArr=[];
    
    for(a in operators){
    key=operators[a];
    result=Array.from(userInput).filter(key=>userInput.includes(key));
    }
    console.log(result);
    operate(result);
    if(result.length=1){
        return result;
    }
}

function operate(result){

let value
for(let i=1;i<result.length;i++){
    console.log(i);
    console.log(result[i]);
    console.log(Number.isInteger(parseInt(result[i])));
    if(Number.isInteger(parseInt(result[i]))==true){
        let a=result[i-1];
        let b=result[i];
        console.log(result[i-1]);
        result.shift();
        result.shift();
        result.unshift(a+b);
        //result[i-1]=a+result[i];
        console.log(result);
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
    console.log(res);
    console.log(val);
    let i=0;
    while(i<3){
        res.shift();
        i++;
    }
    console.log(res);
    res.unshift(val);
    console.log(res);
    operate(res);

}


/*for(let j=0; j<userInput.length;j++){//j=0,
if(userInput.includes(operators[j])){
  userInput.filter(keyword => searchString.includes(keyword));//+, -, 
  position=userInput.search(operators[j]); 
  first=userInput[j-1];
  opr=userInput[j];
  second=userInput[j+1];
  console.log(first);
  console.log(opr);
  console.log(second);
  
}
else{ continue;}
}
*/


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

/*switch(userInput.includes(a)){

case "+":
    sum()



}*/