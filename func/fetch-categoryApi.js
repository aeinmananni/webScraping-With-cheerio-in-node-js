const cheerio = require("cheerio");
const axios = require("axios");

 const fetchCategories = async (url) => {
    try {
       
        const response = await axios.get(url, {
            timeout: 10000,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"
            }
        });
        const $ = cheerio.load(response.data);
        return $;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    fetchCategories
};