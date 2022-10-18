Run the complete  app
npm run startboth

/dashboard - admin
/request/{event ID} - questionaire for clients
/requests - all of questionaire - [ TBA ]

{[ SERVER ]}

[ index.js ]
Node express project setup with Sequelize

[ associate.js ]
Connections between database tables

[ routing.js ]
API routes
These paths found here can be accessed from backend point of view: https://localhost:8080/[activity]
These paths will be connected to the frontend via a fetch call.

[ database.js ]
This file initialises Sequelizer and creates a database using the set credentials. 

{[ CLIENT ]}
