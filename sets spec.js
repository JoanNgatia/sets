//performs sets functions
var set = function(arr) {
    this.input = arr;
};

//set creation and edition
Set.prototype.add = function() {    //adds array to the set
    return this.input;
};

Set.prototype.size = function() {    //returns length of the set
    return this.input.length;
};

Set.prototype.remove = function(){    //removes all elements from the set
    return this.input.splice();
};

Set.prototype.diff = function(a){            //deletes specific element from the set
    return this.input.filter(function(i) {
        return a.indexOf(i) < 0;
    });
};

Set.prototype.keepIf = function(a){           //retains values within the set that are divisible by 2
    var temp = new set();
    for (var i = 0; i < this.length; i++){
    return this.length[i] % 2 === 0;
    }
    return temp;
};

//set operations
Set.prototype.union = function(a) {          //returns new set wtih all members of both sets
    var b = this.input.slice(0);
    a.forEach(function(i){
         if(b.indexOf(i) < 0){
            b.push(i);
            }
        });
    return b;
};

Set.prototype.intersection = function(arr) {      //returns new set with similar members between different sets
  var temp = [];
for(var i = 0; i<this.input.length; i++){
    for(var j=0; j<arr.length; j++){
        if(this.input[i] === arr[j]){
            temp.push(this.input[i]);
        }
    }
}
 return temp;
};

Set.prototype.complement = function(arr) {         //returns new set with members not present in both sets
  var temp = [];
for(var i = 0; i<this.input.length; i++){
    for(var j=0; j<arr.length; j++){
        if(this.input[i] !== arr[j]){
            temp.push(this.input.splice([i],1));
        }
    }
}
 return temp;
};

Set.prototype.subset = function(arr) {                //checks if the given set is a subset of another
    if(this.input.size > arr.size){
        return false;
    } else {
        for ( var member in this.input){
            if(!arr.contains){
                return true;
            }
        }
    }
    return true;
};

