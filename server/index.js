const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const Feedback_Form= require("./models/Feedback_Form");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`App listening at port number ${PORT}`);
});



app.get("/", (req, res) => {
  res.send("server is working");
});
app.get("/api/feedback", (req, res) => {
  res.send("feedback is working");
});


 // hand Api from fromtent and store data in database
app.post("/api/feedback" , async(req , res)=>{
    try{
        const {name , email , Feedback} = req.body;

        if(!name || !email || !Feedback){
            return res.status(400).json({error: "All field required"});
        }

        const feedback = new Feedback_Form({name , email , Feedback});
        await feedback.save();

        res.status(201).json({message:"Feedback submit successfully" , feedback});
    }catch(err){
        res.status(500).json({error : "server error"})
    }
})