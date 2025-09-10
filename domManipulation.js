const subButton = document.querySelector('#js-subscribe');


subButton.addEventListener('click', () => {
    subButton.textContent = 
    subButton.textContent === 'Subscribe' ? 'Subscribed' : 'Subscribe'

})
