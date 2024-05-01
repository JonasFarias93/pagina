let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let menu = document.querySelector('.menu')
let logo = document.querySelector('.logo')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    menu.classList.toggle('dark')
    logo.classList.toggle('dark')
})