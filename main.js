const darkMode = document.querySelector('#darkmode');

darkMode.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark');
})

const navLinks = document.querySelector('.nav-links');

navLinks.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('top-[9%]')
})
