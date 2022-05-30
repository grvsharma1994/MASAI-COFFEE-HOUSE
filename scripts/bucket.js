// On clicking remove button the item should be removed from DOM as well as localstorage.
let items = JSON.parse(localStorage.getItem("coffee")) || [];
append(items)
console.log(items)
// function for getting TOTAL PRICE :
function getTotal(){
    let price = 0;
    for(let i = 0;i<items.length;i++){
        price += items[i].price;
    }
    return(price)
}
let total_amount = document.getElementById("total_amount")
total_amount.innerText = getTotal()
function append(data){
let bucket =  document.getElementById("bucket")
console.log(data)
data.forEach((el,i) => {
        let img = document.createElement("img")
        img.src = el.image;
        let title = document.createElement("p")
        title.innerText = el.title;
        let description = document.createElement("p")
        description.innerText = el.description;
        let price = document.createElement("p")
        price.innerText = el.price;
         let card = document.createElement("div")
        card.id = "card"
        let btn = document.createElement("button")
        btn.id = "remove_coffee"
        btn.innerText = "Remove Coffee"
        btn.addEventListener("click",function(){
           removeBucket(el);
        })
       let taken = document.createElement("div")
        taken.id = "taken"
        taken.append(title,description,price,btn)
         card.append(img,taken)
        bucket.append(card)
 });

}
function removeBucket(el){
    console.log(el)
let newItems = items.filter(ele =>{
       return ele.id != el.id
    })
    localStorage.setItem("coffee",JSON.stringify(newItems))
    console.log(items)
    window.location.reload();
}

function checkOut(){

    window.location.href = "checkout.html"

}
