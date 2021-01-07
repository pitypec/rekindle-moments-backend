import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
const schema = mongoose.Schema;

const userSchema = new schema(
  {
    method: {
      type: String,
      enum: ['local', 'google', 'facebook'],
      required: true
    },
    local: {
      email: {
        type: String,
        lowercase: true,
        unique: true
      },
      password: {
        type: String
      }
    }
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  try {
    if (this.method !== 'local') {
      next();
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(this.local.password, salt);

    this.local.password = passwordHash;
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function (newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.local.password);
  } catch (error) {
    throw new Error(error);
  }
};
const User = mongoose.model('user', userSchema);

export default User;
