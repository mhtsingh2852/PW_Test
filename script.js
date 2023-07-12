document.addEventListener('DOMContentLoaded', function() {
    const box = document.querySelector('.box');
    let isClicked = false;
  
    box.addEventListener('click', function() {
      if (!isClicked) {
        box.style.backgroundColor = 'yellow';
        box.style.width = '600px';
        box.style.height = '600px';
        isClicked = true;
      }
    });
  });
  