function task2 () {
alert('Пункт 1. Введите два чиса для суммирования ')
x1=Number(prompt('Число №1 '))
x2=Number(prompt('Число №2 '))
var Sum = x1 + x2 
document.write('1) '+ x1 +  ' + ' +  x2 + ' =' + Sum + ' <br/> ')

alert('Пункт 2.Введите два числа') 
a1=prompt('Число №1 ')
a2=prompt('Число №2 ')
var Strok= a1 + a2  
document.write('Результат сложения  ' + Sum + ' <br/> ')

alert('Пункт 3. Введите два числа') 
b1=Number(prompt('Число №1 '))
b2=prompt('Число №2 ')
var number_strok = b1 + b2  
document.write('Результат сложения числа и строки ' + number_strok + ' <br/> ')

alert('Пункт 4. Введите два числа') 
c1=prompt('Число №1')
c2=Number(prompt('Число №2'))
var yt = c1 + c2  
document.write('Результат сложения строки и числа ' + yt + ' <br/> ' )
}