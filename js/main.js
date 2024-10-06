// LOADER

const imageUrls = [
  'https://res.cloudinary.com/nachodev/image/upload/q_auto,f_auto/laptop_white_ilz0q7.png',
  'https://res.cloudinary.com/nachodev/image/upload/q_auto,f_auto/laptop_black_cef644.jpg',
];

let imagesLoaded = 0;
const totalImages = imageUrls.length;

function checkAllImagesLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    console.log('Both images loaded successfully');
    document.querySelector('.loader').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');
  }
}

// Load each image
imageUrls.forEach((url) => {
  const img = new Image();
  img.src = url;

  img.onload = function () {
    console.log(`${url} loaded successfully`);
    checkAllImagesLoaded();
  };

  img.onerror = function () {
    console.log(`Failed to load ${url}`);
    checkAllImagesLoaded();
  };
});

window.onload = function () {
  window.addEventListener('scroll', () => {
    let navbar = document.querySelector('.navbar');
    let navbarLinks = document.querySelectorAll('.navbar a');
    let scrollUpBtn = document.querySelector('.scroll-up-btn');
    //let contentPosition = navbar.getBoundingClientRect().top;

    if (window.scrollY > 30) {
      navbar.classList.add('sticky');
      navbarLinks.forEach((link) => {
        link.classList.add('stickyLink');
      });
    } else {
      navbar.classList.remove('sticky');
      navbarLinks.forEach((link) => {
        link.classList.remove('stickyLink');
      });
    }

    if (this.scrollY > 500) {
      scrollUpBtn.classList.add('show');
    } else {
      scrollUpBtn.classList.remove('show');
    }
  });

  let scrollUpBtn = document.querySelector('.scroll-up-btn');
  let html = document.querySelector('html');

  scrollUpBtn.addEventListener('click', () => {
    html.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  // MOBILE NAVIGATION BUTTON EFFECT
  let nav = document.querySelector('.navbar ul');
  let btn = document.querySelector('.menu-btn');
  let closeNav = document.querySelectorAll('.closeNav');
  let bar1 = document.querySelector('.bar1');
  let bar2 = document.querySelector('.bar2');
  let bar3 = document.querySelector('.bar3');

  btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    bar3.classList.toggle('close');
    bar2.classList.toggle('close');
    bar1.classList.toggle('close');
  });

  // MOBILE NAVIGATION CLOSE EFFECT

  closeNav.forEach(function (closeNavs, index, array) {
    closeNavs.addEventListener('click', () => {
      nav.classList.toggle('active');
      btn.classList.toggle('active');
      bar3.classList.toggle('close');
      bar2.classList.toggle('close');
      bar1.classList.toggle('close');
    });
    // console.log(closeNavs);
  });
}; // Onload Function end

// Typing Animation Efffect

var typed = new Typed('.typed1', {
  strings: [
    'a Software Engineer',
    'a Fullstack Developer',
    'a Bubble.io Developer',
  ],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});
var typed = new Typed('.typed2', {
  strings: [
    'a Software Engineer',
    'a Fullstack Developer',
    'a Bubble.io Developer',
  ],
  typeSpeed: 150,
  backSpeed: 80,
  loop: true,
});

const form = document.querySelector('#form');
const submitForm = (e) => {
  e.preventDefault();

  let msg = document.querySelector('.conf-msg');
  const inputs = document.querySelectorAll('.validate');
  const invalidFields = Array.from(inputs).filter(
    (input) => input.value === ''
  );

  if (invalidFields.length > 0) {
    msg.classList.add('error');
    msg.innerHTML = 'Please fill in all fields';
    invalidFields.forEach((field) => {
      field.classList.add('inputError');
    });

    setTimeout(() => {
      msg.classList.remove('error');
      msg.innerHTML = '';
      invalidFields.forEach((field) => {
        field.classList.remove('inputError');
      });
    }, 3000);
    return false;
  } else {
    msg.classList.add('success');
    msg.innerHTML = 'Sent Successfully, Thank you.';

    form.submit();

    inputs.forEach((inp) => {
      inp.value = '';
    });
  }
};
form.addEventListener('submit', submitForm);

// DARK/LIGHT THEME SCRIPT

// Function to preload images
function preloadImage(url) {
  const img = new Image();
  img.src = url;
}

// Preload images for both themes
preloadImage(
  'https://res.cloudinary.com/nachodev/image/upload/laptop_white_ilz0q7.png'
);
preloadImage(
  'https://res.cloudinary.com/nachodev/image/upload/laptop_black_cef644.jpg'
);

const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
let iconTheme = document.querySelector('#iconTheme');

function updateIconColor() {
  if (!document.body.classList.contains('darkTheme')) {
    iconTheme.style.color = window.scrollY > 30 ? '#888888' : '#383838';
  }
}

// Function to load the theme
const loadTheme = (theme) => {
  if (theme === 'dark') {
    document.body.classList.add('darkTheme');
    iconTheme.classList.add('fa-sun');
    iconTheme.classList.remove('fa-moon');
    iconTheme.style.color = '#ffe6c0'; // Optional: change icon color for dark mode
  } else {
    document.body.classList.remove('darkTheme');
    iconTheme.classList.add('fa-moon');
    iconTheme.classList.remove('fa-sun');
    updateIconColor();
  }
};

// Load saved theme or system theme
if (userTheme === 'dark' || (!userTheme && systemTheme)) {
  loadTheme('dark');
} else {
  loadTheme('light');
}

// Toggle theme on icon click and save preference
iconTheme.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('darkTheme');
  if (isDarkMode) {
    iconTheme.classList.add('fa-sun');
    iconTheme.classList.remove('fa-moon');
    iconTheme.style.color = '#ffe6c0'; // Change sun icon to white for dark mode
    localStorage.setItem('theme', 'dark'); // Save preference
  } else {
    iconTheme.classList.add('fa-moon');
    iconTheme.classList.remove('fa-sun');
    updateIconColor();
    localStorage.setItem('theme', 'light'); // Save preference
  }
});

window.addEventListener('scroll', updateIconColor);
updateIconColor();
