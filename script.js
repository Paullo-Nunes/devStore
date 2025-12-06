// Primeiro mapear os elementos;
// Mapeando os botões

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');
const list = document.querySelector('.list');

let active = 0;
const total = items.length;
let timer;

//pensando no funcionamento

function update(direction) {
     document.querySelector('.item.active').classList.remove('active');
     document.querySelector('.dot.active').classList.remove('active');

     if (direction > 0) {
          active = active + 1

          if (active === total) {
               active = 0
          }
     }

     else if (direction < 0) {
          active = active - 1

          if (active < 0) {
               active = total - 1;
          }

     }

     items[active].classList.add('active')  //Os [] indica a posição da classe active
     dots[active].classList.add('active')

     numberIndicator.textContent = String(active + 1).padStart(2, '0')


}

// Zera o timer
clearInterval(timer)
//Executa a função em um intervalo de tempo
timer = setInterval(() => {
     update(1)
}, 5000);

prevButton.addEventListener('click', () => {
     update(-1)
})

nextButton.addEventListener('click', () => {
     update(1)
})