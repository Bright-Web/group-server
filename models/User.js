const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    email: String,
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        }
    ]
}, { timestamps: true })

UserSchema.methods.toJSON = function () {
    return {
        id: this.id,
        firstName: this.firstName,
        email: this.email,
        projects: this.projects
    }
};

mongoose.model('User', UserSchema);
