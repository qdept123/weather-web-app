# Weather API with Redis Caching

A full-stack weather application that fetches real-time data from the OpenWeather API. The backend is optimized with a Redis caching layer to minimize 3rd-party API requests and includes rate-limiting middleware for security.

## Features
- **3rd-Party Integration:** Fetches dynamic, real-time data from OpenWeather API.
- **In-Memory Caching:** Uses Redis to store weather queries with a 12-hour expiration (TTL) window to reduce API latency and avoid rate limits.
- **API Security:** Implements `express-rate-limit` to prevent brute-force abuse.
- **Frontend UI:** A clean, responsive frontend client utilizing JavaScript's native Fetch API to communicate with the backend.

## Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6 Client-side Fetch)
- **Backend:** Node.js, Express.js, Axios
- **Database/Cache:** Redis

---

## Prerequisites
Before running this project, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Redis Server](https://redis.io/docs/getting-started/) running locally (or a cloud instance via Upstash)

---

## Getting Started

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name