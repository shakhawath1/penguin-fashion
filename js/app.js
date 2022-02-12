document.getElementById('home-btn').addEventListener('click', function () {
    console.log('button clicked.')
})
document.getElementById('buy-now-btn').addEventListener('click', function () {
    const headLine = document.getElementById('head-line');
    const changedText = 'I am Penguin';
    headLine.innerText = changedText;
})