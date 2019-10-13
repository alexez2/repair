var btn_open = document.querySelector("#button_callme")
var btn_close = document.querySelector("#close")
var modal = document.querySelector("#modal")


btn_open.addEventListener('click', function() {
     modal.classList.add('modal_active')
})

btn_close.addEventListener('click', function() {
    modal.classList.remove('modal_active')
})
