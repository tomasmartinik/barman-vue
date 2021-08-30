import axios from 'axios';

export let globalDrinks = [];
export let globalIngredients = [];
export let globalSelectedIngredients = ['vodka', 'džus'];

const baseUrl = 'http://localhost:8888/'

export async function getIngredients() {
	globalIngredients = await axios.get(baseUrl + 'ingredients');
	return globalIngredients;
}


export async function getDrinks() {
	const response = await axios.get(
		baseUrl + 'drinks?ingredients=' + globalSelectedIngredients.join(',')
	);
	globalDrinks = response.data;
	return globalDrinks;
}

export async function startCleaning(containers) {
	await axios.get(baseUrl + 'clean?containers=' + containers.join(','))
}