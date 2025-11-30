📌 Project Setup Guide (Backend + Frontend)

This project is a Full-Stack (MERN) web application with authentication, email OTP, SMS OTP, cookies, JWT, and API integrations.
Follow the steps below to run it locally.

⚙️ Backend Setup (Server)
1️⃣ Go to the server folder
cd server

2️⃣ Install dependencies
npm install

3️⃣ Create a config.env file

Create a file named config.env in your server folder and paste the following:

PORT=4000
FRONTEND_URL=http://localhost:5173

MONGO_URI=your_mongodb_connection_string

TWILIO_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number

SMTP_HOST=smtp.gmail.com
SMTP_SERVICE=gmail
SMTP_PORT=465
SMTP_MAIL=your_email@example.com
SMTP_PASSWORD=your_email_app_password

JWT_SECRET_KEY=your_jwt_secret_key
JWT_EXPIRE=7d

COOKIE_EXPIRE=7



4️⃣ Start backend server
npm run dev


💻 Frontend Setup (Client)
1️⃣ Go to the client folder
cd client

2️⃣ Install dependencies
npm install

3️⃣ Start frontend
npm run dev


✔️ You're Ready!

Now your backend runs at:

http://localhost:4000


And frontend runs at:

http://localhost:5173
