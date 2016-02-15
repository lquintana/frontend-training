// * constructor parameters
// - oxygen: initial amount of oxygen

// * methods
// - getRemainingOxygen: It returns the amount of remaining oxygen
// - breath            : It increments the amount of remaining oxygen
// - consumeOxygen     : It decrements the amount of remaining oxygen
// - hasDied           : It returns true if the amount of oxygen is zero and false otherwise
function LivingCreature(oxygen) {
    if (typeof oxygen != 'number') {
        throw new Error('O2 must be a number');
    }
    else if (oxygen < 0) {
        throw new Error('O2 must be 0 or greater');
    }
    else {
        this.oxygen = oxygen;
    }
}

LivingCreature.prototype.getRemainingOxygen = function () {
    return this.oxygen;
}

LivingCreature.prototype.breath = function () {
    if (this.hasDied()) {
        throw new Error('The creature has died');
    } else {
        this.oxygen += 1;
    }
}

LivingCreature.prototype.consumeOxygen = function () {
    if (this.hasDied()) {
        throw new Error('The creature has died');
    }else {
        this.oxygen -= 1;
    }
}

LivingCreature.prototype.hasDied = function () {
    return (this.oxygen === 0);
}

module.exports = LivingCreature;
