document.addEventListener('DOMContentLoaded', () => {
    const savedQuotesList = document.getElementById('savedQuotesList');
    const clearAllBtn = document.getElementById('clearAllBtn');
  
    function displaySavedQuotes() {
      let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
  
      savedQuotesList.innerHTML = '';
  
      savedQuotes.forEach((quote, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${quote.text} - ${quote.author}`;
        savedQuotesList.appendChild(listItem);
      });
    }
  
    clearAllBtn.addEventListener('click', () => {
      localStorage.removeItem('savedQuotes');
      displaySavedQuotes();
    });
  
    displaySavedQuotes();
  });
  
