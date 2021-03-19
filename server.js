const express = require('express');
const axios = require('axios');
const cors = require('cors');

//set origin
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

const app = express();
const port = 4000;

//set origin
app.use(cors(corsOptions));

//get-all-countries
app.get('/api/v1/all-countries', async (req, res) => {
    try {
        const data = await axios.get('https://restcountries.eu/rest/v2/all');
        res.send(data.data);
    } catch (error) {
        console.log(error);
    }
});

//search-country
app.get('api/v1/search/', async (req, res) => {
    try {
        const countryNameResult = axios.get(`https://restcountries.eu/rest/v2/name/${req.query.countryName}`);
        console.log(countryNameResult.data);
        res.send(countryNameResult.data);
    } catch (error) {
        console.log(error);
    }
});

app.listen(port);
console.log(`Connect to port ${port} success`);