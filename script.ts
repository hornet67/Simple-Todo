let input = document.querySelector('input')!

let div = document.getElementById('items') as HTMLInputElement
let inputvalue = input.value

let fun =()=>{

        let inputvalue = input.value
        let li = document.createElement('li')
        li.innerText = inputvalue
        div.appendChild(li)
       
        input.value=''



       


}

let clea =()=>{
           div.innerText = ''
}

let btn = document.getElementsByClassName('delete_btn') as unknown  as HTMLButtonElement
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


let listenerFunction = () => {
   
    
}

btn?.addEventListener("click", listenerFunction);
    
