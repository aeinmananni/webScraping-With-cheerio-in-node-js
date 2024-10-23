const axios = require("axios");
const cheerio = require("cheerio");


const fetchAndParseUrl = async({url,element}) =>{

    try{

        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        console.log($(`${element}`).text());
    }catch(error){
        console.log('Error Fetching Data : ',error);
    }
}


module.exports = {
      fetchAndParseUrl
}