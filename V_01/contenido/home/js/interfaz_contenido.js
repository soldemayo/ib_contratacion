//Funciones de interfaz para acceso al objeto de la clase curso desde el contenido

var cursoActual = parent.miCurso;

function activarUnidad(idUnidad) {
	cursoActual.activarUnidad(idUnidad);	
}

function estaCompletadaUnidad(idUnidad) {
	cursoActual.estaCompletadaUnidad(idUnidad);	
}

function alternarHome() {
	cursoActual.alternarHome();	
}

function visualizarItemAnterior() {
	cursoActual.visualizarAnterior();
}

function visualizarItemSiguiente() {
	cursoActual.visualizarSiguiente();
}

function visualizarItemPorId(idUnidad, idItem) {
	cursoActual.visualizarItemPorId(idUnidad + ("000" + idItem).slice(-3));
}

function alternarGas(opcion) {
	cursoActual.alternarGas(opcion);
}

// objeto opciones:
//{
//	dimensiones: [x,y],
//  posicion: [x,y] (opcional: si no se especifica, se centra el popup),
//	url: <dirección de la página a cargar en el popup>,
//}

function abrirPopupExterno(opciones) {
	cursoActual.abrirPopupExterno(opciones);
}

function setPrimerElemTab(nuevoPrimerElemTab) {
	cursoActual.setPrimerElemTab(nuevoPrimerElemTab);
}

// Objeto listaAudios
//[{
//	idClip: <etiqueta del clip de audio>,
//	fichero: <nombre, sin extension, del fichero de audio>
//}, {...}, ...]
function registrarAudios( urlBase, listaAudios ) {
	cursoActual.locuciones.registrarAudios( urlBase, listaAudios );
}

function playAudio(idClip, restart) {
	cursoActual.locuciones.playAudio(idClip);
}

function pausarAudios() {
	cursoActual.locuciones.pausarAudios();
}