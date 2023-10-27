const list = document.querySelector('ul')
const buttonShow = document.querySelector('.show-all')
const buttonMap = document.querySelector('.map-all')
const buttonReduce = document.querySelector('.sum-all')
const buttonFilter = document.querySelector('.filter')
let MyLi = ''

function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })

    return newValue
}

function showAll(productsArray) {
    MyLi = ''

    productsArray.forEach((product) => {
        MyLi += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">${(formatCurrency(product.price))}</p>
                </li>
                    ` 
    })
    list.innerHTML = MyLi
}



function mapList () {
    const NewPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9 
    }))

    showAll(NewPrices)
}

function reduceList(){
    const finalValue = menuOptions.reduce( (acc, current) => acc + current.price, 0)
    list.innerHTML = `
    <li> 
        <p>O valor final dos itens é ${formatCurrency(finalValue)}</p>
    </li>
   `
}

function filterList (){
    const filterVegan = menuOptions.filter((product) => product.vegan) // (product) => product.vegan) é a mesma coisa que: (product) => product.vegan === true

    showAll(filterVegan)
}

buttonShow.addEventListener('click', () => showAll(menuOptions)) //colocar uma funcao anonima na frente para o programa nao starta junto a funcao
buttonMap.addEventListener('click', mapList)
buttonReduce.addEventListener('click', reduceList)
buttonFilter.addEventListener('click', filterList)
