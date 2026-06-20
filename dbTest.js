const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./backend/models/userModel');

dotenv.config();

const test = async () => {
  try {
    const url = process.env.MongoDB_URL || process.env.MONGODB_URL;
    console.log('Connecting to:', url);
    await mongoose.connect(url);

    const user = await User.findOne({ email: 'mohamed@example.com' });
    if (!user) {
      console.log('User mohamed@example.com not found');
      process.exit(1);
    }

    console.log('Found user:', user.name);
    console.log('Database password hash:', user.password);

    const isDirectMatch = await user.matchPassword('123456');
    console.log('Is 123456 direct match?', isDirectMatch);

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

test();
