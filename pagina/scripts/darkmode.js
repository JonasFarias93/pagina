let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let menu_nav = document.querySelector('.menu_nav')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    menu_nav.classList.toggle('dark')
})