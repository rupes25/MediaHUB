const express = require("express");
const authenticationRoutes = require("./routes/authentication.routes")
const blogRoutes = require("../src/routes/blog.routes")
const cors = require("cors")





const app = express();

app.use(express.json({ limit: "10kb" }))

// cors
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
)
)

app.use("/", authenticationRoutes)
app.use("/", blogRoutes)



module.exports = app;