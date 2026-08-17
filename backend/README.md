# SheRise-Hub Backend API

Backend API for SheRise-Hub platform - empowering women through technology.

## Features

- **User Authentication**: JWT-based registration and login
- **Job Listings**: Post and browse job opportunities
- **Skills/Courses**: Learning courses with enrollment and reviews
- **Government Schemes**: Directory of government schemes for women

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.0 or higher)
- npm or yarn

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/sherise-hub
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
NODE_ENV=development
```

## Running the Server

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication (`/api/auth`)
- `POST /register` - Register a new user
- `POST /login` - Login user
- `GET /me` - Get current user profile (Protected)
- `PUT /update` - Update user profile (Protected)

### Jobs (`/api/jobs`)
- `GET /` - Get all jobs with filters
- `GET /:id` - Get single job
- `POST /` - Create job (Protected)
- `PUT /:id` - Update job (Protected)
- `DELETE /:id` - Delete job (Protected)
- `POST /:id/apply` - Apply for job (Protected)

### Skills/Courses (`/api/skills`)
- `GET /` - Get all courses with filters
- `GET /:id` - Get single course
- `POST /` - Create course (Protected)
- `PUT /:id` - Update course (Protected)
- `DELETE /:id` - Delete course (Protected)
- `POST /:id/enroll` - Enroll in course (Protected)
- `POST /:id/review` - Add review to course (Protected)

### Government Schemes (`/api/schemes`)
- `GET /` - Get all schemes with filters
- `GET /:id` - Get single scheme
- `POST /` - Create scheme (Protected)
- `PUT /:id` - Update scheme (Protected)
- `DELETE /:id` - Delete scheme (Protected)

## Authentication

Protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## Database Schema

### User
- name, email, password
- phone, bio, profilePicture
- skills, state, city
- savedJobs, enrolledCourses

### Job
- title, description, company
- location, salary, jobType
- category, requiredSkills, experience
- postedBy, applicants

### Skill
- title, description, category
- level, instructor, duration
- price, curriculum, thumbnail
- enrolledUsers, rating, reviews

### Scheme
- name, description, ministry
- eligibility, benefits
- applicationProcess, documents
- category, state, website
- contactEmail, contactPhone

## Error Handling

All endpoints return JSON responses with appropriate HTTP status codes.

## License

MIT
