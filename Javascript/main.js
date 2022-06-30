
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
    strings: ["a Web Developer", "a Freelancer", "a Graphics Designer", "a Affiliate Marketer"],
    typeSpeed: 150,
    backSpeed: 80,
    loop: true
});
var typed = new Typed(".typed2", {
    strings: ["a Web Developer", "a Freelancer", "a Graphics Designer", "a Affiliate Marketer"],
    typeSpeed: 150,
    backSpeed: 80,
    loop: true
});





// const form = document.querySelector("#form");
// const submitForm = (e) => {
//   e.preventDefault();
//   const inputs = document.querySelectorAll('.validate');
//   const invalidFields = Array.from(inputs).filter(input => input.value === "");
//   if (invalidFields.length > 0) {
//     invalidFields.forEach((field) => {
//       field.classList.add('error')
//     })
//     return false;
//   } else {
//     form.submit();
//   }
// }
// form.addEventListener("submit", submitForm);


const form = document.querySelector("#form");
const submitForm = (e) => {
  e.preventDefault();

  let msg = document.querySelector(".conf-msg");
  const inputs = document.querySelectorAll('.validate');
  const invalidFields = Array.from(inputs).filter(input => input.value === "");

  if (invalidFields.length > 0) {

        msg.classList.add("error");
        msg.innerHTML = "Please fill in all fields";
        invalidFields.forEach((field) => {
            field.classList.add('inputError')
        })

        setTimeout(() => {
            msg.classList.remove("error");
            msg.innerHTML = "";
            invalidFields.forEach((field) => {
            field.classList.remove('inputError')
        })
        }, 3000);
        return false;
  } 
  else {
    msg.classList.add("success");
    msg.innerHTML = "Sent Successfully, Thank you.";

    inputs.forEach(inp => {
        inp.value = "";
    })

    form.submit();
  }
}
form.addEventListener("submit", submitForm);


// const form = document.querySelector("#form");

// const submitForm = (e) => {
//     e.preventDefault();

// let inputs = Array.from(document.querySelectorAll('.validate'));
// let msg = document.querySelector(".conf-msg");
    
//     const invalidFields = inputs.filter(input => input.value === "");
//     const validFields = inputs.filter(input => input.value !== "");

//         if(invalidFields.length > 0){
//             msg.classList.add("error");
//             msg.innerHTML = "Please fill in all fields"
            
//             invalidFields.forEach(invalidInputs => {
//                 invalidInputs.classList.add("inputError");
                

//                 setTimeout( () => {
//                     msg.classList.remove("error");
//                     msg.innerHTML = "";
//                     invalidInputs.classList.remove("inputError");
//             }, 3000);
//             });
//             return false;
//         }
//         else if(validFields.length > 0){
            
//             validFields.forEach(validInputs => {
//                 validInputs.value = "";
//             });

//             msg.classList.add("success");
//             msg.innerHTML = "Sent Successfully, Thank you.";

//             setTimeout( () => {
//                     msg.classList.remove("success");
//                     msg.innerHTML = "";
//             }, 3000);

//             form.submit();
//         }
// }
// form.addEventListener("submit", submitForm);