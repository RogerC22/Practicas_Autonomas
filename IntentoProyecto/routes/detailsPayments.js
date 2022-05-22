const { Router } =  require('express');
const { check }=  require('express-validator')  ;
const { obtenerPagos, 
        obtenerPago,
        crearPago,
        actualizarPago,
        borrarPago     
} = require('../controllers').Pago;

const { validarCampos  } = require('../middlewares');

const router =  Router();

router.get('/' , obtenerPagos )
router.get('/:id', 
[ check('id', 'El id no es válido').isMongoId(), validarCampos ]
,obtenerPago )
router.post('/',  
[check('parkingId','Detallar el parqueadero es obligatorio').not().isEmpty(), validarCampos]
, crearPago)
router.put('/:id', [ check('id', 'El id no es válido').isMongoId(), validarCampos ],
  actualizarPago)
router.delete('/:id', [ check('id', 'El id no es válido').isMongoId(), validarCampos ] , borrarPago)

module.exports = router;