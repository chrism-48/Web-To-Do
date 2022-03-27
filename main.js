// initialize variables and set EventListeners!
var myBoxes = document.querySelectorAll('.ibox');

var boxes = document.querySelectorAll('.doneBtn');

var btnTwo = document.getElementById('btn2');
btnTwo.addEventListener('click', clrBox2);
var inputTwo = document.getElementById('ip2');

var btnThree = document.getElementById('btn3');
btnThree.addEventListener('click', clrBox3);
var inputThree = document.getElementById('ip3');

var btnFour = document.getElementById('btn4');
btnFour.addEventListener('click', clrBox4);
var inputFour = document.getElementById('ip4');

var btnFive = document.getElementById('btn5');
btnFive.addEventListener('click', clrBox5);
var inputFive = document.getElementById('ip5');

var btnSix = document.getElementById('btn6');
btnSix.addEventListener('click', clrBox6);
var inputSix = document.getElementById('ip6');

var btnSeven = document.getElementById('btn7');
btnSeven.addEventListener('click', clrBox7);
var inputSeven = document.getElementById('ip7');



var btnEight = document.getElementById('btn8');
btnEight.addEventListener('click', clrBox8);
var inputEight = document.getElementById('ip8');

var btnNine = document.getElementById('btn9');
btnNine.addEventListener('click', clrBox9);
var inputNine = document.getElementById('ip9');

var btnTen = document.getElementById('btn10');
btnTen.addEventListener('click', clrBox10);
var inputTen = document.getElementById('ip10');

var btnEleven = document.getElementById('btn11');
btnEleven.addEventListener('click', clrBox11);
var inputEleven = document.getElementById('ip11');

var btnTwelve = document.getElementById('btn12');
btnTwelve.addEventListener('click', clrBox12);
var inputTwelve = document.getElementById('ip12');

var btnThirteen = document.getElementById('btn13');
btnThirteen.addEventListener('click', clrBox13);
var inputThirteen = document.getElementById('ip13');

var btnFourteen = document.getElementById('btn14');
btnFourteen.addEventListener('click', clrBox14);
var inputFourteen = document.getElementById('ip14');

var btnFifteen = document.getElementById('btn15');
btnFifteen.addEventListener('click', clrBox15);
var inputFifteen = document.getElementById('ip15');

var btnSixteen = document.getElementById('btn16');
btnSixteen.addEventListener('click', clrBox16);
var inputSixteen = document.getElementById('ip16');

//-------------------------------------------------------

// These functions clear a single input box!
function clrBox2() {
    btnTwo.innerText = 'Done';
    if (inputTwo.value === '') {
        btnTwo.innerText = 'clear';
    } else {
        btnTwo.innerText = 'Done';
        inputTwo.value = '';

    }


}

function clrBox3() {
    btnThree.innerText = 'Done';
    if (inputThree.value === '') {
        btnThree.innerText = 'clear';
    } else {
        btnThree.innerText = 'Done';
        inputThree.value = '';
    }
}

function clrBox4() {
    btnFour.innerText = 'Done';
    if (inputFour.value === '') {
        btnFour.innerText = 'clear';
    } else {
        btnFour.innerText = 'Done';
        inputFour.value = '';
    }
}

function clrBox5() {
    btnFive.innerText = 'Done';
    if (inputFive.value === '') {
        btnFive.innerText = 'clear';
    } else {
        btnFive.innerText = 'Done';
        inputFive.value = '';
    }
}

function clrBox6() {
    btnSix.innerText = 'Done';
    if (inputSix.value === '') {
        btnSix.innerText = 'clear';
    } else {
        btnSix.innerText = 'Done';
        inputSix.value = '';
    }
}

function clrBox7() {
    btnSeven.innerText = 'Done';
    if (inputSeven.value === '') {
        btnSeven.innerText = 'clear';
    } else {
        btnSeven.innerText = 'Done';
        inputSeven.value = '';
    }
}

function clrBox8() {
    btnEight.innerText = 'Done';
    if (inputEight.value === '') {
        btnEight.innerText = 'clear';
    } else {
        btnEight.innerText = 'Done';
        inputEight.value = '';
    }
}

function clrBox9() {
    btnNine.innerText = 'Done';
    if (inputNine.value === '') {
        btnNine.innerText = 'clear';
    } else {
        btnNine.innerText = 'Done';
        inputNine.value = '';
    }
}

function clrBox10() {
    btnTen.innerText = 'Done';
    if (inputTen.value === '') {
        btnTen.innerText = 'clear';
    } else {
        btnTen.innerText = 'Done';
        inputTen.value = '';
    }
}

function clrBox11() {
    btnEleven.innerText = 'Done';
    if (inputEleven.value === '') {
        btnEleven.innerText = 'clear';
    } else {
        btnEleven.innerText = 'Done';
        inputEleven.value = '';
    }
}

function clrBox12() {
    btnTwelve.innerText = 'Done';
    if (inputTwelve.value === '') {
        btnTwelve.innerText = 'clear';
    } else {
        btnTwelve.innerText = 'Done';
        inputTwelve.value = '';
    }
}

function clrBox13() {
    btnThirteen.innerText = 'Done';
    if (inputThirteen.value === '') {
        btnThirteen.innerText = 'clear';
    } else {
        btnThirteen.innerText = 'Done';
        inputThirteen.value = '';
    }
}

function clrBox14() {
    btnFourteen.innerText = 'Done';
    if (inputFourteen.value === '') {
        btnFourteen.innerText = 'clear';
    } else {
        btnFourteen.innerText = 'Done';
        inputFourteen.value = '';
    }
}

function clrBox15() {
    btnFifteen.innerText = 'Done';
    if (inputFifteen.value === '') {
        btnFifteen.innerText = 'clear';
    } else {
        btnFifteen.innerText = 'Done';
        inputFifteen.value = '';
    }
}

function clrBox16() {
    btnSixteen.innerText = 'Done';
    if (inputSixteen.value === '') {
        btnSixteen.innerText = 'clear';
    } else {
        btnSixteen.innerText = 'Done';
        inputSixteen.value = '';
    }
}



// This function clears all of the input boxes and resets the done button back to clear!
function resetAll() {
    myBoxes.forEach(input => input.value = '');
    boxes.forEach(text => text.innerHTML = 'clear');
    myBoxes.innerText = '';
    myBoxes.forEach(backgroundColor => backgroundColor = 'white');



}