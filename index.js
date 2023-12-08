"use strict"
let data

import('./src/moviesPlay.js')
	.then(res => {
		console.log('data imported into data constant');
		data = res;
	});

function inputChanged(event) {
	document.getElementById('output').innerHTML = event.target.value;
}

function onSubmit(event) {
	event.preventDefault();
	console.log('Form Submitted'); 
}

function showCounts() {
	console.log(data.getCounts());
}

function showMovies() {
	const outputDiv = document.getElementById('output');
	outputDiv.innerHTML = ''; 
  
	if (data && data.movies) {
	  data.movies.forEach(movies => {
		const movieDiv = document.createElement('div');
		movieDiv.textContent = `${movies.title} - Directed by ${movies.director}`;
		outputDiv.appendChild(movieDiv);
	  });
	} else {
	  console.error('Movie data not available.');
	}
  }