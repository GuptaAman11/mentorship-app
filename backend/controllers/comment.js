const Comment = require('../models/Comment');
const User = require('../models/User');
const Session = require('../models/session');
const newComment = async (req, res) => {
    const {comment} = req.body ; 
    const {sessionId} = req.params; 
    const user = req.user.user._id;
   
    

    if(!comment){
        res.status(401).json({msg : "comment cant be empty"});

    }

    const session = await Session.findById(sessionId);
    console.log(session)

    if(!session){
        res.status(404).json({msg : "session not found"})
    }
    try {
        
       
        const addComment = await Comment.create({
            comment :comment,
            author : user,
            sessionId : sessionId
        });

        session.comments.push(addComment._id);
        await session.save();
        await addComment.save();

        // const session1 =  Session.findById(sessionId);
        res.status(200).json(addComment );



        
        
    }
    catch(err){
        console.log(err)
    }
};
const getComments = async (req, res) => {
    
    try {

        if(true){
            const comment = await Comment.find();
            res.status(200).json(comment);
        }
        

    } catch (err) {
        res.status(500).json(err);
    }
  
}
const getCommentById = async (req,res) => {
    const user = req.user.user._id;
    const {sessionId} = req.params ; 
    try{
 
        const comment =await Comment.find({sessionId:sessionId})
        if(!comment){
            res.status(401).json({msg: "comment not found"})
    
        }
        res.status(200).json({comment:comment});
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }

}
module.exports = {
    newComment,
    getComments,
    getCommentById
}