import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    category: String,
    status: String,
    
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'employee');
// we need to turn it into a model
const postUser = mongoose.model('employee', userSchema);

export default postUser;