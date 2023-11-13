const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://codewithabdur/?authMechanism=SCRAM-SHA-256&tls=true&readPreference=primary');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
