function Battery() {
    this.setEnergy = function (energy) {
        this.energy = energy
    }
    this.getEnergy = function () {
        return this.energy
    }
    this.decreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy--;
        } else {
            alert('Hết Pin');
        }
    }
}