let mm =document.getElementById('mm');
let dd =document.getElementById('dd');
let btn =document.getElementById('btn');
let cvv =document.getElementById('cvv');
let number =document.getElementById('number');
let num =document.getElementById('num');

let dataPro ;
if(localStorage.product != null ) {
    dataPro = JSON.parse(localStorage.product)
} else {
    dataPro = [];
}




btn.onclick = function(){
let newPro = {
    mm:mm.value,
    dd:dd.value,
    cvv:cvv.value,
    num:num.value,
    number:number.value,


}
dataPro.push(newPro)
localStorage.setItem('product' ,JSON.stringify(dataPro) )
console.log(dataPro)
}


 btn.onclick = prompt (تمام )



































