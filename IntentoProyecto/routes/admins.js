const { Router } =  require('express');
const { check }=  require('express-validator')  ;
const { obtenerAdmins, 
        obtenerAdmin,
        crearAdmin,
        actualizarAdmin,
        borrarAdmin      
} = require('../controllers').Admin;

const { validarCampos  } = require('../middlewares');

const router =  Router();

router.get('/' , obtenerAdmins )
router.get('/:id', 
[ check('id', 'El id no es válido').isMongoId(), validarCampos ]
,obtenerAdmin )
router.post('/',  
[check('cedula','La cedula es obligatoria').not().isEmpty(), validarCampos]
, crearAdmin)
router.put('/:id', [ check('id', 'El id no es válido').isMongoId(), validarCampos ],
  actualizarAdmin)
router.delete('/:id', [ check('id', 'El id no es válido').isMongoId(), validarCampos ] , borrarAdmin)

module.exports = router;