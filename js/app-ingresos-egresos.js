// Selectores
const formIngresos = document.querySelector('#agregar-ingresos');
const formEgresos = document.querySelector('#agregar-egresos');
const ingresosListado = document.querySelector('#ingresos-parcial');
const egresosListado = document.querySelector('#egresos-parcial');

// Eventos
formIngresos.addEventListener('submit', agregarIngresos);
formEgresos.addEventListener('submit', agregarEgresos);

let income = 0;

function calculateIncome(num) {
	const elementIncome = document.querySelector('#total-ingresos');
	const incomeTotal = (income += num);
	elementIncome.innerHTML = incomeTotal;
	return incomeTotal;
}

function getTotalNode() {
	return document.querySelector('#total-ingresos');
}

function getTotalIncome() {
	let sum = 0;
	const values = Array.from(document.querySelectorAll('.income-value'));
	const getValues = values.map((node) =>
		Number(node.innerHTML.replace('$ ', ''))
	);

	getValues.forEach((element) => (sum += element));
	return sum;
}

function renderTotalIncome() {
	const node = getTotalNode();
	return (node.innerHTML = getTotalIncome());
}
// Funciones
function agregarIngresos(e) {
	e.preventDefault();

	// Leer datos del form ingresos
	let ingreso = document.querySelector('#ingreso').value;
	let cantidadIngreso = Number(
		document.querySelector('#cantidad-ingreso').value
	);

	// const income = calculateIncome(cantidadIngreso);

	let fechaIngreso = document.querySelector('#fecha-ingreso').value;

	// Formatear fecha
	let diaIngreso = new Date(fechaIngreso);
	const diaIngresoFormato = diaIngreso.toLocaleDateString('es-AR', {
		timeZone: 'UTC'
	});

	const nuevoIngreso = document.createElement('li');
	nuevoIngreso.className =
		'list-group-item d-flex justify-content-between align-items-center';

	// Generar el HTML del ingreso
	nuevoIngreso.innerHTML = `
        <div class="col-lg-4">${diaIngresoFormato}</div>
        <div class="col-lg-4">${ingreso}</div>
        <div class="col-lg-4"><span class="badge badge-primary badge-pill income-value">$ ${cantidadIngreso}</span></div>
        `;

	// Agregar al HTML
	ingresosListado.appendChild(nuevoIngreso);
	renderTotalIncome();
	console.log(nuevoIngreso);

	// Reiniciar el form
	formIngresos.reset();
}

function agregarEgresos(e) {
	e.preventDefault();

	// Leer datos del form egresos
	let egreso = document.querySelector('#egreso').value;
	let cantidadEgreso = Number(document.querySelector('#cantidad-egreso').value);
	let fechaEgreso = document.querySelector('#fecha-egreso').value;

	// Formatear fecha
	let diaEgreso = new Date(fechaEgreso);
	const diaEgresoFormato = diaEgreso.toLocaleDateString('es-AR', {
		timeZone: 'UTC'
	});

	const nuevoEgreso = document.createElement('li');
	nuevoEgreso.className =
		'list-group-item d-flex justify-content-between align-items-center';

	// Generar el HTML del egreso
	nuevoEgreso.innerHTML = `
        <div class="col-lg-4">${diaEgresoFormato}</div>
        <div class="col-lg-4">${egreso}</div>
        <div class="col-lg-4"><span class="badge badge-primary badge-pill">$ ${cantidadEgreso}</span></div>        
        `;

	// Agregar al HTML
	egresosListado.appendChild(nuevoEgreso);

	console.log(nuevoEgreso);

	// Reiniciar el form
	formEgresos.reset();
}
