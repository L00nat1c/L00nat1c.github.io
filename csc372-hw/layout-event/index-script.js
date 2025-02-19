const gallery = document.querySelectorAll('img'); 
 
for (let index = 0; index < gallery.length; index++) { 
  const element = gallery[index]; 
  element.addEventListener('click', expand); 
} 

function expand(event) { 
  const smallImage = event.currentTarget; 
  const bigImage = document.querySelector(".big-image"); 
  bigImage.classList.remove('big-image');  
  bigImage.classList.add('small-image');
  smallImage.classList.remove('small-image');  
  smallImage.classList.add('big-image'); 
} 
