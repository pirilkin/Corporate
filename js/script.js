$(document).ready(function () {
    
const cards = document.querySelectorAll('.card');
    for(let i = 0; i < cards.length; i++){
        const card = cards[i];
        card.addEventListener('mousemove', startRotate);
        card.addEventListener('mouseout', stopRotate);
    }


    function startRotate(e){
       const cardItem = this.querySelector('.clients-item');
       const halfHeight = cardItem.offsetHeight / 2;
       const halfWidth = cardItem.offsetWidth / 2;
       cardItem.style.transform = 'rotateX('+ -(e.offsetY - halfHeight) / 7 +'deg) rotateY(' + (e.offsetX - halfWidth) / 7 + 'deg)';
    }

    function stopRotate(e){
        const cardItem = this.querySelector('.clients-item');
        cardItem.style.transform = 'rotate(0)';
    }






// console.log(cards);

    // for(let i = 0; i < cards.length; i++){
    //     const card = cards[i];
    //     card.addEventListener('mousemove', startRotate);
    //     card.addEventListener('mouseout', stopRotate);
    // }
    // function startRotate(e){
    //     const cardItem = this.querySelector('.clients-item');
    //     const halfHeight = cardItem.offsetHeight / 2;
    //     cardItem.style.transform = 'rotateX(' + -(e.offsetY - halfHeight) / 5 + 'deg) rotateY' + (e.offsetX - halfHeight) / 5 + 'deg)';
    // }
    // function stopRotate(e){
    //     const cardItem = this.querySelector('.clients-item');
    //     cardItem.style.transform = 'rotate(0)';
    // }
});