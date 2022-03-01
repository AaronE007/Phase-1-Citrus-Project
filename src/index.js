//Varaibles


var baseUrlFilter = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php'
const baseUrlSearch = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'

const drinkCollection = document.querySelector('#drink-collection');

document.addEventListener("DOMContentLoaded", () => {
    searchBtn()
    grabCBtns()
});

const searchDrinks = (userInput) => {
    const url = baseUrlSearch + '?s=' + userInput
      fetch(url)
      .then(res => res.json())
      .then(hash => hash['drinks'].forEach(drink => renderDrink(drink)))
      .catch(_error => renderNone())
};

const getDrinks = (childNode) => {
    const url = baseUrlFilter + '?i=' + childNode.id
      fetch(url)
      .then(res => res.json())
      .then(hash => hash['drinks'].forEach(drink => renderDrink(drink))) 
    colorizeBtn()
};
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

};

const grabCBtns = () => {
    document.querySelector('#citrus-btns').childNodes.forEach(childNode => { 
        childNode.addEventListener('click', function(){
            removeDrinks()
            getDrinks(childNode)
        })
    })
};

const removeDrinks = () => {
    //drinkCollection.textContent = ""
    while (drinkCollection.firstChild) {
      drinkCollection.removeChild(drinkCollection.lastChild);
    }
  }

  const userInput = document.querySelector('#input-value')

  const searchBtn = () => {
    document.querySelector("#search-btn").addEventListener('click', function (e){
        e.preventDefault()
        const input = document.getElementById("input-value").value
          removeDrinks()
          searchDrinks(input)
    })
};

const renderNone = () => {
    const errorCard= document.createElement('div')
    errorCard.className = "card"

    const drinkName = document.createElement('h2')
    drinkName.innerText = "Error: No matching drinks!"

    errorCard.append(drinkName)
    drinkCollection.append(errorCard)

};

const changeColor = () => {
    const headers = document.querySelectorAll("h2") 
    headers.forEach(header =>{
    
        if (header.style.color == "blue") {
            header.style.color = ""
        }

        else if (header.style.color == "") {
            header.style.color = "blue"
        }
    })
}
const colorizeBtn = () =>{
   let colorBtn = document.querySelector('#colorize')
   colorBtn.style.display = "inline"
   colorBtn.addEventListener('click', () =>{
       changeColor()
   })


}