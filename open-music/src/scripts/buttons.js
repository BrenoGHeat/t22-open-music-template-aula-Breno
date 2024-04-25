
export function butonSelect(){ 

const buttons = document.querySelectorAll('.button-filter');

        buttons.forEach(button => {
        button.addEventListener('click', function() {
        buttons.forEach(button => button.classList.remove('selected'));
        
        this.classList.add('selected');
    });
});

};