import mongoose from "mongoose";
import Admin from "./models/Admin.js";
import bcrypt from "bcrypt";

mongoose.connect("mongodb://127.0.0.1:27017/rvscas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const createAdmin = async () => {
    const hashedPassword = await bcrypt.hash("admin123", 10); // password
    const admin = new Admin({
        username: "admin",
        password: hashedPassword,
    });
    await admin.save();
    console.log("Admin created successfully!");
    mongoose.disconnect();
};

createAdmin();
