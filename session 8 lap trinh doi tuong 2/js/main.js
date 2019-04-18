var battery = new Battery();
battery.setEnergy(10);

var flashLamp = new FlashLamp();
flashLamp.setBattery(battery);
flashLamp.turnOn();

// document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
// flashLamp.light();

// document.write("Turn on<br/>")
// flashLamp.turnOn();
// flashLamp.light();
// document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

// document.write("Turn off<br/>")
// flashLamp.turnOff();
// flashLamp.light();

// battery.setEnergy(20);
// battery.decreaseEnergy();

const infoBaterry = document.querySelector('.battry');
const useBattery = document.querySelector('.useBattery');
const lamp = document.querySelector('.lamp');
const onffo = document.querySelector('.onffo');

infoBaterry.innerHTML = 'Nang Luong Pin :' + flashLamp.getBatteryInfo();
useBattery.innerHTML = 'use battery';
useBattery.onclick = function () {
    battery.decreaseEnergy();
    infoBaterry.innerHTML = 'Nang Luong Pin :' + flashLamp.getBatteryInfo();
}

lamp.src = 'images/lampon.jpg';
onffo.innerHTML = 'OnOff';

onffo.onclick = function () {
    if (flashLamp.light()) {
        lamp.src = 'images/lampoff.jpg';
    } else {
        lamp.src = 'images/lampon.jpg';
    }
    flashLamp.onOff();
}


