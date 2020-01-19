//Прописываем кнопкам функции по тому что на них написано
var btns = document.getElementsByTagName("Button"); //DOMCollection
[].forEach.call(btns, function(btn) {
    btn.setAttribute("onclick", "cl(); lesson" + btn.parentNode.innerText.substr(5, 1) + "_" + btn.innerText);
}); // разобрался с forEach

//для очистки консоли
function cl() {
    if (document.getElementById('clear').checked == true) console.clear();
}

//для упрощения
function log(text) {
    console.log(text);
}

//перевод градусов цельсия в фаренгейтские
function lesson1_task1() {
    var t = +prompt("Введите температуру в градусах по цельсию");
    if (isNaN(t)) log("Вы не ввели температуру!");
    else log((t * 9 / 5 + 32));
}

//Объявить две переменные: admin и name. Записать в name строку «Василий»;
//Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
function lesson1_task2() {
    var admin, name;
    name = "Василий";
    admin = name;
    log(admin);
}

function lesson1_task3() {
    log('*Чему будет равно JS-выражение 1000 + "108"?');
    log(1000 + "108");
    log("Равно конкатенации приведенного к строке числа 1000 и строки '108'");
}

function lesson1_task4() {
    log("Атрибут defer:");
    log("Атрибут defer сообщает браузеру, что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме, а затем запустить этот скрипт, когда он загрузится.");
    log("Скрипты с defer всегда выполняются, когда дерево DOM готово, но до события DOMContentLoaded.");
    log("Отложенные с помощью defer скрипты сохраняют порядок относительно друг друга, как и обычные скрипты.");
    log("Атрибут defer будет проигнорирован, если в теге <script> нет src.");

    log("Атрибут async");
    log("Страница не ждёт асинхронных скриптов, содержимое обрабатывается и отображается.");
    log("Событие DOMContentLoaded и асинхронные скрипты не ждут друг друга.");
    log("Остальные скрипты не ждут async, и скрипты c async не ждут другие скрипты.");

    log("На практике defer используется для скриптов, которым требуется доступ ко всему DOM и/или важен их относительный порядок выполнения. А async хорош для независимых скриптов, например счётчиков и рекламы, относительный порядок выполнения которых не играет роли.");
}

function lesson2_task1() {
    log("var a = 1, b = 1, c, d;");
    log("c = ++a; alert(c);      // 2");
    log("Ответ: Префиксная запись, возвращаем постинкрементное число.");
    log("d = b++; alert(d);      // 1");
    log("Ответ: Постфиксная запись, возвращаем доинкрементное число.");
    log("c = (2+ ++a); alert(c); // 5");
    log("Ответ: При инициализации переменной 'с' мы увеличили 'а' до 2, а в данном выражении префиксная запись возвратит постинкремент (3), 2 + 3 = 5.");
    log("d = (2+ b++); alert(d); // 4");
    log("Ответ: При инициализации переменной 'd' мы увеличили 'b' до 2, а в данном выражении префиксная запись возвратит преинкремент (2), 2 + 2 = 4.");
    log("Ответ: Хотя само число 'b', также как и 'a' при этом уже станет равно 3.");
    log("alert(a);               // 3");
    log("alert(b);               // 3");
    log("Ответ: Что и требовалось доказать ^_^.");
}

function lesson2_task2() {
    log("var a = 2;");
    log("var x = 1 + (a *= 2)");
    var a = 2;
    log(1 + (a *= 2));
    log("Ответ: 1 + а, которое уже равно 4 (домножено на 2). При повторе выражения уже вывод будет 9");
    //log(1 + (a *= 2)); // 9
}

//3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
//если a и b положительные, вывести их разность;
//если а и b отрицательные, вывести их произведение;
//если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
function do_task3(a, b) {
    if ((a >= 0) && (b >= 0)) {
        return a - b
    } else if ((a < 0) && (b < 0)) {
        return a * b
    } else return a + b
}

function lesson2_task3() {
    var a = 1 // +prompt("Введите а.");
    var b = -6 // +prompt("Введите b.");
    if (isNaN(a) || isNaN(b)) {
        log("Вводите только числа! Попробуйте ещё.");
    } else log(do_task3(a, b)); // a+b // 1 + (-6) = -5 
}

//4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
function lesson2_task4() {
    var a = 12
    switch (a) {
        case 12:
            log(12);
        case 13:
            log(13);
        case 14:
            log(14);
        case 15:
            log(15);
    }
}

//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
function addition(a, b) {
    return a + b
}

function subtraction(a, b) {
    return a - b
}

function multiplication(a, b) {
    return a * b
}

function division(a, b) {
    return a / b
}

function lesson2_task5() {
    log("Сложение (2+3): " + addition(2, 3));
    log("Вычитание (3-1): " + subtraction(3, 1));
    log("Умножение (3*3): " + multiplication(3, 3));
    log("Деление (1/0): " + division(3, 0));
}


//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
//В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) 
//и вернуть полученное значение (использовать switch).
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "сложить":
            return addition(arg1, arg2);
        case "вычесть":
            return subtraction(arg1, arg2);
        case "умножить":
            return multiplication(arg1, arg2);
        case "поделить":
            return division(arg1, arg2);
    }
}

function lesson2_task6() {
    log("Сложение (4+5): " + mathOperation(4, 5, "сложить"));
    log("Вычитание (6-4): " + mathOperation(6, 4, "вычесть"));
    log("Умножение (2*4): " + mathOperation(2, 4, "умножить"));
    log("Деление (5/2): " + mathOperation(5, 2, "поделить"));
}

// 7) *Сравнить null и 0. Попробуйте объяснить результат.
function lesson2_task7() {
    log("typeof(0) - " + typeof(0));
    log("typeof(null) - " + typeof(null));
    log("isNaN(0) - " + isNaN(0));
    log("isNaN(null) - " + isNaN(null));
    log("(null == 0) - " + (null == 0));
    log("(null === 0) - " + (null === 0));
    log("Ответ: Ноль это значение. А null это не значение, это ничего.");
    log("(+null == 0) - " + (+null == 0));
    log("(+null === 0) - " + (+null === 0));
    log("Ответ: А вот если привести его к типу number, результат совсем другой.");
}

//8) *С помощью рекурсии организовать функцию возведения числа в степень. 
//Формат: function power(val, pow), где val – заданное число, pow – степень.
function power(val, pow) {
    //log("val - "+val+",pow - "+pow);
    if (pow == true) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}

function lesson2_task8() {
    log("power(2,4) = " + power(2, 4));
    log("Принцип следующий: функция выполняясь вызывает возвращение значения домноженого на результат этой же функции с уменьшенной на 1 степенью");
    log("т.е. при первой так называемой итерации, функция будет возвращать 2 * power(2,3),");
    log("т.е. при второй функция будет возвращать 2 * 2 * power(2,2),");
    log("т.е. при третьей функция будет возвращать 2 * 2 * 2 * power(2,1),");
    log("В последнем случае, т.к. степень равна 1 функция возвращает просто значение, без вызова самой себя.");
    log("Таким образом в результат первого вызова по сути подставляется return 2 * 2 * 2 * 2.");
}