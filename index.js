const express = require('express')
const app = express();
const port = 3000;
import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

app.get('/', (req,res)=>{
  res.send("This is the home page")  
} )

app.listen(port, ()=>{
    console.log(`This is working in http://localhost:${port}`)
})

