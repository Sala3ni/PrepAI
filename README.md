## PrepAI

AI-powered interview preparation platform that generates a personalized question set, skill-gap insights, and a day-by-day preparation plan from your resume + job description.

### Tech stack
- **Frontend**: React (Vite), React Router, Tailwind CSS, Sass, Axios, Motion, Lucide icons  
- **Backend**: Node.js, Express, MongoDB (Mongoose), JWT Auth (cookies), CORS, Multer (file upload)  
- **AI**: Google GenAI (`@google/genai`)  
- **PDF**: Puppeteer (HTML → PDF)  

### Monorepo structure
- **Frontend**: `PrepAI/Frontend`
- **Backend**: `PrepAI/Backend`

### Environment variables

#### Backend (`PrepAI/Backend`)
Create a `.env` file:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_GENAI_API_KEY=your_google_genai_key
CLIENT_ORIGIN=http://localhost:5173
```

#### Frontend (`PrepAI/Frontend`)
Create a `.env` file:

```bash
VITE_API_BASE_URL=http://localhost:3000
```

### Run locally

#### Backend
```bash
cd PrepAI/Backend
npm install
npm run dev
```

#### Frontend
```bash
cd PrepAI/Frontend
npm install
npm run dev
```

### Deployment

#### Backend on Render
1. Create a **New Web Service** on Render and connect your repo.
2. **Root Directory**: `PrepAI/Backend`
3. **Build Command**: `npm install`
4. **Start Command**: `npm start`
5. Add **Environment Variables** in Render:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `GOOGLE_GENAI_API_KEY`
   - `CLIENT_ORIGIN` = your Vercel frontend URL (example: `https://your-app.vercel.app`)
6. Render will provide a URL like `https://your-backend.onrender.com` (use this in Vercel as `VITE_API_BASE_URL`).

Notes:
- This backend uses **cookie auth** with `sameSite: "none"` + `secure: true`, so HTTPS is required in production (Render/Vercel are OK).

#### Frontend on Vercel
1. Import project in Vercel.
2. **Root Directory**: `PrepAI/Frontend`
3. Framework preset: **Vite**
4. Set **Environment Variable**:
   - `VITE_API_BASE_URL` = your Render backend URL (example: `https://your-backend.onrender.com`)
5. Deploy.

SPA routing is handled via `PrepAI/Frontend/vercel.json`.

### Credits
- **Created by**: **Saloni Mishra**

