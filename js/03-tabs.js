const tabHeaders = document.querySelectorAll('[data-tab]');

tabHeaders.forEach(function(item) {
    item.addEventListener('click', function() {
        console.log('tab click!');
    });
});

