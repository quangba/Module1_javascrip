function  FlashLamp () {
    this.setBattery = function (Battery) {
        this.Battery = Battery
    }
    this.getBatteryInfo = function () {
        return this.Battery.getEnergy()
    }
    this.light = function () {
        // if (this.status) {
        //     document.write('lighting')
        // } else {
        //     document.write('not lighting')
        // }
        return this.status;
    }
        this.turnOn = function () {
            this.status = true
        }
        this.turnOff = function () {
            this.status = false
        }
    this.onOff = function () {
        this.status = !this.status;
    }
}