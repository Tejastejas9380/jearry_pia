# AI Backend Service

A production-ready Express.js backend for AI-powered routes, featuring MongoDB connectivity, environment configuration, request validation, logging, and advanced best practices.

## Prerequisites

* **Node.js** (v18.x or newer) and **npm**
* **MongoDB** instance (local or Atlas)
* Hugging Face API token (`HF_TOKEN`) and/or Google Gemini API key (`GEMINI_API_KEY`) if using AI routes

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-org/ai-backend-service.git
   cd ai-backend-service
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Install dev dependencies** (nodemon for auto-reload):

   ```bash
   npm install --save-dev nodemon
   ```

---

## Configuration

1. **Create a `.env` file** in the project root:

   ```env
   PORT=5000
   MONGO_URI=<Your MongoDB connection string>
   HF_TOKEN=<Your Hugging Face API token>
   GEMINI_API_KEY=<Your Google Gemini API key>
   ```

2. **Add `.env` to `.gitignore`** to protect sensitive information.

---

## Project Structure

```
project-root/
├─ src/
│  ├─ config/
│  │  └─ db.js             # MongoDB connection setup
│  ├─ controllers/         # Route handler logic
│  ├─ middleware/          # Custom middleware (validation, error handler)
│  ├─ models/              # Mongoose schemas
│  ├─ routes/              # Express routers (AI, ImageGen, etc.)
│  ├─ app.js               # Express app initialization
│  └─ server.js            # Entry point, loads app and starts server
├─ .env                    # Environment variables
├─ .gitignore
├─ package.json
└─ README.md
```

---

## Available Scripts

| Script        | Description                                |
| ------------- | ------------------------------------------ |
| `npm run dev` | Start server in development mode (nodemon) |
| `npm start`   | Start server in production mode            |

---

## Key Components

* **dotenv**: Loads environment variables
* **mongoose**: MongoDB ODM with robust connection options
* **cors**: Configurable CORS middleware
* **compression**: (optional) Gzip compression for responses
* **morgan / pino**: (optional) HTTP request logging
* **@huggingface/inference** & **@google/genai**: AI inference clients

```
npm install dotenv
npm install mongoose
npm install cors
npm install compression
npm install morgan pino
npm install @huggingface/inference @google/genai

```

---

## Advanced Features

### Error Handling

* Centralized error middleware in `middleware/errorHandler.js`
* Structured error response format

### Validation

* Use `express-validator` or `Joi` in `middleware/validation.js` to enforce input schemas

### Graceful Shutdown

```js
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB disconnected, shutting down');
  process.exit(0);
});
```

### Security & Performance

* Restrict CORS origins to trusted domains
* Use `compression()` to gzip responses
* Set `NODE_ENV=production` for optimizations
* Rate-limiting middleware (e.g., `express-rate-limit`)

### Logging & Monitoring

* Integrate `morgan` or `winston` for request logs
* Monitor latency and errors in production with APM tools

---

## Testing

1. **Install test dependencies**:

   ```bash
   npm install --save-dev jest supertest
   ```

2. **Add test script** in `package.json`:

   ```json
   "scripts": {
     "test": "jest"
   }
   ```

3. **Write integration tests** under `__tests__/` using Supertest to validate API endpoints.

---

## Deployment

* **Environment**: Set `NODE_ENV=production`
* **Process Manager**: Use `PM2` or Docker for clustering and auto-restart
* **Reverse Proxy**: Configure Nginx or similar to handle SSL and load balancing
* **CI/CD**: Automate tests and deployment via GitHub Actions or GitLab CI

---

**Enjoy building and scaling your AI backend!**
