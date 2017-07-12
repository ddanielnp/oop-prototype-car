// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')

// //// TEST PHASE III /////////////////////////////////////////
// load the Car object for
var Car = require('../src/Car')
// update the car instantiation below according to the test given
var honda = new Car('Honda', 'Vuzel', 2017, 'Blue', 7)

// starter code - testing constructor
console.log('Testing Constructor')
assert.strictEqual(honda.make, 'Honda', 'Constructor did not set make.')
assert.strictEqual(honda.model, 'Vuzel', 'Constructor did not set model.')
assert.strictEqual(honda.year, 2017, 'Constructor did not set year.')
assert.strictEqual(honda.color, 'Blue', 'Constructor did not set color.')
assert.strictEqual(honda.seats, 7, 'Constructor did not set seats.')
// run the success function once you're done with a set of tests
success()

// test sell -----
console.log('Testing selling a car to normal string')
honda.sell('Lenny')
assert.strictEqual(honda.owner, 'Lenny', 'Owner did not update to newOwner')
success()

// test sell to non-string-----
console.log('Testing selling a car to a non-string')
honda.sell('0123')
assert.strictEqual(honda.owner, 'Lenny', 'Owner should stay if newOwner is non-string')
success()

// // normal case: test sell update the previousOwners
console.log('Testing selling a car to normal string')
honda.sell('daniel')
var lastPrevOwner = honda.previousOwners[honda.previousOwners.length - 1]
assert.strictEqual(lastPrevOwner, 'Lenny', 'There should be 2 previousOwners after two successful selling')
success()

// Phase IV // -------------------
// normal case: test Car.start() should change the running value of the car to true
console.log('Testing if car is started')
honda.start()
assert.strictEqual(honda.running, true, 'Car started should return true')
success()

// normal case: test Car.off() should change the running value to false
console.log('Testing if car is off')
honda.off()
assert.strictEqual(honda.running, false, 'Car started should return false')
success()

// Should console.log "driving to <destination>", but only if the car is running
// Should return true if it is successful and false if it is not
console.log('Testing if car driving to destination when enigne is off')
honda.off()
var destination = honda.driveTo('yishun')
assert.strictEqual(destination, false, 'Car is driving to destination with engine off')
success()
// Should return true if it is successful and false if it is not
console.log('Testing if car is driving when engine is started')
honda.start()
var destination = honda.driveTo('yishun')
assert.strictEqual(destination, true, 'Car is driving to destination with engine started')
success()

// error case: check if car is running and parked
console.log('Testing if car is running and parked')
honda.start()
honda.park()
assert.strictEqual(honda.park(), false, 'Car should not be parked')
success()

// // Phase VI // ------------

// normal case: check if passengers array include the new passenger
console.log('Testing if passengers include last passenger')
honda.start()
var passenger1 = 'daniel'
var passenger2 = 'azmeer'
honda.pickUp(passenger1)
honda.pickUp(passenger2)
console.log(honda.passengers)
assert.strictEqual(honda.passengers[honda.passengers.length - 1], passenger2, 'Passenger includes new passenger and is picked up')
success()

// normal case: check if passengers full and not able to pickup more
console.log('Testing if passengers full and not able to pick up more')
var passenger3 = 'dom'
var passenger4 = 'shaun'
var passenger5 = 'yangtheng'
var passenger6 = 'jerald'
honda.pickUp(passenger3)
honda.pickUp(passenger4)
honda.pickUp(passenger5)
honda.pickUp(passenger6)
assert.strictEqual(honda.pickUp('nicolas'), false, 'Unable to pick up more passengers')
success()

// error case: check if car is on and drop off passenger
console.log('Testing if car is not on and passenger is dropped off')
honda.off()
assert.strictEqual(honda.dropOff('daniel'), false, 'Passenger not able to drop off as car is not on')
success()

// normal case: check the number of passengers in the car
console.log('Testing for the number of passengers in the car')
assert.strictEqual(honda.passengerCount(), honda.passengers.length, 'Amount of passengers in the car')
success()
