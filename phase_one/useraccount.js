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


// count
// name 


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

  getIntroduction() {
    return this.user.map((user) => {
      return user.getIntroduction();
    });
  }
}


