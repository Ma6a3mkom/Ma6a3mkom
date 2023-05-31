const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const pool = require('./db');
app.use(express.json());
app.use(cors());










app.listen(port, () => {console.log('Server listening on port ' + port);});

