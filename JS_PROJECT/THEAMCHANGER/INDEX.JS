//alert("hi i am partha")

const body = document.querySelector("body")
const buttons = document.querySelectorAll(".button")

buttons.forEach((e) => {
    e.addEventListener("click", (buttonchange)=>{
        //console.log(buttonchange)
        if (buttonchange.target.id==="red") {
            body.style.backgroundColor=buttonchange.target.id
            
        }if (buttonchange.target.id==="white") {
            body.style.backgroundColor=buttonchange.target.id
            
        }if (buttonchange.target.id==="green") {
            body.style.backgroundColor=buttonchange.target.id
            
        }if (buttonchange.target.id==="gray") {
            body.style.backgroundColor=buttonchange.target.id
            
        }if (buttonchange.target.id==="blue") {
            body.style.backgroundColor=buttonchange.target.id
            
        }

    })


});