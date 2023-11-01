/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function searchFunction(event) {
event.preventDefault();
const searchTerm = document.getElementById('search').value;
// You can perform further actions with the search term, like sending it to a server or processing it locally.
console.log('Search term:', searchTerm);
}