let PRODUCTS_NAMES = ['Warcraft 3: Reforged', 'Grand Theft Auto 5', 'Half-Life 2',
    'StarCraft 2', 'Diablo 2', 'FlatOut 2', 'Counter-Strike', 'Total War: Warhammer'
];
let IMGS = ['https://i.playground.ru/e/YNCtBoZigQh3r0BdVeBMLg.jpeg', 'https://i.playground.ru/e/Tf0mwt9jPRX8OLPMsWupgQ.jpeg',
    'https://i.playground.ru/e/T4l7p0eVZeOBAFQOy8BIpQ.jpeg', 'https://i.playground.ru/e/KloMCCgISWymrCtkSEUHdA.jpeg',
    'https://i.playground.ru/e/kLs-qQnqWHLdhb0D1C4SYQ.jpeg', 'https://i.playground.ru/e/HxMV0wHI5hayJtUt1teXfA.jpeg',
    'https://i.playground.ru/e/u18h2k2WwaVr3NNeYt21Gw.jpeg', 'https://i.playground.ru/e/LX-A7f-m02jn2CtRwveB_w.jpeg'
];
let PRICES = [25, 20, 10, 20, 5, 5, 5, 15];
let IDS = [0, 1, 2, 3, 4, 5, 6, 7];

function createProduct(index) {
    return {
        product_name: PRODUCTS_NAMES[index],
        price: PRICES[index],
        product_id: IDS[index],
        img: IMGS[index],
        quantity: 0,
        catalog_template() {
            return `
                        <div class="product-item" data-id="${this.product_id}">
                            <img src="${this.img+'?225x311'}" alt="${this.product_name}">
                            <div class="desc">
                                <h3>${this.product_name}</h3>
                                <p>${this.price}$</p>
                                <button name="buy" class="btn"
                                    data-id="${this.product_id}"
                                    data-name="${this.product_name}"
                                    data-price="${this.price}">
                                    Купить
                                </button>
                            </div>
                        </div>
                    `
        },
        cart_template() {
            return `
                        <div class="cart-item" data-id="${this.product_id}">
                            <img src="${this.img+'?69x93'}" alt="${this.product_name}">
                            <div class="product-bio">
                                <p class="cart-item-name">${this.product_name}</p>
                                <p class="product-price right-block"> ${this.price}$</p>
								<div class="quantity">
									<button name="count-modifier" class="btn" data-id="${this.product_id}" data-modify="-1">-</button>
									<input name="quantity" type="text" onclick="event.target.select()" data-id="${this.product_id}" value="${this.quantity}">
									<button name="count-modifier" class="btn" data-id="${this.product_id}" data-modify="+1">+</button>
								</div><br>
								
							<button name="remove" class="btn"
								data-id="${this.product_id}"
								data-name="${this.product_name}"
								data-price="${this.price}">
								X
							</button>
							</div>
						</div>
                    `
        }
    }
};

let cart = {
    items: [],
    container: '.cart-block',
    btn: '.btn-cart',
    init() {
		this._render();
        document.querySelector(this.btn).addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
        document.querySelector(this.container).addEventListener('change', (evt) => {
            if (evt.target.name == "remove" || evt.target.name == "count-modifier"|| evt.target.name == "quantity") {
                let ds = evt.target.dataset;
                let item = this.items.find(x => x.product_id === +ds.id);
                if (evt.target.name == 'quantity') {
                    item.quantity = +evt.target.value;
                    console.log(item.quantity == 0 ? `${item.product_name} удалён из корзины.` 
					: `Количество ${item.product_name} теперь равно ${item.quantity}.`);
                }
				
                if (item.quantity == 0) this.items.splice(this.items.indexOf(item), 1);
					this._render();
            }
            if (evt.target.name == "wipe") this.wipe();
        })
		document.querySelector(this.container).addEventListener('click', (evt) => {
            if (evt.target.name == "remove" || evt.target.name == "count-modifier"|| evt.target.name == "quantity") {
                let ds = evt.target.dataset;
                let item = this.items.find(x => x.product_id === +ds.id);
                if (evt.target.name == 'remove') {
                    item.quantity = 0;
                    this._render();
                    console.log(`${ds.name} удалён из корзины.`);
                }
                if (evt.target.name == 'count-modifier') {
                    item.quantity += +ds.modify;
                    console.log(item.quantity == 0 ? `${item.product_name} удалён из корзины.` 
					: `Количество ${item.product_name} ${ds.modify == "+1" ? "увеличено" : "уменьшено"} и теперь равно ${item.quantity}.`);
                }
				
                if (item.quantity == 0) this.items.splice(this.items.indexOf(item), 1);
				
				if (evt.target.name == 'quantity') 
					evt.target.select();
				else 
					this._render();
            }
            if (evt.target.name == "wipe") this.wipe();
        })
    },
    _get_price(items) {
        return items.reduce((a, b) => +a + +b["price"] * b["quantity"], 0)
    },
    _get_count(items) {
        return items.reduce((a, b) => +a + +b["quantity"], 0)
    },
    _do_wipe(items) {
        return items.reduce((a, b) => b["quantity"] = 0, 0)
    },
	_prepare(domstroke) {
		if (this.items.length == 0)
            return '<p>Корзина пуста.</p>';
        else
            return domstroke += `<hr>
						Товаров в корзине: ${this._get_count(this.items)} (стаков: ${this.items.length})<br>
						Общая стоимость: ${this._get_price(this.items)}$
						<button name="wipe" class="btn">Очистить корзину</button>
						`; //костыльчик
	},
    _render() {
        let container = document.querySelector(this.container);
        let domString = '';

        this.items.forEach(item => {
            domString += item.cart_template();
        });

		container.innerHTML = this._prepare(domString);
    },
    wipe() {
        this._do_wipe(this.items)
        this.items.splice(0, this.items.length);
        this._render();
        console.log('Корзина очищена.');
    }
};

let catalog = {
    items: [],
    container: '.products',

    init() {
        this._fetchItems();
        this._render();

        document.querySelector(this.container).addEventListener('click', (evt) => {
            if (evt.target.name == 'buy') {
                let product = evt.target.dataset;
                let item = this.items.find(x => x.product_id === +product.id);
                if (cart.items.indexOf(item) < 0) cart.items.push(item);
                item.quantity++;
                cart._render();
                console.log(`${product.name} добавлен в корзину.`);
            }
        })
    },
    _fetchItems() {
        let length = IDS.length;

        for (let i = 0; i < length; i++) {
            this.items.push(createProduct(i));
        }
    },
    _render() {
        let container = document.querySelector(this.container);
        let domString = '';

        this.items.forEach(item => {
            domString += item.catalog_template();
        })
        container.innerHTML = domString;
    }
};
cart.init();
catalog.init();