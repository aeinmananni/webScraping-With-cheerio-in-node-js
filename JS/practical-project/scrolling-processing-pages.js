const {fetchCategories} = require("../../func/fetch-categoryApi");
const cheerio = require("cheerio");
const ppt = require("puppeteer-core");

const parsecategoryContent = async(html_content) =>{
    let $;
    if(html_content){
         $ =  cheerio.load(html_content);
    } else{
        $ = await fetchCategories("https://bama.ir/car")
    }
    const links1 = $(".bama-ad-holder");
 
    links1.each((index,element) => {
        let obj = {
            id:0,
              name:"",
              years:"",
              km:""
        }
        const title = $(element).find(".bama-ad__title > span .part").text().trim();
        const year = $(element).find(".bama-ad__detail-row > span:eq(0)").text().trim();
        const km = $(element).find(".bama-ad__detail-row  .dir-ltr").text().trim();
        //   console.log(`${index} > ${$(element).html()}`);
        obj = {
             ...obj,
             id:index + 1,
             name:title,
             years:year,
             km
        }

           console.log(obj)

    

    })
}

 const fetchCarsWithScroll = async () =>{
     const brower = await ppt.launch({
         headless:false,
         ignoreHTTPSErrors:true,
         waitForInitialPage:true,
         executablePath:"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
     })
     const page =  await brower.newPage();
     await page.waitForNetworkIdle();
     const url = "https://bama.ir/car";
      console.log("Net Work Connected !");
      await page.goto(url);
      console.log('Page Loded');
      await page.screenshot({path:"cars.png"});

      const first_height = await page.evaluate("document.body.scrollHeight");

      console.log("Scroll Height : " , first_height);
      let lastHight = 0;
      let html = "";
      while(true){
        await page.evaluate("window.scrollTo(0,document.body.scrollHeight)");
         await new Promise((resolve) => setTimeout(resolve,3000));


         const newHight = await page.evaluate("document.body.scrollHeight");

        if(lastHight > 3 * first_height){

            html = await page.content();
        break;
        }
        lastHight = newHight;
      }

        console.log("------finished------");
        await brower.close();
        console.log("Browser closed");
    return html
 }

 const run = async () =>{
    const content = await  fetchCarsWithScroll();
    await parsecategoryContent(content);

 };



 run();