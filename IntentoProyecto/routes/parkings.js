const { Router } =  require('express');
const { check }=  require('express-validator')  ;
const { obtenerParkings, 
        obtenerParking,
        crearParking,
        actualizarParking,
        borrarParking     
} = require('../controllers').Parking;

const { validarCampos  } = require('../middlewares');

const router =  Router();

router.get('/' , obtenerParkings )
router.get('/:id', 
[ check('id', 'El id no es válido').isMongoId(), validarCampos ]
,obtenerParking )
router.post('/',  
[check('numParking','Detallar el parqueadero es obligatorio').not().isEmpty(), validarCampos]
, crearParking)
router.put('/:id', [ check('id', 'El id no es válido').isMongoId(), validarCampos ],
  actualizarParking)
router.delete('/:id', [ check('id', 'El id no es válido').isMongoId(), validarCampos ] , borrarParking)

module.exports = router;