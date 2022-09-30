#  <center>Star Wars API </center> 

 ## :bookmark: Index 

 - [About the project](#)

    - [Installation and deployment](#)

    - [Technologies used](#)

    - [Get Characters](#)

    - [Search bar](#)

- [footer](#)

- [Acknowledgment](#)

- [Things I would have liked to have added](#)

- [Authors](#)

## About the project

The solution should consist, at least, of a UI developed with React and a middleware
developed with NodeJS. The data source is the Star Wars API: https://swapi.dev/
The goal of the solution is to provide a user interface to explore the characters of the
Star Wars universe as well as the details related to each one of them such as movies
where they appear, home world, race, etc.
Additionally the UI should have a search feature allowing the user to search characters
by name.
The characters from the "extra_character.json" file should be treated in the same way as
the ones coming from the API.
The UI should be visually appealing and intuitive. As a suggestion here you have a
wireframe of the home page but feel free to create the UI as you think works best:

## Installation and deployment

BackEnd

    1. Download the repository from (https://github.com/alextebbitt/swapi-back) using `git clone https://github.com/alextebbitt/swapi-back`  From the terimal in whichever folder you like.  

    2. Once the repository has been cloned, all the packages needed for the project must be installed with `npm i` 

    3. It is necessary to have the Sequelize CLI installed globally, to do this enter in the terminal `npm i sequelize-cli -g`


    6. Inside the cloned folder of ["Frikishop"](https://github.com/alextebbitt/swapi-back) you have to run the command `npm start`

- FrontEnd

    1. Download the repository from ["SurvivorShop"](https://github.com/alextebbitt/swapi-front-react) using `git clone https://github.com/alextebbitt/swapi-front-react` From the terimal in whichever folder you like.

    2. Once the repository is cloned, you have to install all the packages that the project needs with `npm i`

    3. Inside the cloned folder of (https://github.com/alextebbitt/swapi-front-react) you have to run the command `npm start`

## Technologies used

```JavaScript
const project = {
    frontEnd:{
        main:["JavaScript","React","styled components"],
        modules:[
            "react-router-dom",
            "material ui",
            "axios"
            "styled components"
        ]
    },
    backEnd:{
        main:["JavaScript","NodeJS","Express", "Cors"],
        modules:[
            "Postman"
        ]
    }
} 
```


# Get Characters

![Get Characters](./assetsReadme/Screenshot%202022-09-30%20030213.png)

 In this picture you can see that it brings information from the Api. I did this by creating a backend: https://github.com/alextebbitt/swapi-back

 I have created pagination in the backend with a limit of 10 per page. When you click on the big white arrow it will load the next 10 characters. 

 I decided to create cards for each character in a column style. This way you can see all the information more clearly. 

## Search bar

![Search bar](./assetsReadme/Screenshot%202022-09-30%20030311.png)

As you can see here the filter is dynamic. When you type in "lu" you get the results of the characters who have "lu" in their names. If you continued writing "luk" or "luke you would get only Luke Skywalker in the results. 




## footer 

![Screenshot of the footer](./assetsReadme/Screenshot%202022-09-30%20030351.png)


## Acknowledgment

I would like to thank Woztell for this opportunity.

## Things I would have liked to have added

- Implement a single page for characters

- Navbar with links to pages for spaceships, planets etc

- intergration of the extra character into the API.


## Author

### [Alex Tebbitt](https://github.com/alextebbitt)