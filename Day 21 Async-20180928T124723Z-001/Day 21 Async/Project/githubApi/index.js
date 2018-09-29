var userImg = document.querySelector('.user-img img')
var userNameArea = document.querySelector('.user-name');
var main = document.querySelector('.main');
var showUserName = document.querySelector('.show-user-name');
var userImg = document.querySelector('.user-img');
var followers = document.querySelector('.follower-data');
var followings = document.querySelector('.following-data');
var repo = document.querySelector('.repo-data');
var bio = document.querySelector('.bio-data'); 
var spinner = document.querySelector('.lds-ring');
var userObject;
spinner.style.display = 'none';
main.style.display = 'none';


function getDetails(userName) {
	fetch(`https://api.github.com/users/${userName}`).then(data =>  data.json()).then(object => {
		showUserName.innerHTML = object.login;
		followers.innerHTML = object.followers;
		followings.innerHTML = object.following;
		repo.innerHTML = object.public_repos;
		bio.innerHTML = object.bio;
		userImg.src = object.avatar_url;
		userNameArea.value = "";
		spinner.style.display = 'none';
	});

	
}

function action(e) {
	if(e.code == "Enter") {
	let userName = userNameArea.value;
	getDetails(userName);
	spinner.style.display = 'inline-block';
	main.style.display = 'grid';
	}   
}



userNameArea.addEventListener('keypress', action);
