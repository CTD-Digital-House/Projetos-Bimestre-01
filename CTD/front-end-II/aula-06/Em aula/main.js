let bodyReference = document.querySelector('body')
let changeClassButtonRefernece = document.querySelector('#changeClassButton')
let pots = [{
    name: 'O tigre',
    preview: 'Texto',
    image: './imagens/tiger.jpg'
},
{
    name: 'O tigre',
    preview: 'Texto',
    image: './imagens/tiger.jpg'
},

]


function changeTheme() {

    bodyReference.classList.toggle('dark')

    if( bodyReference.classList.contains('dark') ) {

        changeClassButtonRefernece.innerText = 'mudar tema ☀️'

    } else {

        changeClassButtonRefernece.innerText = 'mudar tema 🌙'

    }

}