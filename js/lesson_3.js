// метод перебора делителей
function isPrime(n) {
    let i = 2,
        j = false;

    if (n <= 1) return false // не подходит

    while (i * i <= n && !j) {
        if (n % i == 0) {
            j = true;
        }
        i++;
    }
    return !j
}

function lesson3_task1() {
    let counter = 0;
    while (counter <= 100) {
        if (isPrime(counter)) {
            log(counter);
        }
        counter++;
    }
}

function lesson3_task2() {
    log("quote('Сергей Твардовский','Не делать')");
}

function lesson3_task3() {
    log("quote('Сергей Твардовский','Не делать')");
}

//4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
function lesson3_task4() {
    for (i = 0; i <= 9; log(i++)) {
        // здесь пусто ;
    }
}

function pyramid(str, lines) {
    if (lines) {
        log(str);
        str += str.substr(0, 1);
        pyramid(str, lines - 1);
    }
}

function lesson3_task5() {
    pyramid("x", 20);
}