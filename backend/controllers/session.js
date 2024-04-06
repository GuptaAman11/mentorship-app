const Session = require('../models/session')
const User = require('../models/User')


const createSession = async(req,res) => {
    const user = req.user.user._id  
    const {title , description , domain , topic  , timeField , date} = req.body
    try {
        const newSession = await Session.create({
            title : title,
            description : description ,
            domain : domain ,
            topic : topic ,
            image : req.file.path ,
            timeField : timeField ,
            date : date

        })
        return res.status(200).json(newSession)
    } catch (error) {
        
    }
} 

const getAllSession = async(req,res) => {
    try {
        const user  = req.user.user._id
    const session = await Session.find()
    res.status(200).json(session)
    } catch (error) {
        return res.status(500).json({msg : "internal server error"})
    }

}

const getSessionBySessionId  = async(req,res) => {
    const user = req.user.user._id
    const {sessionId}  = req.params
    try {
        const session  = await Session.findById(sessionId)
        if (session) {
            return res.status(200).json(session)
        }else {
            res.status(500).json({msg : "No Session found"})
        }

    } catch (error) {
        
    }
}

const getSessionByMentorId = async(req,res) => {
    const user = req.user.user._id
    const {mentorId} = req.params
    try {
        const session = await Session.findById('Session.author._id' === mentorId)
        if(session){
            return res.status(200).json(session)
        }else{
            return res.status(500).json({msg : "this user dont have any session "})
        }
    } catch (error) {
        
    }

}

module.exports = {
    getAllSession ,
    getSessionBySessionId ,
    getSessionByMentorId ,
    createSession
}