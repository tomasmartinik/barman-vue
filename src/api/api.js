import axios from 'axios';

export let globalDrinks = [];
export let globalIngredients = [];
export let globalChyba = 'sklenice';
export let globalSelectedIngredients = [];

const baseUrl = 'http://localhost:8888/'

export async function getIngredients() {
	globalIngredients = await axios.get(baseUrl + 'ingredients');
	return globalIngredients;
}


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
	await axios.get(baseUrl + 'clean?containers=' + containers.join(','))
}

export async function ModalAnswer(chyba) {
	await axios.get(baseUrl + 'odpoved?chyba=' + chyba)
}