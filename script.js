function calcSum() {
    let num1 = document.getElementsByName("num1")[0].value;
    let num2 = document.getElementsByName("num2")[0].value;
    let sum = (Number(num1) + Number(num2));
    document.getElementsByName("sum")[0].value = sum;
    
}

function calcSum2() {
    let num1 = document.getElementsByName("num1")[0].value;
    let num2 = document.getElementsByName("num2")[0].value;
    let sum = (Number(num1) - Number(num2));
    document.getElementsByName("sum")[0].value = sum;
    
}

function calcSum3() {
    let num1 = document.getElementsByName("num1")[0].value;
    let num2 = document.getElementsByName("num2")[0].value;
    let sum = (Number(num1) * Number(num2));
    document.getElementsByName("sum")[0].value = sum;
    
}

function calcSum4() {
    let num1 = document.getElementsByName("num1")[0].value;
    let num2 = document.getElementsByName("num2")[0].value;
    let sum = (Number(num1) / Number(num2));
    document.getElementsByName("sum")[0].value = sum;
    
}