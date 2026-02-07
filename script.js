// read custom message from query strings
// Tutorial -> https://youtu.be/6ojp1iWUKw8

const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

// the tutorial starts here

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true



btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{
    //
    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
  
  }, 500)

})
btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  },500)
})

const popup = document.querySelector('#popup')
const yesBtn = document.querySelector('#yesBtn')
const noBtn = document.querySelector('#noBtn')
const gifContainer = document.querySelector('#gifContainer')
const gifImage = document.querySelector('#gifImage')

// URLs de tus GIFs (cambiá estos links por los que quieras)
const gifYes = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDZyZ3BnbjlqMHZ4NGRkOGh4aml0MjE5M2Q3Nnh2Y3Nya2cyOGg3MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vPzbDN4rBxuvtpSpzF/giphy.gif'
const gifNo = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHdvczNvZWZkMjBrYXFiNncxNWo0N2o4OTlhOGU4YnJqNW1jcHc1biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8bhkxUrPbedysrZjTi/giphy.gif'

// Mostrar popup cuando se abre la carta
btnOpenElement.addEventListener('click', () => {
  setTimeout(() => {
    popup.style.display = 'flex'
  }, 800)
})

yesBtn.addEventListener('click', () => {
  popup.style.display = 'none'
  gifImage.src = gifYes
  gifContainer.style.display = 'flex'
})

noBtn.addEventListener('click', () => {
  popup.style.display = 'none'
  gifImage.src = gifNo
  gifContainer.style.display = 'flex'
})

const closeGifBtn = document.querySelector('#closeGif')

closeGifBtn.addEventListener('click', () => {
  gifContainer.style.display = 'none'
  gifImage.src = ''
})
