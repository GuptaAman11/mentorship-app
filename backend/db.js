


const mongoose = require('mongoose')


const url = 'mongodb+srv://mentor:mentor@cluster0.2wauziz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const Connection = () => {
      mongoose.connect(url).then(() => {
        console.log("concttioned!!!") })
    
}


module.exports = {
    Connection
}