const quote = document.getElementById("text");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");

fetch('https://dummyjson.com/quotes')
  .then(response => response.json())
  .then(data => {
    const fetchQuote = () => {
      const quotes = data.quotes;
      const randomQuote = quotes[Math.floor(Math.random() *       quotes.length)];
      quote.innerText = `"${randomQuote.quote}"`;
      author.innerText = `- ${randomQuote.author}`
    }
    newQuote.addEventListener("click", fetchQuote)
  })
  
  .catch(error => console.error('Error fetching quotes:', error));

document.addEventListener('DOMContentLoaded', function () {
  const img = document.getElementById('background-img');

  function showContent() {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
  }

  if (img.complete) {
    showContent();
  } else {
    img.onload = showContent;
  }

  setTimeout(showContent, 3000); 
});



