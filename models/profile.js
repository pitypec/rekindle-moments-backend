import mongoose from 'mongoose';
const schema = mongoose.Schema;

const profileSchema = new schema(
  {
    userId: {
      type: schema.Types.ObjectId,
      ref: 'user'
    },
    firstName: {
      type: String
    },
    middleName: {
      type: String
    },
    lastName: {
      type: String
    },
    address: {
      type: String
    },
    profileImage: {
      type: String
    }
  },
  { timestamps: true }
);

const Profile = mongoose.model('profile', profileSchema);

export default Profile;
