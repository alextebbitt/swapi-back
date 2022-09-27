const axios = require('axios');
const express = require('express')
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;


app.use(express.json())
const URL = "https://swapi.dev/api/people/"
async function getCharacters() {
    const response = await axios.get(`${URL}`)
    return response
}
getCharacters()
app.get(`${getCharacters()}`)
app.listen(PORT, console.log(`Server running on port ${PORT}`));
