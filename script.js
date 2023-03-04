const form =document.querySelector('.form');
const buttons = document.querySelectorAll('.rating_sing_input');
const comment = document.querySelector('.rating_comment');
 buttons.forEach(() => {
    radio.addEventListener('change', function( ) {
        const checkedNumber= document.querySelector('.rating_sing_input: checked')

        buttons.forEach((item) =>{
            const currentLabel=item.previousElementSibling;
            if(item.value<=checkedNumber ) {
            currentLabel.classList.add('check');  
            } else {
                currentLabel.classList.remove('check');   
            }
         });
    }); 
 });