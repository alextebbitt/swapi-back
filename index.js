const axios = require('axios');
const express = require('express')
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
var parsedJSON = require('./extra_character.json');
const cors = require("cors");
app.use(express.json())
app.use(cors());
let cacheCharactersByPage = {};
async function getCharacters(page) {
    if (page === undefined) {
        page = 1;
    }
    let response = cacheCharactersByPage[page];
    if(!response) {
        response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
        cacheCharactersByPage[page] = response;
    }
    return response;
}

async function searchById(req) {
    try {
        const response = await axios.get(`https://swapi.dev/api/people/${req.params.id}`);
        return response
    } catch (error) {
        console.error(error)
    }
}

async function searchByName(name) {
    try {
        const response = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
        return response
    } catch (error) {
        console.error(error)
    }

}


app.get('/characters/:page', async (req, res) => {
    let results = await getCharacters(req.params.page);
    return res.send(results.data)
});

app.get('/:id', async (request, res) => {
    let results = await searchById(request);
    return res.send(results.data)
});

app.get('/search/:name', async (req, res) => {

    let results = await searchByName(req.params.name);
    return res.send(results.data)
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));
