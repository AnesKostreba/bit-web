'use strict';
(function () {
    console.log("Hello")

    function product(id, price, name, expirationDate) {
        if (!id || !price || !expirationDate || !name) {
            throw new Error('Id, Price, Expiration Date, Name is not defined');
        }
        this.id = Math.floor(Math.random() * 90000) + 10000;
        this.name = name;
        this.price = price.toFixed(2);
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
            
            if (currentDate >= this.expirationDate) {
                this.listOfProduct.push(product);
            }
        }


        this.getAveragePrices = function () {
            this.averagePrice = 0;
            for (var i = 0; i = this.listOfProduct.length; i++) {
                this.averagePrice += this.listOfProduct[i].price;

                return (this.averagePrice / this.listOfProduct.length).toFixed(3);
            }
        }
    }
    
    var product1 = new product(1, 123.33, 'Banana', '20/05/2024');
    var product2 = new product(2,223.32,"Kikiriki",'20/05/2024');

    
    
    var kesa = new shoppingBag();
    kesa.addProduct(product1)
    kesa.addProduct(product2);
    console.log(kesa);

})();


