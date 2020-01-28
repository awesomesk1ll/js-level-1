// генерация html
let lessons = [4, 8, 5, 2 + 1]; // +1 по функционалу корзины
htmlgen();
let logger = document.getElementById("logger");

function htmlgen() {
    document.write("<h2>Домашние задания Javascript - 1 уровень. Схоменко Алексей</h2>");
    document.write("<p class='attention'>Для запуска функции нажмите на кнопку. Все результаты выводятся в консоль.</p>");
    document.write("Очищать консоль перед выполнением?");
    document.write("<input type='checkbox' id='clear' checked></input>");
    for (q = 0; q < lessons.length; q++) {
        document.write("<p class='lessons'>Урок " + (q + 1) + ".");
        for (w = 1; w <= lessons[q]; w++) {
            document.write("<button class='btn' onclick='cl(); lesson" + (q + 1) + "_task" + w + "()'>task" + w + "()</button>");
        }
        document.write("</p>");
    }
    document.write("<div class='log'>console.log() вывод:");
    document.write("<div id='logger'></div>");
    document.write("</div>");
}

//для очистки консоли
function cl() {
    if (document.getElementById("clear").checked == true) {
        console.clear();
        logger.innerHTML = "";
    }
}

//для упрощения
function log(text) {
    console.log(text);
    logger.innerHTML += text + "<br>";
}