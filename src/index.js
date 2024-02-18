const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.listen((process.env.URL || 3000), () => console.log("Servidor online!"));

app.get('/', (req, res) => res.json("Hello World"));