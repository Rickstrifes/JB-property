const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if (window.scrollY > 1) {
        navbar.classList.replace('bg-transparent', 'nav-color')
    } else if (this.window.scrollY <= 0) {
        navbar.classList.replace('nav-color','bg-transparent')
    }
});

// source js
// https://www.youtube.com/watch?v=hACvLQ2x2Cs&list=PL9E3AWZAtxc4es55LK6TMt8dVoq9nlfAr&index=11