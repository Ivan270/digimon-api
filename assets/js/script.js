let digiLista = document.getElementById('digiList');
let form = document.getElementById('digiForm');
let contenedorCard = document.getElementById('cardWrapper');
let title = document.getElementById('title');

// Lista de Digimon
let getDigimonList = async () => {
	try {
		let response = await fetch('https://digimon-api.vercel.app/api/digimon');
		let list = await response.json();

		// Inyecta digimons a la lista
		list.forEach((digimon) => {
			digiLista.innerHTML += `
            <option value="${digimon.name}" class="text-capitalize">${digimon.name}</option>
            `;
		});
	} catch (error) {
		console.log(error);
	}
};
getDigimonList();

// Display del Digimon elegido
let showDigimon = async (name) => {
	try {
		let response = await fetch(
			`https://digimon-api.vercel.app/api/digimon/name/${name}`
		);
		let data = await response.json();
		let digimon = data[0];

		// Inyección de card al documento
		contenedorCard.innerHTML = `
                    <div class="card" style="width: 100%">
						<img src="${digimon.img}" class="card-img-top" alt="Digimon" />
						<div class="card-body">
							<h5 class="card-title">${digimon.name}</h5>
							<p class="card-text">
								${digimon.level}
							</p>
							
						</div>
					</div>
        `;
	} catch (error) {
		console.log(error);
	}
};

form.addEventListener('submit', (event) => {
	event.preventDefault();
	let name = digiLista.value;
	showDigimon(name);
});

let changeColor = () => {
	title.classList.add('fw-bold');
};
