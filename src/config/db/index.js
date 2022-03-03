const mongoose = require('mongoose');

async function connect () {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/hoplong_collaborators');
    console.log('connected')
  } catch (error) {
    console.log(error) 
  }
  
}

module.exports = { connect }