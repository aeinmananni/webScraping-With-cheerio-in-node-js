// /Side scrolling elements


const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

const file_path = path.join(path.dirname(__dirname) , "index.html");
const html_content = fs.readFileSync(file_path);
const $ = cheerio.load(html_content);

//We want to find its level element
const data1 = $(" p:first").next();
data1.each((index,element) =>{
      console.log(`INDEX : ${index} > ${$(element).html()}`)
})

//Now if we want to find the next two

const data2 = $(" p:first").next().next();
data2.each((index,element) =>{
      console.log(`INDEX : ${index} > ${$(element).html()}`)
})

//Now if we want to find it with the index value
const data3 = $("p:eq(2)");
data3.each((index,element) =>{
      console.log(`INDEX : ${index} > ${$(element).html()}`)
})

//Well, now we want to return the element before this index
const data4 = $("p:eq(2)").prev();
data4.each((index,element) =>{
      console.log(`INDEX : ${index} > ${$(element).html()}`)
})

//If we want to return all the elements after it

const data5 = $("article > p:first").nextAll();
data5.each((index,element) =>{
      console.log(`INDEX : ${index} > ${$(element).html()}`)
})

//If we want to return all the elements before it
const data6 = $("article > p:first").prevAll();
data6.each((index,element) =>{
      console.log(`INDEX : ${index} > ${$(element).html()}`)
})

// To return all elements of the same level
const data7 = $("article > p:eq(2)").siblings();
data7.each((index,element) =>{
      console.log(`INDEX : ${index} > ${$(element).html()}`)
})


//Now we want to say, go that far in the article and choose the that I say
const data8 = $("article  p:first").nextUntil('article  p:last');
data8.each((index,element) =>{
      console.log(`INDEX : ${index} > ${$(element).html()}`)
})


//Now we want to say, go that far in the article and choose the that I say
const data9 = $("article  p:last").prevUntil('article  p:first');
data9.each((index,element) =>{
      console.log(`INDEX : ${index} > ${$(element).html()}`)
})