// write your code here

//GLOBAL

const ramenMenu = document.querySelector("#ramen-menu");
const ramenDetails = document.querySelector("ramen-detail");

//STEP 0: START JSON - DONE

//STEP 1: Fetch JSON data

fetch("http://localhost:3000/ramens")
.then (response => response.json())
.then (ramenData => {

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
    ramenName.textContent = ramen.name;
    
    let restaurantName = document.querySelector(".restaurant");
    restaurantName.textContent = ramen.restaurant;

    let rating = document.querySelector("#rating-display");
    rating.textContent = ramen.rating;

    let comment = document.querySelector("#comment-display");
    comment.textContent = ramen.comment;

    //ADVANCED STEP 2: update rating + comment for ramen by submitting a form
    //—changes should be reflected on frontend 

    const editForm = document.querySelector("#edit-ramen");
    console.log(editForm);

    editForm.addEventListener("submit", (e) => {
        e.preventDefault();
    
        rating.textContent = e.target["new-rating"].value,
        comment.textContent = e.target["new-comment"].value,

        editForm.reset();

        }
    );
    
    
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


//ADVANCED STEP 1: see details for first ramen as soon as page loads
fetch("http://localhost:3000/ramens/1")
.then (response => response.json())
.then (firstRamenData => {

    let ramenImage = document.querySelector(".detail-image");
    ramenImage.src = firstRamenData.image;

    let ramenName = document.querySelector(".name");
    ramenName.innerText = firstRamenData.name;
    
    let restaurantName = document.querySelector(".restaurant");
    restaurantName.innerText = firstRamenData.restaurant;

    let rating = document.querySelector("#rating-display");
    rating.innerText = firstRamenData.rating;

    let comment = document.querySelector("#comment-display");
    comment.innerText = firstRamenData.comment;


    //ADVANCED STEP 2: update rating + comment for ramen by submitting a form
    //—changes should be reflected on frontend 

    const editForm = document.querySelector("#edit-ramen");
    console.log(editForm);

    editForm.addEventListener("submit", (e) => {
        e.preventDefault();
    
        rating.textContent = e.target["new-rating"].value,
        comment.textContent = e.target["new-comment"].value,

        editForm.reset();

        }
    );

})








//ADVANCED STEP 3: Delete a ramen
//—add delete button
//—should be removed from ramen-menu DIV + ramen-details