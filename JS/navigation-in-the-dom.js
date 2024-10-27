//Navigation in the DOM ,How to scroll down
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const file_Path = path.join(path.dirname(__dirname),"index.html")
const html_content = fs.readFileSync(file_Path);
const $ = cheerio.load(html_content);

 //---------------------------------------------------------------------------------------
 //Well, now we want to use the find command to extract all the p elements that are in the div
 const data = $('div').find('p');
   data.each((index,element) =>{
    console.log(index , $(element).text());
})
  //---------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------
  //Now, if we want, they will make all the p that are inside the div tag
  const data2 = $('div').children('p');

  data2.each((index,element) =>{
       console.log(index , $(element).text());
  })
  //---------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------
  //Now you want to return all the children of the div using the contents command  const data2 = $('div').children('p');
  const data3 = $('div').contents();
  data3.each((index,element) =>{
       console.log(index , $(element).text());
  })
  //---------------------------------------------------------------------------------------

