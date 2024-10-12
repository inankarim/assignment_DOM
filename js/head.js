
function resetButtonStyles(button) {
    button.style.backgroundColor = '';
    button.style.color = '';
}


document.getElementById('donate-button')
    .addEventListener('click', function (event) {
        console.log('show add money button clicked');
        resetButtonStyles(document.getElementById('history-button'));
        this.style.backgroundColor = 'orange';
        this.style.color = 'black';

        showSectionById('donate-money-form');
    });


document.getElementById('history-button')
    .addEventListener('click', function (event) {

        resetButtonStyles(document.getElementById('donate-button'));

        this.style.backgroundColor = 'orange';
        this.style.color = 'black';

        showSectionById('history-card-form');
    });
    document.getElementById('blog-button')
    .addEventListener('click', function () {
        window.location.href = '/blog.html';

    });



