const showCoupon = () => {
    document.getElementById('coupons').style.display = "block"
}

const closeCoupon = () => {
    document.getElementById('coupons').style.display = "none"
}

const baseUrl = "http://3.17.216.66:4000";

let cityContent = ``
let restContent = ``

const getCity =  async() => {
    let response = await fetch(`${baseUrl}/location`,{method:'GET'})
    let data = await response.json()
    data.map((item) => {
        let display = `<option value=${item.state_id}>${item.state}</option>`
        cityContent += display
    })
    document.getElementById('location').innerHTML = cityContent
}

const handleRest = async() => {
    let cityId = document.getElementById('location').value;
    let rest = document.getElementById('restSelect');
    console.log(">>>>",rest.length);
    while(restContent.length  > 0){
        restContent = ""
    }
    let response = await fetch(`${baseUrl}/restaurant?stateId=${cityId}`)
    let data = await response.json();
    
    data.map((item) => {
        let display = `<option>${item.restaurant_name}|${item.address}</option>`
        restContent += display
    })
    rest.innerHTML = restContent
}


// async function getCity(){
//     let response = await fetch(cityUrl,{method:'GET'})
//     let data = await response.json()
//     data.map((item) => {
//         let display = `<option value=${item.state_id}>${item.state}</option>`
//         context += display
//     })
//     document.getElementById('location').innerHTML = context
// }


// function getCity(){
//     fetch(cityUrl,{method:'GET'})
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         data.map((item) => {
//             let display = `<option value=${item.state_id}>${item.state}</option>`
//             context += display
//         })
//         document.getElementById('location').innerHTML = context
//     })
// }

// function getCity(){
//     fetch(cityUrl,{method:'GET'})
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         data.map((item) => {
//             let element = document.createElement('option') //<option></option>
//             let text = document.createTextNode(item.state) //delhi
//             element.appendChild(text) //<option>Delhi</option>
//             element.value = item.state_id //<option value="1">Delhi</option>
//             document.getElementById('location').appendChild(element)
//             //<select><option value="1">Delhi</option></select>
//         })
//     })
// }