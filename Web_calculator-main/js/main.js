const output = document.querySelector('.calc__output');
const buttonarea = document.querySelector(".buttonarea");

document.querySelectorAll('.buttonarea__button').forEach(button => {
    button.addEventListener('click', function () {
        calc(this.value);
    })
})

window.addEventListener("load", function() {
    generate_buttons();
});

document.addEventListener('keydown', event => {
    if ((event.key).match(/[0-9%\/*\-+<>.^\(\)=]|Backspace|Enter|Delete/)) {
        calc(event.key);
    }
})

function calc(value) {
    if (value.match(/=|Enter/)) {
        try {
            output.textContent = math.evaluate(output.textContent);
        } catch {
            output.textContent = '0';
        }
    } else if (value.match(/C|Delete/)) {
        output.textContent = '0';
    } else if (value.match(/Backspace/)) {
        if (output.textContent == '0'){

        } if (output.textContent.length == 1) {
            output.textContent = output.textContent.substring(0, output.textContent.length - 1);
            output.textContent = '0';
        } else {
            output.textContent = output.textContent.substring(0, output.textContent.length - 1);
        }
    } else {
        if (output.textContent == '0') {
            output.textContent = output.textContent.substring(0, output.textContent.length - 1);
            output.textContent += value;
        } else {
            output.textContent += value;
        }
    }
}

function generate_buttons() {
    var button_values_arr = [
        "C", "CE", "%", "/", "1", "2", "3", "*", "4", "5", "6", "+", "7", "8", "9", "-", "0", "(", ")", "="
    ];
    for (let i = 0; i < button_values_arr.length; i++) {
        const button = document.createElement("button");
        button.className = "buttonarea__button";
        button.textContent = button_values_arr[i];

        if (button_values_arr[i] == "CE") {
            button.value = "Backspace";
        } else {
            button.value = button_values_arr[i];
        }

        buttonarea.append(button)
    }
}