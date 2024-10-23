const cheerio = require("cheerio");


//Now we want to extract the content inside the title tag
// const $ = cheerio.load(
//     `<html><head><title>
//       Hello , Word
//       </title></head></html>
//     `
// )

// console.log($("title").text()); //Now we want to extract the content inside the title tag
// console.log($("head").html()); //We are going to get HT structures
//---------------------------------------------------------------------------------------------------------------------------------

// Now suppose we want to load only one P tag

  //  const $ = cheerio.load(
  //   `
  //      <p> Sample Text....
    
  //   `
  //  )

  //  console.log($.html());

   //We can see that all the vatads have been executed automatically
   //console > output > <html><head></head><body><p> Sample Text....  </p></body></html>
    
   //Now, if we want to not display its parents, we can act like thisNow, if we want to not display its parents, we can act like this

  //  const $ = cheerio.load(
  //   `
  //      <p> Sample Text....
    
  //   `
  //  ,null,false)

  //  console.log($.html());

   // console > output >       <p> Sample Text....</p>