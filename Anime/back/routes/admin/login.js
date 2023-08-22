var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', {
    layout:'admin/layout'
  });
});




router.post('/login', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;
    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password)
    console.log('logeo')

    if (data != undefined) {
      res.status(201).body({message: "Logeo exitoso"})
    } else {
      res.status(401).body({message: "Usuario o contraseña invalido"})
    }
    res.status(201).body({message: "Logeo exitoso"})
    return res
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
