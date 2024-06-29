let result = 0;
let temp_res = 0;
let operation = '';
let newOperand = false;

function put_in(curr_num) {
    const num = parseInt(curr_num.innerText);
    const display = document.getElementById("resultant");

    if (newOperand) {
        result = num;
        newOperand = false;
    } else {
        result = result * 10 + num;
    }

    display.innerText = result;
}

function add() {
    if (!newOperand) {
        equaling();
    }
    temp_res = result;
    result = 0;
    operation = 'add';
    newOperand = true;
    document.getElementById("resultant").innerText = '+';
}

function sub() {
    if (!newOperand) {
        equaling();
    }
    temp_res = result;
    result = 0;
    operation = 'sub';
    newOperand = true;
    document.getElementById("resultant").innerText = '-';
}

function mul() {
    if (!newOperand) {
        equaling();
    }
    temp_res = result;
    result = 0;
    operation = 'mul';
    newOperand = true;
    document.getElementById("resultant").innerText = '*';
}

function division() {
    if (!newOperand) {
        equaling();
    }
    temp_res = result;
    result = 0;
    operation = 'div';
    newOperand = true;
    document.getElementById("resultant").innerText = '/';
}

function equaling() {
    if (operation === 'add') {
        result = temp_res + result;
    } else if (operation === 'sub') {
        result = temp_res - result;
    } else if (operation === 'mul') {
        result = temp_res * result;
    } else if (operation === 'div') {
        result = temp_res / result;
    }

    // console.log(result);
    document.getElementById("resultant").innerText = result;
    temp_res = 0;
    operation = '';
    newOperand = false;
}

function res(){
    temp_res = 0;
    operation = '';
    newOperand = false;
    result=0;
    document.getElementById("resultant").innerText = '';
}
