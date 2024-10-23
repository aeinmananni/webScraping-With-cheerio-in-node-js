//Well, now we want to get the information from an HTML file
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

const file_path = path.join(path.dirname(__dirname),"index.html");

  const html_content = fs.readFileSync(file_path);
const $ = cheerio.load(html_content);


// console.log($.html());

// console > output >  ====>{

//<!DOCTYPE html><html lang="en"><head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Document</title>
// <style>
//    body{
//      background-color: antiquewhite;
//    }
// </style></head>

// <body>
//     <div id="app">
//            <h1>WebScraping</h1>
//            <h1>this is html file</h1>
//            <p id="p1">این یک پراگراف تستی است</p>
//           </div>
//           <button id="btn">اضافه کردن عنصر جدید</button>
//    <a href="https://www.google.com">Google</a>
//    <script src="./index.js"></script>

// </body></html>

//}
//---------------------------------------------------------------------------------------

  //Tip : Now, at this stage, we want to see the information we got from the HTML page in the output


    console.log("Title : " , $("title").text());
    console.log("H2 : " , $("h2").text());
    console.log("P : " , $("p").text());
