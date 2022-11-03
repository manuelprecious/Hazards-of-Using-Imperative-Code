Array.prototype.myMap = function(callback){
    let newArr = [];

    for (let i; i < this.length; i++){
        newArr.push(callback(this[i]))
    }

    return newArr;
}


let myArray = [0, 3, 4, 2]

let s_array = myArray.myMap(item=>{
    return item * 2;
});

console.log(s_array);