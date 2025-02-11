const testimonial = [
    { 
        name : "Cherise G",
        photourl : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple."
    },
    { 
        name : "Emily Thompson",
        photourl : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text: "I have been a loyal customer of Apple for years now and I must say, their mobiles are truly exceptional. The sleek design, user-friendly interface, and top-notch performance make them stand out from the rest. I can't imagine using any other brand now. Apple has really set the bar high in the tech industry."
    },
    { 
        name : "Emily Johnson",
        photourl : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text: "Apple's mobiles are sleek, powerful, and innovative. I am beyond impressed with the cutting-edge technology and design of their products. From the moment I started using my new device, I knew I made the right choice. Apple truly delivers excellence in every aspect."
    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username"); 

let idx = 0;

function updateTestimonial(){
    const { name, photourl, text } = testimonial[idx]; // Fixed destructuring
    imgEl.src = photourl;
    textEl.innerText = text; // Corrected variable name
    usernameEl.innerText = name;
    
    idx++;
    if(idx === testimonial.length){
        idx = 0;
    }

    setTimeout(() => {
        updateTestimonial();
    }, 5000);
}

updateTestimonial(); 
