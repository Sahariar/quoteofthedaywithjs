function loadQuotes() {
    const url = 'https://zenquotes.io/api/today'
    fetch(url).then(res => res.json()).then( quote => displayQuote(quote))
}

function displayQuote(quote){
    console.log(quote);
}

loadQuotes();