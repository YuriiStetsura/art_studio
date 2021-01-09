function slider(slidesSelector, nextBtnSelector, prevBtnSelector, dir) {
    const slides = document.querySelectorAll(slidesSelector);
    
    let indexSlide = 1,
        paused;

    function showSlides(n) {
        if (n > slides.length) {
            indexSlide = 1;
        }
        if (n < 1) {
            indexSlide = slides.length;
        }

        slides.forEach(slide => {
            slide.classList.add('animated');
            slide.style.display = 'none';
        });

        slides[indexSlide - 1].style.display = 'block';
    }

    showSlides(indexSlide);

    function changeSlide(n) {
        showSlides(indexSlide += n);
    }

    try{
        const nextBtn = document.querySelector(nextBtnSelector),
        prevBtn = document.querySelector(prevBtnSelector);

        nextBtn.addEventListener('click', () => {
            changeSlide(1);
            slides[indexSlide - 1].classList.remove('slideInRight');
            slides[indexSlide - 1].classList.add('slideInLeft');
        });

        prevBtn.addEventListener('click', () => {
            changeSlide(-1);
            slides[indexSlide - 1].classList.remove('slideInLeft');
            slides[indexSlide - 1].classList.add('slideInRight');
        });
    }catch(e){}

    function activateAnimation() {
        if (dir === 'ver') {
            paused = setInterval(() => {
                changeSlide(1);
                slides[indexSlide - 1].classList.add('slideInDown');
            }, 3000);   
        } else {
            paused = setInterval(() => {
                changeSlide(1);
                slides[indexSlide - 1].classList.remove('slideInRight');
                slides[indexSlide - 1].classList.add('slideInLeft');
            }, 3000);
            
        } 
    }

    activateAnimation();

    slides[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    slides[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
     
}

export default slider;