document.addEventListener('DOMContentLoaded', () => {
    // functions to call upon content load
    getQuote(); 
    favDisplay();

    // global variables 
    let button = document.querySelector('button');
    let quotes = document.querySelector('#quotes');
    let authors = document.querySelector('#authors');
    let likeBtn = document.querySelector('#liked');
    let favQuotesContainer = document.querySelector(".fav-quotes-container")
    let currentQuote = [];


    // variable event listeners
    button.addEventListener('click', getQuote);
    likeBtn.addEventListener('click', myFav);
    

    // use captured response and display quotes & authors
    function getQuote() {
        fetchQuote().then((data) => {
            currentQuote.push(data); // push data into new object for like-btn accessibility 
            quotes.innerHTML = `<h2>'<em>${data.quote}</em>'</h2>`;
            authors.innerHTML = `<h4><em> ~  </em>${data.author}</h4>`;
        })
    }
    console.log(currentQuote);

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

    function favDisplay() {
        myFav().then((data) => {
            console.log('WE HAVE:', data);
            if (likeBtn === true) {
                data.forEach(data => {
                    favQuotesContainer.innerHTML +=`
                    <h2>${data.quote}</h2>
                    <h4>${data.author}</h4>
                    `

                })
            }
           
        })
    }

    async function myFav() {

        let response = await fetch ('http://quotes.stormconsultancy.co.uk/quotes.json/')
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        return data;
    }
 





// END
})

    // fetch('http://quotes.stormconsultancy.co.uk/random.json')
    // .then(res => res.json())
    // .then(data => {
    //     console.log('Success:', data)
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
