const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Registering the Items Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    
    ingridients: {
        type: Array
    },
    restaurantId: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Item', ItemSchema);  // exporting the model