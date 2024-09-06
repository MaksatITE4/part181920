// 1 task
/*
let number = prompt("Введите число: ")
if(number % 2  === 0) {
    alert("Четное число")
} else {
    alert("Нечетное число")
}

// 2 task
let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");

if (num1 > num2) {
    console.log(`Наибольшее число: ${num1}`);
} else if (num2 > num1) {
    console.log(`Наибольшее число: ${num2}`);
} else {
    console.log("Числа равны.");
}

// 3 task
let year = prompt("Введите год : ")
if (year % 4 === 0) {
    console.log('Является високосным годом') 
} else {
    console.log('Не являеться високосным годом')
}

// 4 task
let variable = prompt("Введите значение переменной:");
let numVariable = Number(variable);
if (typeof numVariable === 'number' && !isNaN(numVariable)) {
    alert("Переменная является числом.");
} else if (typeof variable === 'string') {
    alert("Переменная является строкой.");
} else {
    alert("Переменная не является строкой или числом.");
}

// 5 task
let hour = prompt("Введите число: ")
if(hour >= 6 && hour <= 12) {
    alert("Dobryi utro")
} else if (hour <= 18) {
    alert("dobryi den")
} else {
    alert("dobryi nochi")
}

// 6 task
let num1 = Number(prompt("Введите 1 число:"));
let num2 = Number(prompt("Введите 2 число:"));
let num3 = Number(prompt("Введите 3 число:"));

if (num1 >= num2 && num1 >= num3) {
    console.log(`Наибольшее число: ${num1}`); 
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`Наибольшее число: ${num2}`);
} else if (num3 >= num1 && num3 >= num2) {
    console.log(`Наибольшее число: ${num3}`);
} else {
    console.log('Числа равны');
}

// 7 task 
let login = prompt("Введите логин")
let password = prompt("Введите пароль")
if(login === "kazuya44" && password === "20010412") {
    alert("Доступ разрешен")
} else {
    alert("Доступ запрещен")
}

// 8 task
let month = prompt("Введите число месяца от 1 до 12");
if(month == 1) {
    console.log("january")
} else if (month == 2) {
    console.log("febryary")
} else if (month == 3) {
    console.log("march")
} else if (month == 4) {
    console.log("april")
} else if (month == 5) {
    console.log("may")
} else if (month == 6) {
    console.log("june")
} else if (month == 7) {
    console.log("july")
} else if (month == 8) {
    console.log("august")
} else if (month == 9) {
    console.log("september")
} else if (month == 10) {
    console.log("october")
} else if (month == 11) {
    console.log("november")
} else if (month == 12) {
    console.log("december")
} else {
    console.log("Error")
} 

// 9 task
let age = prompt("Введите значение")
if(age <= 12) {
    console.log("Детский возраст")
} else if (age >= 12 && age <= 18) {
    console.log("Подростковый возраст")
} else if (age >= 18 && age <= 65) {
    console.log("Взрослый возраст")
} else if (age >= 65){
    console.log("Пожилой возраст")
}

// 10 task
let seasonOfTheYear = prompt("Введите месяц от 1 до 12:")
if(seasonOfTheYear == 12 || seasonOfTheYear == 1 || seasonOfTheYear == 2) {
    console.log("winter-зима") 
} else if (seasonOfTheYear == 3 || seasonOfTheYear == 4 || seasonOfTheYear == 5) {
    console.log("spring-весна")
} else if (seasonOfTheYear == 6 || seasonOfTheYear == 7 || seasonOfTheYear == 8) {
    console.log("summer-лето")
} else if (seasonOfTheYear == 9 || seasonOfTheYear == 10 || seasonOfTheYear == 11) {
    console.log("autumn-осень")
} else {
    console.log("Неккоректный месяц")
}

// medium tasks:
// 1 task
let guests = prompt("Введите количество гостей:");
if (guests <= 1) {
    console.log("Разрезы не требуются"); 
} else if (guests <= 2) {
    console.log("1 разрез"); 
} else if (guests % 2 === 0) {
    console.log("разрезов: " + guests / 2); 
} else {
    console.log("разрезов: " + guests); 
}

// 2 task
let apples = prompt("Введите кол. яблок: ")
if(apples % 3 === 0) {
    console.log("Яблоки можно разделить поровну между тремя детьми.");
} else {
    console.log("Яблоки нельзя разделить поровну между тремя детьми.");
}

// 3 task 
let a = prompt("Введите длину А")
let b = prompt("Введите длину Б")
let c = prompt("Введите длину С")
if(a + b > c && a + c > b && b + c > a) {
    console.log("yes")
} else {
    console.log("no")
}

// 4 task
let a = prompt("Введите длину А")
let b = prompt("Введите длину Б")
let c = prompt("Введите длину С")
if (a + b > c && a + c > b && b + c > a) {
    console.log("Несуществующий");
} else if (a === b && b === c) {
    console.log("Равносторонний");
} else if (a === b || a === c || b === c) {
    console.log("Равнобедренный");
} else {
    console.log("Разносторонний");
}
*/
// 5 task 
let weightOfGoods = parseFloat(prompt("Введите вес товара:"));
let countryOfDelivery = prompt("Введите страну доставки:");

if (weightOfGoods >= 1 && countryOfDelivery === "Kazakhstan") {
    console.log("Стоимость доставки составляет 10 долларов");
} else if (weightOfGoods >= 1 && weightOfGoods <= 5 && countryOfDelivery === "USA") {
    console.log("Стоимость доставки составляет 20 долларов");
} else if (weightOfGoods >= 1 && weightOfGoods <= 5 && countryOfDelivery === "UAE") {
    console.log("Стоимость доставки составляет 30 долларов");
} else if (weightOfGoods >= 5 && countryOfDelivery === "Japan") {
    console.log("Стоимость доставки составляет 50 долларов");
} else {
    console.log("Неправильно введено значение");
}


