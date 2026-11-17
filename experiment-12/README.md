# Experiment 12 — Full-Stack MERN Application

**Student:** Daksh Kasana  
**Aim:** Build and deploy a React, Express, Node.js, and MongoDB task manager.

## Run
```bash
npm install
# configure .env from .env.example when applicable
npm start
```

Configure the frontend VITE_API_URL to the deployed backend URL and allow that origin through CORS.

## API / deployment notes
Keep secrets in environment variables. Do not commit `.env` files. GitHub Pages hosts static files only; deploy Node.js APIs to a server host.