const first = document.getElementById("first")
const myImg = document.getElementById("myImg")
const text = document.getElementById("text")
const mail = document.getElementById("mail")
const city = document.getElementById("city")
const state = document.getElementById("state")
const country = document.getElementById("country")
const title = document.getElementById("title")


const getUser = async() => {
    const userInfo = await fetch("https://randomuser.me/api")
    const data = await userInfo.json()

    const image = data.results[0].picture.large;

    myImg.src = image;

    title.innerHTML = `Title: ${data.results[0].name.title}`;

    first.innerHTML = `First-Name : ${data.results[0].name.first}`;

    const last_name = data.results[0].name.last

    const lastName = document.createElement('p');

    const textNode = document.createTextNode(last_name)


    let surName = lastName.appendChild(textNode)
    

    text.appendChild(surName)

    mail.innerHTML = `Email Address : ${data.results[0].email}`
    
    city.innerHTML = `City: ${data.results[0].location.city}`

    state.innerHTML = `State : ${data.results[0].location.state}`
    
    country.innerHTML = `Country: ${data.results[0].location.country}`
    
    // console.log(data)
//    .then(res => res.json())
//    .then(data => console.log(data.results[0].name.first))
}

getUser()

