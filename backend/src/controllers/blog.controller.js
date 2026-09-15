const mongoose = require("mongoose")
const blogModel = require("../models/Blog.model")

async function createBlog(req, res) {
    const { title, author, content, images, category, description } = req.body;

    if (
        typeof title !== 'string' ||
        typeof author !== 'string' ||
        typeof content !== 'string' ||
        typeof category !== 'string' ||
        typeof description !== 'string' ||
        !Array.isArray(images) ||
        images.length < 5 ||
        !title.trim() ||
        !author.trim() ||
        !content.trim() ||
        !category.trim() ||
        !description.trim() ||
        images.some((image) => typeof image !== 'string' || !image.trim())
    ) {
        return res.status(400).json({ message: "All fields are required and images must be a list of at least 5 valid URLs." })
    }

    try {
        await blogModel.create({
            title,
            author,
            content,
            images,
            category,
            description
        })

        return res.status(200).json({ message: "Blog created successfully." })
    }
    catch (err) {
        return res.status(500).json({ message: "Internal server error." })
    }
}

module.exports = { createBlog }