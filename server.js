import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import studentRoutes from "./routes/student.js";
import adminRoutes from "./routes/admin.js"
import adminCsvRoutes from "./routes/adminCsv.js";
import adminPublishRoutes from "./routes/adminPublish.js";
import subjectRoutes from "./routes/adminSubject.js";
import facultyRoutes from "./routes/FacultyMark.js"; // ✅ FIXED NAME
import facultyRouter from "./routes/faculty.js";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/student", studentRoutes);
app.use("/admin", adminRoutes);
app.use("/admin/csv", adminCsvRoutes);
app.use("/admin/publish", adminPublishRoutes);
app.use("/subjects", subjectRoutes);
app.use("/faculty/marks", facultyRoutes); // ✅ IMPORTANT
app.use("/faculty", facultyRouter);

// MongoDB
mongoose
  .connect("mongodb://localhost:27017/rvscas")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
