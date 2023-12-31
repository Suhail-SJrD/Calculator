let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
            // document.querySelector('input').value = "Fuck You Do This in Your Brain"
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            // console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

// let a = document.querySelector('.buttons');
// console.log(a);
// console.log(a.innerHTML);
// console.log(eval("10-1"));