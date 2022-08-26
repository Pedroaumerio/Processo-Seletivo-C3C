const form = document.querySelector('form');

const note = document.querySelector('#note');

const result = document.querySelector('#result');

const getNextFiveMultiple = (n) => Math.ceil(n / 5) * 5;

form.onsubmit = (e) => {
    e.preventDefault();

    let note_value = Number(note.value);

    if (!note_value) note.focus();
    
    const nextFiveMultiple = getNextFiveMultiple(note_value);

    if (note_value >= 38 && nextFiveMultiple - note_value < 3) {
        note_value = nextFiveMultiple;
    }
    
    result.innerText = note_value;
}