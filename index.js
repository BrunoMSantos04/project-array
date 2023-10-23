const list = document.querySelector('ul')
const buttonShow = document.querySelector('.show-all')
let MyLi = ''

function showAll() {
    menuOptions.forEach((product) => {
        MyLi += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">R$ ${product.price},00</p>
                </li>
                    ` 
    })
    list.innerHTML = MyLi
}


buttonShow.addEventListener('click', showAll)
