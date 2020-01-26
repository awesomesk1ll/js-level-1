//1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
//в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: 
//{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
function nan_2_zero(val) {
    return isNaN(val) ? 0 : val
}

function val_2_object(num) {
    let arr = Object.values(num + '').reverse();
    if (num > 999 || num < -999) {
        log("Число содержит больше 3 знаков!");
        return ({})
    } else return ({
        'единицы': nan_2_zero(+arr[0]),
        'десятки': nan_2_zero(+arr[1]),
        'сотни': nan_2_zero(+arr[2])
    })
}

function show_job_4(value) {
    log("Вызываем val_2_object(" + value + ");");
    log(val_2_object(value));
}

function lesson4_task1() {
    show_job_4(345);
    show_job_4(10);
    show_job_4(12345);
    show_job_4("-987");
}

// начало задания 2 - игра быки и коровы
// генератор возвращает случайную пачку чисел из "0123456789" склееные в строку длинной lenght, БЕЗ ПОВТОРОВ!
function new_secret(length, passlist = "0123456789") {
    let base = Array.from(passlist);
    let str = '';
    for (let i = 0; i < length; i++) {
        n = Math.floor(Math.random() * base.length);
        str += base[n];
        base.splice(n, 1);
    }
    return (isNaN(length) || length > 10) ? log("Сложность больше 10 недопустима.") : str
    //под комментарием старый однострочный вариант, который глупее, т.к не исключает повторы (уже принципиально не подходит т.к. check_repeats())
    //return isNaN(lenght) ? "" : (Math.floor(Math.random()*Math.pow(10,lenght))+'').padStart(lenght,"0")
}

//проверка на содержащиеся повторные символы
function check_repeats(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str.indexOf(str[i], i + 1) >= 0) {
            log("Повторение " + str[i] + ". Нужно вводить без повторов!");
            return true
        }
    }
    return false
}

// Основной игровой объект "Быки и коровы"
let bg = {
    secret: "",
    ready: undefined,
    hardness: 4, // тут решаем сколько символов надо отгадывать
    turns: 0,
    player_turn_text: null,
    on_prompt_text: function(str) {
        return "Угадайте " + this.hardness + "-значное число!\n" + str
    },
    play: function() {
        this.get_secret();
        this.player_turn();
    },
    get_secret: function() {
        if (this.secret == "") {
            this.secret = new_secret(this.hardness)
            //log(this.secret); вывод секрета в консоль при генерации
        }
    },
    player_turn: function(txt = '') {
        this.turns++;
        this.player_turn_text = prompt(this.on_prompt_text(txt));
        if (this.player_turn_text != null && this.player_turn_text.length == this.hardness && !check_repeats(this.player_turn_text)) {
            this.check_player_turn();
        } else if (this.player_turn_text == null) {
            log("[ход " + this.turns + "] Игрок сдался! Загадано было число " + this.secret);
            this.stop_game();
        } else {
            log("[ход " + this.turns + "] Ошибка ввода! Введите " + this.hardness + "-значное число без повторов!");
            this.player_turn("Ошибка ввода! Введите " + this.hardness + "-значное число без повторов!");
        }
    },
    check_player_turn: function() {
        let a = 0, 
			b = 0; //счётчики точного совпадения и простого вхождения
        for (let i = 0; i < this.hardness; i++) {
            if (this.player_turn_text[i] == this.secret[i]) {
                a++;
            } else if (this.secret.indexOf(this.player_turn_text[i]) >= 0) {
                b++;
            }
        }
        if (a == this.hardness) {
            log("Игрок угадал [" + this.secret + "].");
            log("Победа за " + this.turns + " ходов! Конец игры!");
            this.stop_game();
        } else {
            log("[" + this.player_turn_text + "] Быков - " + a + ", коров - " + b + ", попробуйте еще раз!");
            this.player_turn("[" + this.player_turn_text + "] Быков - " + a + ", коров - " + b + ", попробуйте еще раз!");
        }
    },
    stop_game: function() {
        this.secret = "";
        this.turns = 0;
		this.ready = null;
    }
};

//Запуск игры "Быки и Коровы", объект bg
function lesson4_task2() {
    // bg.hardness = 0; //можно поменять "сложность" от 0 до 10, всё работает!
	log("Игра Быки и Коровы! Необходимо угадать загаданное число.");
    if (bg.ready == undefined) {
	log("Бык - точное совпадение цифры и её позиции,");
	log("Корова - присутствие цифры, но несовпадение её позиции,");
	log("Для запуска нажмите на кнопку task2() ещё раз.");
        bg.ready = false;
    } else bg.ready = true;

    if (bg.ready) {
        bg.play();
    }
}