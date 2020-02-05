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
        catalog_template() {
            return `
                        <div class="product-item" data-id="${this.product_id}">
                            <img src="${this.img+'?225x311'}" alt="${this.product_name}">
                            <div class="desc">
                                <h3>${this.product_name}</h3>
                                <p> ${this.price}$</p>
                                <button class="buy-btn"
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
							<button class="delete-btn"
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
        document.querySelector(this.container).addEventListener('click', (evt) => {
            if (evt.target.classList.contains('delete-btn')) {
                let product = evt.target.dataset;

                this.items.splice(this.items.indexOf(this.items.find(x => x.product_id === +product.id)), 1);
                this._render();

                console.log(`${product.name} удалён из корзины.`);
            }
        })
    },
    _get_price(items) {
        return items.reduce((a, b) => +a + +b["price"], 0)
    },
    _render() {
        let container = document.querySelector(this.container);
        let domString = '';

        this.items.forEach(item => {
            domString += item.cart_template();
        });

        if (this.items.length == 0)
            domString = '<p>Корзина пуста.</p>';
        else
            domString += `<hr>
						Товаров в корзине: ${this.items.length}<br>
						Общая стоимость: ${this._get_price(this.items)}$
						<button onclick="cart.wipe()">Очистить корзину</button>
						`; //костыльчик
        container.innerHTML = domString;
    },
    wipe() {
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
            if (evt.target.classList.contains('buy-btn')) {
                let product = evt.target.dataset;
                cart.items.push(this.items.find(x => x.product_id === +product.id));
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