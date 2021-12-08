let itemList;
let newId = 1;

function setValueOf_List(input) {
    itemList = input;
    console.log({usersInput});
}
        
function createObjectIn_List() {
    let newObject = document.createElement("h3");
    let text = document.createTextNode(itemList);
    newObject.appendChild(text);
    newId = newId + 1;
    newObject.id = newId;
    document.getElementById("to-do-list").appendChild(newObject);
    newObject.onclick = removeItem(newObject);

}

function removeItem(listItem) {
    var removeItem = document.getElementById(listItem.id)
    console.log(removeItem);
    return function removeItem2() {
        removeItem.remove();
    }

}


//     var removeItem = document.getElementById(item.id);
//     console.log(removeItem);
//     removeItem.remove;
// }




//   function createNewObject() {
//     let newObject = document.createElement("H3")
//     newObject.id = 5;
// newObject.onclick = doThing(newObject);
//   }









// function doThing(ele){
 
//  console.log(ele.id);

// function addToArray() {
//     let myArray = document.getElementById("to-do-list");
//     let addArray = [];
//     addArray.push(myArray)
// }

// function print() {
//     console.log(myArray)
// }








