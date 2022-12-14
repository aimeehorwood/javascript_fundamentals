
class User {
    constructor(name) {
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  
    getIntroduction() {
      return `Hi, my name is ${this.name}`;
    }
  }
  
  
  class userBase {
    constructor(user) {
      this.user = user;
    }
  
    count() {
      return this.user.length;
    }
  
    getNames() {
      return this.user.map((user) => {
        return user.getName();
      });
    }
  
    getIntroductions() {
      return this.user.map((user) => {
        return user.getIntroduction();
      });
    }
  }
  
  const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];

  
  
  
  const twouserBase = new userBase(users);
  
  console.log(twouserBase.count());
  
  console.log(twouserBase.getNames());
  
  console.log(twouserBase.getIntroductions());