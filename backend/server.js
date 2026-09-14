const app = require('./src/app.js')
require("dotenv").config()
const connectDB = require("./src/config/db.js")


const port = process.env.PORT || 5000;


async function startServer() {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

}

startServer().catch((err) => {
    console.log("Unable to start server.");
    console.log(err.message)
    process.exit(1)
})