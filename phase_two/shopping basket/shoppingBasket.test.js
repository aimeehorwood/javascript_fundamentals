const ShoppingBasket = require("./shoppingbasket");
const Candy = require("./candy");

describe("ShoppingBasket", () => {
  it("returns 0 when nothing has been added", () => {
    const shoppingbasket = new ShoppingBasket();
    expect(shoppingbasket.getTotalPrice()).toBe(0);
  });

  it("returns total price when items have been added", () => {
    const candyDouble = {getPrice: () => 3.99};
    const shoppingbasket = new ShoppingBasket();
    shoppingbasket.addItem(candyDouble);
    expect(shoppingbasket.getTotalPrice()).toBe(3.99)
  });


 it('adds multiple items and returns total price for shopper', () => {
    const shoppingbasket = new ShoppingBasket();
    const candyDouble = { getPrice: () => 4.99 };
    shoppingbasket.addItem(candyDouble);
    shoppingbasket.addItem(new Candy('Skittle', 3.99));
    shoppingbasket.addItem(new Candy('Skittle', 3.99));
    expect(shoppingbasket.getTotalPrice()).toBe(12.97);
  });

  it('can apply discount to shopper baskets', () => {
    const shoppingbasket = new ShoppingBasket();
    shoppingbasket.addItem(new Candy('Skittle', 3.99));
    shoppingbasket.applyDiscount(0.99);
    expect(shoppingbasket.getTotalPrice()).toBe(3.00);
  });
});
