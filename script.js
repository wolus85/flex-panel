const panels = document.querySelectorAll('.panel')

function openImage(e) {

  this.classList.toggle('open')
}

function showWords(e) {
 
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach((panel) => panel.addEventListener('click', openImage))

panels.forEach((panel) => panel.addEventListener('transitionend', showWords))


