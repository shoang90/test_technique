	
function ajouterTache() {
	let ligne = document.createElement('div');
	ligne.className += "singleTache";
	ligne.textContent = 'Ligne ajoutée';
	document.getElementById('conteneur').appendChild(ligne);
}