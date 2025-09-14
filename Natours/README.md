# NatoureFrontend

This is the frontend of the **Natours** application, a modern travel booking platform. The project is designed to provide a seamless and interactive user experience for booking tours, with a visually appealing interface and robust integration with a backend API.

> ⚠️ **Note on Performance**
>
> The backend of this project is hosted on **Render (free tier)**.  
> As a result, the server goes into **sleep mode** if not used for around 15 minutes.  
> This means that the **first API request may take longer to respond** after a period of inactivity.  
> Subsequent requests will be fast once the server is awake.


---
## 🌐 Live Demo

You can explore the live frontend here:  
**[https://natoure-frontend.vercel.app/](https://natoure-frontend.vercel.app/)**

---
## 🚀 Tech Stack

### Frontend
- **React.js** (with hooks and functional components)
- **Redux** (for state management)
- **React Router** (for navigation)
- **Axios** (for HTTP requests)
- **Styled Components** / **CSS Modules** (for styling)
- **Other libraries:**
  - leaflet (for maps)
  - metarial UI
  - JWT Decode (user authentication)
  - FontAwesome (icons)
  - (Add or remove libraries as per your implementation)

### Backend
- **Node.js** with **Express.js**
- **MongoDB** (with Mongoose for ODM)
- **JWT Authentication**
- **Cloudinary** (for image uploads)
- **Stripe** (for payments, if implemented)
- **Email sending** (Nodemailer, if implemented)

> **Note:** The backend is a separate service not included in this repository. Make sure to clone, configure, and run the backend service for full functionality.

---

## 📝 Features

- User authentication (sign up, login, logout)
- Profile management
- Browse and book tours
- Responsive design
- Secure routes and JWT-based authentication
- Loading states and error handling
- (More features coming soon...)

---

## 🚦 Example Login

You can use the following test credentials to log in (for demo/testing purposes):

```
Email: sophie@example.com
Password: test1234
```

---

## ⚡️ Getting Started

1. **Clone this repository:**
   ```bash
   git clone https://github.com/PrashantRajput7372/NatoureFrontend.git
   cd NatoureFrontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the root directory.
   - Add your API URL and any other required variables (see `.env.example` if provided).

4. **Run the app:**
   ```bash
   npm start
   ```
   The app will run on `http://localhost:3000` by default.

---

## 🛠️ Project Status

> This project is still **in progress**. More features will be added and improvements are ongoing.

---

## 📬 Feedback & Contributions

Feel free to open issues or pull requests for suggestions, bug fixes, or new features!

---
