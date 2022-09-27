const axios = require('axios');
const express = require('express')
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
var parsedJSON = require('./extra_character.json');
console.log(parsedJSON)
app.use(express.json())


async function getCharacters(page) {
    if(page === undefined) {
        page = 1;
    }
    const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
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

// getCharacters().then((response) => {
//     console.log(response.data)
// }).catch((error) => {
//     console.log(error)
// })


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
