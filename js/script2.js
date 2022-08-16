let url = "http://localhost:3001/info"

let btn_add = document.querySelector(".add")
let tbody = document.querySelector("tbody")

function reload1(p){
    axios.get(url)
        .then(res=> {
            if(res.status === 200 || res.status == 201){
              reload( res.data ,tbody)
            }
        })
        .catch(err => console.log(err))
}
reload1()

function reload(arr,plc) {
    plc.innerHTML = ""

    for(let item of arr){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let img_td1 = document.createElement("img")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")

        td1.classList.add("t1")

        td1.innerHTML = item.name
        td2.innerHTML = item.email
        td3.innerHTML = item.location
        td4.innerHTML = item.phone
        td5.innerHTML = "16/08/2022"

        img_td1.src = "./img/avatar.png"
        img_td1.height= "35"
        img_td1.alt= ""

        plc.append(tr)
        tr.append(td1, td2, td3,td4,td5)
        td1.prepend(img_td1)
    }
}

// adding-----------------------------------------------------------------

let modal_bg = document.querySelector(".modal_bg")
let modal = document.querySelector(".modal")

btn_add.onclick=()=>{
    modal_bg.style.display = "block"
    modal.style.display = "block"
}

let form = document.forms.adding

form.onsubmit=(e)=>{
    e.preventDefault()

    let info = {}
    let fm = new FormData(form)
    fm.forEach((value, key)=>{
        info[key] = value
    })
    
    axios.post(url , info)
        .then(res => reload1())


     modal_bg.style.display = "none"
     modal.style.display = "none"
}


let up = document.querySelector(".up")
let doun = document.querySelector(".doun")

doun.onclick=()=>{
    axios.get(url)
        .then(res => {
            if(res.status === 200 || res.status == 201){
                // let ids = []
                // res.data.forEach(item=>{
                //     ids.push(item.id)
                // })
                // ids = ids.sort((a,b)=> b-a)

                // res.data.forEach(item=>{
                // // res.data.forEach(item=>{
                // })
                
                
            }
        })
}
// arr.sort(function(a, b) {
//     if (a.value > b.value) {
//       return 1; }
//     if (a.value < b.value) {
//       return -1; }
//     return 0;
// });