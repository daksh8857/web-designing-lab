# Experiment 10 — Static and Dynamic Deployment

**Student:** Daksh Kasana

- `index.html` is the static-site preview.
- `dynamic-app/` contains a working Express feedback app.

## Run the dynamic app
```bash
cd dynamic-app
npm install
npm start
```
Open `http://localhost:3000`. The app also exposes `/health` and `/feedback`.

Deploy the static site to GitHub Pages or Netlify. Deploy the dynamic app to a Node.js hosting provider and set its start command to `npm start`.
