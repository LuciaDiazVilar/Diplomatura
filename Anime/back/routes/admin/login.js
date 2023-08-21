var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usariosModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});
router.get('/logout', function (req, res, next){
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layoout'
  });
});

router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;
    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password)
    console.log('logeo')
    if (data != undefined) {
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }


  } catch (error) {
    console.log(error);
  }
})

router.post('/admin/login', async (req, res, next) => {
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

  } catch (error) {
    console.log(error);
  }
})

module.exports = router;