const axios = require('axios');
const express = require('express')
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(express.json())

async function getCharacters() {
    const response = await axios.get("https://swapi.dev/api/people/");
    return response;
}

getCharacters().then((response) => {
    console.log(response.data)
}).catch((error) => {
    console.log(error)
})


app.get('/', async (req, res) => {
    let rest = await getCharacters();
    return res.send(rest.data)})


app.listen(PORT, console.log(`Server running on port ${PORT}`));
