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



if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    const gallery = document.querySelectorAll('.gallery__1');
const gallery_2 = document.querySelectorAll('.gallery__2');

    gallery.forEach((galleries)=>{
        galleries.setAttribute("data-animated",true);
    })
    gallery_2.forEach((gal)=>{
        gal.setAttribute("data-animated",true);
    })
}


function pauseanimation(){
    
    const images = document.querySelectorAll('.gallery__1--cont img');

    images.forEach((img)=>{
        img.addEventListener('mouseenter',()=>{
            img.style.width = "50vw"

    })
    })
}

//pauseanimation();

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



// Gallery Auto-Scrolling Functionality
function setupGalleryScroller() {
    // Check if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return; // Exit if reduced motion is preferred
    }

    // Select all gallery containers
    const galleries = [
        document.querySelector('.gallery__1--cont'),
        document.querySelector('.gallery__2--cont')
    ];

    // Set different speeds for each gallery
    const speeds = [15, 10]; // pixels per frame

    // Clone all images to create seamless looping
    galleries.forEach((gallery, index) => {
        if (!gallery) return;

        // Clone all children and append to create infinite loop
        const children = Array.from(gallery.children);
        children.forEach(child => {
            const clone = child.cloneNode(true);
            gallery.appendChild(clone);
        });
    });

    // Animation function
    let lastTime = 0;
    function animate(currentTime) {
        if (!lastTime) lastTime = currentTime;
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;

        galleries.forEach((gallery, index) => {
            if (!gallery) return;

            // Get current scroll position
            const currentScroll = parseFloat(gallery.dataset.scroll) || 0;
            
            // Calculate new scroll position
            const scrollAmount = speeds[index] * (deltaTime / 16); // Normalize to 60fps
            let newScroll = currentScroll + scrollAmount;
            
            // Reset scroll position when we've scrolled halfway
            const firstChild = gallery.children[0];
            if (firstChild) {
                const childWidth = firstChild.offsetWidth;
                const gap = parseFloat(window.getComputedStyle(gallery).gap) || 0;
                const totalWidth = (childWidth + gap) * (gallery.children.length / 2);
                
                if (newScroll >= totalWidth) {
                    newScroll = 0;
                }
            }
            
            // Apply the new scroll position
            gallery.style.transform = `translateX(-${newScroll}px)`;
            gallery.dataset.scroll = newScroll;
        });

        requestAnimationFrame(animate);
    }

    // Start the animation
    requestAnimationFrame(animate);

    // Pause on hover functionality
    galleries.forEach(gallery => {
        if (!gallery) return;
        
        gallery.addEventListener('mouseenter', () => {
            gallery.style.animationPlayState = 'paused';
            // You can add zoom effect here if needed
        });
        
        gallery.addEventListener('mouseleave', () => {
            gallery.style.animationPlayState = 'running';
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupGalleryScroller();
    
    // Your existing dropdown toggle
    const tat_btn = document.getElementById('tat_btn');
    const tat_form = document.querySelector('.tat_form');
    
    if (tat_btn && tat_form) {
        tat_btn.addEventListener('click', () => {
            tat_form.classList.toggle('hide');
        });
    }
});
   
   















