// amar nobe function way te 
function generatePin() {
    let randomNum = Math.round(Math.random() * 10000);
    let randomNum2String = randomNum.toString();
    if (randomNum2String.length == 4) {
        let displayScreenTag = document.getElementById('displayScreen');
        return displayScreenTag.value = randomNum2String;
    }
}



// amar style
let monitorDisplayTag = document.getElementById('monitorDisplay');
let monitorDisplayValue = monitorDisplayTag.value;

let buttons = document.querySelectorAll('.button');
for (const button of buttons) {
    button.addEventListener('click', function () {
        let digit = button.innerHTML;
        if (digit == "C") {
            monitorDisplayTag.value = "";
        } else {
            monitorDisplayTag.value += digit;
        }
    })
}


// if match take action
let displayScreenTag = document.getElementById('displayScreen');
// function to check match
function submitBtn() {
    if (displayScreen.value == monitorDisplay.value) {
        document.getElementById('matched').classList.remove('d-none');
        document.getElementById('notMatched').classList.add('d-none');
    } else {
        document.getElementById('notMatched').classList.remove('d-none');
        document.getElementById('matched').classList.add('d-none');
    }
}