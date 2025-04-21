require("dotenv").config({
    
})
const { PUBLIC_DATA } = require("./constant");
const app = require("./src/app");
const { ConnectDB } = require("./src/config/db.config");
ConnectDB


app.listen(PUBLIC_DATA.port,()=>{
    console.log('The app is listening at http://localhost:3000');
})
