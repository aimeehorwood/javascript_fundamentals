const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];


// function that generates string 

const personalised = (object) => {
    return `Hi ${object.name}! ${object.discount}% off candies for you today!`;
}; 


const generateMessages = (object) => {
    return object.map(personalised);
};

// generate messages function .map 


