import modal from './modules/modal';
import slider from './modules/slider';
import forms from './modules/forms';
import accordion from './modules/accordion';
import showImage from './modules/showImage';
import showMoreStyle from './modules/showMoreStyle';
import mask from './modules/mask';
import сyrillic from './modules/сyrillic';
import calc from './modules/calc';
import filter from './modules/filter';
import burgerMenu from './modules/burgerMenu';
import scrolling from './modules/scrolling';


window.addEventListener('DOMContentLoaded', () => {

    let priceBase = {};

    modal();
    slider('.feedback-slider-item', '.main-next-btn', '.main-prev-btn', 'hor');
    slider('.main-slider-item','','','ver');
    forms(priceBase);
    accordion();
    showImage();
    showMoreStyle('.button-styles', '.styles-2');
    mask('[name="phone"]');
    сyrillic('[name="name"]');
    сyrillic('[name="message"]');
    calc(priceBase);
    filter('.portfolio-menu', '.portfolio-menu > li', '.portfolio-block', 'active');
    burgerMenu('.burger-menu', '.burger');
    scrolling('.pageup');
});