const Mentor = require("../models/Mentor");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    if (!email || !name || !password) {
      res.json({ mssg: "all fields are required" });
    }

    const existingUser = await Mentor.findOne({ email: email });
    if (existingUser) {
      res.json({ mssg: "user already exists" });
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = new Mentor({
      name: name,
      email: email,
      password: hashedpassword,
    });
    await newUser.save();

    res.json({ mssg: "user created succesfully" });
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.json({ mssg: "all fileds are required" });
    }

    const user = await Mentor.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ msg: "user not found" });
    }
    const comparepassword = await bcrypt.compare(password, user.password);
    if (comparepassword) {
      const token = jwt.sign({ user: user }, "secret_key", { expiresIn: "1h" });
      res.json({
        mssg: "user logged in succesfully",
        user: user,
        token: token,
      });
    }
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};
const createProfile = async (req, res) => {
  const { experienceLevel, bio, availability, areaofinterest, age, gender,email } =
    req.body;
  try {
    const mentor = new Mentor({
      experienceLevel: experienceLevel,
      bio: bio,
      availability: availability,
      areaofinterest: areaofinterest,
      age: age,
      gender: gender,
      email:email
    });
    await mentor.save();
    res.status(201).json({ success: true, message: "profile created" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to submit profile",
      error: error.message,
    });
  }
};
const updateProfile = async (req, res) => {
  const { id } = req.params;
  console.log(">>>>",id)
  const { experienceLevel, bio, availability, areaofinterest, age, gender } =
    req.body;

  if (!ObjectId.isValid(id)) {
    return res.status(404).send("No record with that ID was found.");
  }

  try {
    const updatedUser = await Mentor.findByIdAndUpdate(
      id,
      {
        experienceLevel,
        bio,
        availability,
        areaofinterest,
        age,
        gender
      },
      {
        new: true,
      }
    );

    if (!updatedUser) {
      return res.status(404).send("No user with this id was found!");
    }

    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).send("Internal server error");
  }
};

const getProfile = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    if (!mentors) {
      res.status(401).send("There are no profiles in the database yet.");
    } else {
      res.json(mentors);
    }
  } catch (error) {
    console.error("Error fetching mentors:", error);
    res.status(500).send("Internal server error");
  }
};
const getProfileById = async (req, res) => {
  const { id } = req.params ;
  try {
    const user = await Mentor. findOne({ _id: id });
    if (!user) { 
      return res.status(404 ).send("The requested user is not available.");
    } 
    
    res.json(user); 
  } catch (err) { 
    console.log("Error getting user by  ID: ", err); 
    res.status(500).send("Server Error"); 
  }
}
const deleteProfileById = async  (req,res)=>{
  const {id}=req.params; 
  console.log(id)
  try{ 
    const removed=await Mentor.findByIdAndDelete({_id : id});  
    if(!removed){   
      return res.status(404).send("No such user exists!");
      }
      
    res.status(200).json(removed);
    }catch(e){
        console.log(e); 
        res.status(500). json({"Error": "Internal Server Error!"});
    }
}

module.exports = {
  register,
  login,
  createProfile,
  updateProfile,
  getProfile,
  getProfileById,
  deleteProfileById
};
