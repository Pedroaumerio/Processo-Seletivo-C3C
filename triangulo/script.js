const form = document.querySelector('form');

const l1 = document.querySelector('#l1');
const l2 = document.querySelector('#l2');
const l3 = document.querySelector('#l3');

const result = document.querySelector('#result');

const isTriangle = (l1, l2, l3) => {
    if ( l1 >= l2 + l3 || l2 >= l1 + l3 || l3 >= l1 + l2 ) {
        return false;
    }

    return true;
}

const triangleType = (l1, l2, l3) => {
    if (l1 === l2 && l2 === l3) {
        return 'Triângulo equilátero';
    } else if (
        l1 !== l2 && 
        l2 !== l3 && 
        l1 !== l3
    ) {
        return 'Triângulo escaleno';
    }
        
    return 'Triângulo isóceles';
}

form.onsubmit = (e) => {
    e.preventDefault();

    const l1_value = Number(l1.value);
    const l2_value = Number(l2.value);
    const l3_value = Number(l3.value);

    if (!l1_value) l1.focus();
    else if (!l2_value) l2.focus();
    else if (!l3_value) l3.focus();

    if (!isTriangle(l1_value, l2_value, l3_value)) {
        result.innerText = 'Triângulo inválido';
    } else {
        result.innerText = triangleType(l1_value, l2_value, l3_value);
    }
        
}