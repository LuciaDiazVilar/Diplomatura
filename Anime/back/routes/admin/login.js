var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', {
    layout:'admin/layout'
  });
});
HEAD
router.get('/logout', function (req, res, next){
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layoout'
  });
});

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body)
    var usuario = req.body.usuario;
    var password = req.body.contraseña;
    return await usuariosModel.getUserByUsernameAndPassword(usuario, password).then(data =>{
    console.log('logeo /')
    console.log(data)
    if (data != undefined) {
      res.status(200)
      res.body={
        
        "Message": "Bienvenido"
      }
      res.send()
    } else {
      res.status(401)
      res.body={
        "Message": "No pudo acceder"
      }
      res.send()
    }})

  } catch (error) {
    console.log(error);
  }
})



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
