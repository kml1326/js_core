// 1. Make a function in the Array.prototype called suffle that suffles the given array
// eg: [1,3,6,7,9] => [3,7,6,1,9]

Array.prototype.suffle = function (array) {
var suffleArray = [];
   for(i=0;i<array.length;i++) {
   	var index = Math.floor(Math.random()*array.length);
    suffleArray.push(array[index])
  }
console.log(suffleArray);
}


//2. Create the constructor function for a Video object. The function should take in arguments of title (a string), 
// uploader (a string, the person who uploaded it), and seconds (a number, the duration), 
// and it should save them as properties of the object.

function Video(title, uploader, seconds) {
	title = this.title;
	uploader = this.uploader;
	seconds = this.seconds;
}

//Create a method on the Video object called watch(). When that method is called, it should use console.log
// to output a string like "You watched all 60 seconds of Otters Holding Hands!"

Video.prototype.watch = function () {
	console.log(`You watched all ${this.seconds} seconds of Otters Holding Hands!`);
}

//Instantiate a new Video object and call the watch() method on it.

var newVideo = new Video();
newVideo.watch();

//Instantiate another Video object with different constructor arguments.

var anotherVideo = new Video("javaScript", "komal", 60);
anotherVideo.watch();

//Use an array of data and a for loop to instantiate 5 Video objects.



//Make the watch method accept amounts of seconds to watch for, and call it with different amounts of seconds.

