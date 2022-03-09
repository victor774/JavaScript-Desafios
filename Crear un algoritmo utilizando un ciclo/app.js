let opcion = Number(
    prompt("¿Que operacion decea realizar?\n\n--------MENU--------\n1-Suma\n2-Resta\n3-Multiplicacion\n4-Potencia\nElija una opcion: ")
    );
    
    let num1 = Number(prompt("Numero 1: "));
    let num2 = Number(prompt("Numero 2: "));
    let i=0,cont=0;
    
    switch(opcion){
        case 1:
            for(i=0;i<num1+num2;i++){
                cont++;
            }
            window.alert("La suma es: " + cont);
            break;
    
        case 2:
            if(num1>num2) /*Si el primer numero es mayor la resta es positivo*/
            {
                while(num2<num1){
                    num2++;
                    i++;
                }
                window.alert("La resta es: " +i);
            }
            else{  /* Si el segundo numero es mayor la resta es negativa*/
                while(num1<num2){
                    num1++;
                    i++;
                }
                window.alert("La resta es: "+ (i)*(-1));
            }
            break;
    
            case 3:
                for(i=0;i<num1;i++){
                    cont+=num2;
                }
                window.alert("La multiplicacion es: "+ cont);
                break;
            
            case 4: let aux=1;
                while(num2>0){ 
                    aux*=num1; /*multiplico la base por si misma la cantidad de veces del exponente*/
                    num2--;
                }
                window.alert("La potencia es: "+aux);
                break;
    
            default: window.alert("Ingresaste un valor invalido, ingresa del 1 al 4 en el menu para operar");
            break;
        
    }