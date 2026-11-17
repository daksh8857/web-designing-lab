# Experiment 9 — User Authentication

**Student:** Daksh Kasana  
**Aim:** Implement registration, login, password hashing, MongoDB storage, and JWT-protected profile access.

## Run
```bash
npm install
# configure .env from .env.example when applicable
npm start
```

JWT logout requires client token deletion or a server-side revocation strategy; tokens otherwise remain valid until expiry.

## API / deployment notes
Keep secrets in environment variables. Do not commit `.env` files. GitHub Pages hosts static files only; deploy Node.js APIs to a server host.