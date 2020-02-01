let lesson_5_shop_ready = false;

function lesson5_task4() {
    let $catalog = document.querySelector('#catalog');
    let $cart = document.querySelector('#cart');

    if (lesson_5_shop_ready == false) {
        log("Режим магазина! Добавляйте товары в корзину!");
        log("Для того что бы скрыть магазин, нажмите на кнопку task4() ещё раз.");
        lesson_5_shop_ready = true;
        $catalog.classList.remove('hide');
        $cart.classList.remove('hide');
    } else {
        log("Режим магазина скрыт!");
        lesson_5_shop_ready = false;
        $catalog.classList.add('hide');
        $cart.classList.add('hide');
    }
}

function lesson5_task3() {
    log("Задание необязательное. Пока не делал! ");
}

function lesson5_task2() {
    log("Задание необязательное. Пока не делал! ");
}

function lesson5_task1() {
    log("Задание необязательное. Пока не делал! ");
}