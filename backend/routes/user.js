const Router = require('express')
const router = Router();
const { register, login, editUser } = require('../controllers/user');
const { verifyJWT} = require('../middleware/verify');
const { upload } = require('../middleware/ImageUpload');

router.post('/register', register)
router.post('/login', login)
router.put('/editUser' , verifyJWT , upload.single('image'), editUser)
// router.route('/Profile').post(protect,updateUserProfile)



module.exports = router;