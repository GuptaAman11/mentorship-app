const Router = require("express");
const router = Router();
const {
  register,
  login,
  createProfile,
  updateProfile,
  getProfile,
  getProfileById,
  deleteProfileById
} = require("../controllers/mentor");

router.post("/Mentor-register", register);
router.post("/Mentor-login", login);
router. get("/get-profile/:id", getProfileById);
router.post( "/add-profile" ,createProfile)
router.put('/update-profile/:id ', updateProfile);
router.get("/Mentor-profile", getProfile);
router.delete("/delete-profile/:id ", deleteProfileById);

module.exports = router;
