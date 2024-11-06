const cheerio = require("cheerio");
const path = require("path");
const fs = require("fs");

const file_path = path.join(path.join(__dirname),'../../index.html');
const  html_content = fs.readFileSync(file_path);
const $ = cheerio.load(html_content);


//Suppose we want to get the address of the link
const href = $('a').attr('href');

//Well, now we want to get the value
const inputValue = $('input').prop("value");
const changeValue =$('input');
//Well, now we want to change the value
changeValue.prop("value","Wellcom");


console.log(`
    ${href}
----------------------------------------------------------------------------------
    ${inputValue}
----------------------------------------------------------------------------------
     ${changeValue.prop("value")}
`);

