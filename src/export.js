var foo = function () {
  console.log('fighters')
}

class Fruit {
  constructor (name, price) {
    this.name = name
    this.price = price
  }
}

module.exports = {
  foo: foo
  Fruit: Fruit
}
