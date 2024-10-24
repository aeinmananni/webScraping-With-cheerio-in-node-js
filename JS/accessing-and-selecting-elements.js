const cheerio = require("cheerio");
const fs = require("fs");
const path  = require("path");

const file_path = path.join(__dirname,"../index.html");
const html_content = fs.readFileSync(file_path);

const $ = cheerio.load(html_content);

//Suppose you want to return an element with the content class

console.log($('.content').text());
// Suppose you want to return an element with a specified id
console.log($('#title').text());
//  Suppose you want to return a P tag with the specified selected class
 console.log($("p.selected").html());

 //Now we want to display all the p tags in the div
 console.log($("div.parent p").text());


 //We can do the neck inside an element in a different way

 const data1 = $("div.parent p");
 data1.each((index,element) => {
     console.log( `INDEX : ${index} >`, $(element).text());
 })

 //Now if we want to point directly to an element like below
//  <div class="parent">
//  <article>
        
//         <p>Text 1</p>
//         <p class="selected">Text 2</p>
//         <p>Text 3</p>
//  </article>
//  <p>Text 4</p>
// </div>

const data2 = $("div.parent > p");
data2.each((index,element) => {
    console.log( `INDEX : ${index} >`, $(element).text());
})


// Now if we want to provide us with the first element from the data it returns

const data3 = $("div.parent  p:first"); // =>Now if we want to give us the last element of the data it returns We use last instead of first

data3.each((index,element) => {
    console.log( `INDEX : ${index} >`, $(element).text());
})


//Well, now we want to extract elements that contain a specific string

const data4 = $("div.parent  p:contains(4)");

data4.each((index,element) => {
    console.log( `INDEXDDDD : ${index} >`, $(element).text());
})
