document.addEventListener('DOMContentLoaded', () => {
    getData()
    const form = document.getElementById('search-word-form');
    const input = document.getElementById('new-word-input').value;
    const newWords = document.getElementById('words')
    form.addEventListener('submit', displayWords);
    
})
const BASE_URL = 'https://wordsapiv1.p.mashape.com/words/'
function getData() {
    const input = document.getElementById('new-word-input').value;
    fetch(`BASE_URL + ${input}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b6af3e1462msh77dd79715f95790p129d91jsn33c69e8926af",
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
	}
})
    .then(response => response.json())
    .then(response => {
        console.log(response);
        resonse
    })
    .catch(err => {
        console.error(err);
    });
}