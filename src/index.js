let quotes = document.querySelector('#quotes')
let authors = document.querySelector('#authors')





function getQuotes() {
    fetch('http://quotes.stormconsultancy.co.uk/random.json')
    .then(res => res.json())
    .then(data => {
        console.log('Sucess:', data)
        newQuote = `<h2>'<em>${data.quote}</em>'</h2>`;
        newAuthor = `<h4>${data.author}</h4>`;
        quotes.innerHTML = newQuote;
        authors.innerHTML = newAuthor; 
       
    })
    .catch((error) => {
        console.error(error);
      });
}
let button = document.querySelector('button')
button.addEventListener('click', getQuotes)
document.addEventListener('DOMContentLoaded', () => {
    getQuotes()
})

function makeUpperCase() {

}