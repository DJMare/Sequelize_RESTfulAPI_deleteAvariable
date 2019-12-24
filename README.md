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

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_Sequelize_RESTfulAPI_updateAvariable: 

    express --view=hbs express_Sequelize_RESTfulAPI_updateAvariable

(6) Once the process is complete, navigate into the express_Sequelize_RESTfulAPI_updateAvariable directory: 

    cd express_Sequelize_RESTfulAPI_updateAvariable
    
(7) Now in the express_Sequelize_RESTfulAPI_updateAvariable directory, run the following: 

    npm install

(8) Install Nodemon globally: 

    npm install -g nodemon
    
(9) Install Nodemon as a devDependency in the package.json file within the express_Sequelize_RESTfulAPI_updateAvariable directory:

    npm install -save-dev nodemon
    
(10) Install mysql2:

    npm install --save mysql2

(11) Install sequelize: 

    npm install --save sequelize@5.15.1

(12) Open in VS code:

    code . 


VS CODE

(13) Navigate to the routes/index.js file and require mysql2 in routes/index.js file.: ![Require mysql2 in routes-index js file (Sequelized_RESTfulAPI_updateAvariable)](https://user-images.githubusercontent.com/35668707/71291788-8df96680-2341-11ea-974a-224f3c56776b.JPG)

COMMAND PROMPT

(14) Create necessary sequelize folders and files in project.:

    sequelize init

(15)  Generate a model file for the actor table. (-h: IP/Hostname; -d: Database; -u: Username for database; -x: Password for database; -o: directory to place the models; -t: comma-seperated names of tables to import):  

    sequelize-auto -h localhost -d sakila -u root -x Password1! -o "./models" -t film,actor,film_actor
    
VS CODE

(16) Create a new folder in your "models" folder called rel. Create a file in your rel folder called associations.js and define the relationships between the "film" and "actor" models in this file.: ![In models folder create rel folder and an associations js file in the rel folder (Sequelized_RESTfulAPI_updateAvariable)](https://user-images.githubusercontent.com/35668707/71291833-ac5f6200-2341-11ea-950a-0d887a6a51b3.JPG)

(17) In the models/index.js file add associations constant and at the bottom of the models/index.js file add the call to associations function.: ![Call associations function in models-index js file (Sequelized_RESTfulAPI_updateAvariable)](https://user-images.githubusercontent.com/35668707/71292240-d3b62f00-2341-11ea-9f89-9171ce80c03e.JPG)

(18) Open config/config.json file and change settings to connect to the database.: ![Update database connection info in config-config json file (Sequelized_RESTfulAPI_updateAvariable)](https://user-images.githubusercontent.com/35668707/71292277-ed577680-2341-11ea-8413-e55ce852c4a2.JPG)

(19) Open app.js file at the root of the project and include the './model" folder so that the models are available everywhere in the application.: ![Add models in app js file (Sequelized_RESTfulAPI_updateAvariable)](https://user-images.githubusercontent.com/35668707/71292675-11b35300-2342-11ea-83ba-51ca4acb59c2.JPG)

(20) Add sequelize sync code above module.exports in the app.js file to ensure that the tables within the models in the project are the same as in the database.: Add models sequelize sync in app js file (Sequelized_RESTfulAPI_Post): ![Add models sequelize sync in app js file (Sequelized_RESTfulAPI_updateAvariable)](https://user-images.githubusercontent.com/35668707/71293040-327ba880-2342-11ea-9c21-677b36cfe16d.JPG)

(21) In the routes/index.js file require the models.: ![Require models in routes-index js file (Sequelized_RESTfulAPI_updateAvariable)](https://user-images.githubusercontent.com/35668707/71293087-4f17e080-2342-11ea-98a6-66186798142a.JPG)

(22) In the routes/index.js file add put() route for /actors that will use the findAll() method.: ![Add put() route for actors id in index js file (Sequelized_RESTfulAPI_updateAvariable)](https://user-images.githubusercontent.com/35668707/71293144-6eaf0900-2342-11ea-9666-7c136e6986a4.JPG)

COMMAND PROMPT

(23) Run nodemon in terminal to see DB sync'd up: 

    nodemon

POSTMAN

(24) Navigate to localhost3000/actors/[insert specific id #] in Postman and perform a PUT request to add data.: ![update with  put() request in postman (Sequelized_RESTfulAPI_updateAvariable)](https://user-images.githubusercontent.com/35668707/71317017-5aedca80-2448-11ea-91c7-4aaf0e585739.JPG)

NODEMON NOTE

Sometimes nodemon crashes in Windows 10 and there is a simple fix:

(1) Open Task manager (press Ctrl+Alt+Delete)

(2) Select the 'Processes tab'

(3) Search for 'Node.js: Server-side JavaScript'

(4) Select it and click on 'End task' button

Now you can run npm start.
