var input = document.querySelector('input');
var div = document.getElementById('items');
var inputvalue = input.value;
var fun = function () {
    var inputvalue = input.value;
    var li = document.createElement('li');
    li.innerText = inputvalue;
    div.appendChild(li);
    input.value = '';
};
var clea = function () {
    div.innerText = '';
};
var btn = document.getElementsByClassName('delete_btn');
/*
let btn_Array:any[]=[]
btn_Array.push(btn)
console.log(btn_Array)

btn_Array.map(btns =>{
    if(btn.length){
        input.value = ''
    }
  
})
    */
var listenerFunction = function () {
};
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", listenerFunction);
