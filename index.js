// URL de la API de OpenLibra una página de libros
const API_URL = 'https://www.etnassoft.com/api/v1/get/';

// Se obtiene el elemento del DOM - se coloca $ para saber que es del DOM, no es necesario
const $root = document.querySelector('#root');

// Se consulta mediante fetch que es una promesa
// A la URL se le pasan los parámetros dependiendo de lo que queremos
// En este caso los libros que están en español y quiero que me muestre 25
fetch(`${API_URL}?category=programacion&lang=spanish&num_items=25`)
	.then(response => response.json())
	.then(books => {
		//Aquí hacemos el código de lo que necesitamos
		console.log(books);
		books.forEach(book => {
			let $card = document.createElement('div');
			$card.setAttribute('class', 'card')

			let $title = document.createElement('h2');
			$title.appendChild(document.createTextNode(book.title));

			let $cover = document.createElement('img');
			$cover.setAttribute('src', book.cover)

			let $paragraph = document.createElement('p');
			$paragraph.innerHTML = book.content_short;

			let $download = document.createElement('a');
			$download.innerHTML = 'Descargar';
			$download.setAttribute('href', book.url_download);
			$download.setAttribute('target', '_blank');
			
			$card.appendChild($title);
			$card.appendChild($cover);
			$card.appendChild($paragraph);
			$card.appendChild($download);

			$root.appendChild($card);
		})	
	});
