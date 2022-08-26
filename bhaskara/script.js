const form = document.querySelector('form');

const a = document.querySelector('#a');
const b = document.querySelector('#b');
const c = document.querySelector('#c');

const button = document.querySelector('form button');
const result = document.querySelector('#result');

const formatValue = (value) => {   
    if (!value || !Number(value)) return `+ 0`; 
    else if (value < 0) return `- ${-1 * value}`;
    return `+ ${value}`;
}

const showFormula = () => {
    const a_formated = formatValue(a.value);
    const b_formated = formatValue(b.value);
    const c_formated = formatValue(c.value);

    button.innerText = `Calcular: ${a_formated}x² ${b_formated}x ${c_formated} = 0`;
}

a.onkeyup = showFormula;
b.onkeyup = showFormula;
c.onkeyup = showFormula;

const getDelta = (a, b, c) => b ** 2 - 4 * a * c;

const getResults = (a, b, c) => {
    x1 = (- b + getDelta(a, b, c) ** 0.5) / (2 * a);
    x2 = (- b - getDelta(a, b, c) ** 0.5) / (2 * a);

    return [x1, x2];
}

form.onsubmit = (e) => {
    e.preventDefault();

    const a_value = Number(a.value);
    const b_value = Number(b.value);
    const c_value = Number(c.value);

    if (!a_value) a.focus();
    else if (!b_value) b.focus();
    else if (!c_value) c.focus();

    if (getDelta(a_value, b_value, c_value) < 0) {
        result.innerText = 'Delta é negativo';
    } else {
        result.innerHTML = getResults(a_value, b_value, c_value);
    }
}