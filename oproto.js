// creating myArray function for the prototype.

Array.prototype.myMap = function(callback){
    let newArr = [];

    for (let i = 0; i < this.length; i++){
        newArr.push(callback(this[i]));
    }
    return newArr;
}


let myArray = [3, 8, 1, 3]

let s_array = myArray.myMap(item=>{
    return item + 2;
});

console.log(s_array);