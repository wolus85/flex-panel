const panels = document.querySelectorAll('.panel')

function openImage (e) {
e.target.classList.add('open')
}

panels.forEach((panel)=> panel.addEventListener('click', openImage))