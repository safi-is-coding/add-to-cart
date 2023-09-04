const container = document.querySelector(".container");
const shoppingList = document.querySelector("#shopping-list");
const inputEl = document.querySelector("#input-field");
const addBtn = document.querySelector(".add-button");

let totalItems = [];


addBtn.addEventListener("click", function() {

    let inputValue = inputEl.value;
    // console.log(inputValue);

    // totalItems.push(inputValue);
    // console.log(totalItems);

    addItems(inputValue);
    clearInputValue();

    // console.log(inputValue);

})

function clearInputValue() {
    inputEl.value = "";
}

function addItems(item) { 
    
    if(item == ""){
        // alert("You should write something");
        addBtn.className = "add-button wrong";
        addBtn.innerText = "Items can't be empty !!!";
    }
    else{
        totalItems.push(item);
        console.log(totalItems);
        addBtn.className = "add-button added";
        shoppingList.innerHTML += `<li>${totalItems[totalItems.length-1]}</li>`;
        addBtn.innerText = "Added to Cart";    
    }

}

inputEl.addEventListener("click", function(){
    addBtn.className = "add-button";
    addBtn.innerText = "ADD TO CART"; 
})

shoppingList.addEventListener("click",function(){
    //shoppingList.innerHTML = "";
    totalItems.pop();
    renderItems();
    console.log(totalItems);
});

function renderItems() {

    shoppingList.innerHTML = "";
    
    for(let i=0; i<totalItems.length; i++){
        shoppingList.innerHTML += `<li>${totalItems[i]}</li>`;
    }
    
};


