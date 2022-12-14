const axios = require('axios');
const express = require('express')
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
let parsedJSON = require('./extra_character.json');
const cors = require("cors");
app.use(express.json())
app.use(cors());
let cacheCharactersByPage = {};
async function getCharacters(page) {
    if (!page) {
        page = 1;
    }
    let characters = cacheCharactersByPage[page];
    if (!characters) {
        try {
            var response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
                characters = response?.data?.results;

            if (characters?.length < 10) {
                characters.push(parsedJSON);
            }
            cacheCharactersByPage[page] = characters;
        }
        catch {
            console.error(error)
        }
    }
    return characters;
}

async function searchById(req) {
    console.log("search by id")
    try {
        const response = await axios.get(`https://swapi.dev/api/people/${req.params.id}`);
        return response
    } catch (error) {
        console.error(error)
    }
}

async function searchByName(name) {
    try {
        if (name.toLowerCase().startsWith("gro")) {
            return [parsedJSON];
        }
        const response = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
        return response?.data?.results;
    } catch (error) {
        console.error(error)
    }
}


app.get('/characters/:page', async (req, res) => {
    let results = await getCharacters(req.params.page);
    return res.send(results)
});

app.get('/search/:name', async (req, res) => {
    let results = await searchByName(req.params.name);
    console.log(results)
    return res.send(results);
});

app.listen(PORT, console.log(`Server running on port ${ PORT }`));