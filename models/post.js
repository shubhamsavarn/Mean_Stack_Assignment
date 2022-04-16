const mongoose = require('mongoose');
let postSchema = mongoose.Schema({
 title: {
 type: String,
 required: true
},
 author: {
 type: String,
 required: true
},
 description: {
 type: String,
 required: true
}
});
let Post = module.exports = mongoose.model('Post', postSchema);