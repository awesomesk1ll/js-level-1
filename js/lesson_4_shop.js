let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard', 'Speakers'];
let PRICES = [100, 120, 1000, 15, 18, 70];
let IDS = [0, 1, 2, 3, 4, 5];

let products = [];

let basket = {
    products: [],
    price: 0,
    calc_price: function() {
        this.price = countBasketPrice(this.products);
    }
}

function create_products_DTO(length = IDS.length, products = products) {
    for (let i = 0; i < length; i++) {
        products.push(create_product(i))
    }
}

function create_product(index) {
    return {
        product_name: PRODUCTS_NAMES[index],
        product_price: PRICES[index],
        product_id: IDS[index]
    }
}

function countBasketPrice(products = []) {
    let sum = 0;
    let len = Object.keys(products).length;

    for (let n = 0; n < len; n++) {
        sum += products[n].product_price;
    }
    return sum
}

//redefinition lesson #3 task2 & task3 shop functions
function lesson3_task2() {
    // создать товары и загрузить их в корзину
    log("Создаем от 3 до 6 товаров и добавляем их в массив products:");
    create_products_DTO(Math.floor(Math.random() * 4 + 3), products);
    log(products);
    log("Загружаем products в basket:");
    basket.products = {...products};
    log(basket);
}

function lesson3_task3() {
    // Посчитать стоимость товаров в корзине
    log("Oбращаемся к методу basket.calc_price(),");
    basket.calc_price();
    log("Проверяем свойство basket.price:");
    log(basket.price);
}

function lesson4_task3() {
    log("Урок 3 - task2() - Создание товаров и помещение в корзину. (");
    log("Урок 3 - task3() - Подсчёт стоимости корзины.");
}