// // declaring array of gallery images 

// const image_slides = [
// "../assets/images/tat1.jpg",
// "../assets/images/tat2.jpg",
// "../assets/images/tat3.jpg",
// "../assets/images/tat4.jpg",
// ]




// let current_index =0;
// const main_image= document.getElementById("main_img");
// const sub_image = document.getElementById("sub_img");

// const pre_btn = document.getElementById("previous");
// const next_btn = document.getElementById("next");
// // function that displays an image 

// function show_image(index){
//     // main_image.style.opacity = 0.8 ;

//     setTimeout( () =>{
//         main_image.src = image_slides[index]
//         main_image.style.opacity = 1;
//         sub_image.src = image_slides[(index + 1) % image_slides.length]

//     },300)

   
// }


// next_btn.addEventListener('click',()=>{
//     current_index = (current_index+1) % image_slides.length;
//     show_image(current_index);
// })

// sub_image.addEventListener('click',()=>{

// })

// pre_btn.addEventListener('click',()=>{
//     current_index = (current_index-1+image_slides.length) % image_slides.length;
//     show_image(current_index);
// })



// window.onload = () => show_image(current_index) ;

const gallery = document.querySelectorAll('.gallery__1');
const gallery_2 = document.querySelectorAll('.gallery__2');

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    gallery.forEach((galleries)=>{
        galleries.setAttribute("data-animated",true);
    })
    gallery_2.forEach((gal)=>{
        gal.setAttribute("data-animated",true);
    })
}

// dropdown hide and show 
const tat_btn = document.getElementById('tat_btn');
 const tat_form = document.querySelector('.tat_form');

tat_btn.addEventListener('click', () =>{
    
    tat_form.classList.toggle('hide');
    //  if(tat_form.style.display === 'none'){
    //     tat_form.style.display ='flex';
    //  }else{
    //     tat_form.style.display = 'none'
    //  }

   
     
})


   
   















