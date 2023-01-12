const btn = document.getElementById('toggle');

let index = 0;

const colors = ['green', 'blue', 'red'];

btn.addEventListener('click', function onClick() {
  document.body.style.backgroundColor = colors[index];
  document.body.style.color = 'white';

  index = index >= colors.length - 1 ? 0 : index + 1;
});
