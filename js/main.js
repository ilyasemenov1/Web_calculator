const output = document.querySelector('.calc__output')
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function () {
                calc(this.value)
            })
        })
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