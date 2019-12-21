const panel = document.querySelectorAll('.panel')

function toggle(){
    this.classList.toggle('open')
}
panel.forEach(pan => pan.addEventListener('click', toggle));


