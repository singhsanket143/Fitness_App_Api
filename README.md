# Project Setup
 - clone the project in your local machine
 - go into the project directory and use `npm i`
 - Create a new .env file and configure a variable `PORT=XXXX` 
 - To create the db - `npx sequelize init` , then change username and password in the `config.config.json`
 - then `npx sequelize db:create`
 

 # Model generation commands
  `npx sequelize model:generate --name Symptoms --attributes name:string`
  `npx sequelize model:generate --name HealthRecord --attributes height:integer,weight:integer,bloodPressure:integer,sugarLevel:integer`
  `npx sequelize model:generate --name Hospital --attributes name:string,address:string`