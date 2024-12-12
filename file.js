let inp = document.querySelector(".birthday");
let btn = document.querySelector(".calbtn");
let ageresult = document.querySelector(".ageresult");

btn.addEventListener("click",()=>
{
if(inp.value =="")
{
alert("please add the correct age");
}
else{
let dob = new Date(inp.value);

let dob_year = dob.getFullYear();
let now = new Date();
let now_year = now.getFullYear();


let age = now_year - dob_year;

ageresult.innerHTML = `you are  ${age} year old `;
}
})
