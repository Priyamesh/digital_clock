let currdate=new Date();
console.log(currdate.toString());

setInterval(() => {
    let currdate=new Date();
    document.querySelector('#ctime').textContent=currdate.toString();
}, 1000);

