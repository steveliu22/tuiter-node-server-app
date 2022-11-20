import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: {type: Number, default: 0},
  dislikes: {type: Number, default: 0},
  liked: {type: Boolean, default: false} ,
  handle: {type: String, default: "@nasa"},
  time: {type: String, default: "2h"},
  username: {type: String, default: "nasa"},
  image: {type: String, default: "nasa-logo.png"},
}, {collection: 'tuits'});
export default schema;