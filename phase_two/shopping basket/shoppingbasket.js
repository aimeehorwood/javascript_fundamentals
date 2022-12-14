class ShoppingBasket {
  constructor() {
    this.candy = [];
    this.discount = 0;
    this.total = 0;
  }

  addItem(item) {
    this.candy.push(item);    
  }

  applyDiscount(discount) {
   this.discount = discount;
  }


  getTotalPrice() {
    this.candy.forEach(candy => 
      this.total += candy.getPrice());
      return this.total - this.discount
    };

  
  };

module.exports = ShoppingBasket;