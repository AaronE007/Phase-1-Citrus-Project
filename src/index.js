//Varaibles

const baseUrlFilter = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php'
const baseUrlSearch = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'

const drinkCollection = document.querySelector('#drink-collection')


const searchDrinks = (userInput) => {
    const url = baseUrlSearch + '?s=' + userInput
    console.log(url)
      fetch(url)
      .then(res => res.json())
      .then(hash => hash['drinks'].forEach(drink => renderDrink(drink))) 

}

const getDrinks = (childNode) => {
    const url = baseUrlFilter + '?i=' + childNode.id
      fetch(url)
      .then(res => res.json())
      .then(hash => hash['drinks'].forEach(drink => renderDrink(drink))) 
}
const renderDrink = (drink) => {
    const drinkCard = document.createElement('div')
    drinkCard.className = "card"

    const drinkName = document.createElement('h2')
    drinkName.innerText = drink.strDrink

    const drinkImage = document.createElement('img')
    drinkImage.src = drink.strDrinkThumb
    drinkImage.className = "drink-image"

    drinkCard.append(drinkName, drinkImage)

    drinkCollection.append(drinkCard)

}

const grabCBtns = () => {
    document.querySelector('#citrus-btns').childNodes.forEach(childNode => { 
        childNode.addEventListener('click', function(){
            removeDrinks()
            getDrinks(childNode)
        })
    })
}

const removeDrinks = () => {
    while (drinkCollection.firstChild) {
      drinkCollection.removeChild(drinkCollection.lastChild);
    }
  }

  const userInput = document.querySelector('#input-value')

  const searchBtn = () => {
    document.querySelector("#search-btn").addEventListener('click', function (e){
        e.preventDefault()
        const input = document.getElementById("input-value").value
  