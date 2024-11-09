const cheerio = require("cheerio");
const path = require("path");
const fs = require("fs");

const file_path = path.join(path.join(__dirname),"../../index.html");
const html_content = fs.readFileSync(file_path);
const $ = cheerio.load(html_content);


//Well, now we want to add a p tag to the beginning of the article in the first code
const data = $("article");
data.prepend('<p>---first----</p>');
//Well, now we want to add a p tag to the end of the article in the first code
data.append('<p>---last----</p>');


//--------------------------------------------------------------------------------------------
//Well, now let's assume that we want to find the elements in the article
//We can add elements with before and after commands

const p_list = $('article');
p_list.eq(2).before("<p>--------Before Index2----------</p>");
p_list.eq(2).after("<p>---------after Index2-----------</p>");

//---------------------------------------------------------------------------------------------
//Now suppose we want to add an H2 tag before the article and we want to add an H2 tag after it.

$('......<h2> Before Article </h2>......').insertBefore('article');
$('......<h2> After Article </h2>.......').insertAfter('article');


//Well, now we want to replace this article tag with other tags

$('article p').replaceWith("<span>1234</span>");

//-------------------------------------------------------------------------------------------
//Well, now we want to delete all the tags we have installed

$('article span').remove();

//Well, now we can enclose the elements inside other tags with the wrap command
data.append('<p>RRRRRRRRRRRRRR</p>');
data.append('<p>RRRRRRRRRRRRRR</p>');
data.append('<p>RRRRRRRRRRRRRR</p>');
data.append('<p>RRRRRRRRRRRRRR</p>');
data.wrap('<div class="content"></div>');


//Well, now we want to enclose the inside of the article

data.wrapInner("<div></div>");

//Now, when we warp the article, we want to take it out of this state


data.unwrap();

//Emptying the elements of an element

data.empty();
console.log(`
    ${data.parents().parent().html()}
---------------------------------------------------------------------------------------------    

`);