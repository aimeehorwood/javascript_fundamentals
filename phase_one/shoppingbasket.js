class ShoppingBasket {
  constructor() {
    this.candy = [];
  }

  addItem(item) {
    this.candy.push(item);    
  }

  getTotalPrice() {
        let total = 0;
        this.candy.forEach((candy) => {
            total += candy.getPrice() 
        });
        return total;
    }
    
 
}

module.exports = ShoppingBasket;