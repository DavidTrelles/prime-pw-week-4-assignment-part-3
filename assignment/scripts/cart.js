console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addIt(item) {
    basket.push(item);
    return true;
} 

console.log("addit - should return true", addIt("apple"));
console.log("test - basket should be updated with an apple", `${basket}`);
addIt("pear");
addIt("banana");
function listItems() {
    for (let i=0;i<basket.length;i++) {
        console.log(basket[i]);
    }
}

console.log("items in basket should list here...")
listItems() //should list apple, pear, banana - it does

function empty(){
    basket=[];
}

empty()
console.log(`basket should now be empty, ${basket}`)
//function works

//stretch goals

const maxItems = 5

function isFull(){
    if (basket.length<maxItems){
        return false;
    } else {
        return true;
    }
}
console.log("test -is full, should return false", isFull());
addIt("dog");
addIt("pig");
addIt("house");
addIt("jet");
addIt("car");
console.log("test - isfull, should return true", isFull())

// function works

//reworking addIt for new stretch goal
function addIt2(item) {
    if (!isFull()) {
        basket.push(item);
        return true;
    } else {
        return false;
    }
}

console.log("test new add it function, should return false", addIt2("newCar"))

console.log("basket shouldn't contain newCar", basket)
function removeItem(item){
    if (basket.indexOf(item)===-1){
        return null;
    } else {
       return basket.splice(basket.indexOf(item),1)
    }
}
console.log("test remove item function, should remove pig", removeItem("pig"))
console.log("test remove item function should return null", removeItem("person"))
console.log("testing to see item was removed" + ` basket is now ${basket}`)