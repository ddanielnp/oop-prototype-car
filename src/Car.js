// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor (make, model, year, color, seats, passengers) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats
    this.previousOwners = []
    this.owner = 'manufacturer'
    this.running = false
    this.passengers = passengers || []
  }

  sell (newOwner) {
    if (isNaN(newOwner)) {
      this.previousOwners.push(this.owner)
      this.owner = newOwner
    }
  }

  paint (newColor) {
    this.color = newColor
  }

  start () {
    if (this.running === false) {
      this.running = true
    }
  }

  off () {
    if (this.running === true) {
      this.running = false
    }
  }

  driveTo (destination) {
    if (this.running === true) {
      console.log('driving to ' + destination)
      return true
    } return false
  }

  park () {
    if (this.running === false) {
      console.log('parked!')
      return true
    } return false
  }

  pickUp (name) {
    if (this.running === true && this.passengers.length < this.seats - 1) {
      this.passengers.push(name)
      console.log('driving to pick up ' + name)
      return true
    } return false
  }

  dropOff (name) {
    var index = this.passengers.indexOf(name)
      if (this.running === true && index >= 0 && this.seats - this.passengers.length > 6) {
        this.passengers.splice(index, 1)
        console.log('driving to drop off ' + name)
        return true
      } return false

  }

  passengerCount () {
    return this.passengers.length
  }

} // closing for Car class

var c1 = new Car('Honda', 'Vezel', '2017', 'red', '7', 'daniel')
// var c2 = new Car('Toyota', 'Altis', '2017', 'silver', '5')
// c1.sell('daniel')
// c2.sell('daniel')
console.log(c1)

// export the Car class //
// this is required for the carTest.js to load this //
module.exports = Car
