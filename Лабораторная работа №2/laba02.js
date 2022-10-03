   // Лабораторная работа №1. скриптовые языки программирования 
   // Задание №1 
   function fun1() {
        alert('Вас приветствует учебный центр ');
        name=prompt('Введите Ваше имя:');
        alert('Добро пожаловать на наши курсы, ' + name );
        const answer=confirm('Хотите стать Web-дизайнером?');
        if (answer) {
            alert ('"Учите стили CSS и JavaScript!');
         }
        else {
            alert ('Упускаете время!');
         }
     }

    //Задание №2 

        function fun2_1() {
       
        alert('Пункт 1. Введите два чиса для суммирования ');
        let x1=Number(prompt('Число №1 '));
        let x2=Number(prompt('Число №2 '));
        let Sum = x1 + x2 ;
        document.body.innerHTML('1) '+ x1 +  ' + ' +  x2 + ' =' + Sum + ' <br/> ');

        }
        
        function fun2_2() {
        alert('Пункт 2.Введите два числа') ;
        let a1=prompt('Число №1 ');
        let a2=prompt('Число №2 ');
        document.write('Результат сложения строк ' + a1 + a2  + ' <br/> ');
        
        }
        
        function fun2_3() {
        alert('Пункт 3. Введите два числа') ;
        let b1=Number(prompt('Число №1 '));
        let b2=prompt('Число №2 ');
        let number_strok = b1 + b2  ;
        document.write('Результат сложения числа и строки ' + number_strok + ' <br/> ');
        }

        function fun2_4() {
        alert('Пункт 4. Введите два числа') ;
        let c1=prompt('Число №1');
        let c2=Number(prompt('Число №2'));
        let yt = c1 + c2  ;
        document.write('Результат сложения строки и числа ' + yt + ' <br/> ' );
        }

    //Задание №3

        function fun3() { 
        let x=Number(prompt('x =  '));
        let y=Number(prompt('y =  '));
        let V1 = (35*y - 25*x)/5 +235 ;
        let V2 = (8*y/x+5*x/y - 43) * 6 ;
        alert('результат деления (35*y - 25*x)/5 +235 на (8*y/x+5*x/y - 43) * 6 -->');
        let ostatoc = V1 % V2 ; 
        alert (ostatoc );
        document.write('x = ');
        document.write(x +  '<br/>');
        document.write('y = ')
        document.write(y +  '<br/>');
        document.write('V1 = ');
        document.write(V1 +  '<br/>');
        document.write('V2 = ');
        document.write(V2 + '<br/> ');
        document.write('Остаток = ');
        document.write(ostatoc);
        }

    //Задание №4  document.body.innerHTML document.getElementById('elem').style.

    function fun4() {
        alert('Введите число согласно условию');
        let rime=Number(prompt()) ; 
        let ostatoc = rime%5 ;
        if (rime > 40 || rime < 20  && rime != 15 && ostatoc===0 ) {
            
            document.write = 'Правильное значение';
        
             }
         else
             {document.write = 'Неправильное значение';  
             }
     }


    //Задание #5 


         function fun5() {
            alert('Вас приветствует учебный центр ');
            let rime1=Number(prompt(' число №1  ')) ;
            let rime2=Number(prompt(' число №2  ')) ;
            (rime1 < rime2)?document.write(rime2 + ' больше ' + rime1): document.write( rime1 + ' больше ' + rime2);
         }


    //Задание №6 


         function fun6_new_Date(){
            let day= new Date ( );
            alert( day ) ;
        }

         function fun6_SwitchCase(){
            f=prompt('Введите день недели по счету');
            switch (f) {
                case '1': alert('Monday');
                    break;
                case '2': alert('Tuesday');
                  break;
                case '3': alert('Wednesday');
                    break;
                case '4': alert('Thursday');
                    break;
                case '5': alert('Friday');
                    break;
                case '6': alert('Saturday');
                    break;
                case '7': alert('Sunday');
                    break;
              }
            }

    //Задание №7 

   function fun7() {
       try {
           var first;
           aletr(first);
       } catch {
           alert('переменная не определена \nПочини код ');
       }
   }

     //Задание ДВА

   function TABLE1 () {
       nub1=prompt('число столбцов');
       nub2=prompt('число строк');
       document.write("<table align=\"center\" border=\"1\">");
       for (var i = 1; i <= nub1; i++ ) {
           document.write("<tr>");
           document.write("<td>" + i + "</td>");

           for ( var j = 2; j <= nub2; j++ ) {
               document.write("<td>" + i * j + "</td>");
           }
           document.write("</tr>");
       }
       document.write("</table>");
   }

    // Задание ТРИ
  function TABLE2 () {
     let    a2=Number(prompt('Начальный радиус ')) ;
     let    b2=Number(prompt('Конечный радиус '));
      document.write("<table align=\"center\" border=\"1\"> <tr> <th>Радиус</th><th>Площадь</hd><th>Длина окружности</th></tr>");
       do  {

           s=Math.round(Math.pow(a2,2)*Math.PI);
           l=Math.round(a2*2*Math.PI);
           document.write("<tr><td>" + a2 + "</td>" + "<td>" + s + "</td>" + "<td>" + l + "</td></tr>");
           a2=(a2*10+3)/10 ;
           }
       while(a2 <= b2);
           
       document.write("</table>");
      }

   // Задание Четыре 
   
   function TABLE3 () {
       Drob=Number(prompt('Введите дробное число'));
       Celo=Number(prompt('Введите целое число'));

       document.write("<table align=\"center\" border=\"1\"> <tr> <th>Число дробное </th><th>Метод</hd><th>Результат</th><th>Описание метода</th></tr>");

       document.write( "<tr><th>"+  Drob +  "</th><td>toExponential</td><td>" + Drob.toExponential(3) + "</td><td>представляет число в \n" +
           "экспоненциальной форме</td></tr>");

       document.write( "<tr><th>"+  Drob +  "</th><td>toFixed</td><td>" + Drob.toFixed(3) + "</td><td>представляет число в форме с \n фиксированным количеством цифр после точки</td></tr>");

       document.write( "<tr><th>"+  Drob +  "</th><td>toPrecision</td><td>" + Drob.toPrecision(3) + "</td><td>представляет число с заданным общим \n" +

           "количеством значащих цифр.</td></tr>");

       document.write( "<tr><th>"+  Drob +  "</th><td>toString</td><td>" + Drob.toString(2) + "</td><td>возвращает строковое представление числа в \n" +
           "системе счисления с указанным основанием. </td></tr>");

       document.write(" <tr> <th>Число целое-- </th><th>Метод</hd><th>Результат</th><th>Описание метода</th></tr>");

       document.write( "<tr><th>"+  Celo +  "</th><td>toExponential</td><td>" + Celo.toExponential(3) + "</td><td>представляет число в \n" +
           "экспоненциальной форме</td></tr>");

       document.write( "<tr><th>"+  Celo +  "</th><td>toFixed</td><td>" + Celo.toFixed(3) + "</td><td>представляет число в форме с \n фиксированным количеством цифр после точки</td></tr>");

       document.write( "<tr><th>"+  Celo +  "</th><td>toPrecision</td><td>" + Celo.toPrecision(3) + "</td><td>представляет число с заданным общим \n" +
           "количеством значащих цифр.</td></tr>");

       document.write( "<tr><th>"+  Celo +  "</th><td>toString</td><td>" + Celo.toString(2) + "</td><td>возвращает строковое представление числа в \n" +
           "системе счисления с указанным основанием. </td></tr>");

       document.write("</table>");
   }

    // Конец 