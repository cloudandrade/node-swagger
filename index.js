const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: 'Customer API',
			description: 'Customer API Information',
			servers: ['http://localhost:5000'],
			tags: [
				{
					name: 'costumers',
					description: 'Everything about your costumers',
				},
				{
					name: 'agents',
					description: 'Everything about your agents',
				},
			],
		},
	},
	//['.routes/*.js]
	apis: ['index.js'],
};

//Routes

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req, res) => {
	res.send('always running');
});

/*Post Costumer Route */
/**
 * @swagger
 * /costumers:
 *  post:
 *    tags: ["costumers"]
 *    description: Use to create a costumer
 *    parameters: [
 *      	{
						"in": "body",
						"name": "body",
						"description": "Pet object that needs to be added to the store",
						"required": true,
            "schema": {
              "properties":{
				        "id": { "type": "integer"},
				        "name": { "type": "string" }
              }
            }
					}
 *    ]
 *    responses:
 *      '200':
 *        description: A sucessfull response
 */
app.post('/costumers', (req, res) => {
	let costumer = req.body;
	console.log(req.body);
	res.send('customer created');
});

/*Get Costumers Route */
/**
 * @swagger
 * /costumers:
 *  get:
 *    tags: ["costumers"]
 *    description: Use to request all costumers
 *    responses:
 *      '200':
 *        description: A sucessfull response
 */
app.get('/costumers', (req, res) => {
	res.send('customer results');
});

/*Edit Costumer Route */
/**
 * @swagger
 * /costumer:
 *  put:
 *    tags: ["costumers"]
 *    description: Use to update a costumer
 *    responses:
 *      '200':
 *        description: A sucessfull response
 */
app.put('/costumer', (req, res) => {
	res.send('sucessful updated costumer');
});

/*Delete Costumer Route */
/**
 * @swagger
 * /costumer/{id}:
 *  delete:
 *    tags: ["costumers"]
 *    description: Use to delete a costumer
 *    parameters: [
					{
						"name": "id",
						"in": "path",
						"description": "ID of costumer to delete",
						"required": true,
						"type": "integer",
						"format": "int64"
          },
        ]
 *    responses:
 *      '200':
 *        description: A sucessfull response
 */
app.delete('/costumer/:id', (req, res) => {
	res.send('sucessful deleted costumer with id: ' + req.params.id);
});

/**Agents ----------------------------------------------------------------------- */
/*Post Agent Route */
/**
 * @swagger
 * /agent:
 *  post:
 *    tags: ["agents"]
 *    description: Use to create a agent
 *    parameters: [
 *      	{
						"in": "body",
						"name": "body",
						"description": "Agent to be created",
						"required": true,
            "schema": {
              "properties":{
				        "id": { "type": "integer"},
                "name": { "type": "string" },
                "age": { "type": "integer"}
              }
            }
					}
 *    ]
 *    responses:
 *      '200':
 *        description: A sucessfull response
 */
app.post('/agent', (req, res) => {
	let agent = req.body;
	console.log(agent);
	res.send('agent created');
});

/*Get Agents Route */
/**
 * @swagger
 * /agents:
 *  get:
 *    tags: ["agents"]
 *    description: Use to request all agents
 *    responses:
 *      '200':
 *        description: A sucessfull response
 */
app.get('/agents', (req, res) => {
	res.send('agents results');
});

/*Edit Agent Route */
/**
 * @swagger
 * /agent:
 *  put:
 *    tags: ["agents"]
 *    description: Use to update a agent
 *    responses:
 *      '200':
 *        description: A sucessfull response
 */
app.put('/agent', (req, res) => {
	res.send('sucessful updated costumer');
});

/*Delete Agent Route */
/**
 * @swagger
 * /agent/{id}:
 *  delete:
 *    tags: ["agents"]
 *    description: Use to delete a agent
 *    parameters: [
					{
						"name": "id",
						"in": "path",
						"description": "ID of agent to delete",
						"required": true,
						"type": "integer",
						"format": "int64"
          },
        ]
 *    responses:
 *      '200':
 *        description: A sucessfull response
 */
app.delete('/agent/:id', (req, res) => {
	res.send('sucessful deleted agent with id: ' + req.params.id);
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
