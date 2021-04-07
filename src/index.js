const { data } = require("jquery")

document.addEventListener('DOMContentLoaded', () => {
    getQuote()
    let button = document.querySelector('button')
    button.addEventListener('click', getQuote)
    let likeBtn = document.querySelector('#liked')
    likeBtn.addEventListener('click', saveLiked)
})

let quotes = document.querySelector('#quotes')
let authors = document.querySelector('#authors')

async function getQuote() {
    let response = await fetch('http://quotes.stormconsultancy.co.uk/random.json')
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.data();
}

getQuote().then((data) => {
    let newQuote = `<h2>'<em>${data.quote}</em>'</h2>`;
    let newAuthor = `<h4><em>~ </em>${data.author}</h4>`;
    quotes.innerHTML = newQuote;
    authors.innerHTML = newAuthor;
})


// when user clicks a like button data is saved in their favorites


    async function myFetch() {
        let response = await fetch ('http://quotes.stormconsultancy.co.uk/quotes.json?callback=my_method')

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        let newData = await response.data();
    }

    myFetch().then((data) => {

    })




    // fetch('http://quotes.stormconsultancy.co.uk/random.json')
    // .then(res => res.json())
    // .then(data => {
    //     console.log('Sucess:', data)
    //     let newQuote = `<h2>'<em>${data.quote}</em>'</h2>`;
    //     let newAuthor = `<h4><em>~ </em>${data.author}</h4>`;
    //     quotes.innerHTML = newQuote;
    //     authors.innerHTML = newAuthor; 
    // })
    // .catch((error) => {
    //     console.error(error);
    //   });
    // // capture data.id of current fetched quote and display in favorites
    // let favQuote = ...data.id
