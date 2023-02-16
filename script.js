const form = document.querySelector('form')
const input = document.querySelector('input')
const list = document.querySelector('.list')
const btnInfo = document.querySelector('.btn-info')
const info = document.querySelector('.info')
const closeBtn = document.querySelector('.close-btn')

input.focus()

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = input.value
    const newTodo = document.createElement('div')
    newTodo.textContent = inputValue
    newTodo.classList.add('styleTodo')
    newTodo.addEventListener('click', () => {
        if(newTodo.style.textDecoration === 'line-through'){
            newTodo.style.textDecoration = 'none'
        }else{
            newTodo.style.textDecoration = 'line-through'
        }
    })
    newTodo.addEventListener('dblclick', () => {
        newTodo.classList.remove('styleTodo')
        newTodo.textContent = ''
    })
    list.appendChild(newTodo)
})

list.innerHTML = `
    <h1>Your List Here</h1>
`
btnInfo.addEventListener('click', () => {
    info.classList.toggle('slide-left')
})

closeBtn.addEventListener('click', () => {
    info.classList.add('slide-left')
})



