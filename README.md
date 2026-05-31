## Weather API with Redis Caching
A full-stack weather application that fetches real-time data from the OpenWeather API. The backend is optimized with a Redis caching layer to minimize 3rd-party API requests and includes rate-limiting middleware for security.

## Features
- **3rd-Party Integration:** Fetches dynamic, real-time data from the **OpenWeatherMap API**.
- **Backend & API Routing:** Powered by **Node.js** and **Express.js (v5)**, utilizing **Axios** for robust HTTP requests, **Cors** for cross-origin resource sharing, and **Dotenv** for secure environment variable management.
- **In-Memory Caching:** Uses Redis to store weather queries (with a **~12-hour** TTL expiration window) to reduce external API latency and avoid rate limit blocks.
- **API Security:** Implements **`express-rate-limit`** to prevent brute-force abuse (limited to **60** requests per minute).
- **Frontend UI:** A clean, responsive frontend client utilizing JavaScript's native **Fetch API and Tailwind CSS (via CDN)** to seamlessly communicate with the backend.

## Tech Stack
- **Frontend:** HTML5, Tailwind CSS v4 (CDN), JavaScript (Asynchronous ES6 Client-side Fetch)
- **Backend:** Node.js, Express.js (v5), Axios, Cors, Dotenv
- **Security:** Express-Rate-Limit
- **Database / Cache:** Redis Server

---

## Prerequisites
Before running this project, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Redis Server](https://redis.io/docs/getting-started/) running locally (typically on port 6379)

---

## Getting Started

### 1. Clone the Repository
```bash
git clone [https://github.com/qdept123/weather-web-app.git](https://github.com/qdept123/weather-web-app)
cd weather-web-app
