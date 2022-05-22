const { Router } =  require('express');
const { check }=  require('express-validator')  ;
const { obtenerUsers, 
        obtenerUser,
        crearUser,
        actualizarUser,
        borrarUser      
} = require('../controllers').User;

const { validarCampos  } = require('../middlewares');

const router =  Router();

router.get('/' , obtenerUsers )
router.get('/:id', 
[ check('id', 'El id no es válido').isMongoId(), validarCampos ]
,obtenerUser )
router.post('/',  
[check('cedula','La cedula es obligatoria').not().isEmpty(), validarCampos]
, crearUser)
router.put('/:id', [ check('id', 'El id no es válido').isMongoId(), validarCampos ],
  actualizarUser)
router.delete('/:id', [ check('id', 'El id no es válido').isMongoId(), validarCampos ] , borrarUser)

module.exports = router;