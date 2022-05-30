// Add the coffee to local storage with key "coffee"

let url = "https://masai-mock-api.herokuapp.com/coffee/menu";

let coffee = JSON.parse(localStorage.getItem("coffee")) || [];
finData()
getCount(coffee)
async function finData(){
    fetch(url)
    let res = await fetch(url)
    let products = await res.json();
    console.log(products.menu.data)
    append(products.menu.data)
}
function append(data){
    console.log(data)
    let menu = document.getElementById("menu")
data.forEach((el,i) => {
        let img = document.createElement("img")
        img.src = el.image;

        let title = document.createElement("p")
        title.innerText = el.title;
        let price = document.createElement("p")
        price.innerText = el.price;
       let card = document.createElement("div")
        card.id = "card"
        let btn = document.createElement("button")
        btn.id = "add_to_bucket"
        btn.innerText = "Add to Bucket"
        btn.addEventListener("click",function(){
           addedBucket(el);
        })
        let taken = document.createElement("div")
        taken.id = "taken"
        taken.append(title,price,btn)
        card.append(img,taken)
        menu.append(card)
});

}

function addedBucket(el){
    coffee.push(el)
    localStorage.setItem("coffee",JSON.stringify(coffee))
    window.location.reload();
}
// for DIV counting 
function getCount(coffe){
    let coffee_count = document.getElementById("coffee_count")
    coffee_count.innerText = coffe.length;
}
// function for go to bucket
function gotoBucket(){
    window.location.href = "bucket.html"
}
