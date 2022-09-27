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
//  async function getCharacters() {
//      const URL = "https://swapi.dev/api/people/";
//     return   axios.get(URL)
// }
getCharacters().then((response) => {
    console.log(response.data)
}).catch((error) => {
    console.log(error)
})

app.get('/', (req, res) => {
    return res.send(getCharacters())
});


app.listen(PORT, console.log(`Server running on port ${PORT}`));
