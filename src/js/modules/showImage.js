function showImage() {
    const imgs = document.querySelectorAll('.sizes-block > img');
        
    
    imgs.forEach((item, i) => {
        item.addEventListener('mouseover', (e) => {
            imgs[i].style.zIndex = '1000';
            imgs[i].style.position = 'relative';
            imgs[i].src = `assets/img/sizes-${i+1}-1.png`;
        });
    });

    imgs.forEach((item, i) => {
        item.addEventListener('mouseout', () => {
            imgs[i].style.zIndex = '';
            imgs[i].style.position = '';
            imgs[i].src = `assets/img/sizes-${i+1}.png`;
        });
    });
}

export default showImage;