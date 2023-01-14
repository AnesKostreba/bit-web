'use strict';
(function () {
    console.log("Hello")

    function product(id, price, name, expirationDate) {
        if (!id || !price || !expirationDate || !name) {
            throw new Error('Id, Price, Expiration Date, Name is not defined');
        }
        this.id = Math.floor(Math.random() * 90000) + 10000;
        this.name = name;
        this.price = parseFloat(price.toFixed());
        this.expirationDate = new Date(expirationDate);
        // this.parseDate = Date.parse(expirationDate);

        this.getInfo = function () {
            return (this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase() + this.id + "," + this.name + "," + this.price + "," + this.expirationDate);
        }
    }
    // var product1 = new product(1,123.33,'Banana', ' 2023,5,5');
    // console.log(product1.getInfo());


    function shoppingBag() {
        this.listOfProduct = [];

        this.addProduct = function (product) {
            var currentDate = new Date();

            if (product.expirationDate >= currentDate) {
                this.listOfProduct.push(product);
            }
        }


        this.getAveragePrices = function () {
            this.averagePrice = 0;
            for (var i = 0; i < this.listOfProduct.length; i++) {
                this.averagePrice += this.listOfProduct[i].price;

                return ("Avg prices " + (this.averagePrice / this.listOfProduct.length).toFixed(3));
            }
        }

        this.mostExpensive = function () {
            var exp = this.listOfProduct[0].price;
            var counter = 0;
            for (var i = 0; i < this.listOfProduct.length; i++) {
                if (exp < this.listOfProduct[i].price) {
                    exp = this.listOfProduct[i].price;
                    counter = i;
                }
            }
            return ("Most expensive product is " + this.listOfProduct[counter].name + " " + this.listOfProduct[counter].price);
        }


        this.totalPrice = function () {
            var total = 0;
            for (var i = 0; i < this.listOfProduct.length; i++) {
                total += this.listOfProduct[i].price;
            }
            return "Total price is : " + total;
        }
    }

    function paymentCard(balance, status, validUntil) {
        this.balance = balance.toFixed(2);
        this.status = status;
        this.validUntil = new Date(validUntil);
    }

    function checkOutAndBuy(bag, card) {
        var bagPrice = bag.totalPrice();
        var cardBalance = parseFloat(card.balance);

        if (cardBalance > bagPrice) {
            return "Yes";
        } else {
            return "False";
        }
    }


    var product1 = new product(1, 123.33, 'Banana', '05/20/2024');
    var product2 = new product(2, 223.32, "Kikiriki", '05/20/2024');


    var kesa = new shoppingBag();
    kesa.addProduct(product1)
    kesa.addProduct(product2);

    console.log(kesa);
    console.log(kesa.getAveragePrices());
    console.log(kesa.mostExpensive());
    console.log(kesa.totalPrice());

    var card = new paymentCard(5000, 'active', '01/10/2025');
    kesa.addProduct(product1);
    console.log(checkOutAndBuy(kesa, card));

})();


