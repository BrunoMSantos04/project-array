const list = document.querySelector('ul')
const buttonShow = document.querySelector('.show-all')
const buttonMap = document.querySelector('.map')
let MyLi = ''

function showAll(productsArray) {
    MyLi = ''

    productsArray.forEach((product) => {
        MyLi += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">R$ ${Math.round(product.price)},00</p>
                </li>
                    ` 
    })
    list.innerHTML = MyLi
}



function mapList (){
    const NewPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9 
    }))

    showAll(NewPrices)
}



buttonShow.addEventListener('click', () => showAll(menuOptions)) //colocar uma funcao anonima na frente para o programa nao starta junto a funcao
buttonMap.addEventListener('click', mapList)
