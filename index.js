const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://news.ycombinator.com/';
var path = require('path');
let data;
const express = require('express');
const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

 
app.get('/', function (req, res) {
  res.render("title", { data });
})

// var html;
axios.get(url)
.then(res => {
	getData(res.data);
}).catch(err => {
	console.log(err);
})

let getData = html => {
	data = [];
	const $ = cheerio.load(html);
	$(".storylink").each((i, v) => {
		data.push({
			title: $(v).text()
		});
	});
}

app.listen(3000, () => console.log('server is running at port 3000'));

