//2. Create the constructor function for a Video object. The function should take in arguments of title (a string), uploader (a string, the person who uploaded it), and seconds (a number, the duration), and it should save them as properties of the object.

class Video {
	constructor(title, uploader, seconds) {
	this.title = title;
	this.uploader = uploader;
	this.seconds = seconds;
}


//Create a method on the Video object called watch(). When that method is called, it should use console.log to output a string like "You watched all 60 seconds of Otters Holding Hands!"

	watch() {
	console.log(`You watched all ${this.seconds} seconds of ${this.title}!`);
}
}

//Instantiate a new Video object and call the watch() method on it.

var newObject = new Video("js", "komal", 60);
newObject.watch();

//Instantiate another Video object with different constructor arguments.

var newObject2 = new Video("css", "saim", 50);
newObject2.watch();

//Use an array of data and a for loop to instantiate 5 Video objects.

var arrayVideo = [{title:"css", uploader:"devtips", seconds:150}, {title:"sass", uploader:"designCourse", seconds:400}, {title:"js", uploader:"komal", seconds:60}, 
{title:"css", uploader:"saim", seconds:50}, {title:"webDevloper", uploader:"levelUp", seconds:90}]

for(i=0; i<array.length; i++) {
	var obj = "object"+i;
	var obj = new Video(arrayVideo[i].title, arrayVideo[i].uploader, arrayVideo[i].seconds);
}

//Make the watch method accept amounts of seconds to watch for, and call it with different amounts of seconds.

Video.prototype.watch = function (seconds){
	this.seconds = seconds;
}

//Define a new class called MusicVideo that extends Video. Its constructor should also take in an artist argument.

class MusicVideo extends Video{
	constructor(title, uploader, seconds, artist) {
		super(title, uploader, seconds);
		this.artist = artist;
	}
}

//Instantiate a new MusicVideo object and call the watch() method on it.

var newMusicObject = new MusicVideo("artist", "artist1", 40 , "artist3");
newMusicObject.watch();

//Add a method to MusicVideo called rockOut() that uses console.log to output a string like "You rocked out to La Bamba by Ritchie Valens!.

class MusicVideo extends Video{
	constructor(title, artist) {
		super(title);
		this.artist = artist;
	}
	rockOut() {
		console.log(`You rocked out to ${this.title} by ${this.artist}!`);
	}
}

//Use an array of data and a for loop to instantiate 5 MusicVideo objects.

var musicArray = [{title:"title1", artist:"artist1"}, {title:"title2", artist:"artist2"}, {title:"title3", artist:"artist3"}, {title:"title4", artist:"artist4"}, {title:"title5", artist:"artist5"}]
for(i=0; i<musicArray.length; i++) {
	var obj = "musicArray"+i;
	var obj = new MusicVideo(musicArray[i].title, musicArray[i].artist);
}


//Make an array of video data with both normal videos and music videos, loop through them, and decide on each one whether to make it a Video or MusicVideo object.

var arrayMusicVideo = [{title:"css", uploader:"devtips", seconds:150, artist:"artist1"}, {title:"sass", uploader:"designCourse", seconds:400, artist:"artist2"}, {title:"js", uploader:"komal", seconds:60, artist:"artist3"}, 
{title:"css", uploader:"saim", seconds:50, artist:"artist4"}, {title:"webDevloper", uploader:"levelUp", seconds:90, artist:"artist5"}]

for(i=0; i<arrayMusicVideo.length; i++) {
	var obj = "musicObject"+i;
	var obj = new Video(arrayMusicVideo[i].title, arrayMusicVideo[i].uploader, arrayMusicVideo[i].seconds, arrayMusicVideo[i].artist);
}

//Comment out the MusicVideo code, as you'll be working on changing Video first.

//Change the Video constructor function to accept a single object literal argument instead of multiple arguments.

class Video {
	constructor(argument) {
		this.title = argument.title;
		this.uploader = argument.uploader;
		this.seconds = argument.seconds;
	}
}

//Create a new Video object and call watch() on it.

var newVideo = new Video({title:"css", uploader:"devtips", seconds:150});
newVideo.watch();

//Make the arguments optional by giving them default values if they're not specified.

class Video{
	constructor(title = "css", uploader = "devtips", seconds = 160){
		this.title = title;
		this.uploader = uploader;
		this.seconds = seconds;
	}
}

//Change the MusicVideo constructor function to also accept a single object literal argument instead of multiple arguments. Test it by calling it at least once.

class MusicVideo extends Video {
	constructor(argument){
		super(argument);
		this.artist = argument.artist;
	}
}

var obj = new MusicVideo({title:"css", uploader:"devtips", seconds:150, artist:"artist1"});
obj.watch();

//make sure that if the object literal is missing some values, that default values are used instead of undefined
