
const div = document.getElementById('app');
const btn = document.getElementById('btn');

btn.addEventListener('click' , ()=>{
    const sp = document.createElement('p');
    sp.innerText = "اضافه کردن عنصر جدید";
    div.appendChild(sp);
})