// * constructor parameters
// - legs: the amount of legs the walker has

// * methods
// - getLegs : It returns the amount of legs (the ones received in the constructor)
// - getSteps: It returns the amount of steps done
// - walk    : It increments the amount of steps done
function Walker(legs) {

    if (typeof legs != 'number') {
        throw new Error('Legs must be a number');
    }
    else if (legs <= 0) {
        throw new Error('Legs must be more than 0');
    }
    else if (legs % 2 != 0) {
        throw new Error('Legs must be odd');
    } else {
        this.legs = legs;
    }

    this.steps = 0;
}

Walker.prototype.getLegs = function () {
    return this.legs;
}

Walker.prototype.getSteps = function () {
    return this.steps;
}

Walker.prototype.walk = function () {
    return this.steps += 1;
}

module.exports = Walker;
