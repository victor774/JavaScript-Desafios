let num1 = Number(prompt("Ingrese Numero: "));
let num2 = Number(prompt("Ingrese Numero: "));

function suma(num1,num2){
    return num1+num2;
}

function resta(num1,num2){
    return num1-num2;
}

function mostrar(num){
    window.alert(num)
}

let sumar = suma(num1,num2);
mostrar("La suma es: "+sumar);
let restar = resta(num1,num2);
mostrar("La resta es: "+restar);