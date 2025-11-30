import mongoose from "mongoose";

export const connection = () => {
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "SecureUserAuthentication"
    }).then(() => {
        console.log("DataBase Connected Successfully");
    }).catch((e) => {
        console.log("DataBase Not Connected: ", e);
    });
};