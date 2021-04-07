document.addEventListener('DOMContentLoaded', () => {
    // functions to call upon content load
    getQuote(); 

    // global variables 
    let button = document.querySelector('button');
    let quotes = document.querySelector('#quotes');
    let authors = document.querySelector('#authors');
    let likeBtn = document.querySelector('#liked');
    let favQuotesContainer = document.querySelector(".fav-quotes-container")
    let currentQuote = [];
    let author;
    let quote;

    // variable event listeners
    button.addEventListener('click', getQuote);
    likeBtn.addEventListener('click', favQuotes);
    

    // use captured response and display quotes & authors
    function getQuote() {
        fetchQuote().then((data) => {
            currentQuote.push(data); // push data into new object for like-btn accessibility 
            quotes.innerHTML = `<h2>'<em>${data.quote}</em>'</h2>`;
            authors.innerHTML = `<h4><em> ~  </em>${data.author}</h4>`;
        })
    }
    console.log('CURRENT QUOTE CONTENTS', currentQuote);

    // fetch random single quote 
    async function fetchQuote() {
        let response = await fetch('http://quotes.stormconsultancy.co.uk/random.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); 
        // use .json() at end of response to tell it what kind of format? (i.e. .text for promise resolved in raw text. )
        return data;
    }

    function favQuotes() {
        currentQuote.forEach(el => {
            favQuotesContainer.innerHTML = '';
           EventTarget.[el].author = author;
           [el].quote = quote;
            favQuotesContainer.innerHTML += `
            <h2>${quote}</h2>
            <h4>${author}</h4>
            `
        })
    }

    favQuotes();
    //////////////// END ///////////////
})
// [0].author

 ////////////////////OLD CODE //////////////////////
