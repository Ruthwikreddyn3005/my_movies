# my_movies
A full-stack movie browsing application built using React, Node.js, express.js, MySQL and the TMDB API, featuring user authentication, movie search, and favorites management.
---

## 🚀 Features

- User registration and login
- Login validation with helpful error messages
- Movie listing page
- Movie details view (title, overview, rating, etc.)
- Favorites / watchlist support (if implemented)
- Responsive layout built with React

---

## 🧱 Tech Stack

**Frontend**
- React (with hooks and context)
- JavaScript (ES6+)
- Fetch for API calls
- CSS modules
- html

**Backend**
- Node.js
- Express
- REST API endpoints (e.g. `/login`, `/register`, `/movies`)
- Any database you plug in  MySQL
---

## 📁 Folder Structure

```text
MOVIE_APP_TEST/
├── backend/
│   ├── api.js
│   ├── package.json
│   ├── package-lock.json
│   └── (server / routes / models, etc.)
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── MovieCard.jsx
│   │   │   └── NavBar.jsx
│   │   ├── contexts/
│   │   │   ├── MovieContext.jsx
│   │   │   └── UserContext.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Favorites.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── MoviePage.jsx
│   │   ├── CSS/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── package-lock.json
├── .gitignore
└── README.md
