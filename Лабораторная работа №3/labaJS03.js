function task_1 () { 
    spec = new Array();
    spec[0] = Math.round( 6 * Math.pow(Math.PI,2) + 3 * Math.exp(8));
    spec[1] = Math.round( 2 * Math.cos(4) + Math.cos(12) + 8*Math.exp(3));
    spec[2] = Math.round( 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3));
    spec[3] = Math.round( 2*Math.tan(5) + 5*Math.PI + Math.sqrt(12));
        let max = spec[0];
        let min = spec[0];
        let numberMax=1;
        let numberMin=1;
        for(var i=1; i<4; i++)
    {
        if(max < spec[i]){
        max = spec[i];
        numberMax=i
        }
    if(min > spec[i]){
    min = spec[i];
    numberMin=i;
        }
    }
    document.getElementById("zadanie_1").innerHTML=max + " индекс: "+ numberMax+"<br>";
    document.getElementById("zadanie_1").innerHTML+=min + " индекс: " + numberMin;

    }


function task_1_1 () { 
    spec = new Array();
    spec[0] = Math.round( 6 * Math.pow(Math.PI,2) + 3 * Math.exp(8));
    spec[1] = Math.round( 2 * Math.cos(4) + Math.cos(12) + 8*Math.exp(3));
    spec[2] = Math.round( 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3));
    spec[3] = Math.round( 2*Math.tan(5) + 5*Math.PI + Math.sqrt(12));
    
    document.getElementById("zadanie_1_1").innerHTML=("Максимальный элемент массива: " + Math.max(...spec) + " <br>  индекс максимального элемента массива: " + spec.indexOf(Math.max(...spec)) +" <br>");
    document.getElementById("zadanie_1_1").innerHTML+=("Минимальный элемент массива: " + Math.min(...spec) + " <br>  индекс миинмального элемента массива: " + spec.indexOf(Math.min(...spec)));

    }

function task_2() { 

    let myyyr  = new Array("pow", "pop", "push", "shift","round","floor","sline", "sort") ; 
    
    let all_math = new Set (Object.getOwnPropertyNames(Math));
    let all_array = new Set (Object.getOwnPropertyNames(Array.prototype));
    var all_array_of_list = myyyr.filter(key => all_array.has(key));
    var all_math_of_list = myyyr.filter(key => all_math.has(key));
    document.getElementById("zadanie_2").innerHTML="Методы относящиеся к Array : " + all_array_of_list  + " ____ всего элементов в массиве : " + all_array_of_list.length ;
    document.getElementById("zadanie_2").innerHTML+=" <br> Методы относящиеся к Math : " + all_math_of_list  + " ____ всего элементов в массиве : " + all_math_of_list.length + "<br> " ;  
    DOPmath = prompt("Хотите добавить какой-то элемент метод к массиву с методами Math ?");
    DOParray = prompt("Хотите добавить какой-то элемент метод к массиву с методами Array?");
    all_array_of_list.push(DOParray);
    all_math_of_list.push(DOPmath); 
    document.getElementById("zadanie_2").innerHTML+="Методы относящиеся к Array : " + all_array_of_list  + " ____ всего элементов в массиве : " + all_array_of_list.length ;
    document.getElementById("zadanie_2").innerHTML+=" <br> Методы относящиеся к Math : " + all_math_of_list  + " ____ всего элементов в массиве : " + all_math_of_list.length + "<br> " ;  
    }

function task_3() { 
     Iam = new String ("Драч Кирилл Алексеевич")  ;  
    let IamUPPER = Iam.toUpperCase() ; 
    let IamLOWER = Iam.toLowerCase() ; 
    document.getElementById("zadanie_3").innerHTML= "Строка " +   Iam + " ___ Её длина = " + Iam.length + "<br> Строка строчными : " + IamUPPER +" ___ Её длина = " + IamUPPER.length +   "<br> Строка прописными : " + IamLOWER + " ___ Её длина = " + IamLOWER.length ; 
    let UpPlusLow = IamLOWER.concat(IamUPPER, " ") ; 
    document.getElementById("zadanie_3").innerHTML+="<br>" +  UpPlusLow ; 
    document.getElementById("zadanie_3").innerHTML+=Iam.replace(Iam, "ДКА");
    
     
}

function task_4() { 
    let x = new Date () ; 
    document.getElementById("zadanie_4").innerHTML=" <table dorder= \"1\"> <tr> <th>Год </th> <th>"+ x.getFullYear()+"</th>  </tr>  "+
    " <tr> <th>Месяц </th> <th>"+ (x.getMonth()+1)+"</th>  </tr> " + 
    " <tr> <th>День недели</th> <th>" +  x.getDay()+"</th>  </tr> " + 
    " <tr> <th>Час </th> <th>"+ x.getHours() + "</th>  </tr> " + 
    " <tr> <th>Минуты </th> <th>" +  x.getMinutes()+ "</th>  </tr> " + 
    " <tr> <th>Секунды </th> <th>"+ x.getSeconds()+"</th>  </tr> </table>  " ; 

     
}
   // document.getElementById("zadanie_2").innerHTML+="<input type=\"text\" required></input>"
  
  
  
    //<form name=\"kisa\">  <input type=\"text\" name=\"dopolnitMATH\" required></input></form>" +
    //"<p align='center'><input type='button' class='button'   value='Введите дополнительный элементы к Math ' onclick='dopelem()' /> </p>" ; 
  
  
  
    //let DOPmath = document.forms.kisa.elements.dopolnitMATH.value ;  От Леры 
    //DOPmath = prompt("Хотите добавить какой-то элемент метод к массиву с методами Math ?");
    //DOParray = prompt("Хотите добавить какой-то элемент метод к массиву с методами Array?");
    //all_array_of_list.push(DOParray);
    //all_math_of_list.push(DOPmath); 
    //document.getElementById("zadanie_2").innerHTML+="Методы относящиеся к Array : " + all_array_of_list ;
    //document.getElementById("zadanie_2").innerHTML+=" <br> Методы относящиеся к Math : " + all_math_of_list + "<br> " ;  
    //document.getElementById("zadanie_2").innerHTML+="<input type=\"text\" required></input>" ; 
    //document.getElementById("zadanie_2").innerHTML+="<textarea rows=\"6\" cols=\"40\" required=> </textarea>" ; 
    //DOPmath = prompt("Хотите добавить какой-то элемент метод к массиву с методами Math ?")
    //console.log(all_array_of_list);
    //console.log(all_array);

