import express from "express";
import router from "./Routers/index.js";
import mongoose from "./Config/mongoose.js";
import cors from "cors";

//App-Config
const app = express();
const port = process.env.PORT || 8001;



//Middleware
app.use(cors());  //cross side scripting
// app.use(cors({
//     origin: 'http://localhost:3000'
// }));

app.use(express.json()); //used to get data from form body
 
//Db-Config

//API EndPoints
//set-up routers
app.use('/',router);


//Listener
app.listen(port,()=>{
    console.log(`server started on port : ${port}`);
})
