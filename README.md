# 🎓 RVSCAS Result Management App

A full-stack Result Management System developed for RVSCAS to simplify student result processing, publishing, and viewing.

---

## 🚀 Features

### 👨‍🎓 Student Module

* View semester results
* Check subject-wise marks
* Simple and user-friendly interface

### 👨‍🏫 Faculty Module

* Upload student marks
* Manage subject-wise marks
* Easy data entry system

### 🛠️ Admin Module

* Upload marks via CSV
* Publish/Unpublish results
* Manage subjects and students

---

## 🧰 Tech Stack

* **Frontend:** React Native (Expo)
* **Backend:** Node.js + Express.js
* **Database:** MongoDB Atlas
* **API Testing:** Postman

---

## 🌐 Project Architecture

Client (Mobile App)
⬇️
Backend (Express Server)
⬇️
Database (MongoDB Atlas)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/rvscas-result-app-backend.git
cd rvscas-result-app-backend
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root folder and add:

```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the Server

```bash
node server.js
```

---

## 🔗 API Endpoints

### 📌 Student Routes

* `GET /student/results` – Get student results

### 📌 Admin Routes

* `POST /admin/login` – Admin login
* `POST /admin/csv/upload` – Upload marks via CSV
* `POST /admin/publish` – Publish results

### 📌 Faculty Routes

* `POST /faculty/marks` – Upload marks

---

## ☁️ Deployment

* **Backend:** Render
* **Database:** MongoDB Atlas
* **Mobile App:** Expo

---

## 🔒 Security

* Environment variables used for sensitive data
* MongoDB Atlas for secure cloud database

---

## 📌 Future Enhancements

* Student login authentication
* Real-time result updates
* Notification system
* Performance analytics dashboard

---

## ⭐ Conclusion

This project improves the efficiency of result management by reducing manual work and ensuring accuracy, transparency, and fast access to academic results.

---
