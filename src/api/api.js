import axios from 'axios';

export let globalDrinks = [];
export let globalIngredients = [];
export let globalChyba = 'none';
export let globalSelectedIngredients = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];

const baseUrl = 'http://localhost:8888/'

export async function getIngredients() {
	globalIngredients = await axios.get(baseUrl + 'ingredients');
	return globalIngredients;
}


//.data["alco ingredients"]

export async function getChyba() {
	globalChyba = await axios.get(baseUrl + 'chyba');
	return globalChyba;
}


export async function getDrinks() {
	const response = await axios.get(
		baseUrl + 'cocktail/' + globalSelectedIngredients.join(',')
	);
	globalDrinks = response.data["Available cocktails"];
	console.log(globalDrinks);
	return globalDrinks;
}

export async function selectDrink(name) {
	await axios.get(baseUrl + 'drink/name=' + name);
}

export async function selectIngredient(name, index) {
	if (index < 7) {await axios.get(baseUrl + 'ingredient/name=' + index + ':' + name);
} else {
	await axios.get(baseUrl + 'ingredient/name=' + ((2*index)+31) + ':' + name);
}
}

/**
 * 
 * @param {Array<string>} containers containers that will be cleaned
 * @example startCleaning(['A', 'B']) 
 */
 export async function startCleaning(containers) {
	await axios.get(baseUrl + 'hardware/clean=' + containers.join(','))
}

export async function ModalAnswer(chyba) {
	await axios.get(baseUrl + 'hardware/post_response=' + chyba)
}