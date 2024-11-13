const {fetchCategories} = require("../../func/fetch-categoryApi");


const parsecategoryContent = async() =>{
    const $ = await fetchCategories("https://bama.ir/car");
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

parsecategoryContent();