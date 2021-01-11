function calc(priceBase) {
    const price = document.querySelector('.calc-price'),
          size = document.querySelector('#size'),
          material = document.querySelector('#material'),
          promo = document.querySelector('.promocode'),
          options = document.querySelector('#options');
    
    let res;

    function getData(elem, event, prop) {
        elem.addEventListener(event, () => {
            priceBase[prop] = elem.value;
            setCalc();
        }); 
    }

    getData(size, 'change', 'size');
    getData(material, 'change', 'material');
    getData(promo, 'input', 'promo');
    getData(options, 'change', 'option');
    
    function setCalc() {
        res = +priceBase.size * +priceBase.material + +(priceBase.option || '0');

        if (!priceBase.size || !priceBase.material) {
            price.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
            return;
        } 

        if(promo.value === 'IWANTPOPART') {
            price.textContent = res * 0.7;
            priceBase.resultPrice = res * 0.7;
        } else {
            price.textContent = res;
            priceBase.resultPrice = res;
        }  
          
    }
}

export default calc;