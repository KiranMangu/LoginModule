import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    userid: {
        type: string,
        required: [ture, 'User name is information is required']
    },
    email: {
        type: String,
        required: [true, 'User e-mail information is required'],
        unique: true,
        validate: [emailValidation, 'Invalid email format']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    saltsecret: {
        type: String
    },
    date: {
        type: String,
        default: Date.now
    }
});

userSchema.pre('save', (next) => {
    bcrypt.genSalt(7, (error, salt) => {
        bcrypt.hash(this.password, salt, (error, hash) => {
            this.password = hash;
            this.saltsecret = salt;
            next();
        });
    });
});

function emailValidation(value) {
    const regExp = '^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$';
    return regExp.test(val);
}

export default mongoose.model('user', userSchema);