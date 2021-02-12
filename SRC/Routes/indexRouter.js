// La responsabilidad de los archivos de Router son solo las rutas

const express = require ('express');
const router= express.Router ();
const indexController = require ('../Controllers/indexController'); // Tengo que importar o requerir el controlador que quiero utilizar para las rutas.


router.get ("/", indexController.index ); 
router.post ("/", indexController.crear);

router.get("/detail/:id", indexController.detalle );

router.put('/detail/:id', indexController.update);

//BORRAR
//router.post ("/borrar/:id", indexController.borrar);
router.delete ("/borrar/:id", indexController.borrar)
module.exports = router;