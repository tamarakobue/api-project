document.addEventListener('DOMContentLoaded', () => {
    // functions to call upon content load
    getQuote()

    // global variables
    let button = document.querySelector('button');
    let likeBtn = document.querySelector('#fav-button');

 

    // event listeners
    button.addEventListener('click', getQuote);
    likeBtn.addEventListener('click', likeQuote);
})

  // use captured response and display quotes & authors
  function getQuote() {
    let quotes = document.querySelector('#quotes');
    let authors = document.querySelector('#authors');
    let likeBtn = document.querySelector('#fav-button');
    
    //let currentQuote = [];

    fetch('http://quotes.stormconsultancy.co.uk/random.json')
    .then(res => res.json())
    .then(data => {

        // display random quote
        console.log('Success:', data)
        let newQuote = `<h2>'<em>${data.quote}</em>'</h2>`;
        let newAuthor = `<h4>'<em>${data.author}</em>'</h4>`;
        quotes.innerHTML = newQuote;
        authors.innerHTML = newAuthor; 

    })
    .catch((error) => {
        console.error(error);
    });
}

function likeQuote(event) {
    let favQuotesContainer = document.querySelector(".fav-quotes-container")
    favQuotesContainer.style.display = 'block';
    let favQuote = document.querySelectorAll('em')[0].innerHTML;
    let favAuthor = document.querySelectorAll('em')[1].innerHTML;
    favQuotesContainer.innerHTML += `<p>${favQuote} </br>- ${favAuthor}</p></hr>`
}