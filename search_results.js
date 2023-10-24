let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);

let searchTerm = urlParams.get("q");
let searchFormat = urlParams.get("format");

if (searchFormat) {
	var queryURL = "https://www.loc.gov/collections/";
	queryURL += `${searchFormat}/`;
} else {
	var queryURL = "https://www.loc.gov/search/";
}
queryURL += `?q=${searchTerm}&fo=json`;

fetch(queryURL)
	.then((response) => response.json())
	.then((data) => {
		console.log(data.caption.description[0]);
	});
