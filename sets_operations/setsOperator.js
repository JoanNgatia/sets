//performs sets functions
var Set = function(arr) {
    this.input = arr;
};

//set creation and edition
Set.prototype.add = function() {    //adds array to the set
    return this.input;
};

Set.prototype.size = function() {    //returns length of the set
    return this.input.length;
};

Set.prototype.remove = function() {    //removes all elements from the set
    return this.input.splice();
};

Set.prototype.diff = function(a) {            //deletes specific element from the set
    return this.input.filter(function(i) {
        return a.indexOf(i) < 0;
    });
};

Set.prototype.show = function() {          //shows members of the set
    return this.input;
};

Set.prototype.isEmpty = function () {       //checks if given set is empty
    if (this.input.length < 0) {
    return true;
    }
    return false;
};

Set.prototype.keepIf = function(a) {           //retains values within the set that are divisible by 2
    var temp = new set();
    for (var i = 0; i < this.length; i++) {
    return this.length[i] % 2 === 0;
    }
    return temp;
};

//set operations
Set.prototype.union = function(a) {          //returns new set wtih all members of both sets
    var b = this.input.slice(0);
    a.forEach(function(i) {
         if(b.indexOf(i) < 0) {
            b.push(i);
            }
        });
    return b;
};

Set.prototype.intersection = function(arr) {      //returns new set with similar members between different sets
  var temp = [];
for(var i = 0; i < this.input.length; i++) {
    for(var j = 0; j < arr.length; j++) {
        if(this.input[i] === arr[j]) {
            temp.push(this.input[i]);
        }
    }
}
 return temp;
};

Set.prototype.complement = function(arr) {         //returns new set with members present in input but not in complemented set
  var temp = [];
  for(var i = 0, len = this.input.length; i < len; i++) {
        if(arr.indexOf(this.input[i]) === -1) {
            temp.push(this.input[i]);
        }
    }
  if(temp.length === this.input.length){
    return null;
  } else {
    return temp;
  }
};

Set.prototype.subset = function(arr) {                //checks if the given set is a subset of another
    if(this.input.size < arr.size) {
            if(!arr.contains) {
                return false;
            }
        }
    return true;
};

var x = new Set([1, 2, 3, 4]);
console.log(x.union([40,30]));
console.log(x.intersection([4, 6, 30]));
console.log(x.complement([1, 3]));
console.log(x.subset([3, 4, 1, 2, 10, 30]));