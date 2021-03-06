//перевод градусов цельсия в фаренгейтские
function lesson1_task1() {
    let t = +prompt("Введите температуру в градусах по цельсию");
    if (isNaN(t)) log("Вы не ввели температуру!");
    else log((t * 9 / 5 + 32));
}

//Объявить две переменные: admin и name. Записать в name строку «Василий»;
//Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
function lesson1_task2() {
    let admin, name;
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