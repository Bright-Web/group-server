const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    title: String,
    body: String,
    slogan: String,
    desktopImageUrl: String,
    tabletImageUrl: String,
    mobileImageUrl: String,
    websiteUrl: String,
    moreInfo: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

ProjectSchema.methods.toJSON = function () {
    return {
        id: this.id,
        title: this.title,
        slogan: this.slogan,
        desktopImageUrl: this.desktopImageUrl,
        tabletImageUrl: this.tabletImageUrl,
        mobileImageUrl: this.mobileImageUrl,
        websiteUrl: this.websiteUrl,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    }
}

mongoose.model('Project', ProjectSchema)
