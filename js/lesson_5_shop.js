let catalog = {
    catalog_data: [{
            name: 'Warcraft 3: Reforged',
            id: 0,
            price: Math.floor(Math.random() * 31) * 100,
            image: 'https://i.playground.ru/e/YNCtBoZigQh3r0BdVeBMLg.jpeg?150x208',
            full_image: 'https://i.playground.ru/e/YNCtBoZigQh3r0BdVeBMLg.jpeg'
        },
        {
            name: 'Grand Theft Auto 5',
            id: 1,
            price: Math.floor(Math.random() * 31) * 100,
            image: 'https://i.playground.ru/e/Tf0mwt9jPRX8OLPMsWupgQ.jpeg?150x208',
            full_image: 'https://i.playground.ru/e/Tf0mwt9jPRX8OLPMsWupgQ.jpeg',
        },
        {
            name: 'Half-Life 2',
            id: 2,
            price: Math.floor(Math.random() * 31) * 100,
            image: 'https://i.playground.ru/e/T4l7p0eVZeOBAFQOy8BIpQ.jpeg?150x208',
            full_image: 'https://i.playground.ru/e/T4l7p0eVZeOBAFQOy8BIpQ.jpeg',
        },
        {
            name: 'StarCraft 2',
            id: 3,
            price: Math.floor(Math.random() * 31) * 100,
            image: 'https://i.playground.ru/e/KloMCCgISWymrCtkSEUHdA.jpeg?150x208',
            full_image: 'https://i.playground.ru/e/KloMCCgISWymrCtkSEUHdA.jpeg',
        },
        {
            name: 'Heroes of M&M 3',
            id: 4,
            price: Math.floor(Math.random() * 31) * 100,
            image: 'https://i.playground.ru/e/zev3EnUtE0cWUPlxnsLFOA.jpeg?150x208',
            full_image: 'https://i.playground.ru/e/zev3EnUtE0cWUPlxnsLFOA.jpeg',
        },
        {
            name: 'TES 4: Oblivion',
            id: 5,
            price: Math.floor(Math.random() * 31) * 100,
            image: 'https://i.playground.ru/e/x2PADjLc87Z4CJEW9f0zAg.jpeg?150x208',
            full_image: 'https://i.playground.ru/e/x2PADjLc87Z4CJEW9f0zAg.jpeg',
        },
        {
            name: 'Diablo 2',
            id: 6,
            price: Math.floor(Math.random() * 31) * 100,
            image: 'https://i.playground.ru/e/kLs-qQnqWHLdhb0D1C4SYQ.jpeg?150x208',
            full_image: 'https://i.playground.ru/e/kLs-qQnqWHLdhb0D1C4SYQ.jpeg',
        },
        {
            name: 'Arcanum',
            id: 7,
            price: Math.floor(Math.random() * 31) * 100,
            image: 'https://i.playground.ru/e/EMlkXPnf_bG3Mw5jcztCRA.jpeg?150x208',
            full_image: 'https://i.playground.ru/e/EMlkXPnf_bG3Mw5jcztCRA.jpeg',
        },
        {
            name: 'GTA: Vice City',
            id: 8,
            price: Math.floor(Math.random() * 31) * 100,
            image: 'https://i.playground.ru/e/6odYhViPpdyuUTT8IXU4Kw.jpeg?150x208',
            full_image: 'https://i.playground.ru/e/6odYhViPpdyuUTT8IXU4Kw.jpeg',
        },
        {
            name: 'FlatOut 2',
            id: 9,
            price: Math.floor(Math.random() * 31) * 100,
            image: 'https://i.playground.ru/e/HxMV0wHI5hayJtUt1teXfA.jpeg?150x208',
            full_image: 'https://i.playground.ru/e/HxMV0wHI5hayJtUt1teXfA.jpeg',
        },
        {
            name: 'Counter-Strike',
            id: 10,
            price: Math.floor(Math.random() * 31) * 100,
            image: 'https://i.playground.ru/e/u18h2k2WwaVr3NNeYt21Gw.jpeg?150x208',
            full_image: 'https://i.playground.ru/e/u18h2k2WwaVr3NNeYt21Gw.jpeg',
        }
    ],
    build: function() {
        let $catalog = document.querySelector('#catalog');
        $catalog.classList.add('hide');
        for (let i = 0; i < catalog.catalog_data.length; i++) {
            //create
            let $product = document.createElement('div');
            let $img = document.createElement('img');
            let $name = document.createElement('div');
            let $price = document.createElement('div');
            let $buy = document.createElement('button');
            //custom
            $product.classList.add('product');
            $img.setAttribute('src', catalog.catalog_data[i].image);
            $img.dataset.id = +catalog.catalog_data[i].id;
            $name.innerHTML = catalog.catalog_data[i].name;
            $price.innerHTML = catalog.catalog_data[i].price + ' ' + 'руб';
            $buy.classList.add('btn');
            $buy.setAttribute('style', 'margin:0');
            $buy.innerHTML = 'КУПИТЬ';
            $buy.dataset.id = +catalog.catalog_data[i].id;
            // append
            $catalog.appendChild($product);
            $product.appendChild($img);
            $product.appendChild($name);
            $product.appendChild($price);
            $product.appendChild($buy);
        }
    }
}

let cart = {
    cart: [],
    summary_price: 0,
    quantity: 0,
    build: function() {
        //build
        let $catalog = document.querySelector('#catalog');
        let $cart = document.createElement('div');
        $cart.classList.add('log');
		$cart.classList.add('hide');
        let $cart_wiper = document.createElement('div');
        let $summary_quantity = document.createElement('div');
        let $summary_cart_price = document.createElement('div');
        //custom
        $cart.setAttribute('id', 'cart');
        $cart.innerHTML = '<b>КОРЗИНА:</b>';
        //$cart_wiper.classList.add('cart_wiper');
        //$cart_wiper.innerHTML = '<i>[Очистить корзину]</i>';
        //$cart.addEventListener('click', cart.delete);
        $summary_quantity.innerHTML = '<b>КОЛ-ВО: </b>' + cart.quantity + ' шт.';
        $summary_quantity.id = 'summary_quantity';
        $summary_cart_price.innerHTML = '<b>ИТОГО: </b>' + cart.summary_price + ' руб.';
        $summary_cart_price.id = 'summary_price';
        //append
        $cart.appendChild($cart_wiper);
        $cart.appendChild($summary_quantity);
        $cart.appendChild($summary_cart_price);
        document.body.insertBefore($cart, $catalog);
    },
    build_items: function() {
        let $cart = document.querySelector('#cart');

        let $item = document.createElement('div');
        $item.classList = 'item';

        let $summary_quantity = document.getElementById('summary_quantity');
        $item.innerHTML = cart.cart[cart.cart.length - 1].name + ' ' + cart.cart[cart.cart.length - 1].price + ' руб. ';
        $cart.insertBefore($item, $summary_quantity);

    },
    add: function() {
        let $getButton = document.querySelector('#catalog');
        $getButton.addEventListener('click', add_to_cart);

        function add_to_cart(event) {
            if (event.target.className === 'btn') {

                for (let i = 0; i < catalog.catalog_data.length; i++) {

                    if (event.target.dataset.id == catalog.catalog_data[i].id) {
                        cart.cart.push(catalog.catalog_data[i]);
                        cart.quantity++;
                        cart.summary_price += catalog.catalog_data[i].price;
                        log(`${catalog.catalog_data[i].name} за ${catalog.catalog_data[i].price} руб. добавлен в корзину!`);

                        let $summary_quantity = document.getElementById('summary_quantity');
                        $summary_quantity.innerHTML = '<b>КОЛ-ВО: </b>' + cart.quantity + ' шт.';

                        let $summary_cart_price = document.getElementById('summary_price');
                        $summary_cart_price.innerHTML = '<b>ИТОГО: </b>' + cart.summary_price + ' руб.';

                        cart.build_items();
                    }
                }
            }
        }
    }
}

window.addEventListener('load', catalog.build);
window.addEventListener('load', cart.build);
window.addEventListener('load', cart.add);