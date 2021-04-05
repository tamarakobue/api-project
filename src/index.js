document.addEventListener('DOMContentLoaded', () => {
    getQuotes()
})

let quotes = document.querySelector('.quotes')
let button = document.querySelector('button')
button.addEventListener('click', getQuotes)

function getQuotes() {
    fetch('http://quotes.stormconsultancy.co.uk/random.json')
    .then(res => res.json())
    .then(data => {
        console.log('Sucess:', data)
        quotes.innerHTML = 
        `
        <h2><em>${data.quote}</em></h2>
        <h4>${data.author}</h4>
        `
    })
    .catch((error) => {
        console.error(error);
      });
}
