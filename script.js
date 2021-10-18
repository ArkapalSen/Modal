'use strict'

const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const hiddenRemove =()=>{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const hiddenAdd = () =>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0;i<showModal.length;i++){
    // console.log(showModal[i])
    showModal[i].addEventListener('click',function(){
        // modal.classList.remove('hidden');
        // overlay.classList.remove('hidden');
        hiddenRemove();
    })
    closeModal.addEventListener('click',function(){
        // modal.classList.add('hidden');
        // overlay.classList.add('hidden');
        hiddenAdd();
    })
    overlay.addEventListener('click',function(){
        // modal.classList.add('hidden');
        // overlay.classList.add('hidden');
        hiddenAdd();
    })

    //for modal turning off by pressing esc key
    document.addEventListener('keydown',function(e){
        
        if(e.key=== 'Escape' && !modal.classList.contains('.hidden')){
            hiddenAdd();
        }
    })
}
