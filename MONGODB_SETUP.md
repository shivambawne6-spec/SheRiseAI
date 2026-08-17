# MongoDB Setup Guide for Windows

## Option 1: Install MongoDB Community Edition (Recommended)

### Step 1: Download MongoDB
1. Go to https://www.mongodb.com/try/download/community
2. Select **Windows** and **MSI** format
3. Download the latest version

### Step 2: Install MongoDB
1. Run the downloaded `.msi` installer
2. Click "Next" through the setup
3. Accept the license agreement
4. Choose "Complete" installation
5. Check "Install MongoDB as a Service" (recommended)
6. Keep default path: `C:\Program Files\MongoDB\Server\X.X`
7. Click "Install"

### Step 3: Verify Installation
Open PowerShell and run:
```powershell
mongod --version
```

You should see the MongoDB version.

---

## Option 2: Use Docker (Alternative)

If you have Docker installed:

```powershell
docker run -d -p 27017:27017 --name mongodb mongo
```

---

## Start MongoDB

### If Installed as Service:
MongoDB will automatically start. To verify:
```powershell
Get-Service MongoDB
```

### If Not as Service:
Open PowerShell as Administrator and run:
```powershell
mongod
```

You should see:
```
[initandlisten] waiting for connections on port 27017
```

---

## Connect Backend to MongoDB

Your `.env` file is already configured with:
```
MONGODB_URI=mongodb://localhost:27017/sherise-hub
```

### Start the Backend Server

Open a new PowerShell terminal:
```powershell
cd backend
npm install
npm run dev
```

You should see:
```
MongoDB connected
Server running on port 5000
```

---

## Test Connection

### Using MongoDB Shell:
```powershell
mongosh
# or for older versions:
mongo
```

Then run:
```javascript
show databases
use sherise-hub
```

### Using Backend API:
```
GET http://localhost:5000/api/health
```

Should return:
```json
{"status": "Server is running"}
```

---

## Troubleshooting

| Error | Solution |
|-------|----------|
| `mongod not found` | MongoDB not installed - follow Step 1-3 above |
| `Port 27017 already in use` | Another MongoDB instance is running - stop it or use different port |
| `Connection refused` | MongoDB service not running - restart it |
| `ECONNREFUSED` in backend | Ensure MongoDB is running before starting backend |

---

## Quick Commands

```powershell
# Start MongoDB (if not service)
mongod

# Stop MongoDB service
Stop-Service MongoDB

# Start MongoDB service
Start-Service MongoDB

# Check MongoDB status
Get-Service MongoDB
```

Once MongoDB is running, run the backend with:
```powershell
cd backend
npm run dev
```
