const express = require('express');
const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

const app = express();

// this is serving up the build folder
app.use(express.static("build"));

const bodyParser = require('body-parser')
const mongoose   = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/puppy');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/hello", (req, res) => {
	res.json({message: "Hello, Mertle!"});
});

function run_server() {
	app.listen(PORT, HOST, err => {
		if (err) return console.error(err);
		console.log(`Listening on port ${PORT}`);
	});
}

if (require.main === module) run_server();


