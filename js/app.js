const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__content--close');
const slider = document.getElementById('modal-slider');

const button1 = document.querySelector('#button1'); // Spiderman
const button2 = document.querySelector('#button2'); // Robin
const button3 = document.querySelector('#button3'); // Batman

const content = {
    spiderman: `
        <input type="radio" name="slider-1" id="radio-1" checked>
        <input type="radio" name="slider-1" id="radio-2">
        <input type="radio" name="slider-1" id="radio-3">
        <div class="cards">
            <label for="radio-1" id="card-1" class="card">
                <img src="img/spider-man_.webp" alt="spider-man_">
            </label>
            <label for="radio-2" id="card-2" class="card">
                <img src="img/spider-man-2.webp" alt="spider-man-2">
            </label>
            <label for="radio-3" id="card-3" class="card">
                <img src="img/spider-man-3.webp" alt="spider-man-3">
            </label>
        </div>
    `,
    robin: `
        <input type="radio" name="slider-1" id="radio-1" checked>
        <input type="radio" name="slider-1" id="radio-2">
        <input type="radio" name="slider-1" id="radio-3">
        <div class="cards">
            <label for="radio-1" id="card-1" class="card">
                <img src="img/robin1.png" alt="robin1">
            </label>
            <label for="radio-2" id="card-2" class="card">
                <img src="img/robin2.png" alt="robin2">
            </label>
            <label for="radio-3" id="card-3" class="card">
                <img src="img/robin3.png" alt="robin3">
            </label>
        </div>
    `,
    batman: `
        <input type="radio" name="slider-1" id="radio-1" checked>
        <input type="radio" name="slider-1" id="radio-2">
        <input type="radio" name="slider-1" id="radio-3">
        <div class="cards">
            <label for="radio-1" id="card-1" class="card">
                <img src="img/batman1.png" alt="batman1">
            </label>
            <label for="radio-2" id="card-2" class="card">
                <img src="img/batman2.png" alt="batman2">
            </label>
            <label for="radio-3" id="card-3" class="card">
                <img src="img/batman3.png" alt="batman3">
            </label>
        </div>
    `
};

button1.addEventListener('click', () => {
    slider.innerHTML = content.spiderman;
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});

button2.addEventListener('click', () => {
    slider.innerHTML = content.robin;
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});

button3.addEventListener('click', () => {
    slider.innerHTML = content.batman;
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});

closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
});