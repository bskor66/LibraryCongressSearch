let searchForm = document.getElementById("search-form");

function searchLibrary(event) {
	event.preventDefault();

	let searchTerm = document.getElementById("search-box").value;
	let searchFormat = document.getElementById("search-format").value;

	let queryString = `?q=${searchTerm}&format=${searchFormat}`;
	window.location.replace("./search-results.html" + queryString);
}

searchForm.addEventListener("submit", searchLibrary);
