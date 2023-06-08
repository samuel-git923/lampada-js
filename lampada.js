const turnOn = document.getElementById('turnOnOff');

const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if(!isLampBroken()) {
        lamp.src = './images/ligada.jpg';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './images/desligada.jpg';
    }
}

function lampBroken() {
    lamp.src = './images/quebrada.jpg';
}

function lampBrkReset() {
    lamp.src = './images/desligada.jpg';
    lampOff();
}

function lampOnOff() {
    if (turnOnOff.textContent === 'Ligar' && !isLampBroken()) {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    } else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

turnOnOff.addEventListener('click', lampOnOff);
turnOnOff.addEventListener('dblclick', lampBrkReset);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
