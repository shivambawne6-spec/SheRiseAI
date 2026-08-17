# Backend Setup Guide

## Quick Start

### 1. Install MongoDB
If you don't have MongoDB installed:
- **Windows**: Download from https://www.mongodb.com/try/download/community
- **macOS**: `brew install mongodb-community`
- **Linux**: Follow https://docs.mongodb.com/manual/installation/

### 2. Start MongoDB
```bash
# Windows
mongod

# macOS/Linux
brew services start mongodb-community
```

### 3. Install Backend Dependencies
```bash
cd backend
npm install
```

### 4. Configure Environment
Create `.env` file in backend folder:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/sherise-hub
JWT_SECRET=your_secure_secret_key_here_change_in_production
JWT_EXPIRE=7d
NODE_ENV=development
```

### 5. Run Backend Server
```bash
npm run dev
```

Server runs at: `http://localhost:5000`

### 6. Connect Frontend to Backend

In your React frontend, update your axios/fetch calls to use:
```javascript
const API_URL = "http://localhost:5000/api";
```

Update `package.json` in frontend if needed to proxy requests:
```json
"proxy": "http://localhost:5000"
```

## API Testing

Use Postman or similar tool to test endpoints.

### Example: Register User
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Example: Login
```
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/sherise-hub |
| JWT_SECRET | Secret for JWT signing | - |
| JWT_EXPIRE | Token expiration time | 7d |
| NODE_ENV | Environment mode | development |

## Troubleshooting

**MongoDB connection error**: Ensure MongoDB is running
```bash
# Check if running
mongosh # or mongo (older versions)
```

**Port already in use**: Change PORT in `.env`

**CORS errors**: Backend already has CORS enabled for all origins

## Next Steps

1. ✅ Backend is set up
2. Update frontend to connect to backend endpoints
3. Add authentication tokens to frontend
4. Create frontend components for jobs, skills, schemes
5. Deploy to production

