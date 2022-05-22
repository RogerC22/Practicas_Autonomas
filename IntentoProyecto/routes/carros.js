const { Router } =  require('express');
const { check }=  require('express-validator')  ;
const { obtenerCarro, 
        obtenerCarros,
        crearCarro,
        actualizarCarro,
        borrarCarro      
} = require('../controllers').Carro;

const { validarCampos  } = require('../middlewares');

const router =  Router();

router.get('/' , obtenerCarros )
router.get('/:id', 
[ check('id', 'El id no es válido').isMongoId(), validarCampos ]
,obtenerCarro )
router.post('/',  
[check('numPlaca','La placa es obligatoria').not().isEmpty(), validarCampos]
, crearCarro)
router.put('/:id', [ check('id', 'El id no es válido').isMongoId(), validarCampos ],
  actualizarCarro)
router.delete('/:id', [ check('id', 'El id no es válido').isMongoId(), validarCampos ] , borrarCarro)

module.exports = router;