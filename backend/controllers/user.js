const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const register = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        if (!email || !name || !password) {
           return res.json({ mssg: "all fields are required" })
        }

        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            return res.json({ mssg: "user already exists" })
        }

       const hashedpassword = await bcrypt.hash(password, 10);
        const newUser = new User(
            {
                name: name,
                email: email,
                password: hashedpassword
            }

        )
        await newUser.save();

        res.json({ mssg: "user created succesfully" })

    } catch (error) {
        console.log(error)
        res.json({ error: error })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.json({ mssg: "all fileds are required" })
        }

        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(401).json({msg:"user not found"})
        }
        const comparepassword = await bcrypt.compare(password, user.password)
        if (comparepassword) {
            const token = jwt.sign({ user : user }, 'secret_key', { expiresIn: '1h' })
            return res.json({ mssg: "user logged in succesfully", user: user, token: token })
        }

    } catch (error) {
        res.json(error);
        console.log(error)
    }
}


const editUser = async(req,res) => {
    const userId = req.user.user._id;
    console.log(userId)
    const { skillLevel, phoneNumber, address, numberOfMentors, qualification, gender, language, goal, areaOfInterest, availability, bio, additionalInfo  } = req.body;
    try {
        const user=await User.findById(userId)
        console.log(user)
       if(!user) {
        return res.status(404).json({msg:"user noot found"})
       }
       const updateduser = await User.findByIdAndUpdate(userId, {
        skillLevel:skillLevel ,
        phoneNumber:phoneNumber ,
        address:address ,
        numberOfMentors : numberOfMentors ,
        qualification : qualification,
        gender : gender,
        language : language,
        goal : goal,
        areaOfInterest : areaOfInterest,
        availability : availability,
        bio : bio,
        additionalInfo : additionalInfo,
        image : req.file.path
    }, { new: true });
     return res.status(200).json(updateduser)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
    
}


module.exports = {
    register,
    login,
    editUser

}
