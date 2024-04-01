


const mongoose = require('mongoose')


const url = 'mongodb://127.0.0.1/amazon'

const Connection = () => {
      mongoose.connect(url).then(() => {
        console.log("concttioned!!!") })
    
}


module.exports = {
    Connection
}