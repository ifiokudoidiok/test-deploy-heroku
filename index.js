require('dotenv').config()

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const server = express();
server.use(helmet());
const port = process.env.PORT;
const friends = [
    {id:1, name:'Ifiok'},
    {id:2, name:'Jill'},
    {id:3, name:'Joe'},
];

server.use(express.static(__dirname + '/client/build'))
server.use(express.json());
server.use(cors());


server.get('/', (req, res) => {
 res.sendFile(__dirname + '/client/build/index.html')
})
server.get('/api/friends', (req, res, next) => {
  res.json(friends);
});

server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`)
})