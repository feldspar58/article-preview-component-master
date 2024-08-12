document.addEventListener("DOMContentLoaded", function () {
const openBtn = document.querySelector('#sharebtn')
const closeBtn = document.querySelector('.sharenav')
const shareBtn = document.querySelector('#sharebtn2')

openBtn.addEventListener('click', function () {
    if (openBtn.style.display === 'flex'){
        closeBtn.style.display = 'flex'
    }
    else{
        openBtn.style.display = 'flex'
    }
})
shareBtn.addEventListener('click', function () {
    if (closeBtn.style.display === 'flex'){
        closeBtn.style.display = 'none';
        openBtn.style.display = 'flex';
    }
    else{
        closeBtn.style.display = 'flex';
        openBtn.style.display = 'none';
    }
});
});