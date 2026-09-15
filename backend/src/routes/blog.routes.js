const express = require("express")
const blogController = require("../controllers/blog.controller")

const blogRouter = express.Router()



blogRouter.post("/api/create",blogController.createBlog);




module.exports = blogRouter;