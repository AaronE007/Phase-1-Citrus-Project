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