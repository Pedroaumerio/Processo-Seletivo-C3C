const form = document.querySelector('form');

const number = document.querySelector('#number');

const result = document.querySelector('#result');

const luidyMoura = (n) => {
    const result = [];

    for (let i = 1; i <= n; i++) {
        let string = '';

        if (i % 5 === 0) {
            string += 'Luidy';
        }

        if (i % 9 === 0) {
            string += 'Moura';
        }

        if (string) {
            result.push(string);
        } else {
            result.push(i);
        }
    }

    return result;
}

form.onsubmit = (e) => {
    e.preventDefault();

    let number_value = Number(number.value);

    if (!number_value) number.focus();
    
    result.innerText = luidyMoura(number_value).join(', ');
}