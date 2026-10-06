# 🚀 NASA Mission Control

A full-stack NASA Mission Control application built while learning Node.js and Express.

The application simulates a mission control system where users can explore habitable planets discovered from NASA's Kepler data and manage space launch missions.

## ✨ Features

### 🌍 Habitable Planets

- Loads Kepler exoplanet data from a CSV dataset
- Parses planet data on server startup
- Filters potentially habitable planets based on:
  - Stellar flux
  - Planetary radius
- Exposes the processed planets through a REST API

### 🚀 Launch Management

- View all scheduled launches
- Schedule a new launch
- Assign a target planet to a mission
- Store launch details such as:
  - Flight number
  - Mission name
  - Rocket
  - Launch date
  - Target planet
  - Customer
  - Mission status
- Abort upcoming missions

### 🔌 REST API

The backend exposes APIs for managing planets and launches.

#### Planets

```http
GET /planets
```

Returns the list of potentially habitable planets.

#### Get Launches

```http
GET /launches
```

Returns all launch missions.

#### Schedule Launch

```http
POST /launches
```

Example request:

```json
{
  "mission": "Kepler Exploration",
  "rocket": "Explorer IS1",
  "launchDate": "December 27, 2030",
  "target": "Kepler-442 b"
}
```

#### Abort Launch

```http
DELETE /launches/:id
```

Marks an upcoming mission as aborted.

---

## 🛠️ Tech Stack

### Frontend

- React
- JavaScript
- Fetch API

### Backend

- Node.js
- Express.js
- REST APIs

### Data Processing

- Node.js Streams
- CSV Parser
- NASA Kepler Exoplanet Dataset

### Development

- Nodemon
- Concurrently
- npm

---

## 📁 Project Structure

```text
nasa-project/
│
├── client/
│   ├── public/
│   └── src/
│
├── server/
│   ├── data/
│   │   └── kepler_data.csv
│   │
│   ├── routes/
│   │   ├── planets/
│   │   │   ├── planets.controller.js
│   │   │   └── planets.router.js
│   │   │
│   │   └── launches/
│   │       ├── launches.controller.js
│   │       └── launches.router.js
│   │
│   ├── models/
│   │   ├── planets.model.js
│   │   └── launches.model.js
│   │
│   ├── app.js
│   └── server.js
│
└── package.json
```

---

## 🧠 Habitable Planet Criteria

The application processes the Kepler dataset and considers a planet potentially habitable when it satisfies the following conditions:

```js
planet["koi_disposition"] === "CONFIRMED" &&
planet["koi_insol"] > 0.36 &&
planet["koi_insol"] < 1.11 &&
planet["koi_prad"] < 1.6
```

This filtering happens while processing the Kepler CSV dataset.

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd nasa-project
```

Install all dependencies:

```bash
npm run install-server
npm run install-client
```

Or install them separately:

```bash
cd server
npm install

cd ../client
npm install
```

---

## ▶️ Running the Project

Run both the frontend and backend:

```bash
npm run watch
```

Or run them separately:

### Backend

```bash
npm run server
```

### Frontend

```bash
npm run client
```

---

## 🏗️ Production Build

Build the React frontend:

```bash
npm run build --prefix client
```

The frontend production build is generated inside the server's public directory so Express can serve the React application.

---

## 📚 What I Learned

This project helped me understand and practice:

- Building REST APIs with Express
- Express Router and route organization
- Controllers and models
- Middleware and JSON body parsing
- HTTP methods and status codes
- Working with route parameters
- Node.js file streams
- Parsing CSV datasets
- Asynchronous application initialization
- Separating application and server logic
- Connecting a React frontend with an Express backend
- Managing frontend and backend development servers
- Serving a production React build from Express
- Structuring a full-stack Node.js application

---

## 🔮 Future Improvements

- MongoDB persistence for launches
- Pagination for launch history
- Authentication and authorization
- Better API validation
- Automated API tests
- Improved error handling
- Docker support
- Deployment
- Launch analytics dashboard

---

## 📸 Application

NASA Mission Control provides a dashboard for exploring potentially habitable planets and managing upcoming space missions.

---

## 👨‍💻 Author

**Gaurav Verma**

Frontend Engineer expanding into full-stack development with Node.js, Express, and modern web architecture.
