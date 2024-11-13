
const {fetchCategories} = require("../../func/fetch-categoryApi");



const parseCategoryContent = async () => {
    const $ = await fetchCategories( "https://www.uxdesigninstitute.com/courses/product-design?campaignid=21094947034&adgroupid=163383265881&adid=693200351508&utm_source=google&utm_medium=cpc&utm_term=product%20user%20interface&utm_campaign=Search_T2_EU_1_PDPD_Diploma_Product_Design_Generic&hsa_cam=21094947034&hsa_mt=b&hsa_ver=3&hsa_src=g&hsa_ad=693200351508&hsa_net=adwords&hsa_tgt=kwd-493267880599&hsa_acc=6247795550&hsa_grp=163383265881&hsa_kw=product%20user%20interface&gad_source=1&gclid=Cj0KCQiA0MG5BhD1ARIsAEcZtwRpt9fZMO2nCjTlEyvYS7saG743NlR7Q1Iv_eVJahIoshMebaz5Y2MaApZFEALw_wcB");

        const links = $('header .main-menu .w-container .row .navbar-container nav ul li a span'); 
        
     links.each((index,element) =>{
          console.log(index + 1,$(element).text())
     }) 
        
    
};

parseCategoryContent();