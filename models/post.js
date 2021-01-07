import mongoose from 'mongoose';
const schema = mongoose.Schema;

const postSchema = new schema({
  posterId: [
    {
      type: schema.Types.ObjectId,
      ref: 'user'
    }
  ],
  message: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const Post = mongoose.model('post', postSchema);

export default Post;
