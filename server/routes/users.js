const router         = require('express').Router();
const UserController = require('../controllers/users');

router.get('/secret', UserController.secret);
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);


module.exports = router;