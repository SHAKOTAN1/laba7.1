
function margin(){
  let check = document.getElementById("checkbox");
  let slider = document.getElementsByClassName("content")[0];
 
 
  if (check.checked != false) {
    slider.classList.add('slider-animated');
  } else {
    slider.classList.remove('slider-animated');
  }
  
}




/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
  showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
  showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("item");
   
  if (n > slides.length) {
  slideIndex = 1
  }
  if (n <1) {
  slideIndex = slides.length
  }
   
  /* Проходим по каждому слайду в цикле for */
  for (let slide of slides) {
  slide.style.display = "none";
  }  
  slides[slideIndex - 1].style.display = "block";  
}

