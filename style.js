
const botton = document.querySelector('#bottone')
const lista = document.querySelector('#lista')
const input = document.querySelector('#task')

botton.addEventListener('click', function () {

    let li = document.createElement('li')
    li.innerText = input.value



    let button = document.createElement('botton')
    button.innerText = 'elimina'

    button.addEventListener('click', function () {
        li.remove()
    })
    li.append(button)
    lista.append(li)

})

