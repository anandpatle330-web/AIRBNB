// public/js/search.js
function handleSearch(event) {
    event.preventDefault(); // Form submit hone se rokna
    const query = document.getElementById('searchInput').value.trim();
    if (query !== '') {
      window.location.href = `/search?query=${encodeURIComponent(query)}`;
    } else {
      alert("Please enter a destination.");
    }
  }
  