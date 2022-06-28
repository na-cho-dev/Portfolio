
var loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    loader.classList.add('disappear')
});

//alert("I'am working fine");

// var y = window.scrollY;

// console.log(Math.round(y));

window.onload = function(){

window.addEventListener("scroll", ()=>{
    let navbar = document.querySelector(".navbar");
    let scrollUpBtn = document.querySelector('.scroll-up-btn');
    //let contentPosition = navbar.getBoundingClientRect().top;

    if(this.scrollY > 30){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }

    if(this.scrollY > 500){
        scrollUpBtn.classList.add('show');
    }
    else{
        scrollUpBtn.classList.remove('show');
    }
    });

    let scrollUpBtn = document.querySelector('.scroll-up-btn');
    let html = document.querySelector('html');

    scrollUpBtn.addEventListener('click', () => {
    // html.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior: 'smooth'
    //   });

    html.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });



// MOBILE NAVIGATION BUTTONM EFFECT
    let nav = document.querySelector(".navbar ul");
    let btn = document.querySelector(".menu-btn");
    let closeNav = document.querySelectorAll(".closeNav");
    let bar1 = document.querySelector(".bar1");
    let bar2 = document.querySelector(".bar2");
    let bar3 = document.querySelector(".bar3");

    btn.addEventListener("click", ()=>{
    
        nav.classList.toggle("active");
        bar3.classList.toggle("close");
        bar2.classList.toggle("close");
        bar1.classList.toggle("close");
    });

// mOBILE nAVIGATION cLOSE eFFECT

    closeNav.forEach(function(closeNavs, index, array){

        closeNavs.addEventListener('click', () => {
            nav.classList.toggle("active");
            btn.classList.toggle("active"); 
            bar3.classList.toggle("close");
            bar2.classList.toggle("close");
            bar1.classList.toggle("close");
        })
        // console.log(closeNavs);
    });

}// Onload Function end

// Typing Animation Efffect

var typed = new Typed(".typed1", {
    strings: ["a Developer", "a Freelancer", "a Designer", "a Blogger"],
    typeSpeed: 150,
    backSpeed: 80,
    loop: true
});
var typed = new Typed(".typed2", {
    strings: ["a Developer", "a Freelancer", "a Designer", "a Blogger"],
    typeSpeed: 150,
    backSpeed: 80,
    loop: true
});






let submit = document.querySelector("form");
let msg = document.querySelector(".conf-msg");
let user = document.querySelector(".user");
let email = document.querySelector(".email");
let subject = document.querySelector(".subject");
let comment = document.querySelector(".textarea");

// console.log(name.value);
submit.addEventListener("submit", (e) => {
    e.preventDefault();

    if(user.value.trim() == "" || email.value.trim() == "" || subject.value.trim() || comment.value.trim() == ""){

        user.style.border = "2px solid #a00000";
        email.style.border = "2px solid #a00000";
        subject.style.border = "2px solid #a00000";
        comment.style.border = "2px solid #a00000";
    }
        

});
