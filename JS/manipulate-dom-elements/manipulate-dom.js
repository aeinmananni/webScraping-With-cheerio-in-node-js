//We want to know how we can change the HTML conten
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

 const file_path = path.join(path.join(__dirname),"../../index.html");
 const html_contents = fs.readFileSync(file_path);
 const $ = cheerio.load(html_contents);

 //Now we want to find the element in any way we can and change its value
 const data1 = $('article p');
   data1.first().text("React js");
//--------------------------------------------------------------------------------
//Now suppose we want to look for div tags and we want to add an element to the tag with the content class.

const data2 = $('div');
data2.filter(".content").html('<h2>New Text </h2>')
 




//--------------------------------------------------------------------------------
 console.log(`
     ${data1.parents().html()}
 ----------------------------------------------------------------------------------
     ${data2.parents().html()}   
`);

