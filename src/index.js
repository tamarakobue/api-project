document.addEventListener('DOMContentLoaded', () => {
    getQuote()
    let button = document.querySelector('button')
    button.addEventListener('click', getQuote)
})

let quotes = document.querySelector('#quotes')
let authors = document.querySelector('#authors')

function getQuote() {
    fetch('http://quotes.stormconsultancy.co.uk/random.json')
    .then(res => res.json())
    .then(data => {
        console.log('Sucess:', data)
        let newQuote = `<h2>'<em>${data.quote}</em>'</h2>`;
        let newAuthor = `<h4><em>~ </em>${data.author}</h4>`;
        quotes.innerHTML = newQuote;
        authors.innerHTML = newAuthor; 
    })
    .catch((error) => {
        console.error(error);
      });
}

// when user clicks a like button data is saved in their favorites