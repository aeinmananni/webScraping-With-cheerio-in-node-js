//Find the elements upwards
const cheerio = require('cheerio');
const fs = require("fs");
const path = require('path');

const file_Path = path.join(path.dirname(__dirname),"index.html")
const html_content = fs.readFileSync(file_Path);
const $ = cheerio.load(html_content);

//In the first step, we want to display the element above the head of the article
const data1 = $('article').parent();

data1.each((index,element) =>{
     console.log(index,$(element).html());
})

//In the first step, we want to display the elements above the article head

const data2 = $('article').parents();

data2.each((index,element) =>{
     console.log(index,$(element).html());
})

//Now we can limit the display of the parent elements of the article

const data3 = $('article').parentsUntil('body');

data3.each((index,element) =>{
     console.log(index,$(element).html());
})

//Now we want to return the closest element to the article

const data4 = $('p').closest('article');

data4.each((index,element) =>{
     console.log(index,$(element).html());
})