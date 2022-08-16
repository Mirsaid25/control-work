let enter = document.querySelector(".enter")
let block = document.querySelector(".block")

function registstion(plc) {
    plc.innerHTML = ""

    let span1 = document.createElement("span")
    let img_span1 = document.createElement("img")
    let h1 = document.createElement("h1")
    let span2 = document.createElement("span")
    let form = document.createElement("form")
    let inp1 = document.createElement("input")
    let inp2 = document.createElement("input")
    let inp3 = document.createElement("input")
    let inp4 = document.createElement("input")
    let form_block = document.createElement("div")
    let inp5 = document.createElement("input")
    let span3 = document.createElement("span")
    let a_span3 = document.createElement("a")
    let button = document.createElement("button")
    let enter_futher = document.createElement("div")
    let span4 = document.createElement("span")
    let a_span4 = document.createElement("a")

    span1.innerHTML = "Dashboard"
    h1.innerHTML = "Create a new account"
    span2.innerHTML = "Use your email to create new account"
    span3.innerHTML = "I have read the"
    a_span3.innerHTML = "Terms and Conditions"
    button.innerHTML = "Sign Up"
    span4.innerHTML = "Don’t have an account?"
    a_span4.innerHTML = "Sign ip"

    img_span1.src = "./img/toRight.svg"

    img_span1.alt = ""

    a_span3.href = "#"
    a_span4.href = "#"

    form.name = "registation"
    inp1.name = "name"
    inp2.name = "surname"
    inp3.name = "email"
    inp4.name = "password"

    inp1.type = "text"
    inp2.type = "text"
    inp3.type = "email"
    inp4.type = "password"
    inp5.type = "checkbox"
    button.type = "submit"

    inp1.placeholder = "First name"
    inp2.placeholder = "Last name"
    inp3.placeholder = "Email address"
    inp4.placeholder = "Password"
    inp5.placeholder = "w"

    inp1.required = true
    inp2.required = true
    inp3.required = true
    inp4.required = true
    inp5.required = true

    form_block.classList.add("form-block")
    enter_futher.classList.add("enter_futher")

    plc.append(span1,h1, span2, form, enter_futher)
    span1.prepend(img_span1)
    form.append(inp1, inp2, inp3, inp4, form_block, button)
    form_block.append(inp5,span3)
    span3.append(a_span3)
    enter_futher.append(span4 , a_span4)



    form.onsubmit=e=>{
        e.preventDefault()
         
        let info ={
            id: Math.random(),
        }
        
        let fm = new FormData(form)
        
        fm.forEach((value,key )=>{
            info[key] = value
        })
        localStorage.setItem("enter", JSON.stringify(info))

        enter.style.display = "none"
        block.style.display = "block"
    }

    a_span4.onclick=()=>{
        sign(enter)
    }
}


function sign(plc) {
    plc.innerHTML = ""

    let span1 = document.createElement("span")
    let img_span1 = document.createElement("img")
    let h1 = document.createElement("h1")
    let span2 = document.createElement("span")
    let form2_block = document.createElement("div")
    let facebook = document.createElement("div")
    let img_facebook = document.createElement("img")
    let h3_facebook = document.createElement("h3")
    let google = document.createElement("div")
    let img_google = document.createElement("img")
    let h3_google = document.createElement("h3")
    let p = document.createElement("p")
    let form = document.createElement("form")
    let inp3 = document.createElement("input")
    let inp4 = document.createElement("input")
    let button = document.createElement("button")
    let enter_futher = document.createElement("div")
    let span4 = document.createElement("span")
    let a_span4 = document.createElement("a")

    span1.innerHTML = "Dashboard"
    h1.innerHTML = "Sign in"
    span2.innerHTML = "Sign up on the internal platform"
    button.innerHTML = "Sign In"
    span4.innerHTML = "Don’t have an account?"
    a_span4.innerHTML = "Sign up"
    h3_facebook.innerHTML = "Login with Facebook"
    h3_google.innerHTML = "Login with Google"
    p.innerHTML = "or login with email address"

    img_span1.src = "./img/toRight.svg"
    img_facebook.src = "./img/facebook.svg"
    img_google.src = "./img/google.svg"

    img_span1.alt = ""

    a_span4.href = "#"

    form.name = "sign"
    inp3.name = "email"
    inp4.name = "password"

    inp3.type = "email"
    inp4.type = "password"
    button.type = "submit"

    inp3.placeholder = "Email address"
    inp4.placeholder = "Password"

    form2_block.classList.add("form2_block")
    enter_futher.classList.add("enter_futher")
    facebook.classList.add("facebook")
    google.classList.add("google")

    plc.append(span1,h1, span2,form2_block,p, form, enter_futher)
    form2_block.append(facebook, google)
    facebook.append(img_facebook, h3_facebook)
    google.append(img_google, h3_google)
    span1.prepend(img_span1)
    form.append(inp3, inp4, button)
    enter_futher.append(span4 , a_span4)
    // function

    form.onsubmit=(e)=>{
        e.preventDefault()

        if(inp3.value === JSON.parse(localStorage.getItem("enter")).email && inp4.value === JSON.parse(localStorage.getItem("enter")).password){
            enter.style.display = "none"
            block.style.display = "block"
        }
    }

    a_span4.onclick=()=>{
        registstion(enter)
    }
}

// sign()

if(localStorage.getItem("enter") === null){
    enter.style.display = "flex"
    registstion(enter)

}else{
    enter.style.display = "flex"
    sign(enter)
}

