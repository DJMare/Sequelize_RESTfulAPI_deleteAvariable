# Sequelize_RESTfulAPI_deleteAvariable
An express app connecting to mySQL database and implementing RESTful API to delete a variable.

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

    cd Desktop

(2) Create a new folder on Desktop: 

    mkdir Express

(3) Navigate to the Express directory: 

    cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

    npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_Sequelize_RESTfulAPI_deleteAvariable: 

    express --view=hbs express_Sequelize_RESTfulAPI_deleteAvariable

(6) Once the process is complete, navigate into the express_Sequelize_RESTfulAPI_deleteAvariable directory: 

    cd express_Sequelize_RESTfulAPI_deleteAvariable
    
(7) Now in the express_Sequelize_RESTfulAPI_deleteAvariable directory, run the following: 

    npm install

(8) Install Nodemon globally: 

    npm install -g nodemon
    
(9) Install Nodemon as a devDependency in the package.json file within the express_Sequelize_RESTfulAPI_deleteAvariable directory:

    npm install -save-dev nodemon
    
(10) Install mysql2:

    npm install --save mysql2

(11) Install sequelize: 

    npm install --save sequelize@5.15.1

(12) Open in VS code:

    code . 


VS CODE

(13) Navigate to the routes/index.js file and require mysql2 in routes/index.js file.: ![Require mysql2 in routes-index js file (Sequelized_RESTfulAPI_deleteAvariable)](https://user-images.githubusercontent.com/35668707/71387906-0ff8c200-25c4-11ea-90d2-4a8d90aced9a.JPG)

COMMAND PROMPT

(14) Create necessary sequelize folders and files in project.:

    sequelize init

(15)  Generate a model file for the actor table. (-h: IP/Hostname; -d: Database; -u: Username for database; -x: Password for database; -o: directory to place the models; -t: comma-seperated names of tables to import):  

    sequelize-auto -h localhost -d sakila -u root -x Password1! -o "./models" -t film,actor,film_actor
    
VS CODE

(16) Create a new folder in your "models" folder called rel. Create a file in your rel folder called associations.js and define the relationships between the "film" and "actor" models in this file.: ![In models folder create rel folder and an associations js file in the rel folder (Sequelized_RESTfulAPI_deleteAvariable)](https://user-images.githubusercontent.com/35668707/71388174-3b2fe100-25c5-11ea-847b-510a9cd04a1b.JPG)

![In models rel folder update associations js file (Sequelized_RESTfulAPI_deleteAvariable)](https://user-images.githubusercontent.com/35668707/71388217-69152580-25c5-11ea-883e-9ae847432511.JPG)

(17) In the models/index.js file add associations constant and at the bottom of the models/index.js file add the call to associations function.: ![Call associations function in models-index js file (Sequelized_RESTfulAPI_deleteAvariable)](https://user-images.githubusercontent.com/35668707/71388314-d4f78e00-25c5-11ea-8b0d-b21841b23295.JPG)


(18) Open config/config.json file and change settings to connect to the database.: ![Update database connection info in config-config json file (Sequelized_RESTfulAPI_deleteAvariable)](https://user-images.githubusercontent.com/35668707/71388340-f22c5c80-25c5-11ea-9bb8-8222bf5d75ea.JPG)

(19) Open app.js file at the root of the project and include the './model" folder so that the models are available everywhere in the application.: ![Add models in app js file (Sequelized_RESTfulAPI_deleteAvariable)](https://user-images.githubusercontent.com/35668707/71388372-14be7580-25c6-11ea-82e0-27602fb3531e.JPG) 

(20) Add sequelize sync code above module.exports in the app.js file to ensure that the tables within the models in the project are the same as in the database.: Add models sequelize sync in app js file (Sequelized_RESTfulAPI_Post): 

(21) In the routes/index.js file require the models.: 

(22) In the routes/index.js file add put() route for /actors that will use the findAll() method.: 

COMMAND PROMPT

(23) Run nodemon in terminal to see DB sync'd up: 

    nodemon

POSTMAN

(24) Navigate to localhost3000/actors/[insert specific id #] in Postman and perform a DELETE request to add data. 

NODEMON NOTE

Sometimes nodemon crashes in Windows 10 and there is a simple fix:

(1) Open Task manager (press Ctrl+Alt+Delete)

(2) Select the 'Processes tab'

(3) Search for 'Node.js: Server-side JavaScript'

(4) Select it and click on 'End task' button

Now you can run npm start.
