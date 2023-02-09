 const headers = document.querySelectorAll('[data-name="accordeon-title"]'); 

 const contentBox = document.querySelectorAll('.list-content');




 headers.forEach(function (item){

    contentBox.forEach(function(item) {
        item.classList.add('hidden');
     });

    item.addEventListener('click', function () {
        const contentBoxes = document.querySelector('#' + this.dataset.tab);  
        contentBoxes.classList.remove('hidden');
    });

    
 });