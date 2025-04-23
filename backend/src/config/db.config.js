const { default: mongoose } = require("mongoose");
const { PUBLIC_DATA } = require("../../constant");

exports.ConnectDB = async() =>{
    try {
        await mongoose.connect(PUBLIC_DATA.mongo_uri)
        console.log("The app is connected with ${mongodb://localhost:27017/}");
    } catch (error) {
        mongoose.disconnect();
        process.exit(1)
    }
}