// URL de la API de OpenLibra una página de libros
const API_URL = 'https://www.etnassoft.com/api/v1/get/?num_items=50&lang=spanish';

// Se obtiene el elemento del DOM - se coloca $ para saber que es del DOM, no es necesario
const $root = document.querySelector('#root');
const $txt_search = document.querySelector('#txt_search');
const $btn_search = document.querySelector('#btn_search');

$txt_search.addEventListener('input', () => {
	setTimeout(() => {

		fetch(`${API_URL}&book_title=${$txt_search.value}`)
			.then(response => response.json())
			.then(books => {
				$root.innerHTML = '';
				//Aquí hacemos el código de lo que necesitamos
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
				});
			});

	}, 2000);
})

// Se consulta mediante fetch que es una promesa
// A la URL se le pasan los parámetros dependiendo de lo que queremos
// En este caso los libros que están en español y quiero que me muestre 25

fetch(API_URL)
	.then(response => response.json())
	.then(books => {
		console.log(books);
		//Aquí hacemos el código de lo que necesitamos
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
		});
	});

