// 1. Make a function in the Array.prototype called suffle that suffles the given array
// eg: [1,3,6,7,9] => [3,7,6,1,9]

Array.prototype.shuffle = function () {
    var arrayLength = this.length - 1;

    while (arrayLength > 0) {
        var index = Math.floor(Math.random() * arrayLength + 1);
        var temp = this[arrayLength];
        this[arrayLength] = this[index];
        this[index] = temp;
        arrayLength--;
    }
    return this;
}



//2. Create the constructor function for a Video object. The function should take in arguments of title (a string), uploader (a string, the person who uploaded it), and seconds (a number, the duration), and it should save them as properties of the object.


//Create a method on the Video object called watch(). When that method is called, it should use console.log to output a string like "You watched all 60 seconds of Otters Holding Hands!"


//Instantiate a new Video object and call the watch() method on it.


//Instantiate another Video object with different constructor arguments.


//Use an array of data and a for loop to instantiate 5 Video objects.


//Make the watch method accept amounts of seconds to watch for, and call it with different amounts of seconds.