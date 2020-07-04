const first = document.getElementById("user")
const myImg = document.getElementById("myImg")
const last = document.getElementById("last")
const mail = document.getElementById("mail")
const city = document.getElementById("city")
const state = document.getElementById("state")
const country = document.getElementById("country")
const title = document.getElementById("title")

const getUser = async() => {
    const name = await fetch("https://randomuser.me/api")
    const data = await name.json()

    const image = data.results[0].picture.large;

    myImg.src = image;

    title.innerHTML = data.results[0].name.title;

    first.innerHTML = data.results[0].name.first;

    const last_name = data.results[0].name.last

    const lastName = document.createElement('p');

    const textnode = document.createTextNode(last_name)

    const x = lastName.appendChild(textnode)

    console.log(x)

    last.appendChild(x)

    mail.innerHTML = data.results[0].email
    
    city.innerHTML = data.results[0].location.city

    state.innerHTML = data.results[0].location.state
    
    country.innerHTML = data.results[0].location.country
    
    // console.log(data)
//    .then(res => res.json())
//    .then(data => console.log(data.results[0].name.first))
}

getUser()

