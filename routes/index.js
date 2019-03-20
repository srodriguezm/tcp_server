var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var props = {
		title: 'Alcaldía Municipal de Piendamó',
		subtitle: 'Sistema de licitaciones',
		ruleTit: 'Reglas de la licitación',
		rules1: "1. Al momento de ingresar, el participante inicia su oferta con el valor base que es de 150.000.000, si nadie más ha ingresado a la licitación; de lo contrario ingresa con una oferta igual a la mayor oferta de la sala, más un valor aleatorio entre $5.000.000 y $10.000.000.",
		rules2:	"2. La asignación del contrato también es aleatoria basada en un ensayo de bernoulli con"+
						"probabilidad de éxito (PB) igual a un número aleatorio entre (0.3 y 0.8) y la asignación se"+
						"hace de forma inmediata. Esto significa que al momento de ingresar a la licitación o hacer"+
						"una oferta, se genera un número aleatorio para definir PB; luego se genera otro número"+
						"aleatorio en el mismo rango (0.3 y 0.8) que es la probabilidad de éxito del ofertante (PO). Si"+
						"PO > PB, entonces el contrato se asigna al contratista con el precio ofertado. Si esta"+
						"condición no se cumple, se siguen esperando ofertas hasta que la condición se cumpla.",
		rules3: "3. Los participantes solo pueden ofertar con tiempos de espera de 30 segundos. Esto quiere"+
						"decir que el botón para hacer ofertas solo se activa luego de 30 segundos desde la última"+
						"oferta.",
		lista: "Listado de ofertas"
	};

	res.render('index', props);
});

module.exports = router;
