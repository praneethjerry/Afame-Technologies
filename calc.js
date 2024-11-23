const display=document.getElementById("display")

function appendToDisplay(input){
    display.value+=input
}
function clearDisplay(){
    display.value=""
}
function del(){
    display.value=display.value.toString().slice(0,-1)

}
function calculate(){
    display.value=evaluation(display.value)

}
function evaluation(expression){
    let numbers=[];
    let operators=[];
    let currentNumber="";
    for(let i=0;i<expression.length;i++){
        let char=expression[i]
        if(char>='0' && char<='9' || char==='.'){
            currentNumber+=char
        }else{
            if(currentNumber!==""){
            numbers.push(parseFloat(currentNumber))
            currentNumber=""
        }
        operators.push(char)
            }
    }
    if(currentNumber!==""){
        numbers.push(parseFloat(currentNumber))
}
    for(let i=0;i<operators.length;i++){
        if(operators[i]==='*'||operators[i]==='/'){
            let num1=numbers[i]
            let num2=numbers[i+1]
            let result=operators[i]==='*'?num1*num2:num1/num2
            numbers.splice(i,2,result)
            operators.splice(i,1)
            i--;

        }
    }
    for(let i=0;i<operators.length;i++){
        if(operators[i]==='+'||operators[i]==='-'){
            let num1=numbers[i]
            let num2=numbers[i+1]
            let result=operators[i]==='+'?num1+num2:num1-num2
            numbers.splice(i,2,result)
            operators.splice(i,1)
            i--;

        }
    }
    return numbers[0]
}