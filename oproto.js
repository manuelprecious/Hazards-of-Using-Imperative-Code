// Implementing my own Array.prototype.map() using Array.prototype.myMap()

Array.prototype.myMap = function(callback){
    let newArr = [];

    for (let i = 0; i < this.length; i++){
        newArr.push(callback(this[i]));
    }
    return newArr;
}


let myArray = [3, 8, 1, 5]

let s_array = myArray.myMap(item=>{
    return item + 2;
});

console.log(s_array);

// Implementing my own Array.prototype.filter() method using Array.prototype.myFilter();

Array.prototype.myFilter = function(callback){
    let newArr = []

    for (let i = 0; i < this.length; i++){
        
    }
}

let f_array = myArray.myFilter(item=>{
    return item < 4;
})