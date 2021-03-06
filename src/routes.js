const router = require('express').Router()
const multer = require('multer')

const multerConfig = require('@multervideo')
const UsuarioController = require('@controllers/UsuarioController')
const VideoController = require('@controllers/videoController')

router.post('/usuario/logar', UsuarioController.PostLogin)
router.post('/usuario/cadastrar', UsuarioController.PostCadastrar)

router.get('/canal/', VideoController.GetBuscarCanalPorId)

router.post('/video/upload', multer(multerConfig).any(),  VideoController.PostUploadVideo)
router.post('/video/comentar', VideoController.PostComentarVideo)

router.get('/video/listaAleatoria', VideoController.GetListaAleatoria)
router.get('/video/buscar/', VideoController.GetBuscarVideosPorNome)
router.get('/video/player', VideoController.GetBuscarVideoPorId)
router.get('/video/', VideoController.GetVideo)
router.get('/video/thumb/', VideoController.GetThumb)

module.exports = router