// write your code here

//GLOBAL

const ramenMenu = document.querySelector("#ramen-menu");
const ramenDetails = document.querySelector("ramen-detail");

//STEP 0: START JSON - DONE

//STEP 1: Fetch JSON data

fetch("http://localhost:3000/ramens")
.then (response => response.json())
.then (ramenData => {

    console.log(ramenData);

    ramenData.forEach(ramen => {
        ramenAppearInNavigationAndDIV(ramen);
        
    })

})

//STEP 2:  Ramen images appear in ID #ramen-menu navigation

function ramenAppearInNavigationAndDIV (ramen){

    const image = document.createElement("img");
    image.src = ramen.image;

    ramenMenu.append(image);

    image.addEventListener("click", (e) => {
        ramenDetailsAppearInDiv(ramen);
    })

}

//STEP 3: click image in #ramen-menu to see info about the ramen 
//display inside #ramen-detail DIV (incl: name + restaurant)
//display rating + comment 

function ramenDetailsAppearInDiv (ramen){
    let ramenImage = document.querySelector(".detail-image");
    ramenImage.src = ramen.image;

    let ramenName = document.querySelector(".name");
    ramenName.innerText = ramen.name;
    
    let restaurantName = document.querySelector(".restaurant");
    restaurantName.innerText = ramen.restaurant;

    let rating = document.querySelector("#rating-display");
    rating.innerText = ramen.rating;

    let comment = document.querySelector("#comment-display");
    comment.innerText = ramen.comment;

}


//STEP 4: Create new ramen by submitting to form
//—appear in #ramen-menu div
//-appear in #ramen-detail Div 

const form = document.querySelector("#new-ramen");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newRamenSubmission = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value,
    }

    ramenAppearInNavigationAndDIV (newRamenSubmission);

    form.reset()
}
)