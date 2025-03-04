import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://ajay260505:XfxyVSDvF3SMbkvN@cluster0.18piv.mongodb.net/').then(()=>console.log("DB Connected"));
   
}


