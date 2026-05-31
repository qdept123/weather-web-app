const dotenv = require('dotenv');
dotenv.config();


const express = require('express')
const axios = require('axios')
const rateLimit = require('express-rate-limit');
const readline = require('readline')
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const { createClient } = require('redis');
const client = createClient();
const app = express();
const port = 3000;

async function redisConnect(){
    try{
    await client.connect()
        console.log("Connected to redis succesfully")
    
}
    catch(err){
        console.log("Unable to connect to your redis server")
    }
}

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 60, 
    message: { error: "Too many requests, please try again later." }
});

const API_KEY = process.env.WEATHER_API_KEY

app.get('/', (req,res)=>{
  res.send("This is the home page")  
  
} )

app.get("/api/weather", (req,res)=>{
    res.send("this page is for weathers")
})

app.get("/api/weather/:city", async (req,res)=>{
    const city = req.params.city.toLowerCase().trim();



    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try{
    const cacheData = await client.get(city);

if (cacheData) {
    console.log(`[CACHE HIT] Loaded data for ${city} from Redis`);
    return res.json(JSON.parse(cacheData));
}
   
        const response = await axios.get(apiUrl);
        const realdata = response.data;
        await client.set(city, JSON.stringify(realdata),{
            EX: 43000
        })
    return res.json(realdata);
    } catch(error){
        console.error("API error details:", error.message);
        res.status(404).json({error: "city not found"})
    }

})

redisConnect().then(()=>{
try{
app.listen(port, ()=>{
    console.log(`This is working in http://localhost:${port}`)
})
}
catch(err){
    console.log("Unable to connect to redis servewr")
}
})